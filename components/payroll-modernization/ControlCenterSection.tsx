import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const meta = ["Sponsor: r.patel", "Lead: m.chen", "Stage: Validate"];

const columns = ["Workstream", "Owner", "Stage", "Blockers", "Due", "Status"];

const rows = [
  {
    workstream: "Operating Model",
    owner: "r.patel",
    stage: "Design",
    blockers: "0",
    due: "Aug 20",
    status: "On track",
    statusClass: "bg-emerald-50 text-green-600",
  },
  {
    workstream: "Data",
    owner: "f.nguyen",
    stage: "Migrate",
    blockers: "1",
    due: "Aug 24",
    status: "At risk",
    statusClass: "bg-orange-100 text-yellow-700",
  },
  {
    workstream: "Configuration",
    owner: "j.alvarez",
    stage: "Validate",
    blockers: "0",
    due: "Aug 26",
    status: "On track",
    statusClass: "bg-emerald-50 text-green-600",
  },
  {
    workstream: "Integrations",
    owner: "it-integrations",
    stage: "Validate",
    blockers: "1",
    due: "Aug 27",
    status: "At risk",
    statusClass: "bg-orange-100 text-yellow-700",
  },
  {
    workstream: "Validation",
    owner: "m.chen",
    stage: "Parallel Run",
    blockers: "0",
    due: "Aug 28",
    status: "In progress",
    statusClass: "bg-indigo-50 text-blue-600",
  },
  {
    workstream: "Adoption",
    owner: "hr-team",
    stage: "Prepare",
    blockers: "0",
    due: "Sep 2",
    status: "On track",
    statusClass: "bg-emerald-50 text-green-600",
  },
];

const tiles = [
  { label: "Critical blockers", value: "2" },
  { label: "Migration reconciled", value: "87%" },
  { label: "Parallel-run progress", value: "3 of 4 cycles" },
  { label: "Pending decisions", value: "1" },
];

export default function ControlCenterSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Modernization control center</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            The strongest product proof on this page
          </h2>
          <p className="mt-2.5 max-w-2xl text-base leading-6 text-gray-700">
            Workstream status, blocker queue, decision log and the next gate — one governed view of
            the whole program.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
              <h3 className="text-sm font-bold leading-6 text-slate-900">
                Wave 2 — US &amp; GB Modernization
              </h3>
              <div className="flex flex-wrap gap-2">
                {meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-slate-200 px-4 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const cellBorder = index < rows.length - 1 ? "border-b border-slate-200" : "";
                    return (
                      <tr key={row.workstream}>
                        <td
                          className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}
                        >
                          {row.workstream}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.owner}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.stage}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.blockers}
                        </td>
                        <td
                          className={`px-4 py-3.5 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.due}
                        </td>
                        <td className={`px-4 py-3 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold leading-4 ${row.statusClass}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3.5 px-5 sm:grid-cols-2 lg:grid-cols-4">
              {tiles.map((tile) => (
                <div
                  key={tile.label}
                  className="rounded-xl border border-slate-200 bg-white px-4 pt-3.5 pb-4"
                >
                  <p className="text-xs leading-4 text-slate-500">{tile.label}</p>
                  <p className="mt-1.5 font-mono text-lg font-bold leading-7 text-slate-900">
                    {tile.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
