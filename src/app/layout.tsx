import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)] selection:bg-[var(--color-brand-100)] selection:text-[var(--color-brand-900)]">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-brand-600)] focus:text-white focus:rounded-md focus:shadow-lg"
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
