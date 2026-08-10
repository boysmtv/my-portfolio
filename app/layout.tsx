import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://dedywijaya.dev";

export const metadata: Metadata = {
  title: "Dedy Wijaya — Technical Lead, Android & Payments",
  description:
    "Portfolio of Dedy Wijaya, Technical Lead specializing in Android platforms and payment infrastructure for Indonesia's largest financial institutions.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Dedy Wijaya — Technical Lead, Android & Payments",
    description:
      "Portfolio of Dedy Wijaya, Technical Lead specializing in Android platforms and payment infrastructure.",
    images: ["/images/og-placeholder.png"],
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-placeholder.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dedy Wijaya",
  url: siteUrl,
  jobTitle: "Technical Lead, Android & Payments",
  sameAs: [
    "https://github.com/boysmtv",
    "https://www.linkedin.com/in/dedy-wijaya-421698196/",
  ],
  knowsAbout: [
    "Android Development",
    "Payment Infrastructure",
    "Kotlin",
    "Java",
    "Spring Boot",
    "ISO8583",
    "Fintech",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
