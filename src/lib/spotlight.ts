/**
 * Soft radial-gradient glow that follows the cursor on a handful of
 * "signature" dark sections (hero bands with the diagonal facet shapes).
 * Mouse/trackpad only - gated the same way as tilt.ts - and the overlay is
 * created in JS so no component needs its own glow markup, just the
 * `data-spotlight` attribute on an already-`position:relative` section.
 */

export function initSpotlight() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((section) => {
    const glow = document.createElement('div');
    glow.className = 'spotlight-glow';
    glow.setAttribute('aria-hidden', 'true');
    section.appendChild(glow);

    section.addEventListener('pointermove', (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.12), transparent 45%)`;
      glow.style.opacity = '1';
    });
    section.addEventListener('pointerleave', () => {
      glow.style.opacity = '0';
    });
  });
}
