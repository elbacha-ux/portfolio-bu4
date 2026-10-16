import type { CollectiveProject } from './types';
import { L } from './types.ts';

/**
 * Collective BU4 projects. Only verified, cross-referenced work goes here.
 * The website project below is the team's one confirmed collective
 * project - it was independently named by fedi-khouildi and rihab-trifi in
 * their intake forms, and by nature of being the team's shared portfolio
 * site, credits all seven BU4 members as contributors rather than only the
 * two who happened to mention it by name in their own CVs.
 */
export const projects: CollectiveProject[] = [
  {
    slug: 'bu4-portfolio-website',
    title: L('BU4 portfolio website', 'Site web portfolio de BU4'),
    description: L(
      "A digital showcase presenting Business Unit 4's identity, members, skills and projects - the site you are currently viewing, built collectively by the whole team.",
      "Une vitrine numérique présentant l'identité, les membres, les compétences et les projets de Business Unit 4 - le site que vous consultez actuellement, construit collectivement par toute l'équipe."
    ),
    category: L('Web development', 'Développement web'),
    status: 'in-progress',
    memberSlugs: [
      'ahmed-belgacem',
      'amena-aouichaoui',
      'fedi-khouildi',
      'lina-ben-hadj-slama',
      'nour-lemjid',
      'rihab-trifi',
      'walid-ben-said',
    ],
    tools: [L('Astro', 'Astro'), L('TypeScript', 'TypeScript'), L('HTML', 'HTML'), L('CSS', 'CSS'), L('JavaScript', 'JavaScript'), L('GitHub', 'GitHub')],
    outcome: null,
    link: null,
    image: null,
    imageAlt: null,
  },
  {
    slug: 're-imaginelab-promo-video',
    title: L('Re-ImagineLab promotional video', 'Vidéo promotionnelle Re-ImagineLab'),
    description: L(
      'A promotional video for Re-ImagineLab, produced as a team effort: script by Nour Lemjid, on-set execution by Amena Aouichaoui, behind-the-scenes footage by Walid Ben Said, and video editing by Fedi Khouildi. The video and Amena’s promotional poster will be added once ready.',
      'Une vidéo promotionnelle pour Re-ImagineLab, réalisée en équipe : scénario par Nour Lemjid, exécution sur le tournage par Amena Aouichaoui, images des coulisses par Walid Ben Said, et montage par Fedi Khouildi. La vidéo et l’affiche réalisée par Amena seront ajoutées dès qu’elles seront prêtes.'
    ),
    category: L('Video', 'Vidéo'),
    status: 'completed',
    memberSlugs: ['fedi-khouildi', 'nour-lemjid', 'amena-aouichaoui', 'walid-ben-said'],
    tools: [],
    outcome: null,
    link: null,
    image: null,
    imageAlt: null,
  },
];
