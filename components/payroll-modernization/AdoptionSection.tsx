"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const audiences = [
  "Payroll & local payroll",
  "Finance",
  "HR / Data",
  "IT / Integrations",
  "Employees",
  "Managers / Approvers",
  "Support",
  "Transformation lead",
];

const adoptionStates = [
  "Not invited",
  "Scheduled",
  "Ready for practice",
  "Validated",
  "Needs support",
  "Production active",
  "Stabilizing",
];

export default function AdoptionSection() {
  const [activeState, setActiveState] = useState("Ready for practice");

  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-16 sm:py-20">
      <img
        src="/images/payroll-modernization/adoption-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0 bg-radial-[at_80%_10%] from-blue-500/20 to-transparent to-65%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">People, change &amp; adoption</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white">
            Modernization is an operating change, not only a technology change
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-6 text-white/70">
            People stay accountable for correction, review, approval and cutover decisions —
            adoption is never scored as performance.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-9">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm leading-5 text-white/85"
              >
                {audience}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <p className="text-xs font-bold uppercase leading-4 tracking-wide text-white/50">
            Adoption states
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {adoptionStates.map((state) => {
              const isActive = state === activeState;
              return (
                <button
                  key={state}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveState(state)}
                  className={`rounded-full border px-4 py-2 text-sm leading-5 transition-colors duration-200 ${
                    isActive
                      ? "border-blue-500 bg-blue-600/20 text-blue-200"
                      : "border-white/15 bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  {state}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
