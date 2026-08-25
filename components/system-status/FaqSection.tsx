"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What does Operational mean?",
    answer: "A fresh, scope-valid public health assertion within the approved definition.",
  },
  {
    question: "Why can status be Unknown?",
    answer:
      "Verification requires a fresh, scope-valid signal. If that check hasn't completed, status is shown as Unknown rather than guessed.",
  },
  {
    question: "Incident vs maintenance?",
    answer:
      "An incident is unplanned impact; maintenance is planned work. If maintenance causes unplanned impact, a linked incident record is created rather than rewriting the maintenance entry.",
  },
  {
    question: "Does “No active incidents” mean everything is operational?",
    answer:
      "No. It confirms only that no incident has been declared. Check current component health below for the full picture.",
  },
  {
    question: "Why is my issue not shown here?",
    answer:
      "This page shows verified, public, cross-customer impact only. Account-specific issues are handled through the Help Center or Support.",
  },
  {
    question: "Do you publish uptime percentages?",
    answer:
      "No. This page is an evidence ledger of verified incidents and maintenance, not an inferred uptime chart.",
  },
  {
    question: "How are third-party outages shown?",
    answer:
      "Third-party dependencies are listed with their ownership and Zoiko's verified public impact — never as a mirror of the vendor's own status page.",
  },
  {
    question: "Where are product changes listed?",
    answer: "Shipped product changes are tracked in Release Notes, not on this page.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Status interpretation guide</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Plain, timestamp-aware, scope-aware — never vague
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 30} className="border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left transition-colors duration-200 hover:text-brand"
                >
                  <span className="text-sm font-semibold text-brand-dark">{item.question}</span>
                  <span className="mt-0.5 shrink-0 text-brand">
                    {isOpen ? <CloseIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pb-4 text-sm leading-relaxed text-slate-600">{item.answer}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
