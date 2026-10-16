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
