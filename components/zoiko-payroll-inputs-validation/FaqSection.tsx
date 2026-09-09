"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const faqItems = [
  {
    question: "What counts as a payroll input?",
    answer: "Payroll inputs include API connectors, secure file imports, manual data entries, and late changes submitted prior to processing.",
  },
  {
    question: "When does validation run?",
    answer: "Validation runs continuously as data is ingested, checking schema compliance, idempotency, and local jurisdiction rules before pay calculation.",
  },
  {
    question: "Does validation guarantee error-free payroll?",
    answer: "Validation ensures data integrity, structure, and rule compliance, isolating bad records into quarantine while successfully processed records remain traceable.",
  },
  {
    question: "Can a warning be overridden?",
    answer: "Warnings can be overridden by authorized roles with a recorded audit trail capturing the actor, timestamp, and justification.",
  },
  {
    question: "How is a correction audited?",
    answer: "Every correction is fully tracked with provenance, showing the exact change made, the authorized actor, and the timestamp for complete audit compliance.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-white overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-40 flex flex-col items-center gap-8">
        {/* Header */}
        <Reveal className="w-full max-w-[660px] flex flex-col items-start gap-2.5">
          <div className="self-stretch inline-flex justify-center items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="justify-center text-[#0A78C3] text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
              FAQ
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center text-center">
            <h2 className="w-full justify-center text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
              Questions about inputs &amp; validation
            </h2>
          </div>
        </Reveal>

        {/* Accordion Container */}
        <Reveal className="w-full max-w-[820px] bg-[#E3E7EE] rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E3E7EE] flex flex-col justify-start items-start gap-px overflow-hidden shadow-xs">
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