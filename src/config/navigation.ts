import { NavItem, UtilityNavItem } from "@/types/navigation";

export const utilityNavItems: UtilityNavItem[] = [
  { title: "Current Students", href: "/students" },
  { title: "Alumni Network", href: "/alumni" },
  { title: "Library & E-Resources", href: "/library" },
  { title: "ERP Portal", href: "https://erp.bbdu.ac.in", isExternal: true },
  { title: "Contact Desk", href: "/contact" },
];

export const mainNavItems: NavItem[] = [
  {
    title: "About",
    href: "/about",
    isMegaMenu: true,
    featured: {
      title: "Legacy of Academic Distinction",
      description: "Founded under the visionary leadership of Dr. Akhilesh Das Gupta, imparting quality professional education for over two decades.",
      href: "/about",
      badge: "Legacy",
    },
    groups: [
      {
        heading: "Institution",
        items: [
          { title: "About BBDITM", href: "/about", description: "Vision, mission, and institutional philosophy" },
          { title: "Leadership & Governance", href: "/about#leadership", description: "Board of governors and academic council" },
          { title: "Approvals & Accreditations", href: "/about#accreditations", description: "AICTE, AKTU affiliation and compliances" },
        ],
      },
      {
        heading: "Campus & Infrastructure",
        items: [
          { title: "Campus Tour", href: "/campus-life", description: "State-of-the-art facilities across BBD City" },
          { title: "Central Library", href: "/library", description: "Digital access, journals, and learning resources" },
          { title: "Mandatory Disclosures", href: "/disclosures", description: "NIRF, AICTE approvals, and public records" },
        ],
      },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    isMegaMenu: true,
    featured: {
      title: "Programmes Built for Tomorrow",
      description: "Industry-aligned curriculum across Computer Science, AI, Mechanical, Electronics, and Management disciplines.",
      href: "/programmes",
      badge: "Admissions 2026-27",
    },
    groups: [
      {
        heading: "Academic Departments",
        items: [
          { title: "Computer Science & Engineering", href: "/schools/computer-science", description: "CSE, AI & ML, Data Science streams" },
          { title: "Information Technology", href: "/schools/information-technology", description: "Software development and cloud systems" },
          { title: "Electronics & Communication", href: "/schools/electronics-communication", description: "VLSI, IoT, and telecommunication" },
          { title: "Management Studies", href: "/schools/management-studies", description: "MBA in Marketing, Finance, HR & Analytics" },
        ],
      },
      {
        heading: "Degree Offerings",
        items: [
          { title: "Undergraduate (B.Tech)", href: "/programmes?level=undergraduate", description: "4-Year full-time engineering degree" },
          { title: "Postgraduate (MBA)", href: "/programmes?level=postgraduate", description: "2-Year comprehensive business management" },
          { title: "Lateral Entry (B.Tech)", href: "/programmes?level=lateral", description: "Direct 2nd year entry for Diploma/B.Sc" },
          { title: "Academic Calendar", href: "/academics#calendar", description: "Schedules, examinations, and term dates" },
        ],
      },
    ],
  },
  {
    title: "Admissions",
    href: "/admissions",
    groups: [
      {
        heading: "Admission Paths",
        items: [
          { title: "Admission Overview 2026", href: "/admissions", description: "Step-by-step application walkthrough" },
          { title: "Eligibility Criteria", href: "/admissions#eligibility", description: "JEE Main / CUET / Direct merit guidelines" },
          { title: "Fee Structure", href: "/admissions#fees", description: "Transparent annual fees and payment schedules" },
          { title: "Scholarships & Aids", href: "/admissions#scholarships", description: "Merit-based and government scholarships" },
        ],
      },
    ],
  },
  {
    title: "Placements",
    href: "/placements",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Campus Life",
    href: "/campus-life",
  },
  {
    title: "News & Events",
    href: "/news",
  },
];
