import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import { portfolioContent } from '../data/portfolio'

export function CredentialsSection() {
  const { education, certifications, languages } = portfolioContent

  return (
    <section className="section" id="credentials">
      <SectionTitle
        eyebrow="Credentials"
        title="Education, certifications, and language range"
        description="This gives recruiters a compact view of your academic base and the AI/ML training that strengthens your engineering profile."
      />

      <div className="credentials-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <ShellCard
            header={
              <div className="card-kicker">
                <span>Education</span>
              </div>
            }
          >
            <h3>{education.institution}</h3>
            <p className="meta-line">{education.degree}</p>
            <p className="meta-line">{education.period}</p>
            <p className="meta-line">{education.location}</p>
            <ul className="bullet-list">
              {education.details.map(detail => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </ShellCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <ShellCard
            header={
              <div className="card-kicker">
                <span>Certifications</span>
              </div>
            }
          >
            <h3>NVIDIA and language credentials</h3>
            <div className="tag-row">
              {certifications.map(certification => (
                <span className="tag" key={certification}>
                  {certification}
                </span>
              ))}
            </div>

            <div className="subsection-label">Languages</div>
            <div className="tag-row">
              {languages.map(language => (
                <span className="tag" key={language}>
                  {language}
                </span>
              ))}
            </div>
          </ShellCard>
        </motion.div>
      </div>
    </section>
  )
}
