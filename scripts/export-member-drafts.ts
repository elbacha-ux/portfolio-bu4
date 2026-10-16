/**
 * Regenerates the human-readable review drafts in docs/content/members/
 * from src/data/people.ts, so there is one source of truth (the data file)
 * and a readable copy for members/BUM to sign off on before changes go
 * live. Run with `npm run export:drafts`. These .md files are tracked in
 * git (they contain no private data - already filtered out of people.ts);
 * the raw CVs they were extracted from stay out of git (see .gitignore).
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { people } from '../src/data/people.ts';
import { team } from '../src/data/team.ts';

const outDir = fileURLToPath(new URL('../docs/content/members/', import.meta.url));
mkdirSync(outDir, { recursive: true });

function render(slug: string): string {
  const m = people[slug];
  const lines: string[] = [];
  lines.push(`# ${m.name}`);
  lines.push('');
  lines.push(`**Status:** ${m.isBum ? 'BUM (not one of the 7 member slots)' : 'Member'} · Slug: \`${m.slug}\``);
  lines.push('');
  if (m.specialty) lines.push(`**Specialty:** ${m.specialty}`);
  lines.push('');
  lines.push('## Intro');
  lines.push(m.intro ?? '_Not provided._');
  lines.push('');
  lines.push('## Education');
  if (m.education) {
    lines.push(`- Program: ${m.education.program ?? '—'}`);
    lines.push(`- Institution: ${m.education.institution ?? '—'}`);
    lines.push(`- Years: ${m.education.years ?? '—'}`);
    if (m.education.degrees.length) lines.push(`- Degrees: ${m.education.degrees.join('; ')}`);
    if (m.education.certifications.length) {
      lines.push('- Additional training:');
      for (const c of m.education.certifications) lines.push(`  - ${c}`);
    }
  } else {
    lines.push('_Not provided._');
  }
  lines.push('');
  lines.push('## Skills');
  lines.push(`- Technical: ${m.skills.technical.join(', ') || '—'}`);
  lines.push(`- Personal: ${m.skills.personal.join(', ') || '—'}`);
  lines.push(`- Languages: ${m.skills.languages.map((l) => `${l.name}${l.level ? ` (${l.level})` : ''}`).join(', ') || '—'}`);
  lines.push('');
  lines.push('## Interests');
  lines.push(m.interests.length ? m.interests.map((i) => `- ${i}`).join('\n') : '_Not provided._');
  lines.push('');
  lines.push('## Projects');
  if (m.projects.length) {
    for (const p of m.projects) {
      lines.push(`### ${p.title}${p.status ? ` (${p.status})` : ''}`);
      if (p.description) lines.push(p.description);
      if (p.role) lines.push(`- Role: ${p.role}`);
      if (p.tools.length) lines.push(`- Tools: ${p.tools.join(', ')}`);
      if (p.result) lines.push(`- Result: ${p.result}`);
      lines.push('');
    }
  } else {
    lines.push('_Not provided._');
  }
  lines.push('## Experience & activities');
  lines.push(
    m.experience.length
      ? m.experience.map((e) => `- **${e.organization}**${e.detail ? ` — ${e.detail}` : ''}`).join('\n')
      : '_Not provided._'
  );
  lines.push('');
  lines.push('## Goals');
  lines.push(`- Short term: ${m.goals.shortTerm ?? '—'}`);
  lines.push(`- Long term: ${m.goals.longTerm ?? '—'}`);
  lines.push('');
  lines.push('## Links');
  lines.push(`- Email: ${m.links.email ?? '—'}`);
  lines.push(`- LinkedIn: ${m.links.linkedin ?? '—'}`);
  lines.push(`- GitHub: ${m.links.github ?? '—'}`);
  lines.push('');
  lines.push('---');
  lines.push(
    '_Source: the "CV Portfolio Web" intake form this person submitted (docs/content/cvs/, not tracked in git), which included a checkbox consenting to publish the stated information. Translated from French to English and trimmed to professional fields only - no phone numbers, addresses or ID numbers were collected in the original form. Review this file against the live page at /members/' +
      slug +
      '/ and flag anything to correct._'
  );
  return lines.join('\n') + '\n';
}

for (const slug of [...team.memberSlugs, team.bumSlug]) {
  writeFileSync(`${outDir}${slug}.md`, render(slug), 'utf-8');
  console.log(`wrote docs/content/members/${slug}.md`);
}
