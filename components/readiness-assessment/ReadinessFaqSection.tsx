"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { SectionHeading } from "./Primitives";

const faqs = [
  {
    question: "How long does the assessment take?",
    answer:
      "Most organizations complete the core questions in a few working sessions across the relevant stakeholder teams.",
  },
  {
    question: "What is a Material Gap?",
    answer:
      "A gap severe enough to block progress through a stage gate — not a minor preparation item. Material gaps surface ahead of everything else in the priority action register.",
  },
  {
    question: "Do we need every country assessed at once?",
    answer:
      "No. Readiness is assessed by market, so waves can progress independently. The rollout recommendation sequences countries by readiness rather than calendar dates.",
  },
  {
    question: "What is Evidence Confidence?",
    answer:
      "A measure of how well a dimension's status is supported by proof. High confidence means the status is confirmed with evidence; low confidence means it rests largely on reported or unknown answers.",
  },
  {
    question: "Who should complete the assessment?",
    answer:
      "The people who own each dimension — payroll, finance, HR, IT, legal, security, and the programme sponsor. Answers are strongest when the owner of the area responds directly.",
  },
  {
    question: "What happens after the assessment?",
    answer:
      "You receive the executive summary, country matrix, priority action register, dependency map and rollout recommendation — and the findings feed straight into the implementation delivery plan.",
  },
] as const;

export default function ReadinessFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions about the readiness
              <br className="hidden sm:block" /> assessment
            </>
          }
        />

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
                    {isOpen ? (
                      <X
                        className="h-4 w-4 shrink-0 text-slate-400"
                        strokeWidth={2}
                      />
                    ) : (
                      <Plus
                        className="h-4 w-4 shrink-0 text-slate-400"
                        strokeWidth={2}
                      />
                    )}
                  </button>
                </h3>
                {isOpen ? (
                  <p className="pb-6 text-base leading-6 text-slate-500">
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
