"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How does Zoiko Payroll pricing work?",
    answer:
      "Core is $8 per billable worker/month with a $40 monthly minimum; Professional is $15 with a $150 minimum; Business is $25 with a $500 minimum; Enterprise is custom. Where annual billing is offered, 12 months are prepaid for the price of 10. Administrators are not separately billed and there is no separate platform fee. Taxes, implementation and operational service packs may be additional.",
  },
  {
    question: "Which Zoiko Payroll plan is best for a growing business?",
    answer:
      "The Professional plan is typically recommended for growing businesses, offering up to 250 workers, up to 3 legal entities and production jurisdictions, advanced approvals, and priority support.",
  },
  {
    question: "Does Zoiko Payroll offer a free trial?",
    answer:
      "Yes, Zoiko Payroll offers a 30-day evaluation window on the Professional plan with a controlled environment, no payment method required by default, and safe sandbox simulation.",
  },
  {
    question: "Can I upgrade my Zoiko Payroll plan?",
    answer:
      "Yes, you can upgrade your plan to unlock additional scale and capabilities after commercial authorization, without putting your existing payroll history at risk.",
  },
  {
    question: "Can I downgrade my plan?",
    answer:
      "Yes, you can downgrade your plan after reviewing exact limits and capabilities that will change via the impact review tool, ensuring any blockers are resolved.",
  },
  {
    question: "Can Zoiko Payroll support multiple legal entities?",
    answer:
      "Yes, multi-entity support scales depending on your plan: Core supports 1 legal entity, Professional supports up to 3, Business supports up to 10, and Enterprise offers custom contractual structures.",
  },
  {
    question: "Can Zoiko Payroll support multiple jurisdictions?",
    answer:
      "Yes, jurisdiction capabilities scale by tier: Core supports 1 production jurisdiction, Professional supports up to 3, Business supports up to 10, and Enterprise supports customized multi-jurisdiction footprints.",
  },
  {
    question: "Which plan includes API access?",
    answer:
      "API access is available starting on the Professional plan (with limited access), full API access on Business, and full API access with extensions on Enterprise.",
  },
  {
    question: "Which plan includes SSO?",
    answer:
      "SAML SSO is included starting on the Business plan and Enterprise plans, while SCIM provisioning is exclusive to the Enterprise tier.",
  },
  {
    question: "Are managed payroll and tax filing included in every plan?",
    answer:
      "No. Software plans determine platform capabilities, while managed payroll, tax filing, and remittance are handled via separately contracted operational service packs gated by jurisdiction and service readiness.",
  },
];

export default function FaqAnswerEngineSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              FAQ / ANSWER ENGINE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            Questions about Zoiko Payroll pricing
          </h2>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                    {item.question}
                  </span>
                  <div className="w-6 h-6 rounded-full text-slate-600 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-12">
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
