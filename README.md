# BU4 — Business Unit 4 website

The digital showcase for Business Unit 4, a seven-member team within **JEENISo**
(Junior Entreprise de l'École Nationale d'Ingénieurs de Sousse). Built with
[Astro](https://astro.build) + TypeScript, output as a fully static site for
GitHub Pages.

Live site (once deployed): https://elbacha-ux.github.io/portfolio-bu4/

## Tech stack

- **Astro 7** (static output) + TypeScript (strict)
- Plain CSS with custom properties (design tokens) — no CSS framework
- Self-hosted Montserrat variable font (the charter's required typeface)
- `@astrojs/sitemap` for `sitemap-index.xml`
- No backend, no database, no client-side framework — HTML/CSS with a
  small amount of vanilla JS for the mobile menu

## Prerequisites

- Node.js ≥ 22.22 (the repo was built and tested on Node 24)
- npm

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321/portfolio-bu4/
```

The site is configured with `base: '/portfolio-bu4'` in `astro.config.mjs`
(see [Deployment](#deployment-github-pages)), so local URLs include that
prefix too.

## Commands

| Command                  | Action                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `npm run dev`             | Start the dev server                                           |
| `npm run build`           | Build the static site to `./dist/`                              |
| `npm run preview`         | Preview the production build locally                            |
| `npm run check`           | Type-check `.astro`/`.ts` files (`astro check`)                 |
| `npm run validate`        | Content validation (see below)                                  |
| `npm run check:contrast`  | WCAG 2.2 AA contrast check on the design tokens                 |
| `npm run export:drafts`   | Regenerate `docs/content/members/*.md` review drafts from data  |
| `npm run verify`          | Runs validate + contrast check + type check + build, in order   |

Run `npm run verify` before every deploy/PR.

## Project structure

```
src/
  data/          # single source of truth for all content (typed)
    types.ts     # shared TS interfaces (Member, CollectiveProject, Award, ...)
    site.ts      # site name, JEENISo info, nav items, contact placeholder
    team.ts      # the 7 member slugs + the BUM slug
    people.ts    # all person records (7 members + Nader Hlel/BUM)
    projects.ts  # collective BU4 projects
    awards.ts    # BU4 Awards categories (draft until the team confirms)
    ui-strings.ts# every UI chrome string (for future i18n)
  components/    # reusable .astro components (Logo, MemberCard, AwardCard, ...)
  layouts/
    BaseLayout.astro   # <head>, header, footer, SEO meta
  pages/
    index.astro        # /
    about.astro         # /about/
    team/index.astro    # /team/
    members/[slug].astro# /members/<slug>/  (7 static pages)
    bum/index.astro      # /bum/
    projects/index.astro # /projects/
    awards/index.astro   # /awards/
    contact/index.astro  # /contact/
    404.astro
  styles/
    tokens.css   # design tokens verified against the brand charter
    global.css   # resets, base elements, buttons, cards, utilities
scripts/
  validate-content.ts      # build-time content integrity checks
  check-contrast.ts        # contrast checker for the token palette
  export-member-drafts.ts  # regenerates docs/content/members/*.md
public/
  fonts/         # self-hosted Montserrat (woff2, variable, OFL licensed)
  images/brand/  # logo + favicon assets (derived from the approved logo)
docs/
  BU4-SPEC.md         # brand findings + implementation decisions
  brand/              # the graphic charter PDF + approved logo (source assets)
  content/
    members/          # human-readable review drafts, generated from src/data/people.ts
    cvs/               # RAW CVs — kept out of git, see Privacy below
    photos/             # approved photos go here once supplied
    projects/            # supporting material for collective projects
MISSING_CONTENT.md  # everything still needed from the team before launch
```

## How to update content

Everything renders from `src/data/`. You should never need to touch a
component to add a member, project or award.

### Add or edit a member

1. Add/edit an entry in `src/data/people.ts` (type-checked against
   `src/data/types.ts` — unknown fields should be `null`, not invented).
2. If it's a new member, add their slug to `team.memberSlugs` in
   `src/data/team.ts` — the build fails unless there are **exactly 7**.
3. Run `npm run export:drafts` to refresh their human-readable review file
   in `docs/content/members/`.
4. Run `npm run validate` to confirm the data is internally consistent.

### Add a project

Add an entry to the `projects` array in `src/data/projects.ts`. Only add a
project here once it's genuinely a **collective BU4 project** (cross-checked
across more than one source) — individual academic/club projects belong on
that member's own `projects` array in `people.ts` instead.

### Manage awards

Edit `src/data/awards.ts`. An award is `status: 'draft'` until the team has
actually voted/confirmed a category and winner — only then set
`status: 'confirmed'` and add the winner's slug to `recipientSlugs`. The UI
never shows a recipient unless they're listed there.

### Replace a photo

1. Drop the approved image in `public/images/members/<slug>.jpg` (or
   `public/images/projects/...` for a project image).
2. Set `photo: '/portfolio-bu4/images/members/<slug>.jpg'` (and
   `photoAlt: '...'`) on that person's record in `people.ts`.
3. Members without a photo automatically get a neutral initials fallback —
   never a stock photo or a placeholder that looks like a real picture.

### Replace the logo

The approved BU4 logo lives at `docs/brand/logo/logo.jpeg`, mirrored to
`public/images/brand/bu4-logo.jpg` and used everywhere through the single
`src/components/Logo.astro` component. To replace it with a newer approved
file, overwrite `public/images/brand/bu4-logo.jpg` (and regenerate the
favicon — see the note in `docs/BU4-SPEC.md`). Never recolor, stretch,
rotate or add a background behind the logo — see the brand rules in
`docs/BU4-SPEC.md`.

### Configure the deployment base path

If the repo is ever renamed or moved to a different GitHub account, update
`site` and `base` in `astro.config.mjs`, and the `Sitemap:` line in
`public/robots.txt`.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys automatically on every
push to `main` (validate → contrast check → type check → build → deploy).

One-time setup in the GitHub repo settings:

1. **Settings → Pages → Source**: select "GitHub Actions".
2. Push to `main` — the workflow publishes to
   `https://elbacha-ux.github.io/portfolio-bu4/`.

## Privacy: keep private material out of git

The intake forms members filled out (`docs/content/cvs/`) are excluded via
`.gitignore` and must **stay that way** — only the filtered, approved
content extracted into `src/data/people.ts` and the human-readable drafts
in `docs/content/members/` should ever be committed.

**These raw CV files were committed to this repository's git history before
this restructuring** (commits `69143af` and `f0e7b41`), on a public GitHub
remote. This has not been fixed automatically — rewriting git history is a
destructive, hard-to-reverse operation and requires an explicit decision
from the team. See `MISSING_CONTENT.md` for details and options.

Before adding any new file under `docs/content/`, double-check it doesn't
contain a phone number, home address, ID number, or anything the person
didn't explicitly agree to publish.
