'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Profile', href: '#summary', id: 'summary' },
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'Case study', href: '#case-study', id: 'case-study' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Architecture', href: '#architecture', id: 'architecture' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -88 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-[120] transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/30 bg-[linear-gradient(145deg,rgba(56,189,248,0.22),rgba(12,20,31,0.92))] text-sm font-black tracking-[0.2em] text-sky-100 shadow-[0_18px_48px_rgba(14,165,233,0.18)]">
            DW
          </div>
          <div className="hidden sm:block">
            <div className="text-sm uppercase tracking-[0.26em] text-slate-400">Dedy Wijaya</div>
            <div className="text-xs text-slate-500">Engineering portfolio</div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? 'bg-white/10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)]'
                    : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="https://github.com/boysmtv" target="_blank" className="nav-icon-link">
            <Github size={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" className="nav-icon-link">
            <Linkedin size={18} />
          </Link>
          <Link href="mailto:boys.mtv@gmail.com" className="secondary-button px-4 py-2 text-sm">
            <Mail size={16} />
            Let&apos;s talk
          </Link>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden" onClick={() => setMobileMenuOpen((value) => !value)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base ${activeSection === link.id ? 'text-white' : 'text-slate-200'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-4">
            <Link href="https://github.com/boysmtv" target="_blank" className="nav-icon-link">
              <Github size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/dedy-wijaya-421698196/" target="_blank" className="nav-icon-link">
              <Linkedin size={18} />
            </Link>
            <Link href="mailto:boys.mtv@gmail.com" className="nav-icon-link">
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
