import type { CollectiveProject } from './types';
import { L } from './types.ts';

/**
 * Collective BU4 projects. Only verified, cross-referenced work goes here.
 * - bu4-portfolio-website: independently named by fedi-khouildi and
 *   rihab-trifi in their intake forms; credits all seven members since
 *   it's the team's shared portfolio site, not just the two who happened
 *   to mention it in their own CV.
 * - re-imaginelab-campaign: confirmed by the team to involve all seven
 *   members across video (script/execution/behind-the-scenes/editing),
 *   the campaign website, and customer-acquisition strategy.
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
    skills: [],
    outcome: null,
    link: null,
    image: null,
    imageAlt: null,
    videoUrl: null,
    documentsNote: null,
  },
  {
    slug: 're-imaginelab-campaign',
    title: L('Re-ImagineLab', 'Re-ImagineLab'),
    description: L(
      "A promotional campaign for Re-ImagineLab, built as a whole-team effort: script by Nour Lemjid, on-set execution by Amena Aouichaoui (who also designed the poster), behind-the-scenes footage by Walid Ben Said, video editing by Fedi Khouildi, the website by Lina Ben Hadj Slama and Ahmed Belgacem, and customer-acquisition strategy by Rihab Trifi.",
      "Une campagne promotionnelle pour Re-ImagineLab, menée par toute l'équipe : scénario par Nour Lemjid, exécution sur le tournage par Amena Aouichaoui (qui a aussi conçu l'affiche), images des coulisses par Walid Ben Said, montage vidéo par Fedi Khouildi, le site web par Lina Ben Hadj Slama et Ahmed Belgacem, et la stratégie d'acquisition de clients par Rihab Trifi."
    ),
    category: L('Campaign', 'Campagne'),
    status: 'completed',
    memberSlugs: [
      'ahmed-belgacem',
      'amena-aouichaoui',
      'fedi-khouildi',
      'lina-ben-hadj-slama',
      'nour-lemjid',
      'rihab-trifi',
      'walid-ben-said',
    ],
    tools: [],
    skills: [
      L('Video editing', 'Montage vidéo'),
      L('Shooting', 'Tournage'),
      L('Teamwork', "Travail d'équipe"),
      L('Creativity', 'Créativité'),
    ],
    outcome: null,
    link: 'https://ahmedbfg.github.io/Re-imagine-Lab/',
    image: null,
    imageAlt: null,
    videoUrl: null,
    documentsNote: L(
      "Rihab Trifi wrote the 12-month PR and partnerships strategy behind this campaign: four focus areas (press relations, content and social media, events and community, and partnerships), four target audiences (large companies, SMEs, schools and institutions, and media), and concrete 12-month goals - including qualified media mentions, published case studies, workshops and quote requests.",
      "Rihab Trifi a rédigé la stratégie de relations publiques et de partenariats sur 12 mois de cette campagne : quatre axes (relations presse, contenus et réseaux sociaux, événements et communauté, partenariats), quatre cibles (grandes entreprises, PME, écoles et institutions, médias), et des objectifs concrets à 12 mois - dont des retombées médias qualifiées, des études de cas publiées, des ateliers et des demandes de devis."
    ),
  },
];
