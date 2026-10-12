"use client";

import React, { useState } from "react";
import { SectionHeading } from "./Primitives";

const faqs = [
  {
    question: "What is a Zoiko Payroll demo?",
    answer:
      "A walkthrough of the parts of Zoiko Payroll relevant to your team, led by a specialist matched to your region and payroll footprint — not a generic product tour.",
  },
  {
    question: "Who is this demo for?",
    answer:
      "Teams evaluating a new payroll system: payroll, HR, finance, IT and security, operations, and the executives sponsoring the change.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Your name, work email and company are required. Country, role and area of interest are recommended because they determine who your request routes to, and any additional context about headcount or timeline helps us prepare.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Your request is reviewed against your company size, countries of operation and current payroll setup, then routed to the specialist who can speak to that setup directly.",
  },
  {
    question: "Can existing customers use this form?",
    answer:
      "This form is for sales demos. If you need account or support assistance, use your customer support route instead.",
  },
] as const;

export default function DemoFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:gap-12">
        <SectionHeading centered eyebrow="FAQ" title="Frequently asked questions" />

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-neutral-200 first:border-t"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-1 py-5 text-left"
                  >
                    <span className="text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl leading-8 text-gray-400"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <p className="px-1 pb-5 text-sm leading-6 text-gray-500">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
