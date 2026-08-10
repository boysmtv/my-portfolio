# AGENTS.md — Portfolio Redesign Session

## 📋 Current Session State

**Project**: my-portfolio (Dedy Wijaya Portfolio)
**Status**: Implementation Complete ✅
**Last Updated**: August 10, 2026
**Phase**: Phase 1-11 ✅ DONE

---

## 🎯 Project Vision

> "An Android Engineer portfolio disguised as an interactive product experience"

---

## 📊 Progress Summary

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 0: Planning | ✅ DONE | Master plan created |
| Phase 1: Foundation | ✅ DONE | Dependencies installed, folder structure created |
| Phase 2: Design System | ✅ DONE | CSS tokens, Tailwind config updated |
| Phase 3: Hero | ✅ DONE | 2-column layout, GSAP staggered entry |
| Phase 4: Navbar | ✅ DONE | Scroll progress, mobile menu |
| Phase 5: Projects | ✅ DONE | Flagship hierarchy, modal |
| Phase 6: Experience | ✅ DONE | Timeline, Architecture nodes |
| Phase 7: Capabilities | ✅ DONE | Visual matrix, Background accordion |
| Phase 8: FinalCTA | ✅ DONE | Emerald brand color |
| Phase 9: Motion | ✅ DONE | GSAP, reduced motion |
| Phase 10: Accessibility | ✅ DONE | JSON-LD, ARIA |
| Phase 11: Polish | ✅ DONE | Build passes, lint clean |

---

## 📁 Key Files

### Core
- `app/layout.tsx` — Root layout + JSON-LD
- `app/page.tsx` — Main page (all sections)
- `app/globals.css` — Tailwind + tokens + components
- `tailwind.config.ts` — CSS variable references

### Design Tokens
- `styles/tokens.css` — All CSS variables (colors, spacing, typography, motion)
- `styles/base.css` — Base styles

### Components (Rewritten)
- `components/Hero.tsx` — 2-column, GSAP entry
- `components/Navbar.tsx` — Scroll progress, mobile menu
- `components/Projects.tsx` — Flagship + supporting grid
- `components/CaseStudy.tsx` — Editorial layout
- `components/ProjectModal.tsx` — Focus trap, new colors
- `components/Experience.tsx` — Timeline with connector
- `components/Architecture.tsx` — Interactive nodes + merged approach
- `components/TechStack.tsx` — Visual capability matrix
- `components/Background.tsx` — Tab accordion (NEW)
- `components/FinalCTA.tsx` — Emerald brand
- `components/ContactSection.tsx` — Copy email, hover effects
- `components/Footer.tsx` — Refined
- `components/portfolio-data.ts` — Data (unchanged)

### Deleted Components
- `Summary.tsx` — Merged into Hero
- `TrustSignals.tsx` — Merged into Hero
- `Achievements.tsx` — Merged into Background
- `Certifications.tsx` — Merged into Background
- `Education.tsx` — Merged into Background
- `Organizations.tsx` — Removed
- `EngineeringApproach.tsx` — Merged into Architecture

---

## 🎨 Design Decisions

| Decision | Value | Rationale |
|----------|-------|-----------|
| Colors | Navy #070B14 + Emerald #10B981 + Gold #F59E0B | Brand identity |
| Typography | Inter + JetBrains Mono | Professional + technical |
| Motion | GSAP + ScrollTrigger | Cinematic scroll |
| State | Local (useState) | Simple, no global needed |
| CSS | CSS Variables + Tailwind | Zero runtime cost |

---

## ⚠️ Notes for Next Session

### Still Pending
- Professional portrait photo (placeholder currently)
- Case studies detail pages (`/case-studies/[slug]`)
- Design system component updates (currently unused)
- Framer Motion fully removed (was in package.json)
- `next.config.mjs` image domains update

### Build Status
```
npm run build → ✅ Passes
npm run lint → ✅ No warnings
```

---

## 🔧 Tech Stack

```json
{
  "next": "14.2.35",
  "react": "18.3.1",
  "gsap": "3.15.0",
  "@gsap/react": "2.1.2",
  "lenis": "1.3.26",
  "three": "0.185.1",
  "@react-three/fiber": "8.15.12",
  "@react-three/drei": "9.92.7",
  "zustand": "5.0.14",
  "lucide-react": "0.383.0"
}
```
