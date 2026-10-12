"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface DomainGate {
  label: string;
  status: "ready" | "blocked";
}

const domainGates: DomainGate[] = [
  { label: "Legal identity", status: "ready" },
  { label: "Payroll structure", status: "ready" },
  { label: "Rule context", status: "ready" },
  { label: "Governance", status: "ready" },
  { label: "Funding / Payments", status: "blocked" },
  { label: "Accounting", status: "ready" },
  { label: "Records / Privacy", status: "ready" },
];

export default function EntityReadinessSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Split Layout: Hero Image & Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/multi-entity/5.png"
                alt="Business colleagues reviewing payroll readiness on computer screen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="text-[#0A8FD0] font-bold">|</span>
              <span>ENTITY READINESS</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
              Seven domains gate payroll activation — every time
            </h2>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              Legal identity, payroll structure, rule context, governance,
              funding/payments, accounting and records/privacy each carry an
              effective-dated pass/block state. No Activate Payroll action until
              every hard gate passes.
            </p>
          </div>
        </div>

        {/* Readiness Dashboard Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
          {/* Box Header: Entity Title & Readiness Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-sm font-bold text-[#07243B]">
              Example Holdings UK Ltd
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5EBD6] text-[#9C7A1F ] font-semibold text-xs">
              6 of 7 domains ready
            </span>
          </div>

          {/* 7 Domains Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {domainGates.map((domain, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors ${
                  domain.status === "blocked"
                    ? "bg-[#FEF3C7]/40 border-[#FDE68A] text-[#07243B]"
                    : "bg-white border-slate-200/80 text-[#07243B]"
                }`}
              >
                {domain.status === "ready" ? (
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                )}
                <span className="text-xs font-semibold">{domain.label}</span>
              </div>
            ))}
          </div>

          {/* Box Footer: Blocker Note & CTA Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <span className="text-xs text-slate-400 font-medium">
              Blocked domain: Funding/Payment Approval outstanding.
            </span>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1A83C8] to-[#093C73] text-white font-semibold text-xs shadow-sm hover:bg-[#0A4770] transition-colors cursor-pointer">
              Resolve blocker
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
