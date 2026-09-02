"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What does "closing payroll" actually lock?',
    answer:
      "The approved result set, its reconciliations, approvals and evidence become read-only to ordinary users. Downstream dependencies like payment and filing status can still append evidence without rewriting the historical pay result.",
  },
  {
    question: "Can a closed period ever be changed?",
    answer:
      "Yes, but only through an authorized reopen workflow or post-close correction flow. The original close record is never overwritten or mutated, preserving a complete audit trail.",
  },
  {
    question: "Who has to sign off before close is allowed?",
    answer:
      "Required sign-offs are determined by your configured governance rules, typically involving designated Payroll Approvers and Finance Controllers based on segregation of duties.",
  },
  {
    question: 'Does a "Ready to Close" state guarantee accuracy?',
    answer:
      "A Ready to Close state confirms that all automated rules-based checks, reconciliations within tolerances, and required approvals have passed, but non-blocking warnings may still exist for manual review.",
  },
  {
    question: "What can AI do during close?",
    answer:
      "AI acts strictly in an advisory role—explaining variance causes, summarizing exceptions, and prioritizing items for human review. It cannot create, approve, or execute close actions on its own.",
  },
];

export default function CloseAuditFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>—</span>
            <span>FAQ</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Questions about close & audit
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md divide-y max-w-4xl mx-auto divide-slate-100 overflow-hidden">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B]">
                    {item.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? (
                      <X className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Card */}
        <div className="relative w-full rounded-3xl overflow-hidden min-h-[200px] sm:min-h-[220px] flex items-center justify-center p-8 sm:p-12 border border-slate-700/60 shadow-xl">
          {/* Background Image */}
          <Image
            src="/images/payroll-operation/27.png"
            alt="Close payroll CTA background"
            fill
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061826EB] to-[#0A2D44DB] mix-blend-multiply" />

          {/* Banner Content */}
          <div className="relative z-10 text-center space-y-6 max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Close payroll with evidence, not assumptions
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#59A9E0] to-[#0A5A93] hover:from-[#1D74B4] hover:to-[#165B8E] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer">
                Book a demo
              </button>
              <button className="px-6 py-3 rounded-xl hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/30 backdrop-blur-xs transition-colors cursor-pointer flex items-center gap-2">
                <span>Talk to sales</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
