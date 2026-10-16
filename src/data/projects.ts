import type { CollectiveProject } from './types';

/**
 * Collective BU4 projects. Only verified, cross-referenced work goes here.
 * The website project below is confirmed by two independent member
 * submissions (fedi-khouildi, rihab-trifi both named it in their intake
 * forms). Do not add a project here on a single unverified mention.
 */
export const projects: CollectiveProject[] = [
  {
    slug: 'bu4-portfolio-website',
    title: 'BU4 portfolio website',
    description:
      "A digital showcase presenting Business Unit 4's identity, members, skills and projects - the site you are currently viewing.",
    category: 'Web development',
    status: 'in-progress',
    memberSlugs: ['fedi-khouildi', 'rihab-trifi'],
    tools: ['Astro', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'GitHub'],
    outcome: null,
    link: null,
    image: null,
    imageAlt: null,
  },
];
