'use client';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '6+', icon: <Zap className="text-yellow-400" /> },
  { label: 'Payment Protocols', value: 'ISO8583', icon: <Shield className="text-green-400" /> },
  { label: 'Projects Delivered', value: '20+', icon: <Globe className="text-blue-400" /> },
  { label: 'Domain', value: 'Fintech', icon: <Cpu className="text-purple-400" /> },
];

export default function Summary() {
  return (
    <section id="summary" className="relative py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Professional <span className="text-primary">Summary</span></h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Seasoned engineer with extensive experience in building and scaling financial systems. 
              Strong background in mobile and backend architecture, team leadership, and production-grade payment solutions.
            </p>
            <p>
              I specialize in <span className="text-white font-medium">high-performance Android applications</span> and 
              <span className="text-white font-medium"> robust backend architectures</span>, particularly 
              <span className="text-accent font-medium"> ISO8583 & JPOS</span> payment systems. 
              Skilled in Kotlin, Java, Spring Boot, Docker, Kubernetes, and Agile practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-surface rounded-xl border border-surfaceBorder">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-video glass-panel rounded-2xl overflow-hidden p-8 flex flex-col justify-center">
            <div className="font-mono text-sm space-y-4">
              <div className="flex gap-2"><span className="text-primary">const</span> <span className="text-accent">engineer</span> = &#123;</div>
              <div className="pl-6"><span className="text-gray-400">name:</span> <span className="text-yellow-400">&apos;Dedy Wijaya&apos;</span>,</div>
              <div className="pl-6"><span className="text-gray-400">role:</span> <span className="text-yellow-400">&apos;Technical Lead&apos;</span>,</div>
              <div className="pl-6"><span className="text-gray-400">expertise:</span> [<span className="text-yellow-400">&apos;Fintech&apos;</span>, <span className="text-yellow-400">&apos;Android&apos;</span>, <span className="text-yellow-400">&apos;Backend&apos;</span>],</div>
              <div className="pl-6"><span className="text-gray-400">mission:</span> <span className="text-yellow-400">&apos;Build Resilient Payment Ecosystems&apos;</span></div>
              <div className="flex gap-2">&#125;;</div>
              <div className="mt-8 pt-8 border-t border-surfaceBorder">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-surfaceBorder flex items-center justify-center text-xs text-gray-400">DW</div>
                  <div>
                    <div className="text-white font-bold">Dedy Wijaya</div>
                    <div className="text-xs text-gray-500">Available for Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
