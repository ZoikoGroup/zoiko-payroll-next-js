import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const stats = [
  { value: "52", label: "Open workflows" },
  { value: "9", label: "Due soon" },
  { value: "7", label: "Awaiting evidence" },
  { value: "6", label: "Awaiting approval" },
  { value: "3", label: "Blocked" },
  { value: "4", label: "Remediation in progress" },
  { value: "21", label: "Closed this period" },
  { value: "96.1%", label: "On-schedule reviews" },
];

const filters = [
  "Jurisdiction: All",
  "Entity: All",
  "Workflow type",
  "State: All",
  "Owner",
  "Evidence freshness",
  "Due window",
  "Materiality",
];

/** Every state carries text plus a dot — colour never has to be read on its own. */
const stateTones = {
  approved: "text-teal-200",
  evidence: "text-amber-300",
  approval: "text-violet-400",
  blocked: "text-rose-500",
} as const;

const stateDots = {
  approved: "bg-teal-200",
  evidence: "bg-amber-300",
  approval: "bg-violet-400",
  blocked: "bg-rose-500",
} as const;

type Row = {
  workflow: string;
  jurisdiction: string;
  requirement: string;
  evidence: number;
  state: string;
  tone: keyof typeof stateTones;
  due: string;
  owner: string;
  approver: string;
  next: string;
};

const rows: Row[] = [
  {
    workflow: "WF-2026-0412",
    jurisdiction: "Germany",
    requirement: "Payslip retention v2",
    evidence: 100,
    state: "Approved",
    tone: "approved",
    due: "—",
    owner: "M. Ostrowski",
    approver: "K. Feld",
    next: "None",
  },
  {
    workflow: "WF-2026-0413",
    jurisdiction: "Brazil",
    requirement: "13th-salary filing",
    evidence: 60,
    state: "Awaiting evidence",
    tone: "evidence",
    due: "3 days",
    owner: "R. Alves",
    approver: "—",
    next: "Request document",
  },
  {
    workflow: "WF-2026-0409",
    jurisdiction: "Singapore",
    requirement: "CPF contribution proof",
    evidence: 100,
    state: "Pending approval",
    tone: "approval",
    due: "1 day",
    owner: "L. Tan",
    approver: "S. Goh",
    next: "Independent approval",
  },
  {
    workflow: "WF-2026-0401",
    jurisdiction: "United States",
    requirement: "State withholding cert",
    evidence: 40,
    state: "Blocked",
    tone: "blocked",
    due: "Overdue",
    owner: "J. Whitfield",
    approver: "—",
    next: "Escalate",
  },
  {
    workflow: "WF-2026-0398",
    jurisdiction: "India",
    requirement: "PF registration",
    evidence: 100,
    state: "Approved",
    tone: "approved",
    due: "—",
    owner: "P. Rao",
    approver: "A. Iyer",
    next: "None",
  },
];

const columns = [
  "Workflow",
  "Jurisdiction",
  "Requirement",
  "Evidence",
  "State",
  "Due",
  "Owner",
  "Approver",
  "Next action",
];

export default function ControlCenterSection() {
  return (
    <section
      id="control-center"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
    >
      {/* Photo sits behind a scrim; panels above use the solid #2C3648 surface from the palette. */}
      <img
        src="/images/compliance-workflows/control-center-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cyan-950/95 via-cyan-950/90 via-60% to-cyan-950/95"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="03"
            label="Compliance Control Center"
            heading="The primary product-proof surface"
            center
            tone="light"
          >
            A dense, calm operational queue — every state uses text and icon, and there is no hidden
            compliance score.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <dl className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[10px] bg-white/20 px-4 py-4 outline outline-1 -outline-offset-1 outline-slate-200"
              >
                <dd className="font-display text-2xl font-bold text-white">{stat.value}</dd>
                <dt className="mt-1 text-xs text-stone-300">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100} className="mt-4">
          <ul className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <li
                key={filter}
                className="rounded-[20px] bg-white/20 px-3 py-1.5 font-mono text-xs text-white outline outline-1 -outline-offset-1 outline-slate-200"
              >
                {filter}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <div className="overflow-x-auto rounded-[10px] bg-white/10 outline outline-1 -outline-offset-1 outline-slate-200">
            <table className="w-full min-w-[1000px] border-collapse text-left">
              <thead>
                <tr className="bg-white/20">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200/40 px-3.5 py-3 font-mono text-[10px] font-semibold uppercase tracking-wide text-gray-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.workflow}
                    className={index < rows.length - 1 ? "border-b border-slate-200/20" : ""}
                  >
                    <th scope="row" className="px-3.5 py-3 text-xs font-normal text-gray-200">
                      {row.workflow}
                    </th>
                    <td className="px-3.5 py-3 text-xs text-gray-200">{row.jurisdiction}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-200">{row.requirement}</td>
                    <td className="px-3.5 py-3">
                      <span className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-white/30"
                          aria-hidden="true"
                        >
                          <span
                            className="block h-full rounded-full bg-[#2F5FE0]"
                            style={{ width: `${row.evidence}%` }}
                          />
                        </span>
                        <span className="text-xs text-slate-50">{row.evidence}%</span>
                      </span>
                    </td>
                    <td className="px-3.5 py-3">
                      <span
                        className={`flex items-center gap-1.5 text-[10px] font-semibold ${stateTones[row.tone]}`}
                      >
                        <span
                          className={`size-1.5 shrink-0 rounded-full ${stateDots[row.tone]}`}
                          aria-hidden="true"
                        />
                        {row.state}
                      </span>
                    </td>
                    <td className="px-3.5 py-3 text-xs text-gray-200">{row.due}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-200">{row.owner}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-200">{row.approver}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-200">{row.next}</td>
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
