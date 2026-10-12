"use client";

import React from "react";

export default function ResilienceControlsSection() {
  const controls = [
    {
      title: "Resilient service design",
      description: "Reduced single points of failure across critical paths.",
    },
    {
      title: "Data protection & restore",
      description: "Governed backup, retention and restore procedures.",
    },
    {
      title: "Controlled change",
      description: "Reviewed, approved change into production systems.",
    },
    {
      title: "Monitoring & response",
      description: "Detection and response to service-affecting conditions.",
    },
    {
      title: "Recovery orchestration",
      description: "Controlled, ordered restoration across dependencies.",
    },
    {
      title: "Reconciliation",
      description: "Integrity verification before normal processing resumes.",
    },
  ] as const;

  const flowSteps = [
    { label: "Restore", active: false },
    { label: "Verify integrity", active: false },
    { label: "Reconcile", active: false },
    { label: "Ready for processing", active: true },
  ] as const;

  return (
    <div className="flex items-center bg-[#F9FAFB] justify-center py-12 md:py-20 text-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col items-center px-4">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#0A78C3]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0A78C3] uppercase">
            RESILIENCE, BACKUP &amp; RESTORATION ASSURANCE
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0B192C] text-center tracking-tight mb-3">
          Public-safe controls, connected to a validation flow
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#64748B] text-center max-w-xl leading-relaxed mb-10">
          Evidence-led, without exposing topology, credentials, runbooks or
          failover thresholds.
        </p>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full mb-10">
          {controls.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs flex flex-col justify-start"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Process Flow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {flowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold border transition-colors ${
                  step.active
                    ? "border-[#0A78C3] bg-white text-[#0A78C3] shadow-xs"
                    : "border-[#E2E8F0] bg-white text-[#1E293B]"
                }`}
              >
                {step.label}
              </div>
              {idx < flowSteps.length - 1 && (
                <span className="text-[#94A3B8] text-sm">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Alert Banner */}
        <div className="w-full bg-[#E7EDFD] border-l-4 border-l-[#0A78C3] rounded-[6px] p-4 sm:p-5">
          <p className="text-xs sm:text-[15px] text-[#334155] leading-relaxed">
            Backup frequency is not RPO. Backup retention is not statutory
            record retention. Infrastructure restore is not proof that payroll
            is ready.
          </p>
        </div>
      </div>
    </div>
  );
}
