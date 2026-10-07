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
import Image from "next/image";

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
        className={`w-full border-b transition-all duration-300 ${isScrolled
          ? "bg-white/85 backdrop-blur-xl border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "bg-white/90 backdrop-blur-md border-black/[0.05]"
          }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Institutional Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap- group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43] rounded-full p-1"
            aria-label={`${siteConfig.shortName} Home`}
          >
            {/* Elegant Emblem Badge */}
            <div className=" flex items-center justify-center">
              <Image src="/logo/bbditm_logo.png" alt="logo" width={100} height={100} className="rounded-none" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#86868b] tracking-wider uppercase mt-1">
                BBD ITM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
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
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${isActive
                      ? "text-[#e41d43] bg-[#fff1f3]"
                      : "text-[#1d1d1f] hover:text-[#243d77] hover:bg-[#f5f5f7]"
                      }`}
                  >
                    <span>{item.title}</span>
                    {hasFlyout && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180 text-[#e41d43]" : "text-[#86868b]"
                          }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasFlyout && isActive && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[680px] xl:w-[760px] animate-in fade-in duration-200"
                      role="region"
                      aria-label={`${item.title} submenu`}
                    >
                      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 overflow-hidden">
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
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#e41d43]">
                                  {group.heading}
                                </h3>
                                <ul className="space-y-1">
                                  {group.items.map((sub) => (
                                    <li key={sub.title}>
                                      <Link
                                        href={sub.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="group/item block p-2 rounded-lg hover:bg-[#f5f5f7] transition-colors"
                                      >
                                        <div className="text-xs font-semibold text-[#1d1d1f] group-hover/item:text-[#243d77] flex items-center justify-between">
                                          <span>{sub.title}</span>
                                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#e41d43]" />
                                        </div>
                                        {sub.description && (
                                          <p className="text-xs text-[#86868b] mt-0.5 line-clamp-1">
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
                            <div className="col-span-4 bg-[#f5f5f7] rounded-xl p-5 border border-[#d2d2d7]/60 flex flex-col justify-between">
                              <div>
                                {item.featured.badge && (
                                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#e41d43] bg-white px-2.5 py-0.5 rounded-full border border-[#e41d43]/20 mb-3">
                                    <Sparkles className="w-3 h-3 text-[#e41d43]" />
                                    {item.featured.badge}
                                  </span>
                                )}
                                <h4 className="text-sm font-bold text-[#243d77] leading-snug">
                                  {item.featured.title}
                                </h4>
                                <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                                  {item.featured.description}
                                </p>
                              </div>
                              <Link
                                href={item.featured.href}
                                onClick={() => setActiveMenu(null)}
                                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#e41d43] hover:text-[#c21334] transition-colors"
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
