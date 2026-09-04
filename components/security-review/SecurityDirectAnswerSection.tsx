"use client";

import React from "react";

interface DirectAnswerCard {
  question: string;
  answer: string;
}

const directAnswers: DirectAnswerCard[] = [
  {
    question: "Does Zoiko Payroll have SOC 2 or ISO 27001?",
    answer:
      "Answered dynamically from the verified assurance registry. If current evidence doesn't exist, we say so — never inferred from control design.",
  },
  {
    question: "Can I see penetration-test results?",
    answer:
      "A public attestation/summary is shown if approved; detailed reports require controlled access and may require an NDA.",
  },
  {
    question: "Where is payroll data hosted?",
    answer:
      "Resolved from the approved data-location register for the scoped service and region — never generalized to all customers.",
  },
  {
    question: "Is payroll data encrypted?",
    answer:
      "We state only the verified protection standard and scope; detailed key/algorithm claims come from approved technical evidence.",
  },
];

export default function SecurityDirectAnswerSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FA] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                DIRECT ANSWER
              </span>
            </div>

            {/* Title (31px) */}
            <h2 className="text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-2xl">
              How is Zoiko Payroll's security organized?
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            Verified controls, current evidence, controlled access.
          </p>
        </div>

        {/* Featured Main Box with 4px Left Border */}
        <div className="bg-white border border-slate-200/80 border-l-[4px] border-l-[#0A78C3] rounded-2xl p-6 sm:p-8 shadow-xs">
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Zoiko Payroll's security review is organized around verified
            security controls, current assurance evidence and controlled
            due-diligence access. Buyers can review public security information,
            request protected audit or assessment materials where available, and
            submit standardized or custom security questionnaires — without
            sensitive security detail ever appearing on the open web.
          </p>
        </div>

        {/* 2x2 Grid for FAQ/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directAnswers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors"
            >
              <h3 className="text-sm font-bold text-[#07243B]">
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
