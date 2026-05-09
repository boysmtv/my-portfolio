'use client';

import { Users } from 'lucide-react';

const roles = [
  'Bendahara · Komisi Pemilihan Umum Mahasiswa',
  'Anggota Komisi C · Badan Legislatif Mahasiswa Universitas',
  'Network Administrator · Laboratorium Fakultas Ilmu Komputer',
  'Anggota · Pergerakan Mahasiswa Islam Indonesia',
];

export default function Organizations() {
  return (
    <section id="organizations" className="space-y-6">
      <div className="space-y-3">
        <p className="section-kicker">Leadership</p>
        <h2 className="text-3xl font-black text-white">Leadership exposure before the professional engineering years.</h2>
      </div>

      <div className="section-panel">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
          <Users size={22} />
        </div>
        <div className="space-y-3">
          {roles.map((role) => (
            <div key={role} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300">
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
