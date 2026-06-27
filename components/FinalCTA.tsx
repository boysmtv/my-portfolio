import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-[#0a1a12] p-8 text-white sm:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-400/5 blur-3xl" />

      <div className="relative grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">Next step</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Need an engineer who can turn complex delivery into a calmer, more dependable system?
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-white/75">
            This portfolio is designed to show execution quality, system thinking, and production discipline. If the
            work matches the kind of payments, Android, backend, or operationally sensitive system you need built or
            stabilized, the next step should be obvious.
          </p>
        </div>
        <div className="space-y-4 rounded-[1.5rem] border border-emerald-400/15 bg-emerald-400/5 p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">Best fit</div>
          <ul className="space-y-2 text-sm leading-7 text-white/80">
            <li>Technical lead or senior engineer roles with delivery ownership.</li>
            <li>Fintech, payments, enterprise mobile, backend integration, or operations-heavy products.</li>
            <li>Teams that need architecture clarity and calmer production behavior, not just feature velocity.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="rounded-full bg-[linear-gradient(135deg,#34d399,#38bdf8)] px-6 py-3 text-sm font-bold text-[#021019] shadow-[0_20px_44px_rgba(52,211,153,0.26)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(52,211,153,0.3)]"
            >
              Review featured work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Jump to contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
