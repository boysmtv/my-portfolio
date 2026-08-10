'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careerSummary } from './portfolio-data';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline items
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true,
            },
            delay: i * 0.1,
          }
        );
      });

      // Animate connector line
      const connector = sectionRef.current?.querySelector('.timeline-connector');
      if (connector) {
        gsap.fromTo(connector,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power3.out',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 border-t border-border-subtle">
      <div className="site-wrap">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-400 mb-4">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-text-primary">
          Career progression
        </h2>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="timeline-connector absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500 via-accent-500 to-transparent" />

          <div className="space-y-0">
            {careerSummary.map((job, i) => (
              <div
                key={i}
                ref={(el) => { itemsRef.current[i] = el; }}
                className="group relative grid gap-6 sm:grid-cols-[200px_1fr] py-8 border-b border-border-subtle last:border-b-0 opacity-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-10 w-[10px] h-[10px] rounded-full bg-base-900 border-2 border-brand-500 group-hover:shadow-glow-emerald transition-shadow duration-300" />

                <div className="text-sm text-text-muted sm:pl-10">{job.period}</div>
                <div>
                  <div className="text-base font-medium text-text-primary mb-1">{job.title}</div>
                  <div className="text-sm text-brand-400 mb-3">{job.company}</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{job.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
