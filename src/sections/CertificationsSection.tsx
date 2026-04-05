import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type CertificationsSectionProps = {
  content: PortfolioContent
}

export function CertificationsSection({
  content,
}: CertificationsSectionProps) {
  const { certificationsSection, certifications } = content
  const [activeCertification, setActiveCertification] = useState(0)

  useEffect(() => {
    if (certifications.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveCertification(current => (current + 1) % certifications.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [certifications.length])

  const currentCertification = certifications[activeCertification]

  return (
    <section className="section" id="certifications">
      <SectionTitle
        eyebrow={certificationsSection.eyebrow}
        title={certificationsSection.title}
        description={certificationsSection.description}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <ShellCard>
          <div className="certifications-carousel">
            {currentCertification ? (
              <article className="certification-card">
                <div className="card-kicker">
                  <span>{certificationsSection.featuredLabel}</span>
                </div>

                <div className="certification-card__provider">
                  <img
                    className="certification-card__logo"
                    src={currentCertification.iconPath}
                    alt={currentCertification.iconAlt}
                  />
                  <div className="certification-card__provider-copy">
                    <span>{currentCertification.provider}</span>
                    <small>
                      {activeCertification + 1} / {certifications.length}
                    </small>
                  </div>
                </div>

                <strong>{currentCertification.title}</strong>
                <p>{currentCertification.summary}</p>
              </article>
            ) : null}

            <div className="certifications-carousel__footer">
              <button
                className="carousel-button"
                type="button"
                onClick={() =>
                  setActiveCertification(current =>
                    current === 0 ? certifications.length - 1 : current - 1,
                  )
                }
              >
                {certificationsSection.prevLabel}
              </button>

              <div className="carousel-dots" aria-hidden="true">
                {certifications.map((certification, index) => (
                  <span
                    className={`carousel-dot ${
                      index === activeCertification ? 'is-active' : ''
                    }`}
                    key={`${certification.provider}-${certification.title}`}
                  />
                ))}
              </div>

              <button
                className="carousel-button"
                type="button"
                onClick={() =>
                  setActiveCertification(current => (current + 1) % certifications.length)
                }
              >
                {certificationsSection.nextLabel}
              </button>
            </div>
          </div>
        </ShellCard>
      </motion.div>
    </section>
  )
}
