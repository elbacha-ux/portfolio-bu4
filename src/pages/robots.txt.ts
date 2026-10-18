import type { APIRoute } from 'astro';

/** Generated instead of a static public/robots.txt so the sitemap line
 * always points at the domain this build actually targets - see the
 * `site`/`base` logic in astro.config.mjs. A static file can't do this:
 * it would hardcode one deployment's URL and be wrong for the other. */
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
