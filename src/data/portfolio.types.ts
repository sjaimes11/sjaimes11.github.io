export type Locale = 'en' | 'es' | 'ja'

export type FocusArea = {
  title: string
  label: string
  description: string
  bullets: string[]
}

export type SkillGroup = {
  id: string
  title: string
  summary: string
  items: string[]
  details?: SkillDetail[]
}

export type SkillDetail = {
  name: string
  summary: string
  since: string
  accent: 'blue' | 'purple' | 'amber' | 'green'
  icon: string
}

export type LanguageSkill = {
  name: string
  started: string
  level: string
  note: string
  badge: string
}

export type HeroHighlight = {
  label: string
  iconPath: string
  iconAlt: string
}

export type EducationEntry = {
  institution: string
  degree: string
  period: string
  location: string
  gpa: string
  details: string[]
  iconPath: string
  iconAlt: string
}

export type CertificationEntry = {
  provider: string
  title: string
  summary: string
  iconPath: string
  iconAlt: string
}

export type ExperienceItem = {
  organization: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export type ProjectItem = {
  group: string
  visual: 'web' | 'mobile' | 'data' | 'ai'
  tone: 'blue' | 'amber' | 'violet' | 'green'
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

export type PortfolioContent = {
  name: string
  shortName: string
  role: string
  location: string
  tagline: string
  navigation: {
    about: string
    strengths: string
    experience: string
    projects: string
    stack: string
    education: string
    certifications: string
    contact: string
  }
  controls: {
    language: string
    themeLight: string
    themeDark: string
  }
  hero: {
    eyebrow: string
    title: string
    intro: string
    note: string
    highlights?: HeroHighlight[]
    panelLabel: string
    panelDescription: string
    primaryCtaLabel: string
    primaryCtaHref: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
    tertiaryCtaLabel?: string
    tertiaryCtaHref?: string
    imagePath?: string
    imageAlt?: string
    imageFallback: string
  }
  profileFacts: { label: string; value: string }[]
  proofPoints: string[]
  about: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    metrics: { value: string; label: string }[]
  }
  focusSection: {
    eyebrow: string
    title: string
    description: string
  }
  focusAreas: FocusArea[]
  experienceSection: {
    eyebrow: string
    title: string
    description: string
  }
  experience: ExperienceItem[]
  projectsSection: {
    eyebrow: string
    title: string
    description: string
    allLabel: string
    featuredLabel: string
    prevLabel: string
    nextLabel: string
    openProjectLabel: string
  }
  projects: ProjectItem[]
  skillsSection: {
    eyebrow: string
    title: string
    description: string
    filterLabel: string
    hardSkillsLabel: string
    softSkillsLabel: string
    languageSkillsLabel: string
  }
  skillGroups: SkillGroup[]
  hardSkills?: string[]
  softSkills?: string[]
  languageSkillsDetailed?: LanguageSkill[]
  educationSection: {
    eyebrow: string
    title: string
    description: string
  }
  certificationsSection: {
    eyebrow: string
    title: string
    description: string
    featuredLabel: string
    prevLabel: string
    nextLabel: string
  }
  education: EducationEntry[]
  certifications: CertificationEntry[]
  contact: {
    eyebrow: string
    socialTitle: string
    terminalTitle: string
    statusTitle: string
    availability: string
    availabilityNote: string
    primaryEmail: string
    secondaryEmail: string
    phone: string
    terminalCommand: string
    terminalButton: string
    socialLinks: ContactLink[]
  }
  footer: string
}
