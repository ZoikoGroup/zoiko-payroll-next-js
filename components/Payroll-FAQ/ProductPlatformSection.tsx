'use client';

import React, { useState } from 'react';

interface ProductFAQItem {
  id: number;
  question: string;
  badge: string;
  answer?: string;
  scope?: string;
  reviewedDate?: string;
  linkText?: string;
  linkHref?: string;
}

const productFaqData: ProductFAQItem[] = [
  {
    id: 1,
    question: "What does Zoiko Payroll do day-to-day?",
    badge: "General",
    answer: "It coordinates payroll preparation, calculation, validation, review, approval and completion in one controlled workflow.",
    scope: "General",
    reviewedDate: "Reviewed Aug 2026",
    linkText: "View Product Documentation",
    linkHref: "#product-documentation"
  },
  {
    id: 2,
    question: "Can Zoiko Payroll support approvals before payroll is completed?",
    badge: "Product"
  },
  {
    id: 3,
    question: "Can employees access their own payslips and records?",
    badge: "Product"
  },
  {
    id: 4,
    question: "Does Zoiko Payroll connect with other business systems?",
    badge: "Product"
  },
  {
    id: 5,
    question: "What is Zoiko One and how does it relate to Zoiko Payroll?",
    badge: "Product"
  },
  {
    id: 6,
    question: "Can I customize payroll workflows to match our organization?",
    badge: "Product"
  }
];

export default function ProductPlatformSection() {
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
              Product &amp; platform
            </span>
          </div>

          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            What Zoiko Payroll does — and where the current details live.
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {productFaqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden transition-shadow"
              >
                {/* Accordion Toggle Header */}
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

                {/* Expanded Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-200 space-y-4">
                    <p className="text-sky-950 text-sm font-medium leading-relaxed">
                      {item.answer || "Detailed specifications for this workflow feature are available in our latest platform feature documentation."}
                    </p>

                    {/* Meta info & Action Handoff */}
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
