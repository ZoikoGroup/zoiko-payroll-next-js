"use client";

import React from "react";
import { CheckSquare, Briefcase, FileText } from "lucide-react";

interface BadgeRow {
  badge: React.ReactNode;
  description: string;
}

interface CoverageCardProps {
  icon: React.ReactNode;
  title: string;
  rows: BadgeRow[];
}

const capabilityRows: BadgeRow[] = [
  {
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
        Available
      </span>
    ),
    description: "Commercially available under defined product and service.",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF3D6] text-[#8F6B00]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8F6B00]" />
        Conditions
      </span>
    ),
    description:
      "Available only for defined entity types, worker scenarios, or plans.",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F1F5F9] text-slate-600">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        Not offered
      </span>
    ),
    description: "Not currently offered for the selected scope.",
  },
];

const deliveryRows: BadgeRow[] = [
  {
    badge: (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#07243B] border border-slate-200">
        Zoiko Payroll
      </span>
    ),
    description:
      "Delivered directly through an approved Zoiko Payroll operating.",
  },
  {
    badge: (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#07243B] border border-slate-200">
        Connected
      </span>
    ),
    description:
      "Zoiko Payroll connects to an approved external payroll system.",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FCE8E6] text-[#C5221F]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C5221F]" />
        Partner
      </span>
    ),
    description:
      "An approved local or global partner performs defined services.",
  },
];

const contentRows: BadgeRow[] = [
  {
    badge: (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#07243B] border border-slate-200">
        Guide available
      </span>
    ),
    description:
      "A reviewed local payroll guide is published for this jurisdiction.",
  },
  {
    badge: (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#07243B] border border-slate-200">
        Requirements
      </span>
    ),
    description:
      "Implementation-level local requirements documentation exists.",
  },
];

function CoverageCard({ icon, title, rows }: CoverageCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-6 flex flex-col justify-between">
      <div className="space-y-6">
        {/* Card Header */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-[#0A8FD0]">
            {icon}
          </div>
          <h3 className="text-sm font-bold tracking-[0.5px] text-[#07243B]">
            {title}
          </h3>
        </div>

        {/* Rows List */}
        <div className="divide-y divide-slate-100">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="py-3.5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center text-xs"
            >
              <div className="sm:col-span-5 flex items-center">{row.badge}</div>
              <p className="sm:col-span-7 text-slate-500 font-medium leading-relaxed tracking-[0.3px]">
                {row.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoverageDefinitionsSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[1px] text-[#0A8FD0] uppercase font-mono">
            <span>/</span>
            <span>COVERAGE DEFINITIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-[0.5px] text-[#07243B] leading-tight">
            Understand a badge before you trust it.
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <CoverageCard
            icon={<CheckSquare className="w-4 h-4" />}
            title="Capability availability"
            rows={capabilityRows}
          />

          <CoverageCard
            icon={<Briefcase className="w-4 h-4" />}
            title="Delivery model"
            rows={deliveryRows}
          />

          <CoverageCard
            icon={<FileText className="w-4 h-4" />}
            title="Content availability"
            rows={contentRows}
          />
        </div>

        {/* Bottom Callout Note */}
        <div className="bg-[#EEF3F9] rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs flex items-center gap-4">
          <div className="w-1.5 h-15 bg-[#1483CE] rounded-full shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 font-medium tracking-[0.3px] leading-relaxed">
            <strong className="font-bold text-[#07243B]">
              Important distinction <br />
            </strong>
            &ldquo;Guide available&rdquo; and &ldquo;payroll available&rdquo;
            are independent states. A jurisdiction may have educational content
            before commercial service launches, or a commercial service may
            exist before a full public guide is published.
          </p>
        </div>
      </div>
    </section>
  );
}
