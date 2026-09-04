"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const faqItems = [
  {
    question: "Does the page promise a fixed implementation timeline?",
    answer:
      "No. Timeline depends on scope, jurisdiction, data and contract.",
  },
  {
    question: "What is included in payroll data migration?",
    answer:
      "Data migration includes extraction from source systems, field mapping, cleansing, transformation, transfer and reconciliation — only approved data and artifacts needed for the target operating model.",
  },
  {
    question: "How is migrated data validated?",
    answer:
      "Migrated data is validated through domain-separated checks, parallel runs comparing source and target metrics, and variance registers that record every difference against approved tolerances.",
  },
  {
    question: "What is a parallel payroll run?",
    answer:
      "A parallel payroll run compares explicit source and target scope, metrics and periods against approved tolerances — every variance is recorded, not smoothed over. It supports implementation validation but is not legal or compliance certification.",
  },
  {
    question: "Who decides go-live?",
    answer:
      "GO / HOLD / PARTIAL GO / ROLLBACK decisions are signed and attributable. No date, percentage or checklist can silently trigger production activation.",
  },
  {
    question: "Can one market launch while another is held?",
    answer:
      "Yes. Each wave carries its own scope, owner and readiness state. Later waves are never auto-approved by earlier wave success.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "After go-live, the program enters stabilization — first production cycles are reconciled against approved expectations, operational owners accept responsibility, and recurring governance is established.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-9">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 h-5">
              <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Frequently asked questions
              </span>
            </div>
          </div>
          <h2 className="pt-3.5 text-center text-[#0A2E4B] text-2xl font-extrabold font-['Inter'] leading-8 sm:text-3xl sm:leading-10">
            Questions about implementation
          </h2>
        </Reveal>

        <Reveal delay={60} className="mt-6">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="border-b border-slate-200 py-4"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="pr-4 font-['Inter'] text-base font-bold leading-6 text-sky-950 sm:text-lg">
                  {item.question}
                </h3>
                <span className="ml-4 shrink-0 text-xl text-sky-600">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 max-w-xl font-['Inter'] text-sm leading-5 text-gray-600">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
