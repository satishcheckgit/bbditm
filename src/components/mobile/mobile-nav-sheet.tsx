"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import { MobileSheet } from "./mobile-sheet";
import { siteConfig } from "@/config/site";
import { mainNavItems, utilityNavItems } from "@/config/navigation";
import type { NavItem, UtilityNavItem } from "@/types/navigation";
import { Button } from "@/components/ui/button";

/**
 * MobileNavSheet — full nav as a bottom sheet (alternative to full-screen drawer).
 * Reuses existing navigation config + CMS-fallback shape.
 * Chosen over reusing header/mobile-nav.tsx drawer to keep AppShell self-contained
 * and avoid portaling conflicts when both shells mount briefly during resize.
 */

export interface MobileNavSheetProps {
  open: boolean;
  onClose: () => void;
  mainNav?: NavItem[];
  utilityNav?: UtilityNavItem[];
}

export function MobileNavSheet({ open, onClose, mainNav = mainNavItems, utilityNav = utilityNavItems }: MobileNavSheetProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const displayMain = mainNav && mainNav.length > 0 ? mainNav : mainNavItems;
  const displayUtility = utilityNav && utilityNav.length > 0 ? utilityNav : utilityNavItems;

  const close = () => {
    setExpanded(null);
    onClose();
  };

  return (
    <MobileSheet
      open={open}
      onClose={close}
      title="Explore BBDITM"
      footer={
        <div className="space-y-2">
          <Button href={siteConfig.links.applyNow} variant="primary" className="w-full">
            Apply for Admission 2026-27 <ArrowRight className="size-4" />
          </Button>
          <a
            href={`tel:${siteConfig.contact.admissionsPhone}`}
            className="block text-center text-xs font-medium text-[#6e6e73] hover:text-[#243d77]"
          >
            Admissions Helpline: {siteConfig.contact.admissionsPhone}
          </a>
        </div>
      }
    >
      <nav aria-label="Mobile navigation" className="space-y-1">
        {displayMain.map((item) => {
          const hasGroups = Boolean(item.groups && item.groups.length > 0);
          const isExpanded = expanded === item.title;
          return (
            <div key={item.title} className="border-b border-black/[0.06] last:border-0 pb-1">
              {hasGroups ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.title)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-bold text-[#243d77] active:text-[#e41d43] transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`size-4 text-[#86868b] transition-transform ${isExpanded ? "rotate-180 text-[#e41d43]" : ""}`} />
                  </button>
                  {isExpanded && (
                    <div className="mb-3 rounded-xl border border-black/[0.04] bg-[#f5f5f7] p-3 space-y-3">
                      {item.groups?.map((g) => (
                        <div key={g.heading} className="space-y-1.5">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">{g.heading}</p>
                          <ul className="space-y-1">
                            {g.items.map((sub) => (
                              <li key={sub.title}>
                                <Link
                                  href={sub.href}
                                  onClick={close}
                                  className="block rounded-lg px-2 py-1.5 hover:bg-white transition-colors"
                                >
                                  <span className="text-xs font-semibold text-[#1d1d1f]">{sub.title}</span>
                                  {sub.description && <span className="block text-[11px] text-[#6e6e73] line-clamp-1">{sub.description}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.featured && (
                        <Link
                          href={item.featured.href}
                          onClick={close}
                          className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 border border-black/[0.06] text-xs font-bold text-[#e41d43]"
                        >
                          <span>{item.featured.title}</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={close} className="block py-3 text-sm font-bold text-[#1d1d1f] active:text-[#e41d43]">
                  {item.title}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mt-4 pt-4 border-t border-black/[0.06]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">Quick portals</p>
        <div className="grid grid-cols-2 gap-2">
          {displayUtility.map((u) => (
            <a
              key={u.title}
              href={u.href}
              target={u.isExternal ? "_blank" : undefined}
              rel={u.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between rounded-xl border border-black/[0.04] bg-[#f5f5f7] px-3 py-2.5 text-xs font-semibold text-[#1d1d1f]"
            >
              <span>{u.title}</span>
              {u.isExternal && <ExternalLink className="size-3 text-[#86868b]" />}
            </a>
          ))}
        </div>
      </div>
    </MobileSheet>
  );
}
