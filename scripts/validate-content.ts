/**
 * Build-time content validation. Run with `npm run validate`.
 * Fails (non-zero exit) on any structural problem described in
 * docs/BU4-SPEC.md so a bad data edit can never reach a deploy.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { people } from '../src/data/people.ts';
import { team } from '../src/data/team.ts';
import { projects } from '../src/data/projects.ts';
import { awards } from '../src/data/awards.ts';

const errors: string[] = [];
const warnings: string[] = [];

// 1. Exactly seven unique member slugs.
const slugSet: Set<string> = new Set(team.memberSlugs);
if (team.memberSlugs.length !== 7) {
  errors.push(`team.memberSlugs must contain exactly 7 entries, found ${team.memberSlugs.length}.`);
}
if (slugSet.size !== team.memberSlugs.length) {
  errors.push('team.memberSlugs contains duplicate slugs.');
}

// 2. Every member slug has a record, and no person appears twice by normalized name.
const nameSeen = new Map<string, string>();
for (const slug of team.memberSlugs) {
  const member = people[slug];
  if (!member) {
    errors.push(`Member slug "${slug}" has no record in src/data/people.ts.`);
    continue;
  }
  if (member.slug !== slug) {
    errors.push(`Member record for "${slug}" has mismatched slug field "${member.slug}".`);
  }
  const normalized = member.name.trim().toLowerCase().replace(/\s+/g, ' ');
  if (nameSeen.has(normalized)) {
    errors.push(`Duplicate person detected: "${member.name}" appears as both "${nameSeen.get(normalized)}" and "${slug}".`);
  } else {
    nameSeen.set(normalized, slug);
  }
  if (!member.name.trim()) {
    errors.push(`Member "${slug}" has an empty name.`);
  }
}

// 3. BUM record exists, is flagged isBum, and (if the team confirms he's one
//    of the seven) is not double-counted as a separate slot.
const bum = people[team.bumSlug];
if (!bum) {
  errors.push(`team.bumSlug "${team.bumSlug}" has no record in src/data/people.ts.`);
} else if (!bum.isBum) {
  errors.push(`Person "${team.bumSlug}" is referenced as BUM but isBum is not true.`);
}
if (team.bumIsAmongSeven === true && !slugSet.has(team.bumSlug)) {
  errors.push('team.bumIsAmongSeven is true but bumSlug is not in memberSlugs.');
}
if (team.bumIsAmongSeven === false && slugSet.has(team.bumSlug)) {
  errors.push('team.bumIsAmongSeven is false but bumSlug is also listed in memberSlugs (would create an 8th slot).');
}

// 4. No other person record is accidentally marked isBum.
for (const [slug, person] of Object.entries(people)) {
  if (person.isBum && slug !== team.bumSlug) {
    errors.push(`Person "${slug}" is marked isBum but is not team.bumSlug.`);
  }
}

// 5. Collective projects only reference real member slugs.
for (const project of projects) {
  for (const memberSlug of project.memberSlugs) {
    if (!people[memberSlug]) {
      errors.push(`Project "${project.slug}" references unknown member slug "${memberSlug}".`);
    }
  }
}
const projectSlugs = new Set<string>();
for (const project of projects) {
  if (projectSlugs.has(project.slug)) errors.push(`Duplicate project slug "${project.slug}".`);
  projectSlugs.add(project.slug);
}

// 6. Awards: recipients must be real member slugs; confirmed awards should
//    have at least a title (already required by the type) - just check refs.
const awardSlugs = new Set<string>();
for (const award of awards) {
  if (awardSlugs.has(award.slug)) errors.push(`Duplicate award slug "${award.slug}".`);
  awardSlugs.add(award.slug);
  for (const recipientSlug of award.recipientSlugs) {
    if (!people[recipientSlug]) {
      errors.push(`Award "${award.slug}" references unknown recipient slug "${recipientSlug}".`);
    }
  }
  if (award.status === 'draft' && award.recipientSlugs.length > 0) {
    warnings.push(`Award "${award.slug}" is draft but already lists recipients - confirm before publishing.`);
  }
}

// 7. Every Localized<string> value (anywhere in people/projects/awards) has
//    non-empty English AND French text - catches a missed translation.
function isLocalizedPair(value: unknown): value is { en: string; fr: string } {
  return (
    !!value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    typeof (value as Record<string, unknown>).en === 'string' &&
    typeof (value as Record<string, unknown>).fr === 'string' &&
    Object.keys(value as object).length === 2
  );
}

function walkForLocalized(value: unknown, path: string) {
  if (value === null || value === undefined) return;
  if (isLocalizedPair(value)) {
    if (!value.en.trim()) errors.push(`Missing English text at ${path}.`);
    if (!value.fr.trim()) errors.push(`Missing French text at ${path}.`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkForLocalized(item, `${path}[${i}]`));
    return;
  }
  if (typeof value === 'object') {
    for (const [key, v] of Object.entries(value)) {
      walkForLocalized(v, `${path}.${key}`);
    }
  }
}

walkForLocalized(people, 'people');
walkForLocalized(projects, 'projects');
walkForLocalized(awards, 'awards');

// 8. Private source material must never be shipped.
const repoRoot = fileURLToPath(new URL('..', import.meta.url));
if (existsSync(`${repoRoot}public/docs`) || existsSync(`${repoRoot}dist/docs`)) {
  errors.push('A docs/ folder was found under public/ or dist/ - private source material must never be published.');
}

// ---- Report ----
if (warnings.length) {
  console.warn(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.warn(`  ! ${w}`);
}

if (errors.length) {
  console.error(`\n${errors.length} content validation error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error('');
  process.exit(1);
} else {
  console.log(`Content validation passed: 7 members, BUM "${bum?.name}", ${projects.length} project(s), ${awards.length} award categor${awards.length === 1 ? 'y' : 'ies'}.`);
}
