export type Locale = 'en' | 'es' | 'ja'

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
    credentials: string
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
    panelLabel: string
    panelDescription: string
    primaryCtaLabel: string
    primaryCtaHref: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
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
    openProjectLabel: string
  }
  projects: ProjectItem[]
  skillsSection: {
    eyebrow: string
    title: string
    description: string
  }
  skillGroups: SkillGroup[]
  credentialsSection: {
    eyebrow: string
    title: string
    description: string
    educationLabel: string
    certificationsLabel: string
    languagesLabel: string
    certificationsTitle: string
  }
  education: {
    institution: string
    degree: string
    period: string
    location: string
    details: string[]
  }
  certifications: string[]
  languages: string[]
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
