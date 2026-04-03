import { motion } from 'framer-motion'
import { portfolioContent } from './data/portfolio'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { CredentialsSection } from './sections/CredentialsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { FocusSection } from './sections/FocusSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function App() {
  const year = new Date().getFullYear()

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="grain-overlay" />

      <header className="site-header">
        <a className="brand-mark" href="#top">
          <span className="brand-mark__mono">SJ</span>
          <span className="brand-mark__text">{portfolioContent.name}</span>
        </a>

        <nav className="top-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#focus">Strengths</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <HeroSection />

        <motion.div
          className="proof-strip"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          {portfolioContent.proofPoints.map(point => (
            <div className="proof-chip" key={point}>
              {point}
            </div>
          ))}
        </motion.div>

        <AboutSection />
        <FocusSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <p>
          © {year} {portfolioContent.name}. Built with React, TypeScript and a
          software-engineering-first narrative.
        </p>
      </footer>
    </div>
  )
}
