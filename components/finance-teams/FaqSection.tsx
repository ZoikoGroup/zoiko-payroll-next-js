"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "How does payroll reconciliation work?",
    answer:
      "Approved payroll totals are tracked from the expected downstream package through to receipt, with any difference shown as retry-eligible or requiring recovery — never marked reconciled while a variance remains open.",
  },
  {
    question: "Can we compare totals across entities and jurisdictions?",
    answer:
      "Yes. Each total carries its entity, group, local currency, reporting currency and FX basis, so cross-entity comparison stays consistent instead of depending on how each figure was assembled.",
  },
  {
    question: "What happens when payroll is adjusted late?",
    answer:
      "A material change after approval marks the prior finance review as stale — not deleted, not hidden. Revalidation is required before reconciliation continues against the current version.",
  },
  {
    question: "How does Zoiko Payroll connect to our ERP or finance system?",
    answer:
      "Approved outcomes are exported as a finance package with an explicit mapping version. Zoiko Payroll never holds ledger authority or performs accounting treatment — those stay with your ERP.",
  },
  {
    question: "What happens if part of an export fails?",
    answer:
      "The export reports Partial with the failed record count and retry eligibility. Partial is a status in its own right, never averaged into a whole-batch success claim.",
  },
  {
    question: "Can finance compare payroll across currencies?",
    answer:
      "Yes. Every converted total shows its local amount, reporting currency, FX basis and rate date. Zoiko Payroll is not an authoritative FX source, so the basis is always stated.",
  },
  {
    question: "What audit evidence is available to finance?",
    answer:
      "Reviewer, role, period, entity, payroll version, decision, timestamp, export event, reconciliation event and material-change state — assembled as the work happens, not after the fact.",
  },
  {
    question: "Does finance see employee-level payroll detail?",
    answer:
      "No. Finance sees scoped totals and variance context by default. Employee-level detail is purpose-bound and requires authorized drill-down held by a named role.",
  },
  {
    question: "How is finance's role different from payroll's?",
    answer:
      "Payroll prepares, calculates, validates and approves. Finance reviews totals, explains variance, reconciles and reviews evidence. The two are separated so neither absorbs the other's authority.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-9 text-sky-950 sm:text-3xl">
            Questions finance teams ask before close
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
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
                    <p className="pb-5 text-sm leading-6 text-gray-600">{item.answer}</p>
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
