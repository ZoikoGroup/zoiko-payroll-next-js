"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CountryGuidesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a country payroll guide?",
      answer: (
        <>
          A country payroll guide explains the payroll rules and operating context that commonly affect
          <br />
          employers in a specific jurisdiction — payroll cycles, withholding, social contributions, filings,
          <br />
          payslips, payments and year-end obligations.
        </>
      ),
    },
    {
      question: "Does a guide mean Zoiko Payroll is available there?",
      answer:
        "No, publishing a country guide does not guarantee active commercial availability. Coverage and support depend on specific jurisdictional capabilities and service delivery options.",
    },
    {
      question: "How current are the payroll guides?",
      answer:
        "Guides are reviewed periodically based on regulatory updates and material legislative changes. Effective dates and source verification timestamps are noted where applicable.",
    },
    {
      question: "Are the guides legal or tax advice?",
      answer:
        "No, all guides are provided for general informational purposes only and do not constitute formal legal, tax, or professional payroll advisory advice.",
    },
    {
      question: "Why can payroll rules vary within one country?",
      answer:
        "Rules may vary due to sub-national jurisdiction levels (such as state, provincial, or local tax authorities), sector-specific collective bargaining agreements, or company size thresholds.",
    },
    {
      question: "Where do I find setup information to implement payroll?",
      answer:
        "Detailed onboarding and implementation workflows can be accessed via the Jurisdiction Directory or through your dedicated implementation workspace.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-['Inter',sans-serif]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:pl-40 lg:pr-24 flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="flex items-center gap-1.5 text-sky-600 text-xs font-bold uppercase tracking-wide">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-[#0A1626] text-3xl font-bold leading-10">
            Questions about the country guides.
          </h2>
        </div>

        {/* Main Content: Accordion + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start justify-between">
          
          {/* FAQ Accordion List */}
          <div className="flex-1 max-w-[680px] w-full flex flex-col border-t border-[#C9DAE8]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-[#C9DAE8] py-5 flex flex-col gap-3 transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-[#0A1626] text-base font-bold leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-sky-600 text-lg font-normal shrink-0 ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="text-[#475569] text-sm font-normal leading-6 pt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Related Pages Sidebar Card */}
          <div className="w-full lg:w-[380px] shrink-0 p-6 bg-[#0E2A47] rounded-2xl flex flex-col gap-4 text-white shadow-sm">
            
            {/* Header */}
            <span className="text-[#8697A8] text-xs font-bold uppercase tracking-wide">
              RELATED PAGES
            </span>

            {/* 2x2 Grid of pill buttons (all 1 line strictly) */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <Link
                href="#"
                className="px-2 py-2.5 bg-white rounded-lg text-[#0A1626] text-[11px] font-bold text-center flex items-center justify-center whitespace-nowrap hover:bg-slate-50 transition-colors shadow-2xs leading-none"
              >
                Jurisdiction Directory
              </Link>

              <Link
                href="#"
                className="px-1.5 py-2.5 bg-white rounded-lg text-[#0A1626] text-[10.5px] font-bold text-center flex items-center justify-center whitespace-nowrap hover:bg-slate-50 transition-colors shadow-2xs leading-none"
              >
                Local Payroll Requirements
              </Link>

              <Link
                href="#"
                className="px-2 py-2.5 bg-white rounded-lg text-[#0A1626] text-[11px] font-bold text-center flex items-center justify-center whitespace-nowrap hover:bg-slate-50 transition-colors shadow-2xs leading-none"
              >
                Global Payroll Guide
              </Link>

              <Link
                href="#"
                className="px-2 py-2.5 bg-white rounded-lg text-[#0A1626] text-[11px] font-bold text-center flex items-center justify-center whitespace-nowrap hover:bg-slate-50 transition-colors shadow-2xs leading-none"
              >
                Payroll Glossary
              </Link>
            </div>

            {/* Explanatory Text in color/azure/85 */}
            <p className="text-[#B9CDE3] text-xs font-normal leading-5 pt-1">
              Guide content and commercial payroll coverage
              <br />
              are governed separately. Use the Jurisdiction
              <br />
              Directory to confirm current capabilities and
              <br />
              delivery models.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}