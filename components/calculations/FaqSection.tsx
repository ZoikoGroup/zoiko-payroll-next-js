"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const faqItems = [
  {
    question: "What is gross-to-net?",
    answer:
      "Gross-to-net is the calculation process that takes total gross earnings and applies all statutory and voluntary deductions to arrive at the net pay amount an employee receives.",
  },
  {
    question: "How are rules selected for a period?",
    answer:
      "Rules are selected based on the effective date, jurisdiction, and worker assignment context. Only versioned, approved rules that match the calculation period are applied.",
  },
  {
    question: "Can retro pay be calculated?",
    answer:
      "Yes. Retroactive changes re-evaluate prior-period eligibility and produce adjustment calculations while preserving the original evidence and audit trail.",
  },
  {
    question: "Does it calculate taxes everywhere?",
    answer:
      "Zoiko Payroll calculates taxes only in jurisdictions where the capability is live and versioned. No silent nearest-country or generic tax fallback is used.",
  },
  {
    question: "Is calculation the same as payment?",
    answer:
      "No. Calculation produces a net amount that is reviewable and auditable. A calculated net amount is never presented as funded, transmitted or settled.",
  },
  {
    question: "Can AI change a calculated result?",
    answer:
      "No. AI is advisory only — it explains variance and locates rules but cannot invent rates, edit components, or produce authoritative calculation results.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-[84px] bg-white overflow-hidden flex flex-col items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
        {/* Header */}
        <Reveal className="w-full max-w-[660px] flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="text-[#0A78C3] text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Questions about calculations
          </h2>
        </Reveal>

        {/* Accordion Container */}
        <Reveal delay={100} className="w-full max-w-[820px] bg-[#E3E7EE] rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E3E7EE] flex flex-col justify-start items-start gap-px overflow-hidden shadow-xs">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="self-stretch bg-white flex flex-col">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 bg-white inline-flex justify-between items-center text-left hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                    {item.question}
                  </span>
                  <span className="text-slate-400 text-base font-semibold font-['Inter'] leading-none select-none transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 bg-white text-gray-500 text-xs sm:text-sm font-normal font-['Inter'] leading-5 border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
