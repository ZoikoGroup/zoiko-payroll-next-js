"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Is this only for small businesses?",
    answer:
      "No — single-jurisdiction refers to operating-market scope, not company size. Growing workforces and multiple entities are expected.",
  },
  {
    question: "Can this connect to our existing systems?",
    answer:
      "Yes. HR/HCM, finance/ERP, time and identity connections are configured during implementation, and each one shows its direction, status and support owner rather than a single opaque health light.",
  },
  {
    question: "Can I have multiple entities or payroll groups?",
    answer:
      "Yes. Entities, payroll groups, populations, calendars and approval paths are modelled separately, so structure inside one market stays explicit instead of being flattened into a single run.",
  },
  {
    question: "When should I move to multi-jurisdiction?",
    answer:
      "When statutory payroll responsibility genuinely spans more than one market. Headcount growth, extra entities or new payroll groups alone do not change the operating model.",
  },
  {
    question: "How are adjustments handled?",
    answer:
      "Deductions, adjustments and corrections carry effective dates and review state. Material changes after review or approval trigger recalculation, revalidation or reapproval — never a silent override.",
  },
  {
    question: "Is payroll approval automatic?",
    answer:
      "No. Approval is an authorized human decision bound to a specific eligible version, with the actor, role, version and timestamp recorded as evidence.",
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
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Questions about single-jurisdiction payroll.
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
