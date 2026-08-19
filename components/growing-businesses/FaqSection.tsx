"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "When should we move on from basic payroll tools?",
    answer:
      "There's no fixed employee count. Watch for the growth signals instead — more people touching payroll, more exceptions, more systems, more reporting or audit scrutiny.",
  },
  {
    question: "What's the difference between review and approval?",
    answer:
      "Review inspects results and exceptions; it records that someone looked. Approval authorizes a specific version of the run, and is bound to a named role. A reviewer without approval rights cannot release a pay run.",
  },
  {
    question: "Does adding integrations mean giving up control?",
    answer:
      "No. Each connection keeps a named source of authority, visible error states and a manual fallback, so payroll can still be completed when a system is degraded.",
  },
  {
    question: "What if payroll still depends on one person?",
    answer:
      "That's the most common growth risk. Named preparer, reviewer and approver roles plus a backup owner mean the run keeps moving when the primary owner is unavailable — without widening access.",
  },
  {
    question: "Do we have to adopt every stage at once?",
    answer:
      "No. The progression describes what to add next, in plain terms. Most growing teams start with a repeatable calendar and clear ownership, then add validation, delegation and approved sources as the need appears.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl font-normal leading-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {faqItems.map((item) => {
            const isOpen = openQuestion === item.question;
            return (
              <div key={item.question} className="border-b border-neutral-300">
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-bold text-slate-900">{item.question}</span>
                  <span className="shrink-0 text-slate-500">
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
        </Reveal>
      </div>
    </section>
  );
}
