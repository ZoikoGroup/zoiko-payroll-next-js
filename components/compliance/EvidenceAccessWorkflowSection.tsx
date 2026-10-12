"use client";

import React, { useState } from "react";

export default function EvidenceAccessWorkflowSection() {
  const [activePill, setActivePill] = useState(1);

  const pills = [
    { label: "Public", bg: "bg-[#E3EFE6]", text: "text-[#3F6B54]" },
    { label: "Verified prospect", bg: "bg-[#E1EEF9]", text: "text-[#155A8A]" },
    { label: "Customer", bg: "bg-[#E3EFE6]", text: "text-[#3F6B54]" },
    { label: "NDA restricted", bg: "bg-[#F3E9CC]", text: "text-[#8C6D2F]" },
    { label: "Access pending", bg: "bg-[#F3E9CC]", text: "text-[#8C6D2F]" },
    { label: "Granted", bg: "bg-[#E3EFE6]", text: "text-[#3F6B54]" },
    { label: "Revoked", bg: "bg-[#E9F0F8]", text: "text-[#8592A0]" },
    {
      label: "Evidence superseded",
      bg: "bg-[#E9F0F8]",
      text: "text-[#8592A0]",
    },
  ];

  const formCards = [
    {
      title: "Evidence selection",
      subtitle: "Required",
    },
    {
      title: "Product / region scope",
      subtitle: "Required",
    },
    {
      title: "Company",
      subtitle: "Required",
    },
    {
      title: "Reviewer role",
      subtitle: "Required",
    },
    {
      title: "Customer / prospect status",
      subtitle: "Verified",
    },
    {
      title: "NDA",
      subtitle: "Where required",
    },
  ];

  return (
    <div className="w-full bg-[#F9FAFB] text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Top Split: Hero Image & Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Image */}
          <div className="lg:col-span-6">
            <div className="p-3 rounded-3xl">
              <img
                src="/images/compliance/5.png"
                alt="Evidence Access Workflow Collaboration"
                className="w-full h-auto rounded-2xl object-cover aspect-[16/11]"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                EVIDENCE ACCESS WORKFLOW
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              A procurement-grade request{" "}
              <span className="text-slate-400 font-bold">—</span> not a generic
              sales CTA
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Least-privilege access to current evidence only. Every request,
              grant, view and revocation is logged.
            </p>
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {pills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setActivePill(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${pill.bg} ${pill.text} ${
                activePill === idx
                  ? "scale-105"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Form Inputs Grid (3x2 or 2x3 layout depending on screen size) */}
        <div className="grid grid-cols-1 max-w-3xl mx-auto md:grid-cols-2 gap-6">
          {formCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <h3 className="text-sm font-extrabold text-[#07243B]">
                {card.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-medium text-center max-w-xl mx-auto leading-relaxed pt-2">
          No payroll data is ever collected through this form.
        </p>
      </section>
    </div>
  );
}
