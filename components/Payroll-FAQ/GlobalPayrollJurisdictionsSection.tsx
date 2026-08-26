'use client';

import React, { useState } from 'react';

interface GlobalPayrollFAQItem {
  id: number;
  question: string;
  badge: string;
  answer?: string;
  detail?: string;
  scope?: string;
  reviewedDate?: string;
  linkText?: string;
  linkHref?: string;
}

const globalPayrollFaqData: GlobalPayrollFAQItem[] = [
  {
    id: 1,
    question: "Does Zoiko Payroll support multiple jurisdictions?",
    badge: "Jurisdiction",
    answer: "Zoiko Payroll has a Global Payroll operating model for organizations working across jurisdictions.",
    detail: "Current jurisdiction availability and the requirements that apply in a specific market are governed by the coverage and local-requirements resources, not by this FAQ.",
    scope: "Jurisdiction",
    reviewedDate: "Reviewed Aug 2026",
    linkText: "Check Global Payroll / Jurisdiction Coverage",
    linkHref: "#jurisdiction-coverage"
  },
  {
    id: 2,
    question: "Are all local requirements handled the same way?",
    badge: "Jurisdiction"
  },
  {
    id: 3,
    question: "Where can I check if my country is currently supported?",
    badge: "Jurisdiction"
  }
];

export const GlobalPayrollJurisdictionsSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-indigo-50/60 border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Global payroll &amp; jurisdictions
            </span>
          </div>

          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            Coverage and local requirements stay with<br className="hidden sm:inline" />
            their canonical authority.
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {globalPayrollFaqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                {/* Accordion Header / Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50/60 transition-colors focus:outline-hidden"
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

                {/* Collapsible Content Area */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-200 space-y-4">
                    {item.answer && (
                      <p className="text-sky-950 text-sm font-medium leading-relaxed">
                        {item.answer}
                      </p>
                    )}

                    {item.detail ? (
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.detail}
                      </p>
                    ) : (
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Please refer to our global coverage map and country-specific compliance guides for up-to-date legal and payroll processing details.
                      </p>
                    )}

                    {/* Metadata Footer & Direct Link Action */}
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
};
