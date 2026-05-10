'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, FolderKanban, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import ProjectModal from './ProjectModal';
import { featuredProjects, supportingProjects, type FeaturedProject } from './portfolio-data';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <section id="projects" className="space-y-10 py-12">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Featured work</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Selected systems where the job was to deliver trust, not just screens.
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            These are the projects that best represent how I think: clear boundaries, product-aware engineering,
            production support awareness, and solutions designed to survive real operational pressure.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-slate-300 lg:max-w-sm">
          <div className="mb-2 flex items-center gap-2 font-semibold text-white">
            <Sparkles size={16} className="text-sky-300" />
            Portfolio principle
          </div>
          Featured case studies carry most of the visual weight. Supporting projects stay compact so the page reads
          like a curated profile, not a directory.
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111b] p-7 transition hover:-translate-y-1 hover:border-sky-400/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">{project.category}</span>
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="max-w-2xl text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                      <p className="text-sm uppercase tracking-[0.22em] text-sky-200/80">{project.ownership}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full border border-white/10 bg-black/25 p-3 text-slate-300 transition hover:border-sky-300/40 hover:text-white"
                      aria-label={`Open quick view for ${project.title}`}
                    >
                      <ArrowUpRight className="transition group-hover:text-white" />
                    </button>
                  </div>
                  <p className="max-w-3xl text-lg leading-8 text-slate-200/90">{project.headline}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                      <div className="text-xl font-bold text-white">{metric.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-400">Platform and role</div>
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-white">{project.platform}</p>
                      <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-400">Evidence snapshot</div>
                    <div className="space-y-3">
                      {project.evidencePanels.slice(0, 2).map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <div className="text-sm font-semibold text-white">{item.title}</div>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.taxonomy.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={`/case-studies/${project.slug}`} className="primary-button">
                    Open full case study
                    <ArrowUpRight size={18} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="secondary-button"
                  >
                    Quick view
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-panel h-fit"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky-200">
              <FolderKanban size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Supporting projects</h3>
              <p className="text-sm text-slate-400">Compact signals of breadth without stealing focus.</p>
            </div>
          </div>

          <div className="space-y-3">
            {supportingProjects.map((project) => (
              <div key={project.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span>{project.category}</span>
                  <span className="text-slate-600">•</span>
                  <span>{project.role}</span>
                </div>
                <div className="text-lg font-semibold text-white">{project.title}</div>
                <p className="mt-2 text-sm font-medium text-sky-100">{project.outcome}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{project.note}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.taxonomy.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      <AnimatePresence>
        {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}
