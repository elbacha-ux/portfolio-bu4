/** Formats a Tunisian E.164 number (+216XXXXXXXX) for display, e.g.
 * "+21622211774" -> "+216 22 211 774". Returns null for anything else so
 * callers never show a malformed number. */
export function formatPhone(e164: string | null): string | null {
  if (!e164 || !/^\+216\d{8}$/.test(e164)) return e164 ? e164 : null;
  return `+${e164.slice(1, 4)} ${e164.slice(4, 6)} ${e164.slice(6, 9)} ${e164.slice(9)}`;
}
