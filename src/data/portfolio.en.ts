import { sharedProfile } from './portfolio.shared'
import type { PortfolioContent } from './portfolio.types'

export const portfolioEn: PortfolioContent = {
  name: sharedProfile.name,
  shortName: sharedProfile.shortName,
  role: 'Software Engineer',
  location: 'Bogota, Colombia',
  tagline: 'Web • Backend • AI Systems',
  navigation: {
    about: 'Biography',
    strengths: 'Strengths',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Skills',
    credentials: 'Academic',
    contact: 'Contact',
  },
  controls: {
    language: 'Language',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
  },
  hero: {
    eyebrow: 'Portfolio / Software Engineering',
    title: 'Full-stack engineer with backend focus, product instinct, and AI depth.',
    intro:
      'I build web platforms, mobile apps, data workflows, and cloud-backed systems from design to deployment.',
    note:
      'I am targeting software engineering roles where product execution, backend reliability, and scalable systems matter, including teams like Amadeus, Rappi, and Mercado Libre.',
    panelLabel: 'Current positioning',
    panelDescription:
      'Software engineering profile with hands-on experience across full-stack delivery, cloud deployment, data workflows, and AI-adjacent systems.',
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
    eyebrow: 'About',
    title: 'Engineering profile with product and AI depth',
    description: 'Software engineering first, with enough AI and data depth to be useful on modern product teams.',
    paragraphs: [
      'My work spans full-stack platforms, mobile development, REST integrations, database design, cloud deployment, and collaborative software projects.',
      'I am especially interested in backend development, distributed systems, and scalable software platforms, while still being comfortable shipping frontend and user-facing work.',
      'Teaching Artificial Intelligence and supporting NVIDIA LLM workshops strengthened how I think about machine learning systems, developer tooling, and technical communication.',
    ],
    metrics: [
      { value: '100+', label: 'Users on SEED Intranet' },
      { value: '4.37', label: 'GPA / 5.0 at Uniandes' },
      { value: 'Japan', label: 'International collaboration' },
    ],
  },
  focusSection: {
    eyebrow: 'Strengths',
    title: 'A profile built for product, platform, and engineering teams',
    description: 'Strong implementation, good systems instincts, and practical AI literacy.',
  },
  focusAreas: [
    {
      label: 'Software engineering',
      title: 'Shipping complete products, not isolated code snippets',
      description:
        'I work across frontend, backend, databases, and deployment, with a preference for systems that are maintainable and useful in production.',
      bullets: [
        'Build from architecture and data model to UI and deployment.',
        'Work across React, Angular, Flutter, Python, SQL, and cloud services.',
        'Keep code quality, readability, and collaboration in view.',
      ],
    },
    {
      label: 'Backend and systems',
      title: 'A strong interest in APIs, services, and scalable platforms',
      description:
        'The engineering layer that attracts me most is where reliability, business logic, and system behavior meet.',
      bullets: [
        'Design backend flows with explicit contracts and validation.',
        'Think in terms of maintainability, data flow, and boundaries.',
        'Interested in platform, travel-tech, and marketplace environments.',
      ],
    },
    {
      label: 'AI and data',
      title: 'AI/ML literacy that strengthens product engineering',
      description:
        'My AI experience is practical: teaching, workshops, ML projects, ETL, and experimentation that complements software development.',
      bullets: [
        'Teaching assistant for Introduction to Artificial Intelligence.',
        'NVIDIA workshop support on prompt engineering and LLM applications.',
        'Experience with ML models, ETL workflows, and analytics tooling.',
      ],
    },
  ],
  experienceSection: {
    eyebrow: 'Experience',
    title: 'Teaching, international collaboration, and platform ownership',
    description: 'Teaching responsibilities, international project ownership, and applied AI exposure.',
  },
  experience: [
    {
      organization: 'Universidad de los Andes',
      role: 'Teaching Assistant - Introduction to Artificial Intelligence',
      period: '2026 - Present',
      location: 'Bogota, Colombia',
      bullets: [
        'Support students in machine learning, search algorithms, logic, and Python problem solving.',
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
        'Led IT coordination and digital platform ownership, including intranet development and website operations.',
        'Built and maintained an intranet web application for SEED participants and alumni.',
        'Worked with React, Django, and REST APIs to support platform development and maintenance.',
      ],
    },
    {
      organization: 'NVIDIA Deep Learning Institute / Universidad de los Andes',
      role: 'Teaching Assistant - Building LLM Applications With Prompt Engineering',
      period: 'Aug 2025',
      location: 'Bogota, Colombia',
      bullets: [
        'Assisted participants in a workshop focused on building LLM-based applications.',
        'Provided technical support on LangChain, Llama, structured output, and tool use.',
        'Bridged hands-on AI system building with teaching and technical mentoring.',
      ],
    },
    {
      organization: 'SEED Program - GOROM Japan',
      role: 'International Social Entrepreneurship Program',
      period: 'Jul 2025 - Dec 2025',
      location: 'Japan',
      bullets: [
        'Developed a digital platform concept to improve tourism visibility and regional economic activity.',
        'Analyzed user behavior, market trends, and strategy in an international collaborative setting.',
        'Presented proposals to stakeholders across technical and non-technical contexts.',
      ],
    },
  ],
  projectsSection: {
    eyebrow: 'Projects',
    title: 'Projects that show range across product, backend, data, and AI',
    description: 'Concrete evidence of products, systems, and technical depth.',
    openProjectLabel: 'Open project',
  },
  projects: [
    {
      category: 'Full-stack platform',
      title: 'SEED Intranet',
      year: '2024',
      description: 'Collaboration platform for international program participants built as a real full-stack system.',
      outcomes: [
        'Built forums, documents, activity calendar, profiles, and community directory.',
        'Developed backend services, authentication, and database integration with MySQL and Auth0.',
        'Deployed on DigitalOcean and AWS database services for 100+ users.',
      ],
      stack: ['React', 'Django', 'REST APIs', 'MySQL', 'Auth0', 'DigitalOcean', 'AWS'],
    },
    {
      category: 'Mobile application',
      title: 'Ecosphere',
      year: '2024',
      description: 'Flutter app to promote recycling and sustainability through community and location-based features.',
      outcomes: [
        'Implemented authentication, community posts, recycling mapping, and rewards.',
        'Integrated Firebase Authentication and Firestore as backend services.',
        'Worked collaboratively with Git and Agile development practices.',
      ],
      stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Google Maps API'],
    },
    {
      category: 'Frontend web application',
      title: 'MedicIA',
      year: '2024',
      description: 'AI-assisted medical platform where I focused on frontend architecture and API integration using Angular.',
      outcomes: [
        'Developed UI components, routing, and frontend structure with Angular and TypeScript.',
        'Worked with REST APIs and frontend-backend integration.',
        'Contributed to a product that mixed software engineering with AI-oriented functionality.',
      ],
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'REST APIs'],
    },
    {
      category: 'Data engineering',
      title: 'ETL Pipeline and Demographic Dashboarding',
      year: '2024',
      description: 'Automated data processing pipelines that turned large datasets into decision-ready dashboards.',
      outcomes: [
        'Designed ETL pipelines with Python and BigQuery for large-scale processing.',
        'Performed cleaning, transformation, and data modeling for analytics.',
        'Built dashboards in Power BI and Tableau for decision support.',
      ],
      stack: ['Python', 'BigQuery', 'Power BI', 'Tableau', 'Data modeling'],
    },
    {
      category: 'Machine learning',
      title: 'Protein Thermal Stability Prediction',
      year: '2025',
      description: 'Research-oriented ML project for predicting protein melting temperature from sequence embeddings.',
      outcomes: [
        'Worked with ProtT5, ProtBERT, and SeqVec embeddings.',
        'Implemented Random Forest, SVR, XGBoost, and Neural Networks.',
        'Strengthened the ML side of my profile without losing software engineering focus.',
      ],
      stack: ['Python', 'scikit-learn', 'XGBoost', 'Neural Networks', 'Embeddings'],
    },
  ],
  skillsSection: {
    eyebrow: 'Skills',
    title: 'A stack aligned with product and platform teams',
    description: 'Technologies and engineering areas that appear across my software and AI-oriented work.',
  },
  skillGroups: [
    {
      title: 'Programming',
      summary: 'Languages used across academic, product, and project work.',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'C++', 'SQL'],
    },
    {
      title: 'Frontend and mobile',
      summary: 'User-facing development across web and mobile platforms.',
      items: ['React', 'Angular', 'HTML', 'CSS', 'Flutter'],
    },
    {
      title: 'Backend and data',
      summary: 'Service logic, APIs, pipelines, and persistence layers.',
      items: ['Django', 'FastAPI', 'Spring Boot', 'REST APIs', 'MySQL', 'Firebase', 'BigQuery'],
    },
    {
      title: 'Cloud and tooling',
      summary: 'Infrastructure and delivery tooling used in real projects.',
      items: ['AWS', 'DigitalOcean', 'Google Cloud', 'Docker', 'Git', 'Databricks'],
    },
    {
      title: 'AI / ML',
      summary: 'Applied machine learning and AI engineering foundations.',
      items: ['Machine Learning', 'Deep Learning', 'LLMs', 'LangChain', 'LangGraph', 'RAG'],
    },
    {
      title: 'Visualization and analytics',
      summary: 'Turning processed data into decision-ready outputs.',
      items: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    },
  ],
  credentialsSection: {
    eyebrow: 'Academic',
    title: 'Education, certifications, and language range',
    description: 'A compact view of my academic base and the AI/ML training that strengthens my engineering profile.',
    educationLabel: 'Education',
    certificationsLabel: 'Certifications',
    languagesLabel: 'Languages',
    certificationsTitle: 'NVIDIA and language credentials',
  },
  education: {
    institution: 'Universidad de los Andes',
    degree: 'B.Sc. Systems and Computing Engineering',
    period: '2022 - Expected Jul 2026',
    location: 'Bogota, Colombia',
    details: [
      'Strong interest in backend development, distributed systems, AI, and scalable software platforms.',
      'Teaching experience in Artificial Intelligence and workshop support in LLM application development.',
      'Academic background that combines software engineering, data, and systems thinking.',
    ],
  },
  certifications: [
    'NVIDIA DLI - Fundamentals of Deep Learning',
    'NVIDIA - Generative AI and Large Language Models',
    'NVIDIA - Building Transformer-Based NLP Applications',
    'NVIDIA - Building LLM Applications With Prompt Engineering',
    'NVIDIA - Efficient Large Language Model Customization',
    'IELTS Academic C1',
  ],
  languages: ['Spanish (Native)', 'English (Advanced)', 'Japanese (Basic)'],
  contact: {
    eyebrow: 'Next step',
    socialTitle: 'Connect',
    terminalTitle: 'mail_client.ts',
    statusTitle: 'System status',
    availability: 'Available for software engineering roles',
    availabilityNote: 'Open to backend, full-stack, and platform-oriented opportunities.',
    primaryEmail: sharedProfile.primaryEmail,
    secondaryEmail: sharedProfile.secondaryEmail,
    phone: sharedProfile.phone,
    terminalCommand: `await connect("${sharedProfile.primaryEmail}");`,
    terminalButton: 'INITIALIZE',
    socialLinks: [
      { label: 'LinkedIn', value: 'linkedin.com/in/santiago-jaimes-puerto', href: sharedProfile.linkedin },
      { label: 'GitHub', value: 'github.com/sjaimes11', href: sharedProfile.github },
      { label: 'Gmail', value: sharedProfile.primaryEmail, href: `mailto:${sharedProfile.primaryEmail}` },
      { label: 'Location', value: 'Bogota, Colombia', href: '#top' },
    ],
  },
  footer: 'Built with React, TypeScript, and a software-engineering-first narrative.',
}
