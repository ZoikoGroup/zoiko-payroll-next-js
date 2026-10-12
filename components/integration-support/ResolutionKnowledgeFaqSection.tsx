"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const resolutionSummaryData = [
  {
    label: "Resolution type",
    value: "Workaround applied — permanent fix pending",
  },
  {
    label: "Root-cause confidence",
    value: "Probable",
  },
  {
    label: "Affected scope",
    value: "4 records, DE-01, Aug cycle",
  },
  {
    label: "Validation evidence",
    value: "Reconciliation re-run, 4/4 matched",
  },
  {
    label: "Follow-up",
    value: "Monitor next cycle before closing",
  },
];

const faqData: FAQItem[] = [
  {
    id: "include",
    question: "What should I include when I submit a case?",
    answer:
      "Area, issue type, environment, affected scope and safe IDs (correlation, batch, mapping version) — never credentials or raw payloads.",
  },
  {
    id: "never-send",
    question: "What should I never send?",
    answer:
      "Never send raw credentials, passwords, private API keys, unredacted PII, full bank exports, or raw payroll payloads.",
  },
  {
    id: "payment-outcome",
    question: "A payment outcome is unknown — should I resend it?",
    answer:
      "No. Check the payment status and reconciliation logs using your correlation ID before requesting or attempting any resend to avoid duplicate transactions.",
  },
  {
    id: "waiting-status",
    question: 'What does "waiting Zoiko" vs "waiting customer" mean?',
    answer:
      '"Waiting Zoiko" indicates the internal engineering or integration team is currently reviewing the issue. "Waiting customer" means additional safe context or validation is needed from your side.',
  },
  {
    id: "security-concern",
    question: "How do I report a security concern?",
    answer:
      "Submit through our dedicated security intake workflow or select the 'Emerging security concern' classification during ticket submission.",
  },
  {
    id: "sla-guarantee",
    question: "Will my case get an SLA or guaranteed response time?",
    answer:
      "Formal severity labels and SLAs only apply when an approved Support Policy defines them. Impact is captured directly rather than using an invented SLA.",
  },
];

export default function ResolutionKnowledgeFaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>("include");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>RESOLUTION + KNOWLEDGE / FAQ</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[26px] font-extrabold tracking-tight text-[#07243B] leading-tight">
            Workaround and permanent fix are never blurred together.
          </h2>
        </div>

        {/* Resolution Details Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="divide-y divide-slate-100/80">
            {resolutionSummaryData.map((row, idx) => (
              <div
                key={idx}
                className="py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm"
              >
                <span className="text-slate-400 font-normal">{row.label}</span>
                <span className="font-bold text-[#07243B] text-right font-mono">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Slate Banner */}
        <div className="bg-[#1C3B53] rounded-2xl p-6 sm:p-8 text-white space-y-1 shadow-lg">
          <h3 className="text-sm sm:text-base font-bold text-white">
            Confirmed, probable or unconfirmed — never dressed up as certain.
          </h3>
          <p className="text-xs text-slate-300">
            Root-cause confidence is stated honestly, every time.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="pt-6 space-y-2 max-w-4xl mx-auto">
          <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="py-4 space-y-2">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#07243B] group-hover:text-[#0A8FD0]">
                      {faq.question}
                    </span>
                    <span className="text-[#0A8FD0] shrink-0">
                      {isOpen ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-8 pt-1">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
