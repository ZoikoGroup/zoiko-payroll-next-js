"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does Zoiko Payroll require Zoiko One?",
    answer:
      "No. Zoiko Payroll is fully usable as a standalone product. Zoiko One is an optional, selected pathway.",
  },
  {
    question: "What is Zoiko One?",
    answer:
      "Zoiko One is an integration framework that enables connected workflows across identity providers, workforce systems, and finance platforms while preserving independent product controls.",
  },
  {
    question: "What data can be shared?",
    answer:
      "Only explicitly scoped relationship records—such as identity context, workforce attributes, and verified accounting summaries—are exchanged per approved connection. Sensitive credentials and raw bank data are never exposed.",
  },
  {
    question: "Does shared identity mean shared payroll access?",
    answer:
      "No. Authentication is not authorization. Single sign-on (SSO) or shared identity access does not grant payroll authorization, shared data access, or bypassed payroll controls.",
  },
  {
    question: "Who owns the system of record?",
    answer:
      "Zoiko Payroll remains the authoritative system of record for all payroll calculations, employee disbursements, tax withholdings, and statutory compliance history.",
  },
  {
    question: "Can administration or reporting be shared?",
    answer:
      "Administration remains product-specific by default. Coordinated admin views and cross-product reporting roles are conditional and require explicit dual-authorization.",
  },
  {
    question: "How are connections approved?",
    answer:
      "Each connection is individually authorized with scoped permissions, clear directional pathways (inbound or outbound), and verified mutual confirmation before any data exchange begins.",
  },
  {
    question: "What happens when a connection fails?",
    answer:
      "Connections feature continuous health monitoring, retry and duplicate prevention, and partial-failure handling to ensure core payroll processing is never blocked by an external outage.",
  },
  {
    question: "Are there bundled prices or discounts?",
    answer:
      "Zoiko Payroll pricing is transparent and modular. Multi-product arrangements and bundle terms are documented independently within your commercial agreement.",
  },
  {
    question: "Where is implementation detail documented?",
    answer:
      "Technical specifications, schema pathways, and verified security controls are documented in Product > Zoiko One Integration and our Trust Center.",
  },
];

export default function FAQSection() {
  // First item open by default (or set to null for all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col items-center">
          {/* Section Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-sky-950">
              Frequently asked questions
            </h2>
          </div>

          {/* Accordion Container */}
          <div className="w-full max-w-[820px] divide-y divide-slate-100">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="flex flex-col py-1">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors duration-150 focus:outline-none"
                  >
                    <span className="pr-4 text-sm font-bold text-sky-950">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center text-lg font-medium text-sky-600 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Smooth Collapsible Answer Container */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[700px] pb-4 text-xs font-normal leading-5 text-gray-600 sm:text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}