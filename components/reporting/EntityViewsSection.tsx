import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = [
  "Entity",
  "Jurisdiction",
  "Population",
  "Frequency",
  "Gross payroll (local)",
  "Status",
];

const entities = [
  {
    entity: "Zoiko US Inc.",
    jurisdiction: "US",
    population: "1,284",
    frequency: "Semi-monthly",
    gross: "$2.41M",
    status: "Reconciled",
  },
  {
    entity: "Zoiko UK Ltd.",
    jurisdiction: "GB",
    population: "612",
    frequency: "Monthly",
    gross: "£1.02M",
    status: "Reconciled",
  },
  {
    entity: "Zoiko DE GmbH",
    jurisdiction: "DE",
    population: "398",
    frequency: "Monthly",
    gross: "€0.87M",
    status: "Needs review",
  },
  {
    entity: "Zoiko SG Pte.",
    jurisdiction: "SG",
    population: "204",
    frequency: "Monthly",
    gross: "S$0.61M",
    status: "Reconciled",
  },
];

export default function EntityViewsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Entity &amp; jurisdiction views</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            Comparison tables, not decorative maps.
          </h2>
          <p className="mt-2.5 text-base leading-6 text-gray-700">
            Local currency by default. Never a hidden performance or cost-quality ranking across
            entities.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-3.5 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {entities.map((row) => (
                  <tr key={row.entity} className="border-t border-slate-200">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left text-sm font-semibold text-slate-900"
                    >
                      {row.entity}
                    </th>
                    <td className="px-5 py-4 font-mono text-xs text-slate-500">{row.jurisdiction}</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-500">{row.population}</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-500">{row.frequency}</td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-500">{row.gross}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${
                          row.status === "Reconciled"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-orange-100 text-yellow-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            &#9432; Reported-currency mode available where enabled — shows conversion basis, rate date and
            source while preserving local values.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
