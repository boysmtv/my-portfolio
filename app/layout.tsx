import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteSummary } from "@/components/portfolio-data";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
  openGraph: {
    title: "Dedy Wijaya | Technical Lead for Fintech, Android, and Payment Systems",
    description: siteSummary.description,
    type: "website",
    siteName: "Dedy Wijaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedy Wijaya | Technical Lead for Fintech, Android, and Payment Systems",
    description: siteSummary.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
