import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusPill, { type AvailabilityState } from "./StatusPill";

const filters = ["All regions", "Jurisdiction type", "Availability state", "Service model"];

type Row = {
  market: string;
  type: string;
  region: string;
  service: string;
  effective: string;
  state: AvailabilityState;
  label: string;
};

const rows: Row[] = [
  {
    market: "United States",
    type: "Country",
    region: "North America",
    service: "Direct",
    effective: "Mar 2025 · Current",
    state: "available",
    label: "Available",
  },
  {
    market: "Germany",
    type: "Country",
    region: "Europe",
    service: "Direct",
    effective: "Jan 2026 · Current",
    state: "limited",
    label: "Limited",
  },
  {
    market: "Brazil",
    type: "Country",
    region: "South America",
    service: "Partner-supported",
    effective: "Nov 2025 · Due for review",
    state: "partner",
    label: "Partner-supported",
  },
  {
    market: "Puerto Rico",
    type: "Territory",
    region: "North America",
    service: "—",
    effective: "Future-dated",
    state: "planned",
    label: "Planned",
  },
  {
    market: "Curaçao",
    type: "Territory",
    region: "Caribbean",
    service: "—",
    effective: "Stale",
    state: "review",
    label: "Needs review",
  },
];

const columns = ["Market", "Type", "Region", "Service model", "Effective / freshness", "Status"];

export default function MarketIndexSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Directory workspace + market index</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 sm:text-3xl sm:leading-9 text-slate-900">
            The exhaustive, searchable market index
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-gray-700">
            Canonical A–Z sort by default. Table/card hybrid on desktop, readable cards on mobile.
            No popularity ranking.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-9">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-3.5">
              <ul className="flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                  <li
                    key={filter}
                    className={`rounded-full border px-3 py-1 text-xs font-medium leading-5 ${
                      index === 0
                        ? "border-slate-900 bg-cyan-950 text-white"
                        : "border-slate-200 bg-white text-gray-700"
                    }`}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
              <span className="text-xs leading-5 text-slate-500">184 results</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-slate-200 px-5 pb-3 pt-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                    <th scope="col" className="border-b border-slate-200 px-5">
                      <span className="sr-only">View market</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.market} className="border-b border-slate-200 last:border-b-0">
                      <th
                        scope="row"
                        className="px-5 py-4 text-xs font-bold leading-5 text-gray-700"
                      >
                        {row.market}
                      </th>
                      <td className="px-5 py-4 font-code text-xs leading-4 text-gray-700">
                        {row.type}
                      </td>
                      <td className="px-5 py-4 text-xs leading-5 text-gray-700">{row.region}</td>
                      <td className="px-5 py-4 font-code text-xs leading-4 text-gray-700">
                        {row.service}
                      </td>
                      <td className="px-5 py-4 font-code text-xs leading-4 text-gray-700">
                        {row.effective}
                      </td>
                      <td className="px-5 py-3.5">
                        <StatusPill state={row.state} label={row.label} />
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href="#market-summary"
                          className="text-xs font-semibold leading-5 text-gray-700 transition-colors duration-200 hover:text-blue-600"
                        >
                          View <span aria-hidden="true">→</span>
                          <span className="sr-only"> {row.market}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
