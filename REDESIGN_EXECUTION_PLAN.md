# REDESIGN EXECUTION PLAN

## Principal Engineer's Blueprint

> **Based on**: Technical Audit, Creative Direction Report, Experience Specification
> **Status**: Pre-implementation — Zero code written
> **Strategy**: Incremental Hybrid with visual containment

---

# 1. IMPLEMENTATION STRATEGY

## Selected: Hybrid (Primarily Incremental + Parallel UI)

```
Strategy Components:
├── 70% Incremental Rewrite
│   ├── Setiap section di-refactor satu per satu
│   ├── Design system dibangun bertahap
│   └── Rollback per-section (bukan per-file)
│
├── 20% Parallel UI (for Hero + Case Study)
│   ├── Section baru dibangun di path terpisah (/redesign/)
│   ├── Tidak mengganggu section yang sudah berjalan
│   └── Cutover instant saat siap
│
└── 10% In-place Refactor
    ├── Dead code removal
    ├── Config consolidation
    └── Dependency cleanup
```

## Rationale

| Factor | Decision | Why |
|--------|----------|-----|
| **Risk tolerance** | Incremental | Portfolio mungkin sedang dilirik recruiter. Tidak boleh broken. |
| **Kompleksitas** | Medium | 16 komponen, ~2700 baris. Bukan monolith. Bisa per-section. |
| **Timing** | No deadline | Lebih baik benar daripada cepat. |
| **Reviewability** | Incremental | Setiap PR bisa di-review terpisah. |
| **Rollback** | Incremental | Jika Phase 3 gagal, Phase 1-2 tetap live. |
| **Codebase age** | Mature | Kode sudah stabil. Tidak perlu full rewrite. |

## Prohibited Approaches

| Approach | Why Not |
|----------|---------|
| **Big Bang Rewrite** | Terlalu riskan. Portfolio tidak boleh down. Codebase cuma ~2700 baris — tidak perlu rewrite total. |
| **Feature Flag** | Overkill untuk static portfolio. Tidak ada backend. Feature flag = complexity tanpa benefit. |
| **Full Parallel UI** | Waste of effort. Harus maintain 2 versi lengkap. |

## Branch Strategy

```yaml
main:
  status: production — selalu deployable
  rule: hanya menerima PR yang sudah di-approve dan tested

redesign-v3:
  status: active development
  base: main
  rule: semua perubahan redesign ada di sini
  lifecycle: merge ke main per-phase setelah DoD terpenuhi

phase/*:
  - phase/1-foundation
  - phase/2-design-system
  - phase/3-hero
  - phase/4-navigation
  - phase/5-projects-and-case-study
  - phase/6-experience-and-architecture
  - phase/7-capabilities-and-background
  - phase/8-final-cta-and-contact
  - phase/9-motion-and-interaction
  - phase/10-accessibility-and-seo
  - phase/11-polishing-and-launch
```

## Merge Flow

```
main                                  → production
  └── redesign-v3                     → active development
       ├── phase/1-foundation         → merge ke redesign-v3
       ├── phase/2-design-system      → merge ke redesign-v3
       ├── phase/3-hero               → merge ke redesign-v3
       └── ...                        → merge ke redesign-v3
```

## Visual Containment Strategy

Untuk section yang di-redesign sementara section lain masih old version:

```
Setiap section baru akan memiliki CSS scope atau wrapper class:

<section className="v3-section" data-section="hero">

CSS untuk v3-section tidak akan mempengaruhi section lain 
karena Tailwind JIT hanya generate class yang terpakai.

Jika terjadi style leak:
  .v3-section { isolation: isolate; }  ← CSS containment
```

---

# 2. IMPLEMENTATION PHASES

## Phase 1: Foundation Cleanup
**Goal**: Bersihkan dead code, duplikasi, dan dependency yang tidak terpakai.

| Aspek | Detail |
|-------|--------|
| **Duration** | 1 hari |
| **Dependencies** | None |
| **Parallel** | Yes |

### Files Touched

| Action | File | Change |
|--------|------|--------|
| DELETE | `next.config.js` | Duplikat dari `next.config.mjs`. Tidak dipakai. |
| DELETE | `postcss.config.js` | Duplikat dari `postcss.config.mjs`. Tidak dipakai. |
| DELETE | `styles/placeholder.txt` | Dead file. |
| DELETE | `styles/` folder | Hanya berisi placeholder. |
| MODIFY | `package.json` | Hapus `clsx` dan `tailwind-merge` dari dependencies. |
| MODIFY | `app/sitemap.ts` | Hapus `/#projects` dan `/#contact` dari sitemap (fragment tidak di-crawl). |
| MODIFY | `app/layout.tsx` | Tambah `canonical` URL. Tambah `og:image` placeholder. |
| MODIFY | `components/Hero.tsx` | Hapus import `Download` yang tidak terpakai. |
| MODIFY | `tailwind.config.ts` | Hapus `gradient-x` animation (tidak dipakai). Hapus `hero-glow` (tidak dipakai). |
| MODIFY | `app/globals.css` | Hapus `.glass-panel` class (tidak dipakai). |
| DELETE | `.ai-agent/snapshots/` | Full snapshot duplikat — tidak relevan untuk produksi. |

### Rollback Plan
```
git checkout main -- <file>  ← untuk setiap file yang diubah
npm install                  ← restore dependencies jika perlu
```

### Completion Criteria
- [ ] `npm run build` passes without errors
- [ ] `npm run lint` passes without errors
- [ ] No dead CSS classes in globals.css
- [ ] No unused icons in imports
- [ ] Sitemap only contains valid crawlable URLs
- [ ] `clsx` dan `tailwind-merge` removed from package.json
- [ ] All duplicate config files removed
- [ ] SEO metadata updated (canonical, og:image placeholder)
- [ ] All snapshot files removed from `.ai-agent/`
- [ ] Site looks identical to before (no visual changes)

---

## Phase 2: Design System Foundation
**Goal**: Buat design token system tanpa mengubah komponen satupun.

| Aspek | Detail |
|-------|--------|
| **Duration** | 2 hari |
| **Dependencies** | Phase 1 |
| **Parallel** | No |

### Architecture Decision

```yaml
Method: CSS Custom Properties (CSS Variables) di globals.css
Reason:
  - Zero runtime cost (Native CSS)
  - Tailwind can reference them via tailwind.config.ts
  - Fallback untuk browser lama sudah handle oleh PostCSS
  - Tidak perlu install additional library

Counter-argument:
  - Why not Tailwind config only?
    - Tailwind config hanya runtime/compile-time.
    - CSS variables bisa di-override di media query, container query, atau JS.
    - Untuk dark/light mode di masa depan (nice-to-have).
```

### Files Created

| File | Purpose |
|------|---------|
| `styles/tokens.css` | Design token sebagai CSS custom properties |
| `styles/base.css` | Base styles (body, selection, scrollbar) |

### Files Modified

| File | Change |
|------|--------|
| `app/globals.css` | Import `tokens.css` dan `base.css`. Hapus inline values. |
| `tailwind.config.ts` | Reference CSS variables instead of hardcoded values. |

### Token Structure

```css
/* styles/tokens.css */

:root {
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 9999px;

  /* Colors — Dark theme only */
  --color-base-900: #070B14;
  --color-base-800: #0E1528;
  --color-base-700: #1A2340;
  --color-base-600: #2A3655;
  --color-brand-600: #059669;
  --color-brand-400: #10B981;
  --color-brand-200: #6EE7B7;
  --color-accent-500: #F59E0B;
  --color-accent-400: #FBBF24;
  --color-info-500: #3B82F6;
  --color-info-400: #60A5FA;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;
  --color-border-subtle: rgba(255,255,255,0.06);
  --color-border-default: rgba(255,255,255,0.10);
  --color-border-hover: rgba(255,255,255,0.15);

  /* Shadows */
  --shadow-elevation-1: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.15);
  --shadow-elevation-2: 0 4px 6px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2);
  --shadow-elevation-3: 0 10px 15px rgba(0,0,0,0.35), 0 4px 6px rgba(0,0,0,0.2);
  --shadow-elevation-4: 0 20px 25px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.2);
  --shadow-glow-emerald: 0 0 20px rgba(16,185,129,0.15), 0 0 40px rgba(16,185,129,0.08);
  --shadow-glow-blue: 0 0 20px rgba(59,130,246,0.15), 0 0 40px rgba(59,130,246,0.08);

  /* Typography */
  --font-heading: 'Cabinet Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  --font-size-4xl: 2.5rem;
  --font-size-5xl: 3.25rem;
  --font-size-6xl: 4rem;

  /* Motion */
  --ease-production: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-expressive: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-micro: 150ms;
  --duration-fast: 300ms;
  --duration-normal: 500ms;
  --duration-slow: 800ms;
}
```

### Tailwind Config Bridge

```javascript
// tailwind.config.ts — menggunakan reference ke CSS variables
colors: {
  base: {
    900: 'var(--color-base-900)',
    800: 'var(--color-base-800)',
    // ...
  },
  brand: {
    400: 'var(--color-brand-400)',
    // ...
  },
}
```

### Rollback Plan
```
git checkout main -- styles/tokens.css styles/base.css
git checkout main -- tailwind.config.ts
git checkout main -- app/globals.css
```

### Risk
```
Probability: Low (5%)
Impact: Medium — jika token conflict dengan Tailwind classes
Mitigation: Test dengan npm run build setelah setiap perubahan token
```

### Completion Criteria
- [ ] All CSS variables defined in tokens.css
- [ ] Tailwind config references CSS variables (not hardcoded)
- [ ] `npm run build` passes
- [ ] Site looks identical to before (no visual changes — pure refactor)
- [ ] No hardcoded color values remain in globals.css
- [ ] No hardcoded radius values remain in globals.css
- [ ] No hardcoded shadow values remain in globals.css
- [ ] Font variables defined but not yet applied to components

---

## Phase 3: Hero Redesign
**Goal**: Implementasi ulang Hero section sesuai Experience Specification.

| Aspek | Detail |
|-------|--------|
| **Duration** | 2 hari |
| **Dependencies** | Phase 2 |
| **Parallel** | No |

### Strategy: In-Place Replacement

Hero akan di-refactor di tempat yang sama (`components/Hero.tsx`).
Tidak perlu parallel page karena Hero adalah komponen tunggal.

### Files Modified

| File | Change |
|------|--------|
| `components/Hero.tsx` | Full rewrite — layout, content, motion, trust bar |
| `app/globals.css` | Hapus `.hero-shell`, `.hero-grid`, `.hero-console`, `.metric-card`, `.metric-value`, `.metric-label`, `.signal-card`, `.signal-card__title` |
| `tailwind.config.ts` | Update jika ada warna baru yang dipakai |
| `components/portfolio-data.ts` | Mungkin update `heroMetrics` atau `proofChips` jika konten berubah |

### Files Created

| File | Purpose |
|------|---------|
| `public/images/hero-portrait.webp` | Professional photo (external — harus di-shoot) |
| `public/images/hero-portrait-fallback.jpg` | JPEG fallback |

### Files Unchanged

| File | Reason |
|------|--------|
| `app/page.tsx` | Hero import tetap sama — hanya nama komponen yang sama |
| `app/layout.tsx` | No change needed |

### New Hero Structure

```tsx
components/Hero.tsx:
  - Layout: 2 column (50/50)
  - Left: badge → headline → subheadline → CTA → trust bar
  - Right: photo frame with ambient glow
  - Background: base navy + noise texture + flow diagram SVG
  - Motion: staggered entry (5 steps, ~1.8s total)
  - No section-panel class — Hero has its own styling
```

### Dependency
```
None — Hero sudah standalone. Tidak ada komponen lain yang depend ke Hero.
```

### Migration Risk
```
Probability: Low (15%)
Risk: Hero baru secara visual berbeda total — harus di-review oleh stakeholder sebelum merge.
Mitigation: Build di redesign-v3 branch. Preview dengan npm run dev. Jangan merge sampai approved.
Rollback: git checkout main -- components/Hero.tsx
```

### Testing
- [ ] Visual: compare old vs new Hero (screenshot)
- [ ] Motion: semua entry animation berjalan di 60fps
- [ ] Responsive: Hero di mobile, tablet, desktop
- [ ] Accessibility: keyboard navigation Hero
- [ ] Performance: Lighthouse LCP < 2s

### Completion Criteria
- [ ] Photo appears correctly with fallback
- [ ] Headline readable at all breakpoints
- [ ] CTA buttons functional (scroll to #case-study)
- [ ] Trust bar metrics visible with count-up animation
- [ ] No console errors
- [ ] Build passes
- [ ] Old hero CSS classes removed from globals.css
- [ ] All `section-panel` references in Hero replaced with custom styling

---

## Phase 4: Navigation Redesign
**Goal**: Implementasi ulang Navbar dengan scroll progress + refined mobile menu.

| Aspek | Detail |
|-------|--------|
| **Duration** | 1 hari |
| **Dependencies** | Phase 2 |
| **Parallel** | Yes (can run parallel with Phase 3) |

### Files Modified

| File | Change |
|------|--------|
| `components/Navbar.tsx` | Full rewrite — add scroll progress, refined links, better animation |
| `app/globals.css` | Update `.nav-icon-link` jika perlu |

### New Navbar Structure

```tsx
components/Navbar.tsx:
  - Left: DW logo (tetap, refined hover)
  - Center: nav links with scroll-spy (tetap)
  - Right: social icons + "Let's talk" button
  - Bottom edge: scroll progress bar (emerald → blue gradient)
  - Mobile: hamburger with rotation animation, staggered menu items
  - Backdrop: blur 24px, bg rgba(7,11,20,0.75)
```

### Migration Risk
```
Probability: Low (10%)
Risk: Scroll progress bar mungkin overlap dengan konten.
Mitigation: Progress bar height 2px, di bottom edge navbar.
```

### Completion Criteria
- [ ] Navbar functional on scroll (transparent → blur)
- [ ] Scroll progress bar visible and accurate
- [ ] Active section highlighting works
- [ ] Mobile menu opens/closes with animation
- [ ] All links functional
- [ ] No console errors
- [ ] Keyboard accessible (tab through links)

---

## Phase 5: Projects & Case Study Redesign
**Goal**: Implementasi ulang Projects section dengan flagship/supporting hierarchy + Case Study redesign.

| Aspek | Detail |
|-------|--------|
| **Duration** | 3 hari |
| **Dependencies** | Phase 2 |
| **Parallel** | No (sequential — Projects → CaseStudy) |

### Files Modified

| File | Change |
|------|--------|
| `components/Projects.tsx` | Full rewrite — flagship as hero card, supporting as compact grid |
| `components/CaseStudy.tsx` | Full rewrite — editorial layout, deeper narrative |
| `components/ProjectModal.tsx` | Refine — motion, navigation, layout |
| `app/globals.css` | Hapus/simplify section-panel references di project |

### New Projects Architecture

```tsx
components/Projects.tsx:
  - Flagship project (BRI):
    - Full width hero card
    - Layout: screenshot/diagram left, content right
    - Evidence panels compact
    - "Read full case study" CTA prominent
  - Supporting projects (Lintasarta + Asetku):
    - 2-column grid
    - Compact cards with key metrics
    - Click → open modal (existing)
  - Supporting projects list (the 6 smaller ones):
    - Compact list/tags at bottom

components/CaseStudy.tsx:
  - Editorial layout (wider, readable)
  - Problem/Approach/Tradeoff/Impact as visual cards
  - Evidence panels with better typography
  - Link to full case study page
```

### Migration Risk
```
Probability: Medium (25%)
Risk: Projects section adalah yang paling complex — layout berubah signifikan.
Mitigation: Build di branch, preview, A/B screenshot comparison.
Rollback: git checkout main -- components/Projects.tsx components/CaseStudy.tsx
```

### Completion Criteria
- [ ] Flagship project visually dominant over supporting
- [ ] Modal opens with smooth animation
- [ ] Prev/next navigation in modal works
- [ ] Case study layout readable on all screens
- [ ] All project data intact (no content loss)
- [ ] Build passes

---

## Phase 6: Experience & Architecture Redesign
**Goal**: Implementasi ulang Experience (timeline) + Architecture (interactive diagram).

| Aspek | Detail |
|-------|--------|
| **Duration** | 2 hari |
| **Dependencies** | Phase 2 |
| **Parallel** | Yes (Experience & Architecture bisa parallel) |

### Files Modified

| File | Change |
|------|--------|
| `components/Experience.tsx` | Full rewrite — visual timeline with connector, stagger animation |
| `components/Architecture.tsx` | Full rewrite — interactive node diagram (atau enhanced cards) |
| `components/EngineeringApproach.tsx` | Merge konten ke Architecture section |
| `app/globals.css` | Tambah timeline-specific styles jika perlu |

### New Experience Architecture

```tsx
components/Experience.tsx:
  - Layout: vertical timeline with visual connector line
  - Each item: dot → company name → role → period → summary → signal tags
  - Animation: connector line animates on scroll, items stagger
  - Hover: dot glow, card subtle lift

components/Architecture.tsx:
  - Layout: 4 principles as visual nodes in diamond/flow layout
  - Connection lines between nodes
  - Hover: node scale, connected lines highlight
  - Click (optional): expand node detail
  - EngineeringApproach content merged as "How I Work" subsection
```

### Migration Risk
```
Probability: Medium (20%)
Risk: Interactive diagram mungkin membutuhkan state management.
Mitigation: Gunakan state lokal (useState) di komponen — tidak perlu global state.
```

### Completion Criteria
- [ ] Timeline connector line animates on scroll
- [ ] Architecture principles displayed as visual nodes
- [ ] EngineeringApproach content merged (no separate component)
- [ ] All experience data intact
- [ ] Responsive: timeline collapses to vertical on mobile
- [ ] Build passes

---

## Phase 7: Capabilities & Background Redesign
**Goal**: Transform TechStack (text tags) menjadi Capabilities (visual matrix). Compress Achievements/Certifications/Education/Organizations jadi satu Background section.

| Aspek | Detail |
|-------|--------|
| **Duration** | 2 hari |
| **Dependencies** | Phase 2 |
| **Parallel** | Yes (Capabilities & Background parallel) |

### Files Modified

| File | Change |
|------|--------|
| `components/TechStack.tsx` | Full rewrite — dari text tags ke visual capability matrix |
| `components/Achievements.tsx` | Hapus file — konten di-merge ke Background |
| `components/Certifications.tsx` | Hapus file — konten di-merge ke Background |
| `components/Education.tsx` | Hapus file — konten di-merge ke Background |
| `components/Organizations.tsx` | Hapus file — konten dihapus (tidak relevan) |

### Files Created

| File | Purpose |
|------|---------|
| `components/Background.tsx` | New — compressed accordion section untuk credentials |

### New Capabilities Architecture

```tsx
components/TechStack.tsx:
  - Layout: 3-column grid (Android / Backend / Runtime)
  - Each category: icon + title + technology chips with icons
  - Visual: cards with hover effect
  - Alternative: interactive filter — click category → show related projects

components/Background.tsx:
  - Layout: single section, accordion/tabs
  - Tab 1: Education (Universitas Singaperbangsa, GPA, focus areas)
  - Tab 2: Certifications (filtered — hanya yang relevan untuk senior)
  - Tab 3: Achievements (filtered — hapus yang terlalu junior)
  - Organization dihapus total
```

### Migration Risk
```
Probability: Medium (20%)
Risk: Content loss. Pastikan konten yang dihapus sudah di-backup.
Mitigation: Jangan hapus data dari portfolio-data.ts — hanya hapus komponen.
```

### Completion Criteria
- [ ] TechStack now uses icons + visual cards (not text tags)
- [ ] Background section shows all credentials in compressed format
- [ ] Achievements.tsx, Certifications.tsx, Education.tsx, Organizations.tsx deleted
- [ ] Background.tsx created and functional
- [ ] No data loss from portfolio-data.ts
- [ ] Build passes

---

## Phase 8: FinalCTA & Contact Redesign
**Goal**: Implementasi ulang FinalCTA dengan brand color dominance + Contact Section refinement.

| Aspek | Detail |
|-------|--------|
| **Duration** | 1 hari |
| **Dependencies** | Phase 2 |
| **Parallel** | No |

### Files Modified

| File | Change |
|------|--------|
| `components/FinalCTA.tsx` | Full rewrite — emerald background, stronger copy, clearer CTA |
| `components/ContactSection.tsx` | Refine — layout bisa tetap, refine visual details |

### New FinalCTA Architecture

```tsx
components/FinalCTA.tsx:
  - Layout: full-width, emerald-toned background
  - Headline: "Need an engineer who can turn complex delivery into a calmer system?"
  - Subtext: specific fit criteria
  - CTA: "Let's talk" (primary) + "Review case studies" (secondary)
  - Visual background: subtle emerald glow + noise

components/ContactSection.tsx:
  - Layout: 2-column (tetap atau refined)
  - Left: availability + fit description
  - Right: contact cards with hover effects
  - Email: tetap mailto, tambah copy-to-clipboard
  - Phone: tetap
  - LinkedIn, GitHub: external links
```

### Completion Criteria
- [ ] FinalCTA has brand color treatment (emerald)
- [ ] CTA buttons functional
- [ ] Contact form or mailto works
- [ ] No console errors
- [ ] Responsive layout

---

## Phase 9: Motion & Interaction Implementation
**Goal**: Implementasi motion system, micro-interactions, dan scroll choreography.

| Aspek | Detail |
|-------|--------|
| **Duration** | 3 hari |
| **Dependencies** | Phase 3-8 (semua section harus sudah diimplementasi) |
| **Parallel** | No |

### Files Modified

| File | Change |
|------|--------|
| `components/Hero.tsx` | Tambah/refine entry motion, stagger timing |
| `components/Projects.tsx` | Tambah hover effects, card entry stagger |
| `components/Experience.tsx` | Tambah timeline connector animation, stagger |
| `components/Architecture.tsx` | Tambah diagram node animation |
| `components/Navbar.tsx` | Scroll progress indicator |
| `components/ProjectModal.tsx` | Refine open/close transition |
| `app/globals.css` | Tambah `@media (prefers-reduced-motion)` rules |

### No New Files (unless specifik)

### Motion Implementation Order

1. **Motion tokens** — Sudah di CSS variables. Pastikan dipakai.
2. **Entry animations** — Setiap section: clip-reveal atau fade-slide-up
3. **Hover interactions** — Button, card, link, tag
4. **Click feedback** — Button shrink/bounce
5. **Scroll progress** — Navbar indicator
6. **Page transition** — Jika implementasi routing memungkinkan
7. **Background ambient** — Flow diagram lines movement

### Reduced Motion

```css
/* app/globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Migration Risk
```
Probability: High (30%)
Risk: Performance degradation dari terlalu banyak animasi.
Mitigation: Gunakan framer-motion's `will-change` secara selektif. Test di device low-end.
```

### Completion Criteria
- [ ] All entry animations run at 60fps
- [ ] Hover effects on all interactive elements
- [ ] Click feedback on all buttons
- [ ] Scroll progress bar functional
- [ ] Reduced motion respected
- [ ] Lighthouse Performance > 90
- [ ] No animation jank

---

## Phase 10: Accessibility & SEO Enhancement
**Goal**: Bring accessibility to 95+ Lighthouse score. Complete SEO metadata.

| Aspek | Detail |
|-------|--------|
| **Duration** | 2 hari |
| **Dependencies** | Phase 2-9 (semua section sudah final) |
| **Parallel** | No |

### Files Modified

| File | Change |
|------|--------|
| `app/layout.tsx` | Tambah JSON-LD structured data (Person + WebSite) |
| `app/robots.ts` | Tambah sitemap link |
| `app/sitemap.ts` | Fix fragment issue, add proper URLs |
| `components/Navbar.tsx` | Tambah aria-labels, aria-expanded untuk mobile menu |
| `components/Hero.tsx` | Tambah skip link, aria-labels |
| `components/ProjectModal.tsx` | Tambah aria-labels, keyboard trap, focus management |
| `components/ContactSection.tsx` | Tambah aria-labels |
| All buttons | Tambah focus states |

### Accessibility Checklist

| Item | Detail |
|------|--------|
| Skip to content | Link pertama di body, visible on focus |
| Focus management | Modal opens → focus ke modal. Modal closes → focus kembali ke trigger |
| Keyboard trap | Di dalam modal, Tab tidak boleh keluar |
| ARIA labels | Semua icon-only buttons |
| aria-expanded | Mobile menu toggle |
| aria-current | Nav active link |
| aria-live | Dynamic content |
| Color contrast | Text ≥ 4.5:1 contrast ratio |
| Focus indicators | 2px solid emerald outline, offset 2px |
| Heading hierarchy | h1 → h2 → h3 (no skipping) |
| Alt text | Semua images |
| Semantic HTML | section, nav, main, article, footer |

### SEO Checklist

| Item | Detail |
|------|--------|
| JSON-LD (Person) | name, url, jobTitle, sameAs[], knowsAbout[] |
| JSON-LD (WebSite) | name, url, description |
| og:title | Halaman spesifik |
| og:description | Halaman spesifik |
| og:image | 1200×630px — design di Phase 11 |
| og:url | Canonical URL |
| twitter:card | summary_large_image |
| twitter:image | Sama dengan og:image |
| canonical | Setiap halaman |
| sitemap | XML valid |
| robots.txt | Allow all, sitemap link |
| meta description | Unique per page |

### Completion Criteria
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse SEO = 100
- [ ] JSON-LD implemented and valid (Google Rich Results Test)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all elements
- [ ] No heading hierarchy issues
- [ ] All images have alt text
- [ ] og:image renders correctly in social preview

---

## Phase 11: Polishing & Launch
**Goal**: Final quality pass, visual asset optimization, and deployment.

| Aspek | Detail |
|-------|--------|
| **Duration** | 3 hari |
| **Dependencies** | Phase 1-10 |
| **Parallel** | Limited |

### Files Modified

| File | Change |
|------|--------|
| `app/globals.css` | Final cleanup — remove any remaining unused classes |
| `tailwind.config.ts` | Final cleanup |
| `next.config.mjs` | Tambah image domains untuk assets |

### Visual Assets Integration

| Asset | Status |
|-------|--------|
| Professional portrait | External — photographer |
| Flow diagram SVG | Create inline or as file |
| Architecture diagram SVG | Create inline or as file |
| Technology icons | Download/create 18 icons |
| Noise texture SVG | Create inline |
| og:image | Design in Figma/similar |

### Final Verification

```
□ npm run build — Zero errors
□ npm run lint — Zero warnings
□ Lighthouse Performance ≥ 95
□ Lighthouse Accessibility ≥ 95
□ Lighthouse Best Practices ≥ 95
□ Lighthouse SEO = 100
□ All sections render correctly
□ All animations smooth (60fps)
□ All links functional
□ All images loaded
□ No console errors
□ Mobile responsive (320px - 1920px)
□ Tablet responsive
□ Desktop responsive
□ Dark theme (only theme) consistent
□ Reduced motion respected
□ Keyboard navigable
□ Screen reader tested
```

### Completion Criteria
- [ ] All phases complete
- [ ] All DoD items checked
- [ ] Final team review done
- [ ] Stakeholder approval received
- [ ] Deployed to production
- [ ] Post-deployment monitoring for 48 hours

---

# 3. FILE IMPACT ANALYSIS

## Complete File Inventory

```
my-portfolio/
├── .ai-agent/
│   └── snapshots/v1/final/       ← DELETE (duplikat snapshot)
│
├── .dockerignore                  ← UNCHANGED
├── .gitignore                     ← UNCHANGED
├── Dockerfile                     ← UNCHANGED
├── docker-compose.yml             ← UNCHANGED
├── sync.sh                        ← UNCHANGED
├── README.md                      ← UNCHANGED
├── next-env.d.ts                  ← UNCHANGED
├── package-lock.json              ← UNCHANGED
├── tsconfig.json                  ← UNCHANGED
├── brief.md                       ← UNCHANGED (archival)
├── brief.v2.md                    ← UNCHANGED (archival)
│
├── next.config.js                 ← DELETE (duplikat)
├── postcss.config.js              ← DELETE (duplikat)
│
├── next.config.mjs                ← MODIFY (tambah image domains)
├── postcss.config.mjs             ← UNCHANGED
├── tailwind.config.ts             ← MODIFY (Phase 2, 3)
│
├── package.json                   ← MODIFY (Phase 1 — hapus deps)
│
├── styles/
│   └── placeholder.txt            ← DELETE
│
├── app/
│   ├── globals.css                ← MODIFY (Phase 1, 2, 3, 9, 10)
│   ├── layout.tsx                 ← MODIFY (Phase 1, 10)
│   ├── page.tsx                   ← MODIFY (Phase 7 — hapus imports)
│   ├── robots.ts                  ← MODIFY (Phase 10)
│   ├── sitemap.ts                 ← MODIFY (Phase 1)
│   └── case-studies/[slug]/
│       └── page.tsx               ← MODIFY (Phase 10 — SEO)
│
├── components/
│   ├── portfolio-data.ts          ← MODIFY (maybe — content updates)
│   │
│   ├── Hero.tsx                   ← MODIFY (Phase 3 — full rewrite)
│   ├── Navbar.tsx                 ← MODIFY (Phase 4 — full rewrite)
│   ├── Projects.tsx               ← MODIFY (Phase 5 — full rewrite)
│   ├── CaseStudy.tsx              ← MODIFY (Phase 5 — full rewrite)
│   ├── ProjectModal.tsx           ← MODIFY (Phase 5, 9 — refine)
│   ├── Experience.tsx             ← MODIFY (Phase 6 — full rewrite)
│   ├── Architecture.tsx           ← MODIFY (Phase 6 — full rewrite)
│   ├── TechStack.tsx              ← MODIFY (Phase 7 — full rewrite)
│   ├── FinalCTA.tsx               ← MODIFY (Phase 8 — full rewrite)
│   ├── ContactSection.tsx         ← MODIFY (Phase 8 — refine)
│   ├── Footer.tsx                 ← REFINE (Phase 8 — minor)
│   ├── TrustSignals.tsx           ← MAYBE DELETE (di-merge ke Hero)
│   ├── Summary.tsx                ← MAYBE DELETE (di-merge ke Hero)
│   │
│   ├── Achievements.tsx           ← DELETE (di-merge ke Background)
│   ├── Certifications.tsx         ← DELETE (di-merge ke Background)
│   ├── Education.tsx              ← DELETE (di-merge ke Background)
│   ├── Organizations.tsx          ← DELETE (content dihapus)
│   └── EngineeringApproach.tsx    ← DELETE (di-merge ke Architecture)
│
├── styles/
│   ├── tokens.css                 ← CREATE (Phase 2)
│   ├── base.css                   ← CREATE (Phase 2)
│   └── background.tsx             ← CREATE (Phase 7)
│
└── public/
    ├── images/
    │   ├── hero-portrait.webp     ← CREATE (Phase 3)
    │   ├── hero-portrait.jpg      ← CREATE (Phase 3)
    │   ├── project-bri.webp       ← CREATE (Phase 5)
    │   ├── project-lintasarta.webp← CREATE (Phase 5)
    │   └── project-asetku.webp    ← CREATE (Phase 5)
    │
    └── textures/
        └── noise.svg              ← CREATE (Phase 2)
```

### Summary

| Action | Count | Files |
|--------|-------|-------|
| **MODIFY** | 17 | `next.config.mjs`, `tailwind.config.ts`, `package.json`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/case-studies/[slug]/page.tsx`, `components/Hero.tsx`, `components/Navbar.tsx`, `components/Projects.tsx`, `components/CaseStudy.tsx`, `components/ProjectModal.tsx`, `components/Experience.tsx`, `components/Architecture.tsx`, `components/TechStack.tsx`, `components/FinalCTA.tsx`, `components/ContactSection.tsx`, `components/Footer.tsx`, `components/portfolio-data.ts` |
| **DELETE** | 11 | `next.config.js`, `postcss.config.js`, `styles/placeholder.txt`, `styles/` folder (empty), `.ai-agent/snapshots/`, `components/Achievements.tsx`, `components/Certifications.tsx`, `components/Education.tsx`, `components/Organizations.tsx`, `components/EngineeringApproach.tsx`, `components/TrustSignals.tsx` (maybe), `components/Summary.tsx` (maybe) |
| **CREATE** | 8+ | `styles/tokens.css`, `styles/base.css`, `components/Background.tsx`, `public/images/hero-portrait.webp`, `public/images/hero-portrait.jpg`, `public/images/project-bri.webp`, `public/images/project-lintasarta.webp`, `public/images/project-asetku.webp`, `public/textures/noise.svg` |
| **UNCHANGED** | 12 | `.dockerignore`, `.gitignore`, `Dockerfile`, `docker-compose.yml`, `sync.sh`, `README.md`, `next-env.d.ts`, `package-lock.json`, `tsconfig.json`, `brief.md`, `brief.v2.md`, `postcss.config.mjs` |

---

# 4. COMPONENT MIGRATION PLAN

## Current → Future Mapping

| # | Current Component | Future Component | Strategy | Risk |
|---|-------------------|------------------|----------|------|
| 1 | `Hero.tsx` | `Hero.tsx` | In-place rewrite | Low — standalone |
| 2 | `Navbar.tsx` | `Navbar.tsx` | In-place rewrite | Low — standalone |
| 3 | `TrustSignals.tsx` | *merged into Hero* | Delete after Hero done | Low |
| 4 | `Summary.tsx` | *merged into Hero* | Delete after Hero done | Low |
| 5 | `Projects.tsx` | `Projects.tsx` | In-place rewrite | Medium — complex |
| 6 | `CaseStudy.tsx` | `CaseStudy.tsx` | In-place rewrite | Medium — complex |
| 7 | `ProjectModal.tsx` | `ProjectModal.tsx` | Refine (motion, a11y) | Low |
| 8 | `Experience.tsx` | `Experience.tsx` | In-place rewrite | Low-Medium |
| 9 | `Architecture.tsx` | `Architecture.tsx` | In-place rewrite + merge EngineeringApproach | Low |
| 10 | `EngineeringApproach.tsx` | *merged into Architecture* | Delete after Architecture done | Low |
| 11 | `TechStack.tsx` | `TechStack.tsx` | In-place rewrite (to Capabilities) | Low |
| 12 | `Achievements.tsx` | *merged into Background* | Delete after Background created | Low |
| 13 | `Certifications.tsx` | *merged into Background* | Delete after Background created | Low |
| 14 | `Education.tsx` | *merged into Background* | Delete after Background created | Low |
| 15 | `Organizations.tsx` | *deleted* | Delete. Content not carried. | Low |
| 16 | `FinalCTA.tsx` | `FinalCTA.tsx` | In-place rewrite | Low |
| 17 | `ContactSection.tsx` | `ContactSection.tsx` | In-place refine | Low |
| 18 | `Footer.tsx` | `Footer.tsx` | Minor refine | Low |
| 19 | *new* | `Background.tsx` | Create new component | Low |
| 20 | `page.tsx` | `page.tsx` | Hapus imports untuk deleted components | Low |

## Component Dependency Graph (After Migration)

```
app/layout.tsx
├── components/Navbar.tsx       (client)
└── components/Footer.tsx       (server)

app/page.tsx
├── components/Hero.tsx         (client)        ← merged TrustSignals + Summary
├── components/Projects.tsx     (client)        ← flagship + supporting
│   └── components/ProjectModal.tsx (client)
├── components/CaseStudy.tsx    (client)
├── components/Experience.tsx   (client)        ← timeline
├── components/Architecture.tsx (client)        ← merged EngineeringApproach
├── components/TechStack.tsx    (client)        ← renamed: Capabilities
├── components/Background.tsx   (client)        ← NEW: accordion
├── components/FinalCTA.tsx     (server)
└── components/ContactSection.tsx (server)

app/case-studies/[slug]/page.tsx (server)       ← SSG
└── components/portfolio-data.ts                ← data shared
```

## Component Migration Order

```
Phase 3: Hero.tsx (standalone — no dependency)
Phase 4: Navbar.tsx (standalone — no dependency)
Phase 5: Projects.tsx → CaseStudy.tsx → ProjectModal.tsx
Phase 6: Experience.tsx → Architecture.tsx
Phase 7: TechStack.tsx → Background.tsx (new) → DELETE old sections
Phase 8: FinalCTA.tsx → ContactSection.tsx → Footer.tsx
```

---

# 5. RISK REGISTER

## 50+ Risks Identified

### Foundation Risks (Phase 1-2)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 1 | Duplicate config file deletion breaks build | Low (5%) | Critical | Test `npm run build` after each delete | `git checkout main -- <file>` |
| 2 | CSS variable name conflicts with Tailwind | Low (10%) | Medium | Test with `npm run build` — Tailwind will error | Revert globals.css + tailwind.config.ts |
| 3 | Old browsers don't support CSS custom properties | Low (5%) | Low | Autoprefixer + PostCSS handles fallbacks | N/A — still works, just no custom properties |
| 4 | Removing `clsx`/`tailwind-merge` breaks a component we missed | Low (5%) | Medium | Grep seluruh codebase untuk import | `npm install clsx tailwind-merge` |
| 5 | Deleting `.ai-agent/snapshots` breaks AI Agent | Medium (20%) | Low | Snapshots are AI agent internal — not runtime | `git checkout` |
| 6 | Sitemap change causes SEO dip | Low (5%) | Low | Old sitemap with fragments wasn't indexed anyway | Revert sitemap.ts |

### Design System Risks (Phase 2)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 7 | CSS variable not applied consistently | Medium (20%) | Medium | Code review — cek semua reference | Revert globals.css |
| 8 | Font files (Cabinet Grotesk) not loading | Medium (20%) | High | Test after adding. Fallback ke Inter. | Remove font-face, back to Inter |
| 9 | @font-face causes CLS | Medium (20%) | Medium | Gunakan `font-display: swap` | Adjust font-display value |
| 10 | Tailwind v3 incompatibility with new token structure | Low (5%) | Medium | Test build. Most tokens backward compatible. | Revert tailwind.config.ts |
| 11 | Noise SVG causes performance hit | Low (10%) | Low | SVG noise is 1KB — negligible | Remove noise reference |

### Hero Risks (Phase 3)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 12 | Photo not loading | Low (5%) | Medium | JPEG fallback + alt text + blur placeholder | Fallback to gradient placeholder |
| 13 | Photo quality poor (lighting, expression) | Medium (30%) | High | Professional photographer. Multiple takes. Review before use. | Use gradient/abstract placeholder until reshoot |
| 14 | Entry animation too slow (>2s) | Medium (20%) | Medium | Time each animation step. Optimize to <1.8s total. | Shorten stagger delays |
| 15 | Count-up animation janky | Low (10%) | Low | Use `useSpring` from framer-motion or CSS counter | Remove animation, show static numbers |
| 16 | Trust bar text overflow on mobile | Medium (20%) | Medium | Test at 320px width. Adjust grid to 2 columns. | Switch to vertical layout |
| 17 | New Hero layout breaks existing scroll behavior | Low (5%) | Medium | Test #projects, #case-study anchor links | Fix scroll offset |
| 18 | Hero gradient/glow looks different on OLED vs LCD | Medium (20%) | Low | Test on both. Adjust opacity. | N/A — aesthetic preference |

### Navigation Risks (Phase 4)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 19 | Scroll progress bar inaccurate | Medium (20%) | Low | Calculate berdasarkan scroll position relative to document | Remove progress bar |
| 20 | Mobile menu not accessible | Medium (20%) | High | Test with keyboard. aria-expanded, aria-controls. | Revert Navbar.tsx |
| 21 | Nav scroll-spy fails on new section IDs | Medium (20%) | Medium | Verify all section ID references in navLinks | Fix ID mapping |

### Projects & Case Study Risks (Phase 5)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 22 | Flagship project layout too complex for mobile | High (30%) | Medium | Test at all breakpoints. Stack vertically on mobile. | Adjust breakpoint |
| 23 | Modal prev/next navigation breaks | Low (10%) | Medium | Test all 3 featured projects. Edge cases (first, last). | Revert ProjectModal.tsx |
| 24 | Evidence panel content too text-heavy | Medium (20%) | Low | Already text. Keep but typography improvement. | N/A — content decision |
| 25 | Project screenshot assets not ready | Medium (30%) | High | Placeholder gradients until screenshots ready. | Launch with placeholders |
| 26 | Case study layout shifts on load | Low (10%) | Medium | Set explicit dimensions for all elements | Adjust CSS |

### Experience & Architecture Risks (Phase 6)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 27 | Timeline connector animation not smooth | Medium (20%) | Low | Gunakan framer-motion `useScroll` + `useTransform` | Remove connector, simple fade |
| 28 | Architecture interactive diagram requires complex state | Medium (25%) | Medium | Keep it simple: hover-only interaction, no click expand | Revert to static cards |
| 29 | Merging EngineeringApproach loses content | Low (5%) | Medium | Copy paste carefully. Review after merge. | Restore EngineeringApproach.tsx |

### Capabilities & Background Risks (Phase 7)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 30 | Deleting 4 components causes import errors in page.tsx | Medium (20%) | High | Update page.tsx imports BEFORE deleting files | git checkout deleted files |
| 31 | Background accordion not accessible | Medium (20%) | High | Use native `<details>` element or proper ARIA | Use static list instead |
| 32 | Technology icons missing | Medium (30%) | Medium | Use text fallback if SVG not ready | Launch with text labels |
| 33 | Certification filter removes too much | Medium (20%) | Medium | Review content before removing. Some certifications may be weak. | Adjust filter criteria |

### FinalCTA & Contact Risks (Phase 8)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 34 | Emerald background too dominant | Medium (20%) | Low | A/B review. Reduce opacity/glow. | Adjust color values |
| 35 | Contact email boys.mtv@gmail.com looks unprofessional | Medium (30%) | Medium | Recommend professional email (dedy@domain). If not possible, accept. | Keep existing. No change needed. |
| 36 | Copy-to-clipboard not working on some browsers | Low (10%) | Low | Fallback: select text manually | Remove clipboard feature |

### Motion & Interaction Risks (Phase 9)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 37 | Framer Motion bundle size too large | Medium (20%) | Medium | Tree-shaking. Framer Motion v11 ~30kB gzipped — acceptable. | Dynamic import sections with motion |
| 38 | Animation jank on low-end devices | High (30%) | Medium | Test on mid-range phone. Use `will-change` sparingly. | Reduced motion fallback |
| 39 | Hover effects don't work on touch devices | High (50%) | Low | Hover effects degrade gracefully. Touch = tap state. | N/A — intentional |
| 40 | Scroll-triggered animations cause layout shift | Medium (20%) | Medium | Use `viewport: { once: true }` | Remove scroll-triggered |
| 41 | Page transition conflicts with Next.js navigation | Medium (30%) | Medium | Use `next/navigation` events or `layoutRouter` | Remove page transition |

### Accessibility & SEO Risks (Phase 10)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 42 | JSON-LD syntax error | Low (10%) | Medium | Validate with Google Rich Results Test before deploy | Fix syntax |
| 43 | Focus indicators change visual design | Medium (20%) | Low | Use `outline` not `box-shadow` to avoid layout shift | Adjust style, keep accessibility |
| 44 | Alt text missing for new images | Medium (20%) | Medium | Checklist item — verify before launch | Add alt text |
| 45 | Heading hierarchy broken (h1 → h3) | Medium (20%) | Medium | Audible with screen reader test | Fix heading levels |
| 46 | Reduced motion media query not applied | Low (5%) | Low | Test in browser with `prefers-reduced-motion: reduce` | Add missing query |

### Launch Risks (Phase 11)

| # | Risk | Probability | Impact | Mitigation | Rollback |
|---|------|-------------|--------|------------|----------|
| 47 | Build fails on Vercel due to new assets | Medium (20%) | High | Test build locally first. Check Vercel build logs. | Revert to previous deployment |
| 48 | Lighthouse score drops after animations | Medium (30%) | Medium | Measure before and after. Optimize if below 90. | Disable heavy animations |
| 49 | SEO metadata not picked up by crawlers | Low (10%) | Low | Google Search Console — request reindex | N/A — time |
| 50 | CDN cache serving old CSS | Low (5%) | Low | Vercel handles cache invalidation | Hard refresh |
| 51 | Stakeholder (you) doesn't approve visual changes | Medium (30%) | High | Show preview before merge. Iterate on feedback. | Don't merge until approved |
| 52 | Mobile responsive issues discovered post-launch | Medium (20%) | Medium | Test on real devices before launch. Not just emulator. | Hotfix |
| 53 | Portfolio downtime during deploy | Low (5%) | High | Vercel zero-downtime deploy. Deploy at low traffic time. | Vercel automatic rollback |

---

# 6. TEST PLAN

## Testing Strategy

```yaml
philosophy: "Pragmatic confidence over 100% coverage"
reason: >
  Portfolio website, not a banking app. 
  Focus on visual regression, accessibility, and performance.
  Unit tests for utility functions and data logic.
  No need for end-to-end testing of every interaction.

tools:
  unit: vitest (zero config, fast, compatible with Next.js)
  visual_regression: storybook + chromatic atau screenshot comparison
  accessibility: axe-core (via @axe-core/playwright atau cypress-axe)
  performance: Lighthouse CI
```

## Test Types

### 1. Unit Tests (Files to test)

| File | What to test |
|------|--------------|
| `components/portfolio-data.ts` | `getFeaturedProjectBySlug()` returns correct project, returns undefined for invalid slug |
| New utility functions | If any are created during redesign |

### 2. Visual Regression Tests

| Section | What to compare |
|---------|-----------------|
| Hero | Old vs new — screenshot diff |
| Navbar | Scroll state (transparent vs blur) — screenshot |
| Projects | Flagship vs supporting visual hierarchy |
| CaseStudy | Grid layout at different breakpoints |
| Modal | Open state, navigation state |
| Mobile | Hamburger menu open/closed |

### 3. Accessibility Tests

| Test | Tool | Criteria |
|------|------|----------|
| Automated scan | axe-core | 0 violations |
| Keyboard navigation | Manual | Tab through all interactive elements |
| Screen reader | VoiceOver/NVDA | All content announced correctly |
| Focus management | Manual | Modal focus trap, skip link |
| Color contrast | axe-core | All text meets 4.5:1 |

### 4. Motion Tests

| Test | Criteria |
|------|----------|
| vsync/g-sync | No frame drops (Chrome DevTools — Rendering — FPS meter) |
| Reduced motion | All animations disabled when `prefers-reduced-motion: reduce` |
| Scroll trigger | Animations fire only once (`viewport: { once: true }`) |

### 5. Performance Tests

| Test | Tool | Target |
|------|------|--------|
| Lighthouse | Chrome DevTools | Performance ≥ 95 |
| Bundle analysis | `next build --analyze` or `webpack-bundle-analyzer` | Framer Motion < 40kB, total < 200kB JS |
| Image optimization | `next/image` audit | All images served in WebP, proper sizes |

### 6. SEO Tests

| Test | Tool | Criteria |
|------|------|----------|
| Structured data | Google Rich Results Test | Valid JSON-LD |
| Meta tags | Manual inspect | title, description, og:*, twitter:* present |
| Sitemap | Manual inspect | Valid XML, all URLs accessible |
| Robots.txt | Manual inspect | Allows all, sitemap referenced |

### 7. Responsive Tests

| Breakpoint | Device | Test |
|------------|--------|------|
| 320px | iPhone SE | All sections visible, no overflow |
| 375px | iPhone 12/13 | Touch targets ≥ 44px |
| 768px | iPad | Layout collapses correctly |
| 1024px | iPad Pro | Grid transitions |
| 1440px | Desktop | Full layout |

### 8. Cross Browser Tests

| Browser | Priority |
|---------|----------|
| Chrome (latest) | Primary — develop on this |
| Firefox (latest) | High |
| Safari (latest) | High — check WebKit differences |
| Edge (latest) | Medium |
| Chrome Android | Medium |
| Safari iOS | High — check mobile Safari quirks |

---

# 7. DEFINITION OF DONE (Per Phase)

## Phase 1: Foundation Cleanup
```
□ All dead config files deleted (next.config.js, postcss.config.js)
□ styles/ folder deleted
└── styles/placeholder.txt deleted
□ package.json — clsx and tailwind-merge removed
□ npm install run successfully
□ npm run build passes (zero errors)
□ npm run lint passes (zero errors, zero warnings)
□ sitemap.ts — fragment URLs removed
□ layout.tsx — canonical + og:image placeholder added
□ Hero.tsx — Download import removed
□ tailwind.config.ts — gradient-x and hero-glow removed
□ globals.css — .glass-panel class removed
□ Site looks IDENTICAL to before (screenshot comparison)
```

## Phase 2: Design System
```
□ styles/tokens.css created with all design tokens
□ styles/base.css created with base styles
□ globals.css imports tokens.css and base.css
□ tailwind.config.ts references CSS variables (not hardcoded)
□ npm run build passes
□ Site looks IDENTICAL to before (no visual change)
□ All hardcoded colors removed from globals.css
□ All hardcoded radius values removed from globals.css
```

## Phase 3: Hero
```
□ New Hero renders without errors
□ Photo loads with WebP + JPEG fallback
□ Headline visible at all breakpoints
□ CTA buttons functional (scroll to correct sections)
□ Trust bar metrics visible with count-up animation
□ No console errors
□ npm run build passes
□ Lighthouse LCP < 2s
□ Old hero CSS classes removed from globals.css
```

## Phase 4: Navigation
```
□ Navbar transparent at top, blur after scroll
□ Scroll progress bar visible and accurate
□ Active section highlighting works via IntersectionObserver
□ Mobile menu opens/closes with animation
□ All nav links functional
□ Keyboard accessible (tab, enter, escape)
□ aria-expanded on mobile menu toggle
□ Build passes
```

## Phase 5: Projects & Case Study
```
□ Flagship project visually dominant
□ Supporting projects in compact grid
□ Modal opens/closes with smooth animation
□ Modal prev/next navigation works
□ Case Study layout readable
□ All project data intact
□ Build passes
□ No console errors
```

## Phase 6: Experience & Architecture
```
□ Timeline with connector line visible
□ Architecture principles displayed as visual nodes
□ EngineeringApproach content merged into Architecture
□ All experience data intact
□ Responsive: collapses to vertical on mobile
□ Build passes
```

## Phase 7: Capabilities & Background
```
□ TechStack uses icons + visual cards (not text tags)
□ Background section with accordion/tabs
□ Old sections (Achievements, Certifications, Education, Organizations) deleted
□ page.tsx imports updated (deleted component imports removed)
□ Build passes
```

## Phase 8: FinalCTA & Contact
```
□ FinalCTA has emerald brand treatment
□ CTA buttons functional
□ Mailto links work
□ Copy-to-clipboard works (if implemented)
□ Build passes
```

## Phase 9: Motion & Interactions
```
□ All entry animations run at 60fps
□ Hover effects on all interactive elements
□ Click feedback on all buttons
□ Scroll progress bar accurate
□ Reduced motion respected
□ Lighthouse Performance ≥ 90
```

## Phase 10: Accessibility & SEO
```
□ Lighthouse Accessibility ≥ 95
□ Lighthouse SEO = 100
□ JSON-LD valid (Google Rich Results Test)
□ All interactive elements keyboard accessible
□ Focus indicators visible
□ No heading hierarchy issues
□ All images have alt text
□ og:image renders in social preview
```

## Phase 11: Final Polishing & Launch
```
□ npm run build — zero errors
□ npm run lint — zero warnings
□ All Lighthouse ≥ 95
□ All sections render correctly
□ All animations smooth
□ All links functional
□ All images loaded
□ No console errors
□ Tested on Chrome, Firefox, Safari, Edge
□ Tested on mobile (320px+)
□ Reduced motion respected
□ Deployed to production
□ Post-deployment 48h monitoring
```

---

# 8. GO / NO-GO CHECKLIST

## 100+ Items That Must Pass Before Redesign is Complete

### Build & Code Quality (10)

| # | Item | Pass/Fail |
|---|------|-----------|
| 1 | `npm run build` — zero errors | □ |
| 2 | `npm run lint` — zero errors, zero warnings | □ |
| 3 | No `any` types in TypeScript (unless unavoidable) | □ |
| 4 | No `console.log` statements in production code | □ |
| 5 | No `TODO` comments in production code | □ |
| 6 | No dead/unused imports | □ |
| 7 | No unused CSS classes | □ |
| 8 | No duplicate CSS definitions | □ |
| 9 | No inline styles (unless for dynamic values) | □ |
| 10 | All files linted and formatted consistently | □ |

### Design System (10)

| # | Item | Pass/Fail |
|---|------|-----------|
| 11 | All colors use CSS variables (no hardcoded hex/rgba) | □ |
| 12 | All spacing uses spacing system (4px base) | □ |
| 13 | All radius uses radius system (not arbitrary values) | □ |
| 14 | All shadows use elevation system | □ |
| 15 | All fonts use font variables | □ |
| 16 | Typography scale applied consistently | □ |
| 17 | Motion tokens used (easing, duration variables) | □ |
| 18 | No magic numbers in CSS or components | □ |
| 19 | Design token file is single source of truth | □ |
| 20 | Tailwind config references CSS variables | □ |

### Hero (8)

| # | Item | Pass/Fail |
|---|------|-----------|
| 21 | Hero layout renders correctly at all breakpoints | □ |
| 22 | Professional photo loads with proper fallback | □ |
| 23 | Headline readable (no overflow, no clipping) | □ |
| 24 | CTA buttons functional and visually clear | □ |
| 25 | Trust bar metrics visible with animation | □ |
| 26 | Entry animation completes in < 2s | □ |
| 27 | No layout shift during entry | □ |
| 28 | Background (noise, gradient, motif) renders correctly | □ |

### Navigation (8)

| # | Item | Pass/Fail |
|---|------|-----------|
| 29 | Navbar transparent at top of page | □ |
| 30 | Navbar blurs after scrolling past threshold | □ |
| 31 | Scroll progress bar accurate (±2% tolerance) | □ |
| 32 | Active section highlighting works | □ |
| 33 | All nav links scroll to correct sections | □ |
| 34 | Mobile hamburger menu functional | □ |
| 35 | Mobile menu accessible (aria-expanded) | □ |
| 36 | "Let's talk" button functional | □ |

### Projects & Case Study (12)

| # | Item | Pass/Fail |
|---|------|-----------|
| 37 | Flagship project visually dominant | □ |
| 38 | Supporting projects visually secondary | □ |
| 39 | All project data displays correctly | □ |
| 40 | Project modal opens with animation | □ |
| 41 | Modal close via X, backdrop, Escape key | □ |
| 42 | Modal prev/next navigation works | □ |
| 43 | Case Study layout readable (editorial quality) | □ |
| 44 | Problem/Approach/Tradeoff/Impact visible | □ |
| 45 | Evidence panels render correctly | □ |
| 46 | "Read full case study" link works | □ |
| 47 | Case study page (`/case-studies/[slug]`) renders | □ |
| 48 | Taxonomy tags render and are styled | □ |

### Experience & Architecture (8)

| # | Item | Pass/Fail |
|---|------|-----------|
| 49 | Timeline connector line renders | □ |
| 50 | Timeline items stagger correctly on scroll | □ |
| 51 | All 5 experience entries display correctly | □ |
| 52 | Signal tags render for each entry | □ |
| 53 | Architecture principles displayed as visual nodes | □ |
| 54 | Architecture hover interaction works | □ |
| 55 | EngineeringApproach content merged correctly | □ |
| 56 | Architecture section responsive on mobile | □ |

### Capabilities & Background (8)

| # | Item | Pass/Fail |
|---|------|-----------|
| 57 | TechStack uses visual cards + icons (not text tags) | □ |
| 58 | All 3 tech categories display correctly | □ |
| 59 | Technology icons load correctly | □ |
| 60 | Background section renders with accordion/tabs | □ |
| 61 | Education content renders correctly | □ |
| 62 | Certifications content renders (filtered) | □ |
| 63 | Achievements content renders (filtered) | □ |
| 64 | Old component files deleted from filesystem | □ |

### FinalCTA & Contact (6)

| # | Item | Pass/Fail |
|---|------|-----------|
| 65 | FinalCTA has emerald brand treatment | □ |
| 66 | CTA buttons functional | □ |
| 67 | Contact cards render with correct info | □ |
| 68 | Email mailto link works | □ |
| 69 | LinkedIn/GitHub links open in new tab | □ |
| 70 | Copy-to-clipboard works (if implemented) | □ |

### Footer (4)

| # | Item | Pass/Fail |
|---|------|-----------|
| 71 | Copyright displays current year | □ |
| 72 | Contact email renders correctly | □ |
| 73 | "Jump to contact" link works | □ |
| 74 | Footer responsive on mobile | □ |

### Motion & Interactions (8)

| # | Item | Pass/Fail |
|---|------|-----------|
| 75 | All hover effects work on interactive elements | □ |
| 76 | All click feedback works (scale bounce) | □ |
| 77 | All entry animations fire correctly (once) | □ |
| 78 | Scroll progress bar animates smoothly | □ |
| 79 | Reduced motion respected (prefers-reduced-motion) | □ |
| 80 | No animation jank (60fps maintained) | □ |
| 81 | Modal transitions smooth | □ |
| 82 | Page transition smooth (if implemented) | □ |

### Accessibility (8)

| # | Item | Pass/Fail |
|---|------|-----------|
| 83 | Skip to content link present and functional | □ |
| 84 | All interactive elements keyboard accessible | □ |
| 85 | Focus indicators visible on all elements | □ |
| 86 | ARIA labels on icon-only buttons | □ |
| 87 | aria-expanded on mobile menu toggle | □ |
| 88 | aria-current on active nav link | □ |
| 89 | Heading hierarchy correct (h1 → h2 → h3) | □ |
| 90 | All images have meaningful alt text | □ |

### SEO (6)

| # | Item | Pass/Fail |
|---|------|-----------|
| 91 | JSON-LD structured data valid (Person + WebSite) | □ |
| 92 | og:title, og:description, og:image present | □ |
| 93 | twitter:card = summary_large_image | □ |
| 94 | Canonical URL set on all pages | □ |
| 95 | Sitemap XML valid | □ |
| 96 | robots.txt references sitemap | □ |

### Performance (6)

| # | Item | Pass/Fail |
|---|------|-----------|
| 97 | Lighthouse Performance ≥ 95 | □ |
| 98 | Lighthouse Accessibility ≥ 95 | □ |
| 99 | Lighthouse Best Practices ≥ 95 | □ |
| 100 | Lighthouse SEO = 100 | □ |
| 101 | All images use WebP + proper sizes | □ |
| 102 | No layout shift (CLS < 0.05) | □ |

### Deployment (6)

| # | Item | Pass/Fail |
|---|------|-----------|
| 103 | Deployment to Vercel/production successful | □ |
| 104 | Production URL loads without errors | □ |
| 105 | All assets load (images, fonts, CSS) | □ |
| 106 | No console errors in production | □ |
| 107 | Google Analytics/Vercel Analytics tracking active | □ |
| 108 | Post-deployment smoke test passed | □ |

### Final Review (2)

| # | Item | Pass/Fail |
|---|------|-----------|
| 109 | Stakeholder (you) approval received | □ |
| 110 | All 11 phases completed successfully | □ |

---

## Final Verdict

```
All 110 items MUST pass before redesign can be declared complete.

Status: □ GO / □ NO-GO

If NO-GO:
  - Identify failing items
  - Create hotfix phase
  - Re-test
  - Re-evaluate
```

---

*Execution Plan v1.0 — Principal Engineer Blueprint*
*0 baris kode ditulis. 0 library dipilih. 0 file diubah.*
