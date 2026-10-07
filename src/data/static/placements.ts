import { PlacementData } from "@/types/placement";

export const staticPlacementData: PlacementData = {
  heroStats: [
    {
      value: "92%+",
      label: "Placement Assistance Rate",
      subtext: "Eligible students receiving offers across sectors",
    },
    {
      value: "₹ 44.15 LPA",
      label: "Highest Package",
      subtext: "Secured by engineering graduates",
    },
    {
      value: "₹ 5.8 LPA",
      label: "Average Package",
      subtext: "Consistent growth across core & tech cohorts",
    },
    {
      value: "250+",
      label: "Annual Corporate Recruiters",
      subtext: "Participating companies visiting campus",
    },
  ],
  topRecruiters: [
    { name: "Tata Consultancy Services (TCS)", sector: "Information Technology" },
    { name: "Infosys", sector: "Software & Consulting" },
    { name: "Wipro Technologies", sector: "IT Services" },
    { name: "Capgemini", sector: "Cloud & Technology Services" },
    { name: "HCL Technologies", sector: "Enterprise Technology" },
    { name: "Cognizant", sector: "Digital Engineering" },
    { name: "Tech Mahindra", sector: "Telecom & Software" },
    { name: "Paytm", sector: "Fintech & Payments" },
    { name: "L&T Infotech", sector: "Engineering & IT" },
    { name: "Samsung R&D", sector: "Consumer Tech & AI" },
    { name: "Byju's / Think & Learn", sector: "Edtech & Education" },
    { name: "Adani Group", sector: "Infrastructure & Energy" },
  ],
  studentStories: [
    {
      id: "story-1",
      studentName: "Aditya Sharma",
      programme: "B.Tech Computer Science & Engineering",
      batch: "Batch of 2024",
      company: "Cognizant",
      packageText: "Software Engineer",
      quote:
        "The coding culture and faculty mentorship at BBDITM gave me practical exposure to modern frameworks and algorithms that directly cleared my campus interviews.",
    },
    {
      id: "story-2",
      studentName: "Priya Srivastava",
      programme: "B.Tech Information Technology",
      batch: "Batch of 2024",
      company: "TCS Digital",
      packageText: "Digital Specialist Engineer",
      quote:
        "From pre-placement aptitude workshops to mock technical interviews by alumni, the Training and Placement Cell supported us at every single step.",
    },
    {
      id: "story-3",
      studentName: "Rohan Verma",
      programme: "Master of Business Administration (MBA)",
      batch: "Batch of 2024",
      company: "HDFC Bank",
      packageText: "Deputy Manager",
      quote:
        "Live industrial case studies and presentations transformed my analytical mindset and prepared me for high-velocity corporate discussions.",
    },
  ],
};
