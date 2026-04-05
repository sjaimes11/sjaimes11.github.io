import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { SiteIcon } from '../components/SiteIcon'
import type { PortfolioContent } from '../data/portfolio'

type ProjectsSectionProps = {
  content: PortfolioContent
}

const ALL_PROJECTS = '__all_projects__'

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const { projectsSection, projects } = content
  const [activeGroup, setActiveGroup] = useState(ALL_PROJECTS)
  const [activeIndex, setActiveIndex] = useState(0)

  const groups = useMemo(
    () => [
      { id: ALL_PROJECTS, label: projectsSection.allLabel },
      ...Array.from(new Set(projects.map(project => project.group))).map(group => ({
        id: group,
        label: group,
      })),
    ],
    [projects, projectsSection.allLabel],
  )

  const filteredProjects = useMemo(() => {
    if (activeGroup === ALL_PROJECTS) {
      return projects
    }

    return projects.filter(project => project.group === activeGroup)
  }, [activeGroup, projects])

  useEffect(() => {
    setActiveIndex(0)
  }, [activeGroup])

  const currentProject = filteredProjects[activeIndex] ?? filteredProjects[0]

  if (!currentProject) {
    return null
  }

  const handlePrev = () => {
    setActiveIndex(current =>
      current === 0 ? filteredProjects.length - 1 : current - 1,
    )
  }

  const handleNext = () => {
    setActiveIndex(current => (current + 1) % filteredProjects.length)
  }

  return (
    <section className="section" id="projects">
      <SectionTitle
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
        icon="projects"
      />

      <div className="projects-carousel">
        <div className="projects-filter-row" role="tablist" aria-label={projectsSection.eyebrow}>
          {groups.map(group => (
            <button
              key={group.id}
              className={`projects-filter-chip ${
                activeGroup === group.id ? 'is-active' : ''
              }`}
              type="button"
              onClick={() => setActiveGroup(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="project-feature-shell">
          <AnimatePresence mode="wait">
            <motion.article
              key={`${activeGroup}-${currentProject.title}`}
              className={`project-feature-card project-feature-card--${currentProject.tone}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28 }}
            >
              <div className="project-feature-card__visual">
                <div className="project-feature-card__grid" />
                <div className="project-feature-card__visual-top">
                  <span className="project-feature-card__badge">
                    {currentProject.category}
                  </span>
                  <span className="project-feature-card__count">
                    {activeIndex + 1} / {filteredProjects.length}
                  </span>
                </div>

                <div className="project-feature-card__icon">
                  <SiteIcon name={currentProject.visual} />
                </div>

                <div className="project-feature-card__visual-copy">
                  <span>{projectsSection.featuredLabel}</span>
                  <h3>{currentProject.title}</h3>
                  <p>{currentProject.group}</p>
                </div>
              </div>

              <div className="project-feature-card__body">
                <div className="project-feature-card__body-header">
                  <div>
                    <span className="meta-line">{currentProject.year}</span>
                    <h3>{currentProject.title}</h3>
                  </div>
                  <span className="project-feature-card__group">
                    {currentProject.group}
                  </span>
                </div>

                <p className="project-feature-card__description">
                  {currentProject.description}
                </p>

                <ul className="bullet-list">
                  {currentProject.outcomes.map(outcome => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {currentProject.stack.map(item => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-feature-card__footer">
                  {currentProject.href ? (
                    <a
                      className="inline-link"
                      href={currentProject.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {currentProject.linkLabel ?? projectsSection.openProjectLabel}
                    </a>
                  ) : (
                    <span className="project-feature-card__placeholder" />
                  )}

                  <div className="project-feature-card__controls">
                    <button
                      className="carousel-button carousel-button--icon"
                      type="button"
                      onClick={handlePrev}
                      aria-label={projectsSection.prevLabel}
                    >
                      ‹
                    </button>
                    <div className="carousel-dots" aria-hidden="true">
                      {filteredProjects.map(project => (
                        <span
                          className={`carousel-dot ${
                            project.title === currentProject.title ? 'is-active' : ''
                          }`}
                          key={project.title}
                        />
                      ))}
                    </div>
                    <button
                      className="carousel-button carousel-button--icon"
                      type="button"
                      onClick={handleNext}
                      aria-label={projectsSection.nextLabel}
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
