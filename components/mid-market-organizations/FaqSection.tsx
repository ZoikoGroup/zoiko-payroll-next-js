"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Is there an employee-count threshold for this page?",
    answer:
      "No. Workforce range is one guided-route input, never a public segmentation badge.",
  },
  {
    question: "How does central visibility relate to local responsibility?",
    answer:
      "Central visibility shows readiness, exceptions and approval state across entities. It never transfers approval rights — those stay bound to the named owner for each payroll group.",
  },
  {
    question: "How does reconciliation work across entities?",
    answer:
      "Expected and received totals are matched per entity and payroll group. A period showing an unmatched variance reports Partial — it is never displayed as Reconciled while a downstream variance remains open.",
  },
  {
    question: "When should we look at Enterprise instead?",
    answer:
      "When procurement, governance depth and organizational scale become the deciding factors rather than coordinating repeatable controls across teams, entities and payroll groups.",
  },
];

/** Two independent columns so opening one answer never shifts the other. */
const columns = [
  faqItems.filter((_, index) => index % 2 === 0),
  faqItems.filter((_, index) => index % 2 === 1),
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-2.5 text-2xl font-extrabold leading-9 text-sky-950 sm:text-3xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
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
                        <span className="text-sm font-bold text-sky-950">{item.question}</span>
                        <span className="shrink-0 text-sky-600">
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
                          <p className="pb-5 text-sm leading-6 text-slate-500">{item.answer}</p>
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
