import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteSummary } from "@/components/portfolio-data";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dedywijaya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dedy Wijaya | Technical Lead for Fintech, Android, and Payment Systems",
  description: siteSummary.description,
  keywords: [
    "Dedy Wijaya",
    "Technical Lead",
    "Fintech engineer",
    "Android developer",
    "Backend integration",
    "Payment systems",
    "ISO8583",
    "JPOS",
    "Engineering portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dedy Wijaya | Technical Lead for Fintech, Android, and Payment Systems",
    description: siteSummary.description,
    type: "website",
    siteName: "Dedy Wijaya Portfolio",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedy Wijaya | Technical Lead for Fintech, Android, and Payment Systems",
    description: siteSummary.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dedy Wijaya",
  url: siteUrl,
  jobTitle: "Technical Lead",
  email: siteSummary.contactEmail,
  telephone: siteSummary.phone,
  sameAs: [siteSummary.github, siteSummary.linkedin],
  knowsAbout: [
    "Fintech",
    "Payment Systems",
    "Android Development",
    "Backend Integration",
    "ISO8583",
    "JPOS",
    "System Architecture",
    "Production Operations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex min-h-screen flex-col overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
