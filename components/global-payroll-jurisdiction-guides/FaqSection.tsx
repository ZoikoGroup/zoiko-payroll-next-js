"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const faqItems = [
  {
    question: "What are Jurisdiction Guides?",
    answer:
      "Reviewed, market-specific educational guidance covering payroll terminology, operating environment and common questions for a given jurisdiction.",
  },
  {
    question: "Do these guides confirm current Zoiko Payroll availability?",
    answer:
      "No. Availability always comes from Jurisdiction Coverage. A guide can exist for a market Zoiko Payroll does not currently serve, and the reverse is equally possible.",
  },
  {
    question: "Are jurisdiction guides legal or tax advice?",
    answer:
      "No. They are general educational information — not legal, tax, accounting, payroll or employment advice, and they never establish statutory compliance for your organization.",
  },
  {
    question: "How current is a jurisdiction guide?",
    answer:
      "Every guide shows its reviewed date, version and source count. Guides carry a Current, Review due or Under correction state so freshness is visible before you read.",
  },
  {
    question: "What happens when a guide needs correction?",
    answer:
      "Affected sections are annotated or withheld and the guide moves to Under correction. Corrections are versioned and never silently edited.",
  },
  {
    question: "Where do I find local payroll requirements?",
    answer:
      "Local Payroll Requirements is the approved authority. A guide explains the questions worth investigating; it does not publish rates, thresholds, deadlines or filing obligations.",
  },
  {
    question: "Can a jurisdiction guide tell me which entity can act?",
    answer:
      "No. Entity and payroll-group authority is a Multi-Entity Payroll question. Corporate hierarchy is never treated as automatic payroll authority.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark">
            Questions about jurisdiction guides
          </h2>

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/global-payroll-jurisdiction-guides/faq.png"
              alt="Reference books, glasses and a clipboard on a desk"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="px-5 py-5">
              <p className="text-sm font-extrabold leading-5 text-brand-dark">
                Education first, always
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Guides teach the market. Authority links confirm the current truth.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left transition-colors duration-200 hover:text-brand"
                >
                  <span className="text-base font-bold leading-6 text-brand-dark">
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-xl leading-6 text-brand">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pb-4 pr-8 text-sm leading-5 text-slate-600">
                    {item.answer}
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
