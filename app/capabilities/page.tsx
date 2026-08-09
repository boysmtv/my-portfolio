import TechStack from "@/components/TechStack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities | Dedy Wijaya",
  description: "Technical capabilities — Android delivery, backend integration, and runtime operations.",
};

export default function CapabilitiesPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <TechStack />
    </div>
  );
}
