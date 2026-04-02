import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import { portfolioContent } from '../data/portfolio'

export function FocusSection() {
  return (
    <section className="section" id="focus">
      <SectionTitle
        eyebrow="Focus"
        title="The combination of skills this portfolio is designed to communicate"
        description="This blends the structured professionalism of ahernandezt.com with the stronger atmosphere and premium feel of abhishektiwari.co."
      />

      <div className="focus-grid">
        {portfolioContent.focusAreas.map((area, index) => (
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
