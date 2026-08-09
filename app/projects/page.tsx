import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dedy Wijaya",
  description: "Featured projects and systems — payment infrastructure, Android platforms, and backend integrations.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <Projects />
    </div>
  );
}
