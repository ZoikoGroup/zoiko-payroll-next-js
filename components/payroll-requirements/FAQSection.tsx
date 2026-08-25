"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// FAQ items data matching the image content
const FAQ_ITEMS = [
  {
    id: 1,
    question: "What are local payroll requirements?",
    answer:
      "The jurisdiction-specific calendars, calculation context, documents, approvals, currencies and operating practices that a payroll operating model must account for.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Does Zoiko Payroll guarantee local legal compliance?",
    answer:
      "Zoiko Payroll provides governance tools, audit trails, and configurable controls to support compliance, but legal interpretation remains with your designated compliance/legal owners.",
    defaultOpen: false,
  },
  {
    id: 3,
    question: "How are local requirements supported across jurisdictions?",
    answer:
      "Requirements are categorized, versioned, and linked to specific legal entities and payroll groups with explicit ownership and evidence tracking.",
    defaultOpen: false,
  },
  {
    id: 4,
    question: "Can local requirements change over time?",
    answer:
      "Yes, effective-dated change control tracks proposed, validated, and active versions so upcoming regulatory changes never silently overwrite active payroll rules.",
    defaultOpen: false,
  },
  {
    id: 5,
    question: "Can global teams override local requirements?",
    answer:
      "Global teams manage shared control models and policies, but explicit role separation prevents unilateral reinterpretation of local requirements.",
    defaultOpen: false,
  },
  {
    id: 6,
    question: "Does this page prove availability?",
    answer:
      "Requirement documentation reflects local technical depth and structure, which is tracked separately from current service availability states.",
    defaultOpen: false,
  },
  {
    id: 7,
    question: "How are calendars and cutoffs handled?",
    answer:
      "Jurisdiction-specific payment schedules, filing dates, and approval cutoffs are maintained as immutable configuration rules with automated alerting.",
    defaultOpen: false,
  },
  {
    id: 8,
    question: "Can local deductions and calculations be supported?",
    answer:
      "Yes, statutory deduction tables and custom local calculation models map directly to downstream execution workflows.",
    defaultOpen: false,
  },
  {
    id: 9,
    question: "What happens when a requirement changes?",
    answer:
      "A change candidate is detected, assessed for applicability, mapped, validated against test evidence, approved by authorized roles, and activated on the effective date.",
    defaultOpen: false,
  },
  {
    id: 10,
    question: "How should an organization evaluate local payroll readiness?",
    answer:
      "By assessing control records across identity, governance, effective dates, configuration mapping, evidence freshness, and explicit decision rights.",
    defaultOpen: false,
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928] leading-tight">
            Questions about local payroll requirements
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#D1E0EE]/70 border-t border-b border-[#D1E0EE]/70">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-5 transition-colors">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1928] group-hover:text-[#0281D3] transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#0281D3]">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="mt-3 pr-10 text-xs sm:text-sm text-[#5C6E7E] leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
