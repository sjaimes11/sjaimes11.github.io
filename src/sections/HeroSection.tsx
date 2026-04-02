import { motion } from 'framer-motion'
import { portfolioContent } from '../data/portfolio'

export function HeroSection() {
  const { hero, role, location } = portfolioContent

  return (
    <section className="hero-section section">
      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className="hero-copy__intro">{hero.intro}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              Review capability blocks
            </a>
            <a className="button button--ghost" href="#contact">
              Prepare final version
            </a>
          </div>

          <p className="hero-copy__note">{hero.note}</p>
        </motion.div>

        <motion.aside
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="hero-panel__grid" />
          <div className="hero-panel__content">
            <span className="hero-panel__label">Current positioning</span>
            <h2>{role}</h2>
            <p>
              Oriented to software engineering roles where product quality,
              backend rigor and execution discipline matter.
            </p>

            <div className="hero-panel__stats">
              <div>
                <span>Target profile</span>
                <strong>Product / Platform / Full-Stack</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{location}</strong>
              </div>
              <div>
                <span>Fit themes</span>
                <strong>Marketplace, travel-tech, scale</strong>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
