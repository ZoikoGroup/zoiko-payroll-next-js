"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { SectionHeading } from "./Primitives";

const faqs = [
  {
    question: "What is payroll change management?",
    answer:
      "It's the structured work of preparing people, roles, and communication for a new payroll operating model alongside the technology rollout.",
  },
  {
    question: "How is it different from training?",
    answer:
      "Training equips individuals to use the system. Change management is the wider programme around it — stakeholder planning, impact assessment, communication strategy, readiness measurement and reinforcement. Training is a dedicated service within that plan.",
  },
  {
    question: "Who should be involved?",
    answer:
      "Payroll teams, HR operations, managers, employees, finance, IT and security, local payroll teams, and executive sponsors — each with their own communication, ownership and readiness plan.",
  },
  {
    question: "How is readiness measured?",
    answer:
      "Through a shared governance view: sponsor actions completed, countries ready, communications sent, open risks, training dependencies, and the go-live gate status.",
  },
  {
    question: "What happens during hypercare?",
    answer:
      "Elevated support immediately after go-live — a dedicated help desk for payroll-specific questions, daily issue triage, and regular leadership check-ins until operations stabilize.",
  },
  {
    question: "How does Customer Success continue adoption?",
    answer:
      "After stabilization, ongoing support sustains the new behaviours — reinforcing adoption well beyond launch day rather than ending at cutover.",
  },
] as const;

export default function ChangeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions about payroll change management"
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
