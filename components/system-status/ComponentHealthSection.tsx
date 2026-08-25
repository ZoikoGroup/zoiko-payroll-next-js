"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const groups = [
  {
    title: "Core payroll",
    components: [
      { name: "Payroll processing", meta: "All regions · verified 09:41 UTC", status: "Operational" },
      { name: "Calculations & approvals", meta: "All regions · verified 09:41 UTC", status: "Operational" },
      { name: "Filing & compliance workflows", meta: "All regions · verified 09:38 UTC", status: "Operational" },
    ],
  },
  {
    title: "Integrations & APIs",
    components: [
      { name: "Public API", meta: "All regions · verified 09:40 UTC", status: "Operational" },
      { name: "HRIS connectors", meta: "EU region · verified 09:12 UTC", status: "Degraded performance" },
      { name: "Webhooks delivery", meta: "All regions · verified 09:41 UTC", status: "Operational" },
    ],
  },
  {
    title: "Employee self-service",
    components: [
      { name: "Employee portal", meta: "All regions · verified 09:41 UTC", status: "Operational" },
      { name: "Payslip access", meta: "All regions · verified 09:39 UTC", status: "Operational" },
      { name: "Notifications", meta: "All regions · verified 09:35 UTC", status: "Operational" },
    ],
  },
];

const statusTone: Record<string, string> = {
  Operational: "bg-emerald-50 text-emerald-700",
  "Degraded performance": "bg-amber-50 text-amber-700",
};

const statusDot: Record<string, string> = {
  Operational: "bg-emerald-500",
  "Degraded performance": "bg-amber-500",
};

export default function ComponentHealthSection() {
  const [showAffectedOnly, setShowAffectedOnly] = useState(false);

  return (
    <section id="component-health" className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Current component health</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Public service components, grouped — not internal architecture
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Ordered by the approved public component registry, not severity.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowAffectedOnly(false)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
              !showAffectedOnly ? "bg-brand/10 text-brand" : "border border-slate-200 bg-white text-slate-600 hover:border-brand/30"
            }`}
          >
            All components
          </button>
          <button
            type="button"
            onClick={() => setShowAffectedOnly(true)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
              showAffectedOnly ? "bg-brand/10 text-brand" : "border border-slate-200 bg-white text-slate-600 hover:border-brand/30"
            }`}
          >
            Show affected only
          </button>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {groups.map((group, index) => {
            const visible = showAffectedOnly
              ? group.components.filter((c) => c.status !== "Operational")
              : group.components;
            if (showAffectedOnly && visible.length === 0) return null;

            return (
              <Reveal key={group.title} delay={index * 60} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{group.title}</h3>
                <div className="mt-3 divide-y divide-slate-100">
                  {visible.map((component) => (
                    <div key={component.name} className="flex items-center justify-between gap-3 py-3">
                      <div>
                        <p className="text-sm font-semibold text-brand-dark">{component.name}</p>
                        <p className="mt-0.5 text-xs text-slate-400">{component.meta}</p>
                      </div>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${statusTone[component.status]}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${statusDot[component.status]}`} />
                        {component.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
