import React from "react";
import { SectionHeading, StatusPill } from "./Primitives";

const fields = [
  { label: "Learner groups", value: "Payroll, Finance, HR" },
  { label: "Countries", value: "US, UK" },
  { label: "Payroll roles", value: "4 roles assigned" },
  { label: "Delivery mode", value: "Blended" },
  { label: "Due dates", value: "2 weeks before go-live" },
  { label: "Prerequisites", value: "Foundation module" },
  { label: "Owners", value: "Zoiko & customer HR" },
] as const;

export default function TrainingPlanBuilderSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Training plan builder"
          title={
            <>
              Plan training the way you plan
              <br className="hidden sm:block" /> implementation.
            </>
          }
        />

        <div className="w-full rounded-2xl border-4 border-slate-900 bg-white p-5 sm:border-8 sm:p-6">
          <div className="flex items-center justify-between gap-4 pb-5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
            </span>
            <span className="text-sm text-slate-500">
              Training plan — Wave 1
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-1.5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3.5"
              >
                <span className="text-xs text-slate-500">{field.label}</span>
                <span className="text-sm font-bold text-slate-900">
                  {field.value}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-start gap-1.5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3.5">
              <span className="text-xs text-slate-500">Readiness status</span>
              <StatusPill>In progress</StatusPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
