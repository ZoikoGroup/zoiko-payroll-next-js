import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip from "./StatusChip";

const meta = [
  { label: "Entity", value: "Acme GmbH" },
  { label: "Currency", value: "EUR" },
  { label: "Version", value: "v3" },
  { label: "Status", value: "Approved" },
];

const rows: { label: string; status: string; tone: "ok" | "warn" }[] = [
  { label: "Reconciliation", status: "Partial", tone: "warn" },
  { label: "Variance vs prior period", status: "Explained", tone: "warn" },
  { label: "Export to ERP", status: "Accepted", tone: "ok" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#F4F8FB] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Finance teams</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-sky-950 sm:text-5xl">
              Payroll outcomes finance can review, reconcile and defend.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-6 text-gray-600">
              Scoped totals, explainable variance and reconciliation evidence —
              connected to your finance and ERP systems without handing finance
              unnecessary employee-level detail.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-[10px] bg-linear-70 from-sky-700 to-blue-400 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_26px_-10px_rgba(20,131,199,0.55)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#find-your-solution"
                className="flex min-h-11 items-center justify-center rounded-[10px] border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* Outer wrapper carries the floating pills so the panel can still clip its own art. */}
            <div className="relative">
              <span className="absolute -top-3.5 right-6 z-10 inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold leading-4 text-sky-950 shadow-[0_16px_34px_-10px_rgba(0,0,0,0.35)]">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-700"
                  aria-hidden="true"
                />
                Approved · v3
              </span>
              <span className="absolute -bottom-3.5 left-4 z-10 inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold leading-4 text-sky-950 shadow-[0_16px_34px_-10px_rgba(0,0,0,0.35)]">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-700"
                  aria-hidden="true"
                />
                Variance: needs review
              </span>

              <div className="relative overflow-hidden rounded-3xl px-5 py-6 sm:px-6">
                <img
                  src="/images/finance-teams/hero-bg.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-linear-68 from-slate-900/88 via-sky-950/80 via-55% to-sky-600/55"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 bg-sky-950 px-3.5 py-2.5">
                    <span
                      className="h-2 w-2 rounded-sm bg-white/25"
                      aria-hidden="true"
                    />
                    <span
                      className="h-2 w-2 rounded-sm bg-white/25"
                      aria-hidden="true"
                    />
                    <span
                      className="h-2 w-2 rounded-sm bg-white/25"
                      aria-hidden="true"
                    />
                    <p className="pl-2 text-xs font-semibold leading-4 text-white/70">
                      Finance Payroll Oversight Center — DE-01, Apr 2026
                    </p>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {meta.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2"
                        >
                          <p className="text-[0.55rem] font-bold uppercase leading-3 tracking-wide text-gray-400">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-xs font-bold leading-4 text-sky-950">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[10px] bg-sky-950 px-4 py-3.5">
                      <div>
                        <p className="text-xs leading-4 text-white/60">
                          Total payroll, net
                        </p>
                        <p className="mt-0.5 font-mono text-xl font-extrabold leading-8 text-white">
                          €412,908.44
                        </p>
                      </div>
                      <StatusChip tone="ok">Approved</StatusChip>
                    </div>

                    <div className="mt-4">
                      {rows.map((row, index) => (
                        <div
                          key={row.label}
                          className={`flex flex-wrap items-center justify-between gap-3 py-2 ${
                            index < rows.length - 1
                              ? "border-b border-slate-200"
                              : ""
                          }`}
                        >
                          <span className="text-xs leading-5 text-sky-950">
                            {row.label}
                          </span>
                          <StatusChip tone={row.tone}>{row.status}</StatusChip>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
