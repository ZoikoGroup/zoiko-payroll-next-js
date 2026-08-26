import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill, { type AvailabilityState } from "./StatusPill";

const samples: { market: string; meta: string; state: AvailabilityState; label: string }[] = [
  {
    market: "United States",
    meta: "Country · North America",
    state: "available",
    label: "Available",
  },
  {
    market: "Germany",
    meta: "Country · Europe",
    state: "limited",
    label: "Limited availability",
  },
  {
    market: "Brazil",
    meta: "Country · South America",
    state: "partner",
    label: "Partner-supported",
  },
  {
    market: "Puerto Rico",
    meta: "Territory · North America",
    state: "planned",
    label: "Planned",
  },
  {
    market: "Curaçao",
    meta: "Territory · Caribbean",
    state: "review",
    label: "Needs review",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow>Global Payroll Directory</Eyebrow>
            <h1 className="mt-3 text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 text-slate-900">
              Find payroll availability by country and territory
            </h1>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Search current status and documented scope by market, then open the authoritative
              coverage record before making a payroll or implementation decision.
            </p>

            <form
              className="mt-6 flex flex-col gap-1.5 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0px_8px_24px_-12px_rgba(8,19,43,0.15)] sm:flex-row"
              action="/global-payroll/country-territory-directory"
            >
              <label htmlFor="market-search" className="sr-only">
                Search country, territory, ISO code or alias
              </label>
              <input
                id="market-search"
                name="q"
                type="search"
                placeholder="Search country, territory, ISO code or alias…"
                className="min-w-0 flex-1 rounded-lg px-3.5 py-4 text-sm text-slate-900 placeholder:text-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Search directory
              </button>
            </form>

            <p className="mt-3 flex items-center gap-1.5 text-xs leading-5 text-slate-500">
              <span className="size-[5px] shrink-0 rounded-sm bg-green-600" aria-hidden="true" />
              Current status first. No email required to check public availability.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_20px_50px_-20px_rgba(8,19,43,0.15)]">
              <p className="border-b border-slate-200 bg-gray-50 px-4 py-3.5 font-code text-xs leading-4 text-slate-500">
                registry-driven · sample states
              </p>
              <ul>
                {samples.map((sample, index) => (
                  <li
                    key={sample.market}
                    className={`flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 ${
                      index < samples.length - 1 ? "border-b border-slate-200" : ""
                    }`}
                  >
                    <span>
                      <span className="block text-sm font-bold leading-5 text-slate-900">
                        {sample.market}
                      </span>
                      <span className="block text-xs leading-4 text-slate-500">{sample.meta}</span>
                    </span>
                    <StatusPill state={sample.state} label={sample.label} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
