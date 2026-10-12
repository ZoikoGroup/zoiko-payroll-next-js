"use client";

import React from "react";
import { ChevronRight, AlertCircle } from "lucide-react";

interface PricingStep {
  step: string;
  title: string;
  description: string;
}

const steps: PricingStep[] = [
  {
    step: "1",
    title: "Define scope",
    description:
      "Organization size bands, entities, jurisdictions, implementation scenario and delivery model — no payroll PII collected.",
  },
  {
    step: "2",
    title: "Identify work",
    description:
      "Answers map to foundation, activation, migration, integration, testing and cutover components.",
  },
  {
    step: "3",
    title: "Price the scope",
    description:
      'Catalog amount, non-binding estimate, or a clearly labeled "separately scoped" state.',
  },
  {
    step: "4",
    title: "Confirm commercially",
    description:
      "A quote or order form with assumptions, taxes, third-party costs and effective dates becomes authoritative.",
  },
];

export default function HowImplementationPricingWorksSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>How implementation pricing works</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight max-w-2xl">
              Four steps from scope to a confirmed commercial quote.
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-5 lg:max-w-xs lg:mt-9">
            The same governed flow every time — no shortcuts, no guessed
            amounts.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative bg-white rounded-2xl border border-slate-200 p-6 space-y-4"
            >
              <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#3B82F6] to-[#0A8FD0] text-white text-sm font-extrabold flex items-center justify-center">
                {item.step}
              </div>
              <h3 className="text-base font-extrabold text-[#07243B]">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-5">
                {item.description}
              </p>

              {idx !== steps.length - 1 && (
                <ChevronRight className="hidden lg:block absolute top-7 right-4 w-5 h-5 text-slate-200" />
              )}
            </div>
          ))}
        </div>

        {/* No false precision note */}
        <div className="bg-[#F1EAD8] rounded-xl p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#9C7A1F] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#082F49]">
              No false precision.
            </div>
            <p className="text-sm text-[#4E6172] leading-5">
              The page never estimates complex implementation work with a
              simplistic headcount multiplier when legal-entity, jurisdiction,
              data and integration effort are the material drivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
