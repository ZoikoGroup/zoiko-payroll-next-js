"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function MultiEntityOrganizationsSection() {
  const pipelineSteps = [
    { count: "6", label: "INPUTS" },
    { count: "4", label: "CALCULATED" },
    { count: "3", label: "APPROVED" },
    { count: "2", label: "PAYMENT" },
    { count: "5", label: "CLOSED" },
  ];

  const gridCards = [
    { label: "OWNER", value: "Regional Payroll Lead" },
    { label: "APPROVERS", value: "2 assigned" },
    { label: "BANK / FUNDING", value: "Configured" },
    { label: "ACCOUNTING PROFILE", value: "Mapped" },
    { label: "JURISDICTION", value: "DE / FR / NL" },
    { label: "NEXT CUTOFF", value: "Aug 28, 2026" },
  ];

  const summaryPills = [
    "20 entities in scope",
    "3 payrolls requiring action",
    "2 exceptions",
    "4 funding due",
    "11 closed this period",
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>MULTI-ENTITY ORGANIZATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B]">
            Multi-entity payroll adds a control problem, not just more
            employees.
          </h2>
        </div>

        {/* Main Control Panel Card (#0F2B3E background) */}
        <div className="bg-[#0F2B3E] rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-6">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#0A8FD0]" />
              <span className="text-sm font-bold tracking-wide">
                Multi-Entity Control Panel
              </span>
            </div>

            {/* Entity Hierarchy Flow */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs">
              <span className="bg-white text-[#07243B] font-bold px-3 py-1.5 rounded-md shadow-2xs">
                Group
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-white text-[#07243B] font-bold px-3 py-1.5 rounded-md shadow-2xs">
                Country
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-white text-[#07243B] font-bold px-3 py-1.5 rounded-md shadow-2xs">
                Legal Entity
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-white text-[#07243B] font-bold px-3 py-1.5 rounded-md shadow-2xs">
                Pay Group
              </span>
            </div>

            {/* Timestamp Badge */}
            <div className="hidden lg:block bg-white/10 text-slate-300 text-[11px] font-medium px-3 py-1 rounded-full self-start sm:self-auto">
              Aug 2026 · Illustrative
            </div>
          </div>

          {/* Pipeline Row (#E9F0F8 backgrounds) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#E9F0F8] text-[#07243B] rounded-xl p-4 text-center space-y-1 shadow-2xs"
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {step.count}
                </div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 font-mono">
                  {step.label}
                </div>
              </div>
            ))}
          </div>

          {/* 6-Grid Section (#E9F0F8 backgrounds) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {gridCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#E9F0F8] text-[#07243B] rounded-xl p-4 space-y-1 shadow-2xs"
              >
                <div className="text-[10px] font-bold tracking-wider text-slate-500 font-mono">
                  {card.label}
                </div>
                <div className="text-sm font-bold text-[#07243B]">
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Status Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          {summaryPills.map((pill, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full shadow-2xs"
            >
              {pill}
            </div>
          ))}
        </div>

        {/* Bottom CTA & Note */}
        <div className="text-center space-y-3 pt-2">
          <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
            Illustrative synthetic data for this design template.
          </p>

          <div>
            <button className="px-6 py-3 bg-gradient-to-r from-[#0A8FD0] to-[#076BA0] hover:from-[#097EB8] hover:to-[#065A87] text-white text-xs font-bold rounded-xl shadow-md transition-all">
              Explore multi-entity organizations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
