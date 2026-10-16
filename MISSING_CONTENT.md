# Missing content & open decisions

Everything below is either missing, unconfirmed, or needs a decision from
the team before this site is ready to launch publicly. Nothing in this list
has been invented or filled in with a guess — the site shows a neutral
placeholder wherever one of these gaps exists.

## 🔴 Urgent — privacy

1. **Raw CVs are already in this repo's git history on a public GitHub
   remote.** Commits `69143af` and `f0e7b41` added the original "CV
   Portfolio Web" `.docx`/`.pdf` files under `docs/content/cvs/`. Those
   files have now been removed from tracking going forward (`.gitignore` +
   `git rm --cached`), but **removing a file does not remove it from git
   history** — anyone who clones the repo or looks at an old commit can
   still download them, and if `elbacha-ux/portfolio-bu4` is a public repo,
   so can anyone else. The forms themselves don't contain especially
   sensitive data (no phone/address/ID numbers were ever collected), but
   they do contain more personal framing than what's on the public pages.
   **Decide**: is this acceptable, or should the history be rewritten
   (`git filter-repo` + force-push) to remove them? That's a destructive,
   hard-to-reverse operation on shared history — only do it with the whole
   team's sign-off, and tell anyone who's already cloned the repo to
   re-clone afterward.
2. Double-check `elbacha-ux/portfolio-bu4`'s visibility (public vs.
   private) in GitHub repo settings — this session had no way to confirm it
   (no `gh` CLI available).

## Brand assets

3. **No standalone JEENISo signature file** (SVG/PNG) was supplied — only
   its image inside the charter PDF. The site uses the separate BU4-specific
   lockup (`docs/brand/logo/logo.jpeg`) everywhere instead. If an approved
   JEENISo signature file becomes available and the team wants it
   somewhere (e.g. the footer, next to the BU4 mark), supply the file and
   it can be added without touching the BU4 logo.
4. The current favicon is a simple crop of the BU4 logo's icon mark padded
   onto a white square. If the team has (or wants) a dedicated square icon
   version, swap `public/images/brand/bu4-icon-180.png` /
   `bu4-icon-512.png` / `public/favicon.ico`.

## Team & leadership

5. **Nader Hlel (BUM)**: only his name and title are known. Missing —
   photo, personal introduction, responsibilities, leadership philosophy,
   any confirmed projects, contact links. His `/bum/` page currently shows
   "Content coming soon" for all of this.
6. **`bumIsAmongSeven`** (`src/data/team.ts`) is currently set to `false`
   as an inference (there were exactly 7 "CV Portfolio Web" forms and none
   was Nader's) — please confirm explicitly whether Nader Hlel is formally
   one of the seven BU4 members or a separate role.
7. ~~Walid Ben Said's photo~~ — done: downloaded (with your confirmation)
   from the link in his intake form and saved to
   `public/images/members/walid-ben-said.jpg`.
8. ~~No photos for the other six members~~ — done: you added
   `ahmedbelgacem.heic`, `amenaaouichaoui.heic`, `fedikhouildi.heic`,
   `linabenhadjslama.heic`, `nourlemjid.jpeg` and `rihabtrifi.heic` to
   `public/images/members/`. They were converted to optimized JPEGs
   (EXIF-rotated, resized to 800px wide, same treatment as Walid's existing
   photo) at `public/images/members/<slug>.jpg` and wired into
   `src/data/people.ts`. The raw originals (HEIC isn't renderable by most
   browsers, and were unused duplicates once converted) were moved to
   `docs/content/photos/<slug>-original.{heic,jpeg}` as an archive rather
   than deleted. All 7 members now show real portraits — no placeholders
   left except Nader Hlel (BUM, item 5 below).
9. Member bios/skills/projects are now bilingual: English is trimmed from
   the original forms, and French uses the member's own original wording
   where their form had one (not a back-translation of the English). Each
   person should check both languages on their own page against the
   generated review draft in `docs/content/members/<slug>.md` (shows EN/FR
   side by side) and flag anything that reads wrong.
10. Several of Nour Lemjid's projects (flight simulator, drowsiness
    detection, BMS, emergency-signal detection, AEB) have their "role"
    explicitly marked "pas encore" (not yet decided) in her form — shown
    as blank on her page. Worth revisiting once she's defined her role on
    each.

## Projects

11. Only **one** collective BU4 project could be verified
    (`bu4-portfolio-website` — this site, corroborated by Fedi Khouildi's
    and Rihab Trifi's forms both naming it). It now credits all seven
    members as contributors (it's the team's shared site, not just the two
    who happened to name it in their own CV). If BU4 has other completed or
    in-progress team projects, add them to `src/data/projects.ts`.
12. No project images/screenshots were supplied for any project.

## Awards

13. The 7 categories in `src/data/awards.ts` are the **illustrative
    examples from the original brief**, marked `status: 'draft'` — the
    team hasn't picked, renamed, or voted on any of them yet, and no
    winner is assigned anywhere. The `/awards/` page now shows each as a
    photo-card gallery with a "winner to be announced" state (a diagonal
    pattern + the category icon - no photo, no invented name). Once the
    team votes: set `status: 'confirmed'` and add the winner's slug to
    `recipientSlugs` in `src/data/awards.ts` - the card will then
    automatically show that member's own profile photo. To use a different
    photo for the award itself, set the award's `image` field instead.

## Contact

14. **No official BU4 contact e-mail or address was confirmed.** The
    `/contact/` page currently falls back to JEENISo's general address
    (`contact@jeeniso.com`, taken from the charter PDF footer) and links to
    individual member profiles. Set `site.contactEmail` in
    `src/data/site.ts` once BU4 has (or wants) its own address.
15. No social links (LinkedIn page, Instagram, Facebook) were supplied for
    BU4 as an organization — `src/data/site.ts` has `socials` set to `null`
    across the board.

## Deployment

16. The site assumes GitHub Pages at
    `https://elbacha-ux.github.io/portfolio-bu4/`, matching the current git
    remote. Confirm this is where the team actually wants to publish, and
    complete the one-time "Settings → Pages → Source: GitHub Actions" step
    in the repo before the first push to `main` triggers a real deploy.

## Language (EN/FR) and theme (light/dark)

17. The site is now bilingual (English at `/`, French at `/fr/`) and
    supports light/dark mode. Every page, nav label, button, and piece of
    member/project/award data has both languages — see
    `docs/BU4-SPEC.md` for how the routing and data model work. One
    structural limitation: GitHub Pages serves a single `404.html`
    site-wide, so a broken link under `/fr/...` still lands on the
    English 404 page (no per-locale 404 is possible on static GH Pages
    without a Functions/Worker layer).

## What this session could and couldn't verify

- ✅ `npm run verify` passes end to end: content validation (including a
  check that every bilingual field has non-empty EN *and* FR text),
  WCAG 2.2 AA contrast in both light and dark themes, `astro check` (0
  errors), and a 29-page production build (14 EN + 14 FR + 1 shared 404).
- ✅ Visually checked in the built-in browser: homepage, about, team,
  several member pages, /bum, awards, contact — in both EN and FR, in both
  light and dark mode, at 375px / 1024px / 1280px. Checked the language
  switch stays on the same page when toggled, the saved-language redirect
  (visiting the English URL with a saved French preference correctly
  redirects to the French version of that same page), the theme toggle,
  and the mobile menu (which now holds the language switch on narrow
  screens instead of cramming it into the top bar).
- 🐛 Found and fixed during this pass: a member-grid card overflowing its
  column on mobile (name + specialty had been set to sit side-by-side in a
  flex row that refused to shrink - reverted to stacked), a section heading
  that could overflow on narrow screens with longer French text (added
  `min-width: 0` on the flex content and `overflow-wrap: break-word` /
  `overflow-x: hidden` site-wide as a backstop), and the oversized "04"-style
  numerals were shrunk on mobile so they don't crowd out the heading text.
- ⚠️ Not checked: real browser rendering outside this session's built-in
  browser pane (no Playwright/cross-browser testing was run), and no
  automated accessibility audit tool (e.g. axe) was run - only the manual
  checks and the contrast-ratio script described above.
- ⚠️ Lighthouse/performance audit was not run.
