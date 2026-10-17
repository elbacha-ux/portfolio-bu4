import type { Award } from './types';
import { L } from './types.ts';

/**
 * BU4 Awards. Confirmed, team-picked "personality" awards - real photos,
 * real winners, nothing invented. See MISSING_CONTENT.md for how a new
 * category gets added or retired.
 */
export const awards: Award[] = [
  {
    slug: 'chill-guy',
    title: L('The Chill Guy Award', 'Le Prix du Mec Zen'),
    issuer: null,
    year: null,
    description: L(
      'For staying so calm, no matter what is going on around him.',
      'Pour rester si calme, peu importe ce qui se passe autour de lui.'
    ),
    recipientSlugs: ['ahmed-belgacem'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/chill-guy.jpg',
    icon: 'wave',
    status: 'confirmed',
  },
  {
    slug: 'guys-focus',
    title: L('The "Guys, Focus!" Award', 'Le Prix « Les Gars, Concentrez-vous ! »'),
    issuer: null,
    year: null,
    description: L(
      'For trying (valiantly) to bring the team back to business.',
      "Pour avoir tenté (vaillamment) de ramener l'équipe au travail."
    ),
    recipientSlugs: ['amena-aouichaoui'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/guys-focus.jpg',
    icon: 'target',
    status: 'confirmed',
  },
  {
    slug: 'editing-wizard',
    title: L('The Editing Wizard', 'Le Magicien du Montage'),
    issuer: null,
    year: null,
    description: L(
      'For standout skills turning raw footage into something sharable.',
      'Pour un talent remarquable à transformer des rushs bruts en contenu partageable.'
    ),
    recipientSlugs: ['fedi-khouildi'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/editing-wizard.jpg',
    icon: 'scissors',
    status: 'confirmed',
  },
  {
    slug: 'team-spirit',
    title: L('The Team Spirit Award', "Le prix de l'Esprit d'Équipe"),
    issuer: null,
    year: null,
    description: L(
      'For bringing the team back together and keeping things professional and serious when it counts.',
      "Pour avoir ressoudé l'équipe et gardé les choses professionnelles et sérieuses quand il le fallait."
    ),
    recipientSlugs: ['amena-aouichaoui', 'fedi-khouildi'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/team-spirit.jpg',
    icon: 'heart',
    status: 'confirmed',
  },
  {
    slug: 'pitch-master',
    title: L('The Pitch Master', 'La Reine du Pitch'),
    issuer: null,
    year: null,
    description: L(
      'For making any idea sound like the obvious next step.',
      'Pour rendre n’importe quelle idée évidente dès qu’elle en parle.'
    ),
    recipientSlugs: ['nour-lemjid'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/pitch-master.jpg',
    icon: 'megaphone',
    status: 'confirmed',
  },
  {
    slug: 'memory-keeper',
    title: L('The BU4 Memory Keeper', 'Le Gardien des Souvenirs de BU4'),
    issuer: null,
    year: null,
    description: L(
      'For making sure the moments are never forgotten.',
      'Pour veiller à ce que les moments ne soient jamais oubliés.'
    ),
    recipientSlugs: ['walid-ben-said'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/memory-keeper.jpg',
    icon: 'camera',
    status: 'confirmed',
  },
  {
    slug: 'chaotic-collaboration',
    title: L('The Chaotic Collaboration Award', 'Le Prix de la Collaboration Chaotique'),
    issuer: null,
    year: null,
    description: L(
      'Pure friction somehow producing results.',
      'Pure friction qui finit, on ne sait trop comment, par donner des résultats.'
    ),
    recipientSlugs: ['amena-aouichaoui', 'lina-ben-hadj-slama'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/chaotic-collaboration.jpg',
    icon: 'spark',
    status: 'confirmed',
  },
  {
    slug: 'strongest-connection',
    title: L('The Strongest Connection Award', 'Le Prix de la Connexion la Plus Forte'),
    issuer: null,
    year: null,
    description: L(
      'Their communication signal is always at 100% - zero buffering, unlimited interaction.',
      'Leur signal de communication est toujours au maximum : zéro coupure, interaction illimitée.'
    ),
    recipientSlugs: ['walid-ben-said', 'lina-ben-hadj-slama'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/strongest-connection.jpg',
    icon: 'signal',
    status: 'confirmed',
  },
  {
    slug: 'unnecessary-comments',
    title: L('The CEO of Unnecessary Comments', 'La PDG des Commentaires Inutiles'),
    issuer: null,
    year: null,
    description: L(
      'For the teammate who can turn any serious meeting into a comedy show.',
      "Pour la personne capable de transformer n'importe quelle réunion sérieuse en spectacle comique."
    ),
    recipientSlugs: ['rihab-trifi'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/unnecessary-comments.jpg',
    icon: 'laugh',
    status: 'confirmed',
  },
  {
    slug: 'perfect-chemistry',
    title: L('The Perfect Chemistry Award', "Le Prix de l'Alchimie Parfaite"),
    issuer: null,
    year: null,
    description: L(
      'Whatever the project, their ideas just react well together - instant results, no explosions.',
      "Quel que soit le projet, leurs idées réagissent toujours bien ensemble - des résultats immédiats, sans aucune explosion."
    ),
    recipientSlugs: ['amena-aouichaoui', 'fedi-khouildi'],
    evidenceUrl: null,
    image: '/portfolio-bu4/images/awards/perfect-chemistry.jpg',
    icon: 'flask',
    status: 'confirmed',
  },
];
