'use client';

import { featuredProjects } from './portfolio-data';

const p = featuredProjects[0];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-base-800/30 border-t border-border-subtle">
      <div className="site-wrap">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Case Study</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-text-primary">
          One project, deep dive
        </h2>

        <div className="grid gap-12 xl:grid-cols-[1fr_1.3fr]">
          {/* Left — Narrative */}
          <div className="space-y-8">
            <div>
              <div className="text-sm text-brand-400 font-medium mb-2">{p.category}</div>
              <h3 className="text-2xl font-bold text-text-primary">{p.title}</h3>
              <p className="text-sm text-text-secondary mt-2">{p.ownership}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Problem', body: 'Legacy banking transaction flows needed low-latency processing, safer recovery, and debuggable structure during incidents.' },
                { label: 'Approach', body: 'Modular transaction boundaries, stable message handling, and support-aware architecture for diagnosable runtime issues.' },
                { label: 'Tradeoff', body: 'Velocity is not enough. The stronger choice improves operability, not just feature speed.' },
                { label: 'Impact', body: 'Fewer runtime surprises, stronger reuse, and a delivery posture that respects transaction risk.' },
              ].map((item) => (
                <div key={item.label} className="border border-border-subtle rounded-lg p-5 bg-base-900/50">
                  <div className="text-xs text-brand-400 font-medium mb-2">{item.label}</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Evidence */}
          <div className="space-y-6">
            <div className="border border-border-subtle rounded-lg p-6 bg-base-900/50">
              <div className="text-sm font-medium text-text-primary mb-3">What this shows</div>
              <div className="space-y-3">
                {p.impact.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-text-secondary">
                    <span className="text-brand-400 mt-0.5">&#8594;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border-subtle rounded-lg p-6 bg-base-900/50">
              <div className="text-sm font-medium text-text-primary mb-3">Key decisions</div>
              <div className="space-y-2">
                {p.decisions.map((item) => (
                  <div key={item} className="text-sm text-text-secondary">{item}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {p.stack.map((tech) => (
                <span key={tech} className="border border-border-default rounded-md px-3 py-1.5 text-xs text-text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
