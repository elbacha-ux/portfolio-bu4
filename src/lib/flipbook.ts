/**
 * Magazine flipbook on the Magazine page (see MagazineFlipbook.astro) -
 * StPageFlip (the `page-flip` package) wrapped with: lazy init once the
 * section scrolls into view, prev/next buttons, an aria-live page
 * indicator, left/right arrow keys while the flipbook has focus, a
 * fullscreen toggle, and a near-zero flip time under
 * prefers-reduced-motion.
 *
 * Progressive enhancement: without this script only the static cover image
 * and the <noscript> PDF link are shown - see the `html.js` gate in
 * MagazineFlipbook.astro's styles, same pattern as ProjectBook.astro/book.ts.
 */
import type { FlipSetting, PageFlip as PageFlipInstance } from 'page-flip';

export function initMagazineFlipbook(): void {
  const rootOrNull = document.querySelector<HTMLElement>('[data-flipbook]');
  if (!rootOrNull) return;
  // Narrowed once here for TS's sake - a `function` declaration (like
  // init() below) is hoisted, so control-flow narrowing of the outer
  // `const` doesn't carry into it the way it does for arrow functions.
  const root: HTMLElement = rootOrNull;
  const stage = root.querySelector<HTMLElement>('[data-flipbook-stage]');
  const pagesJson = root.dataset.pages;
  if (!stage || !pagesJson) return;

  const pageUrls = JSON.parse(pagesJson) as string[];
  if (pageUrls.length < 2) return;

  const width = Number(root.dataset.width);
  const height = Number(root.dataset.height);
  const pageStatusTemplate = root.dataset.pageStatus ?? 'Page {current} of {total}';
  const fullscreenEnterLabel = root.dataset.fullscreenEnter ?? 'View fullscreen';
  const fullscreenExitLabel = root.dataset.fullscreenExit ?? 'Exit fullscreen';

  const prevBtn = root.querySelector<HTMLButtonElement>('[data-flipbook-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-flipbook-next]');
  const fullscreenBtn = root.querySelector<HTMLButtonElement>('[data-flipbook-fullscreen]');
  const indicator = root.querySelector<HTMLElement>('[data-flipbook-indicator]');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let pageFlip: PageFlipInstance | null = null;

  function updateIndicator(current: number, total: number): void {
    if (!indicator) return;
    indicator.textContent = `${current} / ${total}`;
    indicator.setAttribute(
      'aria-label',
      pageStatusTemplate.replace('{current}', String(current)).replace('{total}', String(total))
    );
  }

  /**
   * With showCover on, the cover/back-cover render alone on a canvas sized
   * for a full two-page spread - StPageFlip paints its unused half opaque
   * white, so half the "book" area shows as a blank box. There's no
   * setting for this, and shifting the canvas alone can't fully fix it
   * either: translating it by half a page width centers the *occupied*
   * half, but a sliver of the blank half still rides along into view
   * (they're pixels on the same rigid canvas). So this does two things
   * together: the `.flipbook-viewport`/`.flipbook-stage` width swap (see
   * MagazineFlipbook.astro's `is-cover-shifted` styles) narrows the
   * visible window to exactly one page's width, and the wrapper's
   * translateX by that same half-page-width slides the occupied half
   * exactly into that window - between them the blank half ends up
   * entirely outside the clipped viewport. Only applies in
   * landscape/double-page mode - a single portrait page (phones, or a
   * real middle spread) already has no blank half to hide.
   */
  function updateCoverShift(): void {
    if (!pageFlip || !stage) return;
    const wrapper = stage.querySelector<HTMLElement>('.stf__wrapper');
    if (!wrapper) return;
    if (!wrapper.style.transition) {
      wrapper.style.transition = reduceMotion ? 'none' : 'transform 400ms ease';
    }

    if (pageFlip.getOrientation() !== 'landscape') {
      wrapper.style.transform = '';
      root.classList.remove('is-cover-shifted');
      return;
    }
    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();
    if (current === 0) {
      wrapper.style.transform = 'translateX(-25%)';
      root.classList.add('is-cover-shifted');
    } else if (current === total - 1) {
      wrapper.style.transform = 'translateX(25%)';
      root.classList.add('is-cover-shifted');
    } else {
      wrapper.style.transform = '';
      root.classList.remove('is-cover-shifted');
    }
  }

  async function init(): Promise<void> {
    if (pageFlip || !stage) return;
    const { PageFlip } = await import('page-flip');

    const settings: Partial<FlipSetting> = {
      width,
      height,
      size: 'stretch' as FlipSetting['size'],
      minWidth: 280,
      maxWidth: 1400,
      minHeight: Math.round((280 * height) / width),
      maxHeight: height,
      showCover: true,
      usePortrait: true,
      mobileScrollSupport: false,
      drawShadow: true,
      maxShadowOpacity: 0.5,
      flippingTime: reduceMotion ? 1 : 700,
    };

    const instance = new PageFlip(stage, settings);
    // Registered before loadFromImages() so the first 'init' firing (the
    // initial render) isn't missed.
    instance.on('init', updateCoverShift);
    instance.on('changeOrientation', updateCoverShift);
    instance.on('flip', (event) => {
      const current = typeof event.data === 'number' ? event.data : 0;
      updateIndicator(current + 1, instance.getPageCount());
      updateCoverShift();
    });

    instance.loadFromImages(pageUrls);
    pageFlip = instance;
    // Swap the static fallback cover for StPageFlip's own canvas, which it
    // appends alongside rather than replacing the stage's children.
    root.classList.add('is-active');

    updateIndicator(instance.getCurrentPageIndex() + 1, instance.getPageCount());
    updateCoverShift();
  }

  let resizeFrame = 0;
  window.addEventListener('resize', () => {
    if (!pageFlip) return;
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(updateCoverShift);
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            init();
            io.disconnect();
          }
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(root);
  } else {
    init();
  }

  prevBtn?.addEventListener('click', () => pageFlip?.flipPrev());
  nextBtn?.addEventListener('click', () => pageFlip?.flipNext());

  stage.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      pageFlip?.flipNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      pageFlip?.flipPrev();
    }
  });

  function isFullscreen(): boolean {
    return document.fullscreenElement === root;
  }

  function updateFullscreenLabel(): void {
    if (!fullscreenBtn) return;
    const active = isFullscreen();
    fullscreenBtn.setAttribute('aria-label', active ? fullscreenExitLabel : fullscreenEnterLabel);
    fullscreenBtn.classList.toggle('is-fullscreen', active);
  }

  fullscreenBtn?.addEventListener('click', () => {
    const action = isFullscreen() ? document.exitFullscreen() : root.requestFullscreen();
    action.catch(() => {
      /* Fullscreen API unavailable/denied - button stays a harmless no-op. */
    });
  });
  document.addEventListener('fullscreenchange', () => {
    updateFullscreenLabel();
    pageFlip?.update();
  });
  updateFullscreenLabel();

  window.addEventListener('pagehide', () => {
    pageFlip?.destroy();
    pageFlip = null;
  });
}
