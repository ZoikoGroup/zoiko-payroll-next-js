import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const columns = ["Actor", "Action", "Object / version", "Timestamp"];

const rows = [
  {
    actor: "R. Alves",
    action: "Uploaded evidence",
    object: "EVI-8841 · v3",
    timestamp: "2026-04-02 09:14",
  },
  {
    actor: "S. Goh",
    action: "Recorded decision",
    object: "D-2026-0409 · Approved Exception",
    timestamp: "2026-04-18 14:02",
  },
  {
    actor: "K. Feld",
    action: "Independent approval",
    object: "WF-2026-0412",
    timestamp: "2026-04-20 08:47",
  },
  {
    actor: "Export service",
    action: "Purpose-bound export",
    object: "SNAP-WF-2026-Q2",
    timestamp: "2026-04-21 17:30",
  },
];

const controls = [
  {
    title: "Least privilege",
    detail: "Role-, jurisdiction-, entity- and evidence-sensitivity permissions.",
  },
  { title: "Purpose-bound exports", detail: "Every export records requester and purpose." },
  { title: "Retention controls", detail: "Documented retention per evidence class." },
  { title: "Synthetic proof", detail: "Marketing screenshots never use real customer data." },
];

export default function AuditSecuritySection() {
  return (
    <section className="border-t border-slate-200 bg-[#F4F6FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="09"
            label="Audit & security"
            heading="Trust proof before conversion"
          >
            Every action is logged with actor, object, version and evidence linkage. Access follows
            least privilege, and public product proof uses synthetic data only.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-x-auto rounded-[10px] border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-gray-100 px-4 py-3 font-mono text-[10px] font-normal uppercase text-gray-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.object}
                    className={index < rows.length - 1 ? "border-b border-gray-100" : ""}
                  >
                    <th scope="row" className="px-4 py-3 text-xs font-normal text-gray-900">
                      {row.actor}
                    </th>
                    <td className="px-4 py-3 text-xs text-gray-900">{row.action}</td>
                    <td className="px-4 py-3 text-xs text-gray-900">{row.object}</td>
                    <td className="px-4 py-3 text-xs text-gray-900">{row.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-3.5">
          <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map((control) => (
              <li
                key={control.title}
                className="rounded-lg border border-slate-200 bg-white p-3.5"
              >
                <p className="text-xs font-bold text-gray-700">{control.title}</p>
                <p className="mt-1.5 text-xs leading-5 text-gray-700">{control.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
