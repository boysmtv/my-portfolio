# AGENTS.md — Portfolio Redesign Session

## 📋 Current Session State

**Project**: my-portfolio (Dedy Wijaya Portfolio)
**Status**: Implementation Complete ✅
**Last Updated**: August 10, 2026
**Phase**: All Phases DONE + Data Accuracy + UI Polish

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
| Data Accuracy | ✅ DONE | All data verified vs CV/Resume |
| UI Polish | ✅ DONE | Gradient backgrounds, glows, vibrant colors |

---

## 📁 Key Files

### Core
- `app/layout.tsx` — Root layout + JSON-LD
- `app/page.tsx` — Main page (all sections)
- `app/globals.css` — Tailwind + tokens + components + gradient effects
- `tailwind.config.ts` — CSS variable references, max-width 80rem

### Design Tokens
- `styles/tokens.css` — All CSS variables (colors, spacing, typography, motion)
- `styles/base.css` — Base styles

### Components (Rewritten)
- `components/Hero.tsx` — 2-column, GSAP entry, gradient text, photo, glows
- `components/Navbar.tsx` — Scroll progress, mobile menu
- `components/Projects.tsx` — Flagship + supporting grid, all clickable
- `components/CaseStudy.tsx` — Editorial layout
- `components/ProjectModal.tsx` — Focus trap, gradient effects
- `components/SupportingProjectModal.tsx` — NEW modal for supporting projects
- `components/Experience.tsx` — Timeline with connector
- `components/Architecture.tsx` — Interactive nodes + merged approach
- `components/TechStack.tsx` — Visual capability matrix (8 categories, 50+ skills)
- `components/Background.tsx` — Tab accordion
- `components/FinalCTA.tsx` — Emerald brand
- `components/ContactSection.tsx` — Copy email, gradient cards (Email=emerald, LinkedIn=blue, Location=gold)
- `components/Footer.tsx` — Gradient text, divider
- `components/portfolio-data.ts` — Verified data (education, career, certs, orgs)

### Public Assets
- `public/photo-dedy.jpg` — Professional photo (optimized 43KB)

### Case Studies
- `app/case-studies/[slug]/page.tsx` — SSG detail pages for 3 featured projects

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
| Colors | Navy #070B14 + Emerald #10B981 + Blue #3B82F6 + Gold #F59E0B | Brand identity with accent colors |
| Typography | Inter + JetBrains Mono | Professional + technical |
| Motion | GSAP + ScrollTrigger | Cinematic scroll |
| State | Local (useState) | Simple, no global needed |
| CSS | CSS Variables + Tailwind | Zero runtime cost |
| Layout | site-wrap (80rem max) | Centered, responsive |
| Effects | Gradient backgrounds, glows, gradient text | Vibrant, modern look |

---

## ✅ Data Accuracy (Verified vs CV/Resume)

### Personal Info
- Name: Dedy Wijaya
- Phone: 08158844424
- Email: boys.mtv@gmail.com
- LinkedIn: linkedin.com/in/dedy-wijaya-421698196
- GitHub: github.com/boysmtv
- Website: dsrv-developer.my.id
- Location: Bekasi, Indonesia

### Education
- Bachelor of Computer Science, Universitas Negeri Singaperbangsa Karawang (2019, GPA 3.49/4.00)

### Career (5 positions)
1. Nov 2023 — Present: Senior Android Developer @ PT Ikonsultan Inovatama (Project: Bank Maybank Indonesia)
2. Nov 2022 — Oct 2023: Senior Android Developer @ PT Jasa Teknologi Informasi / IBM (Project: Bank Mandiri)
3. Mar 2022 — Oct 2022: Senior Fullstack Android Developer @ PT Pintar Inovasi Digital (Asetku)
4. Mar 2021 — Feb 2022: Technical Lead Developer @ PT Aplikanusa Lintasarta
5. Sep 2019 — May 2021: Fullstack Android Developer @ PT Pasifik Cipta Solusi

### Certifications (12)
Kubernetes & Docker, Scrum & Agile, SOLID Principles, Advanced Kotlin, Spring Boot, Android Bootcamp (Udemy), Kotlin Android (Udemy), Java Masterclass (Udemy), Flutter, REST API Spring Boot, Microservices, Secure Coding

### Organizations (3)
1. Komisi Pemilihan Umum Mahasiswa — Bendahara (Jan 2018 — Jan 2019)
2. Badan Legislatif Mahasiswa Universitas — Anggota Komisi C (Jan 2017 — Jan 2018)
3. Laboratorium Fakultas Ilmu Komputer — Network Administrator (Jul 2017 — May 2019)

### TechStack (8 categories, 50+ skills)
- Android: Kotlin, Java, Android SDK, Jetpack Compose, MVVM, Clean Architecture, Coroutines, Flow/StateFlow, Room, Hilt/Dagger, OkHttp/Retrofit, Firebase
- Backend: Spring Boot, REST API, Microservices, Hibernate/JPA, PostgreSQL, MySQL, ISO8583, JPOS
- Architecture: System Design, Distributed Systems, Scalable Systems, Microservices
- DevOps: Docker, Kubernetes, CI/CD, Cloud Infrastructure, Virtual Machine, Networking
- Tools: Git, GitHub, GitLab, Bitbucket, Jira, Agile/Scrum
- Security: Vulnerability Assessment, Penetration Testing, Secure Coding
- Domain: Fintech, Mobile Banking, Payment Systems, ISO8583, E-KYC
- Leadership: Technical Leadership, Team Management, Mentoring, Code Review

---

## ⚠️ Notes for Next Session

### Completed
- ✅ Professional portrait photo (optimized JPG, 43KB)
- ✅ Case studies detail pages (`/case-studies/[slug]`) — 3 SSG pages
- ✅ Design system component updates (14 components updated)
- ✅ All data verified against CV/Resume
- ✅ All projects clickable with modals
- ✅ Gradient backgrounds, glows, vibrant color system
- ✅ TechStack updated with all CV skills
- ✅ Location fixed to Bekasi

### Build Status
```
npm run build → ✅ Passes (153kB first load, 96kB SSG)
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
  "lucide-react": "0.383.0",
  "sharp": "latest"
}
```
