/** Shared content types for the BU4 site. Every field that is not guaranteed to
 * exist for every person/project is nullable on purpose: the UI renders a
 * graceful empty/placeholder state instead of a fabricated value. */

export interface LanguageSkill {
  name: string;
  /** CEFR level (A1-C2) or "native". Null when the member did not state one. */
  level: string | null;
}

export interface MemberProject {
  title: string;
  description: string | null;
  /** The member's role/contribution. Null when not yet defined by the member. */
  role: string | null;
  tools: string[];
  status: 'completed' | 'in-progress' | null;
  /** Verified outcome/result, only when explicitly stated. */
  result: string | null;
  link: string | null;
}

export interface MemberExperience {
  organization: string;
  detail: string | null;
}

export interface Member {
  slug: string;
  name: string;
  /** Academic specialty / field of study - used as the on-card descriptor
   * since no distinct organizational title was supplied. */
  specialty: string | null;
  photo: string | null;
  photoAlt: string | null;
  intro: string | null;
  education: {
    program: string | null;
    institution: string | null;
    years: string | null;
    degrees: string[];
    certifications: string[];
  } | null;
  skills: {
    technical: string[];
    personal: string[];
    languages: LanguageSkill[];
  };
  interests: string[];
  projects: MemberProject[];
  experience: MemberExperience[];
  achievements: string[];
  links: {
    email: string | null;
    linkedin: string | null;
    github: string | null;
  };
  goals: {
    shortTerm: string | null;
    longTerm: string | null;
  };
  /** True only for the BUM record (Nader Hlel). */
  isBum: boolean;
  /** Short note on leadership responsibilities - BUM only, verified content only. */
  leadership: {
    responsibilities: string[];
    philosophy: string | null;
  } | null;
}

export interface CollectiveProject {
  slug: string;
  title: string;
  description: string | null;
  category: string | null;
  status: 'completed' | 'in-progress' | null;
  memberSlugs: string[];
  tools: string[];
  outcome: string | null;
  link: string | null;
  image: string | null;
  imageAlt: string | null;
}

export interface Award {
  slug: string;
  title: string;
  issuer: string | null;
  year: number | null;
  description: string | null;
  /** Recipient member slugs. Empty until the team confirms a winner. */
  recipientSlugs: string[];
  evidenceUrl: string | null;
  image: string | null;
  /** Draft categories are proposed ideas, not yet adopted by the team. */
  status: 'confirmed' | 'draft';
}

export interface NavItem {
  label: string;
  href: string;
}
