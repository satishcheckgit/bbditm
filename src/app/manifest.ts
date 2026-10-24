import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BBDITM — Babu Banarasi Das Institute of Technology & Management",
    short_name: "BBDITM",
    description:
      "Babu Banarasi Das Institute of Technology & Management, Lucknow — AKTU Code 054. Explore programmes, admissions, placements and campus life.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone", "browser"],
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#e41d43",
    categories: ["education", "college", "university"],
    lang: "en-IN",
    dir: "ltr",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Admissions 2026-27",
        short_name: "Admissions",
        description: "Apply for admission",
        url: "/admissions",
        icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }],
      },
      {
        name: "Programmes",
        short_name: "Programmes",
        description: "Explore programmes",
        url: "/programmes",
        icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Contact BBDITM",
        url: "/contact",
        icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }],
      },
    ],
    screenshots: [],
  };
}
