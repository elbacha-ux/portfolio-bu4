import type { Award } from './types';
import { L } from './types.ts';

/**
 * BU4 Awards. All entries below are DRAFT category ideas only - nobody has
 * been confirmed as a winner. Do not add a recipientSlugs entry without an
 * explicit team decision; the UI will only ever render a recipient listed
 * here, and shows a "winner to be announced" state otherwise. See
 * MISSING_CONTENT.md for how to confirm a category and its winner.
 */
export const awards: Award[] = [
  {
    slug: 'five-minutes-away',
    title: L('The 5 Minutes Away Award', 'Le prix "5 minutes et j’arrive"'),
    issuer: null,
    year: null,
    description: L(
      'For the teammate who is reliably "almost there."',
      'Pour le ou la coéquipier·ère toujours "presque arrivé·e."'
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'clock',
    status: 'draft',
  },
  {
    slug: 'editing-wizard',
    title: L('The Editing Wizard', 'Le·la Magicien·ne du Montage'),
    issuer: null,
    year: null,
    description: L(
      'For standout skills turning raw footage into something sharable.',
      'Pour un talent remarquable à transformer des rushs bruts en contenu partageable.'
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'scissors',
    status: 'draft',
  },
  {
    slug: 'crisis-manager',
    title: L('The Crisis Manager', 'Le·la Gestionnaire de Crise'),
    issuer: null,
    year: null,
    description: L(
      'For staying calm and getting things back on track when plans fall apart.',
      'Pour garder son calme et remettre les choses sur les rails quand les plans tombent à l’eau.'
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'shield',
    status: 'draft',
  },
  {
    slug: 'pitch-master',
    title: L('The Pitch Master', 'Le·la Maître du Pitch'),
    issuer: null,
    year: null,
    description: L(
      'For making any idea sound like the obvious next step.',
      'Pour rendre n’importe quelle idée évidente dès qu’il·elle en parle.'
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'megaphone',
    status: 'draft',
  },
  {
    slug: 'detail-detective',
    title: L('The Detail Detective', 'Le·la Détective du Détail'),
    issuer: null,
    year: null,
    description: L(
      'For catching the one thing everyone else missed.',
      'Pour repérer la seule chose que tout le monde avait manquée.'
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'magnifier',
    status: 'draft',
  },
  {
    slug: 'silent-problem-solver',
    title: L('The Silent Problem Solver', 'Le·la Résolveur·se Silencieux·se de Problèmes'),
    issuer: null,
    year: null,
    description: L(
      'For fixing things quietly, without needing the credit.',
      'Pour réparer les choses discrètement, sans jamais réclamer les lauriers.'
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'wrench',
    status: 'draft',
  },
  {
    slug: 'team-spirit',
    title: L('The Team Spirit Award', "Le prix de l'Esprit d'Équipe"),
    issuer: null,
    year: null,
    description: L(
      'For the energy that keeps the team working well together.',
      "Pour l'énergie qui garde l'équipe soudée et efficace."
    ),
    recipientSlugs: [],
    evidenceUrl: null,
    image: null,
    icon: 'heart',
    status: 'draft',
  },
];
