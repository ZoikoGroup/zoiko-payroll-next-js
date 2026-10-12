"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface NavigatorItem {
  title: string;
  category: string;
}

const navigatorItems: NavigatorItem[] = [
  {
    title: "Certifications & audit reports",
    category: "Assurance Library",
  },
  {
    title: "Security architecture",
    category: "Control domains summary",
  },
  {
    title: "Data protection & encryption",
    category: "Data Security",
  },
  {
    title: "Access controls & SSO",
    category: "Identity & Access",
  },
  {
    title: "Penetration testing",
    category: "Vulnerability Management",
  },
  {
    title: "Incident response",
    category: "Incident Management",
  },
  {
    title: "Business continuity / DR",
    category: "Resilience",
  },
  {
    title: "Subprocessors / third parties",
    category: "Third-Party Security",
  },
  {
    title: "SIG / CAIQ / custom questionnaire",
    category: "Questionnaire Workflow",
  },
];

export default function SecurityReviewNavigatorSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#EFF4F7] text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="space-y-3">
          {/* Eyebrow Label with slanted dark slash and #0A78C3 text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold tracking-wider text-[#0A78C3] uppercase flex items-center">
              <span className="text-sm font-bold mr-1.5 -skew-x-12 inline-block text-[#0A78C3]">
                /
              </span>
              SECURITY REVIEW NAVIGATOR
            </span>
          </div>

          {/* Title (31px) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[31px] font-extrabold text-[#07243B] tracking-tight leading-tight max-w-xl">
            Find your evidence by review need, not our org chart.
          </h2>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {navigatorItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex items-center justify-between gap-4 hover:border-slate-300 transition-colors cursor-pointer group"
            >
              {/* Content Container */}
              <div className="space-y-1">
                <h3 className="text-[13px] font-bold text-[#07243B] group-hover:text-[#0A78C3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {item.category}
                </p>
              </div>

              {/* Chevron Icon */}
              <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#E6F3FC] group-hover:text-[#0A78C3] shrink-0 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
