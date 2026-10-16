import type { NavItem } from './types';

export const site = {
  name: 'BU4',
  fullName: 'Business Unit 4',
  parentOrg: 'JEENISo',
  parentOrgFull: "Junior Entreprise de l'École Nationale d'Ingénieurs de Sousse",
  parentOrgEmail: 'contact@jeeniso.com', // verified: docs/brand/Charte-Graphique-1.pdf footer
  tagline: 'Challenges are our business', // verified: docs/brand/logo/logo.jpeg
  description:
    'Business Unit 4 is a seven-member team within JEENISo, the Junior Enterprise of ENISo, working on engineering, embedded systems and web projects.',
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

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Team', href: '/team/' },
  { label: 'Awards', href: '/awards/' },
  { label: 'Contact', href: '/contact/' },
];
