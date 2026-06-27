'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Target, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { featuredProjects, type FeaturedProject } from './portfolio-data';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: FeaturedProject;
  onClose: () => void;
}) {
  const index = featuredProjects.findIndex((item) => item.slug === project.slug);
  const previousProject = index > 0 ? featuredProjects[index - 1] : null;
  const nextProject = index >= 0 && index < featuredProjects.length - 1 ? featuredProjects[index + 1] : null;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-slate-950/92 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.96, y: 18, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 18, opacity: 0 }}
        className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111b] shadow-[0_35px_120px_rgba(2,6,23,0.85)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/30 p-3 text-white transition hover:bg-white/10"
          aria-label="Close project quick view"
        >
          <X size={20} />
        </button>

        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <div className="relative max-h-[92vh] overflow-y-auto">
          <div className="border-b border-white/10 px-8 py-10 sm:px-12 sm:py-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-sky-200/80">{project.category}</p>
            <h2 id="project-modal-title" className="max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">
              {project.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200/90">{project.headline}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200/80">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{project.role}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{project.period}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{project.platform}</span>
            </div>
          </div>

          <div className="grid gap-8 px-8 py-8 sm:px-12 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <section className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  <BriefcaseBusiness size={16} />
                  Context
                </div>
                <p className="text-base leading-8 text-slate-200">{project.summary}</p>
              </section>

              <section className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Responsibilities</h3>
                  <ul className="space-y-3 text-sm leading-7 text-slate-300">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Challenges</h3>
                  <ul className="space-y-3 text-sm leading-7 text-slate-300">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  <Target size={16} />
                  Engineering decisions
                </div>
                <div className="space-y-4 text-sm leading-7 text-slate-300">
                  {project.decisions.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-400">Evidence panels</div>
                <div className="grid gap-4">
                  {project.evidencePanels.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="text-base font-semibold text-white">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6">
                <h3 className="mb-5 text-lg font-semibold text-white">Impact highlights</h3>
                <div className="space-y-4">
                  {project.impact.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6">
                <h3 className="mb-5 text-lg font-semibold text-white">Signal metrics</h3>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {project.metrics.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="text-xl font-bold text-white">{item.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Project taxonomy</h3>
                <div className="flex flex-wrap gap-2">
                  {project.taxonomy.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <div className="grid gap-3">
                <Link href={`/case-studies/${project.slug}`} className="primary-button w-full justify-center">
                  Open full case study
                  <ArrowUpRight size={18} />
                </Link>
                <a href={project.contactHref} className="secondary-button w-full justify-center">
                  Discuss this project
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {previousProject ? (
                  <Link href={`/case-studies/${previousProject.slug}`} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                      <ArrowLeft size={14} />
                      Previous
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">{previousProject.title}</div>
                  </Link>
                ) : (
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-500">
                    First featured case study
                  </div>
                )}
                {nextProject ? (
                  <Link href={`/case-studies/${nextProject.slug}`} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-right transition hover:border-white/20">
                    <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                      Next
                      <ArrowRight size={14} />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">{nextProject.title}</div>
                  </Link>
                ) : (
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4 text-right text-sm text-slate-500">
                    Last featured case study
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
