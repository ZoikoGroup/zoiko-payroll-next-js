import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const filters = ["All actions", "Role changes", "Approvals", "Exports", "Session events"];

const columns = ["Timestamp", "Actor", "Action", "Object", "Result"];

const events = [
  {
    timestamp: "Aug 15, 09:12 UTC",
    actor: "m.chen",
    action: "Session revoked",
    object: "session-88213",
    result: "Success",
    resultClass: "bg-emerald-100 text-emerald-800",
  },
  {
    timestamp: "Aug 15, 08:40 UTC",
    actor: "payroll-admin",
    action: "Role granted — Reviewer",
    object: "j.alvarez",
    result: "Success",
    resultClass: "bg-emerald-100 text-emerald-800",
  },
  {
    timestamp: "Aug 14, 16:12 UTC",
    actor: "f.nguyen",
    action: "Export approved",
    object: "outcome-summary",
    result: "Success",
    resultClass: "bg-emerald-100 text-emerald-800",
  },
  {
    timestamp: "Aug 14, 11:05 UTC",
    actor: "system",
    action: "Failed access attempt",
    object: "login",
    result: "Denied",
    resultClass: "bg-red-100 text-red-600",
  },
];

export default function AuditabilitySection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Auditability &amp; evidence workspace</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
            Attributable, filterable, permission-gated.
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-700">
            Not automatically immutable legal evidence unless separately verified for your service scope.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-11">
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
                  <tr className="bg-gray-50">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-y border-slate-200 px-5 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.timestamp} className="border-b border-slate-200">
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.timestamp}</td>
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.actor}</td>
                      <td className="px-5 py-4 text-sm text-slate-900">{event.action}</td>
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.object}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${event.resultClass}`}
                        >
                          {event.result}
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
