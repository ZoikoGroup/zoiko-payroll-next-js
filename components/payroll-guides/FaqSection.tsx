"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { PlusIcon, CloseIcon } from "../ui/icons";

export type FaqItem = {
  question: string;
  scope: string;
  answer: string;
  detail: string;
  linkText: string;
};

type FaqCategorySectionProps = {
  eyebrow?: string;
  title?: string;
  items?: FaqItem[];
  /** If provided, the first item with this index is expanded by default */
  defaultOpen?: number;
  bg?: "white" | "indigo";
};

export const defaultFaqItems: FaqItem[] = [
  {
    question: "What does Zoiko Payroll do day-to-day?",
    scope: "Product",
    answer:
      "Zoiko Payroll coordinates end-to-end payroll operations — from gross wage calculations and statutory deductions to automated pre-run reconciliation, approval routing, and direct bank disbursements.",
    detail:
      "It serves as the central operating engine for recurring pay cycles, off-cycle adjustments, tax filings, and real-time ledger syncing across all entities.",
    linkText: "Product documentation: Core Workflow Engine",
  },
  {
    question: "Can Zoiko Payroll support approvals before payroll is completed?",
    scope: "Product",
    answer:
      "Yes. Zoiko supports granular multi-level approval hierarchies with mandatory separation of duties, threshold-based sign-offs, and variance review gates before any funds or filings are committed.",
    detail:
      "Configurable approval policies require specific departmental, finance, or executive approvals whenever variance anomalies or manual gross pay adjustments exceed defined percentage limits.",
    linkText: "Controls documentation: Approval Policies & Audit Trails",
  },
  {
    question: "Can employees access their own payslips and records?",
    scope: "Product",
    answer:
      "Yes. Employees and contractors receive secure, 24/7 self-service access to itemized digital payslips, end-of-year tax statements (W-2s, 1099s, P60s), and lifetime earnings records.",
    detail:
      "Accessible via responsive web and dedicated mobile interfaces with multi-factor authentication, secure PDF downloads, and direct deposit update workflows.",
    linkText: "Employee portal: Self-Service Overview",
  },
  {
    question: "Does Zoiko Payroll connect with other business systems?",
    scope: "Integrations",
    answer:
      "Zoiko Payroll natively synchronizes with leading HRIS platforms, Enterprise ERPs (NetSuite, Workday, SAP), time-tracking tools, benefits providers, and identity providers (Okta, Azure AD).",
    detail:
      "Bi-directional REST APIs and webhooks allow automatic employee record provisioning, automated timesheet ingestion, and journal entry posting to the general ledger upon payroll close.",
    linkText: "Integration hub: API & Connector Directory",
  },
  {
    question: "What is Zoiko One and how does it relate to Zoiko Payroll?",
    scope: "Platform",
    answer:
      "Zoiko One is the unified core platform and data layer that integrates Zoiko Payroll, HR Core, Benefits, Time & Attendance, and Workforce Management into a single system of record.",
    detail:
      "By operating on a single unified database, changes made in Zoiko One (like compensation updates or promotions) immediately propagate to payroll without manual batch transfers.",
    linkText: "Platform architecture: Zoiko One Ecosystem",
  },
  {
    question: "Can I customize payroll workflows to match our organization?",
    scope: "Product",
    answer:
      "Yes. You can build custom pay schedules, tailored earnings/deduction formulas, custom review steps, automated notification triggers, and custom data export formats.",
    detail:
      "Rules can be applied globally or partitioned by legal entity, jurisdiction, department, and employment classification (salaried, hourly, contractor).",
    linkText: "Configuration guide: Custom Workflows & Rules Engine",
  },
];

const scopeColors: Record<string, string> = {
  General: "bg-[#E1EEF9] text-[#0A8FD0]",
  Product: "bg-[#E1EEF9] text-[#0A8FD0]",
  Platform: "bg-[#E1EEF9] text-[#0A8FD0]",
  Integrations: "bg-[#E1EEF9] text-[#0A8FD0]",
  Plan: "bg-[#E1EEF9] text-[#0A8FD0]",
  Jurisdiction: "bg-[#E1EEF9] text-[#0A8FD0]",
  Date: "bg-[#E1EEF9] text-[#0A8FD0]",
};

export default function FaqSection({
  eyebrow = "PRODUCT & PLATFORM",
  title = "What Zoiko Payroll does — and where the current details live.",
  items = defaultFaqItems,
  defaultOpen = 0,
}: FaqCategorySectionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <section className="bg-[#F4F8FB] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-3">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-[#FFFFFF] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                      {faq.question}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`rounded-[20px] px-3 py-1 text-xs font-bold font-jakarta leading-4 ${
                          scopeColors[faq.scope] || "bg-[#E1EEF9] text-[#0A8FD0]"
                        }`}
                      >
                        {faq.scope}
                      </span>
                      <span className="text-[#0A8FD0] text-lg font-normal font-jakarta leading-7 transition-transform duration-200">
                        {isOpen ? (
                          <CloseIcon className="h-5 w-5 rotate-45" />
                        ) : (
                          <PlusIcon className="h-5 w-5" />
                        )}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm font-medium font-jakarta text-[#0A2E4B] leading-5">
                        {faq.answer}
                      </p>
                      {faq.detail && (
                        <p className="mt-3 text-xs font-jakarta text-[#4E6172] leading-5">
                          {faq.detail}
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4 text-xs font-jakarta">
                        <span className="text-[#8592A0]">Scope: {faq.scope}</span>
                        <span className="text-[#8592A0]">Reviewed Aug 2026</span>
                      </div>
                      {faq.linkText && (
                        <a
                          href="#"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-bold font-jakarta text-[#0A8FD0] hover:underline"
                        >
                          <span>→</span>
                          <span>{faq.linkText}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
