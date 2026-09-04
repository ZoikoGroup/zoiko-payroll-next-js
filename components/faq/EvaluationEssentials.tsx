"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../payroll-guides/Eyebrow";

const evaluationFaqs = [
  {
    question: "What is Zoiko Payroll?",
    scope: "General",
    answer: "Zoiko Payroll is a governed payroll platform for preparing, calculating, validating, reviewing, approving and completing payroll operations.",
    detail: "Specific workflows and available controls should be confirmed in current product information and documentation.",
    linkText: "View Product Overview / How Zoiko Payroll Works",
  },
  {
    question: "Who is Zoiko Payroll for?",
    scope: "General",
    answer: "Zoiko Payroll is built for growing businesses, multi-entity organizations, and enterprise teams requiring structured payroll controls, audit trails, and multi-jurisdiction compliance capabilities.",
    detail: "Designed to support payroll administrators, finance leaders, and HR teams with role-based permissions and verification workflows.",
    linkText: "View Solutions & Audience Guide",
  },
  {
    question: "Does Zoiko Payroll support multiple jurisdictions?",
    scope: "Jurisdiction",
    answer: "Yes, Zoiko Payroll supports multi-jurisdictional payroll processing, automatically applying relevant tax rules, statutory deductions, and compliance frameworks across supported regions.",
    detail: "Jurisdiction-specific rules are regularly updated to reflect current regulatory standards. Review local configuration guides for specific region support.",
    linkText: "View Global Jurisdictions & Coverage",
  },
  {
    question: "How do we plan a payroll migration?",
    scope: "General",
    answer: "Payroll migration follows a structured phased approach including data auditing, historical reconciliation, parallel run testing, and final go-live validation.",
    detail: "Dedicated implementation specialists work alongside your team to minimize disruption and ensure data accuracy during transition.",
    linkText: "View Migration & Implementation Guide",
  },
  {
    question: "Where can I find pricing?",
    scope: "Plan",
    answer: "Pricing is structured around modular plans tailored to organization size, entity count, and required compliance jurisdictions.",
    detail: "Transparent tier structures ensure predictable scaling. Contact our sales team or review our detailed pricing matrix for comprehensive breakdowns.",
    linkText: "View Pricing Plans & Tiers",
  },
  {
    question: "Where can I review security and trust information?",
    scope: "General",
    answer: "Security and compliance documentation—including encryption standards, access controls, data residency, and audit certifications—is centralized in our Trust Center.",
    detail: "We maintain strict adherence to industry security benchmarks to safeguard sensitive employee and financial data.",
    linkText: "View Security & Trust Center",
  },
];

const scopeColors: Record<string, string> = {
  General: "bg-[#E1EEF9] text-[#155A8A]",
  Jurisdiction: "bg-[#E1EEF9] text-[#155A8A]",
  Plan: "bg-[#E1EEF9] text-[#155A8A]",
};

export default function EvaluationEssentials() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F4F8FB] border-t border-slate-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow className="text-[#0A8FD0]">Evaluation essentials</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-[#0A2E4B] leading-9">
            The questions most evaluators ask first.
          </h2>
          <p className="mt-4 max-w-[580px] text-base font-jakarta text-[#4E6172] leading-6">
            Editorially selected, not a popularity or personalized ranking. Answer before
            CTA, every time.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col gap-[5px]">
            {evaluationFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-[0px_8px_24px_rgba(10,46,75,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-sm font-bold font-jakarta text-[#0A2E4B] leading-5">
                      {faq.question}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`rounded-[20px] px-3 py-1 text-xs font-bold font-jakarta leading-4 ${scopeColors[faq.scope] || "bg-[#E1EEF9] text-[#155A8A]"}`}>
                        {faq.scope}
                      </span>
                      <span className="text-[#0A8FD0] text-lg font-normal font-jakarta leading-7 flex items-center justify-center w-5 h-5">
                        {isOpen ? (
                          <span className="text-sm font-bold">−</span>
                        ) : (
                          <span className="text-sm font-bold">+</span>
                        )}
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 bg-white">
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
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs font-bold font-jakarta text-[#0A8FD0] leading-5 hover:underline cursor-pointer">
                            → {faq.linkText}
                          </span>
                        </div>
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