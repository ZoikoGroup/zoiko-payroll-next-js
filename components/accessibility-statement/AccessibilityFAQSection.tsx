"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Zoiko Payroll ADA compliant?",
    answer:
      'We do not publish an unsupported "ADA compliant" claim. Our current verified status is Partially conformant with WCAG 2.2 Level AA for the scoped surfaces above. Jurisdiction-specific legal applicability is a separate, Legal-owned question.',
  },
  {
    question: "How do I report an accessibility problem?",
    answer:
      "Use the feedback form above, or email accessibility@zoikopayroll.com. You do not need to disclose a disability or diagnosis, and you do not need an active sign-in to report a barrier.",
  },
  {
    question:
      "What if an accessibility issue is blocking payroll for my team right now?",
    answer:
      "Tick the priority box on the feedback form so the report is routed as time-sensitive. We will confirm receipt and work with you on a practical alternative path — for example an accessible export, a saved view, or assisted completion — while the underlying issue is fixed.",
  },
  {
    question: "Does this statement cover every Zoiko product?",
    answer:
      "No. It covers only the surfaces listed in “What this statement covers”. Surfaces not listed there are not yet covered, and third-party integrated services are governed by their own provider's accessibility statement.",
  },
  {
    question: "How often is this statement reviewed?",
    answer:
      "On a regular interval, and again after any assessment that changes our verified status. Every review is recorded in the statement history table above; if a review falls past its approved interval, the statement is marked accordingly rather than described as current.",
  },
];

export default function AccessibilityFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[904px] px-4 py-12 sm:px-6">
        <h2
          id="faq-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Accessibility FAQ
        </h2>

        <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

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
