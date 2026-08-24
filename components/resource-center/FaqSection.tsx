"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is Zoiko Payroll Resource Center?",
    answer:
      "It is the main discovery hub for Zoiko Payroll guides, documentation, help, release information, jurisdiction guidance, videos and topic resources. It helps you find the right current source without replacing specialist destinations.",
  },
  {
    question: "Where can I find product documentation?",
    answer:
      "Product Documentation owns current product behavior, fields, settings and workflow instructions. Resource Center links to it — it never restates configuration steps itself.",
  },
  {
    question: "Where can I get help with a problem?",
    answer:
      "Help Center owns troubleshooting, support and recovery. Start there whenever something is broken or a payroll run needs recovering.",
  },
  {
    question: "Where can I see what changed?",
    answer:
      "Release Notes own verified shipped changes, applicability and any required action. Documentation then explains how to use the changed behavior.",
  },
  {
    question: "Where can I check service availability or incidents?",
    answer:
      "System Status owns current and historical service health. Resource Center never reports live incident state on its own.",
  },
  {
    question: "Where can I find market-specific payroll guidance?",
    answer:
      "Jurisdiction Guides carry market-specific educational context. Current market availability is governed separately on the Country and Territory Directory.",
  },
  {
    question: "How can I tell whether a resource is current?",
    answer:
      "Every record shows a reviewed or released date and a freshness state — Current, Review due or Superseded — directly on the card, before you open it.",
  },
  {
    question: "Does Resource Center provide legal or tax advice?",
    answer:
      "No. Resources are general educational content. They do not provide legal, tax, accounting, payroll or employment advice, and they never certify compliance.",
  },
  {
    question: "Do I need to submit my details to read resources?",
    answer:
      "No. Search and reading stay public and identity-free. Commercial conversation comes after useful content, never as a gate in front of it.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="border-t border-slate-200 bg-[#DFEAF3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-9">
              Questions about Resource Center
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Direct answers first — deeper structure lives at the linked authority.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img
                src="/images/resource-center/faq.png"
                alt="Two colleagues discussing where to find the right payroll resource"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm font-bold leading-5 text-sky-950">
                  The map, not the territory
                </p>
                <p className="mt-1 text-xs leading-4 text-gray-600">
                  Resource Center routes you — it never replaces the source it points to.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            {/* One question per full-width row; the answer opens inside the same row. */}
            <div className="w-full">
              {faqItems.map((item) => {
                const isOpen = openQuestion === item.question;
                return (
                  <div key={item.question} className="border-b border-slate-200">
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(isOpen ? null : item.question)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="text-sm font-bold text-sky-950">{item.question}</span>
                      <span className="shrink-0 text-sky-600">
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
                      <div className="overflow-hidden">
                        <p className="pb-5 pr-10 text-sm leading-6 text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
