"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I know if this is a platform incident?",
    answer:
      "Check the System Status strip above — a confirmed incident is shown separately from a tenant-specific configuration or data issue. Unknown cause is never assumed to be a platform incident.",
  },
  {
    question: "My payroll deadline is at risk — what do I do?",
    answer:
      "Raise an S1 or S2 support case immediately through the portal. Ensure you attach safe diagnostic data and tag the affected scope so our team can initiate priority review or an operational bridge.",
  },
  {
    question: "Can support change a calculation result for me?",
    answer:
      "No. Support cannot manually overwrite or alter calculation outcomes to preserve audit integrity and compliance lineage. All adjustments must be made via input updates or statutory rule reviews.",
  },
  {
    question: "Can support bypass a missing approver?",
    answer:
      "No. Support never bypasses authorization or maker-checker controls. Missing approvers must be assigned or re-delegated within your organizational security settings.",
  },
  {
    question: "How are payment and filing issues handled?",
    answer:
      "Payment and filing statuses are tracked transparently in real time. Issues are routed directly to the designated owner or provider to prevent blind retries and duplicate execution.",
  },
  {
    question: "Can I reopen a closed payroll period?",
    answer:
      "Reopening a closed period requires controlled access with explicit evidence and audit authorization. Requests must follow the close checklist protocol.",
  },
  {
    question: "What employee access actions are available?",
    answer:
      "Administrators can send invitations, reset access, control document publications, and manage former-employee access policies directly through the admin portal.",
  },
  {
    question: "What should I never include in a case?",
    answer:
      "Never include employee passwords, MFA secrets, API keys, full bank account numbers, or unnecessary PII in ordinary case text or general attachments.",
  },
];

export default function FAQPayrollAdminSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[32px] font-bold tracking-[1px] text-[#07243B] leading-tight">
            Questions about Payroll Administrator Help
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="divide-y max-w-4xl mx-auto divide-slate-200/80">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] tracking-[1px] group-hover:text-[#0A8FD0] transition-colors">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-[#0A8FD0] transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && item.answer && (
                  <div className="pt-3 pr-8 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed tracking-[1px] transition-all">
                    <p>{item.answer}</p>
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
