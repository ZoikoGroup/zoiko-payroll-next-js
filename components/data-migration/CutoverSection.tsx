import React from "react";
import { SectionHeading } from "./Primitives";

const steps = [
  {
    title: "Freeze window",
    description: "Source system locked to changes",
  },
  {
    title: "Final extraction",
    description: "Last full data pull from source",
  },
  {
    title: "Delta migration",
    description: "Changes since the last load applied",
  },
  {
    title: "Production load",
    description: "Validated data enters live payroll",
  },
  {
    title: "Go / no-go",
    description: "Formal readiness decision recorded",
  },
  {
    title: "Rollback readiness",
    description: "Reversion plan held on standby",
  },
] as const;

export default function CutoverSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <SectionHeading eyebrow="Cutover" title="A controlled path to go-live" />

        <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_8px_24px_-8px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10">
          <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {/* Connecting rail, desktop only */}
            <span
              aria-hidden="true"
              className="absolute left-[8.33%] right-[8.33%] top-3 hidden h-0.5 bg-slate-200 lg:block"
            />
            {steps.map((step) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                <span className="h-6 w-6 rounded-xl border-[3px] border-blue-600 bg-white" />
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs leading-5 text-slate-500">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
