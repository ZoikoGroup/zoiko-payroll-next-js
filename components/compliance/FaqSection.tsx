"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Zoiko Payroll SOC 2 certified?",
      answer:
        'SOC 2 is a report or examination, not a certification — Zoiko Payroll never uses the phrase "SOC 2 certified." See the current SOC 2 report status and scope above.',
    },
    {
      question: "What's the difference between SOC 1 and SOC 2?",
      answer:
        "SOC 1 focuses on financial-control assurance and internal controls over financial reporting, whereas SOC 2 evaluates security, availability, processing integrity, confidentiality, and privacy based on Trust Services Criteria.",
    },
    {
      question:
        "Does ISO 27001 mean Zoiko is compliant with my country's payroll laws?",
      answer:
        "ISO 27001 verifies information security management systems, but local payroll statutory compliance requires dedicated assessment against regional legislation.",
    },
    {
      question: "Can my auditor get access to Zoiko's reports?",
      answer:
        "Yes, through our procurement-grade evidence access workflow, qualified auditors and prospects under NDA can review current scope and reports.",
    },
    {
      question: "What is a bridge letter?",
      answer:
        "A bridge letter provides interim coverage for the period between the end of an audited report period and a new audit, but it is never a new audit itself.",
    },
    {
      question:
        "Does a parent company or cloud provider's certification cover Zoiko Payroll?",
      answer:
        "No. Infrastructure or parent certifications do not automatically extend to Zoiko Payroll's application-layer controls and specific features.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-4 text-center mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Questions about compliance and assurance
          </h2>
        </div>

        {/* FAQ List Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-xs overflow-hidden px-6 sm:px-8 py-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`py-6 ${
                  idx !== faqs.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-base font-extrabold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-base font-bold text-[#0A78C3] shrink-0 ml-4 w-6 h-6 flex items-center justify-center">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-8">
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
