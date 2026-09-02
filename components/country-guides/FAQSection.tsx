"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a country payroll guide?",
    answer:
      "A country payroll guide explains the payroll rules and operating context that commonly affect employers in a specific jurisdiction — payroll cycles, withholding, social contributions, filings, payslips, payments and year-end obligations.",
  },
  {
    question: "Does a guide mean Zoiko Payroll is available there?",
    answer:
      "Not necessarily. Guide content and commercial payroll coverage are governed separately. To confirm current operational availability, please consult our Jurisdiction Directory.",
  },
  {
    question: "How current are the payroll guides?",
    answer:
      "Every guide features a visible review date and is updated as statutory thresholds, tax rates, or regulatory filing calendars change through our fixed evidence governance workflow.",
  },
  {
    question: "Are the guides legal or tax advice?",
    answer:
      "No. Guides are for informational purposes only. Statutory requirements change frequently and should always be verified with cited primary authorities or a qualified advisor.",
  },
  {
    question: "Why can payroll rules vary within one country?",
    answer:
      "Many jurisdictions operate under federal or regional structures where state, provincial, or local governments impose additional income taxes, social contributions, or labor regulations alongside central rules.",
  },
  {
    question: "Where do I find setup information to implement payroll?",
    answer:
      "Implementation and employer setup details are covered under the Employer Set-up topic section and within individual country guides under local registration and authority relationships.",
  },
];

const relatedPages = [
  "Jurisdiction Directory",
  "Local Payroll Requirements",
  "Global Payroll Guide",
  "Payroll Glossary",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Questions about the country guides.
          </h2>
        </div>

        {/* Content Layout: Accordion (7 Cols) + Related Pages Sidebar Card (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion List */}
          <div className="lg:col-span-8 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A8FD0] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[#0A8FD0] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Related Pages Sidebar Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#0A2540] text-white p-6 sm:p-7 rounded-2xl shadow-xl space-y-6">
              <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                RELATED PAGES
              </div>

              {/* 2x2 Grid of Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                {relatedPages.map((page, pIdx) => (
                  <button
                    key={pIdx}
                    className="bg-white text-[#07243B] hover:bg-slate-100 text-[11px] font-bold py-2.5 px-3 rounded-xl transition-all text-center leading-tight shadow-xs flex items-center justify-center min-h-[44px]"
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Disclaimer Paragraph */}
              <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                Guide content and commercial payroll coverage are governed
                separately. Use the Jurisdiction Directory to confirm current
                capabilities and delivery models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
