export default function TrustSignals() {
  const signals = [
    { label: "Core Domains", value: "Payments, backend systems, Android delivery" },
    { label: "Delivery Style", value: "Production-minded, evidence-driven, maintainable" },
    { label: "Ownership", value: "Architecture, runtime discipline, implementation depth" },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="grid gap-4 md:grid-cols-3">
        {signals.map((signal) => (
          <article key={signal.label} className="space-y-2 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">{signal.label}</p>
            <p className="text-sm leading-6 text-white/90">{signal.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
