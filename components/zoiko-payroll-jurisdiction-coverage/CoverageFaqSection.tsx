"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does \"Available\" mean every payroll feature works in that jurisdiction?",
    answer:
      "No. Available means a current approved service scope exists — not that every feature, entity model, integration, service tier or legal scenario is supported.",
  },
  {
    question: "Can I assume coverage from a nearby country or Zoiko's office locations?",
    answer:
      "No. Coverage is jurisdiction-specific and determined solely by local regulatory and statutory processing capabilities, never by geographical proximity or corporate office presence.",
  },
  {
    question: "What does \"Assessment required\" mean?",
    answer:
      "It means your organization's specific payroll profile — such as headcount, collective agreements, benefit structures, or multi-entity footprint — must be reviewed by our solutions engineering team before confirming availability.",
  },
  {
    question: "Does jurisdiction availability mean Zoiko Payroll is legally compliant there?",
    answer:
      "Yes, for the approved service scope. However, local regulatory compliance remains a joint responsibility based on accurate employer source inputs and maintained statutory rules.",
  },
  {
    question: "How is this different from the Country and Territory Directory?",
    answer:
      "The Country and Territory Directory provides broad informational overviews and regulatory background, whereas Jurisdiction Coverage details live operational readiness and specific service boundaries.",
  },
  {
    question: "How current is this information?",
    answer:
      "All jurisdiction statuses reflect the current release cycle and carry explicit verification dates (e.g. Aug 2026), updated whenever statutory or platform parameters change.",
  },
];

export default function CoverageFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[820px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Questions about Jurisdiction Coverage
            </h2>
          </div>
        </Reveal>

        {/* Accordion List */}
        <div className="mt-12 divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 40}>
                <div className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left transition-opacity duration-150 hover:opacity-80"
                  >
                    <span className="text-sm font-bold text-[#082F49] sm:text-base">
                      {faq.question}
                    </span>

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center font-mono text-lg font-bold text-[#0A78C2] transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
