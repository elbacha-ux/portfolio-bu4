/** Shared content types for the BU4 site. Every field that is not guaranteed to
 * exist for every person/project is nullable on purpose: the UI renders a
 * graceful empty/placeholder state instead of a fabricated value. */

/** A value translated into every supported UI language. Names, e-mail
 * addresses, URLs, institution names and technical tool/language names stay
 * as plain strings (proper nouns / identical in both languages); prose,
 * descriptions, roles and labels use this type instead. */
export type Localized<T> = { en: T; fr: T };

/** Shorthand constructor so data files read as `L('English', 'Français')`
 * instead of repeating `{ en: ..., fr: ... }` on every field. */
export function L(en: string, fr: string): Localized<string> {
  return { en, fr };
}

export interface LanguageSkill {
  name: Localized<string>;
  /** CEFR level (A1-C2) or "native"/"basic", translated. Null when the
   * member did not state one. */
  level: Localized<string> | null;
}

export interface MemberProject {
  title: Localized<string>;
  description: Localized<string> | null;
  /** The member's role/contribution. Null when not yet defined by the member. */
  role: Localized<string> | null;
  tools: Localized<string>[];
  status: 'completed' | 'in-progress' | null;
  /** Verified outcome/result, only when explicitly stated. */
  result: Localized<string> | null;
  link: string | null;
}

export interface MemberExperience {
  /** Organization/club name - proper noun, not translated. */
  organization: string;
  detail: Localized<string> | null;
}

export interface Member {
  slug: string;
  /** Proper noun - not translated. */
  name: string;
  /** Academic specialty / field of study - used as the on-card descriptor
   * since no distinct organizational title was supplied. */
  specialty: Localized<string> | null;
  photo: string | null;
  intro: Localized<string> | null;
  education: {
    program: Localized<string> | null;
    /** Institution name - proper noun, not translated. */
    institution: string | null;
    /** Date range - identical in both languages. */
    years: string | null;
    degrees: Localized<string>[];
    certifications: Localized<string>[];
  } | null;
  skills: {
    technical: Localized<string>[];
    personal: Localized<string>[];
    languages: LanguageSkill[];
  };
  interests: Localized<string>[];
  projects: MemberProject[];
  experience: MemberExperience[];
  achievements: Localized<string>[];
  links: {
    email: string | null;
    linkedin: string | null;
    github: string | null;
  };
  goals: {
    shortTerm: Localized<string> | null;
    longTerm: Localized<string> | null;
  };
  /** True only for the BUM record (Nader Hlel). */
  isBum: boolean;
  /** Short note on leadership responsibilities - BUM only, verified content only. */
  leadership: {
    responsibilities: Localized<string>[];
    philosophy: Localized<string> | null;
  } | null;
}

export interface CollectiveProject {
  slug: string;
  title: Localized<string>;
  description: Localized<string> | null;
  category: Localized<string> | null;
  status: 'completed' | 'in-progress' | null;
  memberSlugs: string[];
  tools: Localized<string>[];
  outcome: Localized<string> | null;
  link: string | null;
  image: string | null;
  imageAlt: Localized<string> | null;
}

/** Small inline-SVG icon set rendered on award cards - purely decorative,
 * matched to each category's theme. See AwardIcon.astro. */
export type AwardIconName = 'clock' | 'scissors' | 'shield' | 'megaphone' | 'magnifier' | 'wrench' | 'heart';

export interface Award {
  slug: string;
  title: Localized<string>;
  /** Issuer name - proper noun, not translated. */
  issuer: string | null;
  year: number | null;
  description: Localized<string> | null;
  /** Recipient member slugs. Empty until the team confirms a winner - the
   * card then shows a "winner to be announced" state instead. */
  recipientSlugs: string[];
  evidenceUrl: string | null;
  /** Explicit award image, if ever supplied. When absent, the card falls
   * back to the recipient's own member photo (or a neutral placeholder). */
  image: string | null;
  icon: AwardIconName;
  /** Draft categories are proposed ideas, not yet adopted by the team. */
  status: 'confirmed' | 'draft';
}
