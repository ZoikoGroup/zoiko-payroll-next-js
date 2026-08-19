import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const columns = ["Payroll group / period", "Stage", "Issue", "Owner", "Due", "Next action"];

const queue: {
  group: string;
  stage: string;
  issue: string;
  owner: string;
  due: string;
  action: string;
  tone: ChipTone;
}[] = [
  {
    group: "Salaried — Aug 1–15",
    stage: "Review",
    issue: "Variance +2.1%",
    owner: "j.alvarez",
    due: "Aug 14",
    action: "Mark reviewed",
    tone: "info",
  },
  {
    group: "Hourly — Aug 1–15",
    stage: "Validate",
    issue: "Time source stale",
    owner: "it-integrations",
    due: "Aug 13",
    action: "Refresh source",
    tone: "warn",
  },
  {
    group: "Contractor — Aug 1–15",
    stage: "Approve",
    issue: "Reapproval required",
    owner: "m.chen",
    due: "Aug 14",
    action: "Re-review",
    tone: "blocked",
  },
  {
    group: "Retail — Jul 16–31",
    stage: "Complete",
    issue: "—",
    owner: "system",
    due: "—",
    action: "Reconciled",
    tone: "ok",
  },
];

export default function ControlCenterSection() {
  return (
    <section id="control-center" className="scroll-mt-24 border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Payroll team control center"
            title="The primary product-proof module."
            descriptionClassName="max-w-none lg:whitespace-nowrap"
            description="Readiness hierarchy: payroll group → stage → issue → owner → due date → next action."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-gray-50 px-5 py-4">
              <h3 className="text-sm font-bold leading-6 text-slate-900">Work queue</h3>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-500">
                Recent material activity: 12 events, last 24h
              </span>
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
                  {queue.map((row, index) => {
                    const cellBorder = index < queue.length - 1 ? "border-b border-slate-200" : "";
                    return (
                      <tr key={row.group}>
                        <td className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}>
                          {row.group}
                        </td>
                        <td
                          className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.stage}
                        </td>
                        <td className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}>
                          {row.issue}
                        </td>
                        <td
                          className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.owner}
                        </td>
                        <td
                          className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                        >
                          {row.due}
                        </td>
                        <td className={`px-4 py-3 ${cellBorder}`}>
                          <StatusChip tone={row.tone}>{row.action}</StatusChip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
