"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

interface StatusDefinition {
  id: string;
  name: string;
  dotColor: string;
  description: string;
  notMeaning: string;
}

const statuses: StatusDefinition[] = [
  {
    id: "available",
    name: "Available",
    dotColor: "bg-emerald-500",
    description: "A current approved service scope is available in this jurisdiction.",
    notMeaning:
      "Does not mean identical scope to other jurisdictions. Does not mean zero implementation requirements or unverified multi-entity structures.",
  },
  {
    id: "limited",
    name: "Limited / Scoped",
    dotColor: "bg-amber-500",
    description: "Some approved service scope is available with explicit limitations.",
    notMeaning:
      "Does not mean general unfitness or permanent restriction. Explicit boundary notes define permitted vs excluded workflows.",
  },
  {
    id: "assessment",
    name: "Assessment required",
    dotColor: "bg-blue-500",
    description: "Availability depends on customer facts, access scope or implementation review.",
    notMeaning:
      "Does not mean unavailable. Indicates prerequisite scoping is needed to confirm alignment with local payroll rules.",
  },
  {
    id: "not_available",
    name: "Not currently available",
    dotColor: "bg-red-500",
    description: "Zoiko Payroll is not currently offered for the requested scope in this jurisdiction.",
    notMeaning:
      "Does not preclude roadmap planning or partner-supported service delivery models where applicable.",
  },
  {
    id: "unknown",
    name: "Unknown / not published",
    dotColor: "bg-slate-400",
    description: "No public service status is published.",
    notMeaning:
      "Contact the solution team to verify unpublished coverage or specific regional entities.",
  },
];

export default function StatusLegendSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-[#E9F0F8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / STATUS LEGEND
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              What each status means — and what it doesn&apos;t.
            </h2>
          </div>
        </Reveal>

        {/* Status Cards */}
        <div className="mt-10 space-y-4">
          {statuses.map((item, idx) => {
            const isOpen = !!openIds[item.id];
            return (
              <Reveal key={item.id} delay={idx * 50}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-200 hover:shadow-sm sm:p-6">
                  {/* Status Title & Dot */}
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dotColor}`} />
                    <h3 className="text-sm font-bold text-[#082F49] sm:text-base">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {item.description}
                  </p>

                  {/* Toggle Link */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0A78C2] transition-colors hover:text-[#0863A0] hover:underline"
                  >
                    <span>{isOpen ? "▴" : "▾"}</span>
                    <span>What this does not mean</span>
                  </button>

                  {/* Expandable Explanation */}
                  {isOpen && (
                    <div className="mt-2.5 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-600 border border-slate-100">
                      {item.notMeaning}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
