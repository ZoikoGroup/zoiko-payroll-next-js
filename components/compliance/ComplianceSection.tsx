"use client";

import React from "react";

export default function ComplianceSection() {
  return (
    <div className="w-full bg-white text-[#07243B] py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Top Split: Text & Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
                <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                  /
                </span>
                COMPLIANCE & ASSURANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#07243B] tracking-tight leading-tight">
              Evidence-backed assurance <br className="hidden sm:inline" />
              <span className="text-[#8592A0] font-bold">—</span> never a badge
              without current scope
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Explore audits, certifications, attestations and framework
              mappings with their exact scope, validity and access state{" "}
              <span className="text-[#8592A0]">—</span> not broad compliance
              promises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-3 bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] hover:bg-[#154f78] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer">
                Find a Solution
              </button>
              <button className="px-6 py-3 bg-white hover:bg-slate-50 text-[#07243B] border border-slate-200 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer">
                Request audit reports
              </button>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-3 rounded-3xl">
              <img
                src="/images/compliance/hero.png"
                alt="Compliance review dashboard meeting"
                className="w-full h-auto rounded-2xl object-cover aspect-[16/11]"
              />
            </div>
          </div>
        </div>

        {/* 3 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: SOC 2 Type II */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                  SOC 2 Type II
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200/60">
                  Current
                </span>
              </div>
              <p className="text-xs text-[#8592A0] font-medium pb-2 border-b border-slate-100">
                Report / examination <span className="text-slate-300">—</span>{" "}
                not a certification
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[#8592A0] font-medium">Scope</span>
                <span className="font-bold text-[#07243B]">
                  Payroll Workspace
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[#8592A0] font-medium">Period</span>
                <span className="font-bold text-[#07243B]">12 months</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8592A0] font-medium">Access</span>
                <span className="font-bold text-[#07243B]">Controlled</span>
              </div>
            </div>
          </div>

          {/* Card 2: ISO 27001 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                  ISO 27001
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200/60">
                  Current
                </span>
              </div>
              <p className="text-xs text-[#8592A0] font-medium pb-2 border-b border-slate-100">
                Certification
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[#8592A0] font-medium">Scope</span>
                <span className="font-bold text-[#07243B]">Core platform</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[#8592A0] font-medium">Valid until</span>
                <span className="font-bold text-[#07243B]">
                  Per certificate
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8592A0] font-medium">Access</span>
                <span className="font-bold text-[#07243B]">Public summary</span>
              </div>
            </div>
          </div>

          {/* Card 3: SOC 1 Type II */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-[#07243B]">
                  SOC 1 Type II
                </h3>
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold border border-sky-200/60">
                  Bridge
                </span>
              </div>
              <p className="text-xs text-[#8592A0] font-medium pb-2 border-b border-slate-100">
                Financial-control report
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[#8592A0] font-medium">Scope</span>
                <span className="font-bold text-[#07243B]">
                  Payroll processing
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[#8592A0] font-medium">Period</span>
                <span className="font-bold text-[#07243B]">
                  Bridge letter active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8592A0] font-medium">Access</span>
                <span className="font-bold text-[#07243B]">Controlled</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metadata Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8592A0]">
              Evidence Basis
            </span>
            <p className="text-xs font-extrabold text-[#07243B]">
              Independent, where verified
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8592A0]">
              Claims
            </span>
            <p className="text-xs font-extrabold text-[#07243B]">
              Scope-specific only
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8592A0]">
              Validity
            </span>
            <p className="text-xs font-extrabold text-[#07243B]">
              Current, dated
            </p>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8592A0]">
              Access
            </span>
            <p className="text-xs font-extrabold text-[#07243B]">
              Controlled where required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
