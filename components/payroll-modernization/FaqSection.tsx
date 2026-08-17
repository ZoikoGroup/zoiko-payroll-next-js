"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What's the difference between modernization and migration?",
    answer:
      "Modernization is the governed program — objectives, roadmap, operating model and adoption. Migration is the data workstream inside it, detailed on its own page.",
  },
  {
    question: "Does automation replace human decisions?",
    answer:
      "No. Automation prepares, calculates and flags. Correction, review, approval and cutover decisions stay with named people, and material changes can trigger revalidation or reapproval.",
  },
  {
    question: "Is rollout phased?",
    answer:
      "Waves are sequenced by readiness, dependency, risk and capacity — not geography alone. Each wave closes on its own evidence gate before the next one opens.",
  },
  {
    question: "How is launch readiness decided?",
    answer:
      "Against explicit criteria with a named authority. The recorded decision shows which criteria were met, the impact window and the evidence behind a GO, HOLD or ROLLBACK.",
  },
  {
    question: "What does a parallel run actually compare?",
    answer:
      "Legacy and target outcomes at employee, payroll-group and aggregate levels — never a single total comparison. Each variance is classified, assigned, corrected or accepted, retested and signed off.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "Stabilization and optimization continue as governed workstreams: exception aging, integration health and reporting are monitored, with improvements tracked the same way as the rollout itself.",
  },
];

/** Rendered as two independent columns so opening one never shifts the other. */
const columns = [
  faqItems.filter((_, index) => index % 2 === 0),
  faqItems.filter((_, index) => index % 2 === 1),
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Questions about payroll modernization
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="self-start">
                {column.map((item) => {
                  const isOpen = openQuestion === item.question;
                  return (
                    <div key={item.question} className="border-b border-slate-200">
                      <button
                        type="button"
                        onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="text-sm font-bold text-slate-900">{item.question}</span>
                        <span className="shrink-0 text-blue-600">
                          {isOpen ? (
                            <CloseIcon className="h-3.5 w-3.5" />
                          ) : (
                            <PlusIcon className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
