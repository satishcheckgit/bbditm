import { NewsItem, UniversityEvent } from "@/types/news";

export const staticNews: NewsItem[] = [
  {
    id: "news-1",
    slug: "annual-hackathon-innovate-2026-announced",
    category: "Academic",
    title: "InnovateX 2026: 36-Hour National Level Hackathon Announced at BBDITM",
    excerpt:
      "Over 120 teams from premier institutions across India to participate in solving challenges in AI, sustainability, and smart mobility.",
    publishedAt: "October 12, 2026",
    featured: true,
  },
  {
    id: "news-2",
    slug: "bbditm-signs-mou-cloud-computing-industry",
    category: "Research",
    title: "BBDITM Inks Strategic MoU with Cloud Technology Leaders for Center of Excellence",
    excerpt:
      "The partnership introduces specialized certifications in cloud architecture, DevOps, and microservices directly into the undergraduate curriculum.",
    publishedAt: "September 28, 2026",
    featured: false,
  },
  {
    id: "news-3",
    slug: "campus-placement-drive-2026-kicks-off",
    category: "Placement",
    title: "Phase-1 Campus Placement Drive 2026 Yields 380+ Offers in Opening Fortnight",
    excerpt:
      "Prominent Tier-1 IT services and product engineering companies participate in high-volume hiring rounds on campus.",
    publishedAt: "September 15, 2026",
    featured: false,
  },
];

export const staticEvents: UniversityEvent[] = [
  {
    id: "event-1",
    slug: "tech-symposium-ai-ethics-2026",
    title: "National Symposium on Ethical AI & Autonomous Systems",
    category: "Symposium",
    date: "OCT 24, 2026",
    time: "10:00 AM – 4:00 PM IST",
    location: "BBDITM Central Auditorium, Lucknow",
    description: "Keynote addresses by researchers and industry experts on ethical machine learning deployment.",
  },
  {
    id: "event-2",
    slug: "entrepreneurship-summit-ecell",
    title: "E-Cell Venture Launchpad & Angel Pitch Day",
    category: "Workshop",
    date: "NOV 08, 2026",
    time: "11:00 AM – 5:30 PM IST",
    location: "Incubation & Innovation Hub, Campus 2",
    description: "Student founders present proof-of-concepts to angel investors and seed accelerator mentors.",
  },
  {
    id: "event-3",
    slug: "alumni-reconnect-annual-conclave",
    title: "Annual Alumni Homecoming & Mentorship Conclave",
    category: "Alumni",
    date: "NOV 22, 2026",
    time: "02:00 PM – 8:00 PM IST",
    location: "Dr. Akhilesh Das Gupta Sports Complex",
    description: "Over 500 alumni gather to network, share industry perspectives, and mentor graduating students.",
  },
];
