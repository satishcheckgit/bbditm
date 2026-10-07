import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { utilityNavItems } from "@/config/navigation";

export function UtilityBar() {
  return (
    <div className="hidden lg:block bg-[#1a2c56] border-b border-[#243d77] text-xs text-slate-200 py-1.5 transition-colors">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-semibold text-white bg-[#e41d43] px-2.5 py-0.5 rounded-full text-[11px] tracking-tight">
            AKTU Code: 054
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-300 font-normal">
            Approved by AICTE, New Delhi & Affiliated to AKTU, Lucknow
          </span>
        </div>

        <nav aria-label="Utility navigation" className="flex items-center gap-5">
          {utilityNavItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-medium flex items-center gap-1 text-slate-300"
              >
                {item.title}
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-white transition-colors font-medium text-slate-300"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
      </Container>
    </div>
  );
}
