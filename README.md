# BU4 — Business Unit 4 website

The digital showcase for Business Unit 4, a seven-member team within **JEENISo**
(Junior Entreprise de l'École Nationale d'Ingénieurs de Sousse). Built with
[Astro](https://astro.build) + TypeScript, output as a fully static site for
GitHub Pages.

Live site (once deployed): https://elbacha-ux.github.io/portfolio-bu4/

## Tech stack

- **Astro 7** (static output) + TypeScript (strict)
- Bilingual: English at `/`, French at `/fr/` — plain static routes per
  locale (see [Internationalization](#internationalization-enfr))
- Light/dark theme, respects OS preference, no flash of wrong theme
- Plain CSS with custom properties (design tokens) — no CSS framework
- Self-hosted Montserrat variable font (the charter's required typeface)
- Hand-rolled, dependency-free charts (plain CSS/SVG - no charting library)
- An optional, synthesized (Web Audio API) sound design system - no audio
  files or third-party audio library (see [Sound design](#sound-design))
- `@astrojs/sitemap` for `sitemap-index.xml`
- No backend, no database, no client-side framework — HTML/CSS with a
  small amount of vanilla JS (mobile menu, theme toggle, sound toggle,
  language persistence, scroll-reveal, project filters)

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
    types.ts     # shared TS interfaces + the Localized<T> = {en, fr} type and L() helper
    site.ts      # site name, JEENISo info, nav routes, contact placeholder
    team.ts      # the 7 member slugs + the BUM slug
    people.ts    # all person records (7 members + Nader Hlel/BUM), bilingual
    projects.ts  # collective BU4 projects, bilingual
    awards.ts    # BU4 Awards categories (draft until the team confirms), bilingual
  i18n/
    index.ts     # locale list, localePath()/swapLangInPath()/pick()/pickAll() helpers
    ui.ts        # every UI chrome / page-copy string, in English AND French
  lib/
    cv.ts               # public/cv/<slug>.pdf convention + fs existence/size check
    skillCategories.ts  # pure grouping of technical skills into categories (for charts)
    languageLevels.ts   # CEFR level -> ordinal rank (for the language chart)
    sound-manager.ts    # the sound system (see Sound design)
  components/    # reusable .astro components (Logo, MemberCard, AwardCard, ThemeToggle,
                 # SoundToggle, LanguageSwitcher, BarChart, DonutChart, CvSection, ...)
                 # - each takes a `lang` prop
  views/         # the actual page content, one file per route, lang-agnostic markup
    HomeView.astro, AboutView.astro, TeamView.astro, MemberView.astro,
    BumView.astro, ProjectsView.astro, AwardsView.astro, ContactView.astro
  layouts/
    BaseLayout.astro   # <head>, header, footer, SEO meta, theme/sound/lang blocking script
  pages/               # thin routes - each just imports a View and passes lang="en"
    index.astro, about.astro, team/, members/[slug].astro, bum/, projects/,
    awards/, contact/, 404.astro
    fr/                # same routes again, passing lang="fr" to the same Views
  styles/
    tokens.css   # design tokens verified against the brand charter + dark-theme overrides
    global.css   # resets, base elements, buttons, cards, utilities, scroll-reveal
scripts/
  validate-content.ts      # build-time content integrity checks (incl. EN+FR present)
  check-contrast.ts        # contrast checker for the token palette, light AND dark
  export-member-drafts.ts  # regenerates docs/content/members/*.md (EN/FR side by side)
public/
  fonts/         # self-hosted Montserrat (woff2, variable, OFL licensed)
  images/brand/  # logo + favicon assets (derived from the approved logo)
  images/members/# member portraits (optimized JPEGs)
  cv/            # member CV PDFs - public/cv/<slug>.pdf (see "Add a member's CV")
docs/
  BU4-SPEC.md         # brand findings + implementation decisions (incl. i18n/dark mode)
  brand/              # the graphic charter PDF + approved logo (source assets)
  content/
    members/          # human-readable review drafts, generated from src/data/people.ts
    cvs/               # RAW CVs — kept out of git, see Privacy below
    photos/             # original (pre-optimization) member photos, archived
    projects/            # supporting material for collective projects
MISSING_CONTENT.md  # everything still needed from the team before launch
```

## How to update content

Everything renders from `src/data/`. You should never need to touch a
component to add a member, project or award.

### Add or edit a member

1. Add/edit an entry in `src/data/people.ts` (type-checked against
   `src/data/types.ts` — unknown fields should be `null`, not invented).
   Every translatable field uses `L('English text', 'Texte français')`
   instead of a plain string — both languages are required.
2. If it's a new member, add their slug to `team.memberSlugs` in
   `src/data/team.ts` — the build fails unless there are **exactly 7**.
3. Run `npm run export:drafts` to refresh their human-readable review file
   (EN/FR side by side) in `docs/content/members/`.
4. Run `npm run validate` to confirm the data is internally consistent and
   that no `L(...)` call was left with an empty string.

### Add a project

Add an entry to the `projects` array in `src/data/projects.ts` (title,
description, category, tools and outcome all use `L(en, fr)`). Only add a
project here once it's genuinely a **collective BU4 project** (cross-checked
across more than one source) — individual academic/club projects belong on
that member's own `projects` array in `people.ts` instead.

### Manage awards

Edit `src/data/awards.ts`. An award is `status: 'draft'` until the team has
actually voted/confirmed a category and winner — only then set
`status: 'confirmed'` and add the winner's slug to `recipientSlugs`; the
`/awards/` page will then automatically show that member's own profile
photo on the card (via `image`, you can point it at a different photo
instead). The UI never shows a recipient unless they're listed there — an
unconfirmed award always renders a "winner to be announced" state, never a
placeholder photo.

### Replace a photo

1. Drop the approved image in `public/images/members/<slug>.jpg` (or
   `public/images/projects/...` for a project image). Convert HEIC/other
   formats to JPEG first (most browsers can't render HEIC) — e.g. with
   Python's `pillow-heif` + Pillow, resized to ~800px wide.
2. Set `photo: '/portfolio-bu4/images/members/<slug>.jpg'` on that person's
   record in `src/data/people.ts`. Alt text is generated automatically from
   the name in both languages — no separate field to fill in.
3. Members without a photo automatically get a neutral initials fallback —
   never a stock photo or a placeholder that looks like a real picture.

### Add a member's CV

1. Get the member's own, approved PDF résumé.
2. Save it as `public/cv/<slug>.pdf` (the same slugs used everywhere else,
   e.g. `public/cv/fedi-khouildi.pdf`).
3. That's it — nothing to edit in `src/data/`. `src/lib/cv.ts` checks for
   the file at build time (`fs.existsSync`); the member's page
   automatically shows the "My CV — take it with you" Download/View
   buttons (with the real file size) the next time the site builds. If the
   file isn't there, the page shows an elegant "CV coming soon" state
   instead — never a broken link.
4. **Get the member's explicit approval before adding their CV** - same
   privacy rule as everything else under `docs/content/`.

### Replace the logo

The approved BU4 logo lives at `docs/brand/logo/logo.jpeg` (untouched
original). The working asset is `public/images/brand/bu4-logo.png` - its
background has been made transparent (so it sits on the page in both
themes instead of a white box) - used everywhere through the single
`src/components/Logo.astro` component. To replace it with a newer approved
file, regenerate a transparent PNG from it and overwrite
`public/images/brand/bu4-logo.png` (and regenerate the favicon — see the
note in `docs/BU4-SPEC.md`). Never recolor, stretch, rotate, or otherwise
redraw the mark itself — see the brand rules in `docs/BU4-SPEC.md`.

### Configure the deployment base path

If the repo is ever renamed or moved to a different GitHub account, update
`site` and `base` in `astro.config.mjs`, and the `Sitemap:` line in
`public/robots.txt`.

## Internationalization (EN/FR)

English lives at the site root (`/`), French under `/fr/`. Every route
exists as a thin file in both `src/pages/` and `src/pages/fr/`, each just
rendering the same `src/views/*View.astro` with a different `lang` prop —
there is exactly one copy of each page's markup. To add a UI string, add it
to **both** the `en` and `fr` objects in `src/i18n/ui.ts` (TypeScript will
refuse to build if one is missing). To add a translatable data field, wrap
it in `L('English', 'Français')` from `src/data/types.ts` instead of a
plain string.

The visitor's language choice is remembered client-side
(`localStorage['bu4-theme']` for theme, `localStorage['bu4-lang']` for
language — GitHub Pages has no server to remember it for you) and a small
blocking script in `BaseLayout.astro` redirects a returning visitor to the
correct language version of whatever page they land on, and sets the
light/dark theme before the page paints. See `docs/BU4-SPEC.md` §4-5 for
the full mechanism.

## Sound design

Off by default; a visitor must click the speaker icon in the header (or
mobile menu) to turn interface sounds on - the choice is then remembered
via `localStorage['bu4-sound']`, the same mechanism as theme/language. The
BU4 sonic signature (About page, next to the slogan) is a separate,
always-available "play" action and isn't gated by that toggle, for the
same reason a `<audio controls>` player wouldn't be.

**No recorded audio files exist yet** for this project, so every sound -
the short UI tones and the signature - is synthesized at runtime with the
Web Audio API in `src/lib/sound-manager.ts` (a handful of short oscillator
tones; no audio files, no third-party audio library). This is the
documented fallback for when real assets aren't available yet, not a
placeholder that pretends to be finished.

**To add real recorded sounds later**: drop the files under
`public/sounds/` (create the folder) and swap the relevant `tone(...)` /
`sweep(...)` call in `src/lib/sound-manager.ts` for
`new Audio('/portfolio-bu4/sounds/<name>.mp3').play()`. The public API
(`sound.click()`, `sound.confirm()`, `sound.themeToggle()`, `sound.whoosh()`,
`sound.playSignature()`) stays the same, so no component needs to change.

To hook a new interaction up to a UI sound, add `data-sound="click"` (or
`"confirm"` / `"whoosh"`) to any button/link - a single delegated listener
in `BaseLayout.astro` handles the rest; no per-component wiring needed.

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
