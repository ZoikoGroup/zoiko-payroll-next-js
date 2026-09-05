"use client";

import React, { useState } from "react";

export default function ValidationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a parallel payroll run?",
      answer:
        "A cycle where legacy and Zoiko Payroll process the same population and results are compared.",
    },
    {
      question: "Why is payroll validation important?",
      answer:
        "Validation ensures complete accuracy, compliance, and zero disruption to employee payments before transitioning live.",
    },
    {
      question: "Do results need to match exactly?",
      answer:
        "Not always. Differences are analyzed to separate acceptable variances (like updated tax rules) from configuration errors.",
    },
    {
      question: "How are variances handled?",
      answer:
        "Variances are flagged, investigated in dedicated workspaces, rooted back to configuration or data issues, and retested.",
    },
    {
      question: "How many validation cycles are required?",
      answer:
        "The number of cycles depends on organization complexity, usually ranging between two to three successful parallel runs.",
    },
    {
      question: "When is payroll ready for go-live?",
      answer:
        "Payroll is ready once all validation exit criteria are met, required sign-offs are documented, and governance review approves go-live.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-3xl w-full flex flex-col items-center px-4 sm:px-6">
        {/* Category Badge */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          <span className="text-xs font-semibold text-[#3B82F6] tracking-wide uppercase">
            FAQ
          </span>
        </div>

        {/* Main Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] text-center tracking-tight leading-tight mb-12">
          Questions about Validation
        </h2>

        {/* Accordion Container */}
        <div className="w-full divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B192C] group-hover:text-[#3B82F6] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="text-lg text-[#64748B] shrink-0 font-light leading-none">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
