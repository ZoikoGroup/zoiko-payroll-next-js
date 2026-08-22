"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const phases = [
  {
    number: "01",
    title: "Discover & Scope",
    summary: "Sources, owners, disposition.",
    detail:
      "Every source system is inventoried with a named owner and an explicit disposition before a single field is mapped.",
  },
  {
    number: "02",
    title: "Map & Cleanse",
    summary: "Field rules, quality checks.",
    detail:
      "Field rules are versioned, null behavior is decided explicitly, and quality exceptions are raised against a named owner.",
  },
  {
    number: "03",
    title: "Load & Validate",
    summary: "Controlled batch transfer.",
    detail:
      "Schema, referential and business-context checks run before any record reaches the target system.",
  },
  {
    number: "04",
    title: "Reconcile & Verify",
    summary: "Counts, totals, sign-off.",
    detail:
      "Source and loaded data are compared batch by batch — counts, totals and samples — and signed off by the data owner.",
  },
  {
    number: "05",
    title: "Cutover",
    summary: "Authorized GO decision.",
    detail:
      "The gate only opens once reconciliation, parallel verification, integrations and sign-off are all evidenced.",
  },
  {
    number: "06",
    title: "Stabilize",
    summary: "Hypercare, legacy exit.",
    detail:
      "Hypercare monitors exception aging and integration health until the legacy system can be retired on evidence.",
  },
];

export default function PhasesSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = phases[activeIndex];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-2.5 max-w-2xl text-3xl font-extrabold leading-9 text-slate-900">
            Six controlled phases from discovery to go-live
          </h2>
          <p className="mt-2.5 max-w-2xl text-base leading-6 text-gray-700">
            Each phase requires evidence before the next one can start — nothing moves forward on an
            unresolved exception.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-6">
            {phases.map((phase, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={phase.number}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`h-full w-full rounded-lg border bg-white px-3 pb-4 pt-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                      isActive
                        ? "border-blue-600 ring-[3px] ring-blue-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold leading-4 text-blue-600">
                      {phase.number}
                    </span>
                    <span className="mt-1.5 block text-sm font-bold leading-5 text-slate-900">
                      {phase.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-4 text-slate-500">
                      {phase.summary}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1A33]">
            <img
              src="/images/payroll-migration/phases.png"
              alt="Team mapping out the migration workflow stages"
              className="h-72 w-full object-cover opacity-60 sm:h-96"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-[#0B1A33]/60 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-7">
              <p className="text-sm font-bold leading-5 text-white">{active.title}</p>
              <p className="mt-1 max-w-3xl text-xs leading-5 text-white/75">{active.detail}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
