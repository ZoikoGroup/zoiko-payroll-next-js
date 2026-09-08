import React from "react";
import Image from "next/image";
import { Eyebrow } from "./Primitives";

const included = [
  "Advisory",
  "Data Migration",
  "Integration",
  "Testing",
  "Change enablement",
  "Optimization",
] as const;

const excluded = [
  "Standard support",
  "Customer success",
  "Legal or tax advice",
  "Unlimited consulting",
] as const;

export default function ScopeSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/professional-services/scope.webp"
            alt="Specialists working through a payroll engagement"
            width={486}
            height={462}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3.5">
          <Eyebrow>The scope</Eyebrow>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            What Professional Services means.
          </h2>
          <p className="text-base leading-7 text-slate-500">
            Specialist, time-boxed expertise applied to defined payroll outcomes
            — distinct from ongoing support or account management.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center text-sm font-semibold text-slate-900"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="pt-4 text-xs font-semibold text-slate-500">
            Not included
          </p>
          <ul className="flex flex-wrap gap-3">
            {excluded.map((item) => (
              <li
                key={item}
                className="rounded-[20px] border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
