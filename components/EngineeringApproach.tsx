'use client';
import { Activity, ShieldCheck, Zap, Users } from 'lucide-react';

const approaches = [
  { icon: <Activity className="text-blue-400"/>, title: "Scalable Systems", desc: "Designing architectures that gracefully handle 10x traffic spikes without rewriting the core business logic." },
  { icon: <Zap className="text-yellow-400"/>, title: "Performance First", desc: "Profiling memory leaks, optimizing battery usage on Android, and reducing DB query latency on the backend." },
  { icon: <ShieldCheck className="text-green-400"/>, title: "System Reliability", desc: "Implementing robust error boundaries, graceful degradation, and comprehensive logging for rapid production debugging." },
  { icon: <Users className="text-purple-400"/>, title: "Team Collaboration", desc: "Bridging the gap between Mobile and Backend teams. Mentoring juniors and setting engineering standards." }
];

export default function EngineeringApproach() {
  return (
    <section id="approach" className="relative pb-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Engineering Approach</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Beyond writing code, I focus on system health, team velocity, and delivering resilient products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {approaches.map((app, i) => (
          <div key={i} className="flex gap-4 p-6 glass-panel rounded-xl border border-surfaceBorder hover:border-primary/50 transition-colors">
            <div className="p-3 bg-surface rounded-lg h-fit">{app.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{app.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}