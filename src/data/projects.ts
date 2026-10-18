import type { CollectiveProject } from './types';
import { L } from './types.ts';

/**
 * Collective BU4 projects. Only verified, cross-referenced work goes here.
 * - bu4-portfolio-website: independently named by fedi-khouildi and
 *   rihab-trifi in their intake forms; credits all seven members since
 *   it's the team's shared portfolio site, not just the two who happened
 *   to mention it in their own CV.
 * - re-imaginelab-campaign: confirmed by the team to involve all seven
 *   members across video (script/execution/behind-the-scenes/editing),
 *   the campaign website, and customer-acquisition strategy.
 */
export const projects: CollectiveProject[] = [
  {
    slug: 'bu4-portfolio-website',
    title: L('BU4 portfolio website', 'Site web portfolio de BU4'),
    description: L(
      "An ongoing project to design and develop BU4's shared portfolio, bringing together the team's engineering background, technical projects and creative interests in a single interactive experience. Rather than relying on a conventional static template, the team is exploring interactive visualizations, dynamic project showcases and thoughtful user interactions to create a portfolio that reflects both its technical skills and its personality.",
      "Un projet continu de conception et de développement du portfolio commun de BU4, réunissant le parcours d'ingénierie de l'équipe, ses projets techniques et ses centres d'intérêt créatifs dans une seule expérience interactive. Plutôt que de s'appuyer sur un modèle statique classique, l'équipe explore des visualisations interactives, des présentations de projets dynamiques et des interactions utilisateur réfléchies pour créer un portfolio qui reflète à la fois ses compétences techniques et sa personnalité."
    ),
    category: L('Web development', 'Développement web'),
    status: 'in-progress',
    memberSlugs: [
      'ahmed-belgacem',
      'amena-aouichaoui',
      'fedi-khouildi',
      'lina-ben-hadj-slama',
      'nour-lemjid',
      'rihab-trifi',
      'walid-ben-said',
    ],
    tools: [L('Astro', 'Astro'), L('TypeScript', 'TypeScript'), L('HTML', 'HTML'), L('CSS', 'CSS'), L('JavaScript', 'JavaScript'), L('GitHub', 'GitHub')],
    skills: [
      L('UI/UX design', 'Design UI/UX'),
      L('Responsive design', 'Design responsive'),
      L('Accessibility', 'Accessibilité'),
      L('Bilingual content architecture', 'Architecture de contenu bilingue'),
    ],
    outcome: null,
    link: 'https://elbacha-ux.github.io/portfolio-bu4/',
    image: 'images/projects/bu4-portfolio-website/slogan-cover.jpg',
    imageAlt: L("The site's 'Challenges are our business' slogan section", "La section devise « Les défis sont notre métier » du site"),
    videoUrl: null,
    documentsNote: null,
    repositoryUrl: 'https://github.com/elbacha-ux/portfolio-bu4',
    caseStudy: {
      overview: L(
        "BU4's portfolio website is the team's shared showcase - a bilingual site presenting the group's identity, individual member profiles, collective projects and skills in one place. It started as a joint deliverable and has grown into an ongoing design and development project, continuously refined as new content and features are added.",
        "Le site portfolio de BU4 est la vitrine commune de l'équipe - un site bilingue qui présente l'identité du groupe, les profils individuels des membres, les projets collectifs et les compétences, réunis au même endroit. Né comme un livrable commun, il est devenu un projet de conception et de développement continu, affiné au fil de l'ajout de nouveaux contenus et fonctionnalités."
      ),
      designPhilosophy: L(
        "Rather than a conventional static template, the site is built around honest, interactive case studies: real project detail pages with photo galleries, document downloads and verified data, instead of generic marketing copy. Content that hasn't been confirmed by a team member - an award winner, a CV, a project outcome - is never invented; the interface shows a clear \"coming soon\" state instead. The goal is a portfolio that feels designed and personal without overstating what has actually been done.",
        "Plutôt qu'un modèle statique classique, le site s'organise autour d'études de cas honnêtes et interactives : de véritables pages de détail de projet avec galeries photo, documents téléchargeables et données vérifiées, plutôt qu'un discours marketing générique. Un contenu non confirmé par un membre de l'équipe - un lauréat de récompense, un CV, un résultat de projet - n'est jamais inventé : l'interface affiche un état « bientôt disponible » à la place. L'objectif est un portfolio qui paraît conçu et personnel sans jamais exagérer ce qui a réellement été fait."
      ),
      technicalImplementation: L(
        "Built with Astro and TypeScript as a fully static site, deployed to GitHub Pages. Content lives in typed data files (src/data/) rather than a CMS, so every member, project and award is checked at build time. The site is bilingual through mirrored static routes (English at the root, French under /fr/) sharing the same view components, with every UI string centralized in one typed dictionary - a missing translation fails the build instead of silently falling back to English. Dark mode uses CSS custom properties with a blocking inline script to avoid a flash of the wrong theme. There is no UI framework or charting library: skill and status charts are hand-built with CSS, and interactions like the image lightbox and the project carousel are plain, dependency-free JavaScript.",
        "Construit avec Astro et TypeScript sous forme de site entièrement statique, déployé sur GitHub Pages. Le contenu vit dans des fichiers de données typés (src/data/) plutôt que dans un CMS, de sorte que chaque membre, projet et récompense est vérifié à la compilation. Le site est bilingue grâce à des routes statiques miroir (anglais à la racine, français sous /fr/) qui partagent les mêmes composants de vue, avec chaque texte d'interface centralisé dans un dictionnaire typé unique - une traduction manquante fait échouer la compilation au lieu de basculer silencieusement vers l'anglais. Le mode sombre utilise des variables CSS avec un script inline bloquant pour éviter un flash du mauvais thème. Il n'y a ni framework d'interface ni bibliothèque de graphiques : les graphiques de compétences et de statut sont construits en CSS pur, et des interactions comme la visionneuse d'images ou le carrousel de projets reposent sur du JavaScript simple, sans dépendance."
      ),
      keyFeaturesDone: [
        L('Bilingual EN/FR content with full UI coverage', 'Contenu bilingue EN/FR avec couverture complète de l’interface'),
        L('Light/dark theme toggle with no flash of the wrong theme', 'Bascule thème clair/sombre sans flash du mauvais thème'),
        L('Responsive layouts for mobile, tablet and desktop', 'Mises en page responsives (mobile, tablette, bureau)'),
        L('Interactive project detail pages with photo galleries and a lightbox', 'Pages de détail de projet interactives avec galeries photo et visionneuse'),
        L('Honest, data-driven skill and language charts - no invented scores', 'Graphiques de compétences et de langues honnêtes et basés sur des données réelles - aucun score inventé'),
        L('Optional interface sound design, off by default', 'Système sonore d’interface optionnel, désactivé par défaut'),
        L('Downloadable CVs and supporting documents where supplied', 'CV et documents téléchargeables lorsqu’ils sont fournis'),
        L('Infinite, swipeable awards carousel', 'Carrousel de récompenses infini et glissable'),
      ],
      keyFeaturesInProgress: [
        L('Completing remaining member CVs, photos and project media as the team supplies them', 'Finalisation des CV, photos et médias de projet restants au fur et à mesure que l’équipe les fournit'),
        L('Refining accessibility and motion details across the site', 'Affinement des détails d’accessibilité et d’animation sur l’ensemble du site'),
      ],
      challengesAndDecisions: L(
        "Keeping the site honest while making it feel complete was the main tension: every placeholder had to degrade gracefully (a missing CV shows a \"coming soon\" state, not a broken link) rather than being hidden or faked. Static mirrored routes were chosen over a dynamic [locale] routing scheme for simplicity and to catch missing translations at build time. Charts and interactive widgets were hand-built in CSS and vanilla JavaScript instead of adding a library, since the data sets are small and the goal was to keep the project dependency-light and easy to reason about.",
        "La principale tension a été de garder le site honnête tout en le faisant paraître abouti : chaque élément manquant doit se dégrader proprement (un CV absent affiche un état « bientôt disponible », jamais un lien cassé) plutôt que d'être caché ou simulé. Des routes statiques miroir ont été préférées à un système de routage dynamique par locale, pour plus de simplicité et pour détecter les traductions manquantes dès la compilation. Les graphiques et widgets interactifs ont été construits à la main en CSS et en JavaScript natif plutôt que d'ajouter une bibliothèque, les jeux de données étant réduits et l'objectif étant de garder le projet léger en dépendances et facile à comprendre."
      ),
      currentProgress: L(
        "Actively maintained. Member profiles, CVs and project media are added as the team supplies them, and the interaction design - animations, sound, navigation - keeps being refined. This entry will keep reflecting the site's real state rather than a finished snapshot.",
        "Activement maintenu. Les profils des membres, les CV et les médias de projet sont ajoutés au fur et à mesure que l'équipe les fournit, et le design des interactions - animations, son, navigation - continue d'être affiné. Cette fiche continuera de refléter l'état réel du site plutôt qu'un instantané figé."
      ),
    },
  },
  {
    slug: 're-imaginelab-campaign',
    title: L('Re-ImagineLab', 'Re-ImagineLab'),
    description: L(
      "A promotional campaign for Re-ImagineLab, built as a whole-team effort: script by Nour Lemjid, on-set execution by Amena Aouichaoui (who also designed the poster), behind-the-scenes footage by Walid Ben Said, video editing by Fedi Khouildi, the website by Lina Ben Hadj Slama and Ahmed Belgacem, and customer-acquisition strategy by Rihab Trifi.",
      "Une campagne promotionnelle pour Re-ImagineLab, menée par toute l'équipe : scénario par Nour Lemjid, exécution sur le tournage par Amena Aouichaoui (qui a aussi conçu l'affiche), images des coulisses par Walid Ben Said, montage vidéo par Fedi Khouildi, le site web par Lina Ben Hadj Slama et Ahmed Belgacem, et la stratégie d'acquisition de clients par Rihab Trifi."
    ),
    category: L('Campaign', 'Campagne'),
    status: 'completed',
    memberSlugs: [
      'ahmed-belgacem',
      'amena-aouichaoui',
      'fedi-khouildi',
      'lina-ben-hadj-slama',
      'nour-lemjid',
      'rihab-trifi',
      'walid-ben-said',
    ],
    tools: [L('CapCut', 'CapCut'), L('Photoshop', 'Photoshop'), L('Google Flow', 'Google Flow'), L('GitHub Pages', 'GitHub Pages')],
    skills: [
      L('Video editing', 'Montage vidéo'),
      L('Shooting', 'Tournage'),
      L('Teamwork', "Travail d'équipe"),
      L('Creativity', 'Créativité'),
    ],
    outcome: null,
    link: 'https://ahmedbfg.github.io/Re-imagine-Lab/',
    image: 'images/projects/re-imaginelab-campaign/poster.jpg',
    imageAlt: L('Re-ImagineLab campaign poster', 'Affiche de la campagne Re-ImagineLab'),
    videoUrl: null,
    documentsNote: L(
      "Rihab Trifi wrote the 12-month PR and partnerships strategy behind this campaign: four focus areas (press relations, content and social media, events and community, and partnerships), four target audiences (large companies, SMEs, schools and institutions, and media), and concrete 12-month goals - including qualified media mentions, published case studies, workshops and quote requests.",
      "Rihab Trifi a rédigé la stratégie de relations publiques et de partenariats sur 12 mois de cette campagne : quatre axes (relations presse, contenus et réseaux sociaux, événements et communauté, partenariats), quatre cibles (grandes entreprises, PME, écoles et institutions, médias), et des objectifs concrets à 12 mois - dont des retombées médias qualifiées, des études de cas publiées, des ateliers et des demandes de devis."
    ),
    repositoryUrl: null,
    caseStudy: {
      overview: L(
        "Re-Imagine FabLab Solidaire is ENISo's open-access fabrication lab - laser cutting, 3D printing, CNC and VR, backed by JEENISo and ISO 9001-certified. BU4 produced its promotional campaign end to end: a short video, a poster, a companion website and a 12-month PR strategy, each piece owned by a different member and brought together as one deliverable.",
        "Re-Imagine FabLab Solidaire est le laboratoire de fabrication ouvert de l'ENISo - découpe laser, impression 3D, CNC et réalité virtuelle, adossé à JEENISo et certifié ISO 9001. BU4 a produit sa campagne promotionnelle de bout en bout : une courte vidéo, une affiche, un site web compagnon et une stratégie de relations publiques sur 12 mois, chaque volet porté par un membre différent et réunis en un seul livrable."
      ),
      designPhilosophy: L(
        'The campaign leans on the positioning from Rihab Trifi\'s strategy: a FabLab that\'s accessible to everyone, complete (concept to finished part, mechanical to electronic to digital) and reliable (backed by JEENISo\'s ISO 9001 certification and real client work). The tagline captures it directly: "Re-Imagine: from idea to object."',
        "La campagne s'appuie sur le positionnement défini dans la stratégie de Rihab Trifi : un FabLab accessible à tous, complet (de l'idée à la pièce finie, du mécanique à l'électronique en passant par le numérique) et fiable (adossé à la certification ISO 9001 de JEENISo et à des réalisations clients réelles). La signature le résume directement : « Re-Imagine : de l'idée à l'objet »."
      ),
      technicalImplementation: L(
        'Edited in CapCut, with graphics from Photoshop and AI-assisted video elements from Google Flow. The companion website was built separately by Lina Ben Hadj Slama and Ahmed Belgacem and is hosted on GitHub Pages.',
        "Montée sous CapCut, avec des éléments graphiques réalisés sous Photoshop et des éléments vidéo assistés par IA via Google Flow. Le site web compagnon a été développé séparément par Lina Ben Hadj Slama et Ahmed Belgacem et est hébergé sur GitHub Pages."
      ),
      keyFeaturesDone: [
        L('A short promotional video', 'Une courte vidéo promotionnelle'),
        L('Campaign poster', 'Affiche de campagne'),
        L('Companion website', 'Site web compagnon'),
        L('12-month PR and partnerships strategy document', 'Document de stratégie de relations publiques et de partenariats sur 12 mois'),
      ],
      keyFeaturesInProgress: [
        L("Executing the strategy's 12-month rollout (press outreach, content calendar, events, partnerships) beyond the initial campaign assets", "Mise en œuvre du déploiement de la stratégie sur 12 mois (relations presse, calendrier de contenu, événements, partenariats) au-delà des premiers supports de campagne"),
      ],
      challengesAndDecisions: L(
        "Coordinating seven people across four different crafts - writing, filming, editing, web development and strategy - without a single point of failure was the main challenge: each piece (script, footage, edit, site, strategy) was produced independently by its owner and only combined at the end. The video stays short by design, prioritizing one clear message - the lab's accessibility and reliability - over trying to cover every service it offers.",
        "Coordonner sept personnes sur quatre savoir-faire différents - écriture, tournage, montage, développement web et stratégie - sans point de défaillance unique a été le principal défi : chaque élément (scénario, images, montage, site, stratégie) a été produit indépendamment par son responsable et assemblé seulement à la fin. La vidéo reste volontairement courte, pour privilégier un message clair et unique - l'accessibilité et la fiabilité du lab - plutôt que de vouloir couvrir tous les services proposés."
      ),
      currentProgress: null,
    },
  },
];
