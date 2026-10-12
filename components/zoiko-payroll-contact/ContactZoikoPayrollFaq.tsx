"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How do I contact Zoiko Payroll sales?",
    answer:
      "Use Book a demo for a guided evaluation, or choose Sales on this page to send a commercial inquiry.",
  },
  {
    question: "How do I get Zoiko Payroll support?",
    answer:
      "Choose Support from the available contact routes to get product or account assistance from the Zoiko Payroll support team.",
  },
  {
    question: "How do I submit a privacy request?",
    answer:
      "Choose Privacy to submit a personal-data or privacy-rights request through the appropriate Zoiko Payroll route.",
  },
  {
    question: "Where should journalists contact Zoiko Payroll?",
    answer:
      "Choose Press for approved company information, media inquiries, commentary, interviews, or other media resources.",
  },
  {
    question:
      "Can I send payroll records or bank details through the Contact form?",
    answer:
      "No. Do not send payroll records, tax IDs, bank details, passwords, authentication codes, or other sensitive payroll information through a general contact form.",
  },
  {
    question: "Can I attach files?",
    answer:
      "No. File uploads are not accepted through the default contact form. If supporting documents are required, the appropriate team will provide a secure follow-up method.",
  },
];

export default function ContactZoikoPayrollFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-[#eef3f7] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-9 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0099e5]" />
            </div>

            <span className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0099e5]">
              Frequently asked questions
            </span>
          </div>

          {/* Title */}
          <div className="flex w-full flex-col items-center">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              Questions about contacting Zoiko Payroll
            </h2>
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex w-full max-w-[760px] flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="w-full border-b border-[#d9e1e7] py-4"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-9 w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-['Inter'] text-sm font-bold leading-6 text-[#103653] sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-4 shrink-0 items-center justify-center font-['Inter'] text-xl font-normal leading-9 text-[#0099e5]">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-3 flex w-full max-w-[640px] flex-col items-start">
                    <p className="m-0 font-['Inter'] text-sm font-normal leading-6 text-[#636f78]">
                      {faq.answer}
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