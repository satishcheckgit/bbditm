"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { mainNavItems, utilityNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedIndex(null);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleGroup = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-gray-700 hover:text-[var(--color-brand-600)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-600)] rounded-lg"
        aria-label={isOpen ? "Close menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <div className="font-extrabold text-lg text-[#243d77] tracking-tight">
              BBD<span className="text-[#e41d43]">ITM</span>
            </div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">BBD Educational Group</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-[3px]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          <nav aria-label="Mobile primary navigation" className="space-y-1">
            {mainNavItems.map((item, idx) => {
              const hasSub = item.groups && item.groups.length > 0;
              const isExpanded = expandedIndex === idx;

              return (
                <div key={item.title} className="border-b border-gray-100 last:border-b-0 pb-1">
                  {hasSub ? (
                    <div>
                      <button
                        onClick={() => toggleGroup(idx)}
                        className="w-full flex items-center justify-between py-3 text-sm font-bold text-[#243d77] hover:text-[#e41d43] transition-colors text-left"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#e41d43]" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 pb-3 pt-1 space-y-3 bg-[#f0f4fa] rounded-[3px] my-1 p-3">
                          {item.groups?.map((group) => (
                            <div key={group.heading} className="space-y-1">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e41d43]">
                                {group.heading}
                              </span>
                              <div className="space-y-1 mt-1">
                                {group.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    onClick={closeMenu}
                                    className="block py-1 text-xs text-gray-700 hover:text-[#243d77] font-semibold"
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-3 text-sm font-bold text-[#243d77] hover:text-[#e41d43] transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick Utility Portals */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Quick Portals
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {utilityNavItems.map((u) => (
                <a
                  key={u.title}
                  href={u.href}
                  target={u.isExternal ? "_blank" : undefined}
                  rel={u.isExternal ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-[var(--color-surface-soft)] text-gray-700 hover:text-[var(--color-brand-600)] font-medium flex items-center justify-between"
                >
                  <span>{u.title}</span>
                  {u.isExternal && <ExternalLink className="w-3 h-3 text-gray-400" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Mobile CTA footer */}
        <div className="p-4 border-t border-gray-100 bg-white space-y-2">
          <Button href={siteConfig.links.applyNow} variant="primary" className="w-full">
            Apply for Admission 2026-27
          </Button>
          <div className="text-center">
            <a
              href={`tel:${siteConfig.contact.admissionsPhone}`}
              className="text-xs text-gray-500 hover:text-[var(--color-brand-600)]"
            >
              Admissions Helpline: {siteConfig.contact.admissionsPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
