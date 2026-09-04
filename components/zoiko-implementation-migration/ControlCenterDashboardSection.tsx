import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const statCards = [
  { value: "18", label: "Programs", color: "text-sky-950" },
  { value: "5", label: "Waves", color: "text-sky-950" },
  { value: "7", label: "Gates due", color: "text-orange-700" },
  { value: "3", label: "Blocked scopes", color: "text-orange-700" },
  { value: "4", label: "Migration issues", color: "text-orange-700" },
  { value: "2", label: "Validation failures", color: "text-orange-700" },
  { value: "6", label: "Awaiting decision", color: "text-sky-950" },
  { value: "2", label: "Stabilizing", color: "text-sky-950" },
];

const filters = [
  "Phase ▾",
  "Wave ▾",
  "Jurisdiction ▾",
  "Entity ▾",
  "Payroll group ▾",
  "Owner ▾",
  "Readiness state ▾",
  "Blocker type ▾",
];

const programs = [
  {
    id: "PRG-1042",
    wave: "Nordics · W3",
    jurisdictions: "SE, NO, DK — 3 entities",
    window: "Q1 2027",
    phase: "Parallel Run",
    readiness: { label: "Ready", style: "bg-gray-200 text-gray-600 outline-neutral-300" },
    owner: "A. Lindqvist",
    gate: "Parallel Run sign-off",
  },
  {
    id: "PRG-1039",
    wave: "APAC · W3",
    jurisdictions: "SG, JP — 2 entities",
    window: "Q1 2027",
    phase: "Prepare / Migrate",
    readiness: { label: "Blocked", style: "bg-rose-200 text-pink-800 outline-rose-300" },
    owner: "R. Tanaka",
    gate: "Migration gate",
  },
  {
    id: "PRG-1031",
    wave: "LATAM · W2",
    jurisdictions: "MX, BR — 4 entities",
    window: "Q4 2026",
    phase: "Launch",
    readiness: { label: "Awaiting decision", style: "bg-orange-100 text-yellow-700 outline-orange-200" },
    owner: "C. Alvarez",
    gate: "Launch decision",
  },
  {
    id: "PRG-1022",
    wave: "DACH · W1",
    jurisdictions: "DE, AT — 2 entities",
    window: "Live",
    phase: "Stabilize / Optimize",
    readiness: { label: "Stabilizing", style: "bg-gray-200 text-gray-600 outline-neutral-300" },
    owner: "M. Weber",
    gate: "First-cycle review",
  },
];

export default function ControlCenterDashboardSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 h-5">
              <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Implementation control center
              </span>
            </div>
            <h2 className="pt-3.5 text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
              The primary proof surface for every program
            </h2>
            <p className="mt-4 max-w-xl text-[#5B646B] text-base font-normal font-['Inter'] leading-6">
              Real operational visibility — not a decorative screenshot. Status
              is always shown as text and icon, never hidden behind a score.
            </p>
          </div>
        </Reveal>

        {/* Stat cards */}
        <Reveal delay={60} className="mt-8">
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-neutral-100 p-4 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                <span className={`block text-2xl font-extrabold leading-10 ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold leading-5 text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={80} className="mt-3.5">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <span
                key={f}
                className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay={100} className="mt-5">
          <div className="overflow-hidden rounded-xl bg-neutral-100 outline outline-1 outline-offset-[-1px] outline-slate-200">
            {/* Header */}
            <div className="flex">
              {["Program", "Wave", "Jurisdictions / entities", "Target window", "Phase", "Readiness", "Owner", "Next gate"].map((h) => (
                <div key={h} className="bg-indigo-50 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-sky-950">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {programs.map((p) => (
              <div key={p.id} className="flex border-t border-slate-200">
                <div className="w-24 px-3.5 py-3.5">
                  <span className="text-xs font-bold text-sky-950">{p.id}</span>
                </div>
                <div className="w-28 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{p.wave}</span>
                </div>
                <div className="w-48 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{p.jurisdictions}</span>
                </div>
                <div className="w-36 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{p.window}</span>
                </div>
                <div className="w-40 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{p.phase}</span>
                </div>
                <div className="w-40 px-3.5 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold outline outline-1 outline-offset-[-1px] ${p.readiness.style}`}>
                    {p.readiness.label}
                  </span>
                </div>
                <div className="w-28 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{p.owner}</span>
                </div>
                <div className="w-40 px-3.5 py-3.5">
                  <span className="text-xs text-sky-950">{p.gate}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Note */}
        <Reveal delay={120} className="mt-4">
          <div className="rounded-[10px] bg-indigo-50 p-4 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <span className="text-sm font-bold text-sky-950">
              Detail drawer (per program):
            </span>
            <span className="text-sm text-sky-950">
              {" "}
              scope manifest, workstreams, migration packages, validation,
              variances, gate evidence, decisions, cutover, stabilization and
              full history. Bulk actions are limited to low-risk coordination —
              bulk GO, approval, migration acceptance or rollback are never
              available.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
