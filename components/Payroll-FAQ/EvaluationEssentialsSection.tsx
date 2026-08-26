'use client';

import React, { useState } from 'react';

interface EvaluationItem {
  id: number;
  question: string;
  badge: string;
  answer?: string;
  subText?: string;
  scope?: string;
  reviewedDate?: string;
  linkText?: string;
  linkHref?: string;
}

const evaluationData: EvaluationItem[] = [
  {
    id: 1,
    question: "What is Zoiko Payroll?",
    badge: "General",
    answer: "Zoiko Payroll is a governed payroll platform for preparing, calculating, validating, reviewing, approving and completing payroll operations.",
    subText: "Specific workflows and available controls should be confirmed in current product information and documentation.",
    scope: "General",
    reviewedDate: "Reviewed Aug 2026",
    linkText: "View Product Overview / How Zoiko Payroll Works",
    linkHref: "#product-overview"
  },
  {
    id: 2,
    question: "Who is Zoiko Payroll for?",
    badge: "General"
  },
  {
    id: 3,
    question: "Does Zoiko Payroll support multiple jurisdictions?",
    badge: "Jurisdiction"
  },
  {
    id: 4,
    question: "How do we plan a payroll migration?",
    badge: "General"
  },
  {
    id: 5,
    question: "Where can I find pricing?",
    badge: "Plan"
  },
  {
    id: 6,
    question: "Where can I review security and trust information?",
    badge: "General"
  }
];

export default function EvaluationEssentialsSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Evaluation essentials
            </span>
          </div>
          
          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            The questions most evaluators ask first.
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed">
            Editorially selected, not a popularity or personalized ranking. Answer before CTA, every time.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {evaluationData.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden transition-shadow"
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sky-950 text-sm font-bold pr-4">
                    {item.question}
                  </span>

                  <div className="flex items-center space-x-4 shrink-0">
                    <span className="px-2.5 py-1 bg-sky-100 rounded-full text-sky-800 text-xs font-bold">
                      {item.badge}
                    </span>
                    <span className="text-sky-600 text-lg font-normal leading-none w-4 text-center select-none">
                      {isOpen ? '–' : '+'}
                    </span>
                  </div>
                </button>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-200 space-y-4">
                    <p className="text-sky-950 text-sm font-medium leading-relaxed">
                      {item.answer || "Detailed evaluation criteria and documentation for this item are provided in the primary system guide."}
                    </p>

                    {item.subText && (
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.subText}
                      </p>
                    )}

                    {/* Metadata & Handoff Link */}
                    <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center space-x-4 text-gray-400">
                        {item.scope && <span>Scope: {item.scope}</span>}
                        {item.reviewedDate && <span>{item.reviewedDate}</span>}
                      </div>

                      {item.linkText && item.linkHref && (
                        <a
                          href={item.linkHref}
                          className="text-sky-600 font-bold hover:underline inline-flex items-center space-x-1"
                        >
                          <span>&rarr;</span>
                          <span>{item.linkText}</span>
                        </a>
                      )}
                    </div>
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
