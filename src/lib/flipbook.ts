/**
 * Magazine flipbook on the Magazine page (see MagazineFlipbook.astro) -
 * StPageFlip (the `page-flip` package) wrapped with: lazy init once the
 * section scrolls into view, prev/next buttons, an aria-live page
 * indicator, left/right arrow keys while the flipbook is in view, and a
 * near-zero flip time under prefers-reduced-motion.
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
  const stageOrNull = root.querySelector<HTMLElement>('[data-flipbook-stage]');
  const viewportOrNull = root.querySelector<HTMLElement>('[data-flipbook-viewport]');
  const sizerOrNull = root.querySelector<HTMLElement>('.flipbook-sizer');
  const pagesJson = root.dataset.pages;
  if (!stageOrNull || !viewportOrNull || !sizerOrNull || !pagesJson) return;
  // Same hoisted-function narrowing quirk as `root` above.
  const stage: HTMLElement = stageOrNull;
  const viewport: HTMLElement = viewportOrNull;
  const sizer: HTMLElement = sizerOrNull;

  const pageUrls = JSON.parse(pagesJson) as string[];
  if (pageUrls.length < 2) return;

  const width = Number(root.dataset.width);
  const height = Number(root.dataset.height);
  const pageStatusTemplate = root.dataset.pageStatus ?? 'Page {current} of {total}';

  const prevBtn = root.querySelector<HTMLButtonElement>('[data-flipbook-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-flipbook-next]');
  const indicator = root.querySelector<HTMLElement>('[data-flipbook-indicator]');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let pageFlip: PageFlipInstance | null = null;
  // Arms the document-level arrow-key handler below only while the
  // flipbook is actually in view, so scrolling it into frame is enough to
  // swipe pages with the keyboard - no click-to-focus first - without
  // hijacking arrow keys used elsewhere on a long page once scrolled away.
  let isInView = false;

  function updateIndicator(current: number, total: number): void {
    if (!indicator) return;
    indicator.textContent = `${current} / ${total}`;
    indicator.setAttribute(
      'aria-label',
      pageStatusTemplate.replace('{current}', String(current)).replace('{total}', String(total))
    );
  }

  function clearCoverShift(wrapper: HTMLElement): void {
    wrapper.style.transform = '';
    viewport.style.width = '';
    sizer.style.width = '';
    sizer.style.marginLeft = '';
    root.classList.remove('is-cover-shifted');
  }

  /**
   * With showCover on, the cover/back-cover render alone on a canvas sized
   * for a full two-page spread - StPageFlip paints its unused half opaque
   * white, so half the "book" area shows as a blank box. There's no
   * setting for this, and shifting the canvas alone can't fully fix it
   * either: translating it by half a page width centers the *occupied*
   * half, but a sliver of the blank half still rides along into view
   * (they're pixels on the same rigid canvas). So this narrows the
   * viewport to exactly one page's width (clipping via overflow: hidden)
   * and slides the canvas sideways by a quarter of its own width so the
   * occupied half lands exactly inside that narrowed window, with the
   * blank half pushed entirely outside it.
   *
   * All three numbers (viewport width, sizer width/offset, canvas
   * translate) are computed here from a single measured pixel width and
   * applied as inline styles - not expressed as CSS percentages (e.g.
   * `width: 50%`, `margin-left: -50%`) - because that specific trick
   * leans on how a block wider than its containing block resolves auto
   * margins, a case engines have historically disagreed on. Plain
   * measured-pixel arithmetic has no such ambiguity. Only applies in
   * landscape/double-page mode - a single portrait page (phones, or a
   * real middle spread) already has no blank half to hide.
   */
  function updateCoverShift(): void {
    if (!pageFlip) return;
    const wrapper = stage.querySelector<HTMLElement>('.stf__wrapper');
    if (!wrapper) return;
    if (!wrapper.style.transition) {
      wrapper.style.transition = reduceMotion ? 'none' : 'transform 400ms ease';
    }

    if (pageFlip.getOrientation() !== 'landscape') {
      clearCoverShift(wrapper);
      return;
    }
    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();
    if (current !== 0 && current !== total - 1) {
      clearCoverShift(wrapper);
      return;
    }

    // Measured fresh against the CSS default (100%) each time, not
    // cached - "stretch" mode means this width changes with the window.
    viewport.style.width = '';
    sizer.style.width = '';
    sizer.style.marginLeft = '';
    const fullWidth = viewport.getBoundingClientRect().width;
    const halfWidth = fullWidth / 2;
    const quarterWidth = fullWidth / 4;

    viewport.style.width = `${halfWidth}px`;
    sizer.style.width = `${fullWidth}px`;
    sizer.style.marginLeft = `${-quarterWidth}px`;
    wrapper.style.transform = current === 0 ? `translateX(-${quarterWidth}px)` : `translateX(${quarterWidth}px)`;
    root.classList.add('is-cover-shifted');
  }

  async function init(): Promise<void> {
    if (pageFlip) return;
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
          isInView = entry.isIntersecting;
          if (entry.isIntersecting) init();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(root);
  } else {
    isInView = true;
    init();
  }

  prevBtn?.addEventListener('click', () => pageFlip?.flipPrev());
  nextBtn?.addEventListener('click', () => pageFlip?.flipNext());

  // Document-level (not just the stage) so scrolling the flipbook into
  // view is enough to swipe pages with the keyboard, same as
  // ProjectBook.astro/book.ts's own arrow-key handling - gated by
  // isInView so it doesn't hijack arrow keys used elsewhere on the page,
  // and skipped while typing in an unrelated text field.
  document.addEventListener('keydown', (event) => {
    if (!isInView || !pageFlip) return;
    const target = event.target as HTMLElement | null;
    const inTextField = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if (inTextField) return;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      pageFlip.flipNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      pageFlip.flipPrev();
    }
  });

  window.addEventListener('pagehide', () => {
    pageFlip?.destroy();
    pageFlip = null;
  });
}
