"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What is Zoiko Group?",
    answer:
      "The verified parent-group context for Zoiko Payroll and the wider Zoiko technology ecosystem.",
  },
  {
    id: "item-2",
    question: "Who owns or operates Zoiko Payroll?",
    answer:
      "Zoiko Payroll is operated by Zoiko Tech Inc., acting under explicit group authority and governance records.",
  },
  {
    id: "item-3",
    question: "Is Zoiko Payroll a separate company?",
    answer:
      "Zoiko Payroll operates as a distinct product entity within the defined corporate governance ecosystem.",
  },
  {
    id: "item-4",
    question: "Which products are part of the Zoiko ecosystem?",
    answer:
      "Only active, publicly approved products—such as Zoiko Payroll, Zoiko One, and Zoiko Identity—are registered in the ecosystem.",
  },
  {
    id: "item-5",
    question: "Do Zoiko products automatically share data?",
    answer:
      "No. Data movement requires explicit, approved pathways and is never automatically enabled across products.",
  },
  {
    id: "item-6",
    question: "What is Zoiko One?",
    answer:
      "Zoiko One is an approved connected-suite pathway for eligible ecosystem product relationships.",
  },
  {
    id: "item-7",
    question: "Does one Zoiko contract cover every product?",
    answer:
      "No. Group membership does not create a single bundled commercial contract or unified entitlement.",
  },
  {
    id: "item-8",
    question: "Where can I verify security and service status?",
    answer:
      "You can visit our dedicated Trust & Security portal and System Status page for real-time operational updates.",
  },
];

export default function FAQSection() {
  // First item is open by default to match the design image
  const [openId, setOpenId] = useState<string | null>("item-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Content */}
        <div className="text-center space-y-3">
          {/* Category Tag */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-wider text-[#0284C7] uppercase">
            <span className="font-bold">/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Title (32px) */}
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Ownership and ecosystem questions, answered directly
          </h2>
        </div>

        {/* FAQ Accordion Container */}
        <div className="divide-y divide-gray-100 max-w-3xl mx-auto border-b border-gray-100">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-4 sm:py-5">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {item.question}
                  </span>

                  {/* Toggle Icon */}
                  <span className="text-[#0284C7] shrink-0 p-1">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed pr-8">
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
