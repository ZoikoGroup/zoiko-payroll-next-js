"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What are the stages of payroll processing in Zoiko Payroll?",
    answer:
      "Every run moves through six visible stages: Prepare, Calculate, Validate, Review, Approve and Complete, each with its own states, responsible role and evidence.",
  },
  {
    question: "What's the difference between validation, review and approval?",
    answer:
      "Validation checks calculated payroll and supporting data against configured rules. Review is human inspection of the defined version, its exceptions and context. Approval is the consequential, attributable decision that authorizes the run — it is bound to a specific version and cannot be reused on a later one.",
  },
  {
    question: "What happens when data changes mid-cycle?",
    answer:
      "The run returns to the right control point rather than continuing silently. Depending on the change, that means correction in Prepare, recalculation, renewed validation, another review, or superseded approval requiring reapproval.",
  },
  {
    question: "Does Zoiko Payroll support multiple jurisdictions?",
    answer:
      "Yes. The six-stage lifecycle stays the same in every market, while calculations, statutory deductions, filing workflows, currencies and documentation are configured per jurisdiction. Available markets depend on your configured scope — check the jurisdiction directory before relying on a particular market.",
  },
  {
    question: "Can employees access their own payslips and history?",
    answer:
      "Authorized employees can access applicable payslips, payroll history and payroll documents for their own records through permissioned, privacy-minimized self-service.",
  },
  {
    question: "Does Zoiko Payroll connect to our HR, finance and time systems?",
    answer:
      "Zoiko Payroll takes inbound context from workforce, HCM, time and absence systems, and sends outbound data to finance/ERP and payment interfaces, plus APIs and webhooks. Each integration shows its own connection state and support ownership rather than an assumed seamless sync.",
  },
  {
    question: "Who can approve payroll?",
    answer:
      "Only an identity holding the Approver right for that scope, and never the same identity that prepared or reviewed the version. Automation may surface, calculate, validate, route or remind — it never approves payroll.",
  },
  {
    question: "Can we use Zoiko Payroll without Zoiko One?",
    answer:
      "Yes. Zoiko Payroll is commercially independent with its own subscription, onboarding, documentation and support. Connecting it to Zoiko One is optional and enabled per product.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow center className="justify-center">
            Frequently asked questions
          </Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Questions about how Zoiko Payroll works.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
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
                  <span className="shrink-0 text-brand">
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
