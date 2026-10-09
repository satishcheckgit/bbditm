import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NewsItem, UniversityEvent } from "@/types/news";
import { ArrowRight, MapPin, Clock } from "lucide-react";

interface NewsAndEventsProps {
  news: NewsItem[];
  events: UniversityEvent[];
}

export function NewsAndEvents({ news, events }: NewsAndEventsProps) {
  const featuredNews = news[0];
  const secondaryNews = news.slice(1, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#f5f5f7]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Latest News (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-end justify-between pb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e41d43]">
                  Campus Updates
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] mt-0.5 font-heading">
                  Latest News & Announcements
                </h2>
              </div>
              <Link
                href="/news"
                className="text-xs font-semibold text-[#e41d43] hover:text-[#c21334] inline-flex items-center gap-1"
              >
                <span>All news</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Featured Article */}
            {featuredNews && (
              <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="inline-block text-[11px] font-semibold text-[#e41d43] bg-[#fff1f3] px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {featuredNews.category} · {featuredNews.publishedAt}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1d1d1f] hover:text-[#243d77] transition-colors leading-snug font-heading tracking-tight">
                  <Link href={`/news/${featuredNews.slug}`}>
                    {featuredNews.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-[#6e6e73] mt-2.5 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
              </div>
            )}

            {/* Supporting News List */}
            <div className="space-y-3">
              {secondaryNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[18px] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-300"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">
                      {item.category} · {item.publishedAt}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1d1d1f] hover:text-[#243d77] transition-colors mt-0.5 font-heading tracking-tight">
                      <Link href={`/news/${item.slug}`}>{item.title}</Link>
                    </h4>
                  </div>
                  <Link
                    href={`/news/${item.slug}`}
                    className="text-xs font-semibold text-[#e41d43] hover:text-[#c21334] shrink-0 inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Upcoming University Events (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-end justify-between pb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e41d43]">
                  Calendar
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] mt-0.5 font-heading">
                  Upcoming Events
                </h2>
              </div>
              <Link
                href="/events"
                className="text-xs font-semibold text-[#e41d43] hover:text-[#c21334] inline-flex items-center gap-1"
              >
                <span>Full schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white rounded-[18px] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
                >
                  {/* Date Badge */}
                  <div className="w-14 rounded-[14px] bg-[#f5f5f7] text-[#243d77] p-2 text-center shrink-0 shadow-sm">
                    <span className="block text-xs font-bold text-[#e41d43] uppercase">
                      {ev.date.split(" ")[0]}
                    </span>
                    <span className="block text-lg font-bold leading-none mt-0.5 text-[#243d77] font-heading">
                      {ev.date.split(" ")[1]?.replace(",", "")}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
                      {ev.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#1d1d1f] mt-0.5 leading-snug font-heading tracking-tight">
                      {ev.title}
                    </h4>
                    <div className="mt-1.5 text-xs text-[#6e6e73] space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#86868b] shrink-0" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#86868b] shrink-0" />
                        <span className="truncate">{ev.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
