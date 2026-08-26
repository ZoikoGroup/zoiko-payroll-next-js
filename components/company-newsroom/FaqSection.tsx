"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is the Zoiko Payroll Newsroom?",
    answer:
      "It is the official source for approved Zoiko Payroll company and product announcements. Current product instructions, shipped-change history, service health and trust evidence remain in their dedicated authoritative destinations.",
  },
  {
    question: "Does a product announcement mean the feature is available to every customer?",
    answer:
      "No. Publication does not equal release. Release Notes carry the verified rollout state and any required action, and Product Documentation confirms current applicability and configuration.",
  },
  {
    question: "Where can I see exactly what changed?",
    answer:
      "Release Notes hold the shipped-change record. A Newsroom story provides context and links the release record — it never substitutes for it.",
  },
  {
    question: "Where can I check an outage or service issue?",
    answer:
      "System Status is the only source for live and historical service health. Newsroom announcements never infer current health, and incident updates are excluded from this page by default.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "Every material change carries a visible correction trail. Announcements can be marked as a minor edit, material correction, superseded, withdrawn or retracted — superseded records point to the newer authority while the historical one is preserved.",
  },
  {
    question: "Are media articles on other sites official Zoiko Payroll statements?",
    answer:
      "No. Only announcements published here are official. Third-party coverage, interviews and commentary are not approved company statements, and outlet logos are never used as validation.",
  },
  {
    question: "How do I contact the press team?",
    answer:
      "Use the media inquiry route above. Requests are routed by topic to an accountable communications team, never to a direct executive inbox, and no response time is guaranteed unless an approved SLA exists.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Frequently asked questions</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Questions about the Newsroom
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[880px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 30} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-brand"
                >
                  <span className="text-sm font-bold text-brand-dark">{item.question}</span>
                  <span className="mt-0.5 shrink-0 text-brand">
                    {isOpen ? (
                      <CloseIcon className="h-3.5 w-3.5" />
                    ) : (
                      <PlusIcon className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pb-5 pr-8 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
