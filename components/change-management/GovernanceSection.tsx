import React from "react";
import { SectionHeading } from "./Primitives";

const metrics = [
  { value: "12/14", label: "Sponsor actions complete" },
  { value: "7", label: "Countries ready" },
  { value: "3", label: "Open risks" },
  { value: "92%", label: "Communications sent" },
  { value: "2", label: "Training dependencies" },
  { value: null, label: "Go-live gate status", badge: "Gate open" },
] as const;

export default function GovernanceSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Strategy & governance"
          title="Keep every change accountable and measurable."
          body="A shared governance view keeps sponsors, readiness, and risk visible through the entire program."
        />

        <div className="w-full rounded-[20px] border-4 border-slate-900 sm:border-8 bg-white shadow-[0px_30px_60px_-20px_rgba(15,23,42,0.08)]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 px-5 py-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
            </div>
            {/* Title is decorative chrome — dropped on the narrowest screens
                so the status badge keeps its space. */}
            <span className="hidden flex-1 truncate text-center text-sm text-slate-500 sm:block">
              Change governance dashboard
            </span>
            <span className="ml-auto shrink-0 rounded-[20px] bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-600 sm:ml-0">
              On track
            </span>
          </div>

          {/* Metric tiles */}
          <div className="grid grid-cols-1 gap-4 p-5 pt-1 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-sky-600/30 bg-sky-600/10 px-4 py-4"
              >
                {metric.value ? (
                  <span className="block text-xl font-bold text-slate-900">
                    {metric.value}
                  </span>
                ) : (
                  <span className="inline-block rounded-[20px] bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-600">
                    {metric.badge}
                  </span>
                )}
                <span className="mt-2 block text-xs text-slate-500">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
