"use client";

import React from "react";
import { CheckCircle2, CreditCard, Lock, Users } from "lucide-react";

interface PlanFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: PlanFeature[] = [
  {
    icon: CheckCircle2,
    title: "Payroll calculations",
    description:
      "Gross-to-net capability for your activated jurisdiction scope.",
  },
  {
    icon: CreditCard,
    title: "Approvals & close",
    description: "Core authorization workflow with immutable close history.",
  },
  {
    icon: Lock,
    title: "Security foundation",
    description:
      "Authentication, MFA, encryption, role controls and logging as baseline.",
  },
  {
    icon: Users,
    title: "Employee records",
    description: "Authorized access to payslips and payroll history.",
  },
];

export default function EveryPaidPlanIncludesSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block with Right-aligned Subtext */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                THE FLOOR, NOT THE UPSELL
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
              What every paid plan includes.
            </h2>
          </div>

          {/* Right Subtext */}
          <p className="text-xs text-slate-400 font-medium pb-1 max-w-xs md:text-right">
            Statutory accuracy, security and audit history are never premium
            upgrades.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/70 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-[#2A87C8]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#07243B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
