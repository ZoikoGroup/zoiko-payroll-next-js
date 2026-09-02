"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I choose the right solution?",
    answer:
      "Use the 3-step Solution Navigator above, or start from your payroll footprint, organization stage or team — each routes to a relevant solution page.",
  },
  {
    question:
      "What's the difference between single and multi-jurisdiction payroll?",
    answer:
      "Single-jurisdiction payroll focuses on operations within one primary country, while multi-jurisdiction payroll coordinates operations across multiple countries while retaining local tax and regulatory rules.",
  },
  {
    question: "What makes multi-entity payroll different?",
    answer:
      "Multi-entity payroll addresses governance, segregation of duties, and unified reporting across separate legal entities, rather than just handling larger numbers of employees.",
  },
  {
    question: "Is this platform right for a growing business or an enterprise?",
    answer:
      "Yes, the platform scales from growing businesses needing automated, repeatable runs to enterprises requiring granular permissions and complex integrations.",
  },
  {
    question: "How does this differ for payroll, finance and HR roles?",
    answer:
      "Each team gets role-specific workflows and views — payroll handles calculations and approvals, finance manages cash and GL outputs, and HR coordinates worker changes.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "Coverage spans global jurisdictions through native processing, integrated local partners, and assisted workflows detailed in our Jurisdiction Directory.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Pre-built and custom API integrations connect HR system of record, time tracking, ERP finance modules, identity providers, and banking rails.",
  },
  {
    question: "How is this page different from the Product Overview?",
    answer:
      "This page helps you navigate to the operational model that matches your business structure, whereas the Product Overview details core feature capabilities.",
  },
];

export default function SolutionsFAQAndCTABannerSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Questions about choosing a solution
          </h2>
        </div>

        {/* Accordion FAQ List */}
        <div className="divide-y max-w-4xl mx-auto divide-slate-200 border-t border-b border-slate-200">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#0A8FD0] transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#0A8FD0]">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#0A8FD0]" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-3xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="relative rounded-3xl overflow-hidden text-white shadow-xl min-h-[320px] flex items-center justify-center p-8 sm:p-12 text-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/solutions/cta.png"
              alt="Team collaborating in office background"
              fill
              className="object-cover object-center"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#071927]/85 backdrop-blur-[1px]" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase font-mono">
              <span>/</span>
              <span>READY TO GO FURTHER?</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Find your payroll solution
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-300 font-medium max-w-lg mx-auto">
              Service availability, implementation scope and jurisdiction
              coverage are confirmed during evaluation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:from-[#097EB8] hover:to-[#065A87] text-white text-xs font-bold rounded-xl shadow-md transition-all">
                Book a demo
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold rounded-xl transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
