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

5. ~~Nader Hlel (BUM)~~ — done: photo, introduction and his four
   responsibilities (team support, progress monitoring, guidance,
   communication with the JEENISo Bureau) are now set in
   `src/data/people.ts` and live on `/bum/` in both languages. Still
   missing: a leadership philosophy/personal statement (`leadership.philosophy`
   stays `null` until he provides one) and contact links
   (`links.email`/`linkedin`/`github`, all still `null`).
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

11. Two collective BU4 projects are now listed in `src/data/projects.ts`:
    `bu4-portfolio-website` and `re-imaginelab-campaign` — both now credit
    all seven members (script by Nour Lemjid, on-set execution by Amena
    Aouichaoui, behind-the-scenes footage by Walid Ben Said, video editing
    by Fedi Khouildi, the campaign website by Lina Ben Hadj Slama and Ahmed
    Belgacem — linked at https://ahmedbfg.github.io/Re-imagine-Lab/ — and
    customer-acquisition strategy by Rihab Trifi). If BU4 has other
    completed or in-progress team projects, add them to
    `src/data/projects.ts`.
12. **Re-ImagineLab video + poster pending**: the promotional video itself
    and Amena's poster ("affiche") are still being finalized. Once ready,
    set `image`/`imageAlt` on the `re-imaginelab-campaign` entry in
    `src/data/projects.ts` (the campaign website is already linked via
    `link`; if the video gets its own separate URL, e.g. YouTube, that can
    replace or sit alongside it).

## Awards

13. ~~The 7 categories in `src/data/awards.ts` were illustrative
    examples~~ — done: replaced with 8 team-picked "personality" awards,
    all `status: 'confirmed'` with a real winner (or two, for the "Team
    Spirit" and "Chaotic Collaboration" duo awards) and a real candid
    photo in
    `public/images/awards/<slug>.jpg` (sourced from `docs/awards/`,
    cropped/rotated/resized to match the site's other image assets). To
    add, retire, or re-pick a category: edit `src/data/awards.ts` directly
    - set `status: 'draft'` and clear `recipientSlugs`/`image` for a
    category with no winner yet, which brings back the "winner to be
    announced" state automatically.

## Contact

14. **No official BU4 contact e-mail address was confirmed.** The
    `/contact/` page and footer fall back to JEENISo's general address
    (`contact@jeeniso.com`, taken from the charter PDF footer) as the email
    channel, and link to individual member profiles. Set
    `site.contactEmail` in `src/data/site.ts` once BU4 has (or wants) its
    own address.
15. ~~No social links~~ — done: `/contact/` now shows a channel grid with
    Instagram (`@wearebu4`), a confirmed phone number, the email fallback
    above, and the JEENISo website — all set in `src/data/site.ts`
    (`socials.instagram`, `contactPhone`, `jeenisoWebsite`).
16. ~~Footer didn't show the BU4 contact~~ — done: the footer's "Contact"
    column now shows the same confirmed phone number and Instagram handle
    (it previously only ever checked `site.contactEmail`, which is still
    unconfirmed, so it always showed "pending confirmation" even after the
    phone/Instagram were added to the Contact page). LinkedIn and Facebook
    are still `null` in `site.socials` — add them the same way (in
    `src/data/site.ts`) if BU4 wants those channels listed too; both the
    Contact page and the footer will then pick them up automatically.

## Magazine

23. **The `/magazine/` page is a teaser - only the cover is real.** Title,
    subtitle and cover image (`public/magazine/cover.png`) for "Soleil en
    réserve" are confirmed; everything else is `null`/empty in
    `src/data/magazine.ts` on purpose, so the page shows a "coming soon"
    state instead of a broken link/player:
    - `pdfPath` - no full-issue PDF yet. Add the file under `public/magazine/`
      and set this to its base-relative path to show the download button.
    - `podcast.audioPath` - no episode audio yet. The guest credit (Walid
      Hassen, École Nationale d'Ingénieurs de Monastir) and episode title
      field are already in place; add the audio file and path to reveal the
      player.
    - `pages` - empty. Reserved for a future flipbook; no flipbook rendering
      code exists yet, so this currently does nothing.

## Deployment

17. The site assumes GitHub Pages at
    `https://elbacha-ux.github.io/portfolio-bu4/`, matching the current git
    remote. Confirm this is where the team actually wants to publish, and
    complete the one-time "Settings → Pages → Source: GitHub Actions" step
    in the repo before the first push to `main` triggers a real deploy.

## Language (EN/FR) and theme (light/dark)

18. The site is now bilingual (English at `/`, French at `/fr/`) and
    supports light/dark mode. Every page, nav label, button, and piece of
    member/project/award data has both languages — see
    `docs/BU4-SPEC.md` for how the routing and data model work. One
    structural limitation: GitHub Pages serves a single `404.html`
    site-wide, so a broken link under `/fr/...` still lands on the
    English 404 page (no per-locale 404 is possible on static GH Pages
    without a Functions/Worker layer).

## Member portfolios, CV PDFs & sound design

19. ~~Every member's CV PDF is missing~~ — done: all 7 are now at
    `public/cv/<slug>.pdf`, each page's "My CV — take it with you" section
    shows the real Download/View buttons. To replace one, get the
    member's explicit approval and overwrite that file - see README "Add
    a member's CV".
20. **No project screenshots, diagrams, prototype photos, or demo videos**
    were supplied for either collective project, so each project's new
    detail page (`/projects/<slug>/`, linked from every project card's
    "View details →") shows a "coming soon" state in its Gallery and Video
    sections instead of fabricated media. To add real photos: drop any
    number of image files at `public/images/projects/<slug>/` (e.g.
    `public/images/projects/re-imaginelab-campaign/01.jpg`) - picked up
    automatically at build time, no code or data change needed. To add a
    video: either drop an MP4 at `public/videos/<slug>.mp4`, or - if it
    lives elsewhere (YouTube, Instagram, etc.) - set `videoUrl` on that
    project in `src/data/projects.ts`.
21. **The skill/language charts use only verified data** - technical-skill
    categories are a pure regrouping of each member's own stated skills
    (see `src/lib/skillCategories.ts`), language bars use the member's own
    stated CEFR level (a standard scale, not a guessed score - see
    `src/lib/languageLevels.ts`), and the project-status donut is a literal
    count of completed vs. in-progress projects. No numeric proficiency
    (e.g. "Python: 90%") was invented anywhere, per the brief.
22. **Sound is fully synthesized, not recorded** - there are no audio asset
    files in this project yet (`public/sounds/` doesn't exist). Every UI
    tone and the BU4 sonic signature are generated at runtime with the Web
    Audio API (`src/lib/sound-manager.ts`). This was an explicit option in
    the brief for when real assets aren't ready; if BU4 wants a more
    produced/branded sound later, record or license short original clips
    and swap them in - see README "Sound design" for exactly where.

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

### This pass: member portfolios, CV section, charts, sound design

- ✅ `npm run verify` passes end to end (content validation, contrast in
  both themes, type check, a 72-file/29-page production build).
- ✅ Checked every one of the 7 member pages (hero, stats, anchor nav,
  skills/charts, project filters and expand/collapse, CV section) in the
  browser - including the member with the most projects/tools (Nour
  Lemjid, 5 projects/18 tool filters) and the one with the most
  undefined/"pas encore" fields (Lina) - no console errors, no layout
  breakage on sparse data, correct graceful omission of charts/sections
  that don't have enough real data to be meaningful (e.g. no project
  status donut when every project's status is unknown).
- ✅ Verified interactivity via real DOM state (not just visual
  inspection): the project tool filter actually hides/shows cards, project
  `<details>` open/close, the sound toggle persists via localStorage across
  navigation, the BU4 signature button correctly cycles through
  Play → Stop → Replay states, and the clipboard-copy buttons call
  `navigator.clipboard.writeText` with a genuine user gesture (the
  automated browser pane used for testing has `clipboard-write` itself set
  to `denied` at the OS/browser level, so the actual copy couldn't be
  observed end-to-end in this environment - the code follows the standard
  web API pattern and degrades gracefully, i.e. the channel's normal link
  still works, if the clipboard call fails for any reason).
- ✅ Re-checked 375px / 768px / 1280px on member pages, including the
  heaviest one (5 projects, 3 charts, long filter list) - no horizontal
  overflow at any width.
- 🐛 Fixed during this pass: a mislabeled "Skills & languages" heading over
  the personal-skills list (now "Personal skills" - the languages already
  have their own chart just below it).
- ⚠️ Not checked: a real screen reader pass over the new charts/filters
  (they ship an `aria-label` summary and a `<details>` text-equivalent for
  each chart, and the filters are plain buttons, but this wasn't verified
  with actual assistive-tech software).
