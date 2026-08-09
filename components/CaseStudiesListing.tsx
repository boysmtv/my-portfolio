'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { featuredProjects } from './portfolio-data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function CaseStudiesListing() {
  return (
    <section className="space-y-8 py-12">
      <div className="space-y-4">
        <p className="section-kicker">Case studies</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          Detailed breakdowns of production-grade engineering work.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          Each case study covers problem context, architecture decisions, tradeoffs, and operational impact —
          written the way engineers actually evaluate delivery capability.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <Link
              href={`/case-studies/${project.slug}`}
              className="section-panel group block transition hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-emerald-300">
                    {project.category}
                  </span>
                  <ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-emerald-300" />
                </div>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{project.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {project.taxonomy.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
