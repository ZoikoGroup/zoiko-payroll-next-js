"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What systems can Zoiko Payroll integrate with?",
    answer:
      "Approved workforce (HRIS/HCM), finance/ERP, time & attendance, payment, identity and developer systems — availability varies by provider, jurisdiction and service model.",
  },
  {
    question: "How are failed records handled?",
    answer:
      "Failures are visible at record level rather than hidden inside a batch marked complete. Each failure carries an error code, an owner and a retry eligibility state, and retry targets only the eligible failed records.",
  },
  {
    question: "Can mappings be tested before they go live?",
    answer:
      "Yes. Every connection moves through Validate and Test stages against non-production data, and a required reviewer signs off before activation. A valid credential alone never activates a connection.",
  },
  {
    question: "Is Zoiko One required to use integrations?",
    answer:
      "No. Zoiko Payroll is a fully independent subscription with full integration category access. Zoiko One interoperability is optional, enabled and contracted — never assumed.",
  },
  {
    question: "Who owns support when something breaks?",
    answer:
      "Ownership is shown per connection. Customer-owned configuration, Zoiko support ownership and third-party provider dependencies are each labeled explicitly, so escalation routes to the right party.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center className="justify-center">
            FAQ
          </Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Questions about Zoiko Payroll integrations
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-bold text-slate-900">{item.question}</span>
                  <span className="shrink-0 text-blue-600">
                    {isOpen ? <CloseIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
