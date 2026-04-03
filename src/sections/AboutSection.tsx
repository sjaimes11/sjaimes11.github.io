import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import { portfolioContent } from '../data/portfolio'

export function AboutSection() {
  const { about } = portfolioContent

  return (
    <section className="section" id="about">
      <SectionTitle
        eyebrow="About"
        title={about.title}
        description={about.description}
      />

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <ShellCard>
            <div className="stacked-copy">
              {about.paragraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ShellCard>
        </motion.div>

        <motion.div
          className="about-metrics"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {about.metrics.map(metric => (
            <ShellCard
              key={metric.label}
              header={<span className="metric-value">{metric.value}</span>}
            >
              <p className="metric-label">{metric.label}</p>
            </ShellCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
