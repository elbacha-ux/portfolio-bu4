/**
 * BU4/JEENISo magazine - teaser mode. The issue's own title and subtitle
 * are its real published French text, not UI chrome, so they stay fixed
 * strings rather than a Localized<T> pair (same reasoning as a proper
 * noun elsewhere in the data layer) - but the editorial description below
 * is ordinary prose, like a CollectiveProject's description, so it's
 * translated and localized the normal way. pdfPath, podcast.audioPath and
 * pages are all empty for now - MagazineView.astro checks each one and
 * renders a "coming soon" state instead of a broken link/player/flipbook
 * when it's absent. No flipbook rendering exists yet; `pages` only
 * reserves the shape for later.
 */
import { L, type Localized } from './types';

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
  /** The issue's editorial overview, one entry per paragraph. */
  description: Localized<string>[];
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
  description: [
    L(
      "The magazine explores Tunisia's solar potential, the obstacles limiting its use, and the technological solutions that could speed up the energy transition. Through analysis, infographics and an expert interview, it asks how the country's exceptional sunshine can be turned into energy that's reliable, accessible and sustainable.",
      "Le magazine explore le potentiel solaire de la Tunisie, les obstacles qui limitent son exploitation et les solutions technologiques permettant d'accélérer la transition énergétique. À travers des analyses, des infographies et une interview d'expert, il cherche à comprendre comment transformer l'ensoleillement exceptionnel du pays en une énergie fiable, accessible et durable."
    ),
    L(
      'The project also comes with a podcast, "L\'énergie du possible" ("The energy of the possible"), which digs deeper into these questions through conversations with specialists.',
      "Le projet est également accompagné d'un podcast intitulé L'énergie du possible, qui approfondit ces enjeux à travers des échanges avec des spécialistes."
    ),
    L(
      'Our central question: does Tunisia have a sunshine problem, or an energy-system problem?',
      'Notre question centrale : La Tunisie a-t-elle un problème de soleil, ou un problème de système énergétique ?'
    ),
  ],
  cover: 'magazine/cover.png',
  coverWidth: 1529,
  coverHeight: 2048,
  pdfPath: null,
  podcast: {
    audioPath: null,
    episodeTitle: "L'énergie du possible",
    guest: "Walid Hassen, École Nationale d'Ingénieurs de Monastir",
  },
  pages: [],
};
