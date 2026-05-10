export default function FinalCTA() {
  return (
    <section className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8 text-white backdrop-blur">
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
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
        <div className="space-y-4 rounded-[1.5rem] border border-white/15 bg-black/15 p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">Best fit</div>
          <ul className="space-y-2 text-sm leading-7 text-white/80">
            <li>Technical lead or senior engineer roles with delivery ownership.</li>
            <li>Fintech, payments, enterprise mobile, backend integration, or operations-heavy products.</li>
            <li>Teams that need architecture clarity and calmer production behavior, not just feature velocity.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-100"
            >
              Review featured work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Jump to contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
