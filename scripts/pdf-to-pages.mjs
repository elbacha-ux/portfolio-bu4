/**
 * Renders every page of public/magazine/magazine.pdf to a fixed 1800x2400
 * (3:4) .webp in public/magazine/pages/ (page-01.webp, page-02.webp, ...),
 * writes src/data/magazine-pages.json (file names + page pixel size) for
 * the flipbook, and copies page 1 to public/magazine/cover.webp so the
 * site's cover image always matches whatever is actually in the PDF. Run
 * with `npm run pages` whenever magazine.pdf changes.
 *
 * Each page is rendered at SUPERSAMPLE x the target size and then
 * downsampled to the exact 1800x2400 with sharp's Lanczos3 resampling -
 * sharper edges and cleaner anti-aliasing on text/vector content than
 * rendering directly at the target resolution. The source PDF's page
 * ratio is already ~3:4, so the resize to an exact 1800x2400 is an
 * imperceptible sub-percent stretch, not a crop.
 *
 * No system dependencies (no poppler/pdftoppm): pdfjs-dist renders pages
 * via @napi-rs/canvas (prebuilt binaries, works on Windows out of the box),
 * and sharp handles the downsample + .webp encode.
 */
import { createCanvas } from '@napi-rs/canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const TARGET_WIDTH = 1800;
const TARGET_HEIGHT = 2400;
const SUPERSAMPLE = 2;
const WEBP_QUALITY = 92;

const root = fileURLToPath(new URL('..', import.meta.url));
const pdfPath = new URL('../public/magazine/magazine.pdf', import.meta.url);
const pagesDir = new URL('../public/magazine/pages/', import.meta.url);
const coverPath = new URL('../public/magazine/cover.webp', import.meta.url);
const dataPath = new URL('../src/data/magazine-pages.json', import.meta.url);

// pdfjs-dist resolves its worker via dynamic import() - on Windows that
// needs a real file:// URL string, not a raw "C:\..." path.
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
  import.meta.url
).href;

mkdirSync(pagesDir, { recursive: true });

// Delete stale pages from earlier runs (a shorter PDF would otherwise leave
// orphaned page-NN.webp files past the new page count).
for (const entry of readdirSync(pagesDir)) {
  if (/^page-\d+\.webp$/.test(entry)) rmSync(new URL(entry, pagesDir));
}

const data = new Uint8Array(readFileSync(pdfPath));
const doc = await pdfjsLib.getDocument({ data, isEvalSupported: false }).promise;
console.log(`magazine.pdf: ${doc.numPages} pages`);

const pageFiles = [];

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const baseViewport = page.getViewport({ scale: 1 });
  const scale = (TARGET_WIDTH * SUPERSAMPLE) / baseViewport.width;
  const viewport = page.getViewport({ scale });
  const renderWidth = Math.round(viewport.width);
  const renderHeight = Math.round(viewport.height);

  const canvas = createCanvas(renderWidth, renderHeight);
  const ctx = canvas.getContext('2d');
  await page.render({ canvasContext: ctx, viewport, canvas }).promise;
  const png = canvas.toBuffer('image/png');
  const resized = sharp(png).resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: 'fill' });

  const fileName = `page-${String(i).padStart(2, '0')}.webp`;
  await resized.clone().webp({ quality: WEBP_QUALITY }).toFile(fileURLToPath(new URL(fileName, pagesDir)));
  pageFiles.push(fileName);
  console.log(`  rendered ${fileName} (${TARGET_WIDTH}x${TARGET_HEIGHT})`);

  if (i === 1) {
    await resized.clone().webp({ quality: WEBP_QUALITY }).toFile(fileURLToPath(coverPath));
    console.log('  copied page 1 -> public/magazine/cover.webp');
  }
  page.cleanup();
}

const manifest = {
  pages: pageFiles,
  width: TARGET_WIDTH,
  height: TARGET_HEIGHT,
  ratio: TARGET_WIDTH / TARGET_HEIGHT,
};
writeFileSync(dataPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`wrote ${fileURLToPath(dataPath).replace(root, '')}`);
