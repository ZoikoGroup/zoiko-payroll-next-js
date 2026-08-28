"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are Zoiko Payroll Service Terms?",
    answer:
      "They are the public standard terms and conditions for using Zoiko Payroll services, applying as the standard baseline unless your organization's executed agreement addresses a topic differently.",
  },
  {
    question: "Do these public terms prove my organization accepted them?",
    answer:
      "No. Publishing a standard document is not evidence that any particular customer accepted it, or that an account is bound to this exact version. Acceptance is established by your executed agreement or order, not by this page.",
  },
  {
    question: "Which controls if my contract differs from this page?",
    answer:
      "Your executed agreement. Where an order form, master agreement or signed contract addresses a topic, it governs for your account — even where it differs from these public standard terms.",
  },
  {
    question: "Where are data-processing obligations covered?",
    answer:
      "In the Data Processing Addendum, incorporated where stated in your agreement. Those obligations are not restated on this page, so the DPA remains the single controlling source for them.",
  },
  {
    question: "How do I get a signed copy of my agreement?",
    answer:
      "Sign in to check your organization's agreement status, or contact your account team. A signed copy cannot be retrieved from this public page, because it requires authentication and an organization match.",
  },
  {
    question: "Can I request custom terms?",
    answer:
      "Yes — contact Sales or Legal. Requesting a custom term or a legal review does not itself promise a particular turnaround or that the request will be accepted.",
  },
];

export default function ServiceTermsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="service-terms-faq-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="service-terms-faq-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Frequently asked questions
        </h2>

        <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-terms-faq-panel-${index}`;
            const buttonId = `service-terms-faq-button-${index}`;

            return (
              <div key={faq.question} className="py-3">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    <span className="text-sm font-bold leading-6 text-sky-950">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-base leading-6 text-slate-500"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen ? (
                  <div id={panelId} role="region" aria-labelledby={buttonId}>
                    <p className="pb-2 pr-8 text-sm leading-5 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
