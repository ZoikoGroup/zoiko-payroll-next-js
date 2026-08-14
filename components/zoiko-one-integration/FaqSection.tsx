"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "Do I need Zoiko One to use Zoiko Payroll?",
    answer:
      "No. Zoiko Payroll is a complete, independently subscribed product. Zoiko One is an optional layer you can connect when it's useful to you.",
  },
  {
    question: "What data actually moves between products?",
    answer:
      "Only the fields named in an approved mapping, in the direction that mapping states. Each field carries its purpose, authoritative source, version and a named owner — there is no implicit or blanket sync.",
  },
  {
    question: "Does a Zoiko One user automatically get payroll access?",
    answer:
      "No. Shared identity covers authentication only. Payroll permissions are granted separately and explicitly, and a role in another product never inherits payroll rights automatically.",
  },
  {
    question: "Can connected products bypass payroll approvals?",
    answer:
      "No. Connections deliver approved inputs and receive approved outputs. Validation, review, approval and record versioning all remain governed by payroll regardless of what is connected.",
  },
  {
    question: "How are integration failures handled?",
    answer:
      "Outcomes are reported at record level with a correlation ID for the batch. A batch that is partly accepted is shown as a partial failure with the affected records and an escalation path — never rounded up to success.",
  },
  {
    question: "Is there one universal source of truth across products?",
    answer:
      "No. Ownership is stated per object and per field — legal entity may be authoritative in payroll while worker profile is authoritative upstream. No product claims to be the single source of truth for everything.",
  },
  {
    question: "Are Zoiko One bundle discounts guaranteed?",
    answer:
      "Commercial terms are agreed per contract rather than promised on this page. Zoiko Payroll remains commercially independent, and bundling is never required to get full value from payroll.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="border-t border-slate-200 bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-8 max-w-4xl">
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
                  <span className="text-sm font-semibold text-sky-950">{item.question}</span>
                  <span className="shrink-0 text-slate-600">
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
                    <p className="max-w-2xl pb-5 text-sm leading-6 text-slate-600">{item.answer}</p>
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
