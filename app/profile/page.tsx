import Summary from "@/components/Summary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Dedy Wijaya",
  description: "Engineering profile and focus areas — fintech, payment systems, Android delivery, and backend integration.",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <Summary />
    </div>
  );
}
