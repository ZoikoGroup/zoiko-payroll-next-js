"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What are Deductions and Adjustments?",
    answer:
      "A structured workflow for managing recurring, one-time and corrective payroll-related changes, with type, timing, status, validation and history kept visible throughout.",
  },
  {
    question: "What change types are supported publicly?",
    answer:
      "Supported change types depend on the approved product and payroll configuration. Publicly documented change types should be used where applicable.",
  },
  {
    question: "How are validation and corrections represented?",
    answer:
      "Validation and corrections are represented as distinct states and linked records where supported, keeping the original source record visible rather than silently replacing it.",
  },
  {
    question: "How does this relate to Payroll Processing?",
    answer:
      "Deductions and adjustments can flow into payroll processing where the relevant workflow and integration are supported.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-[#EAF4FC] px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-9 px-0 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-4">
          {/* Section Label */}
          <div className="flex w-full items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-xs bg-color-azure-43" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-color-azure-43">
              Frequently asked questions
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="text-center font-['Inter'] text-3xl font-extrabold leading-10 text-color-azure-17-4">
              Questions about Deductions and
              <br />
              Adjustments
            </h2>
          </div>
        </div>

        {/* FAQ Container */}
        <div className="flex w-full max-w-[760px] flex-col items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="flex w-full flex-col items-start border-b border-[#D5E1EA] py-4"
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-9 w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-['Inter'] text-base font-bold leading-6 text-color-azure-17-4">
                    {faq.question}
                  </span>

                  {/* Plus / Minus */}
                  <span className="flex h-9 w-4 shrink-0 items-center justify-center font-['Inter'] text-xl font-normal leading-9 text-color-azure-43">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-3 flex w-full max-w-[640px] flex-col items-start">
                    <p className="font-['Inter'] text-sm font-normal leading-6 text-color-grey-39">
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