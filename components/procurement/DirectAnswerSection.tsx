"use client";

import React from "react";

interface DirectAnswerCard {
  question: string;
  answer: string;
}

const directAnswers: DirectAnswerCard[] = [
  {
    question: "Do I need to contact sales for every document?",
    answer:
      "No. Public documents are directly accessible. Gated or restricted evidence requires the appropriate verification.",
  },
  {
    question: "Where do I complete security due diligence?",
    answer:
      "Security Review is the canonical surface. This page only routes and packages approved security resources.",
  },
  {
    question: "Can Zoiko complete our vendor questionnaire?",
    answer:
      "Standard questionnaires are self-service where possible; custom RFP/RFI, SIG or CAIQ reviews use an assisted workflow.",
  },
  {
    question: "Can we access audit or pentest reports?",
    answer:
      "Only if the evidence is approved for disclosure and the required access controls are satisfied.",
  },
];

export default function DirectAnswerSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#0A78C3] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#0A78C3] uppercase">
                DIRECT ANSWER
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-2xl">
              Where do I find Zoiko Payroll procurement documents?
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            One hub, multiple authoritative sources.
          </p>
        </div>

        {/* Featured Main Box with 4px Left Border */}
        <div className="bg-white border border-slate-200/80 border-l-[4px] border-l-[#0A78C3] rounded-2xl py-6 px-8 shadow-xs">
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            Zoiko Payroll Procurement Resources is the central place to find or
            request the commercial, legal, privacy, security, implementation and
            supplier-onboarding evidence needed for vendor evaluation. Public
            resources can be accessed immediately; restricted documents use
            verified-prospect, NDA or customer-only access based on sensitivity.
          </p>
        </div>

        {/* 2x2 Grid for FAQ/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directAnswers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors"
            >
              <h3 className="text-[13px] font-bold text-[#07243B]">
                {item.question}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
