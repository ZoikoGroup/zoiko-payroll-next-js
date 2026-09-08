import React from "react";
import { ArrowDown } from "lucide-react";
import { Eyebrow } from "./Primitives";

const steps = [
  "Customer need",
  "Scope",
  "Estimate",
  "Statement of work",
  "Kickoff",
] as const;

const intake = [
  { label: "Project type", value: "Data migration" },
  { label: "Target timeline", value: "Q1 2027" },
  { label: "Jurisdictions in scope", value: "United States, Germany, India", wide: true },
  {
    label: "Business objective",
    value: "Consolidate legacy payroll data ahead of go-live",
    wide: true,
  },
] as const;

export default function ScopingSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Steps */}
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Scoping & qualification</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            From need to kickoff, in five clear steps.
          </h2>
          <p className="text-base leading-7 text-slate-500">
            Every engagement begins with a short intake process that turns a
            business need into an agreed statement of work.
          </p>

          <ol className="flex flex-col pt-2">
            {steps.map((step, index) => (
              <li key={step} className="flex flex-col">
                <span className="rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900">
                  {step}
                </span>
                {index < steps.length - 1 ? (
                  <ArrowDown
                    aria-hidden="true"
                    className="my-2 h-5 w-5 self-center text-blue-400"
                    strokeWidth={1.5}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        {/* Intake form mock */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7">
          <h3 className="text-base font-semibold text-slate-900">
            Engagement intake
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {intake.map((field) => (
              <div
                key={field.label}
                className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 ${
                  "wide" in field && field.wide ? "sm:col-span-2" : ""
                }`}
              >
                <span className="block text-xs text-slate-400">
                  {field.label}
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-900">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 w-full cursor-pointer rounded-xl bg-linear-to-b from-sky-500 to-sky-800 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Submit for scoping
          </button>
        </div>
      </div>
    </section>
  );
}
