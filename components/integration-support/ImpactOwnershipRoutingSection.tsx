"use client";

import React, { useState } from "react";

const teamTags = [
  "Integration Support",
  "API Engineering",
  "Webhook Engineering",
  "HRIS/HCM",
  "Finance",
  "Time",
  "Payment Operations",
  "Identity",
  "Payroll Support",
  "Security",
];

interface RoutingDetails {
  primaryOwner: string;
  collaboratingDomain: string;
  impact: string;
  nextAction: string;
}

const routingResult: RoutingDetails = {
  primaryOwner: "Finance Integration Team",
  collaboratingDomain: "Payment Operations / Treasury",
  impact: "Payroll-cycle risk, 4 records",
  nextAction:
    "Owner reviewing mapping — you'll hear back within the next update cycle",
};

export default function ImpactOwnershipRoutingSection() {
  const [selectedTag, setSelectedTag] = useState<string>("Integration Support");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
            <span className="text-[#0A8FD0] font-bold">/</span>
            <span>IMPACT + OWNERSHIP / ROUTING</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[#07243B] leading-tight">
            Impact is captured — never an invented SLA.
          </h2>

          {/* Subtitle / Policy Note */}
          <p className="text-xs sm:text-sm text-slate-400">
            Formal severity labels only apply when an approved Support Policy
            defines them.
          </p>
        </div>

        {/* Team/Domain Tags Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {teamTags.map((tag) => {
            const isSelected = tag === selectedTag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-[#07243B] border border-slate-300 shadow-2xs font-semibold"
                    : "bg-slate-50 border border-slate-200/80 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Card and Image Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Dark Card: Routing Result (6 cols) */}
          <div className="lg:col-span-6 bg-[#06283D] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                ROUTING RESULT
              </div>

              <div className="space-y-4 text-xs sm:text-sm divide-y divide-slate-700/60">
                <div className="pt-2 flex items-start justify-between gap-4">
                  <span className="text-slate-400 font-normal shrink-0">
                    Primary owner
                  </span>
                  <span className="font-bold text-white text-right">
                    {routingResult.primaryOwner}
                  </span>
                </div>

                <div className="pt-4 flex items-start justify-between gap-4">
                  <span className="text-slate-400 font-normal shrink-0">
                    Collaborating domain
                  </span>
                  <span className="font-bold text-white text-right">
                    {routingResult.collaboratingDomain}
                  </span>
                </div>

                <div className="pt-4 flex items-start justify-between gap-4">
                  <span className="text-slate-400 font-normal shrink-0">
                    Impact
                  </span>
                  <span className="font-bold text-white text-right">
                    {routingResult.impact}
                  </span>
                </div>

                <div className="pt-4 flex items-start justify-between gap-4">
                  <span className="text-slate-400 font-normal shrink-0">
                    Next action
                  </span>
                  <span className="font-bold text-white text-right leading-relaxed max-w-xs">
                    {routingResult.nextAction}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container with Overlay Badges (6 cols) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[280px]">
            <img
              src="/images/footer-integrations/46.png"
              alt="Support team working around table"
              className="w-full h-full object-cover"
            />

            {/* Top-Left Overlay Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#07243B] shadow-xs">
                Owner assigned
              </span>
            </div>

            {/* Bottom-Right Overlay Badge */}
            <div className="absolute bottom-4 right-4">
              <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#07243B] shadow-xs">
                One case, no bouncing
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Explanatory Note */}
        <p className="text-xs text-slate-400 pt-1">
          You keep one case even if the internal owner changes — no ticket
          bouncing.
        </p>
      </div>
    </section>
  );
}
