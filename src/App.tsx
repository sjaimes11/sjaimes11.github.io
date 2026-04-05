import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  defaultLocale,
  localeOptions,
  portfolioContentByLocale,
  type Locale,
} from './data/portfolio'
import { AboutSection } from './sections/AboutSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { FocusSection } from './sections/FocusSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'
import { SiteIcon, type IconName } from './components/SiteIcon'

type ThemeMode = 'dark' | 'light'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const content = portfolioContentByLocale[locale]
  const year = new Date().getFullYear()
  const navItems: Array<{ id: string; label: string; icon: IconName }> = [
    { id: 'about', label: content.navigation.about, icon: 'about' },
    { id: 'focus', label: content.navigation.strengths, icon: 'strengths' },
    { id: 'experience', label: content.navigation.experience, icon: 'experience' },
    { id: 'projects', label: content.navigation.projects, icon: 'projects' },
    { id: 'skills', label: content.navigation.stack, icon: 'skills' },
    { id: 'education', label: content.navigation.education, icon: 'education' },
    {
      id: 'certifications',
      label: content.navigation.certifications,
      icon: 'certifications',
    },
    { id: 'contact', label: content.navigation.contact, icon: 'contact' },
  ]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="grain-overlay" />

      <header className="site-header">
        <div className="site-header__shell">
          <a className="brand-mark" href="#top">
            <span className="brand-mark__mono">{content.shortName}</span>
            <span className="brand-mark__copy">
              <strong>{content.name}</strong>
              <small>{content.tagline}</small>
            </span>
          </a>

          <nav className="top-nav" aria-label="Primary">
            {navItems.map(item => (
              <a className="top-nav__link" href={`#${item.id}`} key={item.id}>
                <SiteIcon name={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="header-controls">
            <label className="language-select">
              <span className="sr-only">{content.controls.language}</span>
              <select
                aria-label={content.controls.language}
                value={locale}
                onChange={event => setLocale(event.target.value as Locale)}
              >
                {localeOptions.map(option => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="theme-toggle"
              type="button"
              aria-label={
                theme === 'dark'
                  ? content.controls.themeLight
                  : content.controls.themeDark
              }
              onClick={() =>
                setTheme(current => (current === 'dark' ? 'light' : 'dark'))
              }
            >
              <span>{theme === 'dark' ? '◐' : '◑'}</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <HeroSection content={content} />

        <motion.div
          className="proof-strip"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          {content.proofPoints.map(point => (
            <div className="proof-chip" key={point}>
              {point}
            </div>
          ))}
        </motion.div>

        <AboutSection content={content} />
        <FocusSection content={content} />
        <ExperienceSection content={content} />
        <ProjectsSection content={content} />
        <SkillsSection content={content} />
        <EducationSection content={content} />
        <CertificationsSection content={content} />
        <ContactSection content={content} />
      </main>

      <footer className="site-footer">
        <p>
          © {year} {content.name}. {content.footer}
        </p>
      </footer>
    </div>
  )
}
