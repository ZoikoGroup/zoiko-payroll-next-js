"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do we need an NDA to access security reports?",
      answer:
        "Some evidence may require verified-prospect or NDA-restricted access depending on the document and disclosure policy. The relevant page states the required access level before you request it.",
    },
    {
      question: "Can we obtain insurance certificates and tax forms?",
      answer:
        "Yes, tax forms and insurance evidence are available through our verified onboarding workflow once request verification is complete.",
    },
    {
      question: "Where do we get Zoiko banking details for vendor setup?",
      answer:
        "Banking details for verified vendor setup are issued securely through our formal onboarding channel upon agreement execution.",
    },
    {
      question: "Does procurement approval start payroll service?",
      answer:
        "No. Procurement approval and contract execution establish the agreement, but service commencement requires separate implementation sign-off.",
    },
    {
      question: "Are customer contracts available here?",
      answer:
        "Standard terms and order templates are available publicly. Customer-specific executed contracts are accessible via the customer portal.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#EFF4F7] py-16 sm:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-3.5 text-center">
              <span className="text-xs font-bold uppercase tracking-wide text-azure-40">
                / FAQ
              </span>
              <h2 className="max-w-[640px] text-3xl font-extrabold leading-9 text-azure-16">
                Procurement questions, answered plainly.
              </h2>
            </div>

            {/* Accordion List */}
            <div className="flex w-full max-w-[780px] flex-col gap-2.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="flex flex-col rounded-xl border border-azure-89 bg-white px-5 py-4 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                    >
                      <span className="text-sm font-bold leading-5 text-azure-16">
                        {faq.question}
                      </span>
                      <span className="text-lg font-normal leading-7 text-azure-40 select-none">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-2.5">
                        <p className="text-sm font-normal leading-5 text-azure-38">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}