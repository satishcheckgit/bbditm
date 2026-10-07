import { Metadata } from "next";
import { getNews, getEvents } from "@/data";
import { NewsAndEvents } from "@/components/sections/news/news-and-events";

export const metadata: Metadata = {
  title: "News & Events — BBDITM Lucknow",
  description: "Official notifications, campus news, symposia, and academic calendar events.",
};

export default async function NewsPage() {
  const news = await getNews();
  const events = await getEvents();

  return (
    <div className="bg-white">
      <NewsAndEvents news={news} events={events} />
    </div>
  );
}
