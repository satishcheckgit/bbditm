"use client";

import React, { useState } from "react";
import { BentoGallery } from "@/components/ui/bento-gallery";
import { DEFAULT_APPLE_GALLERY_ITEMS, BBD_CAMPUS_GALLERY_ITEMS } from "@/data/showcase-gallery";
import { Container } from "@/components/ui/container";
import { ArrowLeft, Layers, Sparkles, Copy, Check, Eye } from "lucide-react";
import Link from "next/link";

export default function GalleryShowcasePage() {
  const [activeTab, setActiveTab] = useState<"apple" | "campus">("apple");
  const [copied, setCopied] = useState(false);

  const sampleUsageCode = `<BentoGallery
  eyebrow="Curated Showcase"
  title="Accessories & Home Entertainment"
  description="Engineered for unmatched acoustic fidelity, immersive visual entertainment, and seamless ecosystem connectivity."
  items={DEFAULT_APPLE_GALLERY_ITEMS}
  enableQuickView={true}
/>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleUsageCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Top Breadcrumb & Switcher Bar */}
      <div className="bg-white border-b border-black/[0.06] sticky top-0 z-40 backdrop-blur-md bg-white/90">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3.5">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span className="text-[#d2d2d7]">/</span>
              <span className="text-xs font-semibold text-[#1d1d1f]">
                Bento Gallery Showcase
              </span>
            </div>

            {/* Showcase Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#e8e8ed] text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab("apple")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "apple"
                    ? "bg-white text-[#1d1d1f] shadow-sm font-semibold"
                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>Apple Store Preset (1:1 Screenshot)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("campus")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "campus"
                    ? "bg-white text-[#1d1d1f] shadow-sm font-semibold"
                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#e41d43]" />
                <span>BBDITM Innovation Labs Preset</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Interactive Bento Gallery */}
      {activeTab === "apple" ? (
        <BentoGallery
          eyebrow="Apple Store Official Grid"
          title="Accessories & Home Entertainment"
          description="Sound that surrounds you. Displays that captivate you. Precision accessories built to elevate every experience."
          items={DEFAULT_APPLE_GALLERY_ITEMS}
          enableQuickView={true}
        />
      ) : (
        <BentoGallery
          eyebrow="BBDITM Innovation Ecosystem"
          title="Advanced Computing & Practical Research Centers"
          description="Next-generation supercomputing rigs, 6-axis precision robotic kinematics, and specialized electronic micro-assembly wings."
          items={BBD_CAMPUS_GALLERY_ITEMS}
          enableQuickView={true}
        />
      )}

      {/* Developer Reusability Documentation Section */}
      <div className="bg-white border-t border-black/[0.06] py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight">
                  How to Reuse This Component Anywhere
                </h3>
                <p className="text-xs sm:text-sm text-[#6e6e73] mt-1">
                  Import <code className="text-[#0071e3] font-mono">BentoGallery</code> from <code className="text-[#0071e3] font-mono">@/components/ui/bento-gallery</code> and supply your items array.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 text-xs font-semibold text-[#1d1d1f] hover:bg-neutral-50 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 sm:p-5 rounded-2xl bg-[#1d1d1f] text-[#f5f5f7] text-xs font-mono overflow-x-auto leading-relaxed shadow-inner">
              {sampleUsageCode}
            </pre>
          </div>
        </Container>
      </div>
    </div>
  );
}
