"use client";

import React from "react";
import { LayoutGrid, Shield, CheckCircle2 } from "lucide-react";

// Data for 3 model columns
const MODEL_COLUMNS = [
  {
    icon: LayoutGrid,
    title: "Coordinated",
    items: [
      "Entity-scoped configurations",
      "Calendars and cutoffs",
      "Owners and service models",
      "Readiness and approvals",
      "Exceptions and integrations",
      "Cross-entity operational actions",
    ],
  },
  {
    icon: Shield,
    title: "Shared where permitted",
    items: [
      "Templates",
      "Policies",
      "Workflow stages",
      "Operational dashboards",
      "Service standards",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Remains local",
    items: [
      "Jurisdiction requirements",
      "Effective configuration",
      "Payroll groups",
      "Calendars/cutoffs · Currency context",
      "Evidence · Approvals",
      "Provider responsibilities · Statutory outputs",
    ],
  },
];

// Data for "NOT MERGED BY DEFAULT" tags
const NOT_MERGED_TAGS = [
  "Legal ownership",
  "Employer status",
  "Tax registrations",
  "Bank mandates",
  "Statutory records",
  "Accounting ledgers",
  "Employee idmulti-entity-payroll",
  "Payroll outputs",
];

// Entity image cards data
const ENTITY_CARDS = [
  {
    tag: "US entity",
    image: "/images/multi-entity-payroll/us-entity.png",
    alt: "US Entity Flag and Buildings",
  },
  {
    tag: "DE entity",
    image: "/images/multi-entity-payroll/de-entity.png",
    alt: "Germany Entity Building and Flag",
  },
  {
    tag: "SG entity",
    image: "/images/multi-entity-payroll/sg-entity.png",
    alt: "Singapore Entity Skyline",
  },
  {
    tag: "IN entity",
    image: "/images/multi-entity-payroll/in-entity.png",
    alt: "India Entity Taj Mahal Architecture",
  },
];

export default function MultiEntityDefinitionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 text-[#0A1928] font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0281D3]">
            <span>/</span>
            <span>WHAT MULTI-ENTITY PAYROLL ACTUALLY MEANS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1928] leading-tight">
            Define the model before showing features
          </h2>

          <p className="text-sm sm:text-base text-[#5C6E7E]">
            Corporate hierarchy is relationship and navigation context &mdash;
            never permission inheritance.
          </p>
        </div>

        {/* 3 Model Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {MODEL_COLUMNS.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Rounded Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3FA] border border-[#D0E2F2] flex items-center justify-center text-[#0281D3]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Column Title */}
                <h3 className="text-lg font-bold text-[#0A1928]">
                  {col.title}
                </h3>

                {/* Bullet List */}
                <ul className="w-full space-y-2.5 pt-2">
                  {col.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-[#5C6E7E] pb-2 border-b border-[#E1E8ED]/60 last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* "Not Merged By Default" Pill Container */}
        <div className="bg-white border border-[#E1E8ED] rounded-2xl p-6 shadow-xs space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#A6473C]">
            NOT MERGED BY DEFAULT
          </div>
          <div className="flex flex-wrap gap-2.5">
            {NOT_MERGED_TAGS.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#F3DEDB] text-[#A6473C] text-[11px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Country/Entity Cards */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENTITY_CARDS.map((entity, idx) => (
              <div
                key={idx}
                className="relative h-48 rounded-2xl overflow-hidden border border-[#E1E8ED] shadow-sm group"
              >
                <img
                  src={entity.image}
                  alt={entity.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-[20px] bg-[#082F49BF] text-white text-xs font-bold backdrop-blur-xs">
                  {entity.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Caption */}
          <p className="text-xs text-[#5C6E7E]">
            Illustrative only &mdash; one shared operating layer connects
            multi-entity-payroll; each keeps its own local scope, authority and records.
          </p>
        </div>
      </div>
    </section>
  );
}
