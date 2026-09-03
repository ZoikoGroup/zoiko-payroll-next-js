"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FaqItem[] = [
  {
    id: "forgot-password",
    question: "I forgot my password — what happens next?",
    answer:
      "You'll see the same neutral confirmation message whether or not an account exists. If eligible, a reset link is sent to your verified contact method.",
  },
  {
    id: "support-account-check",
    question: "Can support tell me if I have an account?",
    answer:
      "To protect user privacy and account security, support cannot confirm account existence prior to verification.",
  },
  {
    id: "sso-password-reset",
    question: "My employer uses SSO — why can't Zoiko reset my password?",
    answer:
      "When SSO is enabled, your credentials are managed directly by your employer's identity provider. Zoiko Payroll does not store or control those passwords.",
  },
  {
    id: "payroll-identity-verification",
    question: "Can I use my payroll details to verify my identity?",
    answer:
      "Verification is conducted strictly through approved authentication methods to prevent unauthorized access.",
  },
  {
    id: "two-employers-data",
    question:
      "I worked for two employers — will I see the wrong company's data?",
    answer:
      "No. Workspaces are strictly separated and scoped. You can safely switch between distinct employer contexts without data overlap.",
  },
  {
    id: "find-payslip",
    question: "Where do I find my payslip?",
    answer:
      "You can view and download all published payslips by pay period directly inside the Document Access Hub once signed in.",
  },
  {
    id: "pay-seems-wrong",
    question: "My pay seems wrong — can Access Help fix it?",
    answer:
      "Access Help manages authentication and account entry. For calculation or payroll content discrepancies, contact your employer's HR or payroll team.",
  },
  {
    id: "suspicious-message",
    question:
      "I received a suspicious message asking for my password — what do I do?",
    answer:
      "Never share your password. Report the message immediately through our security escalation channels and secure your account.",
  },
];

export default function EmployeeAccessFaqSection() {
  const [openId, setOpenId] = useState<string | null>("forgot-password");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* FAQ Header & Accordion Area */}
        <div className="space-y-10">
          {/* Header Block */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
              <span>/</span>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[1px] text-[#07243B] leading-tight">
              Questions about Employee Access Help
            </h2>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-slate-200/80 max-w-4xl mx-auto">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] tracking-[1px] group-hover:text-[#0A8FD0] transition-colors">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#0A8FD0]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && faq.answer && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed tracking-[1px] max-w-2xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[320px] sm:min-h-[360px] flex items-center justify-center text-center p-8 sm:p-12">
          {/* Background Image with Dark Gradient Overlay */}
          <Image
            src="/images/employee-access/5.png"
            alt="Employee looking at screen smiling"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#07243B]/80 backdrop-blur-[1px]" />

          {/* Banner Content */}
          <div className="relative z-10 mx-auto space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
                <span>/</span>
                <span>READY TO GO FURTHER?</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[1px] text-white leading-tight">
                Get back into your account safely
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                className="w-full sm:w-auto bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#087CB7] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-xl shadow-md transition-all tracking-[1px]"
              >
                Sign in
              </button>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-slate-900/60 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-slate-400/40 shadow-sm transition-all tracking-[1px]"
              >
                <span>Contact support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
