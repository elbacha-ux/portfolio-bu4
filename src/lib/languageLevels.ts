/**
 * Maps a member's own stated CEFR level (or "native"/"basic") to its
 * standard ordinal position on the CEFR scale (1-6). This is not an
 * invented proficiency score - it is the standard, publicly defined
 * ordering of the exact level the member already reported in their intake
 * form. Returns null when no level was stated, so the chart simply omits
 * that language rather than guessing.
 */
export function cefrRank(levelEn: string | null): number | null {
  if (!levelEn) return null;
  const s = levelEn.trim().toLowerCase();
  if (s === 'native' || s === 'c2') return 6;
  if (s === 'c1') return 5;
  if (s === 'b2') return 4;
  if (s === 'b1') return 3;
  if (s === 'a2') return 2;
  if (s === 'a1' || s === 'basic') return 1;
  return null;
}

export const CEFR_MAX = 6;
