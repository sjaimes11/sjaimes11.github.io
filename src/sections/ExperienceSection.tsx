import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type ExperienceSectionProps = {
  content: PortfolioContent
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const { experienceSection, experience } = content

  return (
    <section className="section" id="experience">
      <SectionTitle
        eyebrow={experienceSection.eyebrow}
        title={experienceSection.title}
        description={experienceSection.description}
      />

      <div className="experience-grid">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.organization}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <ShellCard
              className="timeline-card"
              header={
                <div className="timeline-card__header">
                  <span>{item.organization}</span>
                  <strong>{item.period}</strong>
                </div>
              }
            >
              <h3>{item.role}</h3>
              <p className="meta-line">{item.location}</p>
              <ul className="bullet-list">
                {item.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </ShellCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
