import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type EducationSectionProps = {
  content: PortfolioContent
}

export function EducationSection({ content }: EducationSectionProps) {
  const { educationSection, education } = content

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
        <ShellCard>
          <div className="education-list">
            {education.map(item => (
              <article className="education-entry" key={`${item.degree}-${item.period}`}>
                <div className="education-entry__header">
                  <img
                    className="education-entry__logo"
                    src={item.iconPath}
                    alt={item.iconAlt}
                  />
                  <div>
                    <h3>{item.institution}</h3>
                    <p className="meta-line">{item.degree}</p>
                  </div>
                </div>
                <p className="meta-line">{item.period}</p>
                <p className="meta-line">{item.location}</p>
                <p className="meta-line">{item.gpa}</p>
                <ul className="bullet-list">
                  {item.details.map(detail => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ShellCard>
      </motion.div>
    </section>
  )
}
