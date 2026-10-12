"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is there a public Zoiko Payroll API?",
    answer:
      "Yes — the current documented public surface is shown in the API Surface Map above, generated from the API Contract Registry.",
  },
  {
    question: "Where is the API reference?",
    answer:
      "The complete API reference is available in our interactive API Reference Browser above, which renders real-time schemas and endpoint contracts directly from the contract registry.",
  },
  {
    question: "Is workforce SSO the same as API authentication?",
    answer:
      "No. Workforce SSO is identity-provider sign-in for people, whereas API authentication relies on provisioned client credentials or access tokens for server-to-server requests.",
  },
  {
    question: "What is the current API version?",
    answer:
      "The primary current stable version is v1. All versions, including Beta and Deprecated states, are clearly marked in our versioning section.",
  },
  {
    question: "Does every list endpoint support pagination and filtering?",
    answer:
      "Pagination, page size, filtering, sorting, and search are operation-specific — each capability appears only when explicitly documented for that exact endpoint contract.",
  },
  {
    question: "Can I safely retry a failed request?",
    answer:
      "Retry guidance is source-governed and operation-specific. While 429 errors support retries with backoff, generic retry advice for 5xx errors is prohibited on payroll-impacting write operations.",
  },
  {
    question: "What are the API rate limits?",
    answer:
      "Public limits are explicitly documented per operation where applicable. If no public limit exists, documentation states 'Public limit not documented' rather than fabricating a fixed number.",
  },
  {
    question: "Is there a sandbox environment?",
    answer:
      "Yes, an interactive Sandbox environment is available at sandbox.api.zoikopayroll.com for testing approved developer flows with synthetic data.",
  },
  {
    question: "How are breaking changes communicated?",
    answer:
      "Material changes and deprecations are published in the Changelog naming their exact change class and required action well before any approved retirement date.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Centered Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-base leading-none">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
            Questions about the Zoiko Payroll API
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200/80">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0A8FD0] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#0A8FD0] shrink-0 transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl">
                    {item.answer}
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
