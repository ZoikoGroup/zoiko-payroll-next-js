import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const readiness = [
  { label: "16 Ready", dot: "bg-emerald-400" },
  { label: "6 In progress", dot: "bg-amber-400" },
  { label: "1 Blocked", dot: "bg-red-400" },
];

const stats = [
  { label: "In scope", value: "24" },
  { label: "Ready", value: "16" },
  { label: "Needs review", value: "4", valueClass: "text-amber-400" },
  { label: "Approval pending", value: "2" },
  { label: "Blocked", value: "1", valueClass: "text-red-400" },
  { label: "Integration attn.", value: "1", valueClass: "text-amber-400" },
];

const columns = ["Payroll group", "Entity", "Owner", "Cutoff", "Stage", "Status"];

const rows = [
  {
    group: "US-Salaried",
    entity: "Acme US LLC",
    owner: "M. Ortiz",
    cutoff: "Apr 12",
    stage: "Approve",
    status: "Ready",
    statusClass: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40",
  },
  {
    group: "DE-Standard",
    entity: "Acme DE GmbH",
    owner: "L. Faber",
    cutoff: "Apr 14",
    stage: "Validate",
    status: "Needs review",
    statusClass: "bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/40",
  },
  {
    group: "SG-All Staff",
    entity: "Acme APAC Pte",
    owner: "R. Tan",
    cutoff: "Apr 10",
    stage: "Calculate",
    status: "Blocked",
    statusClass: "bg-red-500/20 text-red-300 ring-1 ring-red-400/40",
  },
];

const proofTiles = [
  { value: "One view", label: "Not one universal source of truth" },
  { value: "Every scope", label: "Has a named owner, always" },
  { value: "Every blocker", label: "Carries a next permitted action" },
  { value: "Scope-bound", label: "Central visibility ≠ local approval rights" },
];

/** Portfolio readiness ring — 67% of a 2πr circumference, drawn from 12 o'clock. */
function ReadinessRing() {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg viewBox="0 0 87 87" className="h-22 w-22 shrink-0" role="img" aria-label="67% portfolio readiness">
      <circle cx="43.5" cy="43.5" r={radius} fill="none" stroke="#1E3A5C" strokeWidth="7" />
      <circle
        cx="43.5"
        cy="43.5"
        r={radius}
        fill="none"
        stroke="#5AB0F0"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${circumference * 0.67} ${circumference}`}
        transform="rotate(-90 43.5 43.5)"
      />
      <text
        x="43.5"
        y="43.5"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white text-[17px] font-bold"
      >
        67%
      </text>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] py-14 sm:py-16">
      <div
        className="absolute inset-0 bg-radial-[at_50%_0%] from-sky-500/20 to-transparent to-70%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow tone="light" center>
            Centralized payroll operations
          </Eyebrow>
          <h1 className="mx-auto mt-5 max-w-4xl text-2xl font-extrabold leading-tight break-words text-white sm:text-3xl lg:text-4xl">
            Centralize Payroll Operations Without Losing{" "}
            <span className="text-sky-400">Local Control</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-6 text-white/75">
            Coordinate payroll teams, entities, payroll groups, deadlines, exceptions and approvals
            from one controlled operating view — while the right people stay accountable for each
            payroll scope.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/45">
            Central oversight does not automatically transfer local payroll authority. Roles,
            approvals, configurations and system-of-record responsibilities remain scope-bound.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#082F49] transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#find-your-path"
              className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Find your solution
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E2340]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <h2 className="text-sm font-bold leading-6 text-white">
                Payroll Operations Control Center
              </h2>
              <span className="font-mono text-xs leading-4 text-white/50">
                Acme Group · Apr 2026
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 border-b border-white/10 px-5 py-5">
              <ReadinessRing />
              <div>
                {readiness.map((item) => (
                  <p key={item.label} className="flex items-center gap-2 py-0.5 text-sm text-white/85">
                    <span className={`size-1.5 rounded-full ${item.dot}`} aria-hidden="true" />
                    {item.label}
                  </p>
                ))}
                <p className="mt-2 text-xs leading-4 text-white/45">
                  Portfolio readiness · Apr 2026
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0E2340] px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase leading-4 text-white/50">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-1 text-lg font-extrabold leading-7 ${stat.valueClass ?? "text-white"}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-y border-white/10 px-5 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-white/50"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.group}>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/90">
                        {row.group}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.entity}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.owner}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.cutoff}
                      </td>
                      <td className="border-b border-white/10 px-5 py-3 text-xs leading-5 text-white/70">
                        {row.stage}
                      </td>
                      <td className="border-b border-white/10 px-5 py-2.5">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-xs leading-4 ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
              <span className="text-xs leading-5 text-white/50">
                Freshness: refreshed 3 minutes ago
              </span>
              <span className="text-xs leading-5 text-white/50">
                Scope: 24 of 24 payroll groups shown
              </span>
            </div>

            <div className="grid grid-cols-1 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {proofTiles.map((tile) => (
                <div key={tile.value} className="bg-[#123055] px-5 py-5">
                  <p className="text-base font-extrabold leading-6 text-white">{tile.value}</p>
                  <p className="mt-1.5 text-xs leading-5 text-white/60">{tile.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
