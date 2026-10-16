# BU4 website — implementation spec

This replaces the earlier instruction-only version of this file (preserved
in git history at commit `16981dd` and before). It now documents what was
actually built, what's verified against source material, and what's still
an open decision.

## 1. Verified brand rules (docs/brand/Charte-Graphique-1.pdf)

Source: *JEENISo Identity Manual, Edition 1, 03.2018*, 25 pages (rendered
with PyMuPDF since no `pdftoppm`/poppler was available in this environment;
every color/type page was visually inspected, not just text-extracted).

### Colors — verified exact values (section 2.1/2.2)

| Token | Hex | Pantone | Role |
|---|---|---|---|
| `--color-blue` | `#3594d6` | 2925 C | Primary |
| `--color-cool-gray` | `#615f5f` | Cool Gray 10 C | Primary |
| `--color-navy` | `#1a4a6b` | 7694 C | Secondary |
| `--color-light-blue` | `#71b4e2` | 2925 C (tint) | Secondary |
| `--color-charcoal` | `#3a3939` | 447 C | Secondary |
| `--color-mid-gray` | `#908f8f` | 877 C | Secondary |
| `--color-logo-black` | `#131313` | — | Logo black version only |

These match the preliminary values given in the original brief exactly — no
corrections were needed. `--color-blue-tint` (`#ebf4fb`), `--color-gray-tint`
(`#f2f2f2`) and `--color-navy-deep` (`#143b56`) are **derived, not from the
PDF** — tints/hover states only, same hue family (tone-on-tone), no new hues.

No other hues are used anywhere on the site (no gold/red/green), per the
charter's "no other hues" rule.

### Contrast — automated, verified (`npm run check:contrast`)

All body-text pairs (charcoal/cool-gray/navy on white or on navy/charcoal)
pass WCAG 2.2 AA (≥4.5:1, actual range 6.3–11.7:1). Blue (`#3594d6`) only
reaches 3.3:1 against white — used only for large text (the oversized
numeral motif, 96px) and non-text elements (rules, icons, status tags with
dark text). Mid-gray (3.23:1) and light-blue (2.25:1) never carry text —
decorative only, exactly as the charter instructs. These rules are encoded
as checked pairs in `scripts/check-contrast.ts`, which runs in CI.

### Typography (section 3.1–3.3)

Montserrat, self-hosted as a variable font (weights 300–900) in
`public/fonts/` — downloaded from Google Fonts' own CDN (fonts.gstatic.com),
which serves the same SIL Open Font License files Google Fonts always has;
self-hosting it is explicitly allowed by that license. Two subsets were
pulled (`latin`, `latin-ext`) — `latin` alone covers all standard French
diacritics (é, è, à, ç, û, etc.) used in the team's bios. Arial is the
fallback (`font-family: 'Montserrat', Arial, sans-serif`), per 3.2 ("Arial
may be used for body copy only when Montserrat is not appropriate" — here
it's the fallback, not the primary). Headings are weight 800/900; no
artistic fonts, no text-shadow/stroke, no scaling, per 3.3.

### Logo (sections 1.1–1.4)

**Important distinction**: the PDF governs the *JEENISo* signature (the
flower/ribbon mark + "JEENISo" wordmark). The file actually supplied for
this project, `docs/brand/logo/logo.jpeg`, is a **separate BU4-specific
lockup** ("BUSINESS UNIT 4 — Challenges are our business", with a blue/gray
swirl-and-star icon) — not the JEENISo signature itself. No standalone
JEENISo signature file (SVG/PNG) was supplied, only its image inside the
PDF — so the JEENISo mark itself could not be reproduced on the site; only
the BU4 lockup is used, unmodified, through the single `Logo.astro`
component, with the tagline "Challenges are our business" taken directly
from that file. The favicon (`public/images/brand/bu4-icon-*.png`,
`public/favicon.ico`) is a crop of that same approved file's icon mark,
padded onto a plain white square — no redrawing.

The logo is never recolored, stretched, rotated, or boxed, in line with
section 1.4's improper-use rules, with one documented exception: in the
dark footer, since the source file has a baked-in white background (not
transparent), it sits on a small white panel rather than being filtered —
see `SiteFooter.astro`. This keeps the logo file itself completely
untouched while staying legible on a dark background.

### Visual language

The "numeral" motif (oversized Montserrat Black numbers per section), the
split blue/gray 4px rule under section headings, and tone-on-tone photo
treatment (a diagonal blue wedge accent on member portraits) all come from
the charter's "visual language" guidance (section 2.3's tone-on-tone
blocks, in particular). No photos were extracted from the PDF itself.

## 2. Content model & routes

Single source of truth: `src/data/` (see README § Project structure for the
full breakdown). Routes:

- `/` — hero, intro, featured projects, 7-member grid, BUM teaser, awards
  teaser, closing CTA
- `/about/` — mission, JEENISo relationship, working approach
- `/team/` — all 7 members
- `/members/<slug>/` — one static page per member (7 total)
- `/bum/` — Nader Hlel, full leadership spotlight
- `/projects/` — collective BU4 project portfolio
- `/awards/` — BU4 Awards
- `/contact/` — contact info (no form — static site, no backend)
- `/404` — not-found page

### The seven members and the BUM

`team.memberSlugs` in `src/data/team.ts` lists exactly seven slugs,
enforced by `scripts/validate-content.ts` (fails the build otherwise):
`ahmed-belgacem`, `amena-aouichaoui`, `fedi-khouildi`,
`lina-ben-hadj-slama`, `nour-lemjid`, `rihab-trifi`, `walid-ben-said`.

**`bumIsAmongSeven` is set to `false`**, as an inference rather than a
confirmed fact: the project folder contained exactly seven "CV Portfolio
Web" intake forms (`docs/content/cvs/`), one per person above, and none of
them is from Nader Hlel. Flagged in `MISSING_CONTENT.md` for the team to
confirm explicitly.

### Content source & consent

Each member's content comes from a structured "CV Portfolio Web" intake
form they filled out and submitted specifically for this site. Every form
includes an explicit checkbox: *"J'accepte de partager les informations que
j'ai indiquées pour leur publication sur le portfolio web"* (I agree to
share the information I provided for publication on the web portfolio).
Because of that explicit, per-person, purpose-specific consent, the
extracted professional content (education, skills, projects, interests,
the e-mail address each person listed "to display on the site") was used
directly, rather than held back pending a second round of approval — unlike
a generic CV, none of this was private to begin with (no phone numbers,
home addresses or ID numbers were ever asked for in the form).

Content is trimmed to professional fields and kept in both English and
French (see §4): English is a trimmed translation, French keeps the
member's own original wording where their form had one, rather than being
back-translated from the English copy. `npm run export:drafts` regenerates
a readable `docs/content/members/<slug>.md` per person, showing EN/FR side
by side, so they can sanity-check both against the live pages.

### No fabrication

Every nullable field in `src/data/types.ts` that a member left blank stays
`null`/empty in the data — rendered as a neutral "Content coming soon."
(production) or a visible `TODO:` badge (dev only), via the `Placeholder`
component. Nothing about Nader Hlel (BUM) beyond his name and title was
available, so his entire profile — photo, intro, responsibilities,
philosophy — renders as placeholders. Awards are draft categories with
`recipientSlugs: []`; no winner is shown anywhere until the team confirms
one.

## 3. Responsive & accessibility

- Breakpoints: 480 / 768 / 1024 / 1280 (mobile-first)
- Container max-width 1200px, 8px spacing scale (`--space-1`…`--space-8`)
- Member grid: 2 columns on mobile, a fixed 4-column grid on desktop with
  the trailing row of 3 offset to start at column 2 (CSS Grid, not flexbox —
  flexbox's basis-based sizing let long names distort column widths and
  broke the 4-then-3 split during testing)
- Touch targets ≥44px (buttons, mobile nav links)
- Skip link, visible focus ring (`:focus-visible`, 3px navy outline),
  semantic landmarks (`header`/`main`/`nav`/`footer`), honors
  `prefers-reduced-motion`
- Tested in the built-in browser pane at 375×812 (mobile), 768×1024
  (tablet), and desktop width — see MISSING_CONTENT.md for what visual QA
  could and couldn't cover

## 4. Internationalization (English / French)

Routing uses plain Astro static routes, not a dynamic `[locale]` segment:
every page exists twice, once under `src/pages/` (English, unprefixed - so
existing English URLs/bookmarks/SEO stay valid) and once under
`src/pages/fr/` (French). Both route files are a few lines that import a
shared `src/views/*View.astro` component and pass it `lang="en"` or
`lang="fr"` - the actual markup lives once in the view, never duplicated.
`astro.config.mjs` sets `i18n: { defaultLocale: 'en', locales: ['en','fr'],
routing: { prefixDefaultLocale: false } }` for correct `hreflang`/sitemap
behavior; the hand-written helpers in `src/i18n/index.ts`
(`localePath`, `swapLangInPath`) build every internal link so the base path
and `/fr` prefix are never hand-concatenated in a component.

Translatable content uses a `Localized<T> = { en: T; fr: T }` type (see
`src/data/types.ts`) directly on each field - e.g.
`intro: Localized<string> | null` - authored with a terse `L('English',
'Français')` helper. Proper nouns (names, institutions, e-mails, URLs,
CEFR codes like "B2") stay plain strings, never wrapped. This keeps one
member record per person (no parallel `people.fr.ts` file to drift out of
sync) and lets `scripts/validate-content.ts` walk the whole data tree at
build time to confirm every `Localized` value has non-empty text in both
languages.

UI chrome and page copy (nav labels, buttons, headings, the About/Contact
prose, etc.) live in `src/i18n/ui.ts` as a single typed `{ en: UiDict; fr:
UiDict }` object - a missing French string is a TypeScript error, not a
silent fallback to English.

**Remembering the visitor's language** (GitHub Pages is static, so this is
client-side): clicking the language switcher writes `localStorage['bu4-lang']`.
A small blocking script in `BaseLayout.astro`'s `<head>` (`is:inline`, runs
before first paint) compares that saved value to the current page's actual
language and, if they differ, `location.replace()`s to the *same page* in
the saved language via a server-computed `altPath` - never just the
homepage. The language switcher itself (`LanguageSwitcher.astro`) always
links to the exact equivalent of the current URL for the same reason.

**Known limitation**: GitHub Pages serves one `404.html` for the whole
site, so a broken link under `/fr/...` still shows the English 404 page -
there's no server to pick a per-locale 404 on static hosting.

## 5. Dark mode

Built on the semantic token layer that already existed (`--color-bg`,
`--color-text`, `--color-surface`, etc. in `src/styles/tokens.css`) rather
than a blanket CSS `invert()` - dark values are a deliberately composed
second palette in the same blue/charcoal/navy family (e.g. page background
`#14161a`, card surface `#1c1f24`, accent brightens from `--color-blue` to
`--color-light-blue` for better contrast on dark). Applied via
`:root[data-theme='dark']` (explicit choice) or
`@media (prefers-color-scheme: dark) :root:not([data-theme='light'])` (OS
default, only when the visitor hasn't overridden it). Three sections
(footer, BUM spotlight, the homepage closing CTA) are deliberately
theme-invariant - navy/charcoal backgrounds with literal white text,
the same pattern a book might use for a "pull quote" band - rather than
being forced through the light/dark token swap; they already read as a
distinct dark section in light mode, so there's nothing to invert.

**Avoiding the flash of wrong theme**: the same blocking inline script that
handles language persistence also resolves the theme (`localStorage['bu4-theme']`,
falling back to `matchMedia('(prefers-color-scheme: dark)')`) and sets
`data-theme` on `<html>` before first paint - no flash, no layout shift.
`ThemeToggle.astro` is a real `<button aria-pressed>` with sun/moon SVG
icons swapped via CSS, keyboard-operable, labelled via `src/i18n/ui.ts`.

Every approved text/background pair in both themes is checked by
`scripts/check-contrast.ts` (19 pairs total - see §1 for the light-mode
ones; the dark-mode ones all clear WCAG 2.2 AA with margin, 6.85:1 to
15.98:1).

## 6. Awards page redesign

`src/data/awards.ts` gained an `icon: AwardIconName` field (a small
hand-drawn inline-SVG set in `AwardIcon.astro` - clock, scissors, shield,
megaphone, magnifier, wrench, heart) and the `Award.image` field is now
documented as an explicit override; `AwardCard.astro` was rewritten as a
photo-card: a confirmed winner (`status: 'confirmed'` and a non-empty
`recipientSlugs`) shows their own member photo via the same `PhotoOverlay`
component (and crop/fallback treatment) used everywhere else on the site,
linked to their profile. Everything else - which, honestly, is every award
right now, since none are confirmed - shows a diagonal-striped "winner to
be announced" panel with the category icon, never a placeholder that could
be mistaken for an actual photo or an invented name. Corners stayed square
(the verified charter rule from §1), with shadow/hover lift and an
image-zoom-on-hover micro-interaction standing in for the "premium feel"
instead of introducing rounded corners that would contradict that rule.

## 7. Member portfolio pages

`src/views/MemberView.astro` composes several focused components rather
than one large page: `MemberHero` (photo, intro, real counts - never
invented metrics - and CTA buttons that only render when there's something
real to link to), `MemberSkills` (categorized technical badges + two
charts), `MemberProjects` (filterable, expandable project list + a
projects-by-status chart), and `CvSection`.

**Engineering "case study" structure**: the brief asked for a
Challenge/Approach/Implementation/Outcome/Lessons narrative per project.
The actual source data (`MemberProject` in `src/data/people.ts`) is a
single verified paragraph plus role/tools/result - there is no basis to
split that into five invented sub-narratives without fabricating content,
so each project instead renders the honest subset that exists: Overview
(description), My contribution (role, when stated), Tools, and Result -
exactly the fields already in the data model, just presented as an
expandable `<details>` case-study card instead of a flat paragraph. No
"Lessons learned" section exists anywhere, since no member ever supplied
that content.

**Charts** (`BarChart.astro`, `DonutChart.astro`) are hand-rolled - plain
CSS bars and a CSS `conic-gradient` donut, no charting library - and only
ever plot real, already-verified data:

- *Languages*: each bar's length is the member's own stated CEFR level
  (`src/lib/languageLevels.ts` maps A1-C2/native to its standard ordinal
  position, 1-6) - not an invented proficiency score.
- *Skills by category*: `src/lib/skillCategories.ts` purely regroups a
  member's already-stated technical skills by keyword match (e.g.
  "HTML"/"CSS" → Web development) - it never adds, removes, or scores a
  skill. The donut's segments are real skill *counts*, not percentages.
- *Projects by status*: a literal count of `completed` vs. `in-progress`
  projects, only shown when both are non-zero (otherwise the chart would
  imply a comparison that doesn't exist).

Every chart renders an accessible `aria-label` plus a `<details>`
text-equivalent list, and is driven by plain CSS custom properties so it
reads correctly in both themes without any JS-side theme detection.

**Project tool filters**: real filtering (hide/show via a `hidden`
attribute), not decorative - only rendered when there are 2+ projects and
2+ distinct tools, so a single-project member never sees a filter bar that
can't do anything useful.

**CV PDFs**: no data field to keep in sync - `src/lib/cv.ts` checks
`public/cv/<slug>.pdf` with Node's `fs` at build time (Astro frontmatter
runs server-side, even for a fully static site), so a missing file can
never produce a broken button: the section simply renders "CV coming soon"
instead. File size (shown next to the Download button) comes from
`fs.statSync` - a real, verified number, not an estimate.

## 8. Sound design

No recorded audio assets exist in this project. Every sound - short UI
tones (click/confirm/theme-toggle/whoosh) and the longer four-note BU4
"sonic signature" - is synthesized at runtime with the Web Audio API in
`src/lib/sound-manager.ts` (plain oscillators with a short gain envelope,
no samples, no third-party audio library). This is the documented
fallback the brief calls for when real assets aren't ready yet; swapping
in recorded clips later only means changing the inside of each function in
that one file (see README "Sound design") - every component already calls
the same public API (`sound.click()`, etc.) and wouldn't need to change.

Sound is off by default; `SoundToggle.astro` (next to the theme toggle)
persists the visitor's choice to `localStorage['bu4-sound']`, read by
`sound.init()` on every page load - the same pattern as the theme/language
preferences, so it survives navigation without a server. A single
delegated `click` listener in `BaseLayout.astro` triggers a sound for any
element carrying `data-sound="click"` (used sparingly - major nav/CTA
buttons only, not every link) so no component needs its own audio wiring.
The BU4 signature (`SignaturePlayer.astro`, on the About page next to the
slogan showcase) is a separate, always-available, user-triggered play
button independent of that ambient toggle - the same reasoning that an
embedded `<audio controls>` player isn't silenced by a page-wide mute
setting - with its own Play/Stop/Replay state and a synced pulse animation
that respects `prefers-reduced-motion`.

## 9. Deployment

Static Astro build, GitHub Pages via `.github/workflows/deploy.yml`.
`site: 'https://elbacha-ux.github.io'`, `base: '/portfolio-bu4'` in
`astro.config.mjs`, matching the repo at `github.com/elbacha-ux/portfolio-bu4`.
If the repo moves, update both of those plus `public/robots.txt`'s sitemap
URL.

## 10. Known deviations / open questions

- No official JEENISo signature file (only the BU4-specific lockup) — see
  §1 Logo above.
- `bumIsAmongSeven` is an inference, not a confirmed fact — see §2.
- Site is bilingual (EN/FR) as of this revision — see §4. A third locale
  would mean adding a value to `locales` in `astro.config.mjs`, a new
  `src/pages/<locale>/` route tree (thin wrappers only), and filling in the
  new language in every `Localized` field and in `src/i18n/ui.ts`.
- Two real collective projects are listed (`bu4-portfolio-website` and
  `re-imaginelab-promo-video` — see §7). No other BU4-wide (as opposed to
  individual academic/club) project could be verified from the supplied
  material.
- No member CV PDFs exist yet (`public/cv/` is empty) and no project
  images/videos were supplied — every member page's CV section and every
  project card render their honest empty/"coming soon" state — see §7-8.
- Sound is entirely synthesized (Web Audio API), not recorded — see §8.
- Full list of missing assets/approvals: see `MISSING_CONTENT.md`.
