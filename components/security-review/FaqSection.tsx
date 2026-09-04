"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Which certifications does Zoiko Payroll hold?",
    answer:
      "Only certifications and attestations that are current, verified and in scope are shown. If something isn't currently verified, we say so directly.",
  },
  {
    question: "Can we access SOC reports or ISO certificates?",
    answer:
      "Yes, current SOC reports and ISO certificates are available through our secure assurance library and controlled channels upon request.",
  },
  {
    question: "Does Zoiko Payroll support SSO and MFA?",
    answer:
      "Yes, enterprise single sign-on (SSO) and multi-factor authentication (MFA) options are supported depending on your plan and product scope.",
  },
  {
    question: "Can we receive a penetration-test report?",
    answer:
      "Detailed penetration-test reports and architecture summaries can be requested via our secure data-room access following verification.",
  },
  {
    question: "Can we submit our own security questionnaire?",
    answer:
      "Yes, we support SIG, CAIQ, and custom security questionnaire intake through our secure upload portal or assisted workflow.",
  },
  {
    question: "Can AI answer our security questionnaire automatically?",
    answer:
      "AI features operate under strict data boundaries and governance controls with human review approvals where required.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              FAQ
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Security questions, answered plainly.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B]">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#E6F3FC] text-[#0A78C3] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-1">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-3">
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
