"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { UtilityBar } from "./utility-bar";
import { MobileNav } from "./mobile-nav";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Utility Bar */}
      <UtilityBar />

      {/* Main Navbar */}
      <div
        className={`w-full border-b transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-gray-200/80 shadow-[0_4px_20px_rgb(0_0_0/0.04)]"
            : "bg-white border-gray-100"
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Institutional Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-600)] rounded-lg p-1"
            aria-label={`${siteConfig.shortName} Home`}
          >
            {/* Elegant Emblem Badge */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-brand-600)] to-[var(--color-brand-900)] flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-[var(--color-brand-600)]/30 group-hover:scale-105 transition-transform duration-200">
              <span>B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[var(--color-ink)] leading-none">
                BBD<span className="text-[var(--color-brand-600)]">ITM</span>
              </span>
              <span className="text-[11px] font-medium text-gray-500 tracking-wide mt-1">
                BABU BANARASI DAS GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {mainNavItems.map((item) => {
              const hasFlyout = item.groups && item.groups.length > 0;
              const isActive = activeMenu === item.title;

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => (hasFlyout ? setActiveMenu(item.title) : setActiveMenu(null))}
                >
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 inline-flex items-center gap-1.5 ${
                      isActive
                        ? "text-[var(--color-brand-600)] bg-[var(--color-brand-50)]"
                        : "text-gray-700 hover:text-[var(--color-brand-600)] hover:bg-gray-50/80"
                    }`}
                  >
                    <span>{item.title}</span>
                    {hasFlyout && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isActive ? "rotate-180 text-[var(--color-brand-600)]" : "text-gray-400"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasFlyout && isActive && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[680px] xl:w-[760px] animate-in fade-in slide-in-from-top-2 duration-150"
                      role="region"
                      aria-label={`${item.title} submenu`}
                    >
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgb(20_20_40/0.08)] p-6 overflow-hidden">
                        <div className="grid grid-cols-12 gap-6">
                          {/* Main Links Columns */}
                          <div
                            className={
                              item.featured
                                ? "col-span-8 grid grid-cols-2 gap-6"
                                : "col-span-12 grid grid-cols-2 gap-6"
                            }
                          >
                            {item.groups?.map((group) => (
                              <div key={group.heading} className="space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                  {group.heading}
                                </h3>
                                <ul className="space-y-2">
                                  {group.items.map((sub) => (
                                    <li key={sub.title}>
                                      <Link
                                        href={sub.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="group/item block p-2 rounded-xl hover:bg-[var(--color-brand-50)] transition-colors"
                                      >
                                        <div className="text-sm font-semibold text-gray-900 group-hover/item:text-[var(--color-brand-600)] flex items-center justify-between">
                                          <span>{sub.title}</span>
                                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[var(--color-brand-600)]" />
                                        </div>
                                        {sub.description && (
                                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                            {sub.description}
                                          </p>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Featured Editorial Spotlight */}
                          {item.featured && (
                            <div className="col-span-4 bg-gradient-to-br from-[var(--color-surface-purple)] to-purple-50/50 rounded-xl p-5 border border-[var(--color-brand-100)] flex flex-col justify-between">
                              <div>
                                {item.featured.badge && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--color-brand-700)] bg-[var(--color-brand-100)] px-2.5 py-0.5 rounded-full mb-3">
                                    <Sparkles className="w-3 h-3" />
                                    {item.featured.badge}
                                  </span>
                                )}
                                <h4 className="text-sm font-bold text-[var(--color-brand-950)] leading-snug">
                                  {item.featured.title}
                                </h4>
                                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                  {item.featured.description}
                                </p>
                              </div>
                              <Link
                                href={item.featured.href}
                                onClick={() => setActiveMenu(null)}
                                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-800)]"
                              >
                                <span>Learn more</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            <Button
              href={siteConfig.links.applyNow}
              variant="primary"
              size="md"
              className="hidden sm:inline-flex"
            >
              Apply Now 2026-27
            </Button>

            {/* Mobile Menu Trigger */}
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  );
}
