"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CloseIcon, PlusIcon } from "../ui/icons";

const faqItems = [
  {
    question: "What is Zoiko Payroll?",
    answer:
      "Zoiko Payroll is a secure payroll-management platform that helps organizations prepare, calculate, validate, approve, process, record, report employee payroll across supported jurisdictions. It also supports deductions, payroll records, reporting, controlled access and employee self-service.",
  },
  {
    question: "Why does Zoiko Payroll exist?",
    answer:
      "To replace fragmented payroll administration with one controlled environment for managing payroll workflows, decisions, approvals, records, reporting, and employee access.",
  },
  {
    question: "What is Zoiko Payroll's mission?",
    answer:
      "Give organizations a clear, controlled, dependable way to manage payroll across supported jurisdictions.",
  },
  {
    question: "What is Zoiko Payroll's vision?",
    answer:
      "A world where organizations operate payroll globally with the visibility and discipline expected of every critical business function.",
  },
  {
    question: "Who is Zoiko Payroll for?",
    answer:
      "Payroll teams, finance teams, HR and people teams, business leaders, IT and security teams, and the employees they serve.",
  },
  {
    question: "Is Zoiko Payroll a standalone product?",
    answer: "Yes. Zoiko Payroll is a commercially independent SaaS platform with its own subscription.",
  },
  {
    question: "Is Zoiko Payroll available through Zoiko One?",
    answer: "Yes. Zoiko Payroll can also be accessed through Zoiko One, with connected workflows where enabled.",
  },
  {
    question: "Who owns and operates Zoiko Payroll?",
    answer: "Zoiko Payroll is owned and operated by Zoiko Tech Inc, a Zoiko Group company.",
  },
  {
    question: "Is Zoiko Payroll designed for international businesses?",
    answer: "Yes. Zoiko Payroll supports multi-jurisdiction operating models across supported markets.",
  },
  {
    question: "Does Zoiko Payroll support every country?",
    answer:
      "No universal country claim is made. Current capability varies by country; the jurisdiction directory is the authoritative source.",
  },
  {
    question: "Does Zoiko Payroll calculate payroll?",
    answer: "Yes. Zoiko Payroll runs gross-to-net calculations across earnings, deductions and jurisdiction rules.",
  },
  {
    question: "Does Zoiko Payroll pay employees directly?",
    answer: "Payment execution depends on the configured service model and approved integrations for each market.",
  },
  {
    question: "Does Zoiko Payroll handle tax filings?",
    answer: "Filing support varies by jurisdiction and is documented in the jurisdiction directory.",
  },
  {
    question: "Is Zoiko Payroll a payroll-outsourcing service?",
    answer: "No. Zoiko Payroll is a software platform, not a substitute for legal, tax or outsourced payroll advice.",
  },
  {
    question: "Can employees access their payslips?",
    answer: "Yes, authorized employees can securely access applicable payslips and payroll history.",
  },
  {
    question: "Can Zoiko Payroll connect with existing systems?",
    answer: "Yes. Zoiko Payroll connects with approved workforce, finance, identity and developer interfaces.",
  },
  {
    question: "How does Zoiko Payroll support approvals?",
    answer: "Configurable, role-based approval stages separate preparation, review, approval and administration.",
  },
  {
    question: "How does Zoiko Payroll protect payroll data?",
    answer: "Through controlled authentication, role-based access, defined permissions and audit records.",
  },
  {
    question: "Is Zoiko Payroll compliant with payroll laws everywhere?",
    answer: "Compliance posture is documented per jurisdiction; no blanket global compliance claim is made.",
  },
  {
    question: "How is Zoiko Payroll implemented?",
    answer: "Through a controlled, scoped implementation covering discovery, configuration, testing and launch.",
  },
  {
    question: "How long does implementation take?",
    answer: "Timelines depend on workforce size, jurisdictions, integrations and service model.",
  },
  {
    question: "How is Zoiko Payroll priced?",
    answer: "Pricing reflects workforce, jurisdictions, payroll structures, service model and integrations.",
  },
  {
    question: "What support is available?",
    answer: "Product documentation, a help center, release notes, and system status are available to customers.",
  },
  {
    question: "Where is Zoiko Payroll headquartered?",
    answer: "Sacramento, CA, USA, with a European headquarters in London, UK.",
  },
  {
    question: "How can I contact Zoiko Payroll?",
    answer: "Sales, support, privacy, press and general contact routes are listed on the Contact page.",
  },
  {
    question: "Where can I review legal and security documents?",
    answer: "Legal, privacy and security documentation is published through the Trust Center.",
  },
];

const quickFacts = [
  { label: "Standalone", tone: "bg-brand/10 text-brand" },
  { label: "Zoiko One", tone: "bg-brand/10 text-brand" },
  { label: "45 jurisdictions", tone: "bg-emerald-50 text-emerald-700" },
  { label: "Zoiko Tech Inc", tone: "bg-amber-50 text-amber-700" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>About Zoiko Payroll page</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            About Zoiko Payroll
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
          <Reveal delay={60} className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-200 hover:bg-slate-50"
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
                    <div className="overflow-hidden px-6 pb-4 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={120} className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Quick facts</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickFacts.map((fact) => (
                <span key={fact.label} className={`rounded-full px-2.5 py-1 text-xs font-medium ${fact.tone}`}>
                  {fact.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
