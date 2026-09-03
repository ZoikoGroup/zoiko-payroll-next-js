"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are payroll calculations an add-on?",
    answer:
      "No. Core statutory calculation for a licensed jurisdiction belongs to the platform. Activation and local service coverage still depend on approved jurisdiction scope.",
  },
  {
    question: "Is implementation included?",
    answer:
      "Implementation services are separately scoped based on your configuration requirements, data migration complexity, testing schedules, and cutover needs.",
  },
  {
    question: "Does Zoiko automatically file and pay taxes?",
    answer:
      "Tax filing and payment execution are managed or supported services that depend on your contract structure, jurisdiction, and authorized service model.",
  },
  {
    question: "Can I use Zoiko software but keep my existing provider?",
    answer:
      "Yes. You can license the core platform and choose to operate or keep specific elements with your existing providers under a defined responsibility matrix.",
  },
  {
    question: "Can different countries use different service models?",
    answer:
      "Yes. Service coverage, activation, and operational scopes resolve individually by entity, plan, and jurisdiction.",
  },
];

export default function FAQAndFinalCTASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* FAQ Header & Accordion */}
        <div className="space-y-10">
          {/* Eyebrow & Title */}
          <div className="space-y-3 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#0A78C3] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              Services and scope, answered plainly.
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="divide-y divide-slate-200/70 max-w-4xl mx-auto border-t border-b border-slate-200/70">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#07243B] group-hover:text-[#8FD0F5] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#8FD0F5] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-medium text-slate-500 leading-relaxed pr-8">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Banner Card with Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#082F49] text-white py-12 px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#8FD0F5] inline-block rounded-xs" />
                <span className="text-xs font-bold tracking-wider text-[#8FD0F5] uppercase">
                  FINAL STEP
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[36px] font-extrabold text-white tracking-tight leading-snug">
                Build a service scope that fits how you operate.
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-lg">
                Tell us how you want payroll operated — we'll show what's
                included, what's optional, and what needs a specialist.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#2C90D0] to-[#117DC5] hover:opacity-95 text-white px-6 py-3.5 rounded-xl shadow-md transition-opacity cursor-pointer text-center"
                >
                  Request Custom Quote
                </button>
                <button
                  type="button"
                  className="text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Book a demo
                </button>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden">
              <Image
                src="/images/services/2.png"
                alt="Team collaborating on payroll operations"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
