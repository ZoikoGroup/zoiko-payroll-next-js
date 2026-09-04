"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Do we need an NDA to access security reports?",
    answer:
      "Some evidence may require verified-prospect or NDA-restricted access depending on the document and disclosure policy. The relevant page states the required access level before you request it.",
  },
  {
    question: "Can we obtain insurance certificates and tax forms?",
    answer:
      "Yes, insurance certificates and supplier tax forms are available through standard supplier onboarding workflows and requestable verification channels.",
  },
  {
    question: "Where do we get Zoiko banking details for vendor setup?",
    answer:
      "Verified vendor-master and banking details are provisioned securely during the supplier onboarding stage after proper validation.",
  },
  {
    question: "Does procurement approval start payroll service?",
    answer:
      "No. Procurement approval alone never activates payroll, payment or filing access; commercial execution and service commencement remain separate controlled states.",
  },
  {
    question: "Are customer contracts available here?",
    answer:
      "Standard contract terms and frameworks are available in the legal and contract section, while custom agreements route through tailored legal workflows.",
  },
];

export default function ProcurementFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">/</span>
              FAQ
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Procurement questions, answered plainly.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-xs transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B]">
                    {item.question}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
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