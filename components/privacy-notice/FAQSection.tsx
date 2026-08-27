"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does this notice tell me which privacy law applies to me?",
    answer:
      "No. It explains what this notice covers; it does not decide legal applicability, which varies by your jurisdiction and relationship with Zoiko Payroll.",
  },
  {
    question: "Is my payroll data covered by this notice?",
    answer:
      "This notice explains the relationship and framework for customer-directed processing. However, specific payroll data processing is governed by the executed Data Processing Agreement (DPA) between your employer and Zoiko Payroll.",
  },
  {
    question: "Will my rights request definitely be approved?",
    answer:
      "Not automatically. Each request is evaluated against applicable legal obligations, exemptions, and your relationship context (e.g., whether data is controlled directly by Zoiko or managed under customer instruction).",
  },
  {
    question: "Where do I manage cookie preferences?",
    answer:
      "Cookie preferences and storage-technology choices are managed separately via the Cookie Settings modal or link provided in the footer of our website.",
  },
  {
    question:
      "Do I need to sign in or accept marketing to submit a privacy request?",
    answer:
      "No. Privacy access and request workflows operate independently without requiring an active sign-in or promotional marketing consent.",
  },
  {
    question: "Is this notice currently in effect?",
    answer:
      "Please refer to the Version History section to check the current status and effective date of this document.",
  },
];

export default function FAQSection() {
  // First item open by default as shown in design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-8 py-16 px-4 sm:px-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
          / FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Questions about this notice
        </h2>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 sm:py-5">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left transition-colors group focus:outline-none"
              >
                <span className="text-sm sm:text-[15px] font-bold text-[#0F172A] leading-snug">
                  {item.question}
                </span>
                <span className="text-[#0284C7] font-medium text-lg shrink-0 w-6 h-6 flex items-center justify-center">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 pr-8">
                  <p className="text-[14.5px] text-[#5B646B] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
