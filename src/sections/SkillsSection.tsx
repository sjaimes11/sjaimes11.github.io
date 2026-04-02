import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import { portfolioContent } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow="Stack"
        title="Structured to help recruiters understand fit in under a minute"
        description="The content layer lives in a single data file so your real technologies and experience can be updated fast."
      />

      <div className="skills-grid">
        {portfolioContent.skillGroups.map((group, index) => (
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
