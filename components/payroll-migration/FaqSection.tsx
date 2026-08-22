"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What data gets migrated?",
    answer:
      "Every dataset carries an explicit disposition — Migrate, Archive Only, Reference Only or Exclude — documented before mapping begins.",
  },
  {
    question: "Is migration safe for sensitive payroll data?",
    answer:
      "Access is least-privilege and time-boxed, every credential has an owner and an expiry, and transfers only run over approved paths — never email or consumer file-sharing.",
  },
  {
    question: "Will historical payslips still be accessible?",
    answer:
      "Retained history is tested on a representative sample before cutover, so retrieval is proven rather than assumed. Anything held as archive only stays retrievable without being loaded into the live system.",
  },
  {
    question: "What happens with bad or incomplete source data?",
    answer:
      "It surfaces as a quality exception with a severity, an owner and a next action. Unresolved exceptions block the phase gate — nothing is quietly defaulted or dropped.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Questions about payroll migration
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {faqItems.map((item) => {
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
        </Reveal>
      </div>
    </section>
  );
}
