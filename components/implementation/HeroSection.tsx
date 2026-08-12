import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const heroPoints = [
  "Named implementation lead",
  "Parallel-tested before cutover",
  "40+ jurisdictions supported",
];

const stats = [
  { value: "9–14 wks", label: "Typical time to first live payroll run" },
  { value: "99.5%+", label: "Parallel-run accuracy threshold before cutover" },
  { value: "40+", label: "Jurisdictions supported in a single program" },
  { value: "1", label: "Dedicated implementation lead per program" },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-radial-[at_15%_-10%] from-blue-950 via-slate-900 to-slate-900"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <Eyebrow tone="light">Implementation &amp; migration</Eyebrow>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Migration is a controlled <span className="text-sky-600">workflow</span>, not a leap of
                faith
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
                Every move to Zoiko Payroll runs through seven gated stages — scoped, configured, tested
                against your existing numbers, and only cut over once the evidence clears. Nothing
                reaches production on a promise.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <span className="rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-900">
                  Book an implementation scoping call
                </span>
                <span className="rounded-lg border border-white/30 px-4 py-2.5 text-center text-sm font-semibold text-white">
                  Download the migration guide
                </span>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {heroPoints.map((point) => (
                  <li key={point} className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0px_20px_60px_-20px_rgba(10,27,51,0.35)] backdrop-blur-[3px]">
                <img
                  src="/images/implementation/hero.png"
                  alt="Implementation program board tracking a payroll migration"
                  loading="lazy"
                  className="h-72 w-full object-cover sm:h-96 lg:h-[482px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-blue-900/50 px-5 py-4 backdrop-blur-sm">
                  <div className="h-1.5 w-full overflow-hidden rounded-md bg-white/10">
                    <div className="h-1.5 w-[71%] rounded-md bg-linear-to-r from-blue-600 to-blue-300" />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-xs text-white">
                    <span>Program progress — 71%</span>
                    <span>Updated 4 min ago</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-blue-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`px-5 py-5 ${
                index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""
              } ${index === 2 ? "sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l" : ""}`}
            >
              <p className="text-xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-1 text-xs leading-4 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
