/**
 * Interactive "project book" on the Projects page - a closed cover that
 * opens into two-page spreads (one per project), turned with CSS 3D
 * transforms driven entirely by a single `currentIndex` + an `isOpen`
 * flag. Every navigation call just recomputes the target state for every
 * element from scratch, which is what makes rapid/interrupted clicks
 * safe: CSS transitions redirect smoothly from wherever they currently
 * are, there's no hand-rolled animation queue to get confused.
 *
 * "Previous" at chapter 1 closes the book rather than doing nothing, so
 * the left-arrow key, the corner-click buttons and the control-bar prev
 * button all close the book from the first chapter - see prev() below.
 *
 * Progressive enhancement: without this script (or without `html.js`),
 * every spread is in normal document flow and fully readable - see the
 * `html.js .project-book` gate in ProjectBook.astro's styles. This module
 * only arms the closed-book/page-turn illusion on top of that.
 */

import { sound } from './sound-manager';

export function initProjectBook() {
  const bookRoot = document.querySelector<HTMLElement>('.project-book');
  if (!bookRoot) return;
  const root: HTMLElement = bookRoot;

  const spreads = Array.from(root.querySelectorAll<HTMLElement>('[data-book-spread]'));
  if (!spreads.length) return;

  const total = spreads.length;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentIndex = 0;
  let isOpen = false;

  const counter = root.querySelector<HTMLElement>('[data-book-counter]');
  const prevBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-book-prev]'));
  const nextBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-book-next]'));
  const hint = root.querySelector<HTMLElement>('[data-book-hint]');
  const closeLabel = root.dataset.closeLabel ?? 'Close book';
  const prevLabel = root.dataset.prevLabel ?? 'Previous chapter';

  function render() {
    spreads.forEach((spread, i) => {
      spread.classList.toggle('is-turned', i < currentIndex);
      spread.classList.toggle('is-active', i === currentIndex);
      spread.setAttribute('aria-hidden', i === currentIndex ? 'false' : 'true');
      // Keep inert content out of the tab order and out of text selection
      // when it's not the visible spread, without removing it from the DOM.
      spread.toggleAttribute('inert', i !== currentIndex);
    });
    if (counter) counter.textContent = `${currentIndex + 1} / ${total}`;
    // prev is never dead: at chapter 1 it closes the book instead of
    // turning a page, so it stays enabled across the whole range.
    nextBtns.forEach((b) => (b.disabled = currentIndex === total - 1));
    prevBtns.forEach((b) => b.setAttribute('aria-label', currentIndex === 0 ? closeLabel : prevLabel));
    root.classList.toggle('is-open', isOpen);
  }

  function openBook() {
    if (isOpen) return;
    isOpen = true;
    sound.whoosh();
    hint?.classList.add('is-dismissed');
    render();
    const firstSpread = spreads[0];
    window.setTimeout(() => firstSpread?.querySelector('h3')?.scrollIntoView?.({ block: 'nearest' }), reduceMotion ? 0 : 450);
  }

  function closeBook() {
    if (!isOpen) return;
    isOpen = false;
    sound.click();
    render();
  }

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(total - 1, index));
    if (clamped === currentIndex) return;
    currentIndex = clamped;
    sound.whoosh();
    render();
  }

  function next() {
    if (currentIndex < total - 1) goTo(currentIndex + 1);
  }
  // At chapter 1, "previous" has nowhere to go - it closes the book
  // instead, which is also what lets the left-arrow key close it.
  function prev() {
    if (currentIndex > 0) goTo(currentIndex - 1);
    else closeBook();
  }

  root.querySelector<HTMLElement>('[data-book-cover]')?.addEventListener('click', openBook);
  root.querySelector<HTMLElement>('[data-book-cover]')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openBook();
    }
  });

  nextBtns.forEach((btn) => btn.addEventListener('click', next));
  prevBtns.forEach((btn) => btn.addEventListener('click', prev));

  document.addEventListener('keydown', (event) => {
    if (!isOpen) return;
    if (event.key === 'ArrowRight') next();
    else if (event.key === 'ArrowLeft') prev();
    else if (event.key === 'Escape') closeBook();
  });

  // Minimal swipe support - a horizontal drag past a small threshold turns
  // the page; anything more vertical than horizontal is left alone so it
  // doesn't fight normal page scrolling on touch devices.
  let touchStartX = 0;
  let touchStartY = 0;
  root.addEventListener(
    'touchstart',
    (event) => {
      const t = event.touches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    },
    { passive: true }
  );
  root.addEventListener(
    'touchend',
    (event) => {
      if (!isOpen) return;
      const t = event.changedTouches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (dx < 0) next();
      else prev();
    },
    { passive: true }
  );

  render();
}
