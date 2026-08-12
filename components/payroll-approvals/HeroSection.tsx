import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const queueSummary = [
  { label: "Awaiting me", value: "4", valueClass: "text-sky-100" },
  { label: "Due soon", value: "2", valueClass: "text-orange-300" },
  { label: "Returned", value: "1", valueClass: "text-sky-100" },
  { label: "Approved (period)", value: "11", valueClass: "text-sky-100" },
  { label: "Blocked upstream", value: "1", valueClass: "text-rose-400" },
];

const queue = [
  {
    run: "RUN-2291 · v5 · US payroll",
    status: "Due today",
    statusClass: "bg-amber-600/20 text-orange-300",
    active: true,
  },
  { run: "RUN-2288 · v3 · GB payroll", status: "Awaiting me", statusClass: "bg-white/10 text-slate-300" },
  { run: "RUN-2279 · v2 · SG payroll", status: "Blocked", statusClass: "bg-red-700/20 text-red-300" },
  { run: "RUN-2266 · v4 · DE payroll", status: "Awaiting me", statusClass: "bg-white/10 text-slate-300" },
];

const selected = [
  { label: "Version", value: "v5" },
  { label: "Stage", value: "Finance Approval" },
  { label: "Review status", value: "Changes present" },
  { label: "Decision owner", value: "Finance Approver" },
];

const stats = [
  { value: "Human", label: "Every approval decided by an authorized person" },
  { value: "v-bound", label: "Every approval tied to a specific payroll version" },
  { value: "3 gates", label: "Review, approval and completion stay separate" },
  { value: "Server-side", label: "Self-approval and SoD conflicts blocked at commit" },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 py-14 sm:py-16">
        <div
          className="absolute inset-0 bg-radial-[at_85%_-10%] from-cyan-900 via-sky-950 to-slate-900"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <Eyebrow tone="light">Payroll approvals</Eyebrow>
              <h1 className="mt-4 text-4xl font-extrabold leading-10 text-white">
                Make Every Payroll <span className="text-sky-600">Approval</span> Clear and Accountable
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
                See what&rsquo;s ready, who holds decision rights, which version is under review, what
                changed since last sign-off, and whether an approval is still valid — before anyone
                decides.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="/payroll-processing"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-xs leading-5 text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore Payroll Processing →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0px_24px_60px_-20px_rgba(0,0,0,0.50)] backdrop-blur-[3px]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-xs font-bold leading-5 text-white">Approval Center</span>
                  <span className="font-mono text-xs leading-4 text-slate-400">
                    Acme US LLC · Apr 01–15, 2026
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="space-y-1.5 border-white/10 px-3.5 pt-3 pb-5 sm:border-r">
                    <p className="font-mono text-xs font-medium uppercase leading-4 tracking-wide text-slate-400">
                      Queue summary
                    </p>
                    {queueSummary.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2"
                      >
                        <span className="text-xs leading-4 text-sky-100">{item.label}</span>
                        <span className={`text-sm font-bold leading-5 ${item.valueClass}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-white/10 px-3.5 pt-3 pb-5 sm:border-r">
                    <p className="pb-2.5 font-mono text-xs font-medium uppercase leading-4 tracking-wide text-slate-400">
                      Approval queue
                    </p>
                    {queue.map((row) => (
                      <div
                        key={row.run}
                        className={`flex items-center justify-between gap-2 border-t border-white/10 py-2 ${
                          row.active ? "-mx-3.5 bg-blue-300/10 px-3.5" : ""
                        }`}
                      >
                        <span className="text-xs leading-4 text-slate-200">{row.run}</span>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold leading-4 ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="px-3.5 pt-3 pb-5">
                    <p className="pb-2 font-mono text-xs font-medium uppercase leading-4 tracking-wide text-slate-400">
                      Selected request
                    </p>
                    <dl className="space-y-2">
                      {selected.map((item) => (
                        <div key={item.label} className="flex items-end justify-between gap-2">
                          <dt className="text-xs leading-4 text-slate-300">{item.label}</dt>
                          <dd className="text-right text-xs font-semibold leading-4 text-white">
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-md bg-green-700 px-2 py-1.5 text-xs font-bold leading-4 text-white">
                        Approve
                      </span>
                      <span className="rounded-md border border-white/20 bg-white/10 px-2 py-1.5 text-xs font-bold leading-4 text-white">
                        Return
                      </span>
                      <span className="rounded-md border border-white/20 bg-white/10 px-2 py-1.5 text-xs font-bold leading-4 text-white">
                        Context
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-sky-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`px-5 py-5 ${index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""} ${
                index === 2 ? "sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l" : ""
              }`}
            >
              <p className="text-xl font-extrabold leading-8 text-white">{stat.value}</p>
              <p className="mt-0.5 text-xs leading-4 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
