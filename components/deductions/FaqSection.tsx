"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What's the difference between recurring and one-time deductions?",
    answer:
      "A recurring deduction repeats across eligible payroll periods until an end condition or change is applied. A one-time deduction applies to a single eligible period or date and does not repeat.",
  },
  {
    question: "Do corrections overwrite the original value?",
    answer:
      "No. A correction is a governed change that records the original value alongside the corrected one. Both remain in history, so anyone reviewing the record later can reconstruct what changed and why.",
  },
  {
    question: "Does every change require approval?",
    answer:
      "Approval requirements are policy-driven rather than universal. Where a policy requires review, the change cannot reach an eligible payroll version until the required approval is recorded by an authorized person.",
  },
  {
    question: "Where does the effective date come from?",
    answer:
      "It is set explicitly on the change and validated against the record's eligible periods. A change whose effective date falls outside those periods is flagged before it can become eligible.",
  },
  {
    question: "How is a reimbursement different from a negative deduction?",
    answer:
      "A reimbursement is its own change type with an explicit positive pay direction, processed through an eligible payroll workflow. Pay direction is always stated on the object, never inferred from the sign of an amount.",
  },
  {
    question: "How are imported changes validated?",
    answer:
      "Every import runs the same pipeline: source, mapping, validation, duplicate check against stable source IDs, dry run, then a record-level result showing success, failure and duplicate outcomes.",
  },
  {
    question: "Can I see who changed a specific item?",
    answer:
      "Yes. Each change carries its ID, creator, timestamp, source, scope and decision history, so every item in the workspace can be traced back to the person and system responsible.",
  },
  {
    question: "What happens if a change is made after calculation or approval?",
    answer:
      "The change does not silently attach to work that was already reviewed. It is routed through validation and any required approval again, and the payroll version it eventually reaches is recorded.",
  },
  {
    question: "How does this work across multiple jurisdictions?",
    answer:
      "Legal entity, jurisdiction, currency and pay-period context stay visible wherever they are relevant. Change type availability and approval policy can vary by market — no rule is assumed to apply globally.",
  },
  {
    question: "Will employees see this change in their payroll records?",
    answer:
      "Once a change is applied to an eligible payroll version, it appears in the employee's payroll record for that period, in line with the visibility rules configured for your organization.",
  },
];

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0].question);

  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-9 text-sky-950">
            Questions about deductions and adjustments
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
                  <span className="shrink-0 text-slate-500">
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
