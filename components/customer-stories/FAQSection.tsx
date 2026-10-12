"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are these results typical?",
    answer:
      "No. Every story reflects one customer's specific experience and context — never a guaranteed or typical result for your organization.",
  },
  {
    question: "How is a story approved?",
    answer:
      "Every story undergoes rigorous review with our customer advocacy team and the customer's legal/compliance stakeholders before publication.",
  },
  {
    question: "Why don't I see many stories, or any at all?",
    answer:
      "We maintain strict evidence standards and explicit permissions. If a story is pending re-approval or withdrawn, it is replaced transparently rather than padded with unverified data.",
  },
  {
    question: "Are quotes and metrics verified?",
    answer:
      "Yes. All quotes reflect exact approved wording, and all metrics are presented with full methodology and context.",
  },
  {
    question: "Does a story prove Zoiko Payroll is available in my country?",
    answer:
      "Not necessarily. Historical product usage in a story is context, not current product authority. Please verify current availability on our Jurisdiction Coverage page.",
  },
  {
    question: "Can I share my own customer story?",
    answer:
      "Yes! Interested customers can participate through our approved advocacy program after completing the initial implementation phase.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Questions about customer stories
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#3D9BD6] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#3D9BD6] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm font-medium text-slate-500 leading-relaxed max-w-2xl">
                    <p>{faq.answer}</p>
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
