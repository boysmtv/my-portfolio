import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dedy Wijaya",
  description: "Get in touch — open to technical lead and senior engineer conversations in fintech and payments.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <div className="space-y-10">
        <FinalCTA />
        <ContactSection />
      </div>
    </div>
  );
}
