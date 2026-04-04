import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { ShellCard } from '../components/ShellCard'
import type { PortfolioContent } from '../data/portfolio'

type ProjectsSectionProps = {
  content: PortfolioContent
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const { projectsSection, projects } = content

  return (
    <section className="section" id="projects">
      <SectionTitle
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <ShellCard
              className="work-card"
              header={
                <div className="work-card__header">
                  <span>{project.category}</span>
                  <strong>{project.year}</strong>
                </div>
              }
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="bullet-list">
                {project.outcomes.map(outcome => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>

              <div className="tag-row">
                {project.stack.map(item => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              {project.href ? (
                <a
                  className="inline-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel ?? projectsSection.openProjectLabel}
                </a>
              ) : null}
            </ShellCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
