import { SchoolSummary } from "@/types/school";

export const staticSchools: SchoolSummary[] = [
  {
    id: "engineering",
    slug: "school-of-engineering-technology",
    name: "School of Engineering & Technology",
    shortName: "Engineering",
    tagline: "Empowering innovation through foundational science and state-of-the-art engineering practices.",
    description:
      "Houses Computer Science, AI & ML, Information Technology, Electronics, Mechanical, and Civil Engineering with specialized research labs and experienced faculty.",
    image: "/images/schools/engineering.jpg",
    programmeCount: 7,
    establishedYear: 1999,
  },
  {
    id: "management",
    slug: "school-of-management-studies",
    name: "Department of Management Studies",
    shortName: "Management",
    tagline: "Cultivating business leaders, strategists, and ethical managers for the global corporate landscape.",
    description:
      "Offers the 2-Year Master of Business Administration (MBA) focusing on finance, marketing, human resources, and business analytics with live case studies.",
    image: "/images/schools/management.jpg",
    programmeCount: 1,
    establishedYear: 2004,
  },
  {
    id: "applied-sciences",
    slug: "applied-sciences-humanities",
    name: "Department of Applied Sciences & Humanities",
    shortName: "Applied Sciences",
    tagline: "Building core scientific temper, mathematical rigor, and professional communication skills.",
    description:
      "Provides foundational training in Physics, Chemistry, Mathematics, Environmental Science, and Professional English for first-year engineering students.",
    image: "/images/schools/sciences.jpg",
    programmeCount: 0,
    establishedYear: 1999,
  },
];
