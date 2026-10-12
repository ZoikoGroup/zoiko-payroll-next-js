import React from "react";
import {
  SectionHeading,
  StatusPill,
  WindowBar,
  type ReadinessStatus,
} from "./Primitives";

const dimensions: { label: string; status: ReadinessStatus; text: string }[] = [
  { label: "Strategy & governance", status: "ready", text: "Ready to progress" },
  { label: "Payroll landscape", status: "ready", text: "Ready to progress" },
  {
    label: "Data readiness",
    status: "preparation",
    text: "Preparation required",
  },
  {
    label: "Compliance readiness",
    status: "preparation",
    text: "Preparation required",
  },
  { label: "Systems & integrations", status: "gap", text: "Material gap" },
  { label: "Security & access", status: "ready", text: "Ready to progress" },
  { label: "Testing & cutover", status: "unassessed", text: "Not yet assessed" },
  {
    label: "People & operations",
    status: "preparation",
    text: "Preparation required",
  },
];

const confidence = [
  {
    title: "High evidence confidence",
    body: "Governance, landscape, security",
  },
  {
    title: "Moderate evidence confidence",
    body: "Data, compliance, operations",
  },
  {
    title: "Low evidence confidence",
    body: "Integrations, testing & cutover",
  },
] as const;

export default function ResultsDashboardSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Readiness results dashboard"
          title={
            <>
              One view, every dimension, no
              <br className="hidden sm:block" /> guesswork.
            </>
          }
        />

        <div className="flex w-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0px_30px_60px_-20px_rgba(15,23,42,0.08)] sm:p-6">
          <WindowBar label="Readiness by dimension" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dimensions.map((dimension) => (
              <div
                key={dimension.label}
                className="flex flex-col items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <StatusPill status={dimension.status}>
                  {dimension.text}
                </StatusPill>
                <span className="text-sm text-slate-500">
                  {dimension.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {confidence.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="text-base font-semibold text-slate-900">
                  {item.title}
                </span>
                <span className="text-sm text-slate-500">{item.body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
