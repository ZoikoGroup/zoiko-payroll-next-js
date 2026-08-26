"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface StatusBadge {
  label: string;
  bg: string;
  text: string;
}

const statusBadges: StatusBadge[] = [
  { label: "Current", bg: "bg-slate-200/70", text: "text-slate-700" },
  { label: "Scheduled", bg: "bg-sky-100", text: "text-[#0284C7]" },
  { label: "Superseded", bg: "bg-amber-100/80", text: "text-amber-800" },
  { label: "Withdrawn", bg: "bg-slate-200/70", text: "text-slate-600" },
  { label: "Archived", bg: "bg-slate-200/70", text: "text-slate-600" },
  { label: "Corrected", bg: "bg-amber-100/80", text: "text-amber-800" },
];

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "change-preferences",
    question: "Does reading this notice change my cookie preferences?",
    answer:
      "No. Preferences are changed only in Cookie Settings — reading this notice has no effect on your settings.",
  },
  {
    id: "optional-cookies",
    question: "Are all cookies optional?",
    answer:
      "Essential cookies are required for core site features and security to function properly. All non-essential categories (such as Analytics, Preferences, or Marketing) remain strictly optional.",
  },
  {
    id: "advertising-analytics",
    question: "Does Zoiko Payroll use advertising or analytics cookies?",
    answer:
      "Analytics cookies are deployed only where explicitly authorized to understand aggregate usage. Advertising/marketing technologies are not deployed unless approved by the registry.",
  },
  {
    id: "cookie-duration",
    question: "How long do cookies last?",
    answer:
      "Lifespans vary depending on the category and type: session cookies expire as soon as you close your browser, while persistent cookies remain stored for a fixed or criteria-based duration.",
  },
  {
    id: "reject-optional",
    question: "What happens if I reject optional cookies?",
    answer:
      "Rejecting or withdrawing consent for optional cookies will never block access to essential services, legal pages, or sign-in functions.",
  },
];

export default function VersionsFaqSection() {
  const [openId, setOpenId] = useState<string | null>("change-preferences");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="versions-faq" className="scroll-mt-8 space-y-6">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
        Versions & FAQ
      </h2>

      {/* Version Badges */}
      <div className="flex flex-wrap items-center gap-2">
        {statusBadges.map((badge, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}
          >
            {badge.label}
          </span>
        ))}
      </div>

      {/* Helper Note */}
      <p className="text-[13px] text-[#94A3B8] leading-relaxed">
        A Scheduled version is not yet effective — the Current version remains
        primary until then. A Superseded version always shows an archive banner
        with a link to the current version, so it can never be mistaken for
        current.
      </p>

      {/* Accordion List */}
      <div className="divide-y divide-slate-100 pt-2">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-5">
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                  {item.question}
                </span>
                <span className="shrink-0 text-[#0284C7]">
                  {isOpen ? (
                    <Minus className="w-5 h-5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 pr-8">
                  <p className="text-[13.5px] text-[#5B646B] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
