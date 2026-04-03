import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import { portfolioContent } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow="Stack"
        title="A stack that already aligns with product and platform teams"
        description="This section now mirrors the technologies and engineering areas that appear across your software and AI-oriented CV versions."
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
