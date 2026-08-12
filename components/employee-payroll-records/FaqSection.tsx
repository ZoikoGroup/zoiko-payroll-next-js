"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "How do I know if I'm viewing the current record?",
    answer:
      "Every record is labeled Current or Superseded. Self-service always opens to the latest applicable record for the selected pay period.",
  },
  {
    question: "What happens to a record after it's corrected?",
    answer:
      "The correction creates a new version. The prior version stays available in history, marked as superseded rather than deleted, so both remain traceable.",
  },
  {
    question: "Who can see my payroll records?",
    answer:
      "Access is scoped by role and permission, server-enforced on every request. Employees see their own applicable records; authorized payroll, HR and finance roles see only what their permissions allow.",
  },
  {
    question: "What should I do if a record looks wrong?",
    answer:
      "Raise a secure correction or support request directly from the record itself, without leaving self-service. It routes to the authorized owner and appears in the record's audit trail.",
  },
  {
    question: "Why hasn't my latest record been published yet?",
    answer:
      "A record only reaches self-service after the payroll cycle is approved, the record is generated and its content passes validation. Until publication completes, it isn't visible.",
  },
  {
    question: "Can administrators edit a published record directly?",
    answer:
      "No. Published records aren't edited in place. A governed correction creates a new, reviewed version, leaving the prior version intact and visible in history.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-9 text-sky-950">
            Questions about employee payroll records
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-bold leading-5 text-sky-950">{item.question}</span>
                  <span className="shrink-0 text-slate-500">
                    {isOpen ? <CloseIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
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
