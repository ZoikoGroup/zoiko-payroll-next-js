"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the Legal Notices page for?",
    answer:
      "It identifies the legal entity behind Zoiko Payroll, ownership of our content and brand, required third-party and open-source attribution, and how to reach us about a legal, trademark or IP issue — while linking to the canonical documents that remain controlling for their subjects.",
  },
  {
    question: "Does this page replace the Service Terms or Privacy Notice?",
    answer:
      "No. The Service Terms, Privacy Notice, Data Processing Addendum and Acceptable Use Policy remain controlling for their own subjects. This page summarizes and links to them; where anything here appears to conflict with a canonical document, that document governs.",
  },
  {
    question: "Where do I find the open-source components Zoiko Payroll uses?",
    answer:
      "Component name, version and license vary by release and are tracked in our approved dependency and license register rather than restated inline here. Request the current open-source notice list through the report form on this page.",
  },
  {
    question: "How do I send a formal legal notice or service of process?",
    answer:
      "Use the approved Legal route rather than general contact channels or the form on this page. Visit Contact and choose the Legal-notice route, or follow the notice instructions in your applicable customer agreement.",
  },
  {
    question: "Are all product and feature names trademarks?",
    answer:
      "No. Many workflow, module and capability names are used only to identify functionality and may change as the product evolves. The Trademarks & brand names section above lists the names currently identified as trademarks or trade names.",
  },
];

export default function LegalNoticesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="legal-notices-faq-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="legal-notices-faq-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Legal Notices FAQ
        </h2>

        <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `legal-faq-panel-${index}`;
            const buttonId = `legal-faq-button-${index}`;

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
