"use client";

import React, { useState } from "react";

interface TimelineEvent {
  time: string;
  title: string;
  subtitle: string;
  status: "blue" | "red";
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "14 Aug, 09:12",
    title: "Case created",
    subtitle: "Customer — Acme GmbH",
    status: "blue",
  },
  {
    time: "14 Aug, 09:40",
    title: "Triaged — Finance/ERP",
    subtitle: "Integration Support",
    status: "blue",
  },
  {
    time: "14 Aug, 11:15",
    title: "Linked to known incident INC-0231",
    subtitle: "Finance Integration Team",
    status: "blue",
  },
  {
    time: "14 Aug, 15:02",
    title: "Escalated — payroll deadline approaching",
    subtitle: "Auto-triggered, reviewed by owner",
    status: "red",
  },
  {
    time: "15 Aug, 08:30",
    title: "Mitigation available — manual reconciliation",
    subtitle: "Finance Integration Team",
    status: "blue",
  },
];

const escalationTags = [
  "Increased impact",
  "Approaching payroll deadline",
  "No safe workaround",
  "Payment/financial risk",
  "Emerging security concern",
  "Known incident",
  "Customer escalation request",
];

export default function CaseTimelineSection() {
  const [selectedTag, setSelectedTag] = useState<string>("Increased impact");

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Timeline (5 cols) */}
        <div className="lg:col-span-5 relative pl-6 space-y-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-200" />

          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative flex items-start gap-4 group">
              {/* Status Indicator Dot */}
              <div
                className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-white shadow-xs z-10 ${
                  event.status === "red" ? "bg-red-500" : "bg-[#0A8FD0]"
                }`}
              />

              {/* Text Block */}
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-slate-400 block">
                  {event.time}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#07243B] leading-tight">
                  {event.title}
                </h4>
                <p className="text-xs text-slate-400 font-normal">
                  {event.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Heading & Escalation Tags (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Block */}
          <div className="space-y-3">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase">
              <span className="text-[#0A8FD0] font-bold">/</span>
              <span>CASE TIMELINE + INCIDENT + ESCALATION</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-[26px] font-bold tracking-tight text-[#07243B] leading-tight">
              An incident and your case stay distinct.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              Resolving an incident does not automatically close every linked
              customer case.
            </p>
          </div>

          {/* Escalation Category Pills Grid */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {escalationTags.map((tag) => {
              const isSelected = tag === selectedTag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-[#FDF1D6] text-[#9A6B00] border border-[#F3D99A] cursor-pointer`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
