"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the Zoiko Payroll Acceptable Use Policy?",
    answer:
      "It is the approved policy for acceptable, prohibited, restricted or conditional use of Zoiko Payroll services within its stated scope.",
  },
  {
    question: "How is the AUP related to Zoiko Payroll Service Terms?",
    answer:
      "The Service Terms may incorporate this policy by reference. Where they do, the Service Terms keep the contract rights and remedies, and this policy defines the use rules those rights apply to. It does not change contract precedence.",
  },
  {
    question: "Does the AUP mean Zoiko monitors all payroll activity?",
    answer:
      "No. Having enforceable rules is not the same as continuous monitoring of payroll records, communications, payment instructions or customer activity. Any statement about detection, logging, review or investigation practices requires separate approved public authority.",
  },
  {
    question: "How do I report suspected misuse?",
    answer:
      "Use the report form on this page for suspected policy misuse. Other needs have their own routes — security vulnerabilities go to Responsible Disclosure, product problems to Support, privacy questions to the privacy route, and legal process to the approved Legal route.",
  },
  {
    question: "Are the listed examples exhaustive?",
    answer:
      "No. Examples are illustrative and non-exhaustive; they show the kind of conduct a rule covers rather than the complete set. The rule statement itself governs, not the example list.",
  },
  {
    question: "Can Support approve an otherwise restricted use?",
    answer:
      "Not on its own. A Support response or a product-admin permission does not constitute legal policy authorization unless this policy says so. Restricted activity uses the authorization route named in its rule.",
  },
  {
    question: "Will Zoiko always warn before suspending an account?",
    answer:
      "Not necessarily. Responses are not applied in a fixed sequence, and notice or cure periods apply only where the approved policy or the Service Terms provide them.",
  },
  {
    question: "Can I appeal an enforcement decision?",
    answer:
      "Appeal or review mechanisms exist only where the approved policy or your Service Terms provide them. Where they apply, use the contact route in your agreement; this page does not itself create an appeal right.",
  },
  {
    question: "How do I know this policy is current?",
    answer:
      "The summary at the top of this page carries the status, effective date, public version and last-reviewed date. If a version is superseded, the current version is identified rather than silently replacing it.",
  },
];

export default function AcceptableUseFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="aup-faq-heading"
      className="w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[964px] px-4 py-11 sm:px-6">
        <h2
          id="aup-faq-heading"
          className="text-xl font-bold leading-7 text-sky-950"
        >
          Frequently asked questions
        </h2>

        <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `aup-faq-panel-${index}`;
            const buttonId = `aup-faq-button-${index}`;

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
