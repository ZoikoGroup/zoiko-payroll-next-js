"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "what-is-payroll-workspace",
    question: "What is a payroll workspace?",
    answer:
      "The operating center for preparing, reviewing, approving, paying, closing and auditing payroll — bringing status, exceptions, approvals, payments, records and reporting into one governed experience.",
  },
  {
    id: "who-is-it-for",
    question: "Who is it for?",
    answer:
      "It is designed for payroll operations teams, finance leads, HR managers, and auditors who need centralized oversight, role-based controls, and seamless collaboration throughout the pay cycle.",
  },
  {
    id: "multiple-entities-jurisdictions",
    question: "Can it support multiple entities and jurisdictions?",
    answer:
      "Yes. The workspace provides a global-ready operating model that standardizes pay cycles while applying jurisdiction-specific tax rules, currencies, calendars, and statutory filing obligations.",
  },
  {
    id: "prevent-errors",
    question: "How does it help prevent errors?",
    answer:
      "It uses automated pre-calculation validation, real-time exception visibility, variance detection, and strict approval gateways to catch payroll anomalies before disbursements occur.",
  },
  {
    id: "different-permissions",
    question: "Can teams have different permissions?",
    answer:
      "Yes. Granular role-based access controls enforce least-privilege permissions, allowing payroll ops, finance, HR, and external auditors to interact with only the data and actions relevant to their role.",
  },
  {
    id: "reporting-audit-records",
    question: "Does it include reporting and audit records?",
    answer:
      "Yes. The platform maintains a complete, timestamped history of every change, calculation, and authorization, generating audit-ready reports and compliance documentation for every pay period.",
  },
  {
    id: "payments-handled",
    question: "How are payments handled?",
    answer:
      "Payment workflows coordinate funding, direct deposits, and treasury provider disbursements through secure, configured banking rails with built-in dual-authorization safeguards.",
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "You can request a live product demonstration or consult with our sales team to evaluate your current setup, integration requirements, and supported jurisdiction needs.",
  },
];

export default function FAQAndCTASection() {
  const [openId, setOpenId] = useState<string | null>(
    "what-is-payroll-workspace",
  );

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* FAQ Container */}
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A78C3] uppercase font-mono">
              <span className="text-[#0A78C3] font-bold">/</span>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07243B]">
              Questions about the Payroll Workspace
            </h2>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-slate-100 border-b border-slate-100">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-hidden cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                      {item.question}
                    </span>
                    <span className="text-[#0A78C3] shrink-0 ml-4">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-8 text-sm text-slate-500 font-medium leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#0F2B3E] rounded-3xl p-10 sm:p-14 text-center text-white space-y-8 shadow-xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
              <span className="text-[#8FD0F2] font-bold">/</span>
              <span>READY TO GO FURTHER?</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight leading-tight text-white">
              Ready to bring your payroll cycle into one workspace?
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#0863A1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer">
              Book a Demo
            </button>
            <button className="px-6 py-3 rounded-xl bg-transparent border border-slate-600 hover:border-slate-400 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
