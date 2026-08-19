"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is International Groups?",
    answer:
      "Coordination across markets and legal entities — group visibility, local ownership, provider accountability and reconciliation, together in one operating model.",
  },
  {
    question: "How is currency/FX handled in group reporting?",
    answer:
      "Every converted total carries its local amount, reporting currency and FX basis, with the rate source and owner shown per conversion. Zoiko Payroll is not an authoritative FX source.",
  },
  {
    question: "How is this different from Multi-Jurisdiction Payroll?",
    answer:
      "Multi-Jurisdiction Payroll is about operating in more than one statutory market. International Groups is about coordinating a group of entities and regional teams above those markets — group visibility without group authority.",
  },
  {
    question: "What happens when we acquire a new entity?",
    answer:
      "Historical payroll stays under its original authority, the new access scope is mapped without re-parenting existing records, and onboarding runs as its own implementation wave.",
  },
  {
    question: "Is there one global payroll process?",
    answer:
      "No. Terminology, evidence and reporting are shared at group level, but preparation, review and approval stay scoped to the legal entity and payroll group that hold the authority.",
  },
  {
    question: "Is this standalone or does it require Zoiko One?",
    answer:
      "It operates standalone. Zoiko One integration is available where a group already runs other Zoiko services, but it is never a prerequisite for coordinating international payroll.",
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
    <section className="border-t border-[#E3E7F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-2.5 text-2xl font-extrabold leading-9 text-slate-900 sm:text-3xl">
            Questions about International Groups
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
