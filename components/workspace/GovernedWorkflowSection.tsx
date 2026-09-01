"use client";

import React from "react";

interface RoleCard {
  id: string;
  title: string;
  description: string;
}

const roleCards: RoleCard[] = [
  {
    id: "payroll-ops",
    title: "Payroll Operations",
    description:
      "Prepare runs, resolve exceptions, review calculations, manage adjustments and coordinate close.",
  },
  {
    id: "finance-approvers",
    title: "Finance & Approvers",
    description:
      "Review payroll cost, material variances, approval packages, funding readiness and final authorization.",
  },
  {
    id: "hr-employee-data",
    title: "HR & Employee Data",
    description:
      "Maintain authorized worker and compensation inputs while preserving ownership and data lineage.",
  },
  {
    id: "audit-read-only",
    title: "Audit / Read-only",
    description:
      "Review evidence, actions, changes, reports, approvals and closed-period records without write access.",
  },
];

export default function GovernedWorkflowSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid: Image + Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Team Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/images/workspace/9.png"
                alt="Diverse business team standing together with confidence in a modern office"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Header & Description */}
          <div className="lg:col-span-6 space-y-4">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="text-[#0A8FD0] font-bold">/</span>
              <span>GOVERNED WORKFLOW</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
              Keep the right work with the right people
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[18px] text-[#5B646B] leading-relaxed">
              Role-based access, approval routing, separation of duties and full
              action history keep payroll work moving without losing control.
              Roles below are illustrative examples, not hard-coded permissions.
            </p>
          </div>
        </div>

        {/* Bottom Row: 4 Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roleCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between space-y-3"
            >
              <h3 className="text-sm font-bold text-[#07243B]">{card.title}</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
