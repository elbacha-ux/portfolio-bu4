/**
 * WCAG 2.2 AA contrast check for every approved text/background pair used
 * across the site's design tokens (src/styles/tokens.css). Run with
 * `npm run check:contrast`. This guards the token values themselves - it
 * does not scan component markup, so a component that pairs two tokens
 * outside this approved list should add that pair here too.
 */

function srgbToLinear(c: number): number {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function luminance(hex: string): number {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

function contrast(a: string, b: string): number {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

const colors = {
  blue: '#3594d6',
  coolGray: '#615f5f',
  navy: '#1a4a6b',
  lightBlue: '#71b4e2',
  charcoal: '#3a3939',
  midGray: '#908f8f',
  navyDeep: '#143b56',
  white: '#ffffff',
  grayTint: '#f2f2f2',
  blueTint: '#ebf4fb',
  darkBg: '#14161a',
  darkSurface: '#1c1f24',
  darkText: '#eef1f4',
  darkTextMuted: '#aab1ba',
  darkBlueTint: '#152636',
};

interface Pair {
  name: string;
  fg: string;
  bg: string;
  minRatio: number;
  usage: string;
}

// Every pair actually used for text in the component library. Keep this in
// sync with src/styles/global.css and component <style> blocks.
const pairs: Pair[] = [
  { name: 'charcoal body text on white', fg: colors.charcoal, bg: colors.white, minRatio: 4.5, usage: 'body copy' },
  { name: 'cool-gray text on white', fg: colors.coolGray, bg: colors.white, minRatio: 4.5, usage: 'muted/secondary text' },
  { name: 'navy text on white', fg: colors.navy, bg: colors.white, minRatio: 4.5, usage: 'links, headings' },
  { name: 'navy text on gray-tint', fg: colors.navy, bg: colors.grayTint, minRatio: 4.5, usage: 'section-muted links' },
  { name: 'charcoal text on gray-tint', fg: colors.charcoal, bg: colors.grayTint, minRatio: 4.5, usage: 'section-muted body' },
  { name: 'white text on navy', fg: colors.white, bg: colors.navy, minRatio: 4.5, usage: 'BUM spotlight, closing CTA, buttons' },
  { name: 'white text on charcoal', fg: colors.white, bg: colors.charcoal, minRatio: 4.5, usage: 'footer' },
  { name: 'navy-deep text on white', fg: colors.navyDeep, bg: colors.white, minRatio: 4.5, usage: 'button hover state' },
  { name: 'navy text on blue-tint', fg: colors.navy, bg: colors.blueTint, minRatio: 4.5, usage: 'hero section, status tags' },
  // Large-text / icon / rule-only pairs (3:1 minimum per WCAG 2.2 AA for 24px+ or 18.7px+ bold).
  { name: 'blue large text on white', fg: colors.blue, bg: colors.white, minRatio: 3, usage: 'numeral motif, large headings only' },
  { name: 'white large text on blue', fg: colors.white, bg: colors.blue, minRatio: 3, usage: 'large text/icons on blue only' },

  // ---- Dark theme ([data-theme='dark'] / prefers-color-scheme: dark) ----
  { name: '[dark] text on dark-bg', fg: colors.darkText, bg: colors.darkBg, minRatio: 4.5, usage: 'body copy' },
  { name: '[dark] text-muted on dark-bg', fg: colors.darkTextMuted, bg: colors.darkBg, minRatio: 4.5, usage: 'muted/secondary text' },
  { name: '[dark] light-blue (accent) on dark-bg', fg: colors.lightBlue, bg: colors.darkBg, minRatio: 4.5, usage: 'links, headings' },
  { name: '[dark] text on dark-surface', fg: colors.darkText, bg: colors.darkSurface, minRatio: 4.5, usage: 'cards' },
  { name: '[dark] text-muted on dark-surface', fg: colors.darkTextMuted, bg: colors.darkSurface, minRatio: 4.5, usage: 'card secondary text' },
  { name: '[dark] light-blue on dark-blue-tint', fg: colors.lightBlue, bg: colors.darkBlueTint, minRatio: 4.5, usage: 'status tags, hero' },
  { name: '[dark] white text on navy', fg: colors.white, bg: colors.navy, minRatio: 4.5, usage: 'BUM spotlight, closing CTA (theme-invariant section)' },
  { name: '[dark] white text on charcoal', fg: colors.white, bg: colors.charcoal, minRatio: 4.5, usage: 'footer (theme-invariant section)' },
];

let failed = false;
console.log('Contrast check (WCAG 2.2 AA)\n');
for (const p of pairs) {
  const ratio = contrast(p.fg, p.bg);
  const ok = ratio >= p.minRatio;
  if (!ok) failed = true;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${ratio.toFixed(2)}:1  (need ${p.minRatio}:1)  ${p.name} - ${p.usage}`);
}

// Document decorative-only pairs that intentionally fail AA and must never
// carry text.
console.log('\nDecorative-only (never used for text):');
console.log(`  mid-gray on white: ${contrast(colors.midGray, colors.white).toFixed(2)}:1`);
console.log(`  light-blue on white: ${contrast(colors.lightBlue, colors.white).toFixed(2)}:1`);
console.log(`  blue on navy: ${contrast(colors.blue, colors.navy).toFixed(2)}:1`);

if (failed) {
  console.error('\nOne or more approved text/background pairs fail WCAG 2.2 AA.');
  process.exit(1);
} else {
  console.log('\nAll approved text/background pairs pass WCAG 2.2 AA.');
}
