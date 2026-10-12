"use client";

import React from "react";
import Image from "next/image";

interface RoleCard {
  title: string;
  description: string;
  badge: "Accountable" | "Responsible" | "Consulted";
}

const roleCards: RoleCard[] = [
  {
    title: "Central payroll",
    description: "Coordinates policy, cadence and group-level visibility.",
    badge: "Accountable",
  },
  {
    title: "Local payroll",
    description: "Owns jurisdiction-specific execution and statutory accuracy.",
    badge: "Responsible",
  },
  {
    title: "Finance",
    description: "Owns funding, cost allocation and accounting evidence.",
    badge: "Responsible",
  },
  {
    title: "HR",
    description: "Owns worker data accuracy and lifecycle changes.",
    badge: "Consulted",
  },
  {
    title: "Treasury",
    description: "Owns funding readiness and payment timing.",
    badge: "Consulted",
  },
  {
    title: "Security",
    description: "Owns access governance and control evidence.",
    badge: "Consulted",
  },
  {
    title: "Implementation",
    description: "Owns rollout readiness and go-live governance.",
    badge: "Responsible",
  },
  {
    title: "Approvers",
    description: "Owns segregation-of-duties sign-off before payment.",
    badge: "Accountable",
  },
];

export default function RolesGovernanceSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden">
            <Image
              src="/images/resources/9.png"
              alt="Diverse team analyzing payroll documents around a table"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Column: Title and Description */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
              <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
                ROLES, GOVERNANCE & DECISION RIGHTS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight leading-tight">
              Who owns each decision — and its evidence
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
              A RACI-style responsibility framing — describing how organizations
              typically structure global payroll governance, not a claim about
              Zoiko&apos;s internal roles.
            </p>
          </div>
        </div>

        {/* RACI Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roleCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-xs transition-shadow"
            >
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#07243B]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div>
                <span className="inline-block bg-[#E2EDF8] text-[#2B5A84] text-[11px] font-bold px-3 py-1 rounded-full">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400 font-medium">
          Specialist advisers (legal, tax, statutory) are consulted for
          high-risk decisions outside internal expertise.
        </p>
      </div>
    </section>
  );
}
