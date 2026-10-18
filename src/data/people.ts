import type { Member } from './types';
import { L } from './types.ts';

/**
 * Source: structured "CV Portfolio Web" intake forms each member filled out
 * and submitted for this site (docs/content/cvs/, kept out of git - see
 * .gitignore). Each form included an explicit checkbox consenting to publish
 * the information for the web portfolio. English content is trimmed to
 * professional/public fields only; no phone numbers, addresses or ID
 * numbers were collected in the first place. French content comes from the
 * member's own original French submission wherever that wording exists, so
 * it is not a back-translation of the English copy. Nothing here is
 * invented - see MISSING_CONTENT.md for every field a member left blank.
 */
export const people: Record<string, Member> = {
  'ahmed-belgacem': {
    slug: 'ahmed-belgacem',
    name: 'Ahmed Belgacem',
    specialty: L('Applied Computer Science', 'Informatique appliquée'),
    photo: 'images/members/ahmed-belgacem.jpg',
    intro: L(
      "First-year engineering student in applied computer science at ENISo (École Nationale d'Ingénieurs de Sousse). Motivated by technological progress and by the drive to move things forward, he enjoys turning his ideas into concrete projects. Passionate about artificial intelligence, embedded systems, robotics and programming, he looks for continuous learning and new challenges.",
      "Élève-ingénieur en première année en informatique appliquée à l'ENISo (École Nationale d'Ingénieurs de Sousse). Motivé par les avancées technologiques et par la volonté d'aller de l'avant vers un avenir meilleur, il aime donner vie à ses idées à travers des projets concrets. Passionné par l'intelligence artificielle, les systèmes embarqués, la robotique et la programmation, il cherche à apprendre continuellement et à relever de nouveaux défis."
    ),
    education: {
      program: L('Applied Computer Science', 'Informatique appliquée'),
      institution: "École Nationale d'Ingénieurs de Sousse (ENISo)",
      years: '2026-2029 (engineering cycle); 2024-2026 (IPEIM preparatory classes)',
      degrees: [L('Baccalauréat', 'Baccalauréat')],
      certifications: [
        { label: L('Preparatory classes for engineering studies - IPEIM Monastir (2024-2026)', "Formation en classes préparatoires aux études d'ingénieurs - IPEIM Monastir (2024-2026)"), file: null },
        { label: L('General robotics training', 'Formation en robotique générale'), file: null },
        { label: L('Artificial intelligence training', "Formation en intelligence artificielle"), file: null },
        { label: L('3D modeling with SolidWorks', 'Formation en modélisation 3D avec SolidWorks'), file: null },
        { label: L('PCB design and fabrication', 'Formation en conception et fabrication de circuits imprimés (PCB)'), file: null },
        { label: L('Web development training', 'Formation en développement web'), file: null },
        { label: L('Public speaking training', 'Formation en prise de parole en public'), file: null },
      ],
    },
    skills: {
      technical: [
        { name: L('Python', 'Python'), level: 35 },
        { name: L('C', 'C'), level: 40 },
        { name: L('HTML/CSS/JavaScript', 'HTML/CSS/JavaScript'), level: 30 },
        { name: L('SolidWorks (3D modeling)', 'SolidWorks (modélisation 3D)'), level: 65 },
      ],
      personal: [
        L('Sense of responsibility', 'Sens des responsabilités'),
        L('Problem-solving', 'Résolution de problèmes'),
        L('Public speaking', 'Prise de parole en public'),
        L('Emotional intelligence', 'Intelligence émotionnelle'),
        L('Networking', 'Réseautage'),
        L('Flexibility', 'Flexibilité'),
      ],
      languages: [
        { name: L('Arabic', 'Arabe'), level: L('native', 'langue maternelle') },
        { name: L('English', 'Anglais'), level: L('C1', 'C1') },
        { name: L('French', 'Français'), level: L('B2', 'B2') },
        { name: L('German', 'Allemand'), level: L('B1', 'B1') },
      ],
    },
    interests: [
      L('Artificial intelligence & embedded systems', 'Intelligence artificielle et systèmes embarqués'),
      L('Robotics', 'Robotique'),
      L('Programming', 'Programmation'),
    ],
    projects: [
      {
        title: L('Smart Parking prototype', 'Prototype Smart Parking'),
        description: L(
          'A laser-cut wooden prototype of a smart parking system with an Arduino Uno-controlled circuit: a car elevator, three floors and a counter showing available spots.',
          "Prototype en bois découpé au laser, avec un circuit commandé par Arduino Uno : ascenseur pour voitures, 3 étages et compteur indiquant s'il reste des places disponibles."
        ),
        role: L(
          'Project lead - SolidWorks modeling, circuit design, I/O programming and assembly.',
          'Chef de projet - modélisation sous SolidWorks, conception du circuit, programmation des entrées/sorties et assemblage du prototype.'
        ),
        tools: [L('SolidWorks', 'SolidWorks'), L('Arduino Uno', 'Arduino Uno'), L('Laser cutting', 'Découpe laser')],
        status: 'completed',
        result: L('1st place, end-of-year high school project (2021-2022).', 'Projet de fin d’année (2e année du lycée), 1re place au classement (2021-2022).'),
        link: null,
        slug: null,
      },
      {
        title: L('Solar energy research project', "Projet de recherche sur l'énergie solaire"),
        description: L(
          'A study of solar energy from production to distribution, including interviews with solar panel installers, consumers and suppliers such as STEG.',
          "Étude de l'énergie solaire, de sa production à sa distribution, avec des entretiens auprès d'entreprises d'installation de panneaux solaires, de consommateurs et de fournisseurs comme la STEG."
        ),
        role: L('Outreach and networking with stakeholders; prototyping.', 'Réseautage et mise en relation avec les différents acteurs, réalisation de prototypes.'),
        tools: [],
        status: 'completed',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('3D-printed mobile engine', 'Moteur mobile en pièces imprimées en 3D'),
        description: L(
          'A class project building a mobile engine from parts designed in SolidWorks and 3D-printed.',
          'Construction d’un moteur mobile à partir de pièces imprimées en 3D, conçues avec SolidWorks.'
        ),
        role: L('Contributor.', 'Membre contributeur.'),
        tools: [L('SolidWorks', 'SolidWorks'), L('3D printing', 'Impression 3D')],
        status: 'completed',
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L('Member - participates in collective challenges and contributes to Business Unit 4 (BU4) activities.', 'Membre - participation aux défis collectifs et contribution aux activités de la Business Unit 4 (BU4).') },
      {
        organization: 'ATAST Robotics Club, Ksar Hellal (2017-2020)',
        detail: L(
          'Team lead - 2nd place in a line-following robot contest; 1st place in an environmental-protection pitch contest with a concept for an underwater deployable sensor that helps fishermen avoid catching endangered species.',
          "Chef d'équipe - 2e place au concours de robot suiveur de ligne ; 1re place au concours de pitch d'idées sur la protection de l'environnement, avec un capteur déployable sous l'eau qui indique aux pêcheurs s'ils peuvent jeter leurs filets sans risque, afin de limiter la capture accidentelle d'espèces menacées."
        ),
      },
    ],
    achievements: [],
    links: { email: 'belgacemahmed99@gmail.com', linkedin: null, github: 'https://github.com/AhmedBFG' },
    goals: {
      shortTerm: null,
      longTerm: L(
        'Build a better future for the next generation and a stable life for himself and his family.',
        'Construire un avenir meilleur pour les générations futures et assurer une vie stable pour lui-même et sa famille.'
      ),
    },
    isBum: false,
    leadership: null,
  },

  'amena-aouichaoui': {
    slug: 'amena-aouichaoui',
    name: 'Amena Aouichaoui',
    specialty: L('Embedded Telecommunications Engineering', 'Génie télécommunications embarquées'),
    photo: 'images/members/amena-aouichaoui.jpg',
    intro: L(
      'Engineering student in embedded telecommunications at ENISo. A passionate, curious and motivated person, always looking for new opportunities to grow her skills and bring her ideas to life. She enjoys taking on new challenges, learning continuously and working on projects that let her creativity and know-how stand out.',
      "Élève-ingénieure en génie télécommunications embarquées à l'ENISo. Une personne passionnée, curieuse et motivée, toujours à la recherche de nouvelles opportunités pour développer ses compétences et donner vie à ses idées. Elle aime relever de nouveaux défis, apprendre continuellement et travailler sur des projets qui lui permettent de mettre en valeur sa créativité et son savoir-faire."
    ),
    education: {
      program: L('Embedded Telecommunications Engineering', 'Génie télécommunications embarquées'),
      institution: 'ENISo',
      years: '2026-2027',
      degrees: [L('Baccalauréat', 'Baccalauréat')],
      certifications: [
        { label: L('Preparatory classes for engineering studies', "Formation en classes préparatoires aux études d'ingénieurs"), file: null },
        { label: L('ESP32 and Arduino training - intro to microcontroller programming and embedded projects', 'Formation en ESP32 et Arduino - initiation à la programmation de microcontrôleurs et à la réalisation de projets embarqués'), file: null },
        { label: L('Intro to web development - HTML, CSS and JavaScript', 'Formation d’initiation au développement web - découverte de HTML, CSS et JavaScript'), file: null },
        { label: L('Business Model Canvas (BMC) training', 'Formation en Business Model Canvas (BMC)'), file: null },
      ],
    },
    skills: {
      technical: [
        { name: L('HTML', 'HTML'), level: 35 },
        { name: L('CSS', 'CSS'), level: 30 },
        { name: L('JavaScript', 'JavaScript'), level: 25 },
      ],
      personal: [
        L('Time management and organization', 'Organisation et gestion du temps'),
        L('Teamwork', 'Travail en équipe'),
        L('Autonomy and sense of responsibility', 'Autonomie et sens des responsabilités'),
      ],
      languages: [
        { name: L('English', 'Anglais'), level: L('B2', 'B2') },
        { name: L('French', 'Français'), level: L('B2', 'B2') },
        { name: L('German', 'Allemand'), level: L('basic', 'notions de base') },
      ],
    },
    interests: [
      L('Technology and innovation - embedded systems and robotics', 'Technologies et innovation - systèmes embarqués et robotique'),
      L('Web development and programming', 'Développement web et programmation'),
      L('Community life and teamwork', 'Vie associative et travail en équipe'),
    ],
    projects: [
      {
        title: L('ProTask - collaborative web platform', 'ProTask - Plateforme web collaborative'),
        description: L(
          'A web platform to facilitate the management, organization and tracking of team projects.',
          "Plateforme web destinée à faciliter la gestion, l'organisation et le suivi des projets réalisés en équipe."
        ),
        role: L(
          'Contributed to designing a digital solution for coordination and collaboration between members.',
          "Contribution à la conception d'une solution numérique favorisant la coordination et la collaboration entre les membres."
        ),
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('ENISo TEAM - project management website', 'ENISo TEAM - Site web de gestion de projets'),
        description: L(
          'A platform to improve the organization and tracking of projects within a university tech club.',
          "Plateforme destinée à améliorer l'organisation et le suivi des projets au sein d'un club technologique universitaire."
        ),
        role: L('Contributed to feature scoping, site architecture and user-need analysis.', "Réflexion sur les fonctionnalités, l'architecture du site et les besoins des différents utilisateurs."),
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L('Member - participates in collective challenges and contributes to Business Unit 4 (BU4) activities.', 'Membre - participation aux défis collectifs et contribution aux activités de la Business Unit 4 (BU4).') },
      { organization: 'ODDCE Club, ENISo', detail: L('Contributed to the development of ProTask, a collaborative project-management web platform.', 'Participation au développement de ProTask, une plateforme web collaborative dédiée à la gestion, à l’organisation et au suivi des projets en équipe.') },
      { organization: 'Robotics Club, ENISo', detail: L('Took part in a hands-on Arduino-based robotics project.', 'Participation à un projet pratique de robotique basé sur Arduino.') },
    ],
    achievements: [],
    links: { email: 'Amenaaouichaoui05@gmail.com', linkedin: 'https://www.linkedin.com/in/aouichaoui-amena-5872b5444', github: null },
    goals: {
      shortTerm: L('Develop her computer science and electronics skills and gain practical experience.', 'Développer ses compétences en informatique et en électronique, acquérir une expérience pratique.'),
      longTerm: L('Contribute to innovative projects.', 'Contribuer à des projets innovants.'),
    },
    isBum: false,
    leadership: null,
  },

  'fedi-khouildi': {
    slug: 'fedi-khouildi',
    name: 'Fedi Khouildi',
    specialty: L('Embedded Telecommunications Engineering (GTE)', 'Génie des Télécommunications Embarquées (GTE)'),
    photo: 'images/members/fedi-khouildi.jpg',
    intro: L(
      "Engineering student at the École Nationale d'Ingénieurs de Sousse (ENISo), interested in programming, embedded systems and telecommunications. Aims to build technical skills through concrete projects while strengthening communication, teamwork and project-management abilities.",
      "Étudiant ingénieur à l'École Nationale d'Ingénieurs de Sousse (ENISo). Intéressé par la programmation, les systèmes embarqués et les télécommunications. Son objectif est de développer ses compétences techniques à travers des projets concrets, tout en renforçant ses capacités de communication, de travail en équipe et de gestion de projet."
    ),
    education: {
      program: L('Embedded Telecommunications Engineering (GTE)', 'Génie des Télécommunications Embarquées (GTE)'),
      institution: 'ENISo',
      years: '2026-2029',
      degrees: [
        L('Baccalauréat in mathematics (2024)', 'Baccalauréat en mathématiques (2024)'),
        L('Preparatory classes in mathematics and physics - IPEIM (2025)', 'Classes préparatoires en mathématiques et physique - IPEIM (2025)'),
      ],
      certifications: [
        {
          label: L('Python Developer Associate - DataCamp (October 2026)', 'Python Developer Associate - DataCamp (octobre 2026)'),
          file: 'documents/members/fedi-khouildi/python-developer-associate.pdf',
        },
        { label: L('Business Model Canvas (BMC) training', 'Formation en Business Model Canvas (BMC)'), file: null },
        { label: L('Networking basics', 'Notions de base en réseaux'), file: null },
        { label: L('In progress', "En cours d'acquisition"), file: null },
      ],
    },
    skills: {
      technical: [
        // Exact figures given by Fedi (C/Python/HTML/CSS/JavaScript); the
        // rest are rough estimates pending his real numbers - see the
        // MemberTechnicalSkill.level doc comment in data/types.ts.
        { name: L('Python (functions, data structures, iterables, OOP, exception handling)', 'Python (fonctions, structures de données, itérables, programmation orientée objet, gestion des exceptions)'), level: 60 },
        { name: L('C basics', 'Bases en C'), level: 30 },
        { name: L('HTML', 'HTML'), level: 50 },
        { name: L('CSS', 'CSS'), level: 30 },
        { name: L('JavaScript', 'JavaScript'), level: 30 },
        { name: L('Notions of digital telecommunications and digital systems', 'Notions en télécommunications numériques et en systèmes numériques'), level: 25 },
        { name: L('Video editing', 'Montage vidéo'), level: 65 },
        { name: L('Advanced video editing with CapCut', 'Montage vidéo avancé avec CapCut'), level: 75 },
        { name: L('AI-assisted editing (video and photo)', 'Montage assisté par IA (vidéo et photo)'), level: 60 },
        { name: L('Suno (AI music generation)', 'Suno (génération musicale par IA)'), level: 100 },
        { name: L('Google Flow (AI video generation)', 'Google Flow (génération vidéo par IA)'), level: 90 },
      ],
      personal: [
        L('Curiosity and eagerness to learn', "Curiosité et capacité d'apprentissage"),
        L('Seriousness and sense of responsibility', 'Sérieux, implication et sens des responsabilités'),
        L('Teamwork and collaboration', 'Travail en équipe et collaboration'),
        L('Interest in communication', 'Intérêt pour la communication et le développement des compétences relationnelles'),
        L('Motivated to grow in project management and leadership', 'Motivation à progresser en gestion de projet et en leadership'),
      ],
      languages: [
        { name: L('Arabic', 'Arabe'), level: L('native', 'langue maternelle') },
        { name: L('French', 'Français'), level: L('B2', 'B2') },
        { name: L('English', 'Anglais'), level: L('B2', 'B2') },
        { name: L('German', 'Allemand'), level: L('A1', 'A1') },
      ],
    },
    interests: [
      L('Embedded systems', 'Systèmes embarqués'),
      L('Telecommunications', 'Télécommunications'),
      L('Programming', 'Programmation'),
      L('IoT', 'Objets connectés (IoT)'),
      L('Cybersecurity', 'Cybersécurité'),
      L('Music and guitar', 'Musique et guitare'),
      L('Gaming - League of Legends (Master)', 'Jeux vidéo - League of Legends (rang Maître)'),
      L('Gym and calisthenics', 'Musculation et callisthénie'),
    ],
    projects: [
      {
        title: L('League of Birds', 'League of Birds'),
        description: L(
          'A Flappy Bird-style arcade game, designed and built solo in Unity.',
          "Un jeu d'arcade inspiré de Flappy Bird, conçu et développé en solo avec Unity."
        ),
        role: L('Solo design and development.', 'Conception et développement en solo.'),
        tools: [L('Unity', 'Unity'), L('C#', 'C#')],
        status: 'completed',
        result: null,
        link: null,
        slug: 'league-of-birds',
      },
      {
        title: L('BU4 portfolio website', 'Site web portfolio de BU4'),
        description: L(
          "A website presenting Business Unit 4's identity, members, skills, projects and professional information - a digital showcase for the team's capabilities. This is the site you are viewing now.",
          "Site web présentant l'identité de la Business Unit 4, ses membres, leurs compétences, leurs projets et leurs informations professionnelles - une vitrine numérique pour valoriser les compétences de l'équipe. C'est le site que vous consultez actuellement."
        ),
        role: L(
          'Contributed to design and development, content organization, and structuring the individual member portfolios.',
          "Participation à la conception et au développement du site, à l'organisation du contenu et à la structuration des portfolios individuels des membres."
        ),
        tools: [L('GitHub', 'GitHub'), L('HTML', 'HTML'), L('CSS', 'CSS'), L('JavaScript', 'JavaScript')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('JEENISo "Show Your Motivation" challenge #1 - video', 'JEENISo - vidéo "Show your motivation challenge n°1"'),
        description: L('A video produced for a JEENISo motivation challenge.', 'Vidéo réalisée pour montrer sa motivation, dans le cadre d’un challenge JEENISo.'),
        role: L('Video editing.', 'Montage vidéo.'),
        tools: [L('CapCut', 'CapCut'), L('Photoshop', 'Photoshop'), L('Google Flow', 'Google Flow')],
        status: 'completed',
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L("Member - Junior Enterprise of ENISo. Contributes to BU4's collaborative work, including this portfolio website and the individual member portfolios.", "Membre de JEENISo - Junior-Entreprise de l'ENISo. Participation aux travaux collaboratifs de la Business Unit 4, notamment à la conception de ce site web et des portfolios individuels de ses membres.") },
      { organization: 'EUREKA Club, ENISo', detail: null },
      { organization: 'Cyberguards, ENISo', detail: null },
      { organization: 'Mawawil', detail: L('Manager of the musical troupe.', 'Manager de la troupe musicale.') },
      { organization: 'Beatbox', detail: L('Member of the artistic committee (LPS).', "Membre du comité artistique (LPS).") },
    ],
    achievements: [],
    links: { email: 'Fedi.khouildi@eniso.u-sousse.tn', linkedin: 'https://www.linkedin.com/in/fedi-khouildi-7b4659433/', github: 'https://github.com/elbacha-ux' },
    goals: {
      shortTerm: L(
        'Strengthen programming fundamentals, deliver concrete technical projects, grow his portfolio, and improve communication and teamwork skills.',
        'Consolider ses bases en programmation, réaliser des projets techniques concrets, enrichir son portfolio et améliorer ses compétences en communication et en travail d’équipe.'
      ),
      longTerm: L(
        'Become an engineer specialized in embedded technology and telecommunications, work on innovative projects, and develop project-management and leadership skills within JEENISo.',
        'Devenir un ingénieur spécialisé dans les technologies embarquées et les télécommunications, participer à des projets innovants et développer ses capacités en gestion de projet et en leadership au sein de JEENISo.'
      ),
    },
    isBum: false,
    leadership: null,
  },

  'lina-ben-hadj-slama': {
    slug: 'lina-ben-hadj-slama',
    name: 'Lina Ben Hadj Slama',
    specialty: L('Applied Computer Science', 'Informatique appliquée'),
    photo: 'images/members/lina-ben-hadj-slama.jpg',
    intro: L(
      'First-year engineering student in applied computer science. She completed secondary school at Lycée Pilote Sousse on the mathematics track, then spent two years in MP preparatory classes at IPEST. She is interested in crafts, reading, programming and discovery.',
      "Étudiante en première année du cycle d'ingénieur, filière informatique appliquée. Elle a fait ses études secondaires au lycée pilote de Sousse, filière mathématiques, puis a passé deux ans en classe préparatoire MP à l'IPEST. Elle s'intéresse aux travaux manuels, à la lecture, à la programmation et à la découverte."
    ),
    education: {
      program: L('Applied Computer Science', 'Informatique appliquée'),
      institution: 'ENISo',
      years: '2027',
      degrees: [
        L('French Baccalauréat', 'Baccalauréat français'),
        L('Tunisian Baccalauréat', 'Baccalauréat tunisien'),
        L('DEUG (Diplôme des Études Universitaires de Premier Cycle)', 'Diplôme des Études Universitaires de Premier Cycle (DEUG)'),
      ],
      certifications: [
        { label: L('Web programming training', 'Formation en programmation web'), file: null },
        { label: L('Linux basics training', 'Formation Linux, les bases'), file: null },
        { label: L('Automotive software training', 'Formation Automotive software'), file: null },
      ],
    },
    skills: {
      technical: [
        { name: L('Python', 'Python'), level: 40 },
        { name: L('C', 'C'), level: 35 },
        { name: L('Algorithms and data structures', 'Algorithmique et structures de données'), level: 45 },
        { name: L('Applied mathematics and modeling', 'Mathématiques appliquées et modélisation'), level: 50 },
      ],
      personal: [
        L('Analytical and synthesis skills', 'Esprit d’analyse et de synthèse'),
        L('Scientific rigor and organization', 'Rigueur scientifique et sens de l’organisation'),
        L('Autonomy, creativity and initiative', 'Autonomie, créativité et esprit d’initiative'),
        L('Intellectual curiosity and eagerness to learn', 'Curiosité intellectuelle et volonté d’apprentissage'),
      ],
      languages: [
        { name: L('French', 'Français'), level: L('C1', 'C1') },
        { name: L('English', 'Anglais'), level: L('B2', 'B2') },
        { name: L('German', 'Allemand'), level: L('A2', 'A2') },
      ],
    },
    interests: [
      L('New technologies and scientific innovation', 'Nouvelles technologies et innovation scientifique'),
      L('Artificial intelligence, robotics and automation', 'Intelligence artificielle, robotique et automatisation'),
      L('Computing and digital transformation', 'Informatique et transformation numérique'),
      L('Scientific research and technological development', 'Recherche scientifique et développement technologique'),
      L('Entrepreneurship and innovative project management', 'Entrepreneuriat et gestion de projets innovants'),
    ],
    projects: [
      {
        title: L('Non-intrusive identification of electrical consumption cycles', 'Identification non-intrusive des cycles de consommation électrique'),
        description: L(
          'A research project asking whether household appliances can be monitored and identified non-intrusively from their electromagnetic signatures, and whether studying consumption cycles can be automated with AI.',
          "Un projet de recherche posant la question : peut-on surveiller et identifier les appareils fonctionnels dans la maison, d'une manière non-intrusive, simple et automatique, en se basant sur les signatures électromagnétiques de ces appareils ? Comment automatiser l'étude des cycles de consommation grâce à l'intelligence artificielle ?"
        ),
        role: null,
        tools: [],
        status: null,
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('LLM interface', 'Interface LLM'),
        description: L(
          "An intelligent interface that interacts with students, providing academic information from the school's administrative database, presented as a robot in the school hall.",
          "Une interface intelligente qui peut interagir avec les étudiants en procurant des informations académiques à partir de la base de données administrative. Elle se présente sous forme d'un robot dans le hall de l'école."
        ),
        role: null,
        tools: [L('AI & natural language processing', 'Intelligence artificielle & traitement du langage'), L('User interface', 'Interface utilisateur'), L('Backend & data integration', 'Backend & intégration données')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('Robotic arm', 'Bras robotique'),
        description: L(
          'Lets a user lift and move an object with a robotic arm, controlled through a smartphone human-machine interface.',
          "Permet à l'utilisateur de soulever et déplacer une pièce avec le bras, en le contrôlant à l'aide d'une interface homme-machine par smartphone."
        ),
        role: null,
        tools: [],
        status: null,
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L('Member - contributes to Business Unit 4 (BU4) activities.', 'Membre - contribution aux activités de la Business Unit 4 (BU4).') },
      { organization: 'Sousse Conservatory of Arabic Music', detail: null },
      { organization: 'Club Tunisia 88, LPS', detail: null },
      { organization: 'Arduino Club, LPS', detail: L('Founder.', 'Fondatrice.') },
    ],
    achievements: [],
    links: { email: 'linabhslama@gmail.com', linkedin: null, github: null },
    goals: {
      shortTerm: null,
      longTerm: L(
        'Pursue a generalist engineering education to broaden her scientific and technical skills and gain a multidisciplinary view of engineering; found and grow her own technology startup.',
        "Suivre une formation d'ingénieur généraliste afin d'élargir ses compétences scientifiques et techniques et d'acquérir une vision pluridisciplinaire de l'ingénierie ; fonder et développer sa propre startup technologique."
      ),
    },
    isBum: false,
    leadership: null,
  },

  'nour-lemjid': {
    slug: 'nour-lemjid',
    name: 'Nour Lemjid',
    specialty: L('Automotive Software Engineering', 'Logiciel automobile'),
    photo: 'images/members/nour-lemjid.jpg',
    intro: L(
      'Interested in embedded systems and automotive/aeronautical electronics, combining hardware, software and safety. Her projects focus on active vehicle safety (automatic emergency braking, drowsiness detection), energy management (battery management systems), emergency-signal detection and flight simulation. Motivated by designing reliable systems that protect people and contribute to the mobility of tomorrow.',
      "Intéressée par les systèmes embarqués et l'électronique appliquée à l'automobile et à l'aéronautique, avec une approche qui associe matériel, logiciel et sécurité. Ses projets portent sur la sécurité active des véhicules (freinage d'urgence automatique, détection de somnolence), la gestion d'énergie (BMS), la détection de signaux d'urgence et la simulation de vol. Sa motivation : concevoir des systèmes fiables qui protègent les personnes et contribuent à la mobilité de demain."
    ),
    education: {
      program: L('Automotive Software Engineering', 'Cycle d’ingénieur - logiciel automobile'),
      institution: 'ENISo',
      years: '2025-2028',
      degrees: [L('Baccalauréat', 'Baccalauréat')],
      certifications: [
        { label: L('Self-taught in microcontrollers, computer vision and MATLAB/Simulink (no formal certification yet)', 'Aucune certification officielle à ce jour ; auto-formation en cours (microcontrôleurs, vision par ordinateur, MATLAB/Simulink)'), file: null },
      ],
    },
    skills: {
      technical: [
        { name: L('C/C++', 'C/C++'), level: 45 },
        { name: L('Python', 'Python'), level: 50 },
        { name: L('MATLAB', 'MATLAB'), level: 55 },
        { name: L('Arduino', 'Arduino'), level: 45 },
        { name: L('STM32', 'STM32'), level: 45 },
        { name: L('ESP32', 'ESP32'), level: 35 },
      ],
      personal: [
        L('Analytical mindset', "Esprit d'analyse"),
        L('Rigor', 'Rigueur'),
        L('Problem-solving', 'Résolution de problèmes'),
        L('Autonomy', 'Autonomie'),
        L('Teamwork', 'Travail en équipe'),
        L('Communication', 'Communication'),
        L('Time management and project organization', 'Gestion du temps et organisation de projet'),
      ],
      languages: [
        { name: L('Arabic', 'Arabe'), level: L('native', 'langue maternelle') },
        { name: L('French', 'Français'), level: L('B2', 'B2') },
        { name: L('English', 'Anglais'), level: L('B2', 'B2') },
      ],
    },
    interests: [
      L('Electric and autonomous vehicles', 'Véhicules électriques et autonomes'),
      L('Aeronautics and flight simulation', 'Aéronautique et simulation de vol'),
      L('Embedded artificial intelligence', 'Intelligence artificielle embarquée'),
      L('Power electronics', 'Électronique de puissance'),
      L('Road safety', 'Sécurité routière'),
    ],
    projects: [
      {
        title: L('Flight simulator', 'Simulateur de vol (Flight Simulator)'),
        description: L(
          'A flight simulator reproducing an aircraft’s dynamics (pitch, roll, yaw) with a real-time piloting interface, aimed at modeling aircraft behavior for a realistic, educational piloting experience.',
          "Conception d'un simulateur de vol reproduisant la dynamique d'un aéronef (tangage, roulis, lacet) avec une interface de pilotage en temps réel. Objectif : modéliser le comportement de l'avion et offrir une expérience de pilotage réaliste à des fins pédagogiques."
        ),
        role: null,
        tools: [L('MATLAB/Simulink', 'MATLAB/Simulink'), L('Python', 'Python'), L('C++', 'C++'), L('Arduino', 'Arduino'), L('Joystick', 'Joystick')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('Driver drowsiness detection system', 'Système de détection de somnolence du conducteur'),
        description: L(
          'A system that monitors the driver’s face by camera to detect signs of fatigue (prolonged eye closure, yawning, head tilt) and trigger a timely sound and light alert.',
          "Système qui surveille le visage du conducteur par caméra afin de détecter les signes de fatigue (fermeture prolongée des yeux, bâillements, inclinaison de la tête). Objectif : déclencher une alerte sonore et lumineuse à temps pour prévenir les accidents liés à la somnolence."
        ),
        role: null,
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('Battery Management System (BMS)', 'Système de gestion de batterie (BMS)'),
        description: L(
          'A BMS for a lithium-ion battery pack that monitors voltage, current and temperature per cell to protect against overcharge, deep discharge and overheating, balance the cells and estimate state of charge.',
          "Conception d'un BMS pour un pack de batteries lithium-ion assurant la surveillance de la tension, du courant et de la température de chaque cellule. Objectif : protéger la batterie (surcharge, décharge profonde, surchauffe), équilibrer les cellules et estimer l'état de charge (SoC)."
        ),
        role: null,
        tools: [L('STM32/Arduino', 'STM32/Arduino'), L('Voltage/current/temperature sensors', 'Capteurs de tension, courant et température'), L('Li-ion cells', 'Cellules Li-ion'), L('Proteus/KiCad', 'Proteus/KiCad'), L('MATLAB/Simulink', 'MATLAB/Simulink')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('Emergency signal detection', 'Détection des signaux d’urgence'),
        description: L(
          'A system that recognizes emergency signals (sirens, flashing lights of priority vehicles) around the car to alert the driver.',
          "Système capable de reconnaître les signaux d'urgence (sirènes, feux clignotants des véhicules prioritaires) dans l'environnement du véhicule, afin d'alerter le conducteur pour qu'il cède le passage rapidement et en toute sécurité."
        ),
        role: null,
        tools: [L('Python', 'Python'), L('Signal processing (FFT)', 'Traitement du signal (FFT)'), L('OpenCV', 'OpenCV'), L('Machine learning', 'Apprentissage automatique'), L('Microphone', 'Microphone'), L('Raspberry Pi', 'Raspberry Pi')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('Automatic Emergency Braking (AEB)', 'Freinage d’urgence automatique (AEB)'),
        description: L(
          'A system that detects an obstacle ahead, assesses collision risk, and warns then brakes automatically to avoid or mitigate a collision.',
          "Développement d'un système AEB qui détecte un obstacle devant le véhicule et évalue le risque de collision, afin d'avertir puis de freiner automatiquement pour éviter la collision ou en atténuer la gravité."
        ),
        role: null,
        tools: [L('Ultrasonic/LiDAR/radar sensor', 'Capteur ultrason / LiDAR / radar'), L('Arduino/STM32', 'Arduino/STM32'), L('MATLAB/Simulink', 'MATLAB/Simulink'), L('Motors and driver (mockup)', 'Moteurs et driver (maquette)')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L('Member - collaborates with the team and contributes to Business Unit 4 (BU4) activities.', "Membre - collaboration en équipe et contribution aux activités de la Business Unit 4 (BU4).") },
      { organization: 'ODDCE Club, ENISo', detail: null },
      { organization: 'Robotics Club, ENISo', detail: L('Took part in a hands-on Arduino-based robotics project; discovered embedded systems and teamwork.', "Participation à un projet pratique de robotique basé sur Arduino ; découverte des systèmes embarqués et du travail en équipe.") },
      { organization: 'Tunisian Scouts', detail: null },
      { organization: 'Aerotronix', detail: null },
      { organization: 'AIESEC Tunisia', detail: null },
    ],
    achievements: [],
    links: { email: 'Nour.lemjid@gmail.com', linkedin: 'https://www.linkedin.com/in/nour-lemjid-918977419', github: null },
    goals: {
      shortTerm: L(
        'Finish her academic projects, land an internship in embedded systems or automotive engineering, and validate certifications in STM32, MATLAB and embedded AI.',
        'Mener à terme ses projets académiques, décrocher un stage en systèmes embarqués ou en automobile et valider des certifications (STM32, MATLAB, IA embarquée).'
      ),
      longTerm: L(
        'Become an ADAS/embedded-systems engineer and contribute to the development of safer, more electric vehicles.',
        'Devenir ingénieure en systèmes embarqués / ADAS et contribuer au développement de véhicules plus sûrs, plus intelligents et plus électriques.'
      ),
    },
    isBum: false,
    leadership: null,
  },

  'rihab-trifi': {
    slug: 'rihab-trifi',
    name: 'Rihab Trifi',
    specialty: L('Industrial Electronics Engineering', 'Génie électronique industriel'),
    photo: 'images/members/rihab-trifi.jpg',
    intro: L(
      'Passionate, curious and results-oriented, she puts her creativity and know-how to work on ambitious projects. Always looking to learn and take on new challenges, she strives to design tailored solutions that combine professional rigor with originality.',
      "Passionnée, curieuse et orientée résultats, elle met sa créativité et son savoir-faire au service de projets ambitieux. Toujours en quête d'apprentissage et de nouveaux défis, elle s'efforce de concevoir des solutions sur mesure, alliant rigueur professionnelle et originalité."
    ),
    education: {
      program: L('Industrial Electronics Engineering', 'Génie électronique industriel'),
      institution: 'ENISo',
      years: '2026-2027',
      degrees: [L('Baccalauréat', 'Baccalauréat')],
      certifications: [],
    },
    skills: {
      technical: [
        { name: L('Python', 'Python'), level: 30 },
        { name: L('C', 'C'), level: 35 },
        { name: L('HTML', 'HTML'), level: 35 },
        { name: L('CSS', 'CSS'), level: 30 },
        { name: L('Java', 'Java'), level: 25 },
      ],
      personal: [L('Time management and organization', 'Organisation et gestion du temps'), L('Teamwork', 'Travail en équipe')],
      languages: [
        { name: L('French', 'Français'), level: L('C1', 'C1') },
        { name: L('English', 'Anglais'), level: L('B2', 'B2') },
      ],
    },
    interests: [L('Programming and web development', 'Programmation et développement web'), L('New technologies and embedded systems', 'Nouvelles technologies et systèmes embarqués')],
    projects: [
      {
        title: L('BU4 website and portfolio', 'Site web BU4 et portfolio'),
        description: L(
          "Building Business Unit 4's website and portfolio. This is the site you are viewing now.",
          "Réalisation du site web de notre BU4 et d'un portfolio. C'est le site que vous consultez actuellement."
        ),
        role: null,
        tools: [L('HTML', 'HTML'), L('CSS', 'CSS'), L('JavaScript', 'JavaScript')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('Telemetry station', 'Station Telemetry'),
        description: L(
          'Design, build and validate a functional embedded telemetry-station prototype that collects altitude, acceleration and orientation in flight, displays them on a screen, transmits them wirelessly in real time, and logs them for post-flight analysis.',
          "Concevoir, réaliser et valider un prototype fonctionnel de station de télémesure embarquée capable de collecter l'altitude, l'accélération et l'orientation en vol, de les afficher sur un écran, de les transmettre en temps réel par liaison sans fil et de les archiver pour une analyse après le vol."
        ),
        role: null,
        tools: [L('ESP32', 'ESP32'), L('BMP390', 'BMP390'), L('ICM-20948', 'ICM-20948'), L('GPS', 'GPS'), L('OLED screen', 'Écran OLED'), L('SPI', 'SPI'), L('Battery', 'Batterie'), L('PCB', 'PCB')],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L('Member.', 'Membre.') },
      { organization: 'Aerotronics', detail: null },
      { organization: 'Cybersecurity Club', detail: null },
      { organization: 'IEEE Student Branch, ENISo', detail: null },
    ],
    achievements: [],
    links: { email: 'Rihab.Trifi@eniso.u-sousse.tn', linkedin: 'https://www.linkedin.com/in/rihab-trifi-62b308435', github: null },
    goals: {
      shortTerm: L('Develop her electronics and computer science skills.', 'Développer ses compétences en électronique et en informatique.'),
      longTerm: null,
    },
    isBum: false,
    leadership: null,
  },

  'walid-ben-said': {
    slug: 'walid-ben-said',
    name: 'Walid Ben Said',
    specialty: L('Applied Computer Engineering', 'Génie informatique appliquée'),
    photo: 'images/members/walid-ben-said.jpg',
    intro: L(
      'Always looking for new opportunities to develop his skills and bring his ideas to life. Ready to work as part of a team, deliver concrete projects, and add value for the organizations he works with.',
      "Toujours à la recherche de nouvelles opportunités pour développer ses compétences et donner vie à ses idées. Prêt à travailler en équipe, à réaliser des projets concrets et à apporter une valeur ajoutée aux entreprises."
    ),
    education: {
      program: L('Applied Computer Engineering', 'Génie informatique appliquée'),
      institution: 'ENISo',
      years: '2026/2027',
      degrees: [L('Baccalauréat', 'Baccalauréat')],
      certifications: [
        { label: L('Learning How to Learn (Coursera)', 'Certificat Learning How to Learn (Coursera)'), file: null },
        { label: L('Associative-life training, AJA (JAT) Sousse (2022-2026)', 'Formation à la vie associative à AJA (JAT) Sousse (2022-2026)'), file: null },
        { label: L('Brainstorming Sessions certificate', 'Certificat Brainstorming Sessions'), file: null },
        { label: L('Participation in organizing cultural events - certificate', 'Certificat de participation à l’organisation d’événements culturels'), file: null },
        { label: L('Artistic project realization - certificates', 'Certificats de réalisation de projets artistiques'), file: null },
        { label: L('Preparatory classes for engineering studies (2024-2026)', "Formation en classes préparatoires aux études d'ingénieurs (2024-2026)"), file: null },
        { label: L('ESP32 and Arduino training', 'Formation en ESP32 et Arduino'), file: null },
        { label: L('Intro to web development - CodeCamp', 'Formation d’initiation au développement web (CodeCamp)'), file: null },
        { label: L('Public Speaking training', 'Formation Public Speaking'), file: null },
        { label: L('Business Model Canvas (BMC) training', 'Formation en Business Model Canvas (BMC)'), file: null },
      ],
    },
    skills: {
      technical: [
        { name: L('Python', 'Python'), level: 35 },
        { name: L('C', 'Langage C'), level: 30 },
        { name: L('HTML', 'HTML'), level: 40 },
        { name: L('CSS', 'CSS'), level: 35 },
        { name: L('JavaScript', 'JS'), level: 25 },
      ],
      personal: [L('Organization and time management', 'Organisation et gestion du temps'), L('Teamwork', 'Travail en équipe'), L('Creativity', 'Créativité')],
      languages: [
        { name: L('English', 'Anglais'), level: L('B2', 'B2') },
        { name: L('French', 'Français'), level: L('B2', 'B2') },
        { name: L('Arabic', 'Arabe'), level: L('native', 'langue maternelle') },
      ],
    },
    interests: [
      L('Technology and innovation - IoT and problem-solving', "Technologies et innovation - l'IoT et la résolution de problèmes"),
      L('Web development and programming', 'Développement web et programmation'),
      L('Blending art and engineering', "Alliance de l'art et de l'ingénierie"),
      L('Community life, teamwork and taking initiative', "Vie associative, travail en équipe et prise d'initiative"),
    ],
    projects: [
      {
        title: L('ProTask - collaborative web platform', 'ProTask - Plateforme web collaborative'),
        description: L(
          'A platform to facilitate the management, organization and tracking of team projects, with simple coordination between members.',
          "Plateforme web destinée à faciliter la gestion, l'organisation et le suivi des projets réalisés en équipe, en assurant une coordination simple entre les membres."
        ),
        role: null,
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
      {
        title: L('ENISo TEAM - smart classroom', 'ENISo TEAM - Salle de classe intelligente'),
        description: L(
          'A project to optimize student comfort in class (temperature, lighting, air quality) and foster a more effective, pleasant learning environment.',
          "Projet visant à optimiser le confort des étudiants en classe (température, éclairage, qualité de l'air) et à favoriser un environnement d'apprentissage plus efficace et agréable."
        ),
        role: null,
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
        slug: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: L('Member - contributes to Business Unit 4 (BU4) activities.', 'Membre - collaboration en équipe et contribution aux activités de la Business Unit 4 (BU4).') },
      { organization: 'ODDCE Club, ENISo', detail: L('Contributed to the development of ProTask and took part in several club trainings.', "Participation au développement de ProTask et aux diverses formations du club.") },
      { organization: 'ENISo TEAM', detail: L('Took part in a hands-on Arduino-based robotics project.', 'Participation à un projet pratique de robotique basé sur Arduino.') },
    ],
    achievements: [],
    links: { email: 'Wbensaid13@gmail.com', linkedin: 'https://www.linkedin.com/in/walid-ben-said-895882276', github: 'https://github.com/codewalid' },
    goals: {
      shortTerm: null,
      longTerm: L(
        'Innovate in a dynamic space, take on projects that drive self-improvement, and acquire more technical and behavioral skills and opportunities.',
        "Innover dans un espace dynamique, réaliser des projets pour s'améliorer, et acquérir davantage de compétences techniques, comportementales et d'opportunités."
      ),
    },
    isBum: false,
    leadership: null,
  },

  'nader-hlel': {
    slug: 'nader-hlel',
    name: 'Nader Hlel',
    specialty: null,
    photo: 'images/members/nader-hlel.jpg',
    intro: L(
      'A dedicated and supportive individual, currently pursuing 2nd-year GTE and Master 1 GT, always ready to share his knowledge and support others.',
      'Une personne dévouée et bienveillante, actuellement en 2e année de GTE et en Master 1 GT, toujours prête à partager ses connaissances et à soutenir les autres.'
    ),
    education: null,
    skills: { technical: [], personal: [], languages: [] },
    interests: [],
    projects: [],
    experience: [],
    achievements: [],
    links: { email: null, linkedin: null, github: null },
    goals: { shortTerm: null, longTerm: null },
    isBum: true,
    leadership: {
      responsibilities: [
        L(
          "Team Support: Encourage collaboration and ensure alignment with the BU's objectives.",
          "Soutien à l'équipe : encourager la collaboration et veiller à l'alignement avec les objectifs de la BU."
        ),
        L(
          "Progress Monitoring: Follow up on the team's progress and deadlines.",
          "Suivi de l'avancement : suivre la progression de l'équipe et le respect des délais."
        ),
        L(
          'Guidance: Support the team throughout its challenges and activities.',
          "Accompagnement : soutenir l'équipe tout au long de ses défis et activités."
        ),
        L(
          'Communication: Facilitate communication between BU4 and the JEENISo Bureau.',
          'Communication : faciliter la communication entre BU4 et le Bureau de JEENISo.'
        ),
      ],
      philosophy: null,
    },
  },
};
