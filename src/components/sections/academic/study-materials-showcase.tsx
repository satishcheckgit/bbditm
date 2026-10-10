"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight, BookOpen, ArrowRight, Download } from "lucide-react";

export interface StudyMaterialCardItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  tag: string;
  bgClass: string;
  hoverBgClass: string;
  borderClass: string;
  pillBg: string;
  pillText: string;
  circleRingColor: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  ctaText: string;
  itemCount: string;
}

const DEFAULT_STUDY_MATERIALS: StudyMaterialCardItem[] = [
  {
    id: "syllabus-blueprints",
    category: "AKTU Scheme",
    title: "Syllabus & Blueprint",
    subtitle: "Complete credit mapping & unit plans for all 8 semesters.",
    tag: "2025–26 Scheme",
    bgClass: "bg-[#FEF5E7]",
    hoverBgClass: "hover:bg-[#FDF0D7]",
    borderClass: "border-[#F9DCAB]/60",
    pillBg: "bg-[#FCEFD2]",
    pillText: "text-[#B45309]",
    circleRingColor: "ring-[#F8DCAB]",
    imageSrc: "/study-materials/syllabus-blueprints.jpg",
    imageAlt: "AKTU Engineering Syllabus Handbook and Module Blueprints",
    href: "/academics",
    ctaText: "View Syllabus",
    itemCount: "8 Semesters",
  },
  {
    id: "pyq-papers",
    category: "Exam Archive",
    title: "Previous Year Papers",
    subtitle: "Past 10 years AKTU end-sem question papers with answers.",
    tag: "10-Yr Solved",
    bgClass: "bg-[#F3EBFB]",
    hoverBgClass: "hover:bg-[#ECE0F9]",
    borderClass: "border-[#E3CFF8]/60",
    pillBg: "bg-[#EBDDF9]",
    pillText: "text-[#7C3AED]",
    circleRingColor: "ring-[#E5D2F9]",
    imageSrc: "/study-materials/previous-year-papers.jpg",
    imageAlt: "Previous Year AKTU University Semester Question Papers",
    href: "/academics",
    ctaText: "Download Papers",
    itemCount: "150+ Papers",
  },
  {
    id: "sample-papers",
    category: "Practice Sets",
    title: "Sample Question Papers",
    subtitle: "Departmental model test papers with handwritten step solutions.",
    tag: "Model Solutions",
    bgClass: "bg-[#E9F3FE]",
    hoverBgClass: "hover:bg-[#DEEEFD]",
    borderClass: "border-[#CCE2FC]/60",
    pillBg: "bg-[#DDEBFC]",
    pillText: "text-[#0284C7]",
    circleRingColor: "ring-[#CEE3FC]",
    imageSrc: "/study-materials/sample-model-papers.jpg",
    imageAlt: "Sample and Model Question Papers with Solutions",
    href: "/academics",
    ctaText: "Practice Sets",
    itemCount: "60+ Tests",
  },
  {
    id: "reference-books",
    category: "Digital Library",
    title: "NCERT & Books",
    subtitle: "AICTE prescribed engineering textbooks & fundamental volumes.",
    tag: "Free E-Books",
    bgClass: "bg-[#E7F8EE]",
    hoverBgClass: "hover:bg-[#DAF5E3]",
    borderClass: "border-[#C4EFD3]/60",
    pillBg: "bg-[#D9F4E3]",
    pillText: "text-[#059669]",
    circleRingColor: "ring-[#C6EFD4]",
    imageSrc: "/study-materials/reference-textbooks.jpg",
    imageAlt: "NCERT and Engineering Core Reference Textbooks",
    href: "/academics",
    ctaText: "Browse Library",
    itemCount: "200+ Books",
  },
  {
    id: "lab-manuals",
    category: "Practical Records",
    title: "Important Lab Manuals",
    subtitle: "Step-by-step practical guides, circuit schematics & code files.",
    tag: "Viva Ready",
    bgClass: "bg-[#EFEAFF]",
    hoverBgClass: "hover:bg-[#E5DEFE]",
    borderClass: "border-[#DBD0FD]/60",
    pillBg: "bg-[#E3DAFD]",
    pillText: "text-[#6D28D9]",
    circleRingColor: "ring-[#DDD1FD]",
    imageSrc: "/study-materials/lab-practical-manuals.jpg",
    imageAlt: "Laboratory Practical Manuals and Circuit Experiment Guides",
    href: "/academics",
    ctaText: "Open Manuals",
    itemCount: "45+ Manuals",
  },
  {
    id: "lab-manualss",
    category: "Practical Records",
    title: "Important Lab Manuals",
    subtitle: "Step-by-step practical guides, circuit schematics & code files.",
    tag: "Viva Ready",
    bgClass: "bg-[#EFEAFF]",
    hoverBgClass: "hover:bg-[#E5DEFE]",
    borderClass: "border-[#DBD0FD]/60",
    pillBg: "bg-[#E3DAFD]",
    pillText: "text-[#6D28D9]",
    circleRingColor: "ring-[#DDD1FD]",
    imageSrc: "/study-materials/lab-practical-manuals.jpg",
    imageAlt: "Laboratory Practical Manuals and Circuit Experiment Guides",
    href: "/academics",
    ctaText: "Open Manuals",
    itemCount: "45+ Manuals",
  },
  {
    id: "lab-manualsss",
    category: "Practical Records",
    title: "Important Lab Manuals",
    subtitle: "Step-by-step practical guides, circuit schematics & code files.",
    tag: "Viva Ready",
    bgClass: "bg-[#EFEAFF]",
    hoverBgClass: "hover:bg-[#E5DEFE]",
    borderClass: "border-[#DBD0FD]/60",
    pillBg: "bg-[#E3DAFD]",
    pillText: "text-[#6D28D9]",
    circleRingColor: "ring-[#DDD1FD]",
    imageSrc: "/study-materials/lab-practical-manuals.jpg",
    imageAlt: "Laboratory Practical Manuals and Circuit Experiment Guides",
    href: "/academics",
    ctaText: "Open Manuals",
    itemCount: "45+ Manuals",
  },
];

export interface StudyMaterialsShowcaseProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  materials?: StudyMaterialCardItem[];
}

export function StudyMaterialsShowcase({
  title = "Study Materials",
  eyebrow = "Student Academic Repository",
  description = "Official syllabus blueprints, past university examination papers, model question banks, and departmental laboratory manuals.",
  materials = DEFAULT_STUDY_MATERIALS,
}: StudyMaterialsShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-14 sm:py-14 bg-white relative overflow-hidden">
      <Container>
        {/* Header with Title and Apple Circular Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-2 max-w-2xl">
            {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff1f3] text-[#e41d43] text-xs font-semibold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </div> */}

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.2] font-heading">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed pt-0.5">
              {description}
            </p>
          </div>
        </div>

        {/* Horizontal Carousel of Pastel Cards with Floating Navigation Controls */}
        <div className="relative group/carousel">
          {/* Floating Left Button on Carousel Track (Shifted outward to edge, never overlaps card) */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left in study materials"
              className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] border border-black/10 shadow-[0_6px_20px_rgba(0,0,0,0.16)] flex items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 mr-0.5" />
            </button>
          )}

          {/* Floating Right Button on Carousel Track (Shifted outward to edge, never overlaps card) */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right in study materials"
              className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] shadow-[0_6px_20px_rgba(0,0,0,0.28)] flex items-center justify-center transition-all duration-200 active:scale-90 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 ml-0.5" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {materials.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`snap-start shrink-0 w-[220px] sm:w-[245px] md:w-[260px] h-[370px] sm:h-[390px] rounded-[24px] ${item.bgClass} ${item.hoverBgClass} border ${item.borderClass} p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] group relative overflow-hidden`}
                >
                  {/* Top Section: Tag and Bold Title */}
                  <div className="space-y-3 z-10">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${item.pillBg} ${item.pillText}`}
                      >
                        {item.tag}
                      </span>

                      <span className="text-[11px] font-medium text-[#86868b]">
                        {item.itemCount}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-[19px] font-semibold text-[#1d1d1f] font-heading tracking-tight leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Bottom Circular Window (Distinct Signature Feature from User Design) */}
                  <div className="relative mt-auto pt-2 flex flex-col items-center">
                    {/* Glowing Circular Portal Ring with Grounded 3D Subject */}
                    <div
                      className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-4 ${item.circleRingColor} flex items-center justify-center p-2 transition-transform duration-500 ease-out group-hover:scale-105`}
                    >
                      {/* Inner subtle radial highlight */}
                      <div className="absolute inset-0 bg-radial from-white via-white/80 to-[#fbfbfd] pointer-events-none" />

                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          sizes="160px"
                          className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                          style={{
                            filter:
                              "drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.06))",
                          }}
                        />
                      </div>
                    </div>

                    {/* Micro Pill CTA on Hover / Always accessible */}
                    <div className="mt-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#1d1d1f] border border-black/[0.08] shadow-[0_2px_6px_rgba(0,0,0,0.04)] hover:bg-[#1d1d1f] hover:text-white transition-all duration-200 active:scale-95"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
