/**
 * Replaces the system cursor with a small dot and a ring that both track
 * the pointer directly - the ring's short CSS transition (see
 * .cursor-ring in global.css) gives it just enough catch-up to feel soft
 * without visibly lagging behind fast mouse movement, which a per-frame JS
 * lerp did. Mouse/trackpad only (same hover:hover + pointer:fine gate as
 * tilt/spotlight/parallax) and skipped entirely under
 * prefers-reduced-motion, in which case the native cursor is left alone -
 * the `custom-cursor` class this adds is the only thing that hides it (see
 * global.css), so nothing here needs its own reduced-motion branching.
 */

const HOVER_SELECTOR = 'a, button, input, textarea, select, summary, [data-tilt], .btn, label';
const TEXT_FIELD_SELECTOR = 'input, textarea, [contenteditable="true"]';

export function initCursor() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.documentElement.classList.add('custom-cursor');

  const dot = document.createElement('div');
  dot.className = 'cursor-dot is-hidden';
  dot.setAttribute('aria-hidden', 'true');
  const ring = document.createElement('div');
  ring.className = 'cursor-ring is-hidden';
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(dot, ring);

  const place = (el: HTMLElement, x: number, y: number) => {
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };
  place(dot, window.innerWidth / 2, window.innerHeight / 2);
  place(ring, window.innerWidth / 2, window.innerHeight / 2);

  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    dot.classList.remove('is-hidden');
    ring.classList.remove('is-hidden');
    place(dot, event.clientX, event.clientY);
    place(ring, event.clientX, event.clientY);
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.add('is-hidden');
    ring.classList.add('is-hidden');
  });

  document.addEventListener('mouseover', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest<HTMLElement>(HOVER_SELECTOR)) {
      ring.classList.add('is-hovering');
    }
    if (target?.closest<HTMLElement>(TEXT_FIELD_SELECTOR)) {
      dot.classList.add('is-hidden');
      ring.classList.add('is-hidden');
    }
  });

  document.addEventListener('mouseout', (event) => {
    const target = event.target as HTMLElement | null;
    const related = (event as MouseEvent).relatedTarget as Node | null;
    const interactive = target?.closest<HTMLElement>(HOVER_SELECTOR);
    if (interactive && !(related && interactive.contains(related))) {
      ring.classList.remove('is-hovering');
    }
    const textField = target?.closest<HTMLElement>(TEXT_FIELD_SELECTOR);
    if (textField && !(related && textField.contains(related))) {
      dot.classList.remove('is-hidden');
      ring.classList.remove('is-hidden');
    }
  });
}
