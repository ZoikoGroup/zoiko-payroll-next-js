"use client";

import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question:
      "What is the difference between a payroll plan and a payroll service model?",
    answer:
      "A plan licenses product scale and capabilities. A service model defines who operates payroll for a given entity or jurisdiction.",
  },
  {
    question: "Can I use Zoiko Payroll while keeping my existing payroll provider?",
    answer:
      "Yes, through Connected Payroll — your provider stays authoritative for its payroll result while Zoiko governs exchange, normalization and visibility.",
  },
  {
    question: "What is partner-supported payroll?",
    answer:
      "An approved local or regional provider performs defined services within a governed Zoiko workflow, with responsibility that is service-specific and contract-defined.",
  },
  {
    question: "Does a higher plan include managed payroll automatically?",
    answer:
      "No. Managed Payroll is an optional, separately contracted service layer — it is not bundled into any plan by default.",
  },
  {
    question: "Can different countries use different payroll service models?",
    answer:
      "Yes — this is the mixed-model pattern, subject to your plan limits and contract, and each entity retains its own delivery model and data source.",
  },
  {
    question: "How do I know which payroll model is available in a jurisdiction?",
    answer:
      "Check the Jurisdiction Directory or request a commercial review — availability is never inferred from this page.",
  },
  {
    question: "Can I change payroll service models later?",
    answer:
      "Yes. Provider and model changes are effective-dated and historically reproducible; a downgrade never deletes payroll history that must be retained.",
  },
];

export default function PlansFAQSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
            <span className="w-[3px] h-3.5 rounded-[1px] bg-[#3B82F6]" />
            <span>Frequently asked questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#082F49] leading-tight">
            Questions about plans and service models.
          </h2>
        </div>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl p-5 sm:p-6 space-y-2.5 shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)]"
            >
              <h3 className="text-sm font-bold text-[#082F49] leading-5">
                {faq.question}
              </h3>
              <p className="text-sm text-[#4E6172] leading-5">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
