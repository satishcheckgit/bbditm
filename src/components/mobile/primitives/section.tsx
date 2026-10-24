"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * MobileSection — consistent mobile section scaffold.
 * - Eyebrow + title + description (same tokens as SectionHeading)
 * - Optional view-all link
 * - Padding/spacing tuned for native app density (py-10, gap-4)
 * Keep desktop <SectionHeading> unchanged; this is md:hidden only.
 */

export interface MobileSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
  headerClassName?: string;
  children: React.ReactNode;
  /** Background utility, default parchment */
  bgClassName?: string;
}

export function MobileSection({
  eyebrow,
  title,
  description,
  viewAllHref,
  viewAllLabel,
  className,
  headerClassName,
  children,
  bgClassName = "bg-[#f5f5f7]",
}: MobileSectionProps) {
  return (
    <section className={cn("py-10 md:hidden", bgClassName, className)}>
      <div className="px-4">
        <div className={cn("flex items-start justify-between gap-3 mb-5", headerClassName)}>
          <div className="min-w-0 flex-1">
            {eyebrow && (
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#e41d43] mb-1.5">{eyebrow}</p>
            )}
            <h2 className="text-[22px] font-bold tracking-tight leading-tight text-[#1d1d1f] font-heading">{title}</h2>
            {description && <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73] line-clamp-3">{description}</p>}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#e41d43] active:scale-95 transition-transform pt-1"
            >
              <span>{viewAllLabel ?? "View all"}</span>
              <ChevronRight className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}
