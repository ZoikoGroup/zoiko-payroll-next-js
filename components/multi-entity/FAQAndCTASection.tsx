"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is a legal entity the same as a jurisdiction?",
    answer:
      "No. A jurisdiction is a country or region with its own rules; a legal entity is the specific employer that operates within one or more jurisdictions. One entity can span jurisdictions in limited cases; more commonly, each entity maps to specific jurisdictions.",
  },
  {
    question: "Can each entity keep its own payroll calendar?",
    answer:
      "Yes. Every legal entity can maintain independent pay schedules, cutoff dates, and pay frequencies (e.g., monthly, bi-weekly, semi-monthly) aligned with local statutory requirements or internal policies.",
  },
  {
    question: "Can approvals differ by entity?",
    answer:
      "Yes. Approval workflows, maker-checker rules, threshold limits, and designated sign-offs can be customized per entity to match local operational governance.",
  },
  {
    question: "Can Finance get a consolidated view across entities?",
    answer:
      "Yes. Finance teams get real-time, group-level visibility with consolidated reporting across currencies, entities, and regions, alongside granular source-entity views.",
  },
  {
    question: "What happens when a worker transfers between entities?",
    answer:
      "Worker transfers are fully governed events. Historical payroll data remains attached to the origin entity for compliance, while seamless onboarding attaches the worker to the new entity going forward.",
  },
  {
    question: "Can entities use different banks or payroll providers?",
    answer:
      "Yes. The platform supports mixed delivery models. Individual entities can connect to local banking networks, external in-country payroll partners, or direct processing systems as needed.",
  },
  {
    question: "How do we add a new entity?",
    answer:
      "New entities follow a structured onboarding lifecycle: registration, structure configuration, rule validation, parallel testing, and go-live deployment without disrupting existing operations.",
  },
  {
    question: "Is multi-entity payroll available everywhere?",
    answer:
      "Multi-entity governance and orchestration are available globally across all supported regions, accommodating diverse local tax, banking, and compliance frameworks.",
  },
];

export default function FAQAndCTASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* FAQ Header & Accordion */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span>FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
              Questions about multi-entity payroll
            </h2>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-slate-200/80 border-t border-b max-w-4xl mx-auto border-slate-200/80">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left focus:outline-none group"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A8FD0] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[#0A8FD0] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Card Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0F2B3E] via-[#0E476A] to-[#195D96] py-14 px-6 sm:px-12 text-center text-white space-y-6 overflow-hidden shadow-xl">
          {/* Header Tag */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
            <span>|</span>
            <span>READY TO SEE IT IN YOUR ORG?</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            See group oversight and entity accountability, side by side
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto">
            Bring your entity structure — we'll show you what the Control Center
            looks like for it.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button className="w-full sm:w-auto px-6 py-2.5 bg-white text-[#07243B] text-xs font-bold rounded-lg shadow-sm hover:bg-slate-100 transition-colors">
              Book a demo
            </button>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-[#FFFFFF1A] border border-[#FFFFFF4D] text-white text-xs font-semibold rounded-lg hover:bg-[#07243B]/60 transition-colors">
              Explore multi-jurisdiction payroll
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
