"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Does "Confirmed" mean my system is already connected?',
    answer:
      "No — Confirmed shows evidence date only. Implementation still requires discovery, mapping, testing and activation.",
  },
  {
    question: "Is this a two-way sync?",
    answer:
      "Direction is defined per data domain rather than a global bi-directional claim. Inbound identity and employment data syncs into payroll, while selected payroll result summaries sync outbound.",
  },
  {
    question: "Can payroll changes apply retroactively?",
    answer:
      "Retroactive changes are flagged for review to prevent unintended current-cycle modifications and adhere to source-governed effective dates.",
  },
  {
    question: "What if my system isn't listed?",
    answer:
      "You can submit a custom-fit validation request detailing your vendor, version, and required data domains for our team to evaluate.",
  },
];

export default function FAQAndCTASection() {
  // First item open by default to match the design screenshot
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const leftFaqs = [faqData[0], faqData[1]];
  const rightFaqs = [faqData[2], faqData[3]];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-t-[#E6E9F0]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* FAQ Header + Accordion Grid */}
        <div className="space-y-10">
          {/* Section Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-3 h-0.5 bg-[#2F6FED]" />
              <span>FAQ</span>
            </div>
            <h2 className="text-[26px] font-bold text-[#0F172A] tracking-tight">
              Questions about HRIS & HCM integrations.
            </h2>
          </div>

          {/* FAQ 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column FAQs */}
            <div className="space-y-6">
              {leftFaqs.map((faq, idx) => {
                const globalIndex = idx;
                const isOpen = openIndexes.includes(globalIndex);
                return (
                  <div
                    key={globalIndex}
                    className="border-b border-slate-200/80 pb-5 space-y-3"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-start justify-between text-left gap-4 group cursor-pointer"
                    >
                      <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#2F6FED] transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-[#2F6FED] shrink-0 mt-0.5">
                        {isOpen ? (
                          <X className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column FAQs */}
            <div className="space-y-6">
              {rightFaqs.map((faq, idx) => {
                const globalIndex = idx + 2;
                const isOpen = openIndexes.includes(globalIndex);
                return (
                  <div
                    key={globalIndex}
                    className="border-b border-slate-200/80 pb-5 space-y-3"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-start justify-between text-left gap-4 group cursor-pointer"
                    >
                      <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#2F6FED] transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-[#2F6FED] shrink-0 mt-0.5">
                        {isOpen ? (
                          <X className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner Box */}
        <div className="bg-[#08132B] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FB4FF] uppercase">
                <span className="w-3 h-0.5 bg-[#8FB4FF]" />
                <span>VALIDATE YOUR HRIS OR HCM INTEGRATION FIT</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Known system. Clear data scope. Payroll-safe timing.
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
                Confirm fit before production activation — no generic "book a
                demo" for every state.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button className="px-5 py-3 rounded-xl bg-[#2F6FED] hover:bg-[#255BC0] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer">
                  Talk to an integration specialist
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg border border-slate-700/50">
                <Image
                  src="/images/footer-integrations/6.png"
                  alt="Integration specialists collaborating in an office setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
