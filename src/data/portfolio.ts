export type FocusArea = {
  title: string
  label: string
  description: string
  bullets: string[]
}

export type SkillGroup = {
  title: string
  summary: string
  items: string[]
}

export type ExperienceItem = {
  organization: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export type ProjectItem = {
  title: string
  category: string
  year: string
  description: string
  outcomes: string[]
  stack: string[]
  href?: string
  linkLabel?: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

export const portfolioContent = {
  name: 'Santiago Jaimes',
  shortName: 'S. Jaimes',
  role: 'Software Engineer',
  location: 'Bogotá, Colombia',
  hero: {
    eyebrow: 'Portfolio / Software Engineering',
    title:
      'Full-stack software engineer with backend interest, product focus, and AI depth.',
    intro:
      'I am a Systems and Computing Engineering student at Universidad de los Andes with hands-on experience building web platforms, mobile applications, data workflows, and cloud-backed systems from design to deployment.',
    note:
      'I am especially interested in software engineering roles where strong product execution, backend reliability, and scalable systems matter, including teams like Amadeus, Rappi, and Mercado Libre.',
    primaryCtaLabel: 'See selected projects',
    primaryCtaHref: '#projects',
    secondaryCtaLabel: 'Contact me',
    secondaryCtaHref: '#contact',
  },
  profileFacts: [
    { label: 'Expected graduation', value: 'Jul 2026' },
    { label: 'Core focus', value: 'Backend / Full-stack / Platform' },
    { label: 'Differentiator', value: 'AI, data, and software delivery' },
    { label: 'International work', value: 'Tokyo, Japan (Hybrid)' },
  ],
  proofPoints: [
    'Full-stack delivery',
    'Cloud deployment',
    'Mobile + web',
    'Backend APIs',
    'AI / ML fluency',
    'International teams',
  ],
  about: {
    title: 'Engineering profile with product and AI depth',
    description:
      'The strongest version of your profile is not “only SWE” or “only AI”. It is software engineering first, with enough AI and data depth to be useful on modern product teams.',
    paragraphs: [
      'My experience spans full-stack platforms, mobile development, REST integrations, database design, cloud deployment, and collaborative software projects.',
      'I am particularly interested in backend development, distributed systems, and scalable software platforms, while still being comfortable shipping frontend and product-facing work.',
      'Teaching Artificial Intelligence and assisting NVIDIA LLM workshops also strengthened how I think about machine learning systems, developer tooling, and technical communication.',
    ],
    metrics: [
      { value: '100+', label: 'Users on SEED Intranet platform' },
      { value: '4.37', label: 'GPA / 5.0 in Uniandes record' },
      { value: 'Japan', label: 'International collaboration experience' },
    ],
  },
  focusAreas: [
    {
      label: 'Software engineering',
      title: 'Shipping complete products, not isolated code snippets',
      description:
        'I work comfortably across frontend, backend, databases, and deployment, with a preference for systems that are understandable, maintainable, and useful in production.',
      bullets: [
        'Build from architecture and data model to UI and deployment.',
        'Work across Angular, React, Flutter, Python, SQL, and cloud services.',
        'Keep code quality, readability, and collaboration in view.',
      ],
    },
    {
      label: 'Backend and systems',
      title: 'A strong interest in APIs, services, and scalable platforms',
      description:
        'The part of software engineering that attracts me most is the layer where reliability, system behavior, and business logic meet.',
      bullets: [
        'Design backend flows with explicit contracts and validation.',
        'Think in terms of maintainability, data flow, and system boundaries.',
        'Interested in platform, travel-tech, and marketplace environments.',
      ],
    },
    {
      label: 'AI and data',
      title: 'AI/ML literacy that strengthens product engineering',
      description:
        'My AI experience is practical: teaching, workshops, ML projects, ETL, and model-oriented experimentation that complements software development rather than replacing it.',
      bullets: [
        'Teaching assistant for Introduction to Artificial Intelligence.',
        'NVIDIA workshop support on prompt engineering and LLM applications.',
        'Experience with ML models, ETL workflows, and analytics tooling.',
      ],
    },
  ] as FocusArea[],
  experience: [
    {
      organization: 'Universidad de los Andes',
      role: 'Teaching Assistant – Introduction to Artificial Intelligence',
      period: '2026 - Present',
      location: 'Bogotá, Colombia',
      bullets: [
        'Support students in machine learning, search algorithms, logic, probabilistic models, and Python problem solving.',
        'Design academic material and guide workshops related to AI and software development.',
        'Strengthen technical communication by explaining complex ideas clearly and practically.',
      ],
    },
    {
      organization: 'GOROM Association',
      role: 'IT Coordinator',
      period: 'Aug 2025 - Dec 2025',
      location: 'Tokyo, Japan (Hybrid)',
      bullets: [
        'Led IT coordination and digital platform ownership, including intranet development, website operations, and strategic content planning.',
        'Built and maintained an intranet web application for SEED participants and alumni.',
        'Worked with React, Django, and REST APIs to support web platform development and maintenance.',
      ],
    },
    {
      organization: 'NVIDIA Deep Learning Institute / Universidad de los Andes',
      role: 'Teaching Assistant – Building LLM Applications With Prompt Engineering',
      period: 'Aug 2025',
      location: 'Bogotá, Colombia',
      bullets: [
        'Assisted participants in a workshop focused on building LLM-based applications with modern prompt engineering.',
        'Provided technical support on LangChain, Llama, structured output, agent design, and tool use.',
        'Bridged hands-on AI system building with teaching and technical mentoring.',
      ],
    },
    {
      organization: 'SEED Program – GOROM Japan',
      role: 'International Social Entrepreneurship Program',
      period: 'Jul 2025 - Dec 2025',
      location: 'Japan',
      bullets: [
        'Developed a digital platform concept to improve tourism visibility and regional economic activity.',
        'Analyzed user behavior, market trends, and strategy in an international collaborative setting.',
        'Presented proposals to stakeholders and worked across technical and non-technical contexts.',
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      category: 'Full-stack platform',
      title: 'SEED Intranet',
      year: '2024',
      description:
        'A collaboration platform for international program participants, designed as a real full-stack system rather than a classroom-only prototype.',
      outcomes: [
        'Built discussion forums, document repository, activity calendar, user profiles, and community directory.',
        'Developed backend services, authentication, and database integration with MySQL and Auth0.',
        'Deployed on cloud infrastructure using DigitalOcean and AWS database services for more than 100 users worldwide.',
      ],
      stack: ['React', 'Django', 'REST APIs', 'MySQL', 'Auth0', 'DigitalOcean', 'AWS'],
    },
    {
      category: 'Mobile application',
      title: 'Ecosphere',
      year: '2024',
      description:
        'A Flutter mobile app built to encourage recycling and sustainability through community and location-based features.',
      outcomes: [
        'Implemented authentication, community posts, recycling point mapping, and a challenge-reward system.',
        'Integrated Firebase Authentication and Firestore as backend services.',
        'Worked collaboratively with Git and Agile development practices.',
      ],
      stack: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Google Maps API'],
    },
    {
      category: 'Frontend web application',
      title: 'MedicIA',
      year: '2024',
      description:
        'An AI-assisted medical platform where I focused on frontend architecture and API integration using Angular.',
      outcomes: [
        'Developed UI components, routing, and frontend structure with Angular and TypeScript.',
        'Worked with REST APIs and frontend-backend integration.',
        'Contributed to a product that combined software engineering with AI-oriented functionality.',
      ],
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'REST APIs'],
    },
    {
      category: 'Data engineering',
      title: 'ETL Pipeline and Demographic Dashboarding',
      year: '2024',
      description:
        'A project focused on transforming large datasets into decision-ready dashboards through automated processing pipelines.',
      outcomes: [
        'Designed ETL pipelines with Python and BigQuery for large-scale birth record processing.',
        'Performed cleaning, transformation, and data modeling for analytics.',
        'Built dashboards in Power BI and Tableau for trend analysis and decision support.',
      ],
      stack: ['Python', 'BigQuery', 'Power BI', 'Tableau', 'Data modeling'],
    },
    {
      category: 'Machine learning',
      title: 'Protein Thermal Stability Prediction',
      year: '2025',
      description:
        'A machine learning research-oriented project for predicting protein melting temperature from sequence embeddings.',
      outcomes: [
        'Worked with protein language models such as ProtT5, ProtBERT, and SeqVec.',
        'Implemented regression approaches including Random Forest, SVR, XGBoost, and Neural Networks.',
        'Strengthened the applied ML side of my profile without losing software engineering focus.',
      ],
      stack: ['Python', 'scikit-learn', 'XGBoost', 'Neural Networks', 'Embeddings'],
    },
  ] as ProjectItem[],
  skillGroups: [
    {
      title: 'Programming',
      summary: 'Languages I have used across academic, product, and project work.',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'C++', 'SQL'],
    },
    {
      title: 'Frontend and mobile',
      summary: 'User-facing development across web and mobile platforms.',
      items: ['React', 'Angular', 'HTML', 'CSS', 'Flutter'],
    },
    {
      title: 'Backend and data',
      summary: 'Service logic, APIs, data pipelines, and persistence layers.',
      items: ['Django', 'FastAPI', 'Spring Boot', 'REST APIs', 'MySQL', 'Firebase', 'BigQuery'],
    },
    {
      title: 'Cloud and tooling',
      summary: 'Infrastructure and delivery tooling used in real project workflows.',
      items: ['AWS', 'DigitalOcean', 'Google Cloud', 'Docker', 'Git', 'Databricks'],
    },
    {
      title: 'AI / ML',
      summary: 'Applied machine learning and modern AI engineering foundations.',
      items: ['Machine Learning', 'Deep Learning', 'LLMs', 'LangChain', 'LangGraph', 'RAG'],
    },
    {
      title: 'Visualization and analytics',
      summary: 'Turning processed data into decision-ready outputs.',
      items: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    },
  ] as SkillGroup[],
  education: {
    institution: 'Universidad de los Andes',
    degree: 'B.Sc. Systems and Computing Engineering',
    period: '2022 - Expected Jul 2026',
    location: 'Bogotá, Colombia',
    details: [
      'Strong interest in backend development, distributed systems, AI, and scalable software platforms.',
      'Teaching experience in Artificial Intelligence and workshop support in LLM application development.',
      'Academic background that combines software engineering, data, and systems thinking.',
    ],
  },
  certifications: [
    'NVIDIA DLI — Fundamentals of Deep Learning',
    'NVIDIA — Generative AI and Large Language Models',
    'NVIDIA — Building Transformer-Based NLP Applications',
    'NVIDIA — Building LLM Applications With Prompt Engineering',
    'NVIDIA — Efficient Large Language Model Customization',
    'IELTS Academic C1',
  ],
  languages: ['Spanish (Native)', 'English (Advanced)', 'Japanese (Basic)'],
  contact: {
    headline: 'Open to software engineering opportunities',
    description:
      'I am interested in software engineering roles where I can contribute to product delivery, backend systems, platform reliability, and technically ambitious teams.',
    primaryEmail: 'sjaimes11@gmail.com',
    secondaryEmail: 'sa.jaimesp@uniandes.edu.co',
    phone: '+57 302 212 9059',
    links: [
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/santiago-jaimes-puerto',
        href: 'https://www.linkedin.com/in/santiago-jaimes-puerto/',
      },
      {
        label: 'GitHub',
        value: 'github.com/sjaimes11',
        href: 'https://github.com/sjaimes11',
      },
    ] as ContactLink[],
  },
}
