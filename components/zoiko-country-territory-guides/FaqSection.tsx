"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a country payroll guide?",
    answer:
      "A country payroll guide explains the payroll rules and operating context that commonly affect employers in a specific jurisdiction — payroll cycles, withholding, social contributions, filings, payslips, payments and year-end obligations.",
  },
  {
    question: "Does a guide mean Zoiko Payroll is available there?",
    answer:
      "Not necessarily. A guide provides informational context about payroll rules in a jurisdiction. Commercial availability is covered separately in the Jurisdiction Directory.",
  },
  {
    question: "How current are the payroll guides?",
    answer:
      "Every guide displays a review date. High-risk numeric facts are verified against primary sources and effective-dated where applicable.",
  },
  {
    question: "Are the guides legal or tax advice?",
    answer:
      "No. Guide content is informational only and does not constitute legal, tax, accounting, payroll, employment or other professional advice.",
  },
  {
    question: "Why can payroll rules vary within one country?",
    answer:
      "Many countries have sub-jurisdictional rules — state, provincial, cantonal or municipal — that can materially affect payroll obligations, rates and filing requirements.",
  },
  {
    question: "Where do I find setup information to implement payroll?",
    answer:
      "Setup and implementation guidance is covered in the Local Payroll Requirements section and implementation resources, not in the country guides themselves.",
  },
];

const relatedPages = [
  "Jurisdiction Directory",
  "Local Payroll Requirements",
  "Global Payroll Guide",
  "Payroll Glossary",
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white border-t border-[#E2E8F0] py-20">
      <div className="w-full max-w-[1440px] mx-auto pl-10 pr-6 sm:pl-20 sm:pr-12 lg:pl-40 lg:pr-24 flex flex-col gap-10">
        {/* Header */}
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="relative h-3.5">
            <div className="w-1.5 h-3.5 absolute left-[-1.48px] top-0 bg-sky-600 rounded-[1px]" />
            <div className="absolute left-[11px] top-0 text-sky-600 text-xs font-bold font-['Inter'] uppercase tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>
          <h2 className="text-[#082F49] text-3xl font-bold font-['Inter'] leading-10">
            Questions about the country guides.
          </h2>
        </div>

        {/* Content */}
        <div className="flex gap-10">
          {/* FAQ List */}
          <div className="flex-1 flex flex-col">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`py-5 ${
                  idx < faqs.length - 1 ? "border-b border-[#E2E8F0]" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="text-[#082F49] text-base font-bold font-['Inter']">
                    {faq.question}
                  </span>
                  <span className="text-sky-600 text-lg font-normal font-['Inter']">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </div>
                {openIndex === idx && (
                  <div className="mt-3 max-w-[620px]">
                    <p className="text-[#4E6172] text-sm font-normal font-['Inter'] leading-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Pages Sidebar */}
          <div className="w-96 px-8 py-6 bg-gradient-to-br from-[#0F4C75] to-[#1B6EB5] rounded-xl flex flex-col gap-4 shrink-0">
            <span className="text-[#64748B] text-xs font-bold font-['Inter'] uppercase tracking-wide">
              Related pages
            </span>
            <div className="flex flex-col gap-2">
              {relatedPages.map((page) => (
                <div
                  key={page}
                  className="px-3 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex items-center justify-center"
                >
                  <span className="text-[#082F49] text-xs font-bold font-['Inter'] text-center">
                    {page}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[#94A3B8] text-xs font-normal font-['Inter'] leading-5">
              Guide content and commercial payroll coverage are governed separately. Use the
              Jurisdiction Directory to confirm current capabilities and delivery models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
