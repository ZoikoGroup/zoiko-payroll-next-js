'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "What are local payroll requirements?",
    answer: "The jurisdiction-specific calendars, calculation context, documents, approvals,\ncurrencies and operating practices that a payroll operating model must account for."
  },
  {
    question: "Does Zoiko Payroll guarantee local legal compliance?",
    answer: "Zoiko Payroll provides comprehensive requirement context and verification tools, but final legal compliance is maintained through structured review workflows and operational oversight."
  },
  {
    question: "How are local requirements supported across jurisdictions?",
    answer: "Requirements are mapped directly to versioned regulatory schemas and verified against local authoritative sources across supported regions."
  },
  {
    question: "Can local requirements change over time?",
    answer: "Yes, requirements are continuously monitored and updated through version-controlled tracking to reflect active regulatory modifications."
  },
  {
    question: "Can global teams override local requirements?",
    answer: "Global policies can set standard baseline frameworks, but local requirement depths and statutory rules take precedence in operational execution."
  },
  {
    question: "Does this page prove availability?",
    answer: "No, requirement depth and educational transparency are kept separate from current service availability and commercial rollout status."
  },
  {
    question: "How are calendars and cutoffs handled?",
    answer: "Local payroll calendars, banking cutoffs, and processing windows are explicitly mapped to regional operating guidelines."
  },
  {
    question: "Can local deductions and calculations be supported?",
    answer: "Yes, flexible calculation contexts and jurisdiction-specific deduction models are supported within the framework."
  },
  {
    question: "What happens when a requirement changes?",
    answer: "Changes trigger validation reviews, stakeholder notifications, and versioned updates to the affected requirement control records."
  },
  {
    question: "How should an organization evaluate local payroll readiness?",
    answer: "Organizations should evaluate readiness by reviewing authoritative source mapping, data residency controls, integration capabilities, and audit readiness."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-28 py-20 bg-indigo-50 border-t border-slate-200 flex flex-col justify-start items-center gap-10">
      <div className="w-full max-w-[1200px] px-8 flex flex-col justify-start items-center gap-3.5 text-center">
        <div className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
          / Frequently asked questions
        </div>
        <h2 className="text-sky-950 text-2xl font-extrabold font-['Inter'] leading-8">
          Questions about local payroll requirements
        </h2>
      </div>

      <div className="w-full max-w-[1200px] px-8 flex justify-center items-start">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="self-stretch py-4 border-b border-slate-200 flex flex-col justify-start items-start cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="self-stretch flex justify-between items-center">
                  <h3 className="text-sky-950 text-base font-bold font-['Inter'] leading-6">
                    {faq.question}
                  </h3>
                  <span className="text-sky-600 text-xl font-normal font-['Inter'] leading-8">
                    {isOpen ? "–" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-3 flex flex-col justify-start items-start">
                    <p className="text-gray-600 text-sm font-normal font-['Inter'] leading-5 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}