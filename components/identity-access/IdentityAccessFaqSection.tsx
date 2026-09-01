"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer?: string;
}

const faqs: FaqItem[] = [
  {
    question: "What does the fit result actually show?",
    answer:
      "The fit evaluation analyzes your directory architecture, SAML/OIDC identity protocols, and SCIM capabilities to determine exact integration compatibility and required governance controls.",
  },
  {
    question: "Is SSO the same as provisioning?",
    answer:
      "No. SSO (Authentication) proves who a user is via your identity provider. Provisioning (SCIM/Lifecycle) handles account creation, attribute sync, and deactivation across systems.",
  },
  {
    question: "Can directory groups grant payroll access automatically?",
    answer:
      "Directory groups map to roles, but high-risk privileges require explicit governance and verification. Unmatched or sensitive groups never grant silent default access.",
  },
  {
    question: "What happens when someone leaves the directory?",
    answer:
      "Deprovisioning triggers via SCIM or identity sync, placing the user in a deprovision_pending or deactivated state to immediately restrict access while preserving audit lineage.",
  },
  {
    question: "Is my provider unlisted?",
    answer:
      "Any standard-compliant SAML 2.0, OIDC, or SCIM 2.0 provider can be integrated even if not listed by name in default templates.",
  },
];

export default function IdentityAccessFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="w-4 h-[2px] bg-[#0A8FD0] inline-block" />
            <span>FAQ</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-tight text-[#07243B] leading-tight">
            Questions about identity & access
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A8FD0] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="text-slate-400 group-hover:text-[#0A8FD0] transition-colors shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && faq.answer && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
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
