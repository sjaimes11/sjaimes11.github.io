import { sharedProfile } from './portfolio.shared'
import type { PortfolioContent } from './portfolio.types'

export const portfolioEs: PortfolioContent = {
  name: sharedProfile.name,
  shortName: sharedProfile.shortName,
  role: 'Ingeniero de Software',
  location: 'Bogota, Colombia',
  tagline: 'Web • Backend • Sistemas de IA',
  navigation: {
    about: 'Biografía',
    strengths: 'Fortalezas',
    experience: 'Experiencia',
    projects: 'Proyectos',
    stack: 'Habilidades',
    credentials: 'Académico',
    contact: 'Contacto',
  },
  controls: {
    language: 'Idioma',
    themeLight: 'Modo claro',
    themeDark: 'Modo oscuro',
  },
  hero: {
    eyebrow: 'Portafolio / Ingeniería de Software',
    title: 'Ingeniero full-stack con interés en backend, criterio de producto y base en IA.',
    intro:
      'Construyo plataformas web, aplicaciones móviles, flujos de datos y sistemas desplegados en la nube desde el diseño hasta producción.',
    note:
      'Me interesan especialmente roles de software engineering donde importen la ejecución de producto, la confiabilidad backend y los sistemas escalables, incluyendo equipos como Amadeus, Rappi y Mercado Libre.',
    panelLabel: 'Posicionamiento actual',
    panelDescription:
      'Perfil de ingeniería de software con experiencia práctica en entrega full-stack, despliegue cloud, flujos de datos y sistemas cercanos a IA.',
    primaryCtaLabel: 'Ver proyectos seleccionados',
    primaryCtaHref: '#projects',
    secondaryCtaLabel: 'Contactarme',
    secondaryCtaHref: '#contact',
  },
  profileFacts: [
    { label: 'Graduación estimada', value: 'Jul 2026' },
    { label: 'Foco principal', value: 'Backend / Full-stack / Platform' },
    { label: 'Diferencial', value: 'IA, datos y entrega de software' },
    { label: 'Experiencia internacional', value: 'Tokio, Japón (Híbrido)' },
  ],
  proofPoints: [
    'Entrega full-stack',
    'Despliegue en nube',
    'Móvil + web',
    'APIs backend',
    'Solidez en IA / ML',
    'Equipos internacionales',
  ],
  about: {
    eyebrow: 'Sobre mí',
    title: 'Perfil de ingeniería con foco en producto y profundidad en IA',
    description: 'Ingeniería de software primero, con una base sólida en IA y datos para aportar en equipos modernos de producto.',
    paragraphs: [
      'Mi experiencia cubre plataformas full-stack, desarrollo móvil, integraciones REST, diseño de bases de datos, despliegue cloud y proyectos colaborativos de software.',
      'Me interesan especialmente el backend, los sistemas distribuidos y las plataformas escalables, sin dejar de sentirme cómodo construyendo frontend y trabajo orientado a usuario.',
      'Ser monitor de Inteligencia Artificial y apoyar workshops de NVIDIA sobre LLMs también fortaleció mi forma de pensar sistemas de machine learning, tooling para desarrolladores y comunicación técnica.',
    ],
    metrics: [
      { value: '100+', label: 'Usuarios en SEED Intranet' },
      { value: '4.37', label: 'Promedio / 5.0 en Uniandes' },
      { value: 'Japón', label: 'Colaboración internacional' },
    ],
  },
  focusSection: {
    eyebrow: 'Fortalezas',
    title: 'Un perfil pensado para equipos de producto, plataforma e ingeniería',
    description: 'Implementación fuerte, buenos instintos de sistemas y alfabetización práctica en IA.',
  },
  focusAreas: [
    {
      label: 'Ingeniería de software',
      title: 'Construir productos completos, no solo fragmentos de código',
      description:
        'Trabajo a través de frontend, backend, bases de datos y despliegue, con preferencia por sistemas mantenibles y útiles en producción.',
      bullets: [
        'Construyo desde arquitectura y modelo de datos hasta UI y despliegue.',
        'Trabajo con React, Angular, Flutter, Python, SQL y servicios cloud.',
        'Mantengo calidad de código, legibilidad y colaboración como prioridad.',
      ],
    },
    {
      label: 'Backend y sistemas',
      title: 'Interés fuerte en APIs, servicios y plataformas escalables',
      description:
        'La parte de software engineering que más me atrae es donde se encuentran la confiabilidad, el comportamiento del sistema y la lógica de negocio.',
      bullets: [
        'Diseño flujos backend con contratos explícitos y validación.',
        'Pienso en mantenibilidad, flujo de datos y límites del sistema.',
        'Me atraen entornos de plataforma, travel-tech y marketplaces.',
      ],
    },
    {
      label: 'IA y datos',
      title: 'Base en IA/ML que fortalece la ingeniería de producto',
      description:
        'Mi experiencia en IA es práctica: docencia, workshops, proyectos de ML, ETL y experimentación que complementan el desarrollo de software.',
      bullets: [
        'Monitor de Introducción a la Inteligencia Artificial.',
        'Soporte en workshops de NVIDIA sobre prompt engineering y aplicaciones con LLMs.',
        'Experiencia con modelos de ML, pipelines ETL y herramientas analíticas.',
      ],
    },
  ],
  experienceSection: {
    eyebrow: 'Experiencia',
    title: 'Docencia, colaboración internacional y ownership de plataformas',
    description: 'Responsabilidades docentes, ownership de proyectos internacionales y exposición aplicada a IA.',
  },
  experience: [
    {
      organization: 'Universidad de los Andes',
      role: 'Monitor - Introducción a la Inteligencia Artificial',
      period: '2026 - Presente',
      location: 'Bogota, Colombia',
      bullets: [
        'Apoyo a estudiantes en machine learning, algoritmos de búsqueda, lógica y resolución de problemas en Python.',
        'Diseño material académico y guío talleres relacionados con IA y desarrollo de software.',
        'Fortalezco mi comunicación técnica explicando ideas complejas de forma clara y práctica.',
      ],
    },
    {
      organization: 'GOROM Association',
      role: 'IT Coordinator',
      period: 'Ago 2025 - Dic 2025',
      location: 'Tokio, Japón (Híbrido)',
      bullets: [
        'Lideré la coordinación IT y el ownership de plataformas digitales, incluyendo intranet y operación del sitio web.',
        'Construí y mantuve una aplicación web interna para participantes y alumni de SEED.',
        'Trabajé con React, Django y REST APIs para desarrollo y mantenimiento de plataformas web.',
      ],
    },
    {
      organization: 'NVIDIA Deep Learning Institute / Universidad de los Andes',
      role: 'Teaching Assistant - Building LLM Applications With Prompt Engineering',
      period: 'Ago 2025',
      location: 'Bogota, Colombia',
      bullets: [
        'Apoyé a participantes en un workshop enfocado en construir aplicaciones con LLMs.',
        'Brindé soporte técnico en LangChain, Llama, salidas estructuradas y uso de tools.',
        'Conecté construcción práctica de sistemas de IA con docencia y mentoría técnica.',
      ],
    },
    {
      organization: 'SEED Program - GOROM Japan',
      role: 'Programa Internacional de Emprendimiento Social',
      period: 'Jul 2025 - Dic 2025',
      location: 'Japón',
      bullets: [
        'Desarrollé un concepto de plataforma digital para mejorar la visibilidad turística y la actividad económica regional.',
        'Analicé comportamiento de usuarios, tendencias de mercado y estrategia en un entorno internacional colaborativo.',
        'Presenté propuestas a stakeholders en contextos técnicos y no técnicos.',
      ],
    },
  ],
  projectsSection: {
    eyebrow: 'Proyectos',
    title: 'Proyectos que muestran rango en producto, backend, datos e IA',
    description: 'Evidencia concreta de productos, sistemas y profundidad técnica.',
    openProjectLabel: 'Abrir proyecto',
  },
  projects: [
    {
      category: 'Plataforma full-stack',
      title: 'SEED Intranet',
      year: '2024',
      description: 'Plataforma de colaboración para participantes de un programa internacional construida como un sistema full-stack real.',
      outcomes: [
        'Construí foros, repositorio de documentos, calendario, perfiles y directorio de comunidad.',
        'Desarrollé servicios backend, autenticación e integración con MySQL y Auth0.',
        'Desplegué en DigitalOcean y AWS para más de 100 usuarios.',
      ],
      stack: ['React', 'Django', 'REST APIs', 'MySQL', 'Auth0', 'DigitalOcean', 'AWS'],
    },
    {
      category: 'Aplicación móvil',
      title: 'Ecosphere',
      year: '2024',
      description: 'App móvil en Flutter para promover reciclaje y sostenibilidad mediante funciones de comunidad y geolocalización.',
      outcomes: [
        'Implementé autenticación, publicaciones, mapeo de reciclaje y sistema de recompensas.',
        'Integré Firebase Authentication y Firestore como servicios backend.',
        'Trabajé colaborativamente con Git y prácticas Agile.',
      ],
      stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Google Maps API'],
    },
    {
      category: 'Aplicación web frontend',
      title: 'MedicIA',
      year: '2024',
      description: 'Plataforma médica asistida por IA donde me enfoqué en arquitectura frontend e integración con APIs usando Angular.',
      outcomes: [
        'Desarrollé componentes UI, routing y estructura frontend con Angular y TypeScript.',
        'Trabajé con REST APIs e integración frontend-backend.',
        'Contribuí a un producto que mezclaba software engineering con funcionalidad orientada a IA.',
      ],
      stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'REST APIs'],
    },
    {
      category: 'Ingeniería de datos',
      title: 'ETL Pipeline y Demographic Dashboarding',
      year: '2024',
      description: 'Pipelines automatizados que transformaron datasets grandes en dashboards listos para decisión.',
      outcomes: [
        'Diseñé pipelines ETL con Python y BigQuery para procesamiento a gran escala.',
        'Realicé limpieza, transformación y modelado de datos para analítica.',
        'Construí dashboards en Power BI y Tableau para soporte a decisiones.',
      ],
      stack: ['Python', 'BigQuery', 'Power BI', 'Tableau', 'Modelado de datos'],
    },
    {
      category: 'Machine learning',
      title: 'Protein Thermal Stability Prediction',
      year: '2025',
      description: 'Proyecto de ML para predecir temperatura de fusión de proteínas a partir de embeddings de secuencia.',
      outcomes: [
        'Trabajé con ProtT5, ProtBERT y SeqVec.',
        'Implementé Random Forest, SVR, XGBoost y redes neuronales.',
        'Fortalecí el lado aplicado de ML en mi perfil sin perder el foco en software engineering.',
      ],
      stack: ['Python', 'scikit-learn', 'XGBoost', 'Neural Networks', 'Embeddings'],
    },
  ],
  skillsSection: {
    eyebrow: 'Habilidades',
    title: 'Un stack alineado con equipos de producto y plataforma',
    description: 'Tecnologías y áreas de ingeniería presentes en mi trabajo de software y proyectos orientados a IA.',
  },
  skillGroups: [
    {
      title: 'Programación',
      summary: 'Lenguajes usados en trabajo académico, de producto y de proyectos.',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'C++', 'SQL'],
    },
    {
      title: 'Frontend y móvil',
      summary: 'Desarrollo orientado a usuario en web y móvil.',
      items: ['React', 'Angular', 'HTML', 'CSS', 'Flutter'],
    },
    {
      title: 'Backend y datos',
      summary: 'Lógica de servicios, APIs, pipelines y persistencia.',
      items: ['Django', 'FastAPI', 'Spring Boot', 'REST APIs', 'MySQL', 'Firebase', 'BigQuery'],
    },
    {
      title: 'Cloud y tooling',
      summary: 'Infraestructura y herramientas de entrega usadas en proyectos reales.',
      items: ['AWS', 'DigitalOcean', 'Google Cloud', 'Docker', 'Git', 'Databricks'],
    },
    {
      title: 'IA / ML',
      summary: 'Fundamentos aplicados de machine learning e ingeniería de IA.',
      items: ['Machine Learning', 'Deep Learning', 'LLMs', 'LangChain', 'LangGraph', 'RAG'],
    },
    {
      title: 'Visualización y analítica',
      summary: 'Convertir datos procesados en salidas útiles para decisión.',
      items: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    },
  ],
  credentialsSection: {
    eyebrow: 'Académico',
    title: 'Educación, certificaciones y rango de idiomas',
    description: 'Vista compacta de mi base académica y formación en IA/ML que fortalece mi perfil de ingeniería.',
    educationLabel: 'Educación',
    certificationsLabel: 'Certificaciones',
    languagesLabel: 'Idiomas',
    certificationsTitle: 'Credenciales de NVIDIA e idiomas',
  },
  education: {
    institution: 'Universidad de los Andes',
    degree: 'Pregrado en Ingeniería de Sistemas y Computación',
    period: '2022 - Esperado Jul 2026',
    location: 'Bogota, Colombia',
    details: [
      'Interés fuerte en backend, sistemas distribuidos, IA y plataformas de software escalables.',
      'Experiencia docente en Inteligencia Artificial y apoyo a workshops sobre desarrollo de aplicaciones con LLMs.',
      'Formación académica que combina software engineering, datos y pensamiento de sistemas.',
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
  languages: ['Español (Nativo)', 'Inglés (Avanzado)', 'Japonés (Básico)'],
  contact: {
    eyebrow: 'Siguiente paso',
    socialTitle: 'Conectar',
    terminalTitle: 'mail_client.ts',
    statusTitle: 'Estado del sistema',
    availability: 'Disponible para roles de ingeniería de software',
    availabilityNote: 'Abierto a oportunidades backend, full-stack y orientadas a plataforma.',
    primaryEmail: sharedProfile.primaryEmail,
    secondaryEmail: sharedProfile.secondaryEmail,
    phone: sharedProfile.phone,
    terminalCommand: `await connect("${sharedProfile.primaryEmail}");`,
    terminalButton: 'INICIALIZAR',
    socialLinks: [
      { label: 'LinkedIn', value: 'linkedin.com/in/santiago-jaimes-puerto', href: sharedProfile.linkedin },
      { label: 'GitHub', value: 'github.com/sjaimes11', href: sharedProfile.github },
      { label: 'Gmail', value: sharedProfile.primaryEmail, href: `mailto:${sharedProfile.primaryEmail}` },
      { label: 'Ubicación', value: 'Bogota, Colombia', href: '#top' },
    ],
  },
  footer: 'Construido con React, TypeScript y una narrativa centrada en ingeniería de software.',
}
