/**
 * Subtle 3D tilt for [data-tilt] cards - the card rotates a few degrees
 * toward the cursor, like a glossy product card. Mouse/trackpad only
 * (gated on `hover: hover` + `pointer: fine`, so touch devices get no
 * listeners at all) and skipped entirely under prefers-reduced-motion.
 *
 * Cards already lift on hover via CSS (`:hover { transform: translateY(-4px) }`
 * from the shared .card rule / component styles). Since this sets the
 * `transform` inline, it folds that same lift into the computed value so
 * the two effects compose instead of one clobbering the other - and
 * clearing the inline style on pointerleave hands control straight back
 * to the CSS :hover rule.
 */

const MAX_TILT_DEG = 7;
const LIFT_PX = -4;

export function initTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
  cards.forEach((card) => {
    card.style.transformStyle = 'preserve-3d';
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = px * MAX_TILT_DEG * 2;
      const rotateX = -py * MAX_TILT_DEG * 2;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${LIFT_PX}px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}
