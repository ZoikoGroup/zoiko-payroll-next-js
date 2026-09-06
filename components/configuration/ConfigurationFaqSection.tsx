"use client";

import React, { useState } from "react";

export default function ConfigurationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does payroll system configuration include?",
      answer:
        "Organization and payroll structures, calendars, earnings, deductions, benefits, statutory rules, workforce inputs, payments, accounting, integrations, security, and reporting outputs — each governed with effective dates, approvals, and test evidence.",
    },
    {
      question: "How are earnings and deductions configured?",
      answer:
        "Earnings and deductions are configured using defined rules, statutory tax treatments, custom calculation formulas, eligibility criteria, and general ledger account mappings.",
    },
    {
      question: "How do you test payroll configuration before go-live?",
      answer:
        "Testing involves unit validation, end-to-end scenario testing, and parallel payroll runs where outputs are compared directly against legacy system calculations.",
    },
    {
      question:
        "What's the difference between configuration and customization?",
      answer:
        "Configuration operates within supported platform boundaries using governed rules and settings, whereas customization involves writing unique source code outside standard product capabilities.",
    },
    {
      question: "Can configuration be changed after go-live?",
      answer:
        "Yes, configuration can be updated using effective-dated versioning and controlled change approval workflows without breaking historical records.",
    },
    {
      question: 'Does "configured" mean payroll is ready to go live?',
      answer:
        "No, configuration must undergo end-to-end data validation, statutory verification, parallel run sign-offs, and final customer approval before going live.",
    },
  ] as const;

  const steps = [
    { step: 1, title: "Readiness Assessment" },
    { step: 2, title: "Data Migration" },
    { step: 3, title: "Configuration" },
    { step: 4, title: "Parallel Runs & Validation" },
    { step: 5, title: "Change Management / Training" },
    { step: 6, title: "Customer Success" },
  ] as const;

  return (
    <div className="flex items-center justify-center py-12 md:py-20 text-[#0F172A] bg-[#F8FAFC]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Title & FAQ Accordion */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mb-8">
              Questions about configuration
            </h2>

            {/* FAQ Accordion List */}
            <div className="divide-y divide-[#E2E8F0]">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-5 first:pt-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0A78C3] transition-colors pr-4">
                        {faq.question}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Implementation Journey Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#EEF4FB]/60 rounded-2xl p-6 sm:p-7 border border-[#E2E8F0]/80">
              {/* Header */}
              <div className="text-[11px] font-bold tracking-wider text-[#64748B] uppercase mb-6">
                IMPLEMENTATION JOURNEY
              </div>

              {/* Step Items */}
              <div className="flex flex-col gap-3">
                {steps.map((item) => {
                  const isActive = item.step === 3;
                  return (
                    <div
                      key={item.step}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-white text-[#0B192C] font-bold shadow-xs border border-[#E2E8F0]"
                          : "text-[#64748B] font-medium"
                      }`}
                    >
                      {/* Step Number Indicator */}
                      {isActive ? (
                        <div className="w-5 h-5 rounded-full bg-[#0A78C3] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          {item.step}
                        </div>
                      ) : (
                        <span className="w-5 text-center text-xs font-semibold shrink-0">
                          {item.step}
                        </span>
                      )}

                      {/* Step Title */}
                      <span className="text-xs sm:text-[13px]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
