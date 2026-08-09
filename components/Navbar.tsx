'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { siteSummary } from './portfolio-data';

const navLinks = [
  { name: 'Profile', href: '/profile' },
  { name: 'Work', href: '/projects' },
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Experience', href: '/experience' },
  { name: 'Architecture', href: '/architecture' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? Math.min(latest / docHeight, 1) : 0);
  });

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -88 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-[120] transition-all duration-300 ${
        isScrolled ? 'border-b border-white/[0.06] bg-[#070B14]/75 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-[linear-gradient(145deg,rgba(52,211,153,0.15),rgba(7,11,20,0.92))] text-sm font-black tracking-[0.2em] text-emerald-200 shadow-[0_18px_48px_rgba(52,211,153,0.12)]">
            DW
          </div>
          <div className="hidden sm:block">
            <div className="text-sm uppercase tracking-[0.26em] text-slate-400">Dedy Wijaya</div>
            <div className="text-xs text-slate-500">Engineering portfolio</div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? 'bg-white/[0.08] text-white'
                    : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href={siteSummary.github} target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300" aria-label="GitHub">
            <Github size={18} />
          </Link>
          <Link href={siteSummary.linkedin} target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300" aria-label="LinkedIn">
            <Linkedin size={18} />
          </Link>
          <Link href={`mailto:${siteSummary.contactEmail}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-white">
            <Mail size={16} />
            Let&apos;s talk
          </Link>
        </div>

        <button
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[linear-gradient(90deg,#34d399,#38bdf8)]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-white/10 bg-[#070B14]/95 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={false}
              animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base ${pathname === link.href ? 'text-white' : 'text-slate-200'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
            <Link href={siteSummary.github} target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300" aria-label="GitHub">
              <Github size={18} />
            </Link>
            <Link href={siteSummary.linkedin} target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </Link>
            <Link href={`mailto:${siteSummary.contactEmail}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300" aria-label="Email">
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
