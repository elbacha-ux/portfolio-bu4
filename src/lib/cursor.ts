/**
 * Replaces the system cursor with a small dot that tracks the pointer
 * exactly and a softly trailing ring that grows over interactive elements.
 * Mouse/trackpad only (same hover:hover + pointer:fine gate as
 * tilt/spotlight/parallax) and skipped entirely under
 * prefers-reduced-motion, in which case the native cursor is left alone -
 * the `custom-cursor` class this adds is the only thing that hides it (see
 * global.css), so nothing here needs its own reduced-motion branching.
 */

const RING_LERP = 0.18;
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

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let ringX = targetX;
  let ringY = targetY;

  const place = (el: HTMLElement, x: number, y: number) => {
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };
  place(dot, targetX, targetY);
  place(ring, ringX, ringY);

  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    targetX = event.clientX;
    targetY = event.clientY;
    dot.classList.remove('is-hidden');
    ring.classList.remove('is-hidden');
    place(dot, targetX, targetY);
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

  function tick() {
    ringX += (targetX - ringX) * RING_LERP;
    ringY += (targetY - ringY) * RING_LERP;
    place(ring, ringX, ringY);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
