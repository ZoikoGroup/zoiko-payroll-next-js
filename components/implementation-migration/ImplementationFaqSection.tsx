"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// FAQ Data Array
const FAQ_ITEMS = [
  {
    question: "Does the page promise a fixed implementation timeline?",
    answer: "No. Timeline depends on scope, jurisdiction, data and contract.",
    defaultOpen: true,
  },
  {
    question: "What is included in payroll data migration?",
    answer:
      "Approved data, history, and artifacts required for the target operating model based on purpose, retention, access, and source-of-record rules.",
    defaultOpen: false,
  },
  {
    question: "How is migrated data validated?",
    answer:
      "Validation is performed by domain using explicit source and target comparisons, variance recording, and predefined approval tolerances.",
    defaultOpen: false,
  },
  {
    question: "What is a parallel payroll run?",
    answer:
      "A dual-system comparison run matching source and target payroll metrics to verify calculation accuracy before live execution.",
    defaultOpen: false,
  },
  {
    question: "Who decides go-live?",
    answer:
      "Accountable authorities evaluate evidence-based readiness gates to issue formal GO, HOLD, PARTIAL GO, or ROLLBACK decisions.",
    defaultOpen: false,
  },
  {
    question: "Can one market launch while another is held?",
    answer:
      "Yes. Market waves are evaluated independently, allowing individual jurisdiction launches without automatically approving others.",
    defaultOpen: false,
  },
  {
    question: "What happens after go-live?",
    answer:
      "The program enters the Stabilize / Optimize phase focusing on issue resolution, initial cycle reviews, and formal operational handoff.",
    defaultOpen: false,
  },
];

export default function ImplementationFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    FAQ_ITEMS.map((item, index) => (item.defaultOpen ? index : -1)).filter(
      (index) => index !== -1
    )
  );

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1928] leading-tight">
            Questions about implementation
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="divide-y divide-[#E1E8ED] border-t border-b border-[#E1E8ED]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A1928] group-hover:text-[#0281D3] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#0281D3] shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm sm:text-base text-[#5C6E7E] leading-relaxed">
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