"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is the difference between Legal Notices and the Terms of Use?",
    answer:
      "Legal Notices explains approved public notices (operator identity, IP, third-party attribution, and similar) with their scope and status. The Terms of Use and other governing documents remain the operative source for rights and obligations — this hub never duplicates their clauses.",
  },
  {
    question: "How do I know if a notice is currently in effect?",
    answer:
      "A notice is currently in effect when it is identified as the current record and has not been superseded or corrected by a later approved version.",
  },
  {
    question: 'What does "Superseded" or "Corrected" mean?',
    answer:
      "Superseded means a prior notice has been replaced by a newer current record. Corrected means an existing record was updated to address an approved correction while preserving the historical record.",
  },
  {
    question: "Are jurisdiction-specific notices shown based on my location?",
    answer:
      "No. Jurisdiction-specific notices are shown only where the applicable scope has been explicitly approved. They are not inferred from your location or IP address.",
  },
  {
    question: "Can I download or print a current notice?",
    answer:
      "Yes. Current notices can be printed or downloaded while preserving their status, version, and effective context.",
  },
  {
    question: "Where do I send a formal legal notice or rights request?",
    answer:
      "Formal legal notices and rights requests should be submitted through the specialist route designated for that communication type rather than through a general inquiry channel.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#F7FAFC] px-6 py-16 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-9 lg:px-24">
        {/* Header */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5">
          {/* Label */}
          <div className="inline-flex items-center justify-center gap-1.5">
            <div className="flex h-5 items-center justify-center py-[3px]">
              <div className="h-3.5 w-1.5 rounded-[2px] bg-[#0A8FD0]" />
            </div>

            <div className="text-center font-['Inter'] text-xs font-bold uppercase leading-5 tracking-wider text-[#0A8FD0]">
              Frequently asked questions
            </div>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-center">
            <h2 className="text-center font-['Inter'] text-3xl font-extrabold leading-10 text-[#0D3554]">
              Questions about Legal Notices
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
                className="flex w-full flex-col border-b border-[#DCE4EC] py-4"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Inter'] text-base font-bold leading-6 text-[#0D3554]">
                    {faq.question}
                  </span>

                  <span
                    className="flex h-9 w-4 shrink-0 items-center justify-center font-['Inter'] text-xl font-normal leading-9 text-[#0A8FD0]"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-3 flex w-full max-w-[640px] flex-col">
                    <p className="font-['Inter'] text-sm font-normal leading-6 text-[#4F5962]">
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