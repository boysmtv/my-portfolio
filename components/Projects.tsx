'use client';

import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, supportingProjects } from './portfolio-data';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import SupportingProjectModal from './SupportingProjectModal';
import type { FeaturedProject, SupportingProject } from './portfolio-data';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [selectedSupporting, setSelectedSupporting] = useState<SupportingProject | null>(null);

  return (
    <>
      <section id="work" className="py-24 border-t border-border-subtle">
        <div className="site-wrap">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-text-primary">
            Selected projects
          </h2>

          {/* Flagship project — hero card */}
          <div className="mb-16">
            {featuredProjects.slice(0, 1).map((project) => (
              <article
                key={project.slug}
                className="group relative rounded-2xl p-8 sm:p-10 transition-all duration-500 bg-gradient-to-br from-brand-500/8 via-base-800/50 to-accent-500/5 border border-brand-500/20 hover:border-brand-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                  <div className="space-y-4">
                    <div className="text-sm text-brand-400 font-medium">{project.category}</div>
                    <div className="text-sm text-text-secondary">{project.role}</div>
                    <div className="text-sm text-text-muted">{project.period}</div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="border border-border-default rounded-md px-2.5 py-1 text-xs text-text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{project.headline}</p>

                    <div className="flex gap-8 border-y border-border-subtle py-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-lg font-bold text-text-primary">{metric.value}</div>
                          <div className="text-xs text-text-muted mt-0.5">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm text-brand-400 hover:gap-3 transition-all duration-200"
                    >
                      Read case study <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Supporting projects — 2-column grid */}
          <div className="mb-12">
            <p className="text-sm text-text-muted mb-6">Other featured projects</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.slice(1).map((project) => (
                <button
                  key={project.slug}
                  onClick={() => setSelectedProject(project)}
                  className="group text-left rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-brand-500/5 to-accent-500/3 border border-brand-500/15 hover:border-brand-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
                >
                  <div className="text-xs text-brand-400 font-medium mb-2">{project.category}</div>
                  <div className="text-base font-medium text-text-primary mb-1">{project.title}</div>
                  <p className="text-sm text-text-muted line-clamp-2">{project.headline}</p>
                  <div className="flex items-center gap-1 text-xs text-brand-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowUpRight size={12} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Supporting projects list */}
          <div className="pt-12" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.2), rgba(59,130,246,0.2), transparent) 1' }}>
            <p className="text-sm text-brand-400 mb-6 font-medium">Other projects</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportingProjects.map((project) => (
                <button
                  key={project.title}
                  onClick={() => setSelectedSupporting(project)}
                  className="group text-left rounded-lg p-4 transition-all duration-300 bg-gradient-to-br from-base-800/50 to-brand-500/5 border border-brand-500/10 hover:border-brand-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                  <div className="text-xs text-brand-400 font-medium mb-1">{project.category}</div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-brand-300 transition-colors">{project.title}</div>
                  <p className="text-xs text-text-muted mt-1">{project.outcome}</p>
                  <div className="flex items-center gap-1 text-xs text-brand-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowUpRight size={10} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Supporting Project Modal */}
      {selectedSupporting && (
        <SupportingProjectModal
          project={selectedSupporting}
          onClose={() => setSelectedSupporting(null)}
        />
      )}
    </>
  );
}
