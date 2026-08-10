'use client';

import { useState } from 'react';

const principles = [
  {
    title: 'Modularity',
    desc: 'Every system should be decomposable into independently replaceable parts.',
    color: 'brand',
  },
  {
    title: 'Observability',
    desc: 'If you can\'t see what it\'s doing, you can\'t fix it when it breaks.',
    color: 'accent',
  },
  {
    title: 'Operability',
    desc: 'Design for the person who will debug this at 3 AM, not for the person who builds it.',
    color: 'brand',
  },
  {
    title: 'Incremental',
    desc: 'Replace big risks with small, reversible steps.',
    color: 'accent',
  },
  {
    title: 'Evidence',
    desc: 'Use metrics and data to confirm decisions, not assumptions.',
    color: 'brand',
  },
  {
    title: 'Simplicity',
    desc: 'Complexity is a cost. Every abstraction must earn its place.',
    color: 'accent',
  },
];

const approaches = [
  { title: 'Design for change', desc: 'Structure systems so future product changes cost less, not more.' },
  { title: 'Optimize for runtime calm', desc: 'A system that only works when nothing goes wrong is not finished engineering.' },
  { title: 'Keep performance practical', desc: 'The goal is not abstract speed, but predictable user and operational experience.' },
  { title: 'Reduce team friction', desc: 'Architecture should help teams collaborate, not make each delivery change feel expensive.' },
];

export default function Architecture() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-24 bg-base-800/30 border-t border-border-subtle">
      <div className="site-wrap">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Architecture</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-text-primary">
          Engineering principles
        </h2>

        {/* Interactive node grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {principles.map((item, i) => (
            <div
              key={item.title}
              className={`group relative border rounded-xl p-6 transition-all duration-300 cursor-default ${
                hoveredIndex === i
                  ? 'border-brand-500/40 bg-base-800/80 scale-[1.02]'
                  : hoveredIndex !== null
                  ? 'border-border-subtle opacity-60'
                  : 'border-border-subtle hover:border-brand-500/20'
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-2 h-2 rounded-full ${
                  item.color === 'brand' ? 'bg-brand-500' : 'bg-accent-500'
                }`} />
                <div className="text-sm font-medium text-text-primary">{item.title}</div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* How I Work — merged from EngineeringApproach */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Approach</p>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-text-primary">
            How I like to work when the system actually matters.
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="group border border-border-subtle rounded-xl p-6 hover:border-brand-500/20 transition-all duration-300"
              >
                <h4 className="text-sm font-medium text-text-primary group-hover:text-brand-400 transition-colors duration-200 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
