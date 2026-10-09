import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export interface AcademicFacilityItem {
  id: string;
  category: string;
  badge: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  highlight: string;
  title: string;
  description: string;
  specs: string[];
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  statusText?: string;
}

const DEFAULT_FACILITIES: AcademicFacilityItem[] = [
  {
    id: "ai-supercomputing",
    category: "AI & Neural Compute",
    badge: "Center of Excellence",
    accentColor: "#e41d43",
    accentBg: "bg-[#fff1f3]",
    accentText: "text-[#e41d43]",
    highlight: "Supercomputing & AI Rigs.",
    title: "NVIDIA-accelerated deep learning workstation clusters.",
    description:
      "High-throughput tensor core clusters engineered for training deep learning models, natural language architectures, and real-time computer vision inference pipelines.",
    specs: ["NVIDIA CUDA Cores", "PyTorch & TensorFlow Rigs", "Edge TPU Prototyping"],
    imageSrc: "/academic/ai-supercomputing.jpg",
    imageAlt: "Futuristic Academic AI and Supercomputing Workstation Rig",
    ctaText: "Explore AI Computing",
    ctaHref: "/programmes/btech-cse-ai",
    statusText: "Active Research Lab",
  },
  {
    id: "robotics-automation",
    category: "Robotics & IoT",
    badge: "Industry 4.0 Center",
    accentColor: "#00875a",
    accentBg: "bg-[#eaf7ee]",
    accentText: "text-[#00875a]",
    highlight: "Robotics & Smart Mechatronics.",
    title: "6-axis precision robotic arm articulators & telemetry rigs.",
    description:
      "Automated kinematics testing stations for industrial micro-assembly simulation, autonomous path planning, and ROS2 sensor-fusion navigation workflows.",
    specs: ["6-Axis Kinematics", "ROS2 Architecture", "Micro-Servo Telemetry"],
    imageSrc: "/academic/robotics-automation.jpg",
    imageAlt: "Academic Robotic Articulated Arm Manipulation Workstation",
    ctaText: "View Robotics Wing",
    ctaHref: "/programmes/btech-me",
    statusText: "Hands-on Practical Facility",
  },
  {
    id: "cloud-cyberdefense",
    category: "Cloud & Cyber Range",
    badge: "Security Intelligence Hub",
    accentColor: "#0071e3",
    accentBg: "bg-[#eef5fd]",
    accentText: "text-[#0071e3]",
    highlight: "Cloud & Cyber Defense.",
    title: "Zero-trust sandbox topologies & threat mitigation consoles.",
    description:
      "Sandboxed server consoles and security testbeds for packet-level traffic forensics, multi-cloud Kubernetes orchestration, and defensive intrusion prevention analysis.",
    specs: ["Zero-Trust Sandbox", "Multi-Cloud Fabric", "Threat Intelligence Pods"],
    imageSrc: "/academic/cloud-cyberdefense.jpg",
    imageAlt: "Academic Cloud Computing and Cyber Defense Console",
    ctaText: "Discover Cyber Range",
    ctaHref: "/programmes/btech-cse",
    statusText: "AKTU & AICTE Certified",
  },
  {
    id: "vlsi-microelectronics",
    category: "VLSI & Silicon Design",
    badge: "Microelectronics Suite",
    accentColor: "#8944ab",
    accentBg: "bg-[#f8f0fc]",
    accentText: "text-[#8944ab]",
    highlight: "VLSI & Microelectronics.",
    title: "Silicon wafer probing & sub-micron integrated circuit synthesis.",
    description:
      "Precision optical microscopy stations, FPGA emulation boards, and Cadence-compatible toolchains for physical IC verification, layout design, and silicon simulation.",
    specs: ["300mm Wafer Probing", "FPGA Prototyping", "Cadence Toolchains"],
    imageSrc: "/academic/vlsi-microelectronics.jpg",
    imageAlt: "Academic Microelectronics and VLSI Silicon Chip Test Station",
    ctaText: "Explore VLSI Lab",
    ctaHref: "/programmes/btech-ece",
    statusText: "Hardware Research Wing",
  },
];

export interface AcademicGraphicShowcaseProps {
  facilities?: AcademicFacilityItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
  variant?: "white" | "parchment";
}

export function AcademicGraphicShowcase({
  facilities = DEFAULT_FACILITIES,
  title = "Infrastructure engineered for breakthrough innovation.",
  eyebrow = "Advanced Laboratories & Compute Centers",
  description = "Beyond textbook theory, BBDITM students engineer solutions on enterprise-grade hardware, AI acceleration clusters, and precision research rigs.",
  variant = "white",
}: AcademicGraphicShowcaseProps) {
  const bgClass = variant === "white" ? "bg-white" : "bg-[#F5F5F7]";

  return (
    <section className={`py-16 sm:py-24 ${bgClass} relative overflow-hidden`}>
      <Container>
        {/* Apple-style Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff1f3] text-[#e41d43] text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.12] font-heading">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed pt-1">
            {description}
          </p>
        </div>

        {/* 2x2 Bento Grid with Dual-Shadow Physics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {facilities.map((facility) => {
            return (
              <article
                key={facility.id}
                className="group apple-card-3d bg-white rounded-[26px] p-6 sm:p-8 flex flex-col justify-between relative border border-black/[0.04] transition-all duration-300"
              >
                {/* Top Metatag Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${facility.accentBg} ${facility.accentText}`}
                  >
                    <span>{facility.category}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#86868b]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00875a]" />
                    {facility.badge}
                  </span>
                </div>

                {/* Typography Header */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] font-heading tracking-tight leading-snug">
                    <span className={facility.accentText}>
                      {facility.highlight}
                    </span>{" "}
                    <span>{facility.title}</span>
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#6e6e73] leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* 3D Product Render Stage (Apple Dual-Shadow Physics) */}
                <div className="my-6 relative w-full h-64 sm:h-72 rounded-[20px] bg-gradient-to-b from-[#fbfbfd] to-[#f5f5f7]/80 flex items-center justify-center overflow-hidden border border-black/[0.03] group-hover:bg-[#fbfbfd] transition-colors duration-300">
                  {/* Subtle ambient radial backlight */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-35"
                    style={{
                      background: `radial-gradient(circle at 50% 55%, ${facility.accentColor} 0%, transparent 68%)`,
                    }}
                  />

                  {/* Rendered 3D asset with grounded drop-shadow */}
                  <div className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center">
                    <Image
                      src={facility.imageSrc}
                      alt={facility.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      style={{
                        filter:
                          "drop-shadow(0px 10px 14px rgba(0, 0, 0, 0.15)) drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.08))",
                      }}
                      priority={facility.id === "ai-supercomputing"}
                    />
                  </div>
                </div>

                {/* Hardware Spec Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {facility.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f] border border-black/[0.04]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA & Status Bar */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between gap-4">
                  <Link
                    href={facility.ctaHref}
                    className="group/btn inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#e41d43] text-white hover:bg-[#c21334] transition-all duration-200 active:scale-95 shadow-[0_2px_8px_rgba(228,29,67,0.22)]"
                  >
                    <span>{facility.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </Link>

                  {facility.statusText && (
                    <span className="text-xs text-[#86868b] font-medium hidden sm:inline">
                      {facility.statusText}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
