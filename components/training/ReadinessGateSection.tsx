import React from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "./Primitives";

const gates = [
  "Learning complete",
  "Practice complete",
  "Assessment passed",
  "Manager sign-off",
] as const;

export default function ReadinessGateSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Go-live readiness gate"
          title={
            <>
              Production access starts with
              <br className="hidden sm:block" /> role readiness.
            </>
          }
        />

        <ol className="flex w-full max-w-lg flex-col">
          {gates.map((gate) => (
            <li key={gate} className="flex flex-col items-center">
              <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600/10">
                  <Check className="h-3.5 w-3.5 text-green-700" strokeWidth={2.5} />
                </span>
                <span className="text-base font-medium text-slate-900">
                  {gate}
                </span>
              </div>
              {/* Vertical stub joining this gate to the next one. */}
              <span aria-hidden="true" className="h-5 w-px bg-slate-200" />
            </li>
          ))}
          <li className="flex w-full items-center gap-3 rounded-xl border border-blue-600 bg-white px-5 py-4 shadow-[0px_8px_20px_0px_rgba(37,99,235,0.10)]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600">
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-base font-medium text-slate-900">
              Ready for production
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
