"use client";

import React, { useState } from "react";
import { Eyebrow } from "./Primitives";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the Zoiko Payroll Data Processing Addendum?",
    answer:
      "The approved contractual framework for covered processing of customer personal data within its stated scope. The approved, executed agreement controls.",
  },
  {
    question: "Can I review the DPA before buying?",
    answer:
      "Yes. This page exists for public review, including procurement and legal evaluation. Reviewing it does not create an executed agreement or bind either party.",
  },
  {
    question: "Does the DPA include security measures?",
    answer:
      "Annex II describes the approved contractual categories of technical and organizational measures. It deliberately does not expose restricted architecture, secrets, penetration-test results or internal control evidence — current assurance evidence sits with Trust and Security.",
  },
  {
    question: "Where can I see subprocessors?",
    answer:
      "Current subprocessor facts come from the canonical provider registry, not from this page. A provider or integration appearing anywhere on our site never automatically establishes subprocessor status.",
  },
  {
    question:
      "Does the DPA automatically include Standard Contractual Clauses?",
    answer:
      "No. Transfer mechanisms apply only where adopted and applicable, with the approved module, reference and selections stated. SCCs are not assumed for every customer or every transfer.",
  },
  {
    question: "Does the DPA guarantee data stays in my region?",
    answer:
      "No. Storage location, support and administrative access, backups, failover, telemetry and provider processing are distinct facts. A transfer mechanism is never a universal data-residency guarantee.",
  },
  {
    question: "How do I obtain an executed copy?",
    answer:
      "Through the approved execution package, not from this page. Contact your account team or use the controlled legal/procurement request route; an executed record is recovered by execution ID rather than by re-signing.",
  },
  {
    question: "Can we negotiate the DPA?",
    answer:
      "Custom terms route through legal review. This page does not promise that any clause is negotiable, nor a turnaround time, without an approved operational SLA.",
  },
  {
    question: "How do I know which version is current?",
    answer:
      "The status bar at the top of this page carries the current status, version, effective date and last-reviewed date. Archived versions always show their effective period and route back to the current version.",
  },
];

export default function DpaFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="dpa-faq-heading"
      className="w-full scroll-mt-24 bg-indigo-50"
    >
      <div className="mx-auto w-full max-w-[1140px] px-4 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[620px] text-center">
          <div className="flex justify-center">
            <Eyebrow centered>Frequently asked questions</Eyebrow>
          </div>

          <h2
            id="dpa-faq-heading"
            className="mt-6 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
          >
            Questions about the Data Processing Addendum
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[760px] divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `dpa-faq-panel-${index}`;
            const buttonId = `dpa-faq-button-${index}`;

            return (
              <div key={faq.question} className="py-4">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    <span className="text-base font-bold leading-6 text-sky-950">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl leading-9 text-sky-600"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen ? (
                  <div id={panelId} role="region" aria-labelledby={buttonId}>
                    <p className="pb-2 pr-10 text-sm leading-6 text-gray-600">
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
