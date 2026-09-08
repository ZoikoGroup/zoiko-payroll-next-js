import React from "react";
import Link from "next/link";
import { StepRow, StatusPill } from "./Primitives";

const journey = [
  { label: "Role", done: true },
  { label: "Learn", done: true },
  { label: "Practice", done: true },
  { label: "Prove", done: false },
  { label: "Operate", done: false },
] as const;

export default function TrainingHero() {
  return (
    <section className="overflow-hidden bg-radial-[at_15%_-10%] from-blue-400/20 to-blue-400/0 to-60% px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-3.5">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[40px] lg:text-5xl lg:leading-[59.4px]">
            Build payroll capability before go-live
          </h1>
          <p className="max-w-[540px] pt-2 text-base leading-7 text-slate-500 sm:text-lg">
            Give payroll administrators, finance, HR, approvers, system
            administrators, and local payroll teams the role-based learning,
            hands-on practice, and proficiency evidence they need before
            production responsibility.
          </p>

          <div className="flex flex-col items-stretch gap-3.5 pt-5 sm:flex-row sm:items-center">
            {/* No training-plan route exists yet — placeholder until one is built. */}
            <Link
              href="#"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white shadow-[0px_8px_20px_0px_rgba(37,99,235,0.16)] transition-colors hover:bg-blue-700"
            >
              Plan training
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 transition-colors hover:border-blue-600"
            >
              Talk to an implementation specialist
            </Link>
          </div>
        </div>

        {/* Learner readiness journey card */}
        <div className="flex flex-col gap-4 rounded-3xl border-4 border-slate-900 bg-white p-5 sm:border-8 sm:p-6 shadow-[0px_30px_60px_-20px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-2 rounded-sm bg-slate-200" />
            </span>
            <span className="text-sm text-slate-500">
              Learner readiness journey
            </span>
          </div>

          <ul className="flex flex-col">
            {journey.map((step, index) => (
              <StepRow
                key={step.label}
                label={step.label}
                done={step.done}
                first={index === 0}
              />
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-50 px-4 pb-5 pt-4">
              <span className="text-xl font-bold text-slate-900">64%</span>
              <span className="text-xs text-slate-500">
                Cohort proficiency ready
              </span>
            </div>
            <div className="flex flex-col items-start gap-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <StatusPill>On track</StatusPill>
              <span className="text-xs text-slate-500">Go-live gate status</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
