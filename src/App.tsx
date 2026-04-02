import { motion } from 'framer-motion'
import { portfolioContent } from './data/portfolio'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { FocusSection } from './sections/FocusSection'
import { HeroSection } from './sections/HeroSection'
import { SkillsSection } from './sections/SkillsSection'
import { WorkSection } from './sections/WorkSection'

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
          <span className="brand-mark__text">Software Developer</span>
        </a>

        <nav className="top-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#skills">Stack</a>
          <a href="#work">Work</a>
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
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <p>
          © {year} S. Jaimes. Built with React, TypeScript and a product-first
          engineering lens.
        </p>
      </footer>
    </div>
  )
}
