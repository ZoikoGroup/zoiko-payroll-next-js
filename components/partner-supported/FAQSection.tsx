"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqList: FAQItem[] = [
  {
    id: "what-is-partner-supported",
    question: "What is partner-supported payroll?",
    answer:
      "An approved third-party provider performs defined local services while Zoiko Payroll provides the governed workflow, data exchange, approvals, status visibility and audit controls.",
  },
  {
    id: "does-zoiko-calculate",
    question: "Does Zoiko Payroll calculate every partner-supported payroll?",
    answer:
      "No, calculation depends on the agreed service scope. Partner or local engines are used when contracted, while Zoiko orchestrates outcomes, controls, and native calculations where applicable.",
  },
  {
    id: "can-we-combine",
    question:
      "Can we use partner-supported payroll together with Zoiko Payroll in other countries?",
    answer:
      "Yes, you can combine native, connected, and partner-supported models across different jurisdictions under a single unified portfolio view.",
  },
  {
    id: "who-is-responsible-filings",
    question: "Who is responsible for filings and tax payments?",
    answer:
      "Statutory filings and tax remittances are executed by approved local partners or operators according to the signed jurisdiction schedule and legal permissions.",
  },
  {
    id: "do-we-manage-partner",
    question: "Do we have to manage the local payroll partner ourselves?",
    answer:
      "No, Zoiko owns the customer-facing orchestration, routing, and governance, so you interact through a single, governed workflow.",
  },
  {
    id: "how-is-data-shared",
    question: "How is our payroll data shared with a partner?",
    answer:
      "Data moves through contracted secure integrations adhering to strict data handling, privacy, and security controls.",
  },
  {
    id: "is-it-eor",
    question: "Is partner-supported payroll an employer-of-record service?",
    answer:
      "No, partner-supported payroll is a payroll delivery model for your legal entities, distinct from employer-of-record services.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(
    "what-is-partner-supported",
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B] leading-tight">
            Questions about partner-supported payroll
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between text-left group gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A8FD0] transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-[#0A8FD0] transition-colors">
                    {isOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="pt-3 pr-8">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {item.answer}
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
