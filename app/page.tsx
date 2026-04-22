import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import EngineeringApproach from "@/components/EngineeringApproach";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-24 space-y-32">
        <Experience />
        <Projects />
        <CaseStudy />
        <Architecture />
        <TechStack />
        <EngineeringApproach />
      </div>
    </div>
  );
}