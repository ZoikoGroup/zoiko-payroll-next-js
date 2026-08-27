"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who owns product, technology, operations or trust?",
    answer:
      "See the Accountability Domains matrix above — every domain names its accountable role, scope and current status.",
  },
  {
    question: "Who leads Zoiko Payroll?",
    answer:
      "Zoiko Payroll leadership is assigned by verified role, entity, and product scope. Specific active assignment records are published above under approved standards.",
  },
  {
    question: "How is leadership information verified?",
    answer:
      "Every person-role relationship requires an approved person record, an approved assignment, title verification, effective date, and named approvers prior to publication.",
  },
  {
    question: "Is the title I'm seeing current?",
    answer:
      "Yes. All published titles include effective dates and last-reviewed timestamps to ensure you are viewing active, current scope assignments.",
  },
  {
    question: "Can I contact a leader directly?",
    answer:
      "Personal contact details are omitted to ensure data integrity and security. Specific inquiries should be routed through dedicated functional channels (e.g., Help Center, Contact, or Trust & Security).",
  },
  {
    question: "Where do security or privacy questions go?",
    answer:
      "Security and privacy matters are handled directly through our Trust & Security portal, which serves as the authority for controls and evidence.",
  },
  {
    question: "What happens when a leader leaves?",
    answer:
      "When evidence lapses or transitions occur, we fail closed by suppressing named profiles and showing role-only fallbacks or governed archive records.",
  },
];

export default function LeadershipFAQSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans antialiased">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Content */}
        <div className="text-center space-y-3">
          {/* Tag / Category */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
            Questions about leadership
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-gray-200/70 border-t border-b border-gray-200/70">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] pr-4 group-hover:text-[#0284C7] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#0284C7] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {item.answer}
                    </p>
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
