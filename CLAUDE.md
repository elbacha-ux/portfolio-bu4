# CLAUDE.md

- Pages are thin per-language wrappers: `src/pages/<route>.astro` (en) and `src/pages/fr/<route>.astro` just import a view from `src/views/` and render it with a `lang` prop (`"en"` / `"fr"`).
- All real markup/logic lives in `src/views/*View.astro`, which takes `lang` and renders localized content accordingly.
- Localized strings/content come from `src/i18n/ui.ts` (dictionary) and `src/i18n/index.ts` (`pick`, `pickAll`, `localePath`, `swapLangInPath`, `getLangFromPath` helpers, `Lang` type, `locales`).
- Never hardcode URLs: build internal links with `localePath(lang, path)`, which prepends `import.meta.env.BASE_URL` (`/portfolio-bu4` on GitHub Pages, `/` on Vercel) and the `/fr` prefix for non-default locales.
- `astro.config.mjs` sets `base`/`site` per deploy target (Vercel vs GitHub Pages), `trailingSlash: 'always'`, and i18n routing with `prefixDefaultLocale: false` (en has no prefix, fr uses `/fr`).
- `SiteHeader.astro` / `LanguageSwitcher.astro` are the nav; the switcher uses `swapLangInPath` to stay on the equivalent page when toggling language.
- Data modules live in `src/data/` (e.g. `magazine.ts`, member/project data), typed via `src/data/types.ts`'s `Localized<T>`.
- The Magazine page (`src/views/MagazineView.astro`, data in `src/data/magazine.ts`, cover image `public/magazine/cover.png`) is currently a teaser only — no full issue content yet.
