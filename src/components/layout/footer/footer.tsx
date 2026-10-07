import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0e1118] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <Container>
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-gray-800/80">
          {/* Institutional Bio & Affiliation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-600)] to-[var(--color-brand-800)] flex items-center justify-center text-white font-bold text-lg shadow-md">
                B
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  BBD<span className="text-[var(--color-brand-400)]">ITM</span>
                </span>
                <p className="text-[11px] text-gray-400">
                  Babu Banarasi Das Group of Educational Institutions
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Babu Banarasi Das Institute of Technology & Management (AKTU College Code: 054) provides accredited professional education in Engineering and Business Administration.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900/90 border border-gray-800 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Approved by AICTE | Affiliated to AKTU, Lucknow</span>
            </div>
          </div>

          {/* Quick Academic Streams */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academics
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/programmes/btech-computer-science-engineering" className="hover:text-white transition-colors">
                  B.Tech CSE
                </Link>
              </li>
              <li>
                <Link href="/programmes/btech-cse-artificial-intelligence-machine-learning" className="hover:text-white transition-colors">
                  B.Tech AI & ML
                </Link>
              </li>
              <li>
                <Link href="/programmes/btech-information-technology" className="hover:text-white transition-colors">
                  B.Tech IT
                </Link>
              </li>
              <li>
                <Link href="/programmes/btech-electronics-communication-engineering" className="hover:text-white transition-colors">
                  B.Tech ECE
                </Link>
              </li>
              <li>
                <Link href="/programmes/master-of-business-administration" className="hover:text-white transition-colors">
                  MBA Programme
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition-colors text-xs text-[var(--color-brand-400)] font-medium">
                  View all programmes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Governance */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Admissions
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link href="/admissions#eligibility" className="hover:text-white transition-colors">
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/admissions#fees" className="hover:text-white transition-colors">
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link href="/admissions#scholarships" className="hover:text-white transition-colors">
                  Scholarships & Aid
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-white transition-colors">
                  Placements Record
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={siteConfig.links.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>ERP Student Login</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <Link href="/library" className="hover:text-white transition-colors">
                  Central Library
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Research & Patents
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="hover:text-white transition-colors">
                  Mandatory Disclosures
                </Link>
              </li>
              <li>
                <Link href="/anti-ragging" className="hover:text-white transition-colors">
                  Anti-Ragging Cell
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Address */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus Contact
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.admissionsPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.admissionsPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.admissionsEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.admissionsEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {currentYear} Babu Banarasi Das Institute of Technology & Management. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
