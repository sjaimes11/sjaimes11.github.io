import { motion } from 'framer-motion'
import type { PortfolioContent } from '../data/portfolio'

type HeroSectionProps = {
  content: PortfolioContent
}

export function HeroSection({ content }: HeroSectionProps) {
  const { hero, role, profileFacts } = content

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
            <a className="button button--primary" href={hero.primaryCtaHref}>
              {hero.primaryCtaLabel}
            </a>
            <a className="button button--ghost" href={hero.secondaryCtaHref}>
              {hero.secondaryCtaLabel}
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
            <span className="hero-panel__label">{hero.panelLabel}</span>
            <h2>{role}</h2>
            <p>{hero.panelDescription}</p>

            <div className="hero-panel__stats">
              {profileFacts.map(fact => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
