import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

/** HOLD is the current decision — GO and ROLLBACK stay visible because all three remain available. */
const decisions = [
  { label: "GO", active: false },
  { label: "HOLD", active: true },
  { label: "ROLLBACK", active: false },
];

const waves = [
  { stage: "Wave 1 — done", scope: "US entities" },
  { stage: "Wave 2 — in progress", scope: "UK & Ireland" },
  { stage: "Wave 3 — planned", scope: "DACH region" },
];

export default function CutoverSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Cutover you control</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-9 text-slate-900">
              GO, HOLD or ROLLBACK — always a human decision
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              The cutover gate checks reconciliation, parallel verification, integrations and
              sign-off before any decision is enabled. Multi-entity programs roll out in waves, not
              all at once.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {decisions.map((decision) => (
                <li
                  key={decision.label}
                  aria-current={decision.active ? "true" : undefined}
                  className={`rounded-lg border px-4 py-3 text-center font-mono text-sm font-bold leading-5 ${
                    decision.active
                      ? "border-yellow-600 bg-orange-50 text-yellow-700"
                      : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  {decision.label}
                </li>
              ))}
            </ul>

            <ol className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {waves.map((wave) => (
                <li key={wave.stage} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    {wave.stage}
                  </p>
                  <p className="mt-1.5 text-sm leading-5 text-slate-900">{wave.scope}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/payroll-migration/cutover.png"
              alt="Program leads coordinating payroll migration waves across regions"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
