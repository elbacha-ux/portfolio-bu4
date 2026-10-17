/**
 * Buttons pull a few pixels toward the cursor while hovered, then spring
 * back to rest on pointerleave - the spring-back rides on the `.btn` rule's
 * existing `transform` transition in global.css, so no new CSS is needed
 * here. Mouse/trackpad only and skipped under prefers-reduced-motion, same
 * gate as tilt.ts.
 */

const STRENGTH = 0.35;
const MAX_OFFSET = 10;

export function initMagnetic() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
    btn.addEventListener('pointermove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      const dx = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, x * STRENGTH));
      const dy = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, y * STRENGTH));
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });
}
