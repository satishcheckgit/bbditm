"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send } from "lucide-react";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "btech-cse",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    // Client-side simulation of successful submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="text-xl font-bold text-emerald-950">
          Enquiry Received Successfully
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          Thank you for reaching out to BBDITM. Our academic admissions counselor will call you back at <span className="font-semibold">{formData.phone}</span> shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", programme: "btech-cse", message: "" });
          }}
          className="mt-4 text-xs font-bold text-emerald-700 underline underline-offset-4"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[var(--color-brand-600)] focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[var(--color-brand-600)] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="student@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[var(--color-brand-600)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
          Programme of Interest
        </label>
        <select
          value={formData.programme}
          onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[var(--color-brand-600)] focus:outline-none bg-white"
        >
          <option value="btech-cse">B.Tech Computer Science & Engineering</option>
          <option value="btech-aiml">B.Tech AI & Machine Learning</option>
          <option value="btech-it">B.Tech Information Technology</option>
          <option value="btech-ece">B.Tech Electronics & Communication</option>
          <option value="btech-me">B.Tech Mechanical Engineering</option>
          <option value="btech-ce">B.Tech Civil Engineering</option>
          <option value="mba">Master of Business Administration (MBA)</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
          Questions / Message (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Ask about eligibility, fee breakdown, hostel facilities, or AKTU counseling..."
          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[var(--color-brand-600)] focus:outline-none"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full justify-center">
        <Send className="w-4 h-4 mr-1.5" />
        <span>Submit Admission Enquiry</span>
      </Button>
    </form>
  );
}
