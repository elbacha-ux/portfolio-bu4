import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/** Convention: a project's gallery photos live in
 * public/images/projects/<slug>/ - any number of files, any of the
 * extensions above. Checked for real at build time (fs.readdirSync), so a
 * missing or empty folder can never produce a broken image - the gallery
 * section simply shows a "coming soon" state instead. See README. */
export function projectGallery(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'projects', slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `images/projects/${slug}/${f}`);
}

/** Convention: a project's video lives at public/videos/<slug>.mp4. Checked
 * for real at build time - same pattern as src/lib/cv.ts. */
export function hasProjectVideo(slug: string): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', 'videos', `${slug}.mp4`));
}

export interface ProjectDocument {
  /** Original filename (minus extension) - used as-is for the link label,
   * never rephrased, so the site never claims a title the file didn't have. */
  label: string;
  path: string;
  sizeBytes: number;
}

/** Convention: supporting PDFs (strategy decks, briefs, reports) for a
 * project live in public/documents/projects/<slug>/ - any number of files.
 * Checked for real at build time, same pattern as the gallery above. */
export function projectDocuments(slug: string): ProjectDocument[] {
  const dir = path.join(process.cwd(), 'public', 'documents', 'projects', slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => path.extname(f).toLowerCase() === '.pdf')
    .sort()
    .map((f) => ({
      label: path.basename(f, path.extname(f)),
      path: `documents/projects/${slug}/${f}`,
      sizeBytes: fs.statSync(path.join(dir, f)).size,
    }));
}

/** Convention: optional preview images for one document live in
 * public/documents/projects/<slug>/<document-basename>-preview/ - e.g. a
 * few key pages exported from a PDF deck, so visitors get a feel for it
 * without downloading. Entirely optional - an empty/missing folder just
 * means no previews are shown. */
export function documentPreviewImages(slug: string, documentBasename: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'documents', 'projects', slug, `${documentBasename}-preview`);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `documents/projects/${slug}/${documentBasename}-preview/${f}`);
}
