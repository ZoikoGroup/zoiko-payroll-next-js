"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const leftFaqData: FAQItem[] = [
  {
    question: "What does the Legal Center contain?",
    answer:
      "Privacy/cookie notices, website/service terms, DPA, acceptable-use rules, accessibility information and legal notices — all indexed from the approved registry.",
  },
  {
    question: "How do I find the current version of a document?",
    answer:
      "Look at the document registry table or the header section of each legal document. Every document displays its status, version number, publication date, and effective date.",
  },
];

const rightFaqData: FAQItem[] = [
  {
    question: "What's the difference between Website Terms and Service Terms?",
    answer:
      "Website Terms govern public website browsing and general use, while Service Terms govern the actual usage and subscription of the Zoiko Payroll platform.",
  },
  {
    question: "Where do I find DPA and privacy/cookie information?",
    answer:
      "You can access the Data Processing Addendum (DPA), Privacy Notice, and Cookie Notice directly from the Quick Task Router or the Current Legal Documents table.",
  },
];

export default function LegalCenterFAQSection() {
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(0);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setOpenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRight = (index: number) => {
    setOpenRightIndex(openRightIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="space-y-3">
          {/* Tag Line */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2F6FED] uppercase">
            <span className="w-3 h-0.5 bg-[#2F6FED]" />
            <span>FAQ</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0F172A] tracking-tight leading-tight">
            Questions about the Legal Center
          </h2>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 items-start">
          {/* Left Column FAQs */}
          <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
            {leftFaqData.map((item, idx) => {
              const isOpen = openLeftIndex === idx;

              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight group-hover:text-[#2F6FED] transition-colors">
                      {item.question}
                    </span>
                    <span className="text-[#2F6FED] shrink-0">
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6">
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column FAQs */}
          <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
            {rightFaqData.map((item, idx) => {
              const isOpen = openRightIndex === idx;

              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight group-hover:text-[#2F6FED] transition-colors">
                      {item.question}
                    </span>
                    <span className="text-[#2F6FED] shrink-0">
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-6">
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#F6F8FC] via-[#F6F8FCBF] to-[#F6F8FC66] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-gray-100">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
              Review legal documents first.
            </h3>
            <p className="text-xs text-[#64748B]">
              Trust & Security and Contact are secondary — sales only after
              legal utility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#2F6FED] hover:bg-[#2558C9] text-white text-xs font-semibold transition-all shadow-sm"
            >
              Contact
            </Link>
            <Link
              href="/trust-and-security"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 text-[#0F172A] text-xs font-semibold border border-gray-200 transition-all shadow-sm"
            >
              Trust & Security
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
