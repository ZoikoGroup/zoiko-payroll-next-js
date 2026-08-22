"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const filters = ["All roles", "Lifecycle stage", "Content type", "Scope"];

const results = [
  {
    kind: "Guide",
    title: "Global Payroll Operating Model Guide",
    answers: "Answers: what operating model fits multi-entity payroll?",
    meta: "Payroll & Finance · Jul 2026",
  },
  {
    kind: "Checklist",
    title: "Payroll Evidence & Audit Readiness Guide",
    answers: "Answers: what evidence should we gather before review?",
    meta: "Payroll Ops · Jun 2026",
  },
];

export default function ResourceNavigatorSection() {
  const [active, setActive] = useState(filters[0]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Resource navigator</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
            Find guidance by task — not a blog index.
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-gray-700">
            Resource search stays separate from jurisdiction availability search. It never infers
            availability or fabricates unsupported answers.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-9">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-gray-50 px-5 py-3.5">
              {filters.map((filter) => {
                const isActive = filter === active;
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(filter)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium leading-5 transition-colors duration-200 ${
                      isActive
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-gray-700 hover:border-slate-300"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* gap-px over a slate ground draws the divider between results at any width. */}
            <ul className="grid grid-cols-1 gap-px bg-slate-200 lg:grid-cols-2">
              {results.map((result) => (
                <li key={result.title} className="bg-white px-5 py-5">
                  <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-blue-600">
                    {result.kind}
                  </p>
                  <h3 className="mt-1.5 text-sm font-extrabold leading-6 text-slate-900">
                    {result.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{result.answers}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-2.5">
                    <span className="text-xs leading-4 text-slate-500">{result.meta}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold leading-4 text-green-600">
                      <span
                        className="size-1.5 shrink-0 rounded-sm bg-green-600"
                        aria-hidden="true"
                      />
                      Current
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Three across only from lg — these carry full sentences, not labels. */}
            <div className="grid grid-cols-1 gap-3.5 px-5 py-5 lg:grid-cols-3">
              <div className="rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-4 text-center">
                <p className="text-xs font-bold leading-5 text-gray-700">Zero results</p>
                <p className="text-xs leading-5 text-gray-700">
                  &quot;payroll in Antarctica&quot; — no matching resource; browse collections
                  instead.
                </p>
              </div>
              <div className="rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-4 text-center">
                <p className="text-xs font-bold leading-5 text-gray-700">Stale match</p>
                <p className="mt-1 flex flex-wrap items-center justify-center gap-1.5 text-xs leading-5 text-gray-700">
                  Result found, marked
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold leading-4 text-yellow-700">
                    <span
                      className="size-1.5 shrink-0 rounded-sm bg-yellow-700"
                      aria-hidden="true"
                    />
                    Review due
                  </span>
                </p>
              </div>
              <div className="rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-4 text-center">
                <p className="text-xs font-bold leading-5 text-gray-700">Market-name query</p>
                <p className="text-xs leading-5 text-gray-700">
                  &quot;Germany payroll&quot; routes to Jurisdiction Guide, not a fabricated answer.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
