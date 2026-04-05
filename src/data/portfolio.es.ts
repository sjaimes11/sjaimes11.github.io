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
    education: 'Educación',
    certifications: 'Certificaciones',
    contact: 'Contacto',
  },
  controls: {
    language: 'Idioma',
    themeLight: 'Modo claro',
    themeDark: 'Modo oscuro',
  },
  hero: {
    eyebrow: 'Portafolio / Ingeniería de Software',
    title: 'Ingeniero de software enfocado en sistemas backend, entrega full-stack e IA aplicada.',
    intro:
      'Soy estudiante multidisciplinario de ingeniería en la Universidad de los Andes, con un perfil que combina ingeniería de software, Inteligencia Artificial, Machine Learning y Data Science. Mi experiencia incluye construir plataformas full-stack, aplicaciones móviles, sistemas de IA, bases de datos relacionales y productos cloud desde el diseño hasta producción.',
    note:
      'Me interesan especialmente el backend, los sistemas distribuidos y las plataformas escalables, pero también me siento cómodo asumiendo implementación orientada a producto de punta a punta. La docencia en Inteligencia Artificial, la construcción de workflows de machine learning y la colaboración en entornos internacionales moldearon una forma de hacer ingeniería práctica, disciplinada y muy orientada a ejecución.',
    highlights: [
      {
        label: 'Ingeniería de Sistemas y Computación',
        iconPath: '/andes.jpg',
        iconAlt: 'Logo de la Universidad de los Andes',
      },
      {
        label: 'Ingeniería Eléctrica',
        iconPath: '/andes.jpg',
        iconAlt: 'Logo de la Universidad de los Andes',
      },
      {
        label: 'Ingeniería Electrónica',
        iconPath: '/andes.jpg',
        iconAlt: 'Logo de la Universidad de los Andes',
      },
      {
        label: 'Participante elegido e IT Support en GOROM Association',
        iconPath: '/Gorom-1.png',
        iconAlt: 'Logo de GOROM Association',
      },
    ],
    panelLabel: 'Posicionamiento actual',
    panelDescription:
      'Estudiante de ingeniería de software con experiencia práctica en entrega full-stack, despliegue cloud, flujos de datos y sistemas cercanos a IA.',
    primaryCtaLabel: 'Ver proyectos seleccionados',
    primaryCtaHref: '#projects',
    secondaryCtaLabel: 'Contactarme',
    secondaryCtaHref: '#contact',
    tertiaryCtaLabel: 'Ver CV en PDF',
    tertiaryCtaHref:
      'https://drive.google.com/file/d/18vLTKJNVjxc1Xdyhk8yjP8CDv_bHPwmV/view?usp=sharing',
    imagePath: '/profile-photo.jpeg',
    imageAlt: 'Retrato de Santiago Jaimes',
    imageFallback: 'Agrega tu foto en /public/profile-photo.jpg',
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
    title: 'Tecnologías y herramientas detrás de cómo construyo software',
    description: 'Explora las áreas que más uso entre ingeniería de producto, backend, cloud, flujos de IA y analítica.',
    filterLabel: 'Filtro',
    hardSkillsLabel: 'Hard Skills',
    softSkillsLabel: 'Soft Skills',
    languageSkillsLabel: 'Language Skills',
  },
  skillGroups: [
    {
      id: 'programming',
      title: 'Programación',
      summary: 'Lenguajes usados en trabajo académico, de producto y de proyectos.',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'C++', 'SQL'],
    },
    {
      id: 'frontend-mobile',
      title: 'Frontend y móvil',
      summary: 'Desarrollo orientado a usuario en web y móvil.',
      items: ['React', 'Angular', 'HTML', 'CSS', 'Flutter'],
    },
    {
      id: 'backend-data',
      title: 'Backend y datos',
      summary: 'Lógica de servicios, APIs, pipelines y persistencia.',
      items: ['Django', 'FastAPI', 'Spring Boot', 'REST APIs', 'MySQL', 'Firebase', 'BigQuery'],
    },
    {
      id: 'cloud-tooling',
      title: 'Cloud y tooling',
      summary: 'Infraestructura y herramientas de entrega usadas en proyectos reales.',
      items: ['AWS', 'DigitalOcean', 'Google Cloud', 'Docker', 'Git', 'Databricks'],
    },
    {
      id: 'ai-ml',
      title: 'IA / ML',
      summary: 'Fundamentos aplicados de machine learning e ingeniería de IA.',
      items: ['Machine Learning', 'Deep Learning', 'LLMs', 'LangChain', 'LangGraph', 'RAG'],
    },
    {
      id: 'viz-analytics',
      title: 'Visualización y analítica',
      summary: 'Convertir datos procesados en salidas útiles para decisión.',
      items: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    },
  ],
  hardSkills: [
    'Desarrollo web full-stack desde arquitectura hasta despliegue',
    'APIs backend, bases de datos relacionales e integración de servicios',
    'Despliegue cloud con AWS, DigitalOcean y Google Cloud',
    'Workflows de machine learning, ETL y dashboards analíticos',
    'Desarrollo móvil con Flutter y Firebase',
    'Control de versiones, trabajo Agile y documentación técnica',
  ],
  softSkills: [
    'Comunicación técnica clara en contextos de docencia y mentoría',
    'Colaboración en equipos internacionales y multidisciplinarios',
    'Aprendizaje rápido de frameworks, herramientas y dominios nuevos',
    'Ejecución orientada a producto con ownership',
    'Disciplina, autonomía y constancia',
    'Pensamiento analítico para problemas ambiguos de ingeniería',
  ],
  languageSkillsDetailed: [
    { name: 'Español', started: 'Desde 2001', level: 'Nativo', note: 'Idioma principal de comunicación.', badge: 'ES' },
    { name: 'Inglés', started: 'Desde 2012', level: 'Avanzado', note: 'IELTS Academic C1.', badge: 'EN' },
    { name: 'Japonés', started: 'Desde 2024', level: 'Básico', note: 'En crecimiento mediante estudio y colaboración internacional.', badge: 'JP' },
  ],
  educationSection: {
    eyebrow: 'Educación',
    title: 'Trayectoria académica y evolución en ingeniería',
    description: 'Una vista cronológica de los programas e instituciones que explican cómo pasé de bases generales de ingeniería a un perfil más fuerte en software y sistemas.',
  },
  certificationsSection: {
    eyebrow: 'Certificaciones',
    title: 'Credenciales que fortalecen mi perfil en IA e inglés',
    description: 'Certificaciones seleccionadas de NVIDIA DLI e IELTS que refuerzan mi base práctica en deep learning, NLP, aplicaciones con LLMs y dominio del inglés.',
    featuredLabel: 'Certificación destacada',
    prevLabel: 'Prev',
    nextLabel: 'Next',
  },
  education: [
    {
      institution: 'Universidad de los Andes',
      degree: 'B.Sc. Systems and Computing Engineering',
      period: 'Jan 2020 - Presente',
      location: 'Bogotá, Colombia',
      gpa: 'Promedio: 4.37 / 5.0 (actual)',
      details: [
        'Es la carrera que mejor representa el perfil de software que quiero proyectar.',
        'Con mayor foco en backend, sistemas distribuidos, datos y plataformas de software escalables.',
        'Conecta de forma más clara software engineering, implementación de producto y pensamiento de sistemas.',
      ],
      iconPath: '/andes.jpg',
      iconAlt: 'Logo de la Universidad de los Andes',
    },
    {
      institution: 'Universidad de los Andes',
      degree: 'B.Sc. Electronical Engineering',
      period: 'Jan 2020 - Apr 2026',
      location: 'Bogotá, Colombia',
      gpa: 'Promedio: 4.37 / 5.0',
      details: [
        'Fortaleció mi entendimiento de electrónica, rigor técnico y restricciones de diseño de ingeniería.',
        'Aporta profundidad a cómo entiendo sistemas que conectan software con implementaciones reales.',
        'Refuerza pensamiento analítico disciplinado en trabajo multidisciplinario.',
      ],
      iconPath: '/andes.jpg',
      iconAlt: 'Logo de la Universidad de los Andes',
    },
    {
      institution: 'Universidad de los Andes',
      degree: 'B.Sc. Electrical Engineering',
      period: 'Jan 2020 - Jul 2025',
      location: 'Bogotá, Colombia',
      gpa: 'Promedio: 4.33 / 5.0',
      details: [
        'Construyó una base fuerte en análisis cuantitativo, modelado y visión de sistemas.',
        'Expandió mi fundamento para resolver problemas técnicos de forma estructurada.',
        'Representa una etapa anterior de mi trayectoria que complementa mi foco actual en software.',
      ],
      iconPath: '/andes.jpg',
      iconAlt: 'Logo de la Universidad de los Andes',
    },
    {
      institution: 'Colegio Bilingüe La Enseñanza',
      degree: 'High School Diploma',
      period: 'Jan 2009 - Nov 2018',
      location: 'Bogotá, Bogotá D.C., Colombia',
      gpa: 'Promedio: 4.4 / 5.0',
      details: [
        'Base escolar bilingüe que fortaleció comunicación, disciplina y constancia académica.',
        'Representa la etapa formal más temprana de mi trayectoria educativa antes de ingeniería.',
        'Fue el inicio de la consistencia académica que luego mantuve en universidad.',
      ],
      iconPath: '/colegio.png',
      iconAlt: 'Logo del Colegio Bilingüe La Enseñanza',
    },
  ],
  certifications: [
    {
      provider: 'NVIDIA DLI',
      title: 'Generative AI with Diffusion Models',
      summary:
        'Base en pipelines de difusión, U-Nets, CLIP y generación de imágenes a partir de prompts de texto.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'NVIDIA DLI',
      title: 'Applications of AI for Anomaly Detection',
      summary:
        'Trabajo con detección de anomalías usando XGBoost, autoencoders y enfoques basados en GANs.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'NVIDIA DLI',
      title: 'Rapid Application Development with Large Language Models (LLMs)',
      summary:
        'Desarrollo end-to-end de aplicaciones con LLMs usando Hugging Face, transformers, LangChain y orquestación orientada a agentes.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'NVIDIA DLI',
      title: 'Efficient Large Language Model (LLM) Customization',
      summary:
        'Técnicas de personalización eficiente de LLMs, generación de datos sintéticos y adaptación con NVIDIA NeMo.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'NVIDIA DLI',
      title: 'Building LLM Applications With Prompt Engineering',
      summary:
        'Prompt engineering iterativo, flujos con LangChain, NVIDIA NIM y Llama 3.1 para aplicaciones prácticas con LLMs.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'NVIDIA DLI',
      title: 'Building Transformer-Based Natural Language Processing Applications',
      summary:
        'Aplicación de transformers a tareas NLP como NER, clasificación, question answering y despliegue para inferencia.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'NVIDIA DLI',
      title: 'Fundamentals of Deep Learning',
      summary:
        'Fundamentos prácticos de deep learning con PyTorch, CNNs, data augmentation, transfer learning y redes neuronales.',
      iconPath: '/nvidia_logo.jpg',
      iconAlt: 'Logo de NVIDIA DLI',
    },
    {
      provider: 'IELTS',
      title: 'IELTS Academic C1',
      summary:
        'Certifica dominio avanzado de inglés en lectura, escritura, escucha y speaking en contexto académico.',
      iconPath: '/IELTS.png',
      iconAlt: 'Logo de IELTS',
    },
  ],
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
      { label: 'Instagram', value: '@sjaimes29', href: 'https://www.instagram.com/sjaimes29/' },
      { label: 'Bogotá', value: 'CO, Bogotá D.C.', href: '#top' },
    ],
  },
  footer: 'Construido con React, TypeScript y una narrativa centrada en ingeniería de software.',
}
