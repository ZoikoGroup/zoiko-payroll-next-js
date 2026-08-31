"use client";

import React from "react";
import Image from "next/image";

interface StatusCardProps {
  title: string;
  subtitle: string;
  statusLabel: string;
  statusVariant: "ready" | "review" | "validation";
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  subtitle,
  statusLabel,
  statusVariant,
}) => {
  const badgeStyles = {
    ready: "bg-[#70C9962E] text-[#8FE0AC]",
    review: "bg-[#E6B4642E] text-[#F0CF94]",
    validation: "bg-[#E6786E2E] text-[#F0A49D]",
  };

  return (
    <div className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3.5 flex items-center justify-between gap-3">
      <div className="space-y-0.5 min-w-0">
        <h4 className="text-xs font-semibold text-white truncate">{title}</h4>
        <p className="text-[11px] text-slate-400 truncate">{subtitle}</p>
      </div>
      <span
        className={`px-2.5 py-1 rounded-full text-[10px] font-medium shrink-0 ${badgeStyles[statusVariant]}`}
      >
        {statusLabel}
      </span>
    </div>
  );
};

export default function TimeAttendanceIntegrationsHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 px-4 sm:px-6 lg:px-8 text-white min-h-[560px] flex items-center">
      {/* Background Image Layer with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-integrations/bg2.jpg"
          alt="Team collaborating background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Semi-transparent dark blue gradient overlay to match reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071C2EE0] via-[#0A3254BF] to-[#0A8FD066]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8FD0F2] uppercase">
              <span className="text-base leading-none">/</span>
              <span>TIME & ATTENDANCE INTEGRATIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-[36px] font-bold text-white tracking-tight leading-tight">
              Bring approved time into <br /> payroll with the right controls
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-125">
              Connect approved time and attendance sources while preserving
              employee matching, pay-period alignment, source approval state,
              time-zone context, exceptions and correction history.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#2C8FD1] to-[#0B4C78] hover:bg-[#087ab3] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Contact Now
              </button>
            </div>
          </div>

          {/* Right Column: Floating Panel Overlay */}
          <div className="lg:col-span-6">
            <div className="bg-[#0A2E4B] border border-slate-700/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-5">
              {/* Panel Header */}
              <div className="flex items-center justify-between text-xs border-b border-slate-700/50 pb-4">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <span className="w-2 h-2 rounded-sm bg-[#0A8FD0]" />
                  <span>Payroll Readiness Panel</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FFFFFF1A] text-[#BFE0F5] text-[11px] border border-slate-700/50">
                  Last verified Aug 22, 2026
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3 space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white truncate">
                    Validated
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider">
                    SOURCE STATE
                  </div>
                </div>

                <div className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3 space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white truncate">
                    Matched
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider">
                    PERIOD MAPPING
                  </div>
                </div>

                <div className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3 space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white truncate">
                    98%
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider">
                    WORKER MATCHING
                  </div>
                </div>

                <div className="bg-[#FFFFFF0F]/80 border border-slate-700/40 rounded-xl p-3 space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white truncate">
                    3
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-wider">
                    OPEN EXCEPTIONS
                  </div>
                </div>
              </div>

              {/* Status Cards List */}
              <div className="space-y-2.5 pt-1">
                <StatusCard
                  title="UKG — Timecards, Aug 11–24 period"
                  subtitle="Source state: Approved · Worker matching complete"
                  statusLabel="Payroll ready"
                  statusVariant="ready"
                />

                <StatusCard
                  title="Kronos — Timecards, Aug 11–24 period"
                  subtitle="2 workers unmatched · assignment mismatch"
                  statusLabel="Review required"
                  statusVariant="review"
                />

                <StatusCard
                  title="ADP Time — Punches, Aug 25–Sep 7 period"
                  subtitle="Cross-period allocation pending"
                  statusLabel="Validation required"
                  statusVariant="validation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
