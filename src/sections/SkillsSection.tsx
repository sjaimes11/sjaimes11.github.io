import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type SkillsSectionProps = {
  content: PortfolioContent
}

export function SkillsSection({ content }: SkillsSectionProps) {
  const { skillsSection, skillGroups } = content
  const [activeGroupId, setActiveGroupId] = useState(skillGroups[0]?.id ?? '')

  const activeGroup =
    skillGroups.find(group => group.id === activeGroupId) ?? skillGroups[0]

  const detailCards = useMemo(() => {
    if (!activeGroup) {
      return []
    }

    if (activeGroup.details?.length) {
      return activeGroup.details
    }

    return activeGroup.items.map(item => ({
      name: item,
      summary: activeGroup.summary,
      since: '',
      accent: 'blue' as const,
      icon: item.slice(0, 2).toUpperCase(),
    }))
  }, [activeGroup])

  return (
    <section className="section" id="skills">
      <SectionTitle
        eyebrow={skillsSection.eyebrow}
        title={skillsSection.title}
        description={skillsSection.description}
        icon="skills"
      />

      <div className="skills-showcase">
        <div className="skills-toolbar">
          <div className="skills-filter">
            <span>{skillsSection.filterLabel}</span>
            <div className="skills-filter__chips">
              {skillGroups.map(group => (
                <button
                  key={group.id}
                  className={`skills-filter__chip ${
                    group.id === activeGroup?.id ? 'is-active' : ''
                  }`}
                  type="button"
                  onClick={() => setActiveGroupId(group.id)}
                >
                  {group.title}
                </button>
              ))}
            </div>
          </div>

          <div className="skills-current-group">
            <strong>{activeGroup?.title}</strong>
            <p>{activeGroup?.summary}</p>
          </div>
        </div>

        <div className="skills-card-grid">
          {detailCards.map((skill, index) => (
            <motion.article
              key={`${activeGroup?.id}-${skill.name}`}
              className={`skill-detail-card skill-detail-card--${skill.accent}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div className="skill-detail-card__header">
                <span className="skill-detail-card__icon">{skill.icon}</span>
                <div>
                  <h3>{skill.name}</h3>
                  {skill.since ? <small>{skill.since}</small> : null}
                </div>
              </div>
              <p>{skill.summary}</p>
            </motion.article>
          ))}
        </div>

        <div className="skills-bottom-grid">
          <ShellCard
            header={
              <div className="card-kicker">
                <span>{skillsSection.hardSkillsLabel}</span>
              </div>
            }
          >
            <div className="skill-pill-grid">
              {(content.hardSkills ?? []).map(skill => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </ShellCard>

          <ShellCard
            header={
              <div className="card-kicker">
                <span>{skillsSection.softSkillsLabel}</span>
              </div>
            }
          >
            <div className="skill-pill-grid">
              {(content.softSkills ?? []).map(skill => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </ShellCard>
        </div>

        <div className="language-skills-block">
          <div className="card-kicker">
            <span>{skillsSection.languageSkillsLabel}</span>
          </div>
          <div className="language-skill-grid">
            {(content.languageSkillsDetailed ?? []).map(language => (
              <article className="language-skill-card" key={language.name}>
                <div className="language-skill-card__header">
                  <div>
                    <h3>{language.name}</h3>
                    <small>{language.started}</small>
                  </div>
                  <span className="language-skill-card__badge">{language.badge}</span>
                </div>
                <div className="language-skill-card__level">{language.level}</div>
                <p>{language.note}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
