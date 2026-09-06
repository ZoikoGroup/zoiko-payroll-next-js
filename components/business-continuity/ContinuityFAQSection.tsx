"use client";

import React, { useState } from "react";

export default function ContinuityFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What's the difference between business continuity and disaster recovery?",
      answer:
        "Business continuity is the broader discipline of keeping priority capabilities running through disruption. Disaster recovery is the more specific technical work of restoring systems and data after an event.",
    },
    {
      question: "How are RTO and RPO defined for each service?",
      answer:
        "RTO (Recovery Time Objective) and RPO (Recovery Point Objective) are established independently for each critical capability based on business impact and technical architecture, rather than applying a single blanket metric.",
    },
    {
      question: "How often is the continuity plan tested?",
      answer:
        "Continuity plans are exercised continuously across various formats—including tabletop exercises, technical DR drills, and backup restore validations—throughout the calendar year.",
    },
    {
      question: "How will I know if there's an active incident?",
      answer:
        "Our System Status dashboard serves as the authoritative live source for real-time progress, service health updates, and scoped account notifications during active incidents.",
    },
    {
      question: "How do I request continuity evidence for procurement?",
      answer:
        "You can submit an evidence request directly through our Trust & Risk workflow to access DR executive summaries, exercise attestations, and compliance evidence.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-4xl w-full flex flex-col items-center px-4">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#0A78C3]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            FAQ
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-10">
          Questions about continuity &amp; recovery
        </h2>

        {/* Accordion Container */}
        <div className="w-full bg-white rounded-2xl border border-[#E2E8F0] shadow-sm divide-y divide-[#E2E8F0] overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#0F172A]">
                    {faq.question}
                  </span>
                  <span className="text-[#94A3B8] font-light text-lg sm:text-xl leading-none shrink-0 select-none">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
