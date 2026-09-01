"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "move-money",
    question: "Does Zoiko move money directly?",
    answer:
      "Zoiko coordinates funding, authorization, and routing through supported channels and licensed partner institutions. Where Zoiko is not the licensed executor, its role is strictly configuration-driven and auditable.",
  },
  {
    id: "duplicate-payments",
    question: "How are duplicate payments prevented?",
    answer:
      "Through stable idempotency controls and duplicate risk verification. Every release version and obligation is uniquely tracked, preventing blind resends or accidental duplicate instructions.",
  },
  {
    id: "late-funding",
    question: "What happens if funding arrives late?",
    answer:
      "If a funding deadline is missed or a shortfall occurs, the release is held or conditioned automatically. A shortfall never silently reduces a worker's payment.",
  },
  {
    id: "rejected-payment",
    question: "What happens to a rejected or returned payment?",
    answer:
      "Rejections create explicit exception records with designated owners. The system verifies duplicate risk and resolution prerequisites before allowing any retry.",
  },
  {
    id: "reconciliation",
    question: "How is a payment reconciled?",
    answer:
      "Reconciliation matches provider references and settlement receipts directly back to the original payroll obligation—separating fees and tracking recipient tokens without exposing raw bank credentials.",
  },
  {
    id: "ai-release",
    question: "Can AI release a payment?",
    answer:
      "No. AI within Zoiko is strictly advisory. It provides insights and risk flags but cannot approve, reroute, or execute payment releases.",
  },
];

export default function PaymentsOrchestrationFaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
            <span className="text-[#0A78C3] font-bold">—</span>
            <span>FAQ</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#07243B]">
            Questions about payments orchestration
          </h2>
        </div>

        {/* FAQ Accordion Box */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="transition-colors hover:bg-slate-50/40"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B]">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-5 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {faq.answer}
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
