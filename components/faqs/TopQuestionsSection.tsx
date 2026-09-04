"use client";

import React from "react";

interface QuestionCard {
  question: string;
  answer: string;
}

const topQuestions: QuestionCard[] = [
  {
    question: "How is Zoiko Payroll priced?",
    answer:
      "Recurring payroll subscription uses the approved plan and Billable Worker-Month model. Implementation, additional local services and some complex scopes can be priced separately.",
  },
  {
    question: "What is a Billable Worker-Month?",
    answer:
      "It is the recurring billing unit for an in-scope worker in a legal entity for a billing month, as defined by the approved commercial standard.",
  },
  {
    question: "Are administrators charged separately?",
    answer:
      "No separate administrator-seat charge applies under the approved baseline.",
  },
  {
    question: "Do reruns or corrections create extra worker charges?",
    answer:
      "No. Reruns, retries, corrections and multiple calculations for the same worker/entity/month must not duplicate the Billable Worker-Month charge.",
  },
  {
    question: "Is implementation included?",
    answer:
      "Implementation is separately scoped unless the applicable approved commercial offer expressly includes it.",
  },
  {
    question: "When does recurring billing start?",
    answer:
      "From the approved Service Commencement Date or other contractually defined production start.",
  },
  {
    question: "How does pricing work across multiple countries?",
    answer:
      "Plan capacity, jurisdiction activation, recurring local services and external/local costs are separate commercial layers.",
  },
  {
    question: "Can I try Zoiko Payroll before buying?",
    answer:
      "The approved baseline provides a 30-day Professional Evaluation in a non-production environment, without automatic paid conversion.",
  },
];

export default function TopQuestionsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 max-w-2xl">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              TOP QUESTIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight">
            The seven questions people ask first.
          </h2>
        </div>

        {/* 2-Column Grid of Question Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {topQuestions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <h3 className="text-sm font-extrabold text-[#07243B]">
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
