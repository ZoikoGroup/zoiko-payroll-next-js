"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";
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
    scope: "General",
    answer:
      "It coordinates payroll preparation, calculation, validation, review, approval and completion in one controlled workflow.",
    detail:
      "Automates data ingestion, tax calculations, and preliminary validations to reduce manual intervention across pay cycles.",
    linkText: "View Product Documentation",
  },
  {
    question: "Can Zoiko Payroll support approvals before payroll is completed?",
    scope: "Product",
    answer:
      "Yes, multi-level approval chains can be configured for payroll runs, adjustments, and off-cycle payments before final submission.",
    detail:
      "Ensure proper sign-offs from finance and HR leaders with built-in audit trails for every approval action.",
    linkText: "Learn about workflows",
  },
  {
    question: "Can employees access their own payslips and records?",
    scope: "Product",
    answer:
      "Employees get secure self-service access to historical payslips, tax documents, and personal employment records.",
    detail:
      "Available via web and mobile interfaces with multi-factor authentication and data encryption.",
    linkText: "Explore employee portal",
  },
  {
    question: "Does Zoiko Payroll connect with other business systems?",
    scope: "Product",
    answer:
      "It integrates seamlessly with leading HRIS, general ledger accounting, and identity management platforms.",
    detail:
      "Real-time data synchronization minimizes duplicate data entry and reconciliation errors.",
    linkText: "View integration guide",
  },
  {
    question: "What is Zoiko One and how does it relate to Zoiko Payroll?",
    scope: "Product",
    answer:
      "Zoiko One is the unified core platform bringing together payroll, human resources, and benefits management into a single ecosystem.",
    detail:
      "Provides a single source of truth across all employee data and administrative operations.",
    linkText: "Discover Zoiko One",
  },
  {
    question: "Can I customize payroll workflows to match our organization?",
    scope: "Product",
    answer:
      "Workflows, approval steps, and notification rules can be tailored to match your organization's internal compliance and governance structure.",
    detail:
      "Flexible rule engines allow custom field creation and specialized calculation scripts.",
    linkText: "Read customization guide",
  },
];

export default function FaqCategorySection({
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
              const answerText =
                faq.answer ||
                "Detailed documentation and operational guidelines for this topic are maintained in the centralized knowledge base.";
              const detailText =
                faq.detail ||
                "Includes automated compliance checks, role-based access controls, and full audit trail generation.";
              const link = faq.linkText || "View documentation";

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
                      <span className="rounded-[20px] bg-[#E1EEF9] px-3 py-1 text-xs font-bold font-jakarta text-[#0A8FD0] leading-4">
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
                        {answerText}
                      </p>
                      {detailText && (
                        <p className="mt-3 text-xs font-jakarta text-[#4E6172] leading-5">
                          {detailText}
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4 text-xs font-jakarta">
                        <span className="text-[#8592A0]">Scope: {faq.scope}</span>
                        <span className="text-[#8592A0]">Reviewed Aug 2026</span>
                      </div>
                      {link && (
                        <a
                          href="#"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-bold font-jakarta text-[#0A8FD0] hover:underline"
                        >
                          <span>→</span>
                          <span>{link}</span>
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