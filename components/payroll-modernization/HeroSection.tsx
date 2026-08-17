import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const proofPoints = [
  "Controlled migration",
  "Parallel validation",
  "Role-based approvals",
  "Recorded decisions",
];

const stats = [
  { value: "Validate", label: "Current stage", mono: true },
  { value: "6", label: "Workstreams", mono: true },
  { value: "2", label: "Blockers", mono: true },
  { value: "87%", label: "Migration reconciled" },
  { value: "Gate 6", label: "Next decision", mono: true },
];

const workstreams = [
  { item: "Data", status: "On track", statusClass: "bg-emerald-50 text-green-600" },
  { item: "Configuration", status: "On track", statusClass: "bg-emerald-50 text-green-600" },
  { item: "Validation", status: "In progress", statusClass: "bg-indigo-50 text-blue-600" },
];

const blockers = [
  { item: "GB mapping remediation", status: "Open", statusClass: "bg-orange-100 text-yellow-700" },
  { item: "Finance sign-off pending", status: "Open", statusClass: "bg-orange-100 text-yellow-700" },
];

const gate = [
  { item: "Parallel run sign-off", status: "Due Aug 28", statusClass: "bg-indigo-50 text-blue-600" },
  { item: "Approver: transformation lead", status: "m.chen", mono: true },
];

type Panel = {
  title: string;
  rows: { item: string; status: string; statusClass?: string; mono?: boolean }[];
};

const panels: Panel[] = [
  { title: "Workstreams", rows: workstreams },
  { title: "Blocker queue", rows: blockers },
  { title: "Next gate", rows: gate },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-14 sm:py-16">
      <img
        src="/images/payroll-modernization/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0 bg-radial-[at_75%_0%] from-blue-500/25 to-transparent to-65%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Payroll modernization</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white">
              Modernize payroll without losing control
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-white/75">
              Governed transformation through controlled data preparation, validation, parallel
              testing, cutover and continuous improvement — never a rip-and-replace leap of faith.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#find-your-solution"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-1.5 text-xs leading-5 text-white/60"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                    aria-hidden="true"
                  />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/payroll-modernization/hero.png"
              alt="Payroll and transformation leads reviewing modernization progress together"
              className="h-72 w-full rounded-2xl object-cover sm:h-80"
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111D38]">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                  Wave 2 · US &amp; GB
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                  Target: Oct 2026
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                Updated 2h ago
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#111D38] px-5 py-5 text-center">
                  <p
                    className={`text-xl font-bold leading-8 text-white ${stat.mono ? "font-mono" : ""}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-4 text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {panels.map((panel, panelIndex) => (
                <div
                  key={panel.title}
                  className={`border-white/10 px-5 py-5 ${
                    panelIndex < panels.length - 1 ? "border-b lg:border-r lg:border-b-0" : ""
                  }`}
                >
                  <p className="font-mono text-xs uppercase leading-4 tracking-wide text-white/50">
                    {panel.title}
                  </p>
                  <div className="mt-3">
                    {panel.rows.map((row, index) => (
                      <div
                        key={row.item}
                        className={`flex items-center justify-between gap-3 py-2.5 ${
                          index < panel.rows.length - 1 ? "border-b border-white/10" : ""
                        }`}
                      >
                        <span className="text-xs leading-5 text-white/90">{row.item}</span>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold leading-4 ${
                            row.mono
                              ? "bg-slate-50 font-mono font-normal text-slate-600"
                              : row.statusClass
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
