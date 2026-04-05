import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PortfolioContent } from '../data/portfolio'

type HeroSectionProps = {
  content: PortfolioContent
}

export function HeroSection({ content }: HeroSectionProps) {
  const { hero, role, profileFacts } = content
  const [imageError, setImageError] = useState(false)
  const hasImage = hero.imagePath && !imageError

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
          {hero.highlights?.length ? (
            <div className="hero-highlights">
              {hero.highlights.map(item => (
                <div className="hero-highlight-card" key={item.label}>
                  <img
                    className="hero-highlight-card__logo"
                    src={item.iconPath}
                    alt={item.iconAlt}
                  />
                  <strong>{item.label}</strong>
                </div>
              ))}
            </div>
          ) : null}
          <p className="hero-copy__intro">{hero.intro}</p>

          <div className="hero-actions">
            <a className="button button--primary" href={hero.primaryCtaHref}>
              {hero.primaryCtaLabel}
            </a>
            <a className="button button--ghost" href={hero.secondaryCtaHref}>
              {hero.secondaryCtaLabel}
            </a>
            {hero.tertiaryCtaLabel && hero.tertiaryCtaHref ? (
              <a
                className="button button--ghost"
                href={hero.tertiaryCtaHref}
                target="_blank"
                rel="noreferrer"
              >
                {hero.tertiaryCtaLabel}
              </a>
            ) : null}
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
          <div className="hero-panel__content hero-panel__content--with-photo">
            <div className="hero-panel__photo-frame">
              {hasImage ? (
                <img
                  className="hero-panel__photo"
                  src={hero.imagePath}
                  alt={hero.imageAlt ?? content.name}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-panel__photo-placeholder">
                  <span>{content.shortName}</span>
                  <p>{hero.imageFallback}</p>
                </div>
              )}
            </div>

            <div className="hero-panel__positioning">
              <span className="hero-panel__label">{hero.panelLabel}</span>
              <h2>{role}</h2>
              <p>{hero.panelDescription}</p>
            </div>

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
