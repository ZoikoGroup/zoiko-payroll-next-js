import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Processing area", "Region status", "Evidence"];

const areas = [
  { area: "Primary payroll data storage", status: "Contract-scoped", evidence: "Trust Center" },
  { area: "Backup & recovery", status: "Contract-scoped", evidence: "Trust Center" },
  { area: "Third-party subprocessing", status: "Per subprocessor", evidence: "Subprocessor list" },
];

export default function DataResidencySection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Data residency &amp; regional processing</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
            Scoped evidence links, not a decorative map
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-700">
            Regions are stated only when operational and contractually approved — storage region does not
            automatically mean all processing stays in-region.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-11">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-2xl border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  {columns.map((column, index) => (
                    <th
                      key={column}
                      scope="col"
                      className={`border-b border-slate-200 px-5 py-3.5 text-xs font-bold leading-4 text-gray-700 ${
                        index === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {areas.map((row) => (
                  <tr key={row.area} className="border-b border-slate-200 last:border-b-0">
                    <th
                      scope="row"
                      className="border-r border-slate-200 px-5 py-4 text-left text-sm font-semibold text-slate-900"
                    >
                      {row.area}
                    </th>
                    <td className="border-r border-slate-200 px-5 py-4 text-center text-xs font-bold text-red-600">
                      {row.status}
                    </td>
                    <td className="px-5 py-4 text-center text-sm text-slate-500">
                      {row.evidence} &rarr;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
