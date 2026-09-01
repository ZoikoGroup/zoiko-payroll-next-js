"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FaqItem {
  question: string;
  answer?: string;
  defaultOpen?: boolean;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Is delivery exactly-once?",
    answer:
      "Not unless an approved contract explicitly guarantees it. Always dedupe using event_id before irreversible side effects.",
    defaultOpen: true,
  },
  {
    question: "Is event ordering guaranteed?",
    answer:
      "Ordering is not guaranteed unless specified by contract. Use timestamps or resource versions to handle concurrency.",
    defaultOpen: false,
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can I replay a missed event?",
    answer:
      "Yes, eligible failed or missed events can be replayed directly via the delivery logs interface.",
    defaultOpen: false,
  },
  {
    question: "What does DELIVERED actually confirm?",
    answer:
      "DELIVERED confirms the receiving endpoint responded with a valid acknowledgement. It does not verify downstream processing.",
    defaultOpen: false,
  },
];

export default function FaqAndCtaSection() {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({
    "Is delivery exactly-once?": true,
  });

  const toggleFaq = (question: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <section className="w-full bg-white py-20 border-t border-t-[#E6E9F0] px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* FAQ Section */}
        <div className="space-y-10">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
              <span className="w-4 h-[2px] bg-[#2F6FED] inline-block" />
              <span>FAQ</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Questions about Zoiko Payroll webhooks
            </h2>
          </div>

          {/* FAQ Accordion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {leftFaqs.map((faq) => {
                const isOpen = !!openStates[faq.question];
                return (
                  <div
                    key={faq.question}
                    className="border-b border-slate-200 pb-4 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.question)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer py-2 group"
                    >
                      <span className="text-sm font-bold text-[#07243B] group-hover:text-[#2F6FED] transition-colors">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <X className="w-4 h-4 text-[#2F6FED] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#2F6FED] shrink-0" />
                      )}
                    </button>
                    {isOpen && faq.answer && (
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightFaqs.map((faq) => {
                const isOpen = !!openStates[faq.question];
                return (
                  <div
                    key={faq.question}
                    className="border-b border-slate-200 pb-4 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.question)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer py-2 group"
                    >
                      <span className="text-sm font-bold text-[#07243B] group-hover:text-[#2F6FED] transition-colors">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <X className="w-4 h-4 text-[#2F6FED] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#2F6FED] shrink-0" />
                      )}
                    </button>
                    {isOpen && faq.answer && (
                      <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Banner CTA Card */}
        <div className="bg-[#08132B] rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
                <span className="w-4 h-[2px] bg-[#2F6FED] inline-block" />
                <span>BUILD EVENT-DRIVEN PAYROLL INTEGRATIONS</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                From documented webhook contracts — nothing invented.
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
                Explore approved events, verify authenticity, and monitor
                delivery from day one.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-[#33A1E7] hover:bg-[#2558C7] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  View webhook quickstart
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-xl bg-[#FFFFFF1A] border border-slate-700 hover:border-slate-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Get integration support
                </a>
              </div>
            </div>

            {/* Right Image Container (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 shadow-lg">
                <img
                  src="/images/footer-integrations/43.png"
                  alt="Team conducting a video meeting and presenting analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
