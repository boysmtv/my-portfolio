import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Dedy Wijaya",
  description: "Career timeline — Technical Lead roles in fintech, payment systems, and Android delivery.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <Experience />
    </div>
  );
}
