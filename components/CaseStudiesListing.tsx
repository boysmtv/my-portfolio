'use client';

import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from './portfolio-data';

export default function CaseStudiesListing() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="flex items-start gap-6 mb-16">
          <span className="section-num">02</span>
          <div className="pt-2">
            <p className="section-label mb-2">Case Studies</p>
            <h2 className="font-mono text-big text-fg">
              Detailed breakdowns of production-grade engineering work.
            </h2>
          </div>
        </div>

        <div className="space-y-0 border-t border-border">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="group flex items-start gap-8 py-8 border-b border-border hover:bg-bg-surface transition-colors duration-300 px-4 -mx-4"
            >
              <span className="font-mono text-4xl font-extrabold text-border group-hover:text-accent transition-colors duration-500 w-16 flex-shrink-0">
                0{index + 1}
              </span>
              <div className="flex-1 space-y-2">
                <div className="section-label">{project.category}</div>
                <h3 className="font-mono text-xl font-bold text-fg group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="max-w-2xl text-sm text-fg-secondary">{project.summary}</p>
              </div>
              <ArrowUpRight size={16} className="text-fg-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-2 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
