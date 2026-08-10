import { notFound } from 'next/navigation';
import { featuredProjects, getFeaturedProjectBySlug } from '@/components/portfolio-data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getFeaturedProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Dedy Wijaya`,
    description: project.headline,
    openGraph: {
      title: `${project.title} — Dedy Wijaya`,
      description: project.headline,
      type: 'article',
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = getFeaturedProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="pt-24 pb-24">
      <div className="site-wrap">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">
            {project.category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-text-primary">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-6">
            {project.headline}
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-xs text-text-muted">
            <span className="border border-border-default px-3 py-1.5 rounded">{project.role}</span>
            <span className="border border-border-default px-3 py-1.5 rounded">{project.period}</span>
            <span className="border border-border-default px-3 py-1.5 rounded">{project.platform}</span>
          </div>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16 p-6 border border-border-subtle rounded-2xl bg-base-800/30">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-2xl sm:text-3xl font-bold text-text-primary">{metric.value}</div>
              <div className="text-sm text-text-muted mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Left — Narrative */}
          <div className="space-y-8">
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Context</h2>
              <p className="text-text-secondary leading-relaxed">{project.summary}</p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Responsibilities</h2>
              <div className="space-y-3">
                {project.responsibilities.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Challenges</h2>
              <div className="space-y-3">
                {project.challenges.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Decisions</h2>
              <div className="space-y-3">
                {project.decisions.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right — Evidence */}
          <div className="space-y-6">
            <section className="border border-border-subtle rounded-xl p-6 bg-base-800/30">
              <h2 className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Impact</h2>
              <div className="space-y-3">
                {project.impact.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-text-secondary">
                    <span className="text-brand-400 mt-0.5">&#8594;</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {project.evidencePanels.map((panel) => (
              <section
                key={panel.title}
                className="border border-border-subtle rounded-xl p-6 bg-base-800/30"
              >
                <h3 className="text-sm font-medium text-text-primary mb-2">{panel.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{panel.body}</p>
              </section>
            ))}

            <section className="border border-border-subtle rounded-xl p-6 bg-base-800/30">
              <h2 className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-3">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="border border-border-default rounded-md px-3 py-1.5 text-xs text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex gap-3">
              <a
                href={project.contactHref}
                className="inline-flex items-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-medium text-white rounded-lg hover:bg-brand-600 transition-colors duration-200"
              >
                Discuss this project <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-border-subtle">
          <div className="grid grid-cols-2 gap-4">
            {featuredProjects.findIndex((p) => p.slug === project.slug) > 0 && (
              <Link
                href={`/case-studies/${featuredProjects[featuredProjects.findIndex((p) => p.slug === project.slug) - 1].slug}`}
                className="border border-border-subtle rounded-xl p-4 hover:border-brand-500/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  <ArrowLeft size={10} /> Previous
                </div>
                <div className="mt-1 text-sm font-medium text-text-primary">
                  {featuredProjects[featuredProjects.findIndex((p) => p.slug === project.slug) - 1].title}
                </div>
              </Link>
            )}
            {featuredProjects.findIndex((p) => p.slug === project.slug) < featuredProjects.length - 1 && (
              <Link
                href={`/case-studies/${featuredProjects[featuredProjects.findIndex((p) => p.slug === project.slug) + 1].slug}`}
                className="border border-border-subtle rounded-xl p-4 text-right hover:border-brand-500/30 transition-colors duration-200"
              >
                <div className="flex items-center justify-end gap-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Next <ArrowUpRight size={10} />
                </div>
                <div className="mt-1 text-sm font-medium text-text-primary">
                  {featuredProjects[featuredProjects.findIndex((p) => p.slug === project.slug) + 1].title}
                </div>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
