"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a payroll jurisdiction?",
    answer:
      "A legal or tax authority area whose rules can affect payroll calculation, reporting, withholding, employer contributions, payment or recordkeeping — a country, territory, state, province, canton, or local authority.",
  },
  {
    question: "How do I check whether Zoiko Payroll supports a country?",
    answer:
      "Use the jurisdiction directory to search by country name, ISO code, or region to see current availability and delivery models.",
  },
  {
    question: "Does payroll coverage vary within a country?",
    answer:
      "Yes. Sub-jurisdictions like states, provinces, and localities can have their own rules and coverage may differ at each level.",
  },
  {
    question: "What does partner-supported payroll mean?",
    answer:
      "An approved local or global partner performs defined payroll services on behalf of Zoiko Payroll for that jurisdiction.",
  },
  {
    question: "Does a country guide mean payroll is available there?",
    answer:
      "No. A country guide provides educational content about local payroll. Commercial service availability is shown separately in the directory.",
  },
  {
    question: "What do I do if my exact requirement isn't shown?",
    answer:
      "Contact our team to discuss your specific payroll footprint and requirements for the jurisdictions you need.",
  },
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="w-full bg-white px-6 sm:px-12 lg:px-40 py-20 font-['Segoe_UI',sans-serif]">
      {/* Centered container with mx-auto */}
      <div className="max-w-[1116px] mx-auto flex flex-col gap-6">

        {/* Section header */}
        <div className="max-w-[660px] flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#0066CC] text-xs font-bold tracking-wide uppercase">
              / FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-[#0A1626] text-3xl font-bold leading-10">
            Questions about jurisdiction coverage
          </h2>
        </div>

        <div className="flex items-start gap-10">

          {/* FAQ list */}
          <div className="flex flex-1 flex-col divide-y divide-[#E2E8F0]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  className="flex w-full items-start justify-between text-left"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                >
                  <span className="text-base font-bold text-[#0A1626] pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-base font-bold text-[#0066CC]">
                    {expandedIndex === index ? "−" : "+"}
                  </span>
                </button>
                {expandedIndex === index && faq.answer && (
                  <p className="mt-2.5 max-w-[560px] text-sm leading-5 text-[#2C3E50]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar: Coverage review cadence */}
          <div className="w-72 shrink-0 rounded-xl bg-[#F1F5F9] p-5 outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-3">
            <span className="text-[#5F6D7E] text-xs font-bold uppercase tracking-wide">
              Coverage review cadence
            </span>

            {/* 2×2 grid layout */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-lg bg-[#E9D9C9] px-4 py-2 text-center flex items-center justify-center">
                <span className="text-xs font-bold text-[#D57A1F]">Reviewed</span>
              </div>
              <div className="rounded-lg bg-[#E6F4EA] px-4 py-2 text-center flex items-center justify-center">
                <span className="text-xs font-bold text-[#0D652D]">Approved</span>
              </div>
              <div className="rounded-lg bg-[#FFFBEB] px-4 py-2 text-center flex items-center justify-center">
                <span className="text-xs font-bold text-[#6B5A20]">Published</span>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 text-center outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex items-center justify-center">
                <span className="text-xs font-bold text-[#5F6D7E]">Next review</span>
              </div>
            </div>

            <p className="text-xs leading-5 text-[#5F6D7E]">
              Every record has an accountable owner and a next scheduled review date.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}