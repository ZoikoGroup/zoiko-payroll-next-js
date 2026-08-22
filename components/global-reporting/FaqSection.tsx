"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is global payroll reporting?",
    answer:
      "Governed operational reporting across permitted entities and jurisdictions — defined metrics applied to a resolved scope and period, with quality and lineage attached.",
  },
  {
    question: "What should a report include?",
    answer:
      "A resolved scope, an explicit period, versioned metric definitions, source-quality context, revision state and the permission boundary it was produced under.",
  },
  {
    question: "How are metrics defined?",
    answer:
      "Each metric is a definition contract: formula, grain, units, source mapping, inclusion rules, time and currency treatment, and a named owner. Anything unresolved keeps the metric Draft / Gated.",
  },
  {
    question: "How are currencies handled?",
    answer:
      "Presentation currency, FX method and rate date are stated on the report. Where a method is not agreed, the metric is gated rather than converted on an assumed rate.",
  },
  {
    question: "What happens after data changes?",
    answer:
      "Issued snapshots are never edited. Corrected data produces a new snapshot plus a RevisionRecord naming the reason, the impacted metrics and the affected exports.",
  },
  {
    question: "Can executives drill into every employee record?",
    answer:
      "No. Aggregate views are available by default; employee-level detail re-authorizes against user, entity, field and purpose, and is refused when purpose is insufficient.",
  },
  {
    question: "Can countries be compared directly?",
    answer:
      "Only where the metric definition supports it. Where local rules make a comparison misleading, the report says so rather than presenting a like-for-like number.",
  },
  {
    question: "Does appearing in a report mean Zoiko supports that country?",
    answer:
      "No. Reporting reflects your resolved scope and permitted entities. It is never a coverage claim about jurisdiction availability.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600">
            Frequently asked
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-10">
            Before the demo, the objections
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12">
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
                  <span className="text-sm font-bold text-gray-900">{item.question}</span>
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
                    <p className="pb-5 text-sm leading-6 text-gray-500">{item.answer}</p>
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
