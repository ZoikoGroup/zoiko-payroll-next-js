"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Is multi-country payroll charged per country?",
    answer:
      "Not as a single universal surcharge. Plan capacity and worker-month subscription are separate from jurisdiction activation, local services and third-party costs.",
  },
  {
    question: "Do I pay the subscription again for every country?",
    answer:
      "No, your base subscription covers your plan capacity and worker-month usage across your permitted production jurisdictions.",
  },
  {
    question: "What happens if I need more jurisdictions than my plan allows?",
    answer:
      "Exceeding the allowance routes you to the next eligible plan level to match your operational scale without hidden fees.",
  },
  {
    question: "Does adding a country create an implementation charge?",
    answer:
      "Each new production jurisdiction may require a one-time activation charge to make the country or territory production-ready.",
  },
  {
    question: "Do states and provinces count as separate jurisdictions?",
    answer:
      "State, province, or regional layers (like California or Ontario) don't auto-consume primary production jurisdiction capacity, though they can add filing or tax complexity.",
  },
  {
    question: "Is Enterprise capacity unlimited?",
    answer:
      "Enterprise uses contracted capacity tailored to your specific global scale and custom organizational scope.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FAQ
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl max-w-2xl font-extrabold text-[#07243B] tracking-tight">
            Multi-jurisdiction pricing, answered plainly.
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
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
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
