"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What can I find in the Help Center?",
    answer:
      "Approved support guidance and product help, with routing to Product Documentation, System Status, or Release Notes when that source owns the answer.",
  },
  {
    question:
      "What should I never type into the search bar or a support request?",
    answer:
      "Never enter passwords, bank details, tax identifiers, one-time codes, or other sensitive authentication information into the Help Center search or support requests.",
  },
  {
    question: "How do I check for an active outage?",
    answer:
      "Check the official System Status source for confirmed incidents and maintenance. Help Center articles do not independently declare an outage.",
  },
  {
    question: "Where do I find jurisdiction-specific payroll guidance?",
    answer:
      "Use the relevant regional or jurisdiction-specific payroll documentation provided through the approved Product Documentation and Help Center resources.",
  },
  {
    question: "What if I can't find an answer?",
    answer:
      "Try a different search phrase or browse the relevant help topic. If you still cannot find an answer, use an approved support channel for further assistance.",
  },
  {
    question: "Is my search history stored?",
    answer:
      "Search and support information is handled according to the applicable privacy and data-retention practices for the Help Center.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-[#eef3f7] px-4 py-14 sm:px-6 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-9 lg:px-24">
        {/* Heading */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4">
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
          <div className="flex w-full flex-col items-center pb-[0.58px]">
            <h2 className="m-0 text-center font-['Inter'] text-2xl font-extrabold leading-8 text-[#103653] sm:text-3xl sm:leading-10">
              How to use the Help Center safely and
              <br className="hidden sm:block" />
              effectively
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
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-['Inter'] text-sm font-bold leading-6 text-[#103653] sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-5 shrink-0 items-center justify-center font-['Inter'] text-xl font-normal leading-9 text-[#0099e5]">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-3 w-full max-w-[640px]">
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