import type { Localized } from '../data/types';

export const locales = ['en', 'fr'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

/** Reads a localized value for the given language. Returns null if the
 * value itself is null (missing content stays missing in every language). */
export function pick<T>(value: Localized<T> | null, lang: Lang): T | null {
  return value ? value[lang] : null;
}

/** Same as pick() but for arrays of localized values. */
export function pickAll<T>(values: Localized<T>[], lang: Lang): T[] {
  return values.map((v) => v[lang]);
}

/**
 * Builds a path for a page route in the given language, including the
 * `/portfolio-bu4` base path and (for non-default languages) the `/fr`
 * prefix - e.g. localePath('fr', 'members/nour-lemjid/') ->
 * '/portfolio-bu4/fr/members/nour-lemjid/'. `path` is relative, no leading
 * slash, trailing slash included (matches astro.config.mjs trailingSlash).
 */
export function localePath(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const clean = path.replace(/^\/+/, '');
  const suffix = clean ? `/${clean}` : '/';
  return `${base}${prefix}${suffix}`;
}

/**
 * Given the current request pathname (Astro.url.pathname, which already
 * includes the base path) and a target language, returns the equivalent
 * page in that language by swapping the locale prefix and keeping the rest
 * of the path identical. Used by the language switcher so it never redirects
 * to the wrong page.
 */
export function swapLangInPath(pathname: string, targetLang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  rest = rest.replace(/^\/fr(\/|$)/, '/');
  if (!rest.startsWith('/')) rest = `/${rest}`;
  const prefix = targetLang === defaultLang ? '' : `/${targetLang}`;
  return `${base}${prefix}${rest}`;
}

/** Detects the current language from a pathname that already includes the
 * base path (Astro.url.pathname). */
export function getLangFromPath(pathname: string): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return rest.startsWith('/fr/') || rest === '/fr' ? 'fr' : 'en';
}
