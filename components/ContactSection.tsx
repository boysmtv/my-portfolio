import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

import { siteSummary } from './portfolio-data';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: siteSummary.contactEmail,
    href: `mailto:${siteSummary.contactEmail}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteSummary.phone,
    href: `tel:${siteSummary.phone}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: siteSummary.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Review code and repositories',
    href: siteSummary.github,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-8 py-12">
      <div className="space-y-4">
        <p className="section-kicker">Contact</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          If the problem is delivery under pressure, architecture clarity, or production discipline, let&apos;s talk.
        </h2>
        <p className="text-lg leading-8 text-slate-300">
          I am most useful when the system has real runtime constraints, engineering decisions need to be explained
          clearly, and the team needs someone who can stabilize both delivery and operations.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="section-panel space-y-5">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Availability</div>
            <h3 className="text-2xl font-semibold text-white">Open to technical lead and senior engineer conversations.</h3>
            <p className="text-sm leading-7 text-slate-300">
              Best fit: fintech, payment systems, Android delivery, backend integration, enterprise platforms, or
              operations-heavy products where reliability matters as much as features.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-300/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
                      <Icon size={18} />
                    </div>
                    <ArrowUpRight size={18} className="text-slate-500" />
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">{card.label}</div>
                  <div className="mt-2 text-base font-semibold text-white">{card.value}</div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="section-panel space-y-5">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">What to reach out for</div>
            <h3 className="mt-2 text-2xl font-semibold text-white">The strongest collaboration fit is practical, high-trust work.</h3>
          </div>

          <div className="space-y-3">
            {[
              'Stabilizing payment flows, Android platforms, backend integrations, or operationally sensitive systems.',
              'Leading architecture and delivery tradeoffs where uptime, security, and maintainability matter together.',
              'Turning ambiguous requirements into clear technical direction that product, engineering, and operations can all follow.',
            ].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[1.4rem] border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-7 text-white/80">
            Response path: email is the fastest route for role discussions, collaboration, or architecture conversations.
          </div>
        </div>
      </div>
    </section>
  );
}
