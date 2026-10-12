"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does this guide prove Zoiko Payroll is available in my country?",
    answer:
      "No. This guide is educational. Check Jurisdiction Guides for current, verified country and territory availability.",
  },
  {
    question: "Does this guide replace legal or tax advice?",
    answer:
      "No. The content provided in this guide is for informational and educational purposes only and should not be construed as legal, tax, or financial advice.",
  },
  {
    question:
      "Are the lifecycle and operating-model diagrams a description of Zoiko's live product?",
    answer:
      "They represent generalized, educational operating models and framework concepts rather than a direct feature map of the live software platform.",
  },
  {
    question: "How do I know if this guide is current?",
    answer:
      "This document is periodically updated to reflect evolving global payroll practices. Please refer to our official product documentation and changelogs for real-time specifications.",
  },
  {
    question: "Does the evidence planner give me a compliance score?",
    answer:
      "No. The evidence planner is a working checklist designed to help structure internal reviews, not an automated compliance certification or scoring system.",
  },
  {
    question: "I'm already a customer — do I have to book a demo to get help?",
    answer:
      "No. Existing customers can access dedicated technical support directly through our client portal or by contacting their implementation and success team.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Questions about the Global Payroll Guide
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-hidden group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#3D9BD6] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#3D9BD6]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="mt-3 pr-8">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
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
