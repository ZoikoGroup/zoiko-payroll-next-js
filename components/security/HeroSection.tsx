import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const proofPoints = ["Evidence-backed, not badge-based", "Server-authorized, always"];

const stats = [
  { value: "42", label: "Active identities" },
  { value: "6", label: "Privileged roles" },
  { value: "98%", label: "MFA-enforced sessions" },
  { value: "2", label: "Open access reviews" },
  { value: "14", label: "Events, last 24h" },
];

const reviewQueue = [
  { item: "Finance export role — quarterly", status: "Due", statusClass: "bg-amber-50 text-amber-600" },
  { item: "Integration admin — Q3 review", status: "In progress", statusClass: "bg-blue-50 text-blue-600" },
  { item: "Payroll approver — annual", status: "Complete", statusClass: "bg-green-50 text-green-600" },
];

const activity = [
  { event: "Role granted — j.alvarez", at: "12m ago" },
  { event: "Session revoked — m.chen", at: "3h ago" },
  { event: "Export approved — finance-team", at: "Aug 14" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-14 sm:py-16">
      <div
        className="absolute inset-0 bg-radial-[at_80%_0%] from-blue-500/25 to-transparent to-60%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Security &amp; trust</Eyebrow>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white">
              Protect payroll with clear access, decision and evidence controls.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-6 text-white/75">
              Who can access payroll, what they can do, which decisions require separate authority, and
              how material actions are recorded — made visible, not assumed.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#security-architecture"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Review security controls
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5">
              {proofPoints.map((point) => (
                <span key={point} className="flex items-center gap-1.5 text-xs leading-5 text-white/60">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/security/hero.png"
              alt="Payroll dashboard showing protected access controls"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111D38]">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                  Zoiko US Inc.
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                  Org-wide scope
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-white/80">
                Updated 12m ago
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#111D38] px-5 py-5 text-center">
                  <p className="text-2xl font-bold leading-8 text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-4 text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-white/10 px-5 py-5 lg:border-r">
                <p className="font-mono text-xs uppercase leading-4 tracking-wide text-white/50">
                  Access review queue
                </p>
                <div className="mt-3">
                  {reviewQueue.map((row, index) => (
                    <div
                      key={row.item}
                      className={`flex items-center justify-between gap-3 py-2.5 ${
                        index < reviewQueue.length - 1 ? "border-b border-white/10" : ""
                      }`}
                    >
                      <span className="text-xs leading-5 text-white/90">{row.item}</span>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold leading-4 ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-5 lg:border-t-0">
                <p className="font-mono text-xs uppercase leading-4 tracking-wide text-white/50">
                  Recent security activity
                </p>
                <div className="mt-3">
                  {activity.map((row, index) => (
                    <div
                      key={row.event}
                      className={`flex items-center justify-between gap-3 py-2.5 ${
                        index < activity.length - 1 ? "border-b border-white/10" : ""
                      }`}
                    >
                      <span className="text-xs leading-5 text-white/90">{row.event}</span>
                      <span className="shrink-0 rounded-md bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-600">
                        {row.at}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
