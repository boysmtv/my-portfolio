'use client';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const orgs = [
  { role: "Bendahara", name: "Komisi Pemilihan Umum Mahasiswa" },
  { role: "Anggota Komisi C", name: "Badan Legislatif Mahasiswa Universitas" },
  { role: "Network Administrator", name: "Laboratorium Fakultas Ilmu Komputer" },
  { role: "Anggota", name: "Pergerakan Mahasiswa Islam Indonesia" },
];

export default function Organizations() {
  return (
    <section id="organizations" className="relative py-24 border-t border-surfaceBorder">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
          <Users className="text-purple-500" />
        </div>
        <h2 className="text-3xl font-bold">Leadership & Organizations</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orgs.map((org, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={i}
            className="glass-panel p-8 rounded-3xl border border-surfaceBorder"
          >
            <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">{org.role}</div>
            <h3 className="text-lg font-bold text-white leading-snug">{org.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
