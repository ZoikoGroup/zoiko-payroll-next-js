"use client";

import React from "react";

// Role cards grid data matching the layout
const ROLE_CARDS = [
  {
    title: "Global Payroll Governance",
    description:
      "Portfolio oversight, templates, policy, permitted coordination.",
  },
  {
    title: "Regional Lead",
    description: "Named regional/entity scopes, readiness, escalation.",
  },
  {
    title: "Entity Payroll Owner",
    description:
      "Local configuration review, cycle ownership, permitted decisions.",
  },
  {
    title: "Shared-Services Operator",
    description: "Scoped operational preparation, data quality, task routing.",
  },
  {
    title: "Approver",
    description: "Human approval for assigned entity/group/action scopes.",
  },
  {
    title: "Finance / Controller",
    description: "Financial review and reconciliation context.",
  },
  {
    title: "Security / Privacy",
    description: "Access, data handling, export and residency controls.",
  },
  {
    title: "Auditor",
    description: "Read/export of permitted evidence and history.",
  },
];

export default function RolesDelegationSection() {
  return (
    <section className="w-full bg-[#f4f8fb] py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>ROLES, AUTHORIZED TEAMS &amp; DELEGATION</span>
          </div>

          <h2 className="text-3xl md:text-[32px] font-bold text-[#0A1928] leading-tight">
            Relationship and access are never the same thing
          </h2>

          <p className="text-sm sm:text-base max-w-3xl text-[#5C6E7E]">
            A parent, regional or shared-services relationship never grants
            access by itself. Delegation is explicit, scoped and time-bound
            &mdash; expired delegation is denied.
          </p>
        </div>

        {/* Feature Grid: Image with Overlay Badge + Authority Rule Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image with Floating Scope Badge */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#E1E8ED] shadow-sm h-72 sm:h-80 w-full group">
            <img
              src="/images/multi-entity-payroll/lead.png"
              alt="Two professionals collaborating over laptop and documents"
              className="w-full h-full object-cover"
            />

            {/* Dark Floating Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#082F49BF] text-white rounded-2xl p-4 backdrop-blur-md border border-white/10 space-y-1">
              <h4 className="text-sm font-bold text-white">
                Regional Lead &mdash; EU
              </h4>
              <p className="text-xs text-white/70">
                Scoped to DE, FR, NL entities &middot; Delegation expires Sep 1,
                2026
              </p>
            </div>
          </div>

          {/* Right Column: Authority Rule Details */}
          <div className="lg:col-span-6 space-y-3 lg:pl-4">
            <h3 className="text-2xl font-bold text-[#0A1928]">
              Authority rule
            </h3>
            <p className="text-sm text-[#5C6E7E] leading-relaxed">
              Every sensitive action evaluates principal identity, role grant,
              entity scope, payroll-group/object scope, action, lifecycle state,
              approval policy and time bounds &mdash; corporate title is never
              sufficient by itself.
            </p>
          </div>
        </div>

        {/* 8 Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {ROLE_CARDS.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E1E8ED] rounded-2xl p-5 shadow-xs space-y-2 flex flex-col justify-start"
            >
              <h4 className="text-sm font-bold text-[#0A1928]">{role.title}</h4>
              <p className="text-xs text-[#5C6E7E] leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
