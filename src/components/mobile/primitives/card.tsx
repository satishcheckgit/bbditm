"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * MobileCard — white rounded card with soft elevation (md:hidden pattern).
 * Matches desktop .apple-card-3d / rounded-[22px] language, tuned for thumb reach.
 */

export function MobileCard({
  className,
  href,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { href?: string }) {
  const base = cn(
    "bg-white rounded-[22px] border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.99] transition-all",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base} {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <div className={base} {...props}>
      {children}
    </div>
  );
}
