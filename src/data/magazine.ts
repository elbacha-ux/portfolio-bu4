/**
 * BU4/JEENISo magazine - teaser mode. The issue's own title and subtitle
 * are its real published French text, not UI chrome, so they stay fixed
 * strings rather than a Localized<T> pair (same reasoning as a proper
 * noun elsewhere in the data layer). pdfPath, podcast.audioPath and
 * pages are all empty for now - MagazineView.astro checks each one and
 * renders a "coming soon" state instead of a broken link/player/flipbook
 * when it's absent. No flipbook rendering exists yet; `pages` only
 * reserves the shape for later.
 */
export interface MagazinePodcast {
  /** Base-relative path (no leading slash), e.g. 'magazine/episode-1.mp3'.
   * The whole podcast block stays hidden until this is set, even though
   * episodeTitle/guest below are already confirmed. */
  audioPath: string | null;
  episodeTitle: string | null;
  guest: string | null;
}

export interface Magazine {
  title: string;
  subtitle: string;
  /** Base-relative path to the cover image (no leading slash). */
  cover: string;
  coverWidth: number;
  coverHeight: number;
  /** Base-relative path to the full issue PDF, once it exists. */
  pdfPath: string | null;
  podcast: MagazinePodcast;
  /** Base-relative paths to individual page images, for a future flipbook. */
  pages: string[];
}

export const magazine: Magazine = {
  title: 'Soleil en réserve',
  subtitle:
    'Le paradoxe solaire : pourquoi la Tunisie, pays du soleil, dépend encore largement du gaz pour son électricité.',
  cover: 'magazine/cover.png',
  coverWidth: 1529,
  coverHeight: 2048,
  pdfPath: null,
  podcast: {
    audioPath: null,
    episodeTitle: null,
    guest: "Walid Hassen, École Nationale d'Ingénieurs de Monastir",
  },
  pages: [],
};
