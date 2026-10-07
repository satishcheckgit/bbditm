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
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43] rounded-[3px] p-1"
            aria-label={`${siteConfig.shortName} Home`}
          >
            {/* Elegant Emblem Badge */}
            <div className="w-10 h-10 rounded-[3px] bg-[#243d77] border-b-2 border-[#e41d43] flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:bg-[#1a2c56] transition-colors">
              <span>B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#243d77] leading-none">
                BBD<span className="text-[#e41d43]">ITM</span>
              </span>
              <span className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase mt-1">
                BABU BANARASI DAS GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
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
                    className={`px-3 py-2 rounded-[3px] text-[13px] font-bold transition-colors duration-150 inline-flex items-center gap-1 ${
                      isActive
                        ? "text-[#e41d43] bg-[#fff1f3]"
                        : "text-[#243d77] hover:text-[#e41d43] hover:bg-[#f8fafc]"
                    }`}
                  >
                    <span>{item.title}</span>
                    {hasFlyout && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isActive ? "rotate-180 text-[#e41d43]" : "text-slate-400"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasFlyout && isActive && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] xl:w-[760px] animate-in fade-in duration-100"
                      role="region"
                      aria-label={`${item.title} submenu`}
                    >
                      <div className="bg-white rounded-[4px] border border-slate-200 shadow-xl p-6 overflow-hidden">
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
                                <h3 className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">
                                  {group.heading}
                                </h3>
                                <ul className="space-y-1.5">
                                  {group.items.map((sub) => (
                                    <li key={sub.title}>
                                      <Link
                                        href={sub.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="group/item block p-2 rounded-[3px] hover:bg-[#f0f4fa] transition-colors"
                                      >
                                        <div className="text-xs font-bold text-[#1c2438] group-hover/item:text-[#243d77] flex items-center justify-between">
                                          <span>{sub.title}</span>
                                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#e41d43]" />
                                        </div>
                                        {sub.description && (
                                          <p className="text-[11px] text-[#64748b] mt-0.5 line-clamp-1">
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
                            <div className="col-span-4 bg-[#f0f4fa] rounded-[3px] p-5 border border-[#d2def5] flex flex-col justify-between">
                              <div>
                                {item.featured.badge && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e41d43] bg-white px-2 py-0.5 rounded-[3px] border border-[#fecdd3] mb-3">
                                    <Sparkles className="w-3 h-3 text-[#e41d43]" />
                                    {item.featured.badge}
                                  </span>
                                )}
                                <h4 className="text-sm font-bold text-[#243d77] leading-snug">
                                  {item.featured.title}
                                </h4>
                                <p className="text-xs text-[#64748b] mt-2 leading-relaxed">
                                  {item.featured.description}
                                </p>
                              </div>
                              <Link
                                href={item.featured.href}
                                onClick={() => setActiveMenu(null)}
                                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#e41d43] hover:text-[#c21334]"
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
