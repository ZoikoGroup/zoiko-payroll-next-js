"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "gross-to-net",
    question: "What is gross-to-net?",
    answer:
      "Gross-to-net is the calculation process that starts with total gross earnings (salary, allowances, overtime) and applies effective-dated statutory taxes, mandatory withholdings, and voluntary deductions to arrive at the final net pay amount.",
  },
  {
    id: "rules-selection",
    question: "How are rules selected for a period?",
    answer:
      "Rules are selected based on explicit context parameters—including worker assignment, tax jurisdiction, legal entity, and effective dates—ensuring the correct rule version is executed for each specific pay period.",
  },
  {
    id: "retro-pay",
    question: "Can retro pay be calculated?",
    answer:
      "Yes. Retroactive changes re-evaluate prior-period eligibility and run retro logic while keeping closed historical evidence intact and linking calculation lineage cleanly.",
  },
  {
    id: "taxes-everywhere",
    question: "Does it calculate taxes everywhere?",
    answer:
      "Tax logic is executed explicitly according to live coverage in the versioned coverage catalog, avoiding generic tax fallbacks or silent nearest-country approximations.",
  },
  {
    id: "calc-vs-payment",
    question: "Is calculation the same as payment?",
    answer:
      "No. Calculation is strictly separated from payment execution. A calculated net result is an audited financial artifact and is never presented as funded, transmitted, or settled.",
  },
  {
    id: "ai-change-result",
    question: "Can AI change a calculated result?",
    answer:
      "No. AI is strictly advisory—it assists with explaining variances and locating rules, but cannot invent rates, edit components, or alter authoritative results.",
  },
];

export default function FaqAndCtaSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* FAQ Section */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">—</span>
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
              Questions about calculations
            </h2>
          </div>

          {/* Accordion Container */}
          <div className="bg-white rounded-2xl border border-slate-200/90 divide-y divide-slate-100 shadow-2xs overflow-hidden">
            {faqData.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="transition-colors">
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B]">
                      {item.question}
                    </span>
                    <div className="shrink-0 text-slate-400">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#0A78C3]" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner Section */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl min-h-[320px] flex items-center justify-center text-center p-8 sm:p-12">
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/payroll-operation/bg5.png"
              alt="Payroll background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B3EEB] via-[#08212CDB] to-[#0F2B3EF0] backdrop-blur-xs" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              From approved inputs to pay results you can explain
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer">
                Book a demo
              </button>
              <button className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-slate-500/60 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer">
                Explore Inputs & Validation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
