"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const faqItems = [
  {
    question: "What does Zoiko Payroll reporting cover?",
    answer:
      "General education on reporting concepts — scope, definitions, reconciliation and safe exports — plus links to current product authority.",
  },
  {
    question: "Why did my payroll number change?",
    answer:
      "Because scope, period, definition, source or version changed. Reconciliation guidance explains how to identify which one, and the difference is retained until an authorized reviewer records a disposition.",
  },
  {
    question: "Is reconciliation the same as bank or GL close?",
    answer:
      "No. Reconciliation is a controlled comparison of an expected source against an observed result. It is not general-ledger close, bank reconciliation or statutory sign-off, and a payment export does not prove funds settled.",
  },
  {
    question: "Can I export payroll data safely?",
    answer:
      "Yes, within least privilege. Export moves data outside the governed product boundary, so handling risk and classification change — only export what you are already authorized to view.",
  },
  {
    question: "Where do I check multi-country reporting rules?",
    answer:
      "Cross-jurisdiction comparisons route to Global Reporting; local statutory questions route to Jurisdiction Guides. Currency, calendars and source quality are never silently normalized.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Questions about payroll reporting
          </h2>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-9 max-w-[760px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-brand"
                >
                  <span className="text-base font-bold leading-6 text-brand-dark">
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-xl leading-6 text-brand">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pb-5 pr-8 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
