import React from "react";
import { Lock } from "lucide-react";
import { SectionHeading, StatusPill } from "./Primitives";

const tasks = [
  "Payroll preparation",
  "Resolve exceptions",
  "Review calculations",
  "Approvals",
  "Payroll reports",
  "Finance reconciliation",
] as const;

export default function SandboxPracticeSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Hands-on sandbox practice"
          title={
            <>
              Practice on safe data, not
              <br className="hidden sm:block" /> production payroll.
            </>
          }
        />

        <div className="flex w-full flex-col gap-5">
          <div className="rounded-2xl border-4 border-slate-900 bg-white p-1 sm:border-8">
            <div className="flex flex-col items-start gap-3 px-5 pb-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-sm bg-slate-200" />
                <span className="h-2 w-2 rounded-sm bg-slate-200" />
                <span className="h-2 w-2 rounded-sm bg-slate-200" />
              </span>
              <span className="text-sm text-slate-500">
                Sandbox payroll environment
              </span>
              <StatusPill tone="green">Safe practice data</StatusPill>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {tasks.map((task, index) => {
                /*
                 * Stacked below lg, so every tile but the first gets a rule
                 * above it. In the 3-up grid those rules become column
                 * dividers instead — kept only where a tile has a neighbour
                 * to its left, and dropped on the first row.
                 */
                const dividers = [
                  index !== 0 ? "border-t border-slate-100" : "",
                  index % 3 !== 0 ? "lg:border-l lg:border-slate-100" : "",
                  index % 3 !== 0 && index < 3 ? "lg:border-t-0" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <div
                    key={task}
                    className={`px-5 py-6 text-base font-semibold text-slate-900 ${dividers}`}
                  >
                    {task}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4">
            <Lock className="h-5 w-5 shrink-0 text-blue-600" strokeWidth={1.83} />
            <p className="text-sm text-slate-600">
              Safe practice environment — every scenario runs on isolated
              sandbox data, never real payroll records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
