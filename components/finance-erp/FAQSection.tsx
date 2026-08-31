"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does payroll integrate with my ERP?",
    answer:
      "Approved payroll accounting output is mapped into journals and delivered to your finance/ERP system through an approved method, then reconciled against target-system evidence.",
  },
  {
    question: "What finance/ERP systems are supported?",
  },
  {
    question: "Does Zoiko Payroll post directly to my ERP?",
  },
  {
    question: "How does chart of accounts and dimension mapping work?",
  },
  {
    question: "How is duplicate posting prevented?",
  },
  {
    question: "What happens with a closed accounting period?",
  },
  {
    question: "What happens if a journal is posted incorrectly?",
  },
  {
    question: "What does reconciliation check?",
  },
  {
    question: "My ERP isn't listed — what do I do?",
  },
  {
    question: "How do I get integration support?",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#EDF4FA] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A]">
            Questions about Finance & ERP integrations
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200/70 border-b border-slate-200/70">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left py-2 gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0F172A] group-hover:text-[#0A8FD0] transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#0A8FD0]">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && faq.answer && (
                  <div className="pt-2 pb-3 pr-8 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
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
