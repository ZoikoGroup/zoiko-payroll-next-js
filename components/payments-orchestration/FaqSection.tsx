"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const faqs = [
  {
    question: "Does Zoiko move money directly?",
    answer:
      "Zoiko orchestrates approved payroll obligations across supported providers and rails. Where Zoiko isn't the licensed executor, its role is described precisely and the executing provider remains accountable.",
  },
  {
    question: "How are duplicate payments prevented?",
    answer:
      "Stable idempotency keys give every instruction a fixed identity, so a retry never creates a second live instruction. Duplicate risk is always verified before a resend.",
  },
  {
    question: "What happens if funding arrives late?",
    answer:
      "Release blocks until funding is confirmed against the deadline. A shortfall never silently reduces a worker's payment — it conditions or blocks the release instead.",
  },
  {
    question: "What happens to a rejected or returned payment?",
    answer:
      "It becomes an exception owned by the relevant team, with the provider's reason attached. Retry is eligible only after verification.",
  },
  {
    question: "How is a payment reconciled?",
    answer:
      "Outcomes are matched back to the payroll obligation by amount and currency using internal recipient tokens, and the evidence is appended to the audit trail.",
  },
  {
    question: "Can AI release a payment?",
    answer:
      "No. AI is advisory only — it never approves, reroutes or retries a payment.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[820px] flex-col items-center gap-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-2.5">
              <Eyebrow center>FAQ</Eyebrow>
              <h2 className="w-[778px] max-w-full text-center text-4xl font-extrabold leading-9 text-slate-900">
                Questions about payments orchestration
              </h2>
            </div>

            {/* Accordion */}
            <div className="flex w-full max-w-[820px] flex-col gap-px overflow-hidden rounded-xl bg-slate-200 outline outline-1 outline-offset-[-1px] outline-slate-200">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={faq.question} className="flex flex-col bg-white">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left focus:outline-none"
                    >
                      <span className="text-sm font-semibold leading-5 text-slate-900">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 text-sm font-semibold leading-5 text-gray-400 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-200 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[700px] px-4 pb-4 text-sm font-normal leading-5 text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
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