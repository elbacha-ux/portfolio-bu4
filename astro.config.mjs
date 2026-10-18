// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages deployment: https://elbacha-ux.github.io/portfolio-bu4/
// If the repo is renamed or moved to a different owner, update the
// GitHub Pages fallback URL and `base` below. The Vercel domain is never
// hardcoded - VERCEL_PROJECT_PRODUCTION_URL/VERCEL_URL are set
// automatically by Vercel's build environment, so this stays correct
// even if a custom domain is attached later.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export default defineConfig({
  site: process.env.VERCEL && vercelDomain ? `https://${vercelDomain}` : 'https://elbacha-ux.github.io',
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
