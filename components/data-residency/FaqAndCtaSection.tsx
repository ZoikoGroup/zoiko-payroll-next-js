"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function FaqAndCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does storage in a region mean all processing stays there too?",
      answer:
        "No. Primary storage in a region never implies that all processing, backups, support access, subprocessors or integrations remain in that region — each is disclosed separately.",
    },
    {
      question: "Can Zoiko guarantee my data never leaves my country?",
      answer:
        "Data residency is handled per service architecture and disclosed service-by-service. Refer to the specific regional availability matrix for your modules.",
    },
    {
      question:
        "Does my worker's payroll jurisdiction determine data residency?",
      answer:
        "Payroll processing and tax jurisdiction are independent of the cloud storage and data residency configuration unless explicitly contracted.",
    },
    {
      question: "How current is the region availability registry?",
      answer:
        "The registry is maintained and updated regularly alongside infrastructure expansions and compliance reviews.",
    },
    {
      question: "Can I see my specific tenant's configuration here?",
      answer:
        "This public page shows architectural scopes and standard defaults. Contract-specific tenant configurations are accessible via your dedicated procurement workspace.",
    },
    {
      question: "What if the registry is temporarily unavailable?",
      answer:
        "Standard fallback policies apply according to your service level agreements and data processing addendum terms.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-16">
        {/* FAQ Header & Accordion Container */}
        <div className="space-y-12">
          {/* Header Block */}
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="text-[32px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Questions about data residency
            </h2>
          </div>

          {/* Accordion Box */}
          <div className="bg-white border max-w-4xl mx-auto border-slate-200/85 rounded-3xl p-6 sm:p-8 shadow-xs divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[#0A78C3] shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner Container with Image Background */}
        <div className="relative bg-[#0F2B3E] rounded-3xl overflow-hidden shadow-xl text-center py-16 px-6 sm:px-12 flex flex-col items-center justify-center">
          {/* Background Image using Next.js Image component */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/residency/bg2.png"
              alt="Ready to go further background"
              fill
              className="object-cover opacity-10 object-center"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#8FD0F2] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#8FD0F2]">
                  /
                </span>
                READY TO GO FURTHER?
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
              Get residency evidence for your specific requirements
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#165a8c] text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
                View residency options
              </button>
              <button className="hover:bg-[#07243B] text-white border border-slate-600/60 text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
                Open Data Processing Addendum
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
