"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What do teams check before approval?",
    answer:
      "Input readiness, validation results, open exceptions and variance context — all bound to the current version being reviewed.",
  },
  {
    question: "What happens if payroll changes after approval?",
    answer:
      "A material change invalidates the earlier decision. The run returns for reapproval with the prior decision preserved in history, so nothing is silently carried forward.",
  },
  {
    question: "How are exceptions managed before cutoff?",
    answer:
      "Each exception carries a scope, a named owner, a due date and its evidence. Resolution options are add context, reassign, escalate or accept with rationale — never a silent dismissal.",
  },
  {
    question: "How does this reconcile with Finance?",
    answer:
      "Approved totals are exported with their run version, and the downstream state is shown per connection — Sent, Accepted, Failed, Partial, Reconciled or Unknown/Pending — rather than a whole-batch success claim.",
  },
  {
    question: "Are preparation, review and approval separated?",
    answer:
      "Yes. Each stage is a distinct role with its own rights. A Processor cannot approve, a Reviewer cannot authorize, and review is recorded separately from approval.",
  },
  {
    question: "Are payroll records and audit evidence retained?",
    answer:
      "Yes. Version history, decision records, exception rationale and completion conditions are retained, and the Viewer / Auditor role can read audit evidence without holding operational rights.",
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
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-2.5 text-2xl font-extrabold leading-9 text-slate-900 sm:text-3xl">
            Questions about Payroll Teams.
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
