/**
 * Very light scroll parallax for the decorative `.facet` shapes on the
 * signature hero sections - each one drifts at its own speed, in its own
 * `data-parallax="<speed>"` attribute, giving a sense of depth as the
 * section scrolls past. Purely decorative (aria-hidden shapes already),
 * skipped entirely under prefers-reduced-motion.
 */

export function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const els = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!els.length) return;

  let ticking = false;
  function update() {
    ticking = false;
    els.forEach((el) => {
      const speed = Number(el.dataset.parallax) || 0.1;
      const rect = el.getBoundingClientRect();
      // Only move while the section is anywhere near the viewport.
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      el.style.transform = `translateY(${rect.top * speed}px)`;
    });
  }
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
}
