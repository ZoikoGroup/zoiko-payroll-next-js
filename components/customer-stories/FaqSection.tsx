"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    question: "Are these results typical?",
    answer:
      "No. Every story reflects one customer's specific experience and context — never a guaranteed or typical result for your organization.",
  },
  {
    question: "How is a story approved?",
    answer:
      "A story is published only after the customer gives active consent, the evidence is documented and sourced, and the editorial review confirms every quote and figure matches approved wording.",
  },
  {
    question: "Why don't I see many stories, or any at all?",
    answer:
      "Story publication depends on customer consent and evidence completeness, not marketing targets. When inventory is limited, this page says so clearly rather than padding with placeholders or unrelated content.",
  },
  {
    question: "Are quotes and metrics verified?",
    answer:
      "Yes. Every published quote resolves to exact approved wording and attribution, and every metric carries its full methodology — definition, source, scope and caveat. Metrics without sufficient context are suppressed.",
  },
  {
    question: "Does a story prove Zoiko Payroll is available in my country?",
    answer:
      "No. Product use in a story is historical context, not current product authority. For current availability, the jurisdiction coverage page and product documentation stay authoritative.",
  },
  {
    question: "Can I share my own customer story?",
    answer:
      "Advocacy participation routes only through our approved customer program — participation is never assumed or auto-enrolled. Contact your customer success manager to start the process.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-9 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-center gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Frequently asked questions
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            Questions about customer stories
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex w-full max-w-[760px] flex-col items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`w-full py-4 ${
                  index < faqs.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="text-base font-bold leading-6 text-sky-950">
                    {faq.question}
                  </span>
                  <span className="select-none text-xl font-normal leading-9 text-sky-600">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-2 text-sm font-normal leading-6 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
