'use client';
import { motion } from 'framer-motion';
import { Smartphone, Database, Server, ShieldCheck, Activity, Zap } from 'lucide-react';

const layers = [
  { name: "UI Layer", tech: "Jetpack Compose", desc: "Declarative UI with MVI", icon: <Smartphone className="text-blue-400" /> },
  { name: "Presentation", tech: "ViewModel (MVI)", desc: "State Management & Intent", icon: <Activity className="text-purple-400" /> },
  { name: "Domain", tech: "UseCase", desc: "Business Logic & Entities", icon: <ShieldCheck className="text-green-400" /> },
  { name: "Data", tech: "Repository", desc: "Data Orchestration", icon: <Database className="text-orange-400" /> },
  { name: "Source", tech: "DataSource / API", desc: "Remote (ISO8583) & Local", icon: <Server className="text-teal-400" /> }
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-6">Technical <span className="text-primary">Architecture</span></h2>
        <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
          I advocate for Clean Architecture and modularization. By separating concerns into distinct layers, 
          we achieve high testability, maintenance velocity, and scalable codebases.
        </p>
      </div>

      <div className="relative glass-panel rounded-[40px] p-8 md:p-16 border border-surfaceBorder overflow-hidden bg-surface/30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          {layers.map((layer, i) => (
            <motion.div 
              key={layer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-[24px] bg-surface border-2 border-surfaceBorder flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{layer.name}</h3>
              <p className="text-primary text-xs font-mono mb-4">{layer.tech}</p>
              <p className="text-gray-500 text-sm max-w-[150px]">{layer.desc}</p>
              
              {i < layers.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-surfaceBorder translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-surfaceBorder grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="text-green-500" /> System Reliability & SLA
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>ISO8583 Binary Message Handling with JPOS for extreme low latency.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>Circuit Breakers & Retries for redundant connection management.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>Exactly-once processing semantics for financial ledgers.</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="text-yellow-500" /> Incident Response
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>Real-time monitoring & alerting for transaction failure spikes.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>L2/L3 support workflows with rapid debugging protocols.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">▹</span>
                <span>Graceful degradation for non-critical services during load.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
