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

Content was translated from French to English for a consistent site
language (the original spec left UI language "to be confirmed, default
English") and trimmed to professional fields. `npm run export:drafts`
regenerates a readable `docs/content/members/<slug>.md` per person so they
can sanity-check the translation/summarization against the live page.

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

## 4. Deployment

Static Astro build, GitHub Pages via `.github/workflows/deploy.yml`.
`site: 'https://elbacha-ux.github.io'`, `base: '/portfolio-bu4'` in
`astro.config.mjs`, matching the repo at `github.com/elbacha-ux/portfolio-bu4`.
If the repo moves, update both of those plus `public/robots.txt`'s sitemap
URL.

## 5. Known deviations / open questions

- No official JEENISo signature file (only the BU4-specific lockup) — see
  §1 Logo above.
- `bumIsAmongSeven` is an inference, not a confirmed fact — see §2.
- Site language is English throughout; the original brief left this "to be
  confirmed" — easy to add a second locale later since every UI string
  lives in `src/data/ui-strings.ts`.
- One real collective project is listed (`bu4-portfolio-website` — this
  site itself, corroborated by two independent member submissions). No
  other BU4-wide (as opposed to individual academic/club) project could be
  verified from the supplied material.
- Full list of missing assets/approvals: see `MISSING_CONTENT.md`.
