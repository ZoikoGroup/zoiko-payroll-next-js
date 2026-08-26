"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

// FAQ items list matching the provided image
const FAQ_ITEMS = [
  {
    question: "Does Zoiko Payroll require Zoiko One?",
    answer:
      "No. Zoiko Payroll is fully usable as a standalone product. Zoiko One is an optional, selected pathway.",
  },
  {
    question: "What is Zoiko One?",
    answer:
      "Zoiko One is the approved, selected connected-suite relationship between Zoiko Payroll and other Zoiko products, enabled only where explicitly configured for your organization.",
  },
  {
    question: "What data can be shared?",
    answer:
      "Data sharing is explicitly defined per active connection. Only data fields approved by domain owners are synced between verified systems.",
  },
  {
    question: "Does shared identity mean shared payroll access?",
    answer:
      "No. Shared or single sign-on access does not imply shared payroll authorization, shared data access, or bypassed payroll controls.",
  },
  {
    question: "Who owns the system of record?",
    answer:
      "Systems of record remain explicit per domain. Each domain maintains its own independent authority and operational truth.",
  },
  {
    question: "Can administration or reporting be shared?",
    answer:
      "Administration and reporting remain product-specific by default unless explicitly configured and verified for cross-product roles.",
  },
  {
    question: "How are connections approved?",
    answer:
      "Every connection decision requires a named domain owner to review and approve the purpose, scope, and validation before enablement.",
  },
  {
    question: "What happens when a connection fails?",
    answer:
      "Built-in health monitoring, partial-failure handling, and duplicate prevention ensure operational stability without interrupting core payroll processing.",
  },
  {
    question: "Are there bundled prices or discounts?",
    answer:
      "Commercial terms and pricing structures are governed by Pricing/Sales authority independently per product and connection tier.",
  },
  {
    question: "Where is implementation detail documented?",
    answer:
      "Product-specific mechanics, field mappings, permissions, and failure handling live in Product > Zoiko One Integration.",
  },
];

export default function FAQSection() {
  // First item open by default to match screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1928] text-center">
          Frequently asked questions
        </h2>

        {/* Accordion List */}
        <div className="divide-y divide-[#E1E8ED] border-t border-b border-[#E1E8ED]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1928] group-hover:text-[#0281D3] transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#0281D3]">
                    {isOpen ? (
                      <X className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8">
                    <p className="text-xs sm:text-sm text-[#5C6E7E] leading-relaxed">
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
