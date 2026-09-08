import React from "react";
import { SectionHeading } from "./Primitives";

const waves = [
  { name: "Wave 1", countries: ["United States", "United Kingdom"] },
  { name: "Wave 2", countries: ["Germany", "India"] },
  { name: "Wave 3", countries: ["Canada"] },
] as const;

export default function RolloutPlanningSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Multi-country rollout planning"
          title={
            <>
              A sequence built around
              <br className="hidden sm:block" /> readiness, not calendar dates.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-0">
          {waves.map((wave, index) => (
            <div key={wave.name} className="relative flex items-center">
              <div className="flex w-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-bold text-blue-600">{wave.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {wave.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-900"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              {/* Connector stub between waves, once they share a row */}
              {index < waves.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden h-px w-6 shrink-0 bg-slate-200 lg:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
