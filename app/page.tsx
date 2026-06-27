import Link from "next/link";
import { ArrowUpRight, Banknote, Binary, Cpu, History, Layout, MessageSquareText, ShieldCheck, Smartphone, User } from "lucide-react";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";

const sections = [
  { title: "Profile", description: "Engineering focus and delivery philosophy.", href: "/profile", icon: User },
  { title: "Projects", description: "Featured work across payments, Android, and backend.", href: "/projects", icon: Layout },
  { title: "Case studies", description: "In-depth breakdowns of production systems.", href: "/case-studies", icon: Binary },
  { title: "Experience", description: "Career timeline and increasing scope.", href: "/experience", icon: History },
  { title: "Architecture", description: "Principles that guide engineering decisions.", href: "/architecture", icon: Cpu },
  { title: "Capabilities", description: "Tools, stacks, and delivery practices.", href: "/capabilities", icon: ShieldCheck },
  { title: "Background", description: "Education, certifications, and achievements.", href: "/background", icon: Banknote },
  { title: "Contact", description: "Start a conversation about your next role.", href: "/contact", icon: MessageSquareText },
];

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="mx-auto max-w-[90rem] px-4 pb-28 sm:px-6 lg:px-10">
        <div className="mb-10 pt-10">
          <TrustSignals />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="section-panel group transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 transition group-hover:text-emerald-300" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{section.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
