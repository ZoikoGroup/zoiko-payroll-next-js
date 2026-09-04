"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a payroll jurisdiction?",
    answer:
      "A legal or tax authority area whose rules can affect payroll calculation, reporting, withholding, employer contributions, payment or recordkeeping — a country, territory, state, province, canton, or local authority.",
    expanded: true,
  },
  {
    question: "How do I check whether Zoiko Payroll supports a country?",
    answer: "Use the jurisdiction directory to search by country name, ISO code, or region to see current availability and delivery models.",
    expanded: false,
  },
  {
    question: "Does payroll coverage vary within a country?",
    answer: "Yes. Sub-jurisdictions like states, provinces, and localities can have their own rules and coverage may differ at each level.",
    expanded: false,
  },
  {
    question: "What does partner-supported payroll mean?",
    answer: "An approved local or global partner performs defined payroll services on behalf of Zoiko Payroll for that jurisdiction.",
    expanded: false,
  },
  {
    question: "Does a country guide mean payroll is available there?",
    answer: "No. A country guide provides educational content about local payroll. Commercial service availability is shown separately in the directory.",
    expanded: false,
  },
  {
    question: "What do I do if my exact requirement isn't shown?",
    answer: "Contact our team to discuss your specific payroll footprint and requirements for the jurisdictions you need.",
    expanded: false,
  },
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 xl:pl-40 xl:pr-24 py-20">
      <div className="max-w-[1264px] flex flex-col gap-6">
        {/* Section header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <span className="absolute left-0 top-0 h-3.5 w-1.5 rounded-[1px] bg-sky-600" />
            <span className="absolute left-[11px] top-0 w-56 text-xs font-bold uppercase tracking-wide text-sky-600">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-10 text-slate-900">
            Questions about jurisdiction coverage
          </h2>
        </div>

        <div className="flex items-start gap-10">
          {/* FAQ list */}
          <div className="flex flex-1 flex-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="py-5 first:pt-0 last:border-b border-t border-slate-200"
              >
                <button
                  className="flex w-full items-start justify-between"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                >
                  <span className="text-base font-bold text-slate-900 text-left pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 pt-0.5 pb-[3px] text-base text-brand">
                    {expandedIndex === index ? "−" : "+"}
                  </span>
                </button>
                {expandedIndex === index && faq.answer && (
                  <p className="mt-2.5 max-w-[560px] text-sm leading-5 text-slate-700">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar: Coverage review cadence */}
          <div className="w-72 rounded-xl bg-slate-50 p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-700">
              Coverage review cadence
            </p>
            <div className="mt-3 flex flex-col">
              <div className="rounded-lg bg-stone-300 px-4 py-2 text-center">
                <span className="text-xs font-bold text-orange-700">Reviewed</span>
              </div>
              <div className="rounded-lg bg-emerald-50 px-4 py-2 text-center">
                <span className="text-xs font-bold text-emerald-700">Approved</span>
              </div>
              <div className="rounded-lg bg-amber-50 px-4 py-2 text-center">
                <span className="text-xs font-bold text-yellow-800">Published</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 text-center outline outline-1 outline-offset-[-1px] outline-slate-200">
                <span className="text-xs font-bold text-slate-700">Next review</span>
              </div>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-700">
              Every record has an accountable owner and a next scheduled review date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
