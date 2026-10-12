"use client";

import React from "react";

export default function IncidentCommunicationsSection() {
  const communicationRoutes = [
    {
      num: 1,
      title: "Current service health",
      description: "Live status for all services, updated continuously.",
    },
    {
      num: 2,
      title: "Active incident updates",
      description: "Real-time progress during a declared incident.",
    },
    {
      num: 3,
      title: "Account-specific impact",
      description: "Notices scoped to an affected customer or entity.",
    },
    {
      num: 4,
      title: "Continuity evidence requests",
      description: "Controlled route into procurement evidence.",
    },
    {
      num: 5,
      title: "Post-incident review",
      description: "Summary published after resolution and review.",
    },
  ] as const;

  const dependencies = [
    "Cloud / infrastructure",
    "Banks / payment rails",
    "Payroll / statutory partners",
    "Integrations / identity providers",
    "Communications / support providers",
  ] as const;

  return (
    <div className="bg-[#0A2F49] py-14 md:py-20 text-white flex justify-center items-center">
      <div className="max-w-6xl w-full px-4 flex flex-col items-center">
        {/* Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#8FD0F2]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#8FD0F2] uppercase">
            INCIDENT COMMUNICATIONS &amp; DEPENDENCY CONTINUITY
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white text-center tracking-tight mb-3">
          One source of truth for each communication need
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-[#B9CBDC] text-center max-w-xl leading-relaxed mb-12">
          System Status is the authoritative live source. Any embedded summary
          is source-driven, timestamped, and falls back to a neutral unavailable
          state — never a default &quot;all operational.&quot;
        </p>

        {/* Main Grid: Left Communication Routing + Right Dependency Continuity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full mb-12 items-start">
          {/* Left Column: Communication routing */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6">
              Communication routing
            </h3>
            <div className="divide-y divide-[#1E3A5F]/60">
              {communicationRoutes.map((route) => (
                <div
                  key={route.num}
                  className="py-4 first:pt-0 last:pb-0 flex items-start gap-4"
                >
                  <span className="w-6 h-6 rounded bg-[#E7EDFD] text-[#0A78C3] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {route.num}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {route.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                      {route.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dependency continuity */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6">
              Dependency continuity
            </h3>
            <div className="flex flex-col gap-3">
              {dependencies.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF0D] border border-[#1E3A5F] rounded-xl px-4 py-3 flex items-center justify-between"
                >
                  <span className="text-xs sm:text-[13px] text-slate-200 font-medium">
                    {item}
                  </span>
                  <span className="bg-[#FFFFFF1A] text-[#DCE8F5] text-[10px] font-medium px-2.5 py-1 rounded-md border border-[#244C73]">
                    Monitored
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Alert Banner */}
        <div className="w-full bg-[#FFFFFF14] border-l-4 border-l-[#8FD0F2] rounded-r-md p-4 sm:p-5">
          <p className="text-xs sm:text-[15px] text-[#DCE8F5] leading-relaxed">
            Zoiko recovery does not automatically guarantee external settlement,
            filing, provider availability, or third-party application recovery.
          </p>
        </div>
      </div>
    </div>
  );
}
