import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} — Babu Banarasi Das Institute of Technology & Management, Lucknow`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "BBDITM",
    "BBD Lucknow",
    "Babu Banarasi Das Institute of Technology and Management",
    "AKTU Code 054",
    "B.Tech Lucknow",
    "MBA Lucknow",
    "Engineering Admissions 2026",
  ],
  authors: [{ name: "BBDITM Academic Cell" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f] selection:bg-[#243d77]/10 selection:text-[#243d77]">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#e41d43] focus:text-white focus:rounded-full focus:shadow-md text-xs font-semibold"
        >
          Skip to main content
        </a>

        {/* Global Navigation Shell */}
        <Header />

        {/* Page Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
