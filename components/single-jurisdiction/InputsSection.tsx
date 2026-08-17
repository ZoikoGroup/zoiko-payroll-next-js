import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import ControlList, { type ControlRow } from "./ControlList";

const inputReadiness: ControlRow[] = [
  { item: "HR / employee changes", tag: "Ready" },
  { item: "Time source", tag: "Needs mapping", state: "warn" },
  { item: "Deductions & adjustments", tag: "Ready" },
  { item: "Finance integration", tag: "Stale", state: "error" },
];

const calculation: ControlRow[] = [
  { item: "Calculation status", tag: "Completed w/ warnings" },
  { item: "Variance vs. prior period", tag: "+2.1%", state: "warn" },
  { item: "Retry safety", tag: "Idempotent" },
];

export default function InputsSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Inputs, calculation &amp; validation</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
            Readiness checked before a single calculation runs
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <ControlList title="Input readiness" rows={inputReadiness} />
          </Reveal>
          <Reveal delay={100}>
            <ControlList title="Calculation & variance" rows={calculation} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
