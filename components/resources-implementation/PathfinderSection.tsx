"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const goals = [
  "Migrate payroll data",
  "Validate payroll output",
  "Plan a parallel test",
  "Plan launch / cutover",
  "Stabilize after launch",
];

const stages = [
  "Discover / scope",
  "Configure",
  "Prepare / migrate",
  "Validate",
  "Parallel test",
  "Launch",
  "Stabilize",
];

const scopes = [
  "Single jurisdiction / single entity",
  "Multi-jurisdiction / multi-entity",
];

type Path = {
  title: string;
  reason: string;
  owner: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Deterministic routing: scope selects the owning authority, never a score. */
function resolvePath(scope: string): Path {
  if (scope === scopes[1]) {
    return {
      title: "Global Payroll Implementation and Migration",
      reason:
        "Why this path: multi-entity scope prioritizes the global implementation authority; coverage and jurisdiction guides are also relevant.",
      owner: "Authority owner: Global Payroll Implementation and Migration",
      ctaLabel: "Jurisdiction Guides",
      ctaHref: "/zoiko-payroll-jurisdiction-guides",
    };
  }

  return {
    title: "Product Implementation",
    reason:
      "Why this path: single-entity scope routes to the product implementation authority for configuration, validation and launch guidance.",
    owner: "Authority owner: Product Implementation",
    ctaLabel: "Open Implementation",
    ctaHref: "/implementation",
  };
}

export default function PathfinderSection() {
  const [goal, setGoal] = useState(goals[0]);
  const [stage, setStage] = useState(stages[2]);
  const [scope, setScope] = useState(scopes[1]);

  const path = resolvePath(scope);

  const fields = [
    { label: "Goal", value: goal, options: goals, onChange: setGoal },
    { label: "Stage", value: stage, options: stages, onChange: setStage },
    { label: "Scope", value: scope, options: scopes, onChange: setScope },
  ];

  return (
    <section id="pathfinder" className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Implementation pathfinder</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
            Tell us your goal and stage — get an authority, not a score
          </h2>
          <p className="mt-4 max-w-[660px] text-base leading-6 text-gray-600">
            Deterministic routing only. Never a readiness percentage, risk rating or &quot;AI
            confidence.&quot;
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 rounded-2xl border border-slate-200 bg-white px-5 pb-6 pt-8 shadow-[0px_20px_44px_-22px_rgba(15,45,70,0.20)] sm:px-6 sm:pt-12"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {fields.map((field) => (
              <label key={field.label} className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  {field.label}
                </span>
                <select
                  value={field.value}
                  onChange={(event) => field.onChange(event.target.value)}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-xs leading-5 text-[#0A2E4B] focus:outline-none focus:ring-2 focus:ring-brand-light"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">1 authority path found</p>

          <div className="mt-2.5 flex flex-wrap items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-100 px-4 pb-4 pt-5">
            <div className="min-w-0 flex-1 lg:min-w-[460px]">
              <p className="text-base font-bold leading-6 text-[#0A2E4B]">{path.title}</p>
              <p className="mt-1 max-w-[460px] text-xs leading-5 text-gray-600">{path.reason}</p>
              <p className="mt-1.5 text-xs font-bold leading-4 text-sky-700">{path.owner}</p>
            </div>

            <Link
              href={path.ctaHref}
              className="w-full rounded-lg bg-brand-gradient px-5 py-3 text-center text-sm font-bold text-white shadow-[0px_8px_18px_-6px_rgba(11,76,120,0.45)] transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              {path.ctaLabel}
            </Link>
          </div>

          <p className="mt-4 text-xs leading-4 text-slate-500">
            No readiness percentage, risk rating, maturity score, eligibility score or AI confidence
            is shown or implied.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
