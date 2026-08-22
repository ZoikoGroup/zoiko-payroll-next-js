"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What does the executive view actually show?",
    answer:
      "Payroll status, material exceptions, decision ownership and evidence freshness across your scope — no operational-level noise.",
  },
  {
    question: "How current is the data shown?",
    answer:
      "Every summary states its as-of time. Stale data is flagged, not hidden.",
  },
  {
    question: "Is this worker surveillance?",
    answer:
      "No. HR impact is shown in aggregate only — authorized change volume and readiness, never person-level detail.",
  },
  {
    question: "Can I edit payroll from this view?",
    answer:
      "No. Editing payroll records always stays with specialist workflows — leaders can acknowledge, ask, sponsor or decide, never edit a record directly.",
  },
];

const columns = [
  faqItems.filter((_, index) => index % 2 === 0),
  faqItems.filter((_, index) => index % 2 === 1),
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-white pt-16 pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
            FAQ
          </p>
          <h2 className="text-[1.55rem] leading-[1.2] font-extrabold tracking-tight text-[#08132B] lg:text-[24.5px]">
            Questions About Zoiko Payroll
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="self-start">
                {column.map((item) => {
                  const isOpen = openQuestion === item.question;
                  return (
                    <div key={item.question} className="border-b border-[#E6E9F0]">
                      <button
                        type="button"
                        onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="text-[14px] font-semibold text-[#08132B]">
                          {item.question}
                        </span>
                        <span className="shrink-0 text-[#2F6FED]">
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
                          <p className="pb-4 text-[12.5px] leading-[1.6] text-[#3A4356]">
                            {item.answer}
                          </p>
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
