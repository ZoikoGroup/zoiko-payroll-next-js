import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const meta = [
  { label: "Organization", value: "Nimbus Holdings" },
  { label: "Entity", value: "4 in scope" },
  { label: "Payroll group", value: "6 in scope" },
  { label: "Pay period", value: "Apr 1–15, 2026" },
  { label: "Reconciliation items", value: "2" },
  { label: "Connector health", value: "1 degraded" },
  { label: "Refreshed", value: "4 min ago" },
];

const summary = [
  { value: "4 / 6", label: "Runs on track", tone: "text-white" },
  { value: "2", label: "Needs attention", tone: "text-amber-300" },
  { value: "3", label: "Pending approvals", tone: "text-red-400" },
];

const columns = ["Entity", "Group", "Stage", "Owner", "Cutoff", "Exceptions", "Status"];

const runs = [
  {
    entity: "Nimbus US LLC",
    group: "US-Salaried",
    stage: "Approve",
    owner: "M. Ortiz",
    cutoff: "Apr 12",
    exceptions: "0",
    status: "Ready",
    statusClass: "bg-green-400/20 text-emerald-300",
  },
  {
    entity: "Nimbus US LLC",
    group: "US-Hourly",
    stage: "Review",
    owner: "M. Ortiz",
    cutoff: "Apr 12",
    exceptions: "2",
    status: "Needs review",
    statusClass: "bg-amber-300/20 text-orange-300",
  },
  {
    entity: "Nimbus Retail Co",
    group: "Retail-Hourly",
    stage: "Validate",
    owner: "L. Faber",
    cutoff: "Apr 13",
    exceptions: "1",
    status: "Needs review",
    statusClass: "bg-amber-300/20 text-orange-300",
  },
  {
    entity: "Nimbus Services Inc",
    group: "Services-Salaried",
    stage: "Approve",
    owner: "S. Kim",
    cutoff: "Apr 14",
    exceptions: "0",
    status: "Ready",
    statusClass: "bg-green-400/20 text-emerald-300",
  },
];

const attentionQueue = [
  {
    title: "Payroll record #8821 — Deduction flagged for review",
    owner: "Owner: M. Ortiz",
    action: "Review & confirm",
  },
  {
    title: "T. Nguyen — Overtime pending sign-off",
    owner: "Owner: L. Faber",
    action: "Escalate",
  },
];

const bottlenecks = [
  {
    title: "Approve · US-Salaried",
    approver: "M. Ortiz",
    pending: "Pending 1 day",
    escalation: "Escalation: Ops Admin",
  },
  {
    title: "Approve · Services-Salaried",
    approver: "S. Kim",
    pending: "Pending 3 days",
    escalation: "Escalation: Ops Admin",
  },
];

const legend = [
  { label: "Success", dot: "bg-green-400" },
  { label: "Needs review", dot: "bg-amber-300" },
  { label: "Partial failure", dot: "bg-red-400" },
  { label: "Permission denied", dot: "bg-slate-400" },
  { label: "Error", dot: "bg-red-500" },
  { label: "Locked / unavailable", dot: "bg-slate-500" },
  { label: "Stale / superseded", dot: "bg-slate-400" },
  { label: "Loading", dot: "bg-blue-500" },
];

export default function ControlCenterSection() {
  return (
    <section id="control-center" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Mid-market payroll control center"
            title="Multiple payroll groups, in context — not vanity KPI cards"
            description="All values shown are synthetic sample data."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="rounded-2xl border border-white/5 bg-linear-to-b from-[#0A2E47] to-[#071E30] px-5 py-8 sm:px-9">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {meta.map((item) => (
                <p key={item.label} className="text-xs leading-5 text-slate-400">
                  {item.label} <span className="font-semibold text-white">{item.value}</span>
                </p>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {summary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className={`text-xl font-bold leading-8 ${item.tone}`}>{item.value}</p>
                  <p className="text-xs leading-4 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 overflow-x-auto rounded-lg bg-white/5">
              <table className="w-full min-w-4xl border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-white/10 px-3.5 py-2.5 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {runs.map((run, index) => {
                    const cellBorder = index < runs.length - 1 ? "border-b border-white/5" : "";
                    return (
                      <tr key={`${run.entity}-${run.group}`}>
                        <td
                          className={`px-3.5 py-3.5 text-xs leading-5 text-slate-200 ${cellBorder}`}
                        >
                          {run.entity}
                        </td>
                        <td
                          className={`px-3.5 py-3.5 text-xs leading-5 text-slate-200 ${cellBorder}`}
                        >
                          {run.group}
                        </td>
                        <td
                          className={`px-3.5 py-3.5 text-xs leading-5 text-slate-200 ${cellBorder}`}
                        >
                          {run.stage}
                        </td>
                        <td
                          className={`px-3.5 py-3.5 text-xs leading-5 text-slate-200 ${cellBorder}`}
                        >
                          {run.owner}
                        </td>
                        <td
                          className={`px-3.5 py-3.5 text-xs leading-5 text-slate-200 ${cellBorder}`}
                        >
                          {run.cutoff}
                        </td>
                        <td
                          className={`px-3.5 py-3.5 text-xs leading-5 text-slate-200 ${cellBorder}`}
                        >
                          {run.exceptions}
                        </td>
                        <td className={`px-3.5 py-3 ${cellBorder}`}>
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold leading-4 ${run.statusClass}`}
                          >
                            {run.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-4">
                <h3 className="pb-3 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                  Attention queue
                </h3>
                {attentionQueue.map((item, index) => (
                  <div
                    key={item.title}
                    className={index < attentionQueue.length - 1 ? "border-b border-white/5" : ""}
                  >
                    <p className="py-2 text-xs font-medium leading-5 text-white">{item.title}</p>
                    <div className="flex justify-between gap-4 py-2 text-xs leading-4 text-slate-400">
                      <span>{item.owner}</span>
                      <span>{item.action}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-4">
                <h3 className="pb-3 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                  Approval bottlenecks
                </h3>
                {bottlenecks.map((item, index) => (
                  <div
                    key={item.title}
                    className={index < bottlenecks.length - 1 ? "border-b border-white/5" : ""}
                  >
                    <div className="flex justify-between gap-4 py-2">
                      <span className="text-xs font-medium leading-5 text-white">{item.title}</span>
                      <span className="text-xs leading-4 text-slate-400">{item.approver}</span>
                    </div>
                    <div className="flex justify-between gap-4 py-2 text-xs leading-4 text-slate-400">
                      <span>{item.pending}</span>
                      <span>{item.escalation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-xs leading-4 text-slate-400">
              Every issue, approval and reconciliation item carries a scope, a named owner and a next
              action. Executive summaries stay aggregate — no person-level detail without authorized
              drill-down.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
              {legend.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-[3px] ${item.dot}`}
                    aria-hidden="true"
                  />
                  <span className="text-xs leading-4 text-slate-400">{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
