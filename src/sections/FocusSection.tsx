import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type FocusSectionProps = {
  content: PortfolioContent
}

export function FocusSection({ content }: FocusSectionProps) {
  const { focusSection, focusAreas } = content

  return (
    <section className="section" id="focus">
      <SectionTitle
        eyebrow={focusSection.eyebrow}
        title={focusSection.title}
        description={focusSection.description}
        icon="strengths"
      />

      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <ShellCard
              header={
                <div className="card-kicker">
                  <span>{area.label}</span>
                </div>
              }
            >
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="bullet-list">
                {area.bullets.map(bullet => (
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
