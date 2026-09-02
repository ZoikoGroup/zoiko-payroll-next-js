"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What payroll records exist?",
    answer:
      "Payroll results, worker statements, employer liabilities, payment records, statutory artifacts, accounting records and control/audit records — see the record classes above for the full taxonomy.",
  },
  {
    question: "How do reports stay tied to a specific payroll run?",
    answer:
      "Every generated report maintains an immutable lineage reference back to its exact source run version, schema definition, and execution timestamp, ensuring numbers are always verifiable against base execution data.",
  },
  {
    question: "What happens to historical or corrected reports?",
    answer:
      "Historical versions are preserved as filed and flagged as superseded. Corrected runs spawn a new version (e.g., Run v3) with tracked variances, preserved approval trails, and clear provenance reason logs.",
  },
  {
    question: "How are exports handled securely?",
    answer:
      "Exports are governed by strict RBAC/ABAC permissions with sensitive field masking by default. Operations use expiring secure links, encrypted managed file transfers, and full audit logging instead of unencrypted email attachments.",
  },
  {
    question: "How does retention work?",
    answer:
      "Retention policies are managed through versioned definitions and legal hold rules. Records retain their compliance metadata, schema version, and immutable audit trails throughout their governed lifecycle.",
  },
  {
    question: "How does global consolidation handle currency?",
    answer:
      "Local currency remains authoritative for statutory reconciliation. Global reports display normalized totals with clear labels for reporting currency, FX source, rate date, and operational vs. analytical classification.",
  },
  {
    question: "Does this page prove a payment was completed?",
    answer:
      "Payment status reports link directly to downstream payment execution evidence, bank clearing acknowledgments, and accounting posting references to verify end-to-end completion.",
  },
  {
    question: "What can AI assistance do here?",
    answer:
      "AI helps search reports, summarize variances, explain field lineage, and draft summaries from approved final records. It operates deterministically and can never grant permissions, alter definitions, or override status.",
  },
];

export default function FAQRecordsReportsSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#07243B] leading-tight">
            Questions about Records and Reports
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {faqData.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="py-5 transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#07243B] hover:text-[#0A8FD0] transition-colors cursor-pointer group"
                >
                  <span className="leading-snug">{item.question}</span>
                  <span className="text-[#0A8FD0] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
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
