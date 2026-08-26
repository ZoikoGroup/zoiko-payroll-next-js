"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const websiteTermsFAQData: FAQItem[] = [
  {
    question: "Do these terms cover my purchased Zoiko Payroll subscription?",
    answer:
      "No. These Website Terms cover the public website only. Purchased services are governed by Zoiko Payroll Service Terms once approved and published.",
  },
  {
    question: 'Do I need to click "I agree" to these terms?',
    answer:
      'No active assent mechanism like an "I agree" button or pre-checked box is currently enforced unless authorized by an approved AcceptanceMechanismRecord.',
  },
  {
    question: "How do I know if I'm reading the current version?",
    answer:
      "Check the Versioning & Metadata section at the top of this document. Current status is represented as a legal state rather than an edit timestamp.",
  },
  {
    question: "Does linking to a third-party site imply a partnership?",
    answer:
      "No. Links to third-party sites are provided purely for convenience and do not imply endorsement, approval, or partnership.",
  },
  {
    question: "Where can I read the Privacy or Cookie Notice?",
    answer:
      "You can access the Privacy Notice and Cookie Notice directly from the Related Legal Documents section or via the footer links on this site.",
  },
];

export default function WebsiteTermsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3">
          {/* Category Tag */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Questions about these Website Terms
          </h2>
        </div>

        {/* Accordion FAQ Container */}
        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {websiteTermsFAQData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#0284C7] shrink-0 p-0.5">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8">
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
