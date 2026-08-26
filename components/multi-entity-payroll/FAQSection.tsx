"use client";

import React from "react";

// FAQ List Data matching the screenshot
const FAQS = [
  {
    question:
      "Does a parent entity automatically get access to child entities?",
    answer:
      "No. Corporate hierarchy is descriptive context, not permission-bearing. Every sensitive action re-checks role grant, scope and time bounds.",
  },
  {
    question: "Can shared templates override local jurisdiction requirements?",
    answer:
      "No. Higher-level templates supply defaults only where a lower scope has no approved override — every effective field shows its source layer.",
  },
  {
    question: "What happens if a bulk action fails for some entities?",
    answer:
      'Partial failure stays visible. There is no blanket "completed" state — only successfully processed entities are marked complete, and retry applies to failed entities only.',
  },
  {
    question: "Does the portfolio view replace statutory consolidation?",
    answer:
      "No. The Global Portfolio View is operational aggregation only — not statutory, accounting or legal consolidation.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1928] leading-tight">
            Questions about Multi-Entity Payroll
          </h2>
        </div>

        {/* FAQ Items List */}
        <div className="space-y-8 divide-y divide-[#E1E8ED]">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={idx === 0 ? "space-y-2" : "pt-8 space-y-2"}
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0A1928]">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6E7E] leading-relaxed max-w-3xl">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
