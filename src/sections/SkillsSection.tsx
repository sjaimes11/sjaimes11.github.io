import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type SkillsSectionProps = {
  content: PortfolioContent
}

export function SkillsSection({ content }: SkillsSectionProps) {
  const { skillsSection, skillGroups } = content

  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow={skillsSection.eyebrow}
        title={skillsSection.title}
        description={skillsSection.description}
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.06 }}
          >
            <ShellCard>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <div className="tag-row">
                {group.items.map(item => (
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
