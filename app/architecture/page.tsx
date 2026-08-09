import Architecture from "@/components/Architecture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture | Dedy Wijaya",
  description: "Engineering philosophy — modular, traceable, pragmatic architecture for fintech and payment systems.",
};

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <Architecture />
    </div>
  );
}
