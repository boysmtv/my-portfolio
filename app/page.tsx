import Architecture from "@/components/Architecture";
import Achievements from "@/components/Achievements";
import CaseStudy from "@/components/CaseStudy";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import Education from "@/components/Education";
import EngineeringApproach from "@/components/EngineeringApproach";
import Experience from "@/components/Experience";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Organizations from "@/components/Organizations";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import TechStack from "@/components/TechStack";
import TrustSignals from "@/components/TrustSignals";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TrustSignals />
      <div className="mx-auto max-w-7xl px-6 pb-28 sm:px-10 lg:px-14">
        <div className="space-y-10">
          <Summary />
          <Projects />
          <CaseStudy />
        </div>

        <div className="mt-20 grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            <Experience />
            <Architecture />
            <EngineeringApproach />
          </div>
          <div className="space-y-10">
            <TechStack />
            <Achievements />
            <Certifications />
            <Education />
            <Organizations />
          </div>
        </div>

        <div className="mt-20 space-y-10">
          <FinalCTA />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
