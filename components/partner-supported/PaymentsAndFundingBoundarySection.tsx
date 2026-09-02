"use client";

import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who funds payroll?",
    answer:
      "Funding responsibility is configured by jurisdiction and service scope. Your implementation schedule identifies the required funding account, timing and operator.",
  },
  {
    question: "Who sends employee payments?",
    answer:
      "Shown per market as customer-managed, Zoiko-coordinated, partner-executed, or another approved operator.",
  },
  {
    question: "Who remits taxes and social contributions?",
    answer: "Tracked and shown separately from employee payment status.",
  },
  {
    question: "Does Zoiko hold funds?",
    answer:
      "Never assumed. Only the approved legal and funds-flow statement for the specific service is published.",
  },
  {
    question: "What happens if a payment fails?",
    answer:
      "Routed to the payment exception workflow, retaining the original instruction, return code and remediation lineage.",
  },
];

export default function PaymentsAndFundingBoundarySection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>PAYMENTS AND FUNDING BOUNDARY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            &quot;Partner-supported&quot; doesn&apos;t by itself say who moves
            money.
          </h2>
        </div>

        {/* Info Callout Banner */}
        <div className="bg-[#EBF6FC] border-l-4 border-[#0A8FD0] rounded-r-2xl p-6 shadow-2xs">
          <p className="text-xs sm:text-sm text-[#07243B] font-medium leading-relaxed max-w-4xl">
            Employee payments, authority payments, FX, funding, safeguarding,
            account ownership and payment initiation are each modeled separately
            and disclosed according to the contracted flow — never assumed from
            the delivery-model label alone.
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-10 divide-y divide-slate-100">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              {/* Question Column */}
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-sm font-bold text-[#07243B]">
                  {item.question}
                </h3>
              </div>

              {/* Answer Column */}
              <div className="md:col-span-8 lg:col-span-8">
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
