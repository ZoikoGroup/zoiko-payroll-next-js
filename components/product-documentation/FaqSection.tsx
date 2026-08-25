"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Is Product Documentation the same as a Payroll Guide?",
    answer:
      "No. Product Documentation owns current Zoiko Payroll behavior — fields, configuration, workflows. Payroll Guides explain general operational concepts.",
  },
  {
    question: "How do I know an article still applies to me?",
    answer:
      "Check the applicability row on the article — role, product version and last-verified date all confirm whether it matches your current setup.",
  },
  {
    question: "What happens to outdated articles?",
    answer:
      "Outdated articles are marked Stale, Superseded, Deprecated, Withdrawn or Removed with a visible status, and a redirect record links to the current replacement where one exists.",
  },
  {
    question: "Can I trust screenshots in an article?",
    answer:
      "Screenshots are reviewed alongside the article's content version. If the product version noted doesn't match yours, treat the described behavior as authoritative over the image.",
  },
  {
    question: "Where do I report an incorrect article?",
    answer: "Use the Feedback link on any article to flag it for review by the documentation owner.",
  },
  {
    question: "Where do I go for account-specific help?",
    answer:
      "Documentation explains product behavior only. For account-specific help, go to the Help Center.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-[#DCE6EC] bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Questions about Product Documentation
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50"
                >
                  <span className="text-sm font-semibold text-brand-dark">{item.question}</span>
                  <span className="shrink-0 text-slate-400">
                    {isOpen ? <CloseIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {item.answer}
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
