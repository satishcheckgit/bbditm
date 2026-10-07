export const siteConfig = {
  name: "BBDITM — Babu Banarasi Das Institute of Technology & Management",
  shortName: "BBDITM",
  tagline: "Excellence in Engineering, Management & Technology",
  description:
    "An institutional flagship of Babu Banarasi Das Educational Group offering accredited engineering and management programmes with modern labs, distinguished faculty, and comprehensive campus life.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bbditm.ac.in",
  affiliation: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Approved by AICTE, New Delhi",
  contact: {
    phone: "+91 522 6196222",
    admissionsPhone: "+91 522 6196300",
    email: "info@bbditm.ac.in",
    admissionsEmail: "admissions@bbditm.ac.in",
    address: "BBD City, Faizabad Road, Lucknow, Uttar Pradesh 226028, India",
  },
  links: {
    applyNow: "/admissions",
    enquiry: "/contact",
    brochure: "/downloads/bbditm-information-brochure.pdf",
    portal: "https://erp.bbdu.ac.in",
  },
  social: {
    facebook: "https://facebook.com/bbditm",
    twitter: "https://twitter.com/bbditm",
    linkedin: "https://linkedin.com/school/bbditm",
    instagram: "https://instagram.com/bbditm",
    youtube: "https://youtube.com/@bbditm",
  },
} as const;

export type SiteConfig = typeof siteConfig;
