import fs from 'node:fs';
import path from 'node:path';

/** Convention: a member's CV lives at public/cv/<slug>.pdf. Checked for
 * real at build time, so a missing file can never produce a broken
 * download link - it's simply absent from the page. See README. */
export function cvPath(slug: string): string {
  return path.join(process.cwd(), 'public', 'cv', `${slug}.pdf`);
}

export function hasCv(slug: string): boolean {
  return fs.existsSync(cvPath(slug));
}

export function cvFileSize(slug: string): number {
  return fs.statSync(cvPath(slug)).size;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
