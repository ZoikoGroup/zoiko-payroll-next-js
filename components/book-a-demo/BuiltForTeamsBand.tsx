import React from "react";
import { Check } from "lucide-react";

const proofs = [
  "Multi-country payroll",
  "Statutory compliance built in",
  "Full audit trail",
] as const;

export default function BuiltForTeamsBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[20px] bg-sky-950 p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-extrabold text-white">
            Built for teams running real payroll, every cycle
          </h2>
          <p className="max-w-lg text-sm leading-6 text-white/70">
            Zoiko Payroll is designed around the day-to-day realities of running
            payroll on time, every time — not a simplified demo environment.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {proofs.map((proof) => (
            <li key={proof} className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-sky-500" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white/90">{proof}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
