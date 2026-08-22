"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Which countries and territories does Zoiko Payroll currently support?",
    answer:
      "Browse or search the directory for current, registry-driven availability — the list changes as coverage is verified.",
  },
  {
    question: "What does Limited availability mean?",
    answer:
      "Service is scoped rather than full. The specific limitations are documented and shown before any commercial conversation, not after.",
  },
  {
    question: "What's the difference between direct and partner-supported payroll?",
    answer:
      "Direct means Zoiko Payroll delivers the service itself. Partner-supported means delivery runs through an approved partner arrangement, which is stated on the market record.",
  },
  {
    question: "Does Planned mean I can run payroll there today?",
    answer:
      "No. Planned is a future state and is never presented as current availability. Only Available and Limited describe service you can use today.",
  },
  {
    question: "Where do I find local payroll requirements after checking availability?",
    answer:
      "The directory routes to the jurisdiction guide that owns that detail. Availability and local requirements are kept as separate records so neither is inferred from the other.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>FAQ</Eyebrow>
          <h2 className="mt-4 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-slate-900">
            High-intent questions about the directory
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
                    <p className="pb-5 text-sm leading-6 text-slate-500">{item.answer}</p>
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
