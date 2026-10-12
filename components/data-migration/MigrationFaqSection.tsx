"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Primitives";

const faqs = [
  {
    question: "What is payroll data migration?",
    answer:
      "The controlled process of moving employee, payroll and history data from your existing systems into Zoiko Payroll, with validation at every step.",
  },
  {
    question: "What data should migrate?",
    answer:
      "Each data set is assigned one of six strategies based on relevance, retention needs and risk — from active records needed for the next run through to data that stays out of scope.",
  },
  {
    question: "How is migration validated?",
    answer:
      "Records are profiled before they move, checked against approved targets after loading, and measured against control totals before anything is released to live payroll.",
  },
  {
    question: "What is reconciliation?",
    answer:
      "Matching target totals back to source totals — records loaded, YTD balances and financial validation — so the migrated data provably equals what left the source system.",
  },
  {
    question: "Do all historical records migrate?",
    answer:
      "Not necessarily. History can be migrated in full, summarized into totals, limited to selected periods, archived outside the live system, or left in place with temporary read-only access.",
  },
  {
    question: "What happens after cutover?",
    answer:
      "A formal go / no-go decision is recorded, rollback readiness is held on standby, and any remaining exceptions continue to be tracked to resolution under the same governance.",
  },
] as const;

export default function MigrationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-14">
        <SectionHeading eyebrow="FAQ" title="Questions about migration" />

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-slate-200">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <p className="pb-6 text-base leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
