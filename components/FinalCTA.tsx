export default function FinalCTA() {
  return (
    <section className="py-24 border-t border-border-subtle relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="relative site-wrap">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Next step</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-text-primary">
            Need an engineer who can turn complex delivery into a calmer system?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10">
            If the work matches what you need built or stabilized, let&apos;s have a conversation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-500 px-6 py-3 text-sm font-medium text-white rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-glow-emerald"
            >
              Let&apos;s talk
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-border-default px-6 py-3 text-sm font-medium text-text-primary rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              Review case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
