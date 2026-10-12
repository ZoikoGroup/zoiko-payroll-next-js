"use client";

import React, { useState } from "react";

export default function CustomerSuccessFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What happens after Zoiko Payroll goes live?",
      answer:
        "Implementation transitions into stabilization and ongoing success governance: operating health, support trends, adoption, actions, releases, optimization and customer goals.",
    },
    {
      question: "What's the difference between Customer Success and Support?",
      answer:
        "Customer Success focuses on long-term strategy, governance, adoption, and optimization. Support manages live incidents, technical issues, and immediate payroll problems.",
    },
    {
      question: "Will we have a dedicated Customer Success Manager?",
      answer:
        "Yes, accounts receive dedicated Customer Success management to guide review cadences, align on goals, and track health metrics.",
    },
    {
      question: "How is customer health measured?",
      answer:
        "Customer health is measured using operational signals including reliability, integration stability, adoption rates, and progress against strategic goals.",
    },
    {
      question: "Can Customer Success help us add countries?",
      answer:
        "Yes, Customer Success supports expansion readiness, helping you onboard new countries smoothly without adding unnecessary operational complexity.",
    },
    {
      question: "Does Customer Success replace payroll support?",
      answer:
        "No, Customer Success works alongside Support. Live payroll-impacting issues route directly to Support or Incident Management for rapid resolution.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Label */}
        <p className="text-xs font-semibold text-[#3B82F6] tracking-wide mb-3">
          FAQ
        </p>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12 max-w-2xl">
          Questions about customer success.
        </h2>

        {/* Accordion List */}
        <div className="w-full max-w-4xl mx-auto divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B192C] group-hover:text-[#3B82F6] transition-colors pr-4">
                    {faq.question}
                  </span>

                  {/* Plus / Multiply Close Icon */}
                  <span className="text-[#64748B] text-lg font-light shrink-0 leading-none">
                    {isOpen ? "✕" : "+"}
                  </span>
                </button>

                {/* Expanded Answer Text */}
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal pr-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
