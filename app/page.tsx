import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Background from "@/components/Background";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <CaseStudy />
      <Experience />
      <Architecture />
      <TechStack />
      <Background />
      <FinalCTA />
      <ContactSection />
    </>
  );
}
