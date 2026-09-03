"use client";

import React, { useState } from "react";

type AccessState =
  | "too-early"
  | "access-open"
  | "live"
  | "access-problem"
  | "ended"
  | "platform-outage";

interface StateConfig {
  iconBg: string;
  title: string;
  subtitle: string;
  primaryActionLabel?: string;
  primaryActionStyle?: string;
  showSecondaryAction?: boolean;
}

const stateConfigs: Record<AccessState, StateConfig> = {
  "too-early": {
    iconBg: "bg-[#E3EFFC]",
    title: "Access opens 15 minutes before start",
    subtitle:
      "This session hasn't started yet — check back closer to the scheduled time.",
    showSecondaryAction: true,
  },
  "access-open": {
    iconBg: "bg-[#E3F0E7]",
    title: "Access is open",
    subtitle:
      "The session is starting shortly. You can now join the live stream.",
    primaryActionLabel: "Join session",
    primaryActionStyle:
      "bg-gradient-to-r from-[#3D9BD6] to-[#0C4773] text-white hover:opacity-95",
  },
  live: {
    iconBg: "bg-[#FCE3E3]",
    title: "Session is currently live",
    subtitle:
      "The presentation is in progress. Click below to enter immediately.",
    primaryActionLabel: "Join live stream",
    primaryActionStyle: "bg-[#A82B2B] text-white hover:bg-[#8F2424]",
  },
  "access-problem": {
    iconBg: "bg-[#FEF6E1]",
    title: "Unable to verify access status",
    subtitle:
      "We're having trouble reaching the streaming server. Please refresh or try again in a moment.",
    primaryActionLabel: "Retry connection",
    primaryActionStyle: "bg-[#876517] text-white hover:bg-[#6F5212]",
  },
  ended: {
    iconBg: "bg-slate-100",
    title: "This live session has ended",
    subtitle:
      "Thank you for attending. A recorded replay will be made available shortly.",
    showSecondaryAction: false,
  },
  "platform-outage": {
    iconBg: "bg-[#FCE3E3]",
    title: "Service temporarily unavailable",
    subtitle:
      "The event platform is currently undergoing maintenance. Please check back soon.",
  },
};

const stateTabs: { key: AccessState; label: string }[] = [
  { key: "too-early", label: "Too early" },
  { key: "access-open", label: "Access open" },
  { key: "live", label: "Live" },
  { key: "access-problem", label: "Access problem" },
  { key: "ended", label: "Ended" },
  { key: "platform-outage", label: "Platform outage" },
];

export default function LiveEventAccessSection() {
  const [currentState, setCurrentState] = useState<AccessState>("too-early");

  const activeConfig = stateConfigs[currentState];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-6xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              LIVE EVENT ACCESS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            The Join button only appears when access is genuinely open
          </h2>
        </div>

        {/* Dynamic Display Area */}
        <div className="flex flex-col items-center justify-center text-center space-y-5 py-8 min-h-[220px]">
          {/* Status Circle Accent */}
          <div
            className={`w-14 h-14 rounded-full ${activeConfig.iconBg} transition-colors duration-300 flex items-center justify-center`}
          />

          {/* Status Title & Message */}
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-base sm:text-lg font-bold text-[#07243B]">
              {activeConfig.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              {activeConfig.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {activeConfig.primaryActionLabel && (
              <button
                type="button"
                className={`text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer ${activeConfig.primaryActionStyle}`}
              >
                {activeConfig.primaryActionLabel}
              </button>
            )}

            {activeConfig.showSecondaryAction && (
              <button
                type="button"
                className="text-xs sm:text-sm font-bold text-[#07243B] hover:text-[#3D9BD6] transition-colors cursor-pointer"
              >
                Add to calendar
              </button>
            )}
          </div>
        </div>

        {/* State Toggle Selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 border-t border-slate-100 pt-8">
          {stateTabs.map((tab) => {
            const isActive = currentState === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setCurrentState(tab.key)}
                className={`text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#07243B] font-bold"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
