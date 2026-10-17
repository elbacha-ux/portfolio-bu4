/**
 * Tiny, dependency-free confetti burst - a full-viewport canvas, a
 * couple hundred particles in the brand palette, gone in under two
 * seconds. No library, no asset files, consistent with the rest of this
 * project's "synthesize it" approach to sound and small interactions.
 */

const COLORS = ['#1f5fa8', '#71b4e2', '#0a1c2f', '#9aa7b2', '#5c6773'];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  life: number;
}

export function burstConfetti(originX?: number, originY?: number) {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = 'position:fixed;inset:0;z-index:200;pointer-events:none;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      canvas.remove();
      return;
    }

    const ox = originX ?? window.innerWidth / 2;
    const oy = originY ?? window.innerHeight / 3;
    const count = 140;
    const particles: Particle[] = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      return {
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        size: 5 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
      };
    });

    const gravity = 0.25;
    const drag = 0.985;
    let lastTs: number | null = null;
    let raf: number;

    function tick(ts: number) {
      const dt = lastTs === null ? 16 : Math.min(32, ts - lastTs);
      lastTs = ts;
      const step = dt / 16;
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;
      for (const p of particles) {
        p.life -= 0.012 * step;
        if (p.life <= 0) continue;
        alive = true;
        p.vx *= drag;
        p.vy = p.vy * drag + gravity * step;
        p.x += p.vx * step;
        p.y += p.vy * step;
        p.rotation += p.rotationSpeed * step;

        ctx!.save();
        ctx!.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
        ctx!.restore();
      }

      if (alive) {
        raf = requestAnimationFrame(tick);
      } else {
        canvas.remove();
      }
    }
    raf = requestAnimationFrame(tick);

    window.setTimeout(() => {
      cancelAnimationFrame(raf);
      canvas.remove();
    }, 3000);
  } catch {
    /* confetti is decorative only - never block the action it's celebrating */
  }
}
