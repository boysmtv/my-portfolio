import Link from 'next/link';

import { siteSummary } from './portfolio-data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.26em] text-sky-300">Dedy Wijaya</p>
          <h2 className="text-2xl font-black text-white">Technical Lead · Android · Backend · Payments</h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Portfolio focused on engineering credibility, project clarity, and systems that remain dependable after
            release.
          </p>
        </div>
        <div className="space-y-2 text-sm leading-7 text-slate-400 lg:text-right">
          <Link href="/contact" className="block text-slate-200 transition hover:text-white">
            Jump to contact
          </Link>
          <a href={`mailto:${siteSummary.contactEmail}`} className="block transition hover:text-white">
            {siteSummary.contactEmail}
          </a>
          <a href={`tel:${siteSummary.phone}`} className="block transition hover:text-white">
            {siteSummary.phone}
          </a>
          <p className="pt-3 text-xs uppercase tracking-[0.22em] text-slate-500">© {new Date().getFullYear()} Dedy Wijaya</p>
        </div>
      </div>
    </footer>
  );
}
