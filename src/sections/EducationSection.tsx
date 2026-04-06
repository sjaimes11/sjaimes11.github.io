import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import type { PortfolioContent } from '../data/portfolio'

type EducationSectionProps = {
  content: PortfolioContent
}

export function EducationSection({ content }: EducationSectionProps) {
  const { educationSection, education } = content
  const [openDegree, setOpenDegree] = useState(education[0]?.degree ?? '')

  return (
    <section className="section" id="education">
      <SectionTitle
        eyebrow={educationSection.eyebrow}
        title={educationSection.title}
        description={educationSection.description}
        icon="education"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="education-timeline">
          {education.map((item, index) => {
            const isOpen = openDegree === item.degree

            return (
              <article
                className={`education-timeline__item ${
                  isOpen ? 'is-open' : ''
                }`}
                key={`${item.degree}-${item.period}`}
              >
                <div className="education-timeline__rail" aria-hidden="true">
                  <span className="education-timeline__line" />
                  <span className="education-timeline__node">
                    <img src={item.iconPath} alt={item.iconAlt} />
                  </span>
                </div>

                <div className="education-timeline__content">
                  <button
                    className="education-card"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenDegree(current =>
                        current === item.degree ? '' : item.degree,
                      )
                    }
                  >
                    <div className="education-card__header">
                      <div className="education-card__title-wrap">
                        <span className="education-card__index">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3>{item.degree}</h3>
                          <p className="education-card__institution">
                            {item.institution}
                          </p>
                          <p className="education-card__period">{item.period}</p>
                        </div>
                      </div>
                      <span className="education-card__toggle" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>

                    <div className="education-card__meta">
                      <span>{item.location}</span>
                      {item.duration ? <span>{item.duration}</span> : null}
                      {item.gpa ? <span>{item.gpa}</span> : null}
                    </div>

                    {isOpen ? (
                      <div className="education-card__details">
                        {item.summary ? <p>{item.summary}</p> : null}
                        <ul className="bullet-list">
                          {item.details.map(detail => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
