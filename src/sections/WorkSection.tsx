import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import { portfolioContent } from '../data/portfolio'

export function WorkSection() {
  return (
    <section className="section" id="work">
      <SectionTitle
        eyebrow="Work"
        title="Capability blocks ready to be replaced with your real projects"
        description="I avoided inventing fake employers or achievements. These cards give the site a strong narrative now, and later they can map directly to internships, coursework, shipped apps or production systems."
      />

      <div className="work-grid">
        {portfolioContent.workCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <ShellCard
              className="work-card"
              header={
                <div className="work-card__header">
                  <span>{card.category}</span>
                </div>
              }
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="bullet-list">
                {card.outcomes.map(outcome => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>

              <div className="tag-row">
                {card.stack.map(item => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </ShellCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
