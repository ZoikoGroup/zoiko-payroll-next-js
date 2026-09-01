"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "counts-as-input",
    question: "What counts as a payroll input?",
    answer:
      "Any data that directly or indirectly impacts employee pay, tax withholdings, or calculations — including base salaries, timesheets, expense claims, bank details, and statutory tax parameters.",
  },
  {
    id: "when-runs",
    question: "When does validation run?",
    answer:
      "Validation triggers immediately upon data ingestion via API, file upload, or manual entry, and re-validates dynamically whenever related configurations or dependencies update.",
  },
  {
    id: "guarantee-error-free",
    question: "Does validation guarantee error-free payroll?",
    answer:
      "Validation significantly reduces preventable risk by catching structural, rule, and completeness errors before calculation, though manual oversight remains supported.",
  },
  {
    id: "warning-override",
    question: "Can a warning be overridden?",
    answer:
      "Yes. Non-blocking warnings can be acknowledged and overridden by authorized personnel with an attached reason, whereas Blockers strictly require resolution.",
  },
  {
    id: "correction-audited",
    question: "How is a correction audited?",
    answer:
      "Every correction logs the initiating user, timestamp, prior value (masked if sensitive), new value, and authorization level in an immutable audit history.",
  },
];

export default function FaqAndCtaSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Block: FAQ */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07243B]">
              Questions about inputs & validation
            </h2>
          </div>

          {/* Accordion Container Card */}
          <div className="bg-white max-w-4xl mx-auto rounded-3xl border border-slate-200/80 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="p-5 sm:p-6 transition-colors">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#0A78C3] shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Block: CTA Banner with Image Background */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[260px] flex items-center justify-center text-center p-8 sm:p-12 border border-slate-800">
          {/* Background Image */}
          <img
            src="/images/payroll-operation/bg2.png"
            alt="Payroll data trust background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B3EEB] via-[#08252CDB] to-[#0F2B3EF0]" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Start every payroll run with data you can trust
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <button className="px-6 py-3 rounded-xl bg-[#0A78C3] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md">
                Book a demo
              </button>
              <button className="px-6 py-3 rounded-xl border border-slate-500/60 hover:border-slate-300 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 backdrop-blur-xs">
                <span>Talk to sales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
