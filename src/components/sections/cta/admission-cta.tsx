import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export function AdmissionCTA() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#243d77] via-[#1a2c56] to-[#0f1b36] p-8 sm:p-12 lg:p-16 text-white text-center shadow-xl border border-white/10">
          {/* Subtle architectural grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#e41d43]/20 text-xs font-semibold tracking-tight text-rose-200 border border-[#e41d43]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#e41d43]" />
              <span>Admissions Open for Academic Session 2026-27</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-white font-heading leading-tight">
              Your next chapter starts at BBDITM.
            </h2>

            <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Join thousands of aspiring engineers, managers, and innovators shaping the future at Babu Banarasi Das Institute of Technology & Management (AKTU Code 054).
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href={siteConfig.links.applyNow}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-md"
              >
                <span>Apply for Admission 2026</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href={`tel:${siteConfig.contact.admissionsPhone}`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10"
              >
                <PhoneCall className="w-4 h-4 mr-1 text-white" />
                <span>Call Helpline: {siteConfig.contact.admissionsPhone}</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
