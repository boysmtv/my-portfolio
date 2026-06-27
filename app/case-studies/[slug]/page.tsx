import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { featuredProjects, getFeaturedProjectBySlug, siteSummary } from "@/components/portfolio-data";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Dedy Wijaya",
    };
  }

  return {
    title: `${project.title} | Case Study | Dedy Wijaya`,
    description: project.headline,
    openGraph: {
      title: `${project.title} | Dedy Wijaya`,
      description: project.headline,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Dedy Wijaya`,
      description: project.headline,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getFeaturedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = featuredProjects.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-14">
      <div className="space-y-10">
        <div className="space-y-6 rounded-[2.2rem] border border-white/10 bg-[#07111b] p-8 shadow-[0_30px_100px_rgba(2,6,23,0.55)] sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
            <Link href="/#projects" className="text-sky-300 transition hover:text-white">
              Featured work
            </Link>
            <span>/</span>
            <span>{project.category}</span>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-300">{project.platform}</p>
            <h1 className="max-w-5xl text-4xl font-black text-white sm:text-6xl">{project.title}</h1>
            <p className="max-w-4xl text-xl leading-9 text-slate-300">{project.headline}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">Ownership</div>
              <p className="text-lg font-semibold text-white">{project.ownership}</p>
              <p className="mt-3 text-base leading-8 text-slate-300">{project.summary}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-2xl font-black text-white">{metric.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <section className="section-panel">
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-500">Responsibilities</div>
              <div className="grid gap-3">
                {project.responsibilities.map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="section-panel">
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-500">Challenges handled</div>
              <div className="grid gap-3">
                {project.challenges.map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="section-panel">
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-500">Engineering decisions</div>
              <div className="space-y-3">
                {project.decisions.map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="section-panel">
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-500">Impact highlights</div>
              <div className="space-y-3">
                {project.impact.map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="section-panel">
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-500">Evidence panels</div>
              <div className="space-y-3">
                {project.evidencePanels.map((item) => (
                  <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                    <div className="text-base font-semibold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-panel">
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-500">Taxonomy</div>
              <div className="flex flex-wrap gap-2">
                {project.taxonomy.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.contactHref} className="primary-button">
                  Discuss this project
                  <ArrowUpRight size={18} />
                </a>
                <a href={`mailto:${siteSummary.contactEmail}?subject=Discuss%20portfolio%20role`} className="secondary-button">
                  Contact directly
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/#projects" className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
              <ArrowLeft size={14} />
              Back to portfolio
            </div>
            <div className="mt-2 text-sm font-semibold text-white">Review all featured projects</div>
          </Link>
          {previousProject ? (
            <Link href={`/case-studies/${previousProject.slug}`} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Previous case study</div>
              <div className="mt-2 text-sm font-semibold text-white">{previousProject.title}</div>
            </Link>
          ) : (
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 text-sm text-slate-500">
              First featured case study
            </div>
          )}
          {nextProject ? (
            <Link href={`/case-studies/${nextProject.slug}`} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-right transition hover:border-white/20">
              <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                Next case study
                <ArrowRight size={14} />
              </div>
              <div className="mt-2 text-sm font-semibold text-white">{nextProject.title}</div>
            </Link>
          ) : (
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 text-right text-sm text-slate-500">
              Last featured case study
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
