export type ProjectMetric = {
  label: string;
  value: string;
};

export type EvidencePanel = {
  title: string;
  body: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  role: string;
  ownership: string;
  period: string;
  platform: string;
  headline: string;
  summary: string;
  impact: string[];
  responsibilities: string[];
  challenges: string[];
  decisions: string[];
  evidencePanels: EvidencePanel[];
  stack: string[];
  accent: string;
  metrics: ProjectMetric[];
  taxonomy: string[];
  contactHref: string;
};

export type SupportingProject = {
  title: string;
  category: string;
  role: string;
  outcome: string;
  note: string;
  taxonomy: string[];
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
    slug: "bri-managed-payment-services",
    title: "BRI Managed Payment Services",
    category: "Payments Infrastructure",
    role: "Fullstack Android Developer",
    ownership: "Built and stabilized switching-critical flows",
    period: "2019 - 2021",
    platform: "Android + backend integration",
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
    evidencePanels: [
      {
        title: "Operational pressure",
        body: "Transaction paths had to remain explainable during incident response, not only correct during ideal-path testing.",
      },
      {
        title: "Constraint handled",
        body: "Proprietary ISO8583 variants forced careful adapter boundaries and message tracing discipline.",
      },
      {
        title: "Why it mattered",
        body: "Payment reliability is a trust surface. Cleaner retries, socket behavior, and traceability reduced noise for operations teams.",
      },
    ],
    stack: ["Java", "Kotlin", "Spring Boot", "ISO8583", "JPOS"],
    accent: "from-sky-500/30 via-cyan-400/10 to-transparent",
    metrics: [
      { label: "domain", value: "banking" },
      { label: "focus", value: "switching reliability" },
      { label: "surface", value: "android + backend" },
    ],
    taxonomy: ["Payments", "ISO8583", "Android", "Backend", "Operations"],
    contactHref: "mailto:boys.mtv@gmail.com?subject=Discuss%20BRI%20Managed%20Payment%20Services",
  },
  {
    slug: "lintasarta-enterprise-ekyc",
    title: "Lintasarta Enterprise eKYC",
    category: "Identity Verification",
    role: "Technical Lead Developer",
    ownership: "Led design-to-support delivery posture",
    period: "2021 - 2022",
    platform: "Enterprise platform delivery",
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
    evidencePanels: [
      {
        title: "Operational posture",
        body: "Availability, firewall readiness, and L2 diagnostics were handled as part of delivery, not support leftovers.",
      },
      {
        title: "Stakeholder layer",
        body: "The role included explaining architecture choices directly to enterprise clients, not only writing implementation code.",
      },
      {
        title: "Trust result",
        body: "The platform was framed and delivered as a system that had to stay dependable under scrutiny, not only pass feature review.",
      },
    ],
    stack: ["Kotlin", "Java", "Spring Boot", "OCR", "Infrastructure"],
    accent: "from-emerald-500/30 via-lime-400/10 to-transparent",
    metrics: [
      { label: "uptime target", value: "99.9%" },
      { label: "focus", value: "identity trust" },
      { label: "ownership", value: "design to support" },
    ],
    taxonomy: ["eKYC", "Security", "Operations", "Infrastructure", "Leadership"],
    contactHref: "mailto:boys.mtv@gmail.com?subject=Discuss%20Lintasarta%20Enterprise%20eKYC",
  },
  {
    slug: "asetku-mobile-lending-flows",
    title: "Asetku Mobile & Lending Flows",
    category: "Fintech Product Delivery",
    role: "Senior Fullstack Android Developer",
    ownership: "Rebuilt mobile flows with backend coordination",
    period: "2022",
    platform: "Fintech mobile product",
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
    evidencePanels: [
      {
        title: "Rebuild context",
        body: "The challenge was not just adding a feature. It was rebuilding product-critical journeys without losing momentum or reliability.",
      },
      {
        title: "Delivery tension",
        body: "Fast product movement had to stay aligned with backend contracts and mobile stability expectations.",
      },
      {
        title: "Outcome focus",
        body: "The stronger engineering win was a clearer, more maintainable product surface that could keep absorbing roadmap changes.",
      },
    ],
    stack: ["Kotlin", "MVVM", "Coroutines", "Retrofit", "REST API"],
    accent: "from-fuchsia-500/30 via-violet-400/10 to-transparent",
    metrics: [
      { label: "surface", value: "mobile + api" },
      { label: "focus", value: "product velocity" },
      { label: "delivery", value: "business critical" },
    ],
    taxonomy: ["Fintech", "Android", "Product Delivery", "API", "Stability"],
    contactHref: "mailto:boys.mtv@gmail.com?subject=Discuss%20Asetku%20Mobile%20Delivery",
  },
];

export const supportingProjects: SupportingProject[] = [
  {
    title: "NBDS Branch Design System",
    category: "Design System",
    role: "Built reusable branch surfaces",
    outcome: "Consistency across banking branch UI patterns",
    note: "Reusable banking branch UI patterns and operational consistency.",
    taxonomy: ["Design System", "Banking", "UI Patterns"],
  },
  {
    title: "Brizzi NFC Module",
    category: "Android Payments",
    role: "Implemented card interaction flow",
    outcome: "Supported offline balance sync concerns",
    note: "Card interaction flow with offline balance sync concerns.",
    taxonomy: ["NFC", "Android", "Payments"],
  },
  {
    title: "Pertamina EDC Monitoring",
    category: "Realtime Monitoring",
    role: "Built live operational visibility",
    outcome: "Nationwide monitoring for EDC device health",
    note: "Nationwide device monitoring with live operational visibility.",
    taxonomy: ["Monitoring", "Operations", "Realtime"],
  },
  {
    title: "Merchant Management Dashboard",
    category: "Operations Platform",
    role: "Built settlement-oriented admin surface",
    outcome: "Improved onboarding and access control clarity",
    note: "Onboarding, access control, and settlement-oriented dashboards.",
    taxonomy: ["Dashboard", "Operations", "Settlement"],
  },
  {
    title: "LinkAja Payment Module",
    category: "SDK Integration",
    role: "Integrated host-safe payment module",
    outcome: "Embeddable payment flow with stability focus",
    note: "Embeddable payment experience designed for host app stability.",
    taxonomy: ["SDK", "Payments", "Mobile"],
  },
  {
    title: "Lazismu Donation Platform",
    category: "Product Delivery",
    role: "Shipped trust-focused donation flow",
    outcome: "Payment gateway-backed donation journey",
    note: "Trust-focused donation flows and payment gateway integration.",
    taxonomy: ["Product", "Donations", "Payments"],
  },
];

export const siteSummary = {
  title: "Dedy Wijaya",
  description:
    "Engineering portfolio focused on fintech delivery, Android architecture, backend integration, and production-grade payment systems.",
  contactEmail: "boys.mtv@gmail.com",
  phone: "08158844424",
  github: "https://github.com/boysmtv",
  linkedin: "https://www.linkedin.com/in/dedy-wijaya-421698196/",
};

export function getFeaturedProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
