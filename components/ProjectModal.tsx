'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { featuredProjects, type FeaturedProject } from './portfolio-data';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: FeaturedProject;
  onClose: () => void;
}) {
  const index = featuredProjects.findIndex((item) => item.slug === project.slug);
  const prev = index > 0 ? featuredProjects[index - 1] : null;
  const next = index >= 0 && index < featuredProjects.length - 1 ? featuredProjects[index + 1] : null;
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-modal flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="absolute inset-0 bg-base-900/95 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-border-subtle rounded-2xl bg-base-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 border border-border-default p-2 text-text-primary hover:border-brand-500 hover:text-brand-400 transition-colors duration-200 rounded-lg"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="border-b border-border-subtle px-8 py-10">
          <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">{project.category}</div>
          <h2 className="text-3xl font-bold text-text-primary">{project.title}</h2>
          <p className="mt-3 max-w-3xl text-text-secondary">{project.headline}</p>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] text-text-muted">
            <span className="border border-border-default px-2 py-1 rounded">{project.role}</span>
            <span className="border border-border-default px-2 py-1 rounded">{project.period}</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 px-8 py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-2">Context</div>
              <p className="text-sm text-text-secondary">{project.summary}</p>
            </div>
            <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">Responsibilities</div>
              <div className="space-y-2">
                {project.responsibilities.map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">Decisions</div>
              <div className="space-y-2 text-sm text-text-secondary">
                {project.decisions.map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">Impact</div>
              <div className="space-y-2">
                {project.impact.map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="border border-border-default rounded px-2.5 py-1 font-mono text-xs text-text-secondary">{item}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/case-studies/${project.slug}`}
                className="inline-flex items-center gap-2 bg-brand-500 px-5 py-2.5 font-mono text-sm font-bold text-white hover:bg-brand-600 transition-colors duration-200 rounded-lg"
              >
                Full case study <ArrowUpRight size={14} />
              </Link>
              <a
                href={project.contactHref}
                className="inline-flex items-center gap-2 border border-border-default px-5 py-2.5 font-mono text-sm text-text-primary hover:border-text-primary transition-colors duration-200 rounded-lg"
              >
                Discuss
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {prev ? (
                <Link href={`/case-studies/${prev.slug}`} className="border border-border-subtle rounded-lg p-3 hover:border-brand-500/30 transition-colors duration-200">
                  <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"><ArrowLeft size={10} /> Previous</div>
                  <div className="mt-1 text-sm font-medium text-text-primary">{prev.title}</div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/case-studies/${next.slug}`} className="border border-border-subtle rounded-lg p-3 text-right hover:border-brand-500/30 transition-colors duration-200">
                  <div className="flex items-center justify-end gap-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">Next <ArrowRight size={10} /></div>
                  <div className="mt-1 text-sm font-medium text-text-primary">{next.title}</div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
