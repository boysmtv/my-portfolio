import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dedy Wijaya | Technical Lead & Senior Engineer",
  description: "Portfolio of Dedy Wijaya, Technical Lead & Senior Android Engineer specializing in Fintech and Payment Systems.",
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
        <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
