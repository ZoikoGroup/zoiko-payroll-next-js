import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./Primitives";

const stats = [
  { value: "48,204", label: "Records loaded", tone: "text-slate-900" },
  { value: "12", label: "Records rejected", tone: "text-red-600" },
  { value: "100%", label: "Control totals matched", tone: "text-green-600" },
  { value: "Reconciled", label: "YTD balances", tone: "text-green-600" },
  { value: "Passed", label: "Financial validation", tone: "text-green-600" },
  { value: "3", label: "Exceptions remaining", tone: "text-slate-900" },
] as const;

export default function ReconciliationSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-11">
        <SectionHeading
          eyebrow="Validation & reconciliation"
          title="Nothing goes live until it reconciles"
        />

        <div className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-8 sm:px-12 sm:py-10 lg:px-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 text-center"
              >
                <span className={`text-3xl font-bold ${stat.tone}`}>
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>

          <hr className="my-10 border-slate-900/20" />

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-6 py-4 text-center sm:w-auto">
              <span className="block text-base text-slate-900">
                Source total
              </span>
              <span className="text-xl font-bold text-slate-900">
                $4,218,904.00
              </span>
            </div>
            <ArrowRight
              className="h-6 w-6 rotate-90 text-blue-400 sm:rotate-0"
              strokeWidth={2}
            />
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-6 py-4 text-center sm:w-auto">
              <span className="block text-base text-slate-900">
                Target total
              </span>
              <span className="text-xl font-bold text-green-600">
                $4,218,904.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
