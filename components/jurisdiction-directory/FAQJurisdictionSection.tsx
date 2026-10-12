"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "q1",
    question: "What is a payroll jurisdiction?",
    answer:
      "A legal or tax authority area whose rules can affect payroll calculation, reporting, withholding, employer contributions, payment or recordkeeping — a country, territory, state, province, canton, or local authority.",
  },
  {
    id: "q2",
    question: "How do I check whether Zoiko Payroll supports a country?",
    answer:
      "Use our interactive Jurisdiction Directory to search by country name or filter by region and delivery model. Each listing clearly outlines supported capabilities such as processing, tax filing, and direct payments.",
  },
  {
    id: "q3",
    question: "Does payroll coverage vary within a country?",
    answer:
      "Yes, in federalized systems like the United States, India, or Canada, local state, provincial, or municipal tax rules and reporting requirements may vary significantly from national standards.",
  },
  {
    id: "q4",
    question: "What does partner-supported payroll mean?",
    answer:
      "Partner-supported payroll indicates that while Zoiko manages the core software and workflow, local compliance, tax filing, or disbursement execution is fulfilled in partnership with an accredited local in-country provider.",
  },
  {
    id: "q5",
    question: "Does a country guide mean payroll is available there?",
    answer:
      "Not necessarily. Country guides offer educational overview and local compliance context. Commercial availability is explicitly detailed in the Jurisdiction Directory entries.",
  },
  {
    id: "q6",
    question: "What do I do if my exact requirement isn't shown?",
    answer:
      "If your specific country or required capability isn't explicitly listed, contact our global mobility specialists directly to discuss custom expansion timelines or tailored payroll routing solutions.",
  },
];

export default function FAQJurisdictionSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    q1: true,
  });

  const toggleFAQ = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07243B] tracking-tight">
            Questions about jurisdiction coverage
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: FAQ Accordion (8 Cols) */}
          <div className="lg:col-span-8 divide-y divide-slate-100 border-t border-b border-slate-100">
            {faqData.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div key={item.id} className="py-5 transition-colors">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#3D9BD6] transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-slate-500" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400 group-hover:text-[#3D9BD6]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pr-6">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Coverage Review Cadence Sidebar (4 Cols) */}
          <div className="lg:col-span-4 bg-[#EEF3F9] border border-[#E2E8F0] rounded-2xl p-6 space-y-5">
            <h3 className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              COVERAGE REVIEW CADENCE
            </h3>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Red Badge */}
              <div className="bg-[#E9D9C9] text-[#D57A1F] text-xs font-bold px-3 py-2.5 rounded-lg text-center flex items-center justify-center">
                Reviewed
              </div>

              {/* Green Badge */}
              <div className="bg-[#E3F0E7] text-[#20502F] text-xs font-bold px-3 py-2.5 rounded-lg text-center flex items-center justify-center">
                Approved
              </div>

              {/* Yellow Badge */}
              <div className="bg-[#F1EAD8] text-[#6B5A20] text-xs font-bold px-3 py-2.5 rounded-lg text-center flex items-center justify-center">
                Published
              </div>

              {/* Default Neutral Badge */}
              <div className="bg-white text-[#07243B] text-xs font-bold px-3 py-2.5 rounded-lg text-center border border-slate-100 flex items-center justify-center shadow-2xs">
                Next review
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Every record has an accountable owner and a next scheduled review
              date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
