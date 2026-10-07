import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export function AdmissionCTA() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[var(--color-brand-800)] via-[var(--color-brand-700)] to-[#1b2559] p-8 sm:p-12 lg:p-16 text-white text-center shadow-xl">
          {/* Subtle background ambient light */}
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-purple-200 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for Academic Session 2026-27</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Your next chapter starts here.
            </h2>

            <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Join thousands of aspiring engineers, managers, and innovators shaping the future at Babu Banarasi Das Institute of Technology & Management.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={siteConfig.links.applyNow}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto shadow-lg"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href={`tel:${siteConfig.contact.admissionsPhone}`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10"
              >
                <PhoneCall className="w-4 h-4 mr-1 text-purple-200" />
                <span>Call Helpline: {siteConfig.contact.admissionsPhone}</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
