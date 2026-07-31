"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is Zoiko Payroll?",
    answer:
      "Zoiko Payroll is a global payroll management platform for preparing, calculating, validating, reviewing, approving, completing and reporting payroll. It supports payroll administration, deductions, records, reporting, compliance workflows and employee access through a controlled digital environment.",
  },
  {
    question: "Can Zoiko Payroll be used without Zoiko One?",
    answer:
      "Yes. Zoiko Payroll is commercially independent and can be used as a standalone product with its own subscription, onboarding, documentation and support.",
  },
  {
    question: "Is Zoiko Payroll designed for multiple jurisdictions?",
    answer:
      "Yes. Zoiko Payroll supports multi-jurisdiction operating models while preserving the local configurations, responsibilities, records and controls required in each supported market.",
  },
  {
    question: "How does Zoiko Payroll support local requirements?",
    answer:
      "Jurisdiction-specific configuration covers calculations, deductions, documentation, reporting, approvals, currencies and payroll practices for each supported market.",
  },
  {
    question: "Can Zoiko Payroll connect to existing systems?",
    answer:
      "Zoiko Payroll can connect with approved workforce, finance, identity and developer interfaces, either standalone or through the wider Zoiko One ecosystem.",
  },
  {
    question: "What can employees access?",
    answer:
      "Authorized employees can securely access applicable payslips, payroll history and payroll documents through employee self-service.",
  },
  {
    question: "How does Zoiko Payroll support approvals?",
    answer:
      "Configurable, role-based approval stages separate preparation, review, approval and administration, with a recorded decision at each step.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a demonstration, review your operating jurisdictions and workforce structure, and move through a controlled, scoped implementation.",
  },
];

const workflowPreview = [
  { label: "Prepare", tone: "bg-emerald-50 text-emerald-700" },
  { label: "Calculate", tone: "bg-emerald-50 text-emerald-700" },
  { label: "Validate", tone: "bg-amber-50 text-amber-700" },
  { label: "Review", tone: "bg-slate-100 text-slate-500" },
  { label: "Approve", tone: "bg-slate-100 text-slate-500" },
  { label: "Complete", tone: "bg-slate-100 text-slate-500" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Questions about Zoiko Payroll
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
          <Reveal delay={60} className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
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
                    <span className="shrink-0 text-slate-400">
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

          <Reveal delay={120} className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Payroll workflow</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {workflowPreview.map((step) => (
                <span
                  key={step.label}
                  className={`rounded-lg px-3 py-2 text-center text-xs font-medium ${step.tone}`}
                >
                  {step.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
