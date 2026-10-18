// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages deployment: https://elbacha-ux.github.io/portfolio-bu4/
// If the repo is renamed or moved to a different owner, update `site` and `base` below.
export default defineConfig({
  site: 'https://elbacha-ux.github.io',
  base: process.env.VERCEL ? '/' : '/portfolio-bu4',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
