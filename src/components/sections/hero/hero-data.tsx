import React from "react";

export interface HeroSlideMedia {
  type?: "card" | "video" | "image" | "custom";
  badge?: string;
  badgeVariant?: "red" | "blue" | "white" | "emerald";
  title: string;
  subtitle?: string;
  description?: string;
  videoUrl?: string; // Optional direct MP4/WebM or embed URL
  videoPoster?: string;
  videoDuration?: string;
  imageUrl?: string; // Option 1: Right-side image banner URL
  imageAlt?: string;
  highlights?: Array<{
    tag?: string;
    title: string;
    desc: string;
  }>;
  ctaText?: string;
  ctaLink?: string;
  customContent?: React.ReactNode;
}

export interface FullHeroSlide {
  id: string;
  layout?: "split" | "banner"; // "split" = 2-column (default), "banner" = full-width wide banner
  badge?: string;
  badgeVariant?: "red" | "blue" | "emerald" | "outline";
  headline?: React.ReactNode;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  media?: HeroSlideMedia;
  backgroundImage?: string; // Tareeqa B: Per-slide ambient background image
  backgroundOpacity?: number; // Optional opacity (default: 0.18 for crisp text readability)

  // Option 2: Full-Width Image or Video Banner props (used when layout === "banner")
  bannerImage?: string; // Image path or URL for full banner (or poster fallback for video)
  bannerVideo?: string; // Video URL (e.g. MP4, WebM) for full-width background banner video
  bannerAlt?: string;
  bannerLink?: string; // Clickable link for the entire banner
  bannerAspect?: string; // Exact aspect ratio to prevent cropping on mobile & tablet, e.g. "aspect-[1920/700]"
  fullBleed?: boolean; // If true, banner stretches edge-to-edge full width
  showOverlay?: boolean; // If true, renders text overlay & gradient. Default: false for clean graphical banners
}

// Production-grade curated default slides (supporting Cards, Video, Image Card & Full Banner)
export const defaultFullHeroSlides: FullHeroSlide[] = [
  {
    id: "academic-depth",
    layout: "split",
    // badge: "ADMISSIONS 2026-27",
    badgeVariant: "red",
    backgroundImage: "/banner/slideonec.webp",

    headline: (
      <>
        Where technical depth meets{" "}
        <span className="text-[#e41d43]">real-world leadership.</span>
      </>
    ),
    subtitle:
      "Study at Babu Banarasi Das Institute of Technology & Management. Empowering engineers and managers with industry-aligned curricula, specialized research labs, and an active campus community.",
    primaryCta: {
      label: "Explore Programmes",
      href: "/programmes",
    },
    secondaryCta: {
      label: "Admissions 2026-27",
      href: "/admissions",
    },
    stats: [
      { value: "25+", label: "Years of Academic Legacy" },
      { value: "₹ 44.15L", label: "Highest Salary Package" },
      { value: "100+", label: "Acres Campus City" },
    ],
    // media: {
    //   type: "image",
    //   badge: "AICTE APPROVED",

    //   badgeVariant: "red",
    //   title: "Academic Excellence",
    //   subtitle: "BBDITM Lucknow",
    //   description: "AKTU College Code: 054 · NBA Accredited Standards",
    //   highlights: [
    //     {
    //       tag: "FLAGSHIP SCHOOL",
    //       title: "Computer Science & Engineering",
    //       desc: "With specialized tracks in AI, Machine Learning, and Data Science.",
    //     },
    //     {
    //       tag: "INDUSTRY PARTNERSHIPS",
    //       title: "Top Corporate Recruiters",
    //       desc: "TCS, Infosys, Wipro, Capgemini, Cognizant, and Samsung R&D.",
    //     },
    //   ],
    //   ctaText: "Talk to Admission Team",
    //   ctaLink: "/contact",
    // },
  },
  {
    id: "campus-infrastructure",
    layout: "split",
    badge: "100+ ACRE SMART CAMPUS",
    badgeVariant: "blue",
    headline: (
      <>
        A 100+ acre smart campus{" "}
        <span className="text-[#e41d43]">engineered for discovery.</span>
      </>
    ),
    subtitle:
      "Immerse yourself in world-class infrastructure — NVIDIA supercomputing clusters, drone robotics labs, AC digital central library, and Olympic-standard sports arenas on Faizabad Road.",
    primaryCta: {
      label: "Explore Campus Facilities",
      href: "/campus-life",
    },
    secondaryCta: {
      label: "Virtual Campus Tour",
      href: "/contact",
    },
    stats: [
      { value: "100+", label: "Acres Lush Green Campus" },
      { value: "60+", label: "Advanced Labs & Hubs" },
      { value: "24/7", label: "Hostel & Smart Amenities" },
    ],
    media: {
      type: "video",
      badge: "CAMPUS TOUR",
      badgeVariant: "white",
      title: "100+ Acre Smart Campus",
      subtitle: "Faizabad Road, Lucknow",
      videoDuration: "4K Campus Walkthrough",
      description:
        "State-of-the-art supercomputing labs, AC digital library, Olympic-standard sports arena, and modern residential student hostels.",
      highlights: [
        {
          tag: "RESEARCH & LABS",
          title: "Advanced Computing & IoT Hub",
          desc: "NVIDIA-powered GPU clusters for deep learning research and drone robotics.",
        },
        {
          tag: "STUDENT LIFE",
          title: "Integrated Campus City",
          desc: "24/7 banking, medical center, cafeteria, and national stadium facilities.",
        },
      ],
      ctaText: "Explore Campus Facilities",
      ctaLink: "/campus-life",
    },
  },
  {
    id: "career-placements",
    layout: "split",
    badge: "RECORD-BREAKING PLACEMENTS",
    badgeVariant: "emerald",
    headline: (
      <>
        Launching global careers with{" "}
        <span className="text-[#e41d43]">record-breaking placements.</span>
      </>
    ),
    subtitle:
      "Our proactive Career Development Cell bridges student ambition with Fortune 500 industry leaders through rigorous tech interview prep, hackathons, and corporate mentorship.",
    primaryCta: {
      label: "View Placement Records",
      href: "/placements",
    },
    secondaryCta: {
      label: "Top Recruiters",
      href: "/placements#recruiters",
    },
    stats: [
      { value: "₹ 44.15L", label: "Highest Salary Package" },
      { value: "850+", label: "Offers in 2024-25" },
      { value: "180+", label: "Corporate Recruiters" },
    ],
    media: {
      type: "card",
      badge: "SESSION 2026-27",
      badgeVariant: "emerald",
      title: "Career Development Cell",
      subtitle: "Transforming Potential into Leadership",
      description: "₹44.15 LPA Highest Package · 850+ Offers Across 180+ Recruiters",
      highlights: [
        {
          tag: "TOP HIGHEST PACKAGE",
          title: "₹ 44.15 Lakhs / Annum",
          desc: "Record-breaking software engineering offer secured at global tech leader.",
        },
        {
          tag: "PRE-PLACEMENT GROOMING",
          title: "Technical Mock Interviews",
          desc: "Corporate mentorship by alumni working at Amazon, Google, and Microsoft.",
        },
      ],
      ctaText: "View Placements Report",
      ctaLink: "/placements",
    },
  },
  {
    id: "admissions-wide-banner",
    layout: "banner",
    fullBleed: true,
    showOverlay: false,
    bannerImage: "/banner/banner.jpg",
    bannerAlt: "BBDITM AKTU Merit List Academic Session 2024-25, 2025-26",
    bannerLink: "/admissions",
    bannerAspect: "aspect-[1920/700]",
  },

  {
    id: "placed-banner",
    layout: "banner",
    fullBleed: true,
    showOverlay: false,
    bannerImage: "/banner/placed.webp",
    bannerAlt: "BBDITM AKTU Students",
    bannerLink: "/contact",
    bannerAspect: "aspect-[1920/900]",
  },
  // {
  //   id: "campus-full-video-banner",
  //   layout: "banner",
  //   fullBleed: true,
  //   showOverlay: false,
  //   bannerVideo: "",
  //   bannerImage: "/banner/poster.jpg",
  //   bannerAspect: "aspect-[1920/700]",
  // }
];
