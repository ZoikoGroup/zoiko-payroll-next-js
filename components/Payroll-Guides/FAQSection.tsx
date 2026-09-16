"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What are Zoiko Payroll Payroll Guides?",
    answer:
      "Practical general payroll education for processes, controls, reviews, records, reporting and implementation questions.",
  },
  {
    id: 2,
    question: "Are Payroll Guides the same as Product Documentation?",
    answer:
      "No. Product documentation explains how to use software features, whereas guides provide broader professional payroll education and context.",
  },
  {
    id: 3,
    question: "Where do I find country-specific payroll guidance?",
    answer:
      "Country-specific guidance is located in our dedicated regional sections and local compliance hubs linked throughout the resource library.",
  },
  {
    id: 4,
    question: "Where do I find global payroll guides?",
    answer:
      "Global payroll guides are available in our cross-border section, covering multi-country payroll structures, consolidation, and international best practices.",
  },
  {
    id: 5,
    question: "Do the guides provide legal or tax advice?",
    answer:
      "No. They are designed for educational purposes only and do not constitute formal legal, financial, or tax advice. Always consult qualified professionals.",
  },
  {
    id: 6,
    question: "Does a checklist prove we are compliant or ready?",
    answer:
      "No. Checklists are helpful operational tools for internal reviews, but they do not officially certify or guarantee legal compliance or operational readiness.",
  },
  {
    id: 7,
    question: "How can I tell if a guide is current?",
    answer:
      "Check the 'Last Updated' timestamp at the top of the guide, and cross-reference it with the latest regulatory changes and official platform announcements.",
  },
  {
    id: 8,
    question: "Can I download or print guides?",
    answer:
      "Yes, you can easily print or download most guides as PDF documents for offline training, internal sharing, or record-keeping.",
  },
  {
    id: 9,
    question: "Do I need to provide contact details to read guides?",
    answer:
      "No. Core educational guides are freely available to read online without requiring you to submit personal contact details or fill out lead forms.",
  },
  {
    id: 10,
    question: "What if a guide conflicts with Product Documentation?",
    answer:
      "Current product documentation and live software behavior always take precedence if any discrepancy arises between software features and general educational content.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Heading & Featured Card */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Frequently asked questions
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-sky-950 text-2xl font-extrabold leading-8">
              Questions about Payroll Guides
            </h2>
            <p className="text-gray-600 text-base leading-6">
              Direct answers first — deeper structure lives in the linked guide
              or authority.
            </p>
          </div>

          {/* Featured Card */}
          <div className="w-full bg-white rounded-2xl shadow-sm outline outline-1 outline-slate-200 overflow-hidden mt-4">
            <img
              src="/images/Payroll-Guides/team reviewing a practical guide.png"
              alt="Education preview"
              className="w-full h-44 object-cover"
            />
            <div className="p-5 space-y-1">
              <h3 className="text-sky-950 text-sm font-extrabold leading-5">
                Education, not instruction
              </h3>
              <p className="text-gray-600 text-xs leading-5">
                Guides explain concepts — current product truth always wins.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sky-950 text-base font-bold leading-6 pr-4 group-hover:text-sky-600 transition-colors">
                    {item.question}
                  </span>
                  <span className="text-sky-600 text-xl font-normal leading-none shrink-0 w-6 text-right select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="pt-2 pb-1 text-gray-600 text-sm leading-5">
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
