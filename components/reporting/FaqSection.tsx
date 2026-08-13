"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What reports are available?",
    answer:
      "Operational reporting around each payroll period — outcome summaries, approvals, exceptions, deductions/adjustments and audit summaries, where supported.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "A corrected period keeps its marker in every trend and summary. The prior and current calculation versions stay visible, alongside the material change that caused the restatement.",
  },
  {
    question: "Is this real-time reporting?",
    answer:
      "No. Each metric shows the timestamp it was last refreshed, so a figure is never presented as more current than it is. Freshness travels with the number into previews and exports.",
  },
  {
    question: "What can executives see by default?",
    answer:
      "Aggregate views. Employee-level detail requires explicit authorization, and every drill-down is checked server-side rather than hidden in the interface.",
  },
  {
    question: "How does currency work across entities?",
    answer:
      "Local currency is the default for every entity. Where reported-currency mode is enabled, the conversion basis, rate date and source are shown while local values are preserved.",
  },
  {
    question: "Is this a BI replacement?",
    answer:
      "No. This is operational payroll reporting with defined metrics, scoped access and traceable evidence. It complements a BI stack rather than replacing general-purpose analytics.",
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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">FAQ</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Questions about payroll reporting
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
