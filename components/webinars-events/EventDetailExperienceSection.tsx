"use client";

import React from "react";

interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

const agendaItems: AgendaItem[] = [
  {
    time: "15:00",
    title: "Welcome & platform overview",
    description: "Introduction and session goals.",
  },
  {
    time: "15:10",
    title: "Live product walkthrough",
    description: "Core payroll workflows in practice.",
  },
  {
    time: "15:35",
    title: "Live Q&A",
    description: "Open floor for questions.",
  },
  {
    time: "15:55",
    title: "Wrap-up & next steps",
    description: "Resources and follow-up.",
  },
];

const targetAudience = [
  "Payroll administrators",
  "Finance and approvers",
  "Implementation leads",
];

const learningOutcomes = [
  "Understand the full payroll cycle",
  "Identify readiness gaps early",
];

const eventTags = [
  "Captions confirmed",
  "Registration required",
  "No capacity limit disclosed",
];

export default function EventDetailExperienceSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              EVENT DETAIL EXPERIENCE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Everything you need to decide, in one place
          </h2>
        </div>

        {/* 2-Column Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Agenda Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6 flex flex-col justify-between">
            <h3 className="text-sm font-bold text-[#07243B]">Agenda</h3>

            <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-between">
              {agendaItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 first:pt-0 last:pb-0 flex gap-4 sm:gap-6 items-start"
                >
                  <span className="text-xs font-bold text-[#3D9BD6] shrink-0 w-12 pt-0.5">
                    {item.time}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#07243B]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audience & Outcomes Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-8 flex flex-col justify-between">
            {/* Who Should Attend Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#07243B]">
                Who should attend
              </h3>
              <div className="divide-y divide-slate-100">
                {targetAudience.map((audience, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <p className="text-xs sm:text-sm font-semibold text-[#07243B]">
                      {audience}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-[#07243B]">
                Learning outcomes
              </h3>
              <div className="divide-y divide-slate-100">
                {learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <p className="text-xs sm:text-sm font-semibold text-[#07243B]">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tags & Note */}
        <div className="space-y-3 pt-2 text-center">
          {/* Tags Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {eventTags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-white border border-slate-200 text-[#07243B] text-xs font-semibold px-4 py-2 rounded-full shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer Subtext */}
          <p className="text-[11px] text-slate-400 font-medium">
            Privacy notice, related resources and authority handoffs are shown
            on the full event page.
          </p>
        </div>
      </div>
    </section>
  );
}
