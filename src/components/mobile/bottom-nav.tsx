"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, Building2, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * BottomNav — native tab bar (4–5 tabs, backdrop-blur, sticky bottom-0).
 *
 * IMPORTANT: must be a DIRECT child of the flex-col shell — else sticky fails.
 * Active state: text-[#e41d43] + subtle pill bg.
 * Apply tab carries accent emphasis without breaking hierarchy.
 */

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
  accent?: boolean;
};

const ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home, exact: true },
  { href: "/programmes", label: "Programmes", icon: GraduationCap },
  { href: "/campus-life", label: "Campus", icon: Building2 },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function BottomNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="sticky bottom-0 z-30 border-t border-black/[0.06] bg-white/90 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex w-full max-w-2xl items-stretch justify-around">
        {ITEMS.map((item) => {
          const isActive = item.exact ? pathname === item.href : pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors active:scale-[0.98]",
                  isActive ? "text-[#e41d43]" : "text-[#86868b] hover:text-[#6e6e73]"
                )}
              >
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full transition-colors",
                    isActive ? "bg-[#fff1f3]" : "bg-transparent"
                  )}
                >
                  <Icon className="size-[18px]" />
                </span>
                <span className="leading-none tracking-tight">{item.label}</span>
              </Link>
            </li>
          );
        })}

        {/* Apply CTA — pill, slightly elevated like Zepto cart CTA */}
        <li className="flex-1 flex items-center justify-center px-1">
          <Link
            href={siteConfig.links.applyNow}
            aria-label="Apply now"
            className="inline-flex items-center gap-1 rounded-full bg-[#e41d43] px-3 py-2 text-[11px] font-extrabold tracking-tight text-white shadow-[0_8px_20px_rgba(228,29,67,0.3)] active:scale-95 transition-transform"
          >
            <Sparkles className="size-3.5" />
            Apply
          </Link>
        </li>
      </ul>
    </nav>
  );
}
