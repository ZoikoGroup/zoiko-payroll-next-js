import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const filters = ["Region: EMEA", "Filtered: open only"];

const columns = ["Object", "Scope", "Issue", "Owner", "Due", "Status"];

const queue: {
  object: string;
  scope: string;
  issue: string;
  owner: string;
  due: string;
  status: string;
  tone: ChipTone;
}[] = [
  {
    object: "run_DE-Salaried-01",
    scope: "Zoiko DE GmbH",
    issue: "Mapping remediation",
    owner: "l.hoffmann",
    due: "Aug 22",
    status: "Open",
    tone: "warn",
  },
  {
    object: "provider_UK-payroll-svc",
    scope: "Zoiko UK Ltd.",
    issue: "Delivery window missed",
    owner: "regional-ops",
    due: "Aug 20",
    status: "Escalated",
    tone: "blocked",
  },
  {
    object: "recon_FR-Aug",
    scope: "Zoiko FR SAS",
    issue: "Variance unexplained",
    owner: "f.nguyen",
    due: "Aug 25",
    status: "In review",
    tone: "info",
  },
];

const stats = [
  { value: "9", label: "Markets" },
  { value: "17", label: "Legal entities" },
  { value: "4", label: "Open exceptions" },
  { value: "3", label: "Pending approvals" },
  { value: "2", label: "Reconciliation items" },
  { value: "1", label: "Provider issues" },
];

export default function ControlCenterSection() {
  return (
    <section id="control-center" className="scroll-mt-24 border-t border-[#E3E7F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Group payroll control center"
            title="The strongest product proof on this page"
            description="Readiness matrix and attention queue — every item carries scope, owner and next action."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
              <h3 className="text-sm font-bold leading-6 text-slate-900">Attention queue</h3>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-500"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-4xl border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-slate-200 bg-gray-50 px-4 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queue.map((item, index) => {
                    const cellBorder = index < queue.length - 1 ? "border-b border-slate-200" : "";
                    return (
                      <tr key={item.object}>
                        <td
                          className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}
                        >
                          {item.object}
                        </td>
                        <td
                          className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {item.scope}
                        </td>
                        <td
                          className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}
                        >
                          {item.issue}
                        </td>
                        <td
                          className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {item.owner}
                        </td>
                        <td
                          className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {item.due}
                        </td>
                        <td className={`px-4 py-3 ${cellBorder}`}>
                          <StatusChip tone={item.tone}>{item.status}</StatusChip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-px border-t border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white px-3 py-6 text-center">
                  <p className="font-mono text-base font-bold leading-7 text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.625rem] leading-4 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
