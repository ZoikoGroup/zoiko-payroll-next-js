import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const heroPoints = [
  "Explicit direction",
  "Versioned mappings",
  "Monitored failures",
  "Recorded changes",
];

const stats = [
  { value: "14", label: "Connected" },
  { value: "2", label: "Needs attention" },
  { value: "3", label: "Setup in progress" },
  { value: "6m", label: "Last activity" },
];

const connections = [
  {
    code: "HR",
    codeClass: "bg-blue-600",
    name: "HRIS · Workforce",
    direction: "Inbound",
    status: "Connected",
    statusClass: "bg-green-600/20 text-emerald-300",
    time: "2m ago",
  },
  {
    code: "FN",
    codeClass: "bg-indigo-600",
    name: "Finance · ERP",
    direction: "Outbound",
    status: "Needs attention",
    statusClass: "bg-yellow-700/20 text-orange-300",
    time: "1h ago",
  },
  {
    code: "TA",
    codeClass: "bg-green-600",
    name: "Time & Attendance",
    direction: "Inbound",
    status: "Connected",
    statusClass: "bg-green-600/20 text-emerald-300",
    time: "14m ago",
  },
  {
    code: "PY",
    codeClass: "bg-yellow-700",
    name: "Payment Systems",
    direction: "Event notif.",
    status: "Setup",
    statusClass: "bg-blue-500/20 text-blue-300",
    time: "—",
  },
  {
    code: "ID",
    codeClass: "bg-gray-700",
    name: "Identity & Access",
    direction: "Bidirectional",
    status: "Connected",
    statusClass: "bg-green-600/20 text-emerald-300",
    time: "6m ago",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
      <img
        src="/images/integrations/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-luminosity"
      />
      <div
        className="absolute inset-0 bg-radial-[at_85%_-10%] from-blue-500/30 to-blue-500/0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Payroll Integrations &amp; Interoperability</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Connect payroll to the systems your business already uses.
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-7 text-white/80">
              Connect Zoiko Payroll with approved workforce, finance, time, payment, identity and
              developer systems through controlled integrations that keep data direction, mappings,
              runtime status and ownership visible.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <span className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white">
                See the Integration Hub
              </span>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6">
              {heroPoints.map((point) => (
                <li key={point} className="inline-flex items-center gap-2 text-xs leading-5 text-white/60">
                  <span className="h-[5px] w-[5px] shrink-0 rounded-xs bg-blue-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-[0px_30px_80px_-20px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3.5">
                <span className="text-xs leading-4 text-white/60">integration-hub · production</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-semibold leading-4 text-white/80">
                  Synthetic data
                </span>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`px-3 py-3.5 ${index < 3 ? "sm:border-r sm:border-white/10" : ""} ${
                      index % 2 === 0 ? "border-r border-white/10 sm:border-r" : ""
                    } ${index < 2 ? "border-b border-white/10 sm:border-b-0" : ""}`}
                  >
                    <p className="text-xl font-bold leading-8 text-white">{stat.value}</p>
                    <p className="text-xs leading-4 text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-2">
                {connections.map((connection) => (
                  <div
                    key={connection.code}
                    className="flex items-center gap-3 rounded-lg px-2.5 py-2.5"
                  >
                    <span className="flex w-36 shrink-0 items-center gap-2.5">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-bold leading-4 text-white ${connection.codeClass}`}
                      >
                        {connection.code}
                      </span>
                      <span className="text-xs font-medium leading-5 text-white">{connection.name}</span>
                    </span>
                    <span className="hidden w-28 shrink-0 text-xs leading-4 text-white/50 sm:block">
                      {connection.direction}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.75 text-xs font-semibold leading-4 ${connection.statusClass}`}
                    >
                      ● {connection.status}
                    </span>
                    <span className="flex-1 text-right text-xs leading-4 text-white/40">
                      {connection.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
