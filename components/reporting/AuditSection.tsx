import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const filters = ["All actions", "Report exports", "Approvals", "Corrections", "Access changes"];

const columns = ["Timestamp", "Actor", "Role", "Action", "Object", "Outcome"];

const events = [
  {
    timestamp: "Aug 15, 08:02 UTC",
    actor: "f.nguyen",
    role: "Finance",
    action: "Flagged reconciliation",
    object: "recon-0815-US",
    outcome: "Flagged",
    outcomeClass: "bg-orange-100 text-yellow-700",
  },
  {
    timestamp: "Aug 15, 07:41 UTC",
    actor: "system",
    role: "System",
    action: "Restated metric",
    object: "calc-v14",
    outcome: "Recorded",
    outcomeClass: "bg-gray-100 text-slate-600",
  },
  {
    timestamp: "Aug 14, 16:12 UTC",
    actor: "m.chen",
    role: "Payroll Admin",
    action: "Exported report",
    object: "outcome-summary",
    outcome: "Success",
    outcomeClass: "bg-emerald-100 text-emerald-800",
  },
  {
    timestamp: "Aug 14, 11:05 UTC",
    actor: "j.alvarez",
    role: "Reviewer",
    action: "Approved payroll run",
    object: "run_2026-07-31_US-01",
    outcome: "Approved",
    outcomeClass: "bg-emerald-100 text-emerald-800",
  },
];

export default function AuditSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Audit reports &amp; evidence</Eyebrow>
          <h2 className="mt-2.5 text-2xl font-extrabold leading-8 text-slate-900">
            Attributable platform actions — not a statutory filing record.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap gap-2 px-5 py-4">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold leading-4 ${
                    index === 0
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>

            <div className="overflow-x-auto">
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
                  {events.map((event) => (
                    <tr key={event.timestamp} className="border-t border-slate-200">
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.timestamp}</td>
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.actor}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-slate-900">{event.role}</td>
                      <td className="px-5 py-4 text-sm text-slate-700">{event.action}</td>
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.object}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${event.outcomeClass}`}
                        >
                          {event.outcome}
                        </span>
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
