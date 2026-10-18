/** Every UI chrome / page-copy string, in both languages. Keeping both
 * locales in one typed object means a missing French string is a build-time
 * TypeScript error, not a silent English fallback. */

interface UiDict {
  meta: {
    htmlLang: string;
  };
  nav: {
    primaryLabel: string;
    footerLabel: string;
    home: string;
    about: string;
    projects: string;
    team: string;
    awards: string;
    contact: string;
    menuLabel: string;
    langSwitchLabel: string;
    themeToggleLabel: string;
    themeToggleToLight: string;
    themeToggleToDark: string;
    soundToggleLabel: string;
    soundEnable: string;
    soundDisable: string;
  };
  common: {
    skipToContent: string;
    heroCta: string;
    heroCtaSecondary: string;
    seeAllProjects: string;
    seeFullTeam: string;
    seeAllAwards: string;
    meetTheBum: string;
    contactUs: string;
    backToTeam: string;
    backToProjects: string;
    otherMembers: string;
    comingSoon: string;
    close: string;
    carouselPrev: string;
    carouselNext: string;
    draftBadge: string;
    inProgress: string;
    noProjectsYet: string;
    noAwardsYet: string;
    backToHome: string;
    backToTop: string;
    easterEgg: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLeadSuffix: string;
    statMembers: string;
    statProjects: string;
    statSkills: string;
    section1Eyebrow: string;
    section1Title: string;
    section1Body: string;
    section2Eyebrow: string;
    section2Title: string;
    section3Eyebrow: string;
    section3Title: string;
    leadershipEyebrow: string;
    leadershipTitle: string;
    awardsEyebrow: string;
    awardsTitle: string;
    awardsLead: string;
    closingTitle: string;
    closingBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    leadTemplate: string;
    whatTitle: string;
    whatBody: string;
    relationTitle: string;
    relationBody: string;
    howTitle: string;
    howBody: string;
    whereTitle: string;
    whereBodyPrefix: string;
    whereBodyLink: string;
    whereBodySuffix: string;
    sloganEyebrow: string;
    sloganWord1: string;
    sloganWord2: string;
    sloganWord3: string;
    sloganToggle: string;
    sloganBody: string;
  };
  team: {
    eyebrow: string;
    title: string;
    lead: string;
    ledByPrefix: string;
    bumTitle: string;
    filterBySkill: string;
    noMembersForSkill: string;
  };
  member: {
    educationTitle: string;
    additionalTraining: string;
    skillsTitle: string;
    personalSkillsTitle: string;
    interestsTitle: string;
    projectsTitle: string;
    role: string;
    tools: string;
    result: string;
    experienceTitle: string;
    goalsTitle: string;
    shortTerm: string;
    longTerm: string;
    placeholderIntro: string;
    placeholderEducation: string;
    placeholderSkills: string;
    placeholderProjects: string;
    statProjects: string;
    statSkills: string;
    statLanguages: string;
    ctaExploreProjects: string;
    ctaViewSkills: string;
    ctaDownloadCv: string;
    navOverview: string;
    navSkills: string;
    navProjects: string;
    navCv: string;
    toolkitTitle: string;
    chartLanguagesTitle: string;
    chartSkillsTitle: string;
    chartProjectsTitle: string;
    chartSummaryLabel: string;
    filterAll: string;
    filterByTool: string;
    statusCompleted: string;
    cvSectionTitle: string;
    cvSectionBody: string;
    cvDownload: string;
    cvView: string;
    cvComingSoon: string;
    cvComingSoonBody: string;
  };
  bum: {
    eyebrow: string;
    title: string;
    responsibilitiesTitle: string;
    philosophyTitle: string;
    placeholderIntro: string;
    placeholderResponsibilities: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    contributorsPrefix: string;
    visitSite: string;
    viewDetails: string;
    aboutTitle: string;
    designPhilosophyTitle: string;
    technicalImplementationTitle: string;
    keyFeaturesTitle: string;
    challengesTitle: string;
    currentProgressTitle: string;
    sourceCode: string;
    contributorsTitle: string;
    toolsTitle: string;
    skillsTitle: string;
    galleryTitle: string;
    galleryInspect: string;
    videoTitle: string;
    outcomeTitle: string;
    documentsTitle: string;
    downloadDocument: string;
    otherProjectsTitle: string;
  };
  awards: {
    eyebrow: string;
    title: string;
    lead: string;
    winnerPending: string;
    awardedTo: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    hasEmailPrefix: string;
    noEmailPrefix: string;
    noEmailAtOrg: string;
    noEmailOrContact: string;
    noEmailLinkText: string;
    instagramLabel: string;
    instagramHandle: string;
    phoneLabel: string;
    emailLabel: string;
    websiteLabel: string;
    copyLabel: string;
    copiedLabel: string;
  };
  footer: {
    affiliation: string;
    contactLabel: string;
    noContact: string;
    parentInquiries: string;
    rights: string;
  };
  notFound: {
    title: string;
    body: string;
  };
  sound: {
    play: string;
    stop: string;
    replay: string;
  };
}

export const ui: Record<'en' | 'fr', UiDict> = {
  en: {
    meta: { htmlLang: 'en' },
    nav: {
      primaryLabel: 'Primary',
      footerLabel: 'Footer',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      team: 'Team',
      awards: 'Awards',
      contact: 'Contact',
      menuLabel: 'Menu',
      langSwitchLabel: 'Choose language',
      themeToggleLabel: 'Toggle color theme',
      themeToggleToLight: 'Switch to light mode',
      themeToggleToDark: 'Switch to dark mode',
      soundToggleLabel: 'Interface sound',
      soundEnable: 'Enable interface sounds',
      soundDisable: 'Mute interface sounds',
    },
    common: {
      skipToContent: 'Skip to content',
      heroCta: 'Discover our work',
      heroCtaSecondary: "Let's collaborate",
      seeAllProjects: 'See all projects',
      seeFullTeam: 'Meet the full team',
      seeAllAwards: 'See all awards',
      meetTheBum: 'Meet our BUM',
      contactUs: 'Get in touch',
      backToTeam: '← Back to team',
      backToProjects: '← Back to projects',
      otherMembers: 'Other members',
      comingSoon: 'Content coming soon.',
      close: 'Close',
      carouselPrev: 'Previous award',
      carouselNext: 'Next award',
      draftBadge: 'Draft',
      inProgress: 'In progress',
      noProjectsYet: 'No projects published yet - check back soon.',
      noAwardsYet: 'Award categories are still being finalized.',
      backToHome: 'Back to home',
      backToTop: 'Back to top',
      easterEgg: "Challenges are our business - and you just found one. Nice.",
    },
    home: {
      heroEyebrow: 'Seven engineering students, one business unit',
      heroTitle: 'Seven engineering students at ENISo, one business unit.',
      heroLeadSuffix:
        "We build, learn and ship projects together - from embedded electronics to the web platform you're reading this on.",
      statMembers: 'Members',
      statProjects: 'Projects done',
      statSkills: 'Technical skills',
      section1Eyebrow: 'Who we are',
      section1Title: "A team built on JEENISo's engineering culture",
      section1Body:
        "BU4 is one of JEENISo's business units - the Junior Enterprise of ENISo (École Nationale d'Ingénieurs de Sousse). Our seven members come from different engineering tracks (applied computer science, embedded telecommunications, automotive software, industrial electronics) and work together on technical projects, from first prototypes to this very website.",
      section2Eyebrow: 'Our work',
      section2Title: 'Featured projects',
      section3Eyebrow: 'The team',
      section3Title: 'Meet the seven members of BU4',
      leadershipEyebrow: 'Leadership',
      leadershipTitle: 'Business Unit Manager',
      awardsEyebrow: 'Team culture',
      awardsTitle: 'BU4 Awards',
      awardsLead: 'A friendly, honest way to recognize what makes this team work.',
      closingTitle: 'Want to work with BU4?',
      closingBody: 'Explore our projects or get in touch to talk about collaborating.',
    },
    about: {
      eyebrow: 'About',
      title: 'About Business Unit 4',
      leadTemplate: '{fullName} is one of the business units inside {parentOrg}, {parentOrgFull}.',
      whatTitle: 'What BU4 is',
      whatBody:
        "BU4 brings together seven engineering students at ENISo across applied computer science, embedded telecommunications, automotive software and industrial electronics. As a business unit of JEENISo, the team takes part in the Junior Enterprise's collective challenges and works on its own technical projects.",
      relationTitle: 'Relationship with JEENISo',
      relationBody:
        "JEENISo is the Junior Enterprise of ENISo (École Nationale d'Ingénieurs de Sousse). Each BU4 member is also a JEENISo member, and the team's work - including this website - contributes to JEENISo's broader activities.",
      howTitle: 'How the team works',
      howBody:
        "Members come from different specialties and bring different technical strengths - embedded systems, electronics, programming and web development. The team's first shared project, this portfolio website, was built collaboratively: content, design and development split across several members.",
      whereTitle: 'Where we want to go',
      whereBodyPrefix:
        "Individually, members are working toward internships, certifications and specializations in fields like ADAS, embedded AI, IoT and web development. As BU4, the team is still early in establishing its collective project track record - see the",
      whereBodyLink: 'Projects',
      whereBodySuffix: "page for what's been confirmed so far.",
      sloganEyebrow: 'Our slogan',
      sloganWord1: 'Challenges',
      sloganWord2: 'are',
      sloganWord3: 'our business',
      sloganToggle: 'Why this slogan?',
      sloganBody:
        "We chose “Challenges are our business” because that's exactly who we are: a team that's eager to take on every challenge and give it everything we've got.",
    },
    team: {
      eyebrow: 'The team',
      title: 'The seven members of BU4',
      lead: 'Each profile links to a full individual portfolio with skills, projects and interests.',
      ledByPrefix: 'Led by',
      bumTitle: 'Business Unit Manager',
      filterBySkill: 'Filter by skill',
      noMembersForSkill: 'No one on the team has listed this skill yet.',
    },
    member: {
      educationTitle: 'Education',
      additionalTraining: 'Additional training',
      skillsTitle: 'Skills & languages',
      personalSkillsTitle: 'Personal skills',
      interestsTitle: 'Interests',
      projectsTitle: 'Projects',
      role: 'Role',
      tools: 'Tools',
      result: 'Result',
      experienceTitle: 'Experience & activities',
      goalsTitle: 'Goals',
      shortTerm: 'Short term',
      longTerm: 'Long term',
      placeholderIntro: 'personal introduction',
      placeholderEducation: 'education',
      placeholderSkills: 'skills',
      placeholderProjects: 'projects',
      statProjects: 'Projects',
      statSkills: 'Technical skills',
      statLanguages: 'Languages',
      ctaExploreProjects: 'Explore projects',
      ctaViewSkills: 'View skills',
      ctaDownloadCv: 'Download CV',
      navOverview: 'Overview',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navCv: 'CV',
      toolkitTitle: 'Technical toolkit',
      chartLanguagesTitle: 'Languages',
      chartSkillsTitle: 'Skills by category',
      chartProjectsTitle: 'Projects by status',
      chartSummaryLabel: 'Text summary',
      filterAll: 'All',
      filterByTool: 'Filter by tool',
      statusCompleted: 'Completed',
      cvSectionTitle: 'My CV — take it with you',
      cvSectionBody: 'A printable summary of the information on this page.',
      cvDownload: 'Download CV (PDF)',
      cvView: 'View CV',
      cvComingSoon: 'CV coming soon',
      cvComingSoonBody: "This member's PDF résumé hasn't been added yet.",
    },
    bum: {
      eyebrow: 'Leadership',
      title: 'Business Unit Manager',
      responsibilitiesTitle: 'Responsibilities',
      philosophyTitle: 'Leadership philosophy',
      placeholderIntro: 'BUM introduction',
      placeholderResponsibilities: 'BUM responsibilities',
    },
    projects: {
      eyebrow: 'Our work',
      title: 'Collective projects',
      lead: "Work the team has taken on together, as BU4. Individual academic and club projects live on each member's own page.",
      contributorsPrefix: 'By',
      visitSite: 'Visit site',
      viewDetails: 'View details →',
      aboutTitle: 'About this project',
      designPhilosophyTitle: 'Design philosophy',
      technicalImplementationTitle: 'Technical implementation',
      keyFeaturesTitle: 'Key features',
      challengesTitle: 'Challenges & decisions',
      currentProgressTitle: 'Current progress',
      sourceCode: 'Source code',
      contributorsTitle: 'Contributors',
      toolsTitle: 'Tools & technologies',
      skillsTitle: 'Skills used',
      galleryTitle: 'Gallery',
      galleryInspect: 'View full-size photo',
      videoTitle: 'Video',
      outcomeTitle: 'Outcome',
      documentsTitle: 'Documents',
      downloadDocument: 'Download',
      otherProjectsTitle: 'Other projects',
    },
    awards: {
      eyebrow: 'Team culture',
      title: 'BU4 Awards',
      lead: 'Lighthearted, team-picked categories celebrating how BU4 actually works together.',
      winnerPending: 'Winner to be announced',
      awardedTo: 'Awarded to',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Contact BU4',
      lead: "Reach the team directly, or follow along on Instagram.",
      hasEmailPrefix: 'Reach the team directly at',
      noEmailPrefix: 'BU4 does not yet have a dedicated public contact address. In the meantime, you can reach',
      noEmailAtOrg: 'at',
      noEmailOrContact: 'or contact a member directly through the links on their',
      noEmailLinkText: 'team profile',
      instagramLabel: 'Instagram',
      instagramHandle: '@wearebu4',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      websiteLabel: 'JEENISo website',
      copyLabel: 'Copy',
      copiedLabel: 'Copied!',
    },
    footer: {
      affiliation: 'Business Unit 4 is part of',
      contactLabel: 'Contact',
      noContact: 'Official BU4 contact pending confirmation.',
      parentInquiries: 'general inquiries:',
      rights: 'All rights reserved.',
    },
    notFound: {
      title: 'Page not found',
      body: "The page you're looking for doesn't exist or has moved.",
    },
    sound: {
      play: 'Play BU4 slogan',
      stop: 'Stop',
      replay: 'Replay',
    },
  },
  fr: {
    meta: { htmlLang: 'fr' },
    nav: {
      primaryLabel: 'Navigation principale',
      footerLabel: 'Pied de page',
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      team: 'Équipe',
      awards: 'Récompenses',
      contact: 'Contact',
      menuLabel: 'Menu',
      langSwitchLabel: 'Choisir la langue',
      themeToggleLabel: 'Changer le thème',
      themeToggleToLight: 'Passer au mode clair',
      themeToggleToDark: 'Passer au mode sombre',
      soundToggleLabel: "Son de l'interface",
      soundEnable: "Activer les sons de l'interface",
      soundDisable: "Couper les sons de l'interface",
    },
    common: {
      skipToContent: 'Aller au contenu',
      heroCta: 'Découvrir nos projets',
      heroCtaSecondary: 'Collaborer avec nous',
      seeAllProjects: 'Voir tous les projets',
      seeFullTeam: "Voir toute l'équipe",
      seeAllAwards: 'Voir toutes les récompenses',
      meetTheBum: 'Découvrir notre BUM',
      contactUs: 'Nous contacter',
      backToTeam: "← Retour à l'équipe",
      backToProjects: '← Retour aux projets',
      otherMembers: 'Autres membres',
      comingSoon: 'Contenu à venir.',
      close: 'Fermer',
      carouselPrev: 'Récompense précédente',
      carouselNext: 'Récompense suivante',
      draftBadge: 'Brouillon',
      inProgress: 'En cours',
      noProjectsYet: 'Aucun projet publié pour le moment - revenez bientôt.',
      noAwardsYet: 'Les catégories de récompenses sont encore en préparation.',
      backToHome: "Retour à l'accueil",
      backToTop: 'Retour en haut',
      easterEgg: "Les défis, c'est notre métier - et vous venez d'en trouver un. Joli.",
    },
    home: {
      heroEyebrow: 'Sept élèves-ingénieurs, une business unit',
      heroTitle: "Sept élèves-ingénieurs de l'ENISo, une seule business unit.",
      heroLeadSuffix:
        "Nous construisons, apprenons et menons des projets ensemble - des systèmes embarqués à la plateforme web que vous consultez en ce moment.",
      statMembers: 'Membres',
      statProjects: 'Projets réalisés',
      statSkills: 'Compétences techniques',
      section1Eyebrow: 'Qui sommes-nous',
      section1Title: "Une équipe portée par la culture d'ingénierie de JEENISo",
      section1Body:
        "BU4 est l'une des business units de JEENISo, la Junior Entreprise de l'ENISo (École Nationale d'Ingénieurs de Sousse). Nos sept membres viennent de filières d'ingénierie différentes (informatique appliquée, télécommunications embarquées, logiciel automobile, génie électronique industriel) et travaillent ensemble sur des projets techniques, des premiers prototypes jusqu'à ce site web.",
      section2Eyebrow: 'Notre travail',
      section2Title: 'Projets phares',
      section3Eyebrow: "L'équipe",
      section3Title: 'Découvrez les sept membres de BU4',
      leadershipEyebrow: 'Direction',
      leadershipTitle: 'Business Unit Manager',
      awardsEyebrow: "Esprit d'équipe",
      awardsTitle: 'Récompenses BU4',
      awardsLead: 'Une manière conviviale et sincère de reconnaître ce qui fait la force de cette équipe.',
      closingTitle: 'Envie de travailler avec BU4 ?',
      closingBody: 'Découvrez nos projets ou contactez-nous pour en discuter.',
    },
    about: {
      eyebrow: 'À propos',
      title: 'À propos de Business Unit 4',
      leadTemplate: '{fullName} est l’une des business units de {parentOrg}, {parentOrgFull}.',
      whatTitle: "Ce qu'est BU4",
      whatBody:
        "BU4 réunit sept élèves-ingénieurs de l'ENISo issus de l'informatique appliquée, des télécommunications embarquées, du logiciel automobile et du génie électronique industriel. En tant que business unit de JEENISo, l'équipe participe aux défis collectifs de la Junior Entreprise et mène ses propres projets techniques.",
      relationTitle: 'Relation avec JEENISo',
      relationBody:
        "JEENISo est la Junior Entreprise de l'ENISo (École Nationale d'Ingénieurs de Sousse). Chaque membre de BU4 est également membre de JEENISo, et le travail de l'équipe - y compris ce site web - contribue aux activités plus larges de JEENISo.",
      howTitle: "Comment l'équipe travaille",
      howBody:
        "Les membres viennent de spécialités différentes et apportent des compétences techniques variées - systèmes embarqués, électronique, programmation et développement web. Le premier projet commun de l'équipe, ce site de portfolio, a été construit de façon collaborative : contenu, design et développement répartis entre plusieurs membres.",
      whereTitle: 'Où nous voulons aller',
      whereBodyPrefix:
        "Individuellement, les membres visent des stages, des certifications et des spécialisations dans des domaines comme l'ADAS, l'IA embarquée ou le développement web. En tant que BU4, l'équipe en est encore aux débuts de son parcours de projets collectifs - consultez la page",
      whereBodyLink: 'Projets',
      whereBodySuffix: 'pour voir ce qui a été confirmé jusqu’ici.',
      sloganEyebrow: 'Notre devise',
      sloganWord1: 'Les défis',
      sloganWord2: 'sont',
      sloganWord3: 'notre métier',
      sloganToggle: 'Pourquoi cette devise ?',
      sloganBody:
        'Nous avons choisi « Les défis sont notre métier » parce que c’est exactement qui nous sommes : une équipe prête à relever chaque défi et à tout donner.',
    },
    team: {
      eyebrow: "L'équipe",
      title: 'Les sept membres de BU4',
      lead: 'Chaque profil renvoie vers un portfolio individuel complet avec compétences, projets et centres d’intérêt.',
      ledByPrefix: 'Dirigée par',
      bumTitle: 'Business Unit Manager',
      filterBySkill: 'Filtrer par compétence',
      noMembersForSkill: "Personne dans l'équipe n'a encore indiqué cette compétence.",
    },
    member: {
      educationTitle: 'Formation',
      additionalTraining: 'Formations complémentaires',
      skillsTitle: 'Compétences & langues',
      personalSkillsTitle: 'Compétences personnelles',
      interestsTitle: "Centres d'intérêt",
      projectsTitle: 'Projets',
      role: 'Rôle',
      tools: 'Outils',
      result: 'Résultat',
      experienceTitle: 'Expérience & activités',
      goalsTitle: 'Objectifs',
      shortTerm: 'Court terme',
      longTerm: 'Long terme',
      placeholderIntro: 'présentation personnelle',
      placeholderEducation: 'formation',
      placeholderSkills: 'compétences',
      placeholderProjects: 'projets',
      statProjects: 'Projets',
      statSkills: 'Compétences techniques',
      statLanguages: 'Langues',
      ctaExploreProjects: 'Voir les projets',
      ctaViewSkills: 'Voir les compétences',
      ctaDownloadCv: 'Télécharger le CV',
      navOverview: 'Profil',
      navSkills: 'Compétences',
      navProjects: 'Projets',
      navCv: 'CV',
      toolkitTitle: 'Boîte à outils technique',
      chartLanguagesTitle: 'Langues',
      chartSkillsTitle: 'Compétences par catégorie',
      chartProjectsTitle: 'Projets par statut',
      chartSummaryLabel: 'Résumé textuel',
      filterAll: 'Tout',
      filterByTool: 'Filtrer par outil',
      statusCompleted: 'Terminé',
      cvSectionTitle: 'Mon CV — à emporter',
      cvSectionBody: 'Un résumé imprimable des informations de cette page.',
      cvDownload: 'Télécharger le CV (PDF)',
      cvView: 'Voir le CV',
      cvComingSoon: 'CV bientôt disponible',
      cvComingSoonBody: "Le CV PDF de ce membre n'a pas encore été ajouté.",
    },
    bum: {
      eyebrow: 'Direction',
      title: 'Business Unit Manager',
      responsibilitiesTitle: 'Responsabilités',
      philosophyTitle: 'Philosophie de leadership',
      placeholderIntro: 'présentation du BUM',
      placeholderResponsibilities: 'responsabilités du BUM',
    },
    projects: {
      eyebrow: 'Notre travail',
      title: 'Projets collectifs',
      lead: "Les projets menés ensemble, en tant que BU4. Les projets académiques et associatifs individuels se trouvent sur la page de chaque membre.",
      contributorsPrefix: 'Par',
      visitSite: 'Voir le site',
      viewDetails: 'Voir les détails →',
      aboutTitle: 'À propos de ce projet',
      designPhilosophyTitle: 'Philosophie de conception',
      technicalImplementationTitle: 'Implémentation technique',
      keyFeaturesTitle: 'Fonctionnalités clés',
      challengesTitle: 'Défis et choix techniques',
      currentProgressTitle: 'Avancement actuel',
      sourceCode: 'Code source',
      contributorsTitle: 'Contributeurs',
      toolsTitle: 'Outils et technologies',
      skillsTitle: 'Compétences mobilisées',
      galleryTitle: 'Galerie',
      galleryInspect: 'Voir la photo en pleine taille',
      videoTitle: 'Vidéo',
      outcomeTitle: 'Résultat',
      documentsTitle: 'Documents',
      downloadDocument: 'Télécharger',
      otherProjectsTitle: 'Autres projets',
    },
    awards: {
      eyebrow: "Esprit d'équipe",
      title: 'Récompenses BU4',
      lead: "Des catégories légères, choisies par l'équipe, qui célèbrent la vraie façon dont BU4 fonctionne ensemble.",
      winnerPending: 'Gagnant à annoncer',
      awardedTo: 'Décerné à',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contacter BU4',
      lead: "Contactez l'équipe directement, ou suivez-nous sur Instagram.",
      hasEmailPrefix: "Contactez l'équipe directement à",
      noEmailPrefix: "BU4 n'a pas encore d'adresse de contact publique dédiée. En attendant, vous pouvez contacter",
      noEmailAtOrg: 'à',
      noEmailOrContact: "ou contacter un membre directement via les liens sur son",
      noEmailLinkText: 'profil',
      instagramLabel: 'Instagram',
      instagramHandle: '@wearebu4',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
      websiteLabel: 'Site de JEENISo',
      copyLabel: 'Copier',
      copiedLabel: 'Copié !',
    },
    footer: {
      affiliation: 'Business Unit 4 fait partie de',
      contactLabel: 'Contact',
      noContact: 'Contact officiel de BU4 à confirmer.',
      parentInquiries: 'demandes générales :',
      rights: 'Tous droits réservés.',
    },
    notFound: {
      title: 'Page introuvable',
      body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    },
    sound: {
      play: "Écouter le slogan BU4",
      stop: 'Arrêter',
      replay: 'Réécouter',
    },
  },
};
