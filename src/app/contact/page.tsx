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
          <span className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">
            Get In Touch
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243d77] mt-2 tracking-tight font-heading">
            Admissions Desk & Campus Contacts
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Have questions regarding programmes, eligibility criteria, AKTU counseling (College Code 054), or campus visits? Our admissions team is here to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[3px] bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#243d77] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#243d77]">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/60">
                <Phone className="w-5 h-5 text-[#243d77] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#243d77]">Admissions Helplines</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href={`tel:${siteConfig.contact.admissionsPhone}`} className="hover:text-[#e41d43] font-semibold block transition-colors">
                      {siteConfig.contact.admissionsPhone}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#e41d43] block transition-colors">
                      General: {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/60">
                <Mail className="w-5 h-5 text-[#243d77] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#243d77]">Email Desks</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href={`mailto:${siteConfig.contact.admissionsEmail}`} className="hover:text-[#e41d43] font-semibold block transition-colors">
                      {siteConfig.contact.admissionsEmail}
                    </a>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#e41d43] block transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/60">
                <Clock className="w-5 h-5 text-[#243d77] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#243d77]">Counseling Office Hours</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Monday to Saturday: 9:00 AM – 5:30 PM IST
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-[3px] bg-slate-50 border border-slate-200 text-xs text-gray-700 space-y-1">
              <span className="font-bold text-[#243d77] block">AKTU UP-TAC Counseling Reference</span>
              <p className="leading-relaxed">
                Fill College Code <strong className="text-[#e41d43]">054</strong> (Babu Banarasi Das Institute of Technology & Management) as your preferred institutional choice during state counseling rounds.
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[3px] p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#243d77] mb-2 font-heading">
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
