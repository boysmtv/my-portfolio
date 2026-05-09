export type FeaturedProject = {
  title: string;
  category: string;
  role: string;
  period: string;
  headline: string;
  summary: string;
  impact: string[];
  responsibilities: string[];
  challenges: string[];
  decisions: string[];
  stack: string[];
  accent: string;
  metrics: { label: string; value: string }[];
  contactHref: string;
};

export const proofChips = [
  "6+ years in fintech delivery",
  "ISO8583 / JPOS payment systems",
  "Android + backend architecture",
  "Production incident ownership",
];

export const heroMetrics = [
  { value: "20+", label: "projects delivered" },
  { value: "500+", label: "branch and field surfaces touched" },
  { value: "99.9%", label: "availability target handled" },
  { value: "L2/L3", label: "operational support depth" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "BRI Managed Payment Services",
    category: "Payments Infrastructure",
    role: "Fullstack Android Developer",
    period: "2019 - 2021",
    headline: "ISO8583 debit and payment flows engineered for high-throughput banking operations.",
    summary:
      "Built and stabilized payment integrations across switching and host communication layers. The focus was not just shipping features, but keeping settlement-critical transaction flows dependable under production pressure.",
    impact: [
      "Reduced timeout and retry noise through cleaner socket and message handling.",
      "Created reusable patterns that later supported BNI and Brizzi related flows.",
      "Improved maintainability for teams dealing with proprietary ISO8583 variants.",
    ],
    responsibilities: [
      "Designed end-to-end Android and backend integration flows.",
      "Worked deeply on ISO8583 message handling and operational debugging.",
      "Supported deployment, testing, and production issue resolution.",
    ],
    challenges: [
      "Complex proprietary bitmap extensions and message variants.",
      "High reliability expectations in financial transaction paths.",
      "Balancing speed of change with production safety.",
    ],
    decisions: [
      "Kept the architecture modular around transaction boundaries and adapters.",
      "Treated debugging, traceability, and fallback behavior as product requirements.",
      "Optimized for operability, not just functional completeness.",
    ],
    stack: ["Java", "Kotlin", "Spring Boot", "ISO8583", "JPOS"],
    accent: "from-sky-500/30 via-cyan-400/10 to-transparent",
    metrics: [
      { label: "domain", value: "banking" },
      { label: "focus", value: "switching reliability" },
      { label: "surface", value: "android + backend" },
    ],
    contactHref: "mailto:boys.mtv@gmail.com?subject=Discuss%20BRI%20Managed%20Payment%20Services",
  },
  {
    title: "Lintasarta Enterprise eKYC",
    category: "Identity Verification",
    role: "Technical Lead Developer",
    period: "2021 - 2022",
    headline: "Enterprise eKYC delivery with uptime discipline, security awareness, and client-facing architecture ownership.",
    summary:
      "Led the translation of business requirements into a deployable eKYC platform. The work covered technical direction, infrastructure, incident support, and explaining solution design clearly to enterprise stakeholders.",
    impact: [
      "Maintained a delivery posture around a 99.9% uptime target.",
      "Strengthened client confidence through direct architecture communication.",
      "Improved resilience by treating operational support and security review as part of delivery.",
    ],
    responsibilities: [
      "Led technical direction from design to deployment.",
      "Handled L2 support, escalation, and production diagnostics.",
      "Managed environment, firewall, and system hardening concerns.",
    ],
    challenges: [
      "Strict uptime expectations for sensitive identity flows.",
      "Balancing security, compliance expectations, and delivery speed.",
      "Keeping client communication aligned with engineering reality.",
    ],
    decisions: [
      "Made deployment and runtime concerns part of the architecture conversation early.",
      "Used operational readiness as a gating condition, not an afterthought.",
      "Positioned security and pentest work as part of the definition of done.",
    ],
    stack: ["Kotlin", "Java", "Spring Boot", "OCR", "Infrastructure"],
    accent: "from-emerald-500/30 via-lime-400/10 to-transparent",
    metrics: [
      { label: "uptime target", value: "99.9%" },
      { label: "focus", value: "identity trust" },
      { label: "ownership", value: "design to support" },
    ],
    contactHref: "mailto:boys.mtv@gmail.com?subject=Discuss%20Lintasarta%20Enterprise%20eKYC",
  },
  {
    title: "Asetku Mobile & Lending Flows",
    category: "Fintech Product Delivery",
    role: "Sr. Fullstack Android Developer",
    period: "2022",
    headline: "Fintech mobile experience rebuilt with stronger product flow, backend integration, and delivery speed.",
    summary:
      "Rebuilt the Asetku mobile application and connected it to backend services that supported borrower and lender journeys. The work centered on shipping product-critical flows without losing engineering discipline.",
    impact: [
      "Helped modernize the mobile foundation with Kotlin, MVVM, and coroutines.",
      "Improved delivery confidence across product and backend collaboration.",
      "Raised the maintainability baseline for future feature work.",
    ],
    responsibilities: [
      "Rebuilt key mobile flows and supporting service integrations.",
      "Worked across frontend and backend concerns for core features.",
      "Resolved performance bottlenecks and stability issues.",
    ],
    challenges: [
      "Coordinating fintech product flows with backend evolution.",
      "Keeping user journeys fast and dependable during rebuild work.",
      "Maintaining engineering quality while moving quickly.",
    ],
    decisions: [
      "Used scalable patterns so the app could absorb further feature expansion.",
      "Prioritized maintainability and state clarity over short-lived hacks.",
      "Treated reliability and UX continuity as shared goals.",
    ],
    stack: ["Kotlin", "MVVM", "Coroutines", "Retrofit", "REST API"],
    accent: "from-fuchsia-500/30 via-violet-400/10 to-transparent",
    metrics: [
      { label: "surface", value: "mobile + api" },
      { label: "focus", value: "product velocity" },
      { label: "delivery", value: "business critical" },
    ],
    contactHref: "mailto:boys.mtv@gmail.com?subject=Discuss%20Asetku%20Mobile%20Delivery",
  },
];

export const supportingProjects = [
  {
    title: "NBDS Branch Design System",
    category: "Design System",
    note: "Reusable banking branch UI patterns and operational consistency.",
  },
  {
    title: "Brizzi NFC Module",
    category: "Android Payments",
    note: "Card interaction flow with offline balance sync concerns.",
  },
  {
    title: "Pertamina EDC Monitoring",
    category: "Realtime Monitoring",
    note: "Nationwide device monitoring with live operational visibility.",
  },
  {
    title: "Merchant Management Dashboard",
    category: "Operations Platform",
    note: "Onboarding, access control, and settlement-oriented dashboards.",
  },
  {
    title: "LinkAja Payment Module",
    category: "SDK Integration",
    note: "Embeddable payment experience designed for host app stability.",
  },
  {
    title: "Lazismu Donation Platform",
    category: "Product Delivery",
    note: "Trust-focused donation flows and payment gateway integration.",
  },
];
