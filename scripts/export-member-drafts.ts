/**
 * Regenerates the human-readable review drafts in docs/content/members/
 * from src/data/people.ts, so there is one source of truth (the data file)
 * and a readable copy for members/BUM to sign off on before changes go
 * live. Run with `npm run export:drafts`. These .md files are tracked in
 * git (they contain no private data - already filtered out of people.ts);
 * the raw CVs they were extracted from stay out of git (see .gitignore).
 *
 * Every translatable field is shown in both languages (EN / FR) so a
 * reviewer can check the French wording against the English at a glance.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { people } from '../src/data/people.ts';
import { team } from '../src/data/team.ts';
import type { Localized } from '../src/data/types.ts';

const outDir = fileURLToPath(new URL('../docs/content/members/', import.meta.url));
mkdirSync(outDir, { recursive: true });

function bi(value: Localized<string> | null): string {
  if (!value) return '_Not provided._';
  return `EN: ${value.en}\n  FR: ${value.fr}`;
}

function biList(values: Localized<string>[]): string {
  if (!values.length) return '_Not provided._';
  return values.map((v) => `- EN: ${v.en}\n  FR: ${v.fr}`).join('\n');
}

function render(slug: string): string {
  const m = people[slug];
  const lines: string[] = [];
  lines.push(`# ${m.name}`);
  lines.push('');
  lines.push(`**Status:** ${m.isBum ? 'BUM (not one of the 7 member slots)' : 'Member'} · Slug: \`${m.slug}\``);
  lines.push('');
  if (m.specialty) lines.push(`**Specialty:**\n  ${bi(m.specialty)}`);
  lines.push('');
  lines.push('## Intro');
  lines.push(bi(m.intro));
  lines.push('');
  lines.push('## Education');
  if (m.education) {
    lines.push(`- Program:\n  ${bi(m.education.program)}`);
    lines.push(`- Institution: ${m.education.institution ?? '—'}`);
    lines.push(`- Years: ${m.education.years ?? '—'}`);
    if (m.education.degrees.length) lines.push(`- Degrees:\n${biList(m.education.degrees)}`);
    if (m.education.certifications.length) {
      lines.push('- Additional training:');
      lines.push(biList(m.education.certifications));
    }
  } else {
    lines.push('_Not provided._');
  }
  lines.push('');
  lines.push('## Skills');
  lines.push(`- Technical:\n${biList(m.skills.technical)}`);
  lines.push(`- Personal:\n${biList(m.skills.personal)}`);
  lines.push(
    `- Languages: ${
      m.skills.languages
        .map((l) => `${l.name.en}/${l.name.fr}${l.level ? ` (${l.level.en}/${l.level.fr})` : ''}`)
        .join(', ') || '—'
    }`
  );
  lines.push('');
  lines.push('## Interests');
  lines.push(biList(m.interests));
  lines.push('');
  lines.push('## Projects');
  if (m.projects.length) {
    for (const p of m.projects) {
      lines.push(`### ${p.title.en} / ${p.title.fr}${p.status ? ` (${p.status})` : ''}`);
      if (p.description) lines.push(bi(p.description));
      if (p.role) lines.push(`- Role:\n  ${bi(p.role)}`);
      if (p.tools.length) lines.push(`- Tools: ${p.tools.map((tool) => tool.en).join(', ')}`);
      if (p.result) lines.push(`- Result:\n  ${bi(p.result)}`);
      lines.push('');
    }
  } else {
    lines.push('_Not provided._');
  }
  lines.push('## Experience & activities');
  lines.push(
    m.experience.length
      ? m.experience.map((e) => `- **${e.organization}**${e.detail ? ` — ${bi(e.detail)}` : ''}`).join('\n')
      : '_Not provided._'
  );
  lines.push('');
  lines.push('## Goals');
  lines.push(`- Short term:\n  ${bi(m.goals.shortTerm)}`);
  lines.push(`- Long term:\n  ${bi(m.goals.longTerm)}`);
  lines.push('');
  lines.push('## Links');
  lines.push(`- Email: ${m.links.email ?? '—'}`);
  lines.push(`- LinkedIn: ${m.links.linkedin ?? '—'}`);
  lines.push(`- GitHub: ${m.links.github ?? '—'}`);
  lines.push('');
  lines.push('---');
  lines.push(
    '_Source: the "CV Portfolio Web" intake form this person submitted (docs/content/cvs/, not tracked in git), which included a checkbox consenting to publish the stated information. English content is trimmed to professional fields only; French content comes from the original French submission where that wording exists, not a back-translation. No phone numbers, addresses or ID numbers were collected in the original form. Review this file against the live page at /members/' +
      slug +
      '/ (and /fr/members/' +
      slug +
      '/) and flag anything to correct._'
  );
  return lines.join('\n') + '\n';
}

for (const slug of [...team.memberSlugs, team.bumSlug]) {
  writeFileSync(`${outDir}${slug}.md`, render(slug), 'utf-8');
  console.log(`wrote docs/content/members/${slug}.md`);
}
