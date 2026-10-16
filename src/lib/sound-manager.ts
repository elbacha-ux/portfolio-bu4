/**
 * Tiny, dependency-free sound manager. No audio files exist yet for this
 * project, so every sound is synthesized at runtime with the Web Audio API
 * (a handful of short oscillator tones) - this is explicitly the fallback
 * the brief asks for when real recorded assets aren't available. If the
 * team later records proper UI sounds, swap the tone() calls below for
 * `new Audio('/portfolio-bu4/sounds/<name>.mp3').play()` - the public API
 * (sound.click(), sound.confirm(), ...) would not need to change.
 *
 * - Disabled by default; only enabled once the visitor opts in (SoundToggle).
 * - The AudioContext is created lazily, on the first call after a user
 *   gesture, to respect browser autoplay policy.
 * - Every call is best-effort: a failure here never blocks navigation or
 *   any other interaction.
 */

const STORAGE_KEY = 'bu4-sound';
const MIN_GAP_MS = 70; // prevents a burst of sound from rapid repeated triggers

let ctx: AudioContext | null = null;
let enabled = false;
let lastPlay = 0;
let signatureNodes: OscillatorNode[] = [];

function getContext(): AudioContext | null {
  try {
    if (!ctx) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      ctx = new Ctor();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function throttled(): boolean {
  const now = performance.now();
  if (now - lastPlay < MIN_GAP_MS) return false;
  lastPlay = now;
  return true;
}

function tone(freq: number, duration: number, opts: { type?: OscillatorType; delay?: number; peak?: number } = {}) {
  const c = getContext();
  if (!c) return;
  const { type = 'sine', delay = 0, peak = 0.07 } = opts;
  try {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const start = c.currentTime + delay;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(peak, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  } catch {
    /* ignore - sound is never required */
  }
}

function sweep(fromFreq: number, toFreq: number, duration: number, peak = 0.05) {
  const c = getContext();
  if (!c) return;
  try {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = 'sine';
    const start = c.currentTime;
    osc.frequency.setValueAtTime(fromFreq, start);
    osc.frequency.exponentialRampToValueAtTime(toFreq, start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(peak, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(start);
    osc.stop(start + duration + 0.03);
  } catch {
    /* ignore */
  }
}

export const sound = {
  init() {
    try {
      enabled = localStorage.getItem(STORAGE_KEY) === 'on';
    } catch {
      enabled = false;
    }
  },
  isEnabled(): boolean {
    return enabled;
  },
  setEnabled(value: boolean) {
    enabled = value;
    try {
      localStorage.setItem(STORAGE_KEY, value ? 'on' : 'off');
    } catch {
      /* storage unavailable - preference just won't persist */
    }
    if (value) tone(700, 0.08, { peak: 0.06 });
  },
  /** A light tap - major nav buttons, filter chips. */
  click() {
    if (!enabled || !throttled()) return;
    tone(640, 0.07, { type: 'sine', peak: 0.055 });
  },
  /** Positive confirmation - copy-to-clipboard, CV download started. */
  confirm() {
    if (!enabled || !throttled()) return;
    tone(660, 0.09, { peak: 0.06 });
    tone(880, 0.11, { delay: 0.07, peak: 0.055 });
  },
  /** Theme switch. */
  themeToggle() {
    if (!enabled || !throttled()) return;
    tone(520, 0.1, { type: 'triangle', peak: 0.05 });
  },
  /** Expanding a case study / opening a disclosure. */
  whoosh() {
    if (!enabled || !throttled()) return;
    sweep(300, 560, 0.14);
  },
  /**
   * The BU4 sonic signature - a short original 4-note motif. Always plays
   * when its own dedicated button is pressed (that click is the explicit
   * user gesture this sound is gated on) regardless of the ambient sound
   * toggle, exactly like pressing play on an embedded audio player would.
   */
  playSignature(onEnd?: () => void) {
    const c = getContext();
    if (!c) {
      onEnd?.();
      return;
    }
    this.stopSignature();
    const notes: Array<[number, number, number]> = [
      [392, 0.22, 0], // G4
      [494, 0.22, 0.2], // B4
      [587, 0.22, 0.4], // D5
      [784, 0.5, 0.62], // G5
    ];
    for (const [freq, duration, delay] of notes) {
      try {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const start = c.currentTime + delay;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.09, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        osc.connect(gain).connect(c.destination);
        osc.start(start);
        osc.stop(start + duration + 0.03);
        signatureNodes.push(osc);
      } catch {
        /* ignore */
      }
    }
    const totalMs = (notes[notes.length - 1][1] + notes[notes.length - 1][2]) * 1000 + 60;
    window.setTimeout(() => {
      signatureNodes = [];
      onEnd?.();
    }, totalMs);
  },
  stopSignature() {
    for (const osc of signatureNodes) {
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
    }
    signatureNodes = [];
  },
};
