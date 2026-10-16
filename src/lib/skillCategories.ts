import type { Localized } from '../data/types';
import type { Lang } from '../i18n';

export type SkillCategoryKey = 'web' | 'embedded' | 'design' | 'programming' | 'other';

const CATEGORY_LABELS: Record<SkillCategoryKey, Localized<string>> = {
  web: { en: 'Web development', fr: 'Développement web' },
  embedded: { en: 'Embedded & hardware', fr: 'Embarqué & matériel' },
  design: { en: 'Design & modeling', fr: 'Conception & modélisation' },
  programming: { en: 'Programming', fr: 'Programmation' },
  other: { en: 'Other', fr: 'Autre' },
};

/**
 * Pure grouping of a member's own documented technical skills - it never
 * adds, removes or scores a skill, only sorts the verified strings into a
 * category for display. Matched against the English text (stable key
 * regardless of UI language). Order matters: more specific categories are
 * checked before the general "programming" bucket.
 */
export function categorizeSkill(enText: string): SkillCategoryKey {
  const s = enText.toLowerCase();
  if (/\bhtml\b|\bcss\b/.test(s)) return 'web';
  if (/arduino|stm32|esp32|matlab|simulink|microcontroller/.test(s)) return 'embedded';
  if (/solidworks|modeling|modelling|cad\b/.test(s)) return 'design';
  if (/python|\bc\+\+\b|\bc\b|java\b|javascript|\bjs\b|algorithm/.test(s)) return 'programming';
  return 'other';
}

export function categoryLabel(key: SkillCategoryKey, lang: Lang): string {
  return CATEGORY_LABELS[key][lang];
}

/** Groups a member's technical skills (already English-source Localized
 * pairs) into categories, returning only categories that actually have at
 * least one skill - no empty categories are ever shown. */
export function groupSkillsByCategory(
  skills: Localized<string>[],
  lang: Lang
): { key: SkillCategoryKey; label: string; items: string[] }[] {
  const buckets = new Map<SkillCategoryKey, string[]>();
  for (const skill of skills) {
    const key = categorizeSkill(skill.en);
    const list = buckets.get(key) ?? [];
    list.push(skill[lang]);
    buckets.set(key, list);
  }
  const order: SkillCategoryKey[] = ['programming', 'web', 'embedded', 'design', 'other'];
  return order
    .filter((key) => buckets.has(key))
    .map((key) => ({ key, label: categoryLabel(key, lang), items: buckets.get(key) as string[] }));
}
