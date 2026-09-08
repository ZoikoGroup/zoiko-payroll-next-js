"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { SectionHeading } from "./Primitives";

const faqs = [
  {
    question: "What counts as Professional Services?",
    answer:
      "Scoped, expert-led work such as advisory, data migration, integrations, testing, change enablement, and optimization — defined by a statement of work.",
  },
  {
    question: "How is this different from standard support?",
    answer:
      "Standard support and customer success are ongoing services included with the platform. Professional Services is specialist, time-boxed delivery against defined outcomes, governed by its own statement of work.",
  },
  {
    question: "How are engagements priced?",
    answer:
      "Pricing follows the agreed scope — the objectives, deliverables, milestones and dependencies set out in the statement of work — so it is confirmed before work begins rather than open-ended.",
  },
  {
    question: "What does a typical timeline look like?",
    answer:
      "Engagements move through six stages: discover, scope, deliver, review, accept and transition. The duration of each depends on the deliverables and timeline agreed during scoping.",
  },
  {
    question: "Who works on our engagement?",
    answer:
      "Named specialists in the areas your project needs — migration, integration, testing and related disciplines — coordinated across our Americas, Europe, APAC and Middle East delivery regions.",
  },
  {
    question: "What happens when the engagement ends?",
    answer:
      "Closeout includes documentation, workshops, recorded sessions and a handover pack, finishing with a formal ownership transfer confirming your team is ready to operate independently.",
  },
] as const;

export default function ServicesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions about Professional Services"
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
                      <X className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} />
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
