"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { SectionHeading } from "./Primitives";

const faqs = [
  {
    question: "Who needs payroll training?",
    answer:
      "Anyone with production responsibility — payroll, finance, HR, approvers, system administrators, and local payroll teams.",
  },
  {
    question: "Is training different from Change Management?",
    answer:
      "Yes. Training builds individual capability for a specific role. Change management is the wider programme around it — stakeholder planning, communication and readiness measurement. Training is a dedicated service within that plan.",
  },
  {
    question: "Does completion mean readiness?",
    answer:
      "No. Completion only shows a module was engaged with. Readiness is confirmed by proficiency evidence — a guided task, an independent task, facilitator observation, and a role readiness sign-off.",
  },
  {
    question: "Can training be localized by country?",
    answer:
      "Yes. Local overlays add country-specific payroll calendars, workflows and statutory context, delivered in the languages each market needs.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "Go-live support guides teams through the first live cycle, then reinforcement closes any remaining gaps before ongoing learning takes over.",
  },
  {
    question: "How do learners stay updated after releases?",
    answer:
      "Short updates follow new payroll features, rule changes and country updates, alongside refresher learning and onboarding paths for new team members.",
  },
] as const;

export default function TrainingFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions about Zoiko Payroll
              <br className="hidden sm:block" /> training
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
