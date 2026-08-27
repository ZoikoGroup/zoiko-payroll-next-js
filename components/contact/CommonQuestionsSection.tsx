"use client";

import React from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const commonQuestionsData: FAQItem[] = [
  {
    question: "Can I send payroll files here?",
    answer:
      "No — never through a public form. A secure follow-up route is provided if needed.",
  },
  {
    question: "How fast will I hear back?",
    answer:
      "Response time depends on the route — we don't promise a universal turnaround.",
  },
  {
    question: "Not sure which route?",
    answer: "Pick General — we'll re-route it internally for you.",
  },
  {
    question: "Can I call or email directly?",
    answer: (
      <span>
        Use <a href="mailto:sales@zoikopayroll.com">sales@zoikopayroll.com</a>{" "}
        or <a href="mailto:press@zoikopayroll.com">press@zoikopayroll.com</a> —
        role-based addresses only.
      </span>
    ),
  },
];

export default function CommonQuestionsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-[28px] font-bold text-[#0F172A] tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Outer Card Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100 overflow-hidden">
          {commonQuestionsData.map((item, idx) => (
            <div key={idx} className="p-6 sm:p-7 space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight">
                {item.question}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
