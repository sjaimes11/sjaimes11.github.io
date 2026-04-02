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

export type WorkCard = {
  title: string
  category: string
  description: string
  outcomes: string[]
  stack: string[]
}

export const portfolioContent = {
  name: 'S. Jaimes',
  role: 'Software Developer',
  location: 'Colombia',
  hero: {
    eyebrow: 'Portfolio / Software Engineering',
    title:
      'Building product-focused software with clean architecture and strong execution.',
    intro:
      'I design and ship reliable interfaces, backend services and engineering workflows for teams that care about quality, speed and maintainability.',
    note:
      'This first version is intentionally structured for recruiter review: fast to scan, technically credible and easy to evolve once the full CV and real project history are added.',
  },
  proofPoints: [
    'React + TypeScript',
    'Backend APIs',
    'Testing mindset',
    'Product engineering',
    'Maintainable systems',
    'Quality-driven delivery',
  ],
  about: {
    title: 'A portfolio designed for serious software roles',
    paragraphs: [
      'The goal of this site is not to look like a template. It is to communicate engineering maturity: clear thinking, careful execution and the ability to work on products with operational complexity.',
      'That positioning fits companies such as Amadeus, Rappi and Mercado Libre, where software quality, scale, business context and collaboration matter as much as syntax.',
      'The current content is structured so your real experience can be swapped in cleanly from a single data file when you share your CV.',
    ],
    metrics: [
      { value: '01', label: 'Clear personal narrative' },
      { value: '02', label: 'Technical depth without clutter' },
      { value: '03', label: 'Room for real project evidence' },
    ],
  },
  focusAreas: [
    {
      label: 'Product engineering',
      title: 'Software that supports real user workflows',
      description:
        'I care about software beyond code correctness: UX clarity, maintainability, edge cases and the way features behave in production.',
      bullets: [
        'Translate requirements into clean implementation boundaries.',
        'Balance speed of delivery with long-term code health.',
        'Write code that another engineer can understand quickly.',
      ],
    },
    {
      label: 'Backend and integration',
      title: 'Services, APIs and systems that hold up under pressure',
      description:
        'For marketplace, travel or logistics products, backend quality is business quality. The architecture has to be stable, observable and predictable.',
      bullets: [
        'Design API contracts with explicit data flow and failure handling.',
        'Think in terms of reliability, validation and operational simplicity.',
        'Prefer boring, dependable solutions over fragile complexity.',
      ],
    },
    {
      label: 'Frontend systems',
      title: 'Interfaces that feel polished without losing rigor',
      description:
        'Strong UI work is not decoration. It improves trust, usability and perceived quality. This portfolio intentionally reflects that mindset.',
      bullets: [
        'Use motion to guide attention instead of distracting from content.',
        'Structure pages for scanning by recruiters and hiring managers.',
        'Keep visual personality without sacrificing accessibility.',
      ],
    },
  ] as FocusArea[],
  skillGroups: [
    {
      title: 'Frontend',
      summary: 'Building responsive, maintainable user interfaces.',
      items: [
        'React',
        'TypeScript',
        'Vite',
        'CSS architecture',
        'Motion systems',
      ],
    },
    {
      title: 'Backend',
      summary: 'Designing dependable services and application logic.',
      items: ['REST APIs', 'Node.js', 'Java', 'Python', 'Validation'],
    },
    {
      title: 'Engineering',
      summary: 'Delivery practices that reduce risk and increase clarity.',
      items: ['Git workflows', 'Testing mindset', 'Code reviews', 'Refactoring', 'Documentation'],
    },
    {
      title: 'Business fit',
      summary: 'Relevant to product companies operating at scale.',
      items: [
        'Marketplace thinking',
        'Travel-tech alignment',
        'Performance awareness',
        'Ownership',
        'Collaboration',
      ],
    },
  ] as SkillGroup[],
  workCards: [
    {
      category: 'Representative capability',
      title: 'Operational dashboards and internal product tooling',
      description:
        'Interfaces for teams that need to monitor data, execute actions fast and trust what the system is showing.',
      outcomes: [
        'Structure complex workflows into smaller, clearer UI decisions.',
        'Prioritize readability, latency perception and error visibility.',
        'Useful for marketplace operations, support tooling and internal platforms.',
      ],
      stack: ['React', 'TypeScript', 'State management', 'Design systems'],
    },
    {
      category: 'Representative capability',
      title: 'Transactional services and integration-heavy backends',
      description:
        'Backend work that values explicit contracts, predictable behavior and maintainable business logic.',
      outcomes: [
        'Model clear boundaries between controllers, services and domain rules.',
        'Reduce hidden coupling and make failure paths easier to reason about.',
        'Relevant to travel flows, payments, orders and fulfillment systems.',
      ],
      stack: ['Node.js', 'Java', 'APIs', 'Validation', 'Service design'],
    },
    {
      category: 'Representative capability',
      title: 'Developer tooling and quality-oriented automation',
      description:
        'The fastest teams are usually the ones with better tooling, feedback loops and fewer avoidable regressions.',
      outcomes: [
        'Automate repetitive checks and improve delivery confidence.',
        'Use structure and conventions to accelerate collaboration.',
        'Turn engineering quality into something visible and repeatable.',
      ],
      stack: ['CLI tooling', 'Scripts', 'Testing', 'CI mindset', 'Documentation'],
    },
  ] as WorkCard[],
  contact: {
    headline: 'Let’s turn this into the final recruiter-facing version',
    description:
      'When you send your CV, I can replace the generic capability blocks with your actual experience, internships, academic projects, metrics and contact links.',
    email: 'your-email@example.com',
    ctaLabel: 'Use this version as the foundation',
  },
}
