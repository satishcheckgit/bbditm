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
    <section className="py-20 sm:py-28 bg-[var(--color-surface-soft)]/60 border-t border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Latest News (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-end justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
                  Campus Updates
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mt-1">
                  Latest News & Announcements
                </h2>
              </div>
              <Link
                href="/news"
                className="text-xs sm:text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-800)] inline-flex items-center gap-1"
              >
                <span>All news</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Featured Article */}
            {featuredNews && (
              <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-[0_2px_8px_rgb(0_0_0/0.03)] hover:shadow-[0_12px_28px_rgb(20_20_40/0.06)] transition-all">
                <span className="inline-block text-[11px] font-bold text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                  {featuredNews.category} · {featuredNews.publishedAt}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-ink)] hover:text-[var(--color-brand-600)] transition-colors">
                  <Link href={`/news/${featuredNews.slug}`}>
                    {featuredNews.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
              </div>
            )}

            {/* Supporting News List */}
            <div className="space-y-4">
              {secondaryNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-purple-200 transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {item.category} · {item.publishedAt}
                    </span>
                    <h4 className="text-base font-bold text-[var(--color-ink)] hover:text-[var(--color-brand-600)] transition-colors mt-0.5">
                      <Link href={`/news/${item.slug}`}>{item.title}</Link>
                    </h4>
                  </div>
                  <Link
                    href={`/news/${item.slug}`}
                    className="text-xs font-semibold text-[var(--color-brand-600)] shrink-0 inline-flex items-center gap-1"
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
            <div className="flex items-end justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
                  Calendar
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mt-1">
                  Upcoming Events
                </h2>
              </div>
              <Link
                href="/events"
                className="text-xs sm:text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-800)] inline-flex items-center gap-1"
              >
                <span>Full schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-[0_2px_8px_rgb(0_0_0/0.03)] hover:shadow-md transition-all flex items-start gap-4"
                >
                  {/* Date Badge */}
                  <div className="w-16 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-800)] border border-[var(--color-brand-100)] p-2.5 text-center shrink-0">
                    <span className="block text-xs font-bold text-[var(--color-brand-600)] uppercase">
                      {ev.date.split(" ")[0]}
                    </span>
                    <span className="block text-xl font-extrabold leading-none mt-0.5">
                      {ev.date.split(" ")[1]?.replace(",", "")}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {ev.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[var(--color-ink)] mt-0.5 leading-snug">
                      {ev.title}
                    </h4>
                    <div className="mt-2 text-xs text-gray-500 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
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
