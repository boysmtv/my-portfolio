'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { SupportingProject } from './portfolio-data';

export default function SupportingProjectModal({
  project,
  onClose,
}: {
  project: SupportingProject;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
      aria-label={`${project.title} details`}
    >
      <div className="absolute inset-0 bg-base-900/95 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-border-subtle rounded-2xl bg-base-900">
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
          <p className="mt-3 text-text-secondary">{project.note}</p>
        </div>

        {/* Content */}
        <div className="px-8 py-8 space-y-6">
          <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
            <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-2">Role</div>
            <p className="text-sm text-text-secondary">{project.role}</p>
          </div>

          <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
            <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-2">Outcome</div>
            <p className="text-sm text-text-secondary">{project.outcome}</p>
          </div>

          <div className="border border-border-subtle rounded-lg p-5 bg-base-800/50">
            <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">Taxonomy</div>
            <div className="flex flex-wrap gap-2">
              {project.taxonomy.map((item) => (
                <span key={item} className="border border-border-default rounded px-2.5 py-1 font-mono text-xs text-text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 border border-border-default px-5 py-2.5 font-mono text-sm text-text-primary hover:border-brand-500 hover:text-brand-400 transition-colors duration-200 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
