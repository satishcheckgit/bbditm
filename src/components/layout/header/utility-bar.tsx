import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { utilityNavItems } from "@/config/navigation";

export function UtilityBar() {
  return (
    <div className="hidden lg:block border-b border-gray-100 bg-[var(--color-surface-soft)]/80 text-xs text-[var(--color-ink-muted)] py-1.5 transition-colors">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-brand-800)] bg-[var(--color-brand-100)] px-2 py-0.5 rounded-full text-[11px]">
            AKTU College Code: 054
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">
            Approved by AICTE, New Delhi & Affiliated to AKTU Lucknow
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
                className="hover:text-[var(--color-brand-600)] transition-colors font-medium flex items-center gap-1"
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
                className="hover:text-[var(--color-brand-600)] transition-colors font-medium"
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
