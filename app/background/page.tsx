import Background from "@/components/Background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Background | Dedy Wijaya",
  description: "Education, certifications, and achievements — academic and professional foundation.",
};

export default function BackgroundPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-28 pt-24 sm:px-6 lg:px-10">
      <Background />
    </div>
  );
}
