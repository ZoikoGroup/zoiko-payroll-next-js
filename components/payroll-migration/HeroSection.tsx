import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const contextChips = ["Wave 2", "All entities", "US, UK, DE", "Payroll data"];

const controlStats = [
  { value: "4", label: "Sources", tone: "text-white" },
  { value: "93%", label: "Mapped fields", tone: "text-emerald-300" },
  { value: "18", label: "Validation exceptions", tone: "text-amber-300" },
  { value: "HOLD", label: "Cutover gate", tone: "text-red-400" },
];

type StageState = "done" | "active" | "pending";

const stages: { label: string; state: StageState }[] = [
  { label: "Inventory", state: "done" },
  { label: "Mapping", state: "done" },
  { label: "Quality", state: "active" },
  { label: "Load", state: "pending" },
  { label: "Reconcile", state: "pending" },
  { label: "Verify", state: "pending" },
  { label: "Cutover", state: "pending" },
];

const stageClasses: Record<StageState, string> = {
  done: "border-green-400/30 bg-green-400/20 text-emerald-300",
  active: "border-blue-500 bg-sky-600 text-white",
  pending: "border-white/10 bg-white/5 text-slate-300",
};

const evidence = [
  { label: "Latest load", value: "Reconciled", note: "3 open exceptions" },
  { label: "Sources inventoried", value: "4 / 4", note: "HR, Time, Finance, Benefits" },
  { label: "Historical documents", value: "96%", note: "retrievable, representative test" },
  { label: "Evidence refreshed", value: "6 min ago", note: "Owner: M. Ortiz" },
];

/** Repeated below the control center as a plain summary strip for skim-readers. */
const summary = [
  { value: "4", label: "Sources in scope", tone: "text-slate-900" },
  { value: "93%", label: "Mapped fields", tone: "text-green-600" },
  { value: "18", label: "Validation exceptions", tone: "text-yellow-700" },
  { value: "HOLD", label: "Cutover gate", tone: "text-red-600" },
];

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Payroll migration</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900">
              Move payroll data without losing control
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-gray-700">
              Migrate approved payroll data, configuration and retained history through controlled
              mapping, validation, reconciliation and cutover.
            </p>

            <div className="mt-6 max-w-xl rounded-lg border border-l-[3px] border-slate-200 border-l-blue-600 bg-white px-4 py-4">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                Direct answer
              </p>
              <p className="mt-1.5 text-sm leading-5 text-slate-900">
                Zoiko Payroll gives migration teams one governed path from source inventory to
                verified target-state readiness.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-gradient-to-b from-[#3196D6] to-[#0E7CC5] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo{" "}
                <span aria-hidden="true" className="ml-1.5">
                  &rarr;
                </span>
              </Link>
              <Link
                href="#find-your-solution"
                className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/payroll-migration/hero.png"
                alt="Migration lead reviewing the payroll migration control center"
                className="h-72 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-lg bg-slate-900/60 px-3 py-2 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-xs leading-4 text-white">
                  <span className="size-2 shrink-0 rounded-sm bg-amber-300" aria-hidden="true" />
                  Cutover gate
                </span>
                <span className="text-xs font-bold leading-4 text-amber-300">HOLD</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1A33] px-5 py-6 sm:px-7 sm:py-8">
            <img
              src="/images/payroll-migration/control-center-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover brightness-150"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0B1A33]/25 to-[#0B1A33]/45"
              aria-hidden="true"
            />

            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-base font-bold leading-6 text-white">Migration Control Center</p>
                <p className="mt-1.5 text-xs leading-4 text-slate-400">
                  Program: Legacy Payroll &rarr; Zoiko Payroll &middot; synthetic sample data
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {contextChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs leading-4 text-slate-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {controlStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3.5"
                >
                  <p className={`text-xl font-bold leading-8 ${stat.tone}`}>{stat.value}</p>
                  <p className="mt-0.5 text-xs leading-4 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <ol className="relative mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-7">
              {stages.map((stage) => (
                <li
                  key={stage.label}
                  aria-current={stage.state === "active" ? "step" : undefined}
                  className={`rounded-lg border px-2 py-2 text-center text-xs font-semibold leading-4 ${stageClasses[stage.state]}`}
                >
                  {stage.label}
                </li>
              ))}
            </ol>

            <div className="relative mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {evidence.map((entry) => (
                <div
                  key={entry.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-3"
                >
                  <p className="text-xs uppercase leading-4 tracking-wide text-slate-400">
                    {entry.label}
                  </p>
                  <p className="mt-0.5 text-base font-bold leading-6 text-white">{entry.value}</p>
                  <p className="text-xs leading-4 text-slate-400">{entry.note}</p>
                </div>
              ))}
            </div>

            <p className="relative mt-4 text-xs leading-4 text-slate-400">
              Panels: Source inventory &middot; Mapping &middot; Batch ledger &middot; Reconciliation
              &middot; Gate status. No real customer or employee data; no unsupported connector
              logos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <div className="grid grid-cols-2 border-y border-slate-200 lg:grid-cols-4">
            {summary.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-2.5 py-6 text-center ${
                  index < summary.length - 1 ? "lg:border-r lg:border-slate-200" : ""
                }`}
              >
                <p className={`text-2xl font-bold leading-10 ${stat.tone}`}>{stat.value}</p>
                <p className="mt-1 text-xs leading-4 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
