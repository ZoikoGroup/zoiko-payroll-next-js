"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface SeverityFilter {
  id: string;
  label: string;
  bg: string;
  text: string;
  activeBorder: string;
}

interface BlockerItem {
  id: string;
  severity: "S1" | "S2" | "S3" | "S4";
  badgeBg: string;
  badgeText: string;
  borderLeftColor: string;
  title: string;
  workstream: string;
  entity: string;
  owner: string;
  age: string;
  linkText: string;
}

const filters: SeverityFilter[] = [
  {
    id: "S1",
    label: "S1 · Go-Live Critical",
    bg: "bg-[#FCE8E6]",
    text: "text-[#D93025]",
    activeBorder: "border-[#D93025]",
  },
  {
    id: "S2",
    label: "S2 · High",
    bg: "bg-[#FEF7E0]",
    text: "text-[#B06000]",
    activeBorder: "border-[#B06000]",
  },
  {
    id: "S3",
    label: "S3 · Standard",
    bg: "bg-[#E8F0FE]",
    text: "text-[#1A73E8]",
    activeBorder: "border-[#1A73E8]",
  },
  {
    id: "S4",
    label: "S4 · Guidance",
    bg: "bg-[#F1F3F4]",
    text: "text-[#5F6368]",
    activeBorder: "border-[#5F6368]",
  },
];

const blockers: BlockerItem[] = [
  {
    id: "1",
    severity: "S1",
    badgeBg: "bg-[#FCE8E6]",
    badgeText: "text-[#D93025]",
    borderLeftColor: "border-l-[#EA4335]",
    title: "Unreconciled opening balances — DE GmbH",
    workstream: "Data Migration",
    entity: "DE GmbH",
    owner: "C. Alvarez",
    age: "3 days",
    linkText: "Impacts Testing",
  },
  {
    id: "2",
    severity: "S2",
    badgeBg: "bg-[#FEF7E0]",
    badgeText: "text-[#B06000]",
    borderLeftColor: "border-l-[#FBBC04]",
    title: "Production integration test evidence pending",
    workstream: "Integrations",
    entity: "EU Holdings BV",
    owner: "R. Tanaka",
    age: "1 day",
    linkText: "Impacts Testing",
  },
  {
    id: "3",
    severity: "S3",
    badgeBg: "bg-[#E8F0FE]",
    badgeText: "text-[#1A73E8]",
    borderLeftColor: "border-l-[#4285F4]",
    title: "Payroll calculation variance under review",
    workstream: "Payroll",
    entity: "UK Ltd",
    owner: "Payroll Ops",
    age: "5 days",
    linkText: "Review",
  },
];

export default function BlockersAndSeveritySection() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredBlockers = selectedFilter
    ? blockers.filter((b) => b.severity === selectedFilter)
    : blockers;

  return (
    <section className="relative w-full bg-[#071927] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imp-sup/bg.png"
          alt="Blockers background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#071F33]/88 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-[#38BDF8] uppercase font-mono">
            <span>/</span>
            <span>BLOCKERS & SEVERITY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-white leading-tight">
            Severity reflects implementation impact — never seniority or urgency
          </h2>
        </div>

        {/* Severity Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(isSelected ? null : filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  filter.bg
                } ${filter.text} ${
                  isSelected
                    ? `${filter.activeBorder} ring-2 ring-white/40 scale-105`
                    : "border-transparent hover:opacity-90"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Blocker Cards Stack */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          {filteredBlockers.map((item) => (
            <div
              key={item.id}
              className={`bg-[#F4F6F8] rounded-xl p-4 sm:p-5 border-l-4 ${item.borderLeftColor} shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#0F172A] hover:bg-white transition-colors`}
            >
              {/* Left Info Area */}
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${item.badgeBg} ${item.badgeText}`}
                  >
                    {item.severity}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#07243B] truncate">
                    {item.title}
                  </h3>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Workstream: {item.workstream} · Entity: {item.entity}
                </div>
              </div>

              {/* Right Details & Action Link */}
              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium space-x-3">
                  <span>
                    Owner:{" "}
                    <strong className="text-slate-600">{item.owner}</strong>
                  </span>
                  <span>
                    Age: <strong className="text-slate-600">{item.age}</strong>
                  </span>
                </div>

                <button className="text-xs font-bold text-[#0A8FD0] hover:text-[#076BA0] inline-flex items-center gap-1 transition-colors group">
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Subtext */}
        <div className="text-center pt-2">
          <p className="text-[11px] sm:text-xs text-slate-300/80 font-medium leading-relaxed mx-auto">
            S1 examples: material calculation defect, unreconciled opening
            balances, production integration unavailable, payment authorization
            blocker.
          </p>
        </div>
      </div>
    </section>
  );
}
