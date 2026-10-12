"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is Implementation Support?",
    answer:
      "A project-aware resolution layer for active implementation, migration, expansion and material reconfiguration — not a generic ticket queue.",
  },
  {
    id: "2",
    question: "How is severity determined for a blocker?",
    answer:
      "Severity reflects operational and go-live impact rather than title or urgency alone. S1 issues involve material calculation defects, blocked go-lives, or unmitigated security risks.",
  },
  {
    id: "3",
    question: "Can a target date override a readiness gate?",
    answer:
      "No. Target dates are targets, not guarantees. A readiness gate remains blocked until the required authorized evidence is provided and validated.",
  },
  {
    id: "4",
    question: "How do I submit evidence securely?",
    answer:
      "All requested evidence must be uploaded directly via the dedicated secure channel. Never transmit PII, credentials, or secrets over general email.",
  },
  {
    id: "5",
    question: "What happens during Hypercare?",
    answer:
      "A dedicated team remains assigned post go-live to monitor execution, resolve remaining operational issues, and prepare for a formal BAU handover.",
  },
  {
    id: "6",
    question: "How do I escalate a critical issue?",
    answer:
      "You can trigger an escalation through the portal dashboard, initiating an S1 Critical Bridge to instantly involve key technical leads.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Questions about Implementation Support
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-100 max-w-3xl mx-auto">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-5 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A8FD0] transition-colors">
                    {item.question}
                  </span>
                  <div className="text-[#0A8FD0] shrink-0 p-1">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && item.answer && (
                  <div className="mt-3 pr-8">
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
