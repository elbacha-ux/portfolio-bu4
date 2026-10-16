/**
 * Single source of truth for team composition. Exactly seven member slugs
 * are required - scripts/validate-content.ts fails the build otherwise.
 *
 * bumIsAmongSeven: the seven "CV Portfolio Web" intake forms submitted for
 * this site (docs/content/cvs/) do not include one from Nader Hlel, so he is
 * treated as BUM without being one of the seven member slots. This is an
 * inference from the available files, not a confirmed org chart - flagged
 * in MISSING_CONTENT.md for the team to confirm.
 */
export const team = {
  memberSlugs: [
    'ahmed-belgacem',
    'amena-aouichaoui',
    'fedi-khouildi',
    'lina-ben-hadj-slama',
    'nour-lemjid',
    'rihab-trifi',
    'walid-ben-said',
  ] as const,
  bumSlug: 'nader-hlel',
  bumIsAmongSeven: false as boolean | null,
};
