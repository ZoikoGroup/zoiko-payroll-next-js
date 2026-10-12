"use client";

import React from "react";
import Image from "next/image";

export default function ReopenGovernanceSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Image Card with Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
              <Image
                src="/images/payroll-operation/24.png"
                alt="Approvers recorded interface on laptop screen"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badge Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#07243B] text-xs font-semibold shadow-2xs backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Approvers recorded</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Request Details Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
                <span>—</span>
                <span>CLOSE, LOCK, REOPEN & POST-CLOSE CORRECTIONS</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#07243B] leading-tight">
                Read-only by default. Reopened only with authorization
              </h2>

              {/* Subtitle / Description */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                Closed results and close evidence become read-only to ordinary
                users. Material changes route through correction and reopen
                governance — never a silent edit.
              </p>
            </div>

            {/* Reopen Request Window Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#F5F8FA] px-6 py-3.5 border-b border-[#E4E9EF] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="ml-2 text-xs font-bold text-slate-600">
                  Reopen request
                </span>
              </div>

              {/* Row Items */}
              <div className="p-6 divide-y divide-slate-100 text-xs sm:text-sm">
                {/* Reason */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 first:pt-0">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                    REASON
                  </span>
                  <span className="font-bold text-[#07243B]">
                    Statutory rate correction
                  </span>
                </div>

                {/* Scope Impact */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                    SCOPE IMPACT
                  </span>
                  <span className="font-bold text-[#07243B]">
                    4 workers · 1 legal entity
                  </span>
                </div>

                {/* Authorization */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 last:pb-0">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
                    AUTHORIZATION
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold text-xs border border-[#FDE68A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                    <span>Privileged approval required</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Callout Container (Square corners, left border accent) */}
            <div className="bg-[#E9F0F8] border-l-4 border-l-[#0A8FD0] p-5 shadow-2xs rounded-none">
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                The prior close event, result manifest, approvers and evidence
                are always preserved — an earlier close is never mutated into
                &quot;never closed.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
