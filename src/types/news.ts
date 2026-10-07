export type ArticleCategory = "Academic" | "Campus" | "Research" | "Placement" | "Event" | "Notice";

export interface NewsItem {
  id: string;
  slug: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  publishedAt: string;
  image?: string;
  featured?: boolean;
}

export interface UniversityEvent {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registerUrl?: string;
}
