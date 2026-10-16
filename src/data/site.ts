import { L } from './types.ts';

export const site = {
  name: 'BU4',
  fullName: 'Business Unit 4',
  parentOrg: 'JEENISo',
  parentOrgFull: "Junior Entreprise de l'École Nationale d'Ingénieurs de Sousse",
  parentOrgEmail: 'contact@jeeniso.com', // verified: docs/brand/Charte-Graphique-1.pdf footer
  tagline: 'Challenges are our business', // verified: docs/brand/logo/logo.jpeg
  description: L(
    'Business Unit 4 is a seven-member team within JEENISo, the Junior Enterprise of ENISo, working on engineering, embedded systems and web projects.',
    "Business Unit 4 est une équipe de sept membres au sein de JEENISo, la Junior Entreprise de l'ENISo, qui travaille sur des projets d'ingénierie, de systèmes embarqués et de développement web."
  ),
  /**
   * No official BU4 contact channel was confirmed for this site at build
   * time. Replace with a real address before launch - see MISSING_CONTENT.md.
   */
  contactEmail: null as string | null,
  socials: {
    linkedin: null as string | null,
    instagram: null as string | null,
    facebook: null as string | null,
  },
};

/** Route paths are locale-independent (relative to a locale root); labels
 * come from src/i18n/ui.ts so the nav doesn't need a second data file. */
export const navRoutes = [
  { key: 'home', href: '' },
  { key: 'about', href: 'about/' },
  { key: 'projects', href: 'projects/' },
  { key: 'team', href: 'team/' },
  { key: 'awards', href: 'awards/' },
  { key: 'contact', href: 'contact/' },
] as const;
