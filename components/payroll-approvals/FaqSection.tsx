"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is a payroll approval workflow?",
    answer:
      "A governed sequence where an authorized person reviews a specific payroll version and decides — approve, return for changes, or request more context — before the run can move toward completion.",
  },
  {
    question: "What's the difference between review and approval?",
    answer:
      "Review is inspection: an approver examines scope, version, material changes and supporting evidence. Approval is the recorded decision that authorizes the run. Keeping them separate means deciding is never a side effect of looking.",
  },
  {
    question: "Can an approval have multiple stages?",
    answer:
      "Yes. Stages such as Payroll Approval and Finance Approval are configured per policy, each with its own decision owner and scope. A run moves forward only when every required stage has a valid approval.",
  },
  {
    question: "What happens if payroll changes after approval?",
    answer:
      "The approval is bound to the exact version reviewed. A recalculation creates a new version, the prior approval is marked historical rather than silently carried over, and the new version is routed back for reapproval.",
  },
  {
    question: "How does delegation work?",
    answer:
      "Delegation is time-bounded and scope-bounded, validated against eligibility and separation of duties before it's created. Decisions made by a delegate are recorded as such in the audit history.",
  },
  {
    question: "Does approval mean payroll is complete?",
    answer:
      "No. Completion is a separate gate checked against every required approval plus any configured prerequisites, such as GL reconciliation. An approval existing never completes a run automatically.",
  },
  {
    question: "What decides where AI's role ends here?",
    answer:
      "Automation establishes readiness, routes work, surfaces changes and checks current state. It never holds decision rights — every approval is committed by an authorized person, checked server-side at the moment of commit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-slate-200 bg-white pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Frequently asked questions</Eyebrow>
        </Reveal>

        <Reveal delay={80} className="mt-6 max-w-4xl">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-bold text-sky-950">{item.question}</span>
                  <span className="shrink-0 text-slate-500">
                    {isOpen ? <CloseIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
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
