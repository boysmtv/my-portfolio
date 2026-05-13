import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Organizations from "@/components/Organizations";
import Achievements from "@/components/Achievements";
import EngineeringApproach from "@/components/EngineeringApproach";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-24 space-y-32">
        <Summary />
        <Experience />
        <Projects />
        <CaseStudy />
        <Architecture />
        <TechStack />
        <Certifications />
        <Education />
        <Organizations />
        <Achievements />
        <EngineeringApproach />
      </div>
    </div>
  );
}
