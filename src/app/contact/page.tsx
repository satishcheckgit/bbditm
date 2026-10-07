import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Desk & Admissions Helpline — BBDITM Lucknow",
  description:
    "Get in touch with BBDITM admissions desk, campus address, phone helplines, email contacts, and visit information.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-ink)] mt-2 tracking-tight">
            Admissions Desk & Campus Contacts
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            Have questions regarding programmes, eligibility criteria, AKTU counseling (College Code 054), or campus visits? Our admissions team is here to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--color-surface-soft)] border border-gray-100 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-brand-600)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/60">
                <Phone className="w-5 h-5 text-[var(--color-brand-600)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Admissions Helplines</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href={`tel:${siteConfig.contact.admissionsPhone}`} className="hover:text-[var(--color-brand-600)] font-semibold block">
                      {siteConfig.contact.admissionsPhone}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[var(--color-brand-600)] block">
                      General: {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/60">
                <Mail className="w-5 h-5 text-[var(--color-brand-600)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Email Desks</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href={`mailto:${siteConfig.contact.admissionsEmail}`} className="hover:text-[var(--color-brand-600)] font-semibold block">
                      {siteConfig.contact.admissionsEmail}
                    </a>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--color-brand-600)] block">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/60">
                <Clock className="w-5 h-5 text-[var(--color-brand-600)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Counseling Office Hours</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Monday to Saturday: 9:00 AM – 5:30 PM IST
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] text-xs text-[var(--color-brand-900)] space-y-1">
              <span className="font-bold block">AKTU UP-TAC Counseling Reference</span>
              <p className="text-gray-700 leading-relaxed">
                Fill College Code <strong>054</strong> (Babu Banarasi Das Institute of Technology & Management) as your preferred institutional choice during state counseling rounds.
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Send an Admission Enquiry
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Our academic counselors will evaluate your eligibility and assist with curriculum questions.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
