"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is the Zoiko Payroll Product Tour?",
    answer:
      "A guided, scenario-base walkthrough of representative Zoiko Payroll workflows, including preparation, review, approvals, deductions and adjustments, employee payroll records, and reporting.",
  },
  {
    question: "Does the Product Tour use real employee or customer payroll data?",
    answer:
      "No. The Product Tour operates entirely with synthetic demonstration data to ensure privacy and security while showcasing end-to-end functionality.",
  },
  {
    question: "Do I need to sign in or submit a form to take this tour?",
    answer:
      "No sign-in or form submission is required. The guided tour is immediately accessible directly on this page.",
  },
  {
    question: "Is the Product Tour the same as a live customer environment?",
    answer:
      "The tour reflects standard operational workflows, calculations, and interface patterns found in production environments, but uses a controlled sandbox dataset.",
  },
  {
    question: "Can I see payroll approvals and adjustments in the tour?",
    answer:
      "Yes. Steps 3 and 4 specifically demonstrate multi-tier approval gates, statutory deductions, one-time adjustments, and retro adjustments with audit trails.",
  },
  {
    question: "Where can I review security and trust information?",
    answer:
      "You can explore our dedicated Security and Trust destination to inspect data residency, compliance certifications, encryption standards, and subprocessors.",
  },
  {
    question: "How do I see Zoiko Payroll with my own requirements?",
    answer:
      "You can schedule a personalized live demo with our solution architects to review custom integrations, enterprise entity structures, and jurisdiction coverage.",
  },
];

export default function ProductTourFaqSection() {
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
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Questions about the Product Tour
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
