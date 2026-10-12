"use client";

import React from "react";
import {
  Columns2,
  LayoutPanelTop,
  Scan,
  CircleCheck,
  CircleArrowUp,
  ShieldCheck,
  Info,
  type LucideIcon,
} from "lucide-react";

interface FoundationItem {
  icon: LucideIcon;
  title: string;
  description: string;
  boundary: string;
}

const foundationItems: FoundationItem[] = [
  {
    icon: Columns2,
    title: "Discovery & governance",
    description:
      "Kickoff, scope confirmation, RACI, decision log and implementation plan.",
    boundary: "complex PMO or multi-wave governance may be separately scoped.",
  },
  {
    icon: LayoutPanelTop,
    title: "Core payroll configuration",
    description:
      "Calendars, groups, earning/deduction setup, roles and approvals.",
    boundary: "jurisdiction-specific or bespoke configuration may add scope.",
  },
  {
    icon: Scan,
    title: "Data mapping",
    description: "Source-to-Zoiko mapping design and validation rules.",
    boundary:
      "large historical migration or poor data quality may be separately scoped.",
  },
  {
    icon: CircleCheck,
    title: "Standard testing",
    description: "Configuration and scenario testing with evidence capture.",
    boundary:
      "additional cycles or guided parallel-run support may be separately scoped.",
  },
  {
    icon: CircleArrowUp,
    title: "Cutover planning",
    description:
      "Go-live checklist, freeze plan, contingency path and Service Commencement readiness.",
    boundary:
      "multi-wave or provider transition complexity may be separately scoped.",
  },
  {
    icon: ShieldCheck,
    title: "Hypercare baseline",
    description:
      "Defined post-go-live monitoring and handoff to business-as-usual.",
    boundary:
      "extended or premium hypercare is contracted separately where offered.",
  },
];

export default function ImplementationFoundationSection() {
  return (
    <section className="w-full bg-[#EFF4F7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0A8FD0] uppercase font-mono">
              <span className="font-bold">/</span>
              <span>Implementation foundation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#07243B] leading-tight">
              What the base engagement covers.
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-5 lg:max-w-sm">
            The baseline project work required to convert an approved commercial
            scope into a controlled production deployment.
          </p>
        </div>

        {/* Foundation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {foundationItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-full border border-[#3B82F6] flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#0A8FD0]" />
              </div>

              <h3 className="mt-5 text-base font-extrabold text-[#07243B]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-5">
                {item.description}
              </p>

              <div className="mt-auto pt-5">
                <div className="border-t border-slate-200 pt-3.5 text-xs leading-4">
                  <span className="font-bold text-[#07243B]">Boundary:</span>
                  <span className="text-slate-500"> {item.boundary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Truthfulness rule */}
        <div className="bg-[#E4F1FA] rounded-xl p-5 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#0A78C3] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#082F49]">
              Truthfulness rule.
            </div>
            <p className="text-sm text-[#4E6172] leading-5">
              The foundation is described as a scope category — not a claim that
              every buyer receives the same tasks, timeline or number of
              parallel runs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
