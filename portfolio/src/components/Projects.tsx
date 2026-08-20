import { CONFIG } from '../data/config'
import Reveal from './Reveal'
import type { Project } from '../types'

interface ProjectsProps {
  onSelect: (project: Project) => void
}

export default function Projects({ onSelect }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-surface2/40">
      <div className="max-w-6xl mx-auto">
        <Reveal as="p" className="tag text-secondary mb-2">
          // 02 — projects
        </Reveal>
        <Reveal as="div" className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Things I've built (and broken, and fixed)
          </h2>
          <p className="text-muted max-w-md">
            A few projects from coursework and late-night side quests. More get added as I finish them —
            check back often.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.projects.map((project) => (
            <Reveal key={project.title} as="article" className="project-card rounded-2xl border border-border bg-surface p-5 flex flex-col">
              <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${project.accent} grid place-items-center text-4xl mb-4 select-none`}>
                {project.emoji}
              </div>
              <h3 className="font-display font-semibold text-lg">{project.title}</h3>
              <p className="text-muted text-sm mt-1 flex-1">{project.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tag px-2 py-1 rounded-md bg-surface2 border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="mt-5 text-sm font-semibold text-primary flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
