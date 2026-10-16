import type { Member } from './types';

/**
 * Source: structured "CV Portfolio Web" intake forms each member filled out
 * and submitted for this site (docs/content/cvs/, kept out of git - see
 * .gitignore). Each form included an explicit checkbox consenting to publish
 * the information for the web portfolio. Content below is translated from
 * the original French submissions and trimmed to professional/public fields
 * only; no phone numbers, addresses or ID numbers were collected in the
 * first place. Nothing here is invented - see MISSING_CONTENT.md for every
 * field a member left blank.
 */
export const people: Record<string, Member> = {
  'ahmed-belgacem': {
    slug: 'ahmed-belgacem',
    name: 'Ahmed Belgacem',
    specialty: 'Applied Computer Science',
    photo: null,
    photoAlt: null,
    intro:
      "First-year engineering student in applied computer science at ENISo (École Nationale d'Ingénieurs de Sousse). Motivated by technological progress and by the drive to move things forward, he enjoys turning his ideas into concrete projects. Passionate about artificial intelligence, embedded systems, robotics and programming, he looks for continuous learning and new challenges.",
    education: {
      program: 'Applied Computer Science',
      institution: "École Nationale d'Ingénieurs de Sousse (ENISo)",
      years: '2026-2029 (engineering cycle); 2024-2026 (IPEIM preparatory classes)',
      degrees: ['Baccalauréat'],
      certifications: [
        'Preparatory classes for engineering studies - IPEIM Monastir (2024-2026)',
        'General robotics training',
        'Artificial intelligence training',
        '3D modeling with SolidWorks',
        'PCB design and fabrication',
        'Web development training',
        'Public speaking training',
      ],
    },
    skills: {
      technical: ['Python', 'C', 'HTML/CSS/JavaScript', 'SolidWorks (3D modeling)'],
      personal: ['Sense of responsibility', 'Problem-solving', 'Public speaking', 'Emotional intelligence', 'Networking', 'Flexibility'],
      languages: [
        { name: 'Arabic', level: 'native' },
        { name: 'English', level: 'C1' },
        { name: 'French', level: 'B2' },
        { name: 'German', level: 'B1' },
      ],
    },
    interests: ['Artificial intelligence & embedded systems', 'Robotics', 'Programming'],
    projects: [
      {
        title: 'Smart Parking prototype',
        description:
          'A laser-cut wooden prototype of a smart parking system with an Arduino Uno-controlled circuit: a car elevator, three floors and a counter showing available spots.',
        role: 'Project lead - SolidWorks modeling, circuit design, I/O programming and assembly.',
        tools: ['SolidWorks', 'Arduino Uno', 'Laser cutting'],
        status: 'completed',
        result: '1st place, end-of-year high school project (2021-2022).',
        link: null,
      },
      {
        title: 'Solar energy research project',
        description:
          'A study of solar energy from production to distribution, including interviews with solar panel installers, consumers and suppliers such as STEG.',
        role: 'Outreach and networking with stakeholders; prototyping.',
        tools: [],
        status: 'completed',
        result: null,
        link: null,
      },
      {
        title: '3D-printed mobile engine',
        description: 'A class project building a mobile engine from parts designed in SolidWorks and 3D-printed.',
        role: 'Contributor.',
        tools: ['SolidWorks', '3D printing'],
        status: 'completed',
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: 'Member - participates in collective challenges and contributes to Business Unit 4 (BU4) activities.' },
      {
        organization: 'ATAST Robotics Club, Ksar Hellal (2017-2020)',
        detail:
          'Team lead - 2nd place in a line-following robot contest; 1st place in an environmental-protection pitch contest with a concept for an underwater deployable sensor that helps fishermen avoid catching endangered species.',
      },
    ],
    achievements: [],
    links: { email: 'belgacemahmed99@gmail.com', linkedin: null, github: 'https://github.com/AhmedBFG' },
    goals: {
      shortTerm: null,
      longTerm: 'Build a better future for the next generation and a stable life for himself and his family.',
    },
    isBum: false,
    leadership: null,
  },

  'amena-aouichaoui': {
    slug: 'amena-aouichaoui',
    name: 'Amena Aouichaoui',
    specialty: 'Embedded Telecommunications Engineering',
    photo: null,
    photoAlt: null,
    intro:
      'Engineering student in embedded telecommunications at ENISo. A passionate, curious and motivated person, always looking for new opportunities to grow her skills and bring her ideas to life. She enjoys taking on new challenges, learning continuously and working on projects that let her creativity and know-how stand out.',
    education: {
      program: 'Embedded Telecommunications Engineering',
      institution: 'ENISo',
      years: '2026-2027',
      degrees: ['Baccalauréat'],
      certifications: [
        'Preparatory classes for engineering studies',
        'ESP32 and Arduino training - intro to microcontroller programming and embedded projects',
        'Intro to web development - HTML, CSS and JavaScript',
        'Business Model Canvas (BMC) training',
      ],
    },
    skills: {
      technical: ['HTML', 'CSS', 'JavaScript'],
      personal: ['Time management and organization', 'Teamwork', 'Autonomy and sense of responsibility'],
      languages: [
        { name: 'English', level: null },
        { name: 'French', level: null },
        { name: 'German', level: 'basic' },
      ],
    },
    interests: [
      'Technology and innovation - embedded systems and robotics',
      'Web development and programming',
      'Community life and teamwork',
    ],
    projects: [
      {
        title: 'ProTask - collaborative web platform',
        description: 'A web platform to facilitate the management, organization and tracking of team projects.',
        role: 'Contributed to designing a digital solution for coordination and collaboration between members.',
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'ENISo TEAM - project management website',
        description: 'A platform to improve the organization and tracking of projects within a university tech club.',
        role: 'Contributed to feature scoping, site architecture and user-need analysis.',
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: 'Member - participates in collective challenges and contributes to Business Unit 4 (BU4) activities.' },
      { organization: 'ODDCE Club, ENISo', detail: 'Contributed to the development of ProTask, a collaborative project-management web platform.' },
      { organization: 'Robotics Club, ENISo', detail: 'Took part in a hands-on Arduino-based robotics project.' },
    ],
    achievements: [],
    links: { email: 'Amenaaouichaoui05@gmail.com', linkedin: 'https://www.linkedin.com/in/aouichaoui-amena-5872b5444', github: null },
    goals: {
      shortTerm: 'Develop her computer science and electronics skills and gain practical experience.',
      longTerm: 'Contribute to innovative projects.',
    },
    isBum: false,
    leadership: null,
  },

  'fedi-khouildi': {
    slug: 'fedi-khouildi',
    name: 'Fedi Khouildi',
    specialty: 'Embedded Telecommunications Engineering (GTE)',
    photo: null,
    photoAlt: null,
    intro:
      "Engineering student at the École Nationale d'Ingénieurs de Sousse (ENISo), interested in programming, embedded systems and telecommunications. Aims to build technical skills through concrete projects while strengthening communication, teamwork and project-management abilities.",
    education: {
      program: 'Embedded Telecommunications Engineering (GTE)',
      institution: 'ENISo',
      years: '2026-2029 (engineering cycle); preparatory classes at IPEIM (2025)',
      degrees: ['Baccalauréat in mathematics (2024)'],
      certifications: ['In progress'],
    },
    skills: {
      technical: [
        'Python (functions, data structures, iterables, OOP, exception handling)',
        'C basics',
        'HTML',
        'CSS',
        'JavaScript',
        'Notions of digital telecommunications and digital systems',
        'Video editing',
      ],
      personal: [
        'Curiosity and eagerness to learn',
        'Seriousness and sense of responsibility',
        'Teamwork and collaboration',
        'Interest in communication',
        'Motivated to grow in project management and leadership',
      ],
      languages: [
        { name: 'Arabic', level: 'native' },
        { name: 'French', level: 'B2' },
        { name: 'English', level: 'B2' },
      ],
    },
    interests: ['Embedded systems', 'Telecommunications', 'Programming', 'IoT', 'Cybersecurity', 'Music and guitar'],
    projects: [
      {
        title: 'BU4 portfolio website',
        description:
          "A website presenting Business Unit 4's identity, members, skills, projects and professional information - a digital showcase for the team's capabilities. This is the site you are viewing now.",
        role: 'Contributed to design and development, content organization, and structuring the individual member portfolios.',
        tools: ['GitHub', 'HTML', 'CSS', 'JavaScript'],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'JEENISo "Show Your Motivation" challenge #1 - video',
        description: 'A video produced for a JEENISo motivation challenge.',
        role: 'Video editing.',
        tools: ['CapCut', 'Photoshop', 'Google Flow'],
        status: 'completed',
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: "Member - Junior Enterprise of ENISo. Contributes to BU4's collaborative work, including this portfolio website and the individual member portfolios." },
      { organization: 'EUREKA Club, ENISo', detail: null },
      { organization: 'Cyberguards, ENISo', detail: null },
    ],
    achievements: [],
    links: { email: 'Fedi.khouildi@eniso.u-sousse.tn', linkedin: 'https://www.linkedin.com/in/fedi-khouildi-7b4659433/', github: 'https://github.com/elbacha-ux' },
    goals: {
      shortTerm: 'Strengthen programming fundamentals, deliver concrete technical projects, grow his portfolio, and improve communication and teamwork skills.',
      longTerm: 'Become an engineer specialized in embedded technology and telecommunications, work on innovative projects, and develop project-management and leadership skills within JEENISo.',
    },
    isBum: false,
    leadership: null,
  },

  'lina-ben-hadj-slama': {
    slug: 'lina-ben-hadj-slama',
    name: 'Lina Ben Hadj Slama',
    specialty: 'Applied Computer Science',
    photo: null,
    photoAlt: null,
    intro:
      'First-year engineering student in applied computer science. She completed secondary school at Lycée Pilote Sousse on the mathematics track, then spent two years in MP preparatory classes at IPEST. She is interested in crafts, reading, programming and discovery.',
    education: {
      program: 'Applied Computer Science',
      institution: 'ENISo',
      years: '2027',
      degrees: ['French Baccalauréat', 'Tunisian Baccalauréat', 'DEUG (Diplôme des Études Universitaires de Premier Cycle)'],
      certifications: ['Web programming training', 'Linux basics training', 'Automotive software training'],
    },
    skills: {
      technical: ['Python', 'C', 'Algorithms and data structures', 'Applied mathematics and modeling'],
      personal: ['Analytical and synthesis skills', 'Scientific rigor and organization', 'Autonomy, creativity and initiative', 'Intellectual curiosity and eagerness to learn'],
      languages: [
        { name: 'French', level: 'C1' },
        { name: 'English', level: 'B2' },
        { name: 'German', level: 'A2' },
      ],
    },
    interests: [
      'New technologies and scientific innovation',
      'Artificial intelligence, robotics and automation',
      'Computing and digital transformation',
      'Scientific research and technological development',
      'Entrepreneurship and innovative project management',
    ],
    projects: [
      {
        title: 'Non-intrusive identification of electrical consumption cycles',
        description:
          'A research project asking whether household appliances can be monitored and identified non-intrusively from their electromagnetic signatures, and whether studying consumption cycles can be automated with AI.',
        role: null,
        tools: [],
        status: null,
        result: null,
        link: null,
      },
      {
        title: 'LLM interface',
        description:
          "An intelligent interface that interacts with students, providing academic information from the school's administrative database, presented as a robot in the school hall.",
        role: null,
        tools: ['AI & natural language processing', 'User interface', 'Backend & data integration'],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'Robotic arm',
        description: 'Lets a user lift and move an object with a robotic arm, controlled through a smartphone human-machine interface.',
        role: null,
        tools: [],
        status: null,
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: 'Member - contributes to Business Unit 4 (BU4) activities.' },
      { organization: 'Sousse Conservatory of Arabic Music', detail: null },
      { organization: 'Club Tunisia 88, LPS', detail: null },
      { organization: 'Arduino Club, LPS', detail: 'Founder.' },
    ],
    achievements: [],
    links: { email: 'linabhslama@gmail.com', linkedin: null, github: null },
    goals: {
      shortTerm: null,
      longTerm:
        'Pursue a generalist engineering education to broaden her scientific and technical skills and gain a multidisciplinary view of engineering; found and grow her own technology startup.',
    },
    isBum: false,
    leadership: null,
  },

  'nour-lemjid': {
    slug: 'nour-lemjid',
    name: 'Nour Lemjid',
    specialty: 'Automotive Software Engineering',
    photo: null,
    photoAlt: null,
    intro:
      'Interested in embedded systems and automotive/aeronautical electronics, combining hardware, software and safety. Her projects focus on active vehicle safety (automatic emergency braking, drowsiness detection), energy management (battery management systems), emergency-signal detection and flight simulation. Motivated by designing reliable systems that protect people and contribute to the mobility of tomorrow.',
    education: {
      program: 'Automotive Software Engineering',
      institution: 'ENISo',
      years: '2025-2028',
      degrees: ['Baccalauréat'],
      certifications: ['Self-taught in microcontrollers, computer vision and MATLAB/Simulink (no formal certification yet)'],
    },
    skills: {
      technical: ['C/C++', 'Python', 'MATLAB', 'Arduino', 'STM32', 'ESP32'],
      personal: ['Analytical mindset', 'Rigor', 'Problem-solving', 'Autonomy', 'Teamwork', 'Communication', 'Time management and project organization'],
      languages: [
        { name: 'Arabic', level: 'native' },
        { name: 'French', level: 'B2' },
        { name: 'English', level: 'B2' },
      ],
    },
    interests: [
      'Electric and autonomous vehicles',
      'Aeronautics and flight simulation',
      'Embedded artificial intelligence',
      'Power electronics',
      'Road safety',
    ],
    projects: [
      {
        title: 'Flight simulator',
        description:
          'A flight simulator reproducing an aircraft’s dynamics (pitch, roll, yaw) with a real-time piloting interface, aimed at modeling aircraft behavior for a realistic, educational piloting experience.',
        role: null,
        tools: ['MATLAB/Simulink', 'Python', 'C++', 'Arduino', 'Joystick'],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'Driver drowsiness detection system',
        description:
          'A system that monitors the driver’s face by camera to detect signs of fatigue (prolonged eye closure, yawning, head tilt) and trigger a timely sound and light alert.',
        role: null,
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'Battery Management System (BMS)',
        description:
          'A BMS for a lithium-ion battery pack that monitors voltage, current and temperature per cell to protect against overcharge, deep discharge and overheating, balance the cells and estimate state of charge.',
        role: null,
        tools: ['STM32/Arduino', 'Voltage/current/temperature sensors', 'Li-ion cells', 'Proteus/KiCad', 'MATLAB/Simulink'],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'Emergency signal detection',
        description: 'A system that recognizes emergency signals (sirens, flashing lights of priority vehicles) around the car to alert the driver.',
        role: null,
        tools: ['Python', 'Signal processing (FFT)', 'OpenCV', 'Machine learning', 'Microphone', 'Raspberry Pi'],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'Automatic Emergency Braking (AEB)',
        description: 'A system that detects an obstacle ahead, assesses collision risk, and warns then brakes automatically to avoid or mitigate a collision.',
        role: null,
        tools: ['Ultrasonic/LiDAR/radar sensor', 'Arduino/STM32', 'MATLAB/Simulink', 'Motors and driver (mockup)'],
        status: 'in-progress',
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: 'Member - collaborates with the team and contributes to Business Unit 4 (BU4) activities.' },
      { organization: 'ODDCE Club, ENISo', detail: null },
      { organization: 'Robotics Club, ENISo', detail: 'Took part in a hands-on Arduino-based robotics project; discovered embedded systems and teamwork.' },
      { organization: 'Tunisian Scouts', detail: null },
      { organization: 'Aerotronix', detail: null },
      { organization: 'AIESEC Tunisia', detail: null },
    ],
    achievements: [],
    links: { email: 'Nour.lemjid@gmail.com', linkedin: 'https://www.linkedin.com/in/nour-lemjid-918977419', github: null },
    goals: {
      shortTerm: 'Finish her academic projects, land an internship in embedded systems or automotive engineering, and validate certifications in STM32, MATLAB and embedded AI.',
      longTerm: 'Become an ADAS/embedded-systems engineer and contribute to the development of safer, more electric vehicles.',
    },
    isBum: false,
    leadership: null,
  },

  'rihab-trifi': {
    slug: 'rihab-trifi',
    name: 'Rihab Trifi',
    specialty: 'Industrial Electronics Engineering',
    photo: null,
    photoAlt: null,
    intro:
      'Passionate, curious and results-oriented, she puts her creativity and know-how to work on ambitious projects. Always looking to learn and take on new challenges, she strives to design tailored solutions that combine professional rigor with originality.',
    education: {
      program: 'Industrial Electronics Engineering',
      institution: 'ENISo',
      years: '2026-2027',
      degrees: ['Baccalauréat'],
      certifications: [],
    },
    skills: {
      technical: ['Python', 'C', 'HTML', 'CSS', 'Java'],
      personal: ['Time management and organization', 'Teamwork'],
      languages: [
        { name: 'French', level: 'C1' },
        { name: 'English', level: 'B2' },
      ],
    },
    interests: ['Programming and web development', 'New technologies and embedded systems'],
    projects: [
      {
        title: 'BU4 website and portfolio',
        description: "Building Business Unit 4's website and portfolio. This is the site you are viewing now.",
        role: null,
        tools: ['HTML', 'CSS', 'JavaScript'],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'Telemetry station',
        description:
          'Design, build and validate a functional embedded telemetry-station prototype that collects altitude, acceleration and orientation in flight, displays them on a screen, transmits them wirelessly in real time, and logs them for post-flight analysis.',
        role: null,
        tools: ['ESP32', 'BMP390', 'ICM-20948', 'GPS', 'OLED screen', 'SPI', 'Battery', 'PCB'],
        status: 'in-progress',
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: 'Member.' },
      { organization: 'Aerotronics', detail: null },
      { organization: 'Cybersecurity Club', detail: null },
      { organization: 'IEEE Student Branch, ENISo', detail: null },
    ],
    achievements: [],
    links: { email: 'Rihab.Trifi@eniso.u-sousse.tn', linkedin: 'https://www.linkedin.com/in/rihab-trifi-62b308435', github: null },
    goals: {
      shortTerm: 'Develop her electronics and computer science skills.',
      longTerm: null,
    },
    isBum: false,
    leadership: null,
  },

  'walid-ben-said': {
    slug: 'walid-ben-said',
    name: 'Walid Ben Said',
    specialty: 'Applied Computer Engineering',
    photo: '/portfolio-bu4/images/members/walid-ben-said.jpg',
    photoAlt: 'Portrait of Walid Ben Said',
    intro:
      'Always looking for new opportunities to develop his skills and bring his ideas to life. Ready to work as part of a team, deliver concrete projects, and add value for the organizations he works with.',
    education: {
      program: 'Applied Computer Engineering',
      institution: 'ENISo',
      years: '2026/2027',
      degrees: ['Baccalauréat'],
      certifications: [
        'Learning How to Learn (Coursera)',
        'Associative-life training, AJA (JAT) Sousse (2022-2026)',
        'Brainstorming Sessions certificate',
        'Participation in organizing cultural events - certificate',
        'Artistic project realization - certificates',
        'Preparatory classes for engineering studies (2024-2026)',
        'ESP32 and Arduino training',
        'Intro to web development - CodeCamp',
        'Public Speaking training',
        'Business Model Canvas (BMC) training',
      ],
    },
    skills: {
      technical: ['Python', 'C', 'HTML', 'CSS', 'JavaScript'],
      personal: ['Organization and time management', 'Teamwork', 'Creativity'],
      languages: [
        { name: 'English', level: 'B2' },
        { name: 'French', level: 'B2' },
        { name: 'Arabic', level: 'native' },
      ],
    },
    interests: [
      'Technology and innovation - IoT and problem-solving',
      'Web development and programming',
      'Blending art and engineering',
      'Community life, teamwork and taking initiative',
    ],
    projects: [
      {
        title: 'ProTask - collaborative web platform',
        description: 'A platform to facilitate the management, organization and tracking of team projects, with simple coordination between members.',
        role: null,
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
      },
      {
        title: 'ENISo TEAM - smart classroom',
        description: 'A project to optimize student comfort in class (temperature, lighting, air quality) and foster a more effective, pleasant learning environment.',
        role: null,
        tools: [],
        status: 'in-progress',
        result: null,
        link: null,
      },
    ],
    experience: [
      { organization: 'JEENISo', detail: 'Member - contributes to Business Unit 4 (BU4) activities.' },
      { organization: 'ODDCE Club, ENISo', detail: 'Contributed to the development of ProTask and took part in several club trainings.' },
      { organization: 'ENISo TEAM', detail: 'Took part in a hands-on Arduino-based robotics project.' },
    ],
    achievements: [],
    links: { email: 'Wbensaid13@gmail.com', linkedin: 'https://www.linkedin.com/in/walid-ben-said-895882276', github: 'https://github.com/codewalid' },
    goals: {
      shortTerm: null,
      longTerm: 'Innovate in a dynamic space, take on projects that drive self-improvement, and acquire more technical and behavioral skills and opportunities.',
    },
    isBum: false,
    leadership: null,
  },

  'nader-hlel': {
    slug: 'nader-hlel',
    name: 'Nader Hlel',
    specialty: null,
    photo: null,
    photoAlt: null,
    intro: null,
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
      responsibilities: [],
      philosophy: null,
    },
  },
};
