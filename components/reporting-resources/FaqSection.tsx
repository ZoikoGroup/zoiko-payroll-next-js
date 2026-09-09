"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const faqItems = [
  {
    question: "What does Zoiko Payroll reporting cover?",
    answer:
      "General education on reporting concepts — scope, definitions, reconciliation and safe exports — plus links to current product authority.",
  },
  {
    question: "Why did my payroll number change?",
    answer:
      "Payroll numbers can change due to corrections, version updates, or variance resolution. Each change is tracked with its source and authorized disposition.",
  },
  {
    question: "Is reconciliation the same as bank or GL close?",
    answer:
      "No. Reconciliation is a controlled comparison between an expected source and an observed result. It does not automatically constitute general-ledger close, bank reconciliation or statutory sign-off.",
  },
  {
    question: "Can I export payroll data safely?",
    answer:
      "Yes — exports follow least-privilege principles. Only data you're authorized to view can be exported, and classification determines handling requirements.",
  },
  {
    question: "Where do I check multi-country reporting rules?",
    answer:
      "Cross-jurisdiction comparisons route to Global Reporting; local statutory questions route to Jurisdiction Guides. Local currency, calendars and source quality are never silently normalized.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-[#0A8FD0]">/</span>
            <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-wide text-[#0A8FD0]">
              Frequently asked questions
            </span>
          </div>
          <h2 className="mt-1 text-3xl font-extrabold leading-10 text-sky-950 font-['Plus_Jakarta_Sans']">
            Questions about payroll reporting
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="mx-auto max-w-[760px]">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="border-b border-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-bold leading-6 text-sky-950 font-['Plus_Jakarta_Sans']">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-xl leading-9 text-sky-600 select-none">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-6 text-gray-600 font-['Plus_Jakarta_Sans']">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}