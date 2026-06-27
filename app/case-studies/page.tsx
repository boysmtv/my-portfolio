import CaseStudiesListing from "@/components/CaseStudiesListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Dedy Wijaya",
  description: "Detailed case studies of payment systems, Android platforms, and backend integrations.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <CaseStudiesListing />
    </div>
  );
}
