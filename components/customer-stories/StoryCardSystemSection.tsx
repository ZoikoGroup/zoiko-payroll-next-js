"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface StoryCardProps {
  organization: string;
  scope: string;
  statusBadge: {
    label: string;
    style: string;
  };
  tags: string[];
  contentBlock: React.ReactNode;
}

const storyCards: StoryCardProps[] = [
  {
    organization: "Example Organization",
    scope: "Multi-entity · EU & UK",
    statusBadge: {
      label: "Named",
      style: "bg-[#E3F0E7] text-[#20502F]",
    },
    tags: ["Multi-entity", "Implementation"],
    contentBlock: (
      <div className="bg-[#E9F0F8] rounded-2xl p-5 space-y-1">
        <span className="block text-sm font-extrabold text-[#07243B]">
          Illustrative metric
        </span>
        <span className="block text-xs font-medium text-slate-400">
          Shown only with full methodology
        </span>
      </div>
    ),
  },
  {
    organization: "Approved anonymized customer",
    scope: "Global payroll · Manufacturing",
    statusBadge: {
      label: "Anonymized",
      style: "bg-[#E2EDF8] text-[#2B5A84]",
    },
    tags: ["Global payroll", "Reporting"],
    contentBlock: (
      <div className="border-l-2 border-[#3D9BD6] pl-3 py-1 my-auto">
        <blockquote className="text-xs italic font-medium text-slate-600 leading-relaxed">
          &ldquo;Illustrative quote fragment — exact approved wording
          only.&rdquo;
        </blockquote>
      </div>
    ),
  },
  {
    organization: "Example Organization B",
    scope: "Single jurisdiction",
    statusBadge: {
      label: "Review due",
      style: "bg-[#F1EAD8] text-[#6B5A20]",
    },
    tags: ["Payroll operations"],
    contentBlock: (
      <div className="bg-[#E9F0F8] rounded-2xl p-5 space-y-1">
        <span className="block text-sm font-extrabold text-[#07243B]">
          Metric under review
        </span>
        <span className="block text-xs font-medium text-slate-400">
          Temporarily not displayed
        </span>
      </div>
    ),
  },
];

export default function StoryCardSystemSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-[#07243B]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3 text-center mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1 h-3.5 bg-[#3D9BD6] inline-block rounded-xs" />
            <span className="text-xs font-bold tracking-wider text-[#3D9BD6] uppercase">
              STORY CARD SYSTEM
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07243B] tracking-tight">
            Comparability first — never a decorative logo wall
          </h2>
        </div>

        {/* 3-Column Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between space-y-6"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-[#07243B]">
                      {card.organization}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {card.scope}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full shrink-0 ${card.statusBadge.style}`}
                  >
                    {card.statusBadge.label}
                  </span>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-[#EEF3F9] text-[#2B5A84] text-[11px] font-bold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Content Block (Metric / Quote) */}
              <div className="flex-1 flex flex-col justify-center my-2">
                {card.contentBlock}
              </div>

              {/* Card Footer Link */}
              <div className="pt-2 border-t border-slate-100/80">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3D9BD6] hover:text-[#0C4773] transition-colors"
                >
                  <span>Read customer story</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
