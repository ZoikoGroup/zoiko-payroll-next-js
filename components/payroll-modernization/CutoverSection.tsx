import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const facts = [
  { label: "Authority", value: "r.patel — Sponsor" },
  { label: "Criteria met", value: "11 of 12" },
  { label: "Impact window", value: "Aug 16, 00:00–06:00 UTC" },
];

export default function CutoverSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-16 sm:py-20">
      <img
        src="/images/payroll-modernization/cutover-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0 bg-radial-[at_20%_0%] from-blue-500/20 to-transparent to-65%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Cutover, launch &amp; stabilization</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white">
            A governed decision — never a countdown
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-6 text-white/70">
            Named authority, explicit criteria and recorded evidence behind every GO, HOLD or
            ROLLBACK.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-9">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-lg border border-green-500/30 bg-emerald-500/15 px-3.5 py-1.5 font-mono text-sm font-bold leading-5 text-green-400">
                GO
              </span>
              <span className="rounded-md border border-white/10 bg-white/10 px-3 py-1 font-mono text-xs leading-4 text-white/70">
                Decision recorded Aug 15, 14:00 UTC
              </span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs leading-4 text-white/50">{fact.label}</p>
                  <p className="mt-1.5 font-mono text-sm leading-5 text-white/90">{fact.value}</p>
                </div>
              ))}
              <div>
                <p className="text-xs leading-4 text-white/50">Evidence</p>
                <Link
                  href="#validation"
                  className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-sm leading-5 text-blue-300 transition-colors duration-200 hover:text-white"
                >
                  Parallel-run sign-off <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
