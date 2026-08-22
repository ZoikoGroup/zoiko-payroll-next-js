"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Do resources provide legal or tax advice?",
    answer:
      "No — resources are general educational content, not legal, tax, accounting or employment advice.",
  },
  {
    question: "Do I need to give contact details to read resources?",
    answer:
      "No. Essential guidance stays public, and no identity is required to search or read. Commercial conversation comes after useful content, not before it.",
  },
  {
    question: "Does a country guide mean Zoiko Payroll is available there?",
    answer:
      "No. A resource mentioning a market never implies availability. Current status lives on the Coverage / Directory record, which the guide links to.",
  },
  {
    question: "Can resources tell me if my organization is compliant?",
    answer:
      "No. Resources explain patterns and considerations. They cannot assess your configuration, and they never certify compliance.",
  },
  {
    question: "How can I tell whether a guide is current?",
    answer:
      "Every resource shows a reviewed date and a freshness state — Current, Review due, Under review, Superseded or Retired — on the record itself.",
  },
  {
    question: "How are related resources selected?",
    answer:
      "From visible editorial relationships only — same task, next lifecycle stage, authority handoff or current replacement. No behavioral profiling or relevance scoring.",
  },
];

/** Two independent columns so opening one never shifts the other. */
const columns = [
  faqItems.filter((_, index) => index % 2 === 0),
  faqItems.filter((_, index) => index % 2 === 1),
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
            Questions about Global Payroll Resources.
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
