"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

interface StatusBanner {
  type: "warning" | "neutral" | "info";
  message: React.ReactNode;
  actionText: string;
  actionStyle: string;
  hasIcon?: boolean;
}

const banners: StatusBanner[] = [
  {
    type: "warning",
    message: (
      <span>
        This session has been rescheduled. Check the updated date and time
        below.
      </span>
    ),
    actionText: "Review update",
    actionStyle:
      "bg-white text-[#07243B] border border-slate-200 hover:bg-slate-50",
    hasIcon: true,
  },
  {
    type: "neutral",
    message: (
      <span>
        This session is completed. Replay availability:{" "}
        <strong className="font-bold text-[#07243B]">Pending approval.</strong>
      </span>
    ),
    actionText: "Explore alternatives",
    actionStyle:
      "bg-white text-[#07243B] border border-slate-200 hover:bg-slate-50",
  },
  {
    type: "info",
    message: (
      <span>
        Registration is full. Join the waitlist to be notified if space opens.
      </span>
    ),
    actionText: "Join waitlist",
    actionStyle:
      "bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] text-white hover:opacity-95",
  },
];

export default function RecoveryAndReplaySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              RECOVERY & REPLAY
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Completed never automatically means a replay exists
          </h2>
        </div>

        {/* Status Banners List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Warning Banner */}
          <div className="bg-[#F5EBD0]/60 border border-[#EADBB8] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#07243B] font-medium">
              <AlertTriangle className="w-4 h-4 text-[#07243B] shrink-0 stroke-[2.5]" />
              <span>{banners[0].message}</span>
            </div>
            <button
              type="button"
              className="w-full sm:w-auto text-xs font-bold px-5 py-2.5 rounded-xl bg-white text-[#07243B] border border-slate-200/80 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
            >
              {banners[0].actionText}
            </button>
          </div>

          {/* Neutral Pending Banner */}
          <div className="bg-[#EBF3FB]/60 border border-[#D5E4F5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#07243B] font-medium">
              {banners[1].message}
            </p>
            <button
              type="button"
              className="w-full sm:w-auto text-xs font-bold px-5 py-2.5 rounded-xl bg-white text-[#07243B] border border-slate-200/80 shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
            >
              {banners[1].actionText}
            </button>
          </div>

          {/* Waitlist Banner */}
          <div className="bg-[#EBF3FB]/60 border border-[#D5E4F5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#07243B] font-medium">
              {banners[2].message}
            </p>
            <button
              type="button"
              className="w-full sm:w-auto text-xs font-bold px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] text-white hover:opacity-95 shadow-2xs transition-opacity cursor-pointer shrink-0"
            >
              {banners[2].actionText}
            </button>
          </div>
        </div>

        {/* Footer Subtext */}
        <p className="text-[11px] text-slate-400 font-medium text-center max-w-xl mx-auto pt-2">
          Approved recordings, captions, transcripts and slides are shown only
          once confirmed available — never assumed from a completed session.
        </p>
      </div>
    </section>
  );
}
