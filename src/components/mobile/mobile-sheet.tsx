"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useScrollLock } from "./hooks/use-scroll-lock";

/**
 * MobileSheet — accessible bottom sheet drawer (native app feel).
 *
 * - Portaled to body so sticky/blur headers cannot trap fixed positioning.
 * - Backdrop: bg-black/40 backdrop-blur-sm.
 * - Sheet: rounded-t-[20px] with handle, max-h-[85dvh], scrollable body.
 * - Focus: close button auto-focusable, Escape to close.
 *
 * Keep content simple: nav links, filters, quick actions.
 */

export interface MobileSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  /** Optional footer slot (sticky CTA etc.) */
  footer?: React.ReactNode;
}

export function MobileSheet({ open, onClose, title, children, footer }: MobileSheetProps) {
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Menu"}
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 z-[110] flex max-h-[85dvh] flex-col rounded-t-[20px] bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${open ? "translate-y-0" : "translate-y-full pointer-events-none"}`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Handle + header */}
        <div className="shrink-0 border-b border-black/[0.06]">
          <div className="flex justify-center pt-2 pb-1">
            <span className="h-1 w-9 rounded-full bg-black/10" aria-hidden />
          </div>
          <div className="flex items-center justify-between px-4 pb-3">
            <h2 className="text-sm font-bold tracking-tight text-[#1d1d1f]">{title ?? "Menu"}</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex size-8 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] active:scale-95 transition-transform"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">{children}</div>

        {footer && <div className="shrink-0 border-t border-black/[0.06] bg-white p-4">{footer}</div>}
      </div>
    </>,
    document.body
  );
}
