"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "payroll-ready",
    question: 'What does "payroll ready" actually mean?',
    answer:
      "It means all configured downstream readiness conditions are met — not simply that a file transferred successfully. Received, Validated and Payroll Ready are distinct states.",
  },
  {
    id: "raw-punches",
    question: "Are raw punches the same as approved timecards?",
  },
  {
    id: "calculate-overtime",
    question:
      "Does Zoiko Payroll calculate overtime or premiums from time data?",
  },
  {
    id: "after-cutoff",
    question: "What happens to time submitted after cutoff?",
  },
  {
    id: "corrections-handled",
    question: "How are corrections to already–processed time handled?",
  },
  {
    id: "system-not-listed",
    question: "My time system isn't listed — what do I do?",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("payroll-ready");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#E9F0F8] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Questions about Time & Attendance integrations
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-200/80">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0A8FD0] transition-colors">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-[#0A8FD0]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed pr-8">
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
