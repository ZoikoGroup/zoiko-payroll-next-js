import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const stats = [
  { value: "38", label: "Payrolls in scope" },
  { value: "31", label: "Ready / complete", note: "31 of 38" },
  { value: "4", label: "Awaiting approval" },
  { value: "3", label: "Exceptions requiring action" },
  { value: "2", label: "Data stale / partial" },
  { value: "3", label: "Revised snapshots" },
  { value: "2", label: "Excluded / not applicable" },
  { value: "98.4%", label: "Reporting coverage", note: "of resolved scope" },
];

const filters = [
  "Entity: All",
  "Jurisdiction: All",
  "Region: EMEA, APAC, AMER",
  "Status: All",
  "Exception category",
  "Source system",
  "Reconciliation",
  "Revision state",
];

/** Status is always text + icon — color never carries the meaning on its own. */
const stateStyles = {
  ready: "text-emerald-700",
  awaiting: "text-yellow-700",
  revised: "text-violet-800",
  exception: "text-red-700",
  partial: "text-yellow-700",
} as const;

const dotStyles = {
  ready: "bg-emerald-700",
  awaiting: "bg-yellow-700",
  revised: "bg-violet-800",
  exception: "bg-red-700",
  partial: "bg-yellow-700",
} as const;

type Row = {
  entity: string;
  jurisdiction: string;
  period: string;
  state: string;
  tone: keyof typeof stateStyles;
  approval: string;
  exceptions: string;
  freshness: string;
  revision: string;
  owner: string;
};

const rows: Row[] = [
  {
    entity: "DE — Mitte GmbH",
    jurisdiction: "Germany",
    period: "Apr 2026",
    state: "Ready",
    tone: "ready",
    approval: "Approved",
    exceptions: "0",
    freshness: "Current",
    revision: "v3",
    owner: "M. Ostrowski",
  },
  {
    entity: "SG — Payroll Grp 2",
    jurisdiction: "Singapore",
    period: "Apr 2026",
    state: "Awaiting approval",
    tone: "awaiting",
    approval: "Pending",
    exceptions: "1",
    freshness: "2h stale",
    revision: "v2",
    owner: "L. Tan",
  },
  {
    entity: "BR — Filial Sul",
    jurisdiction: "Brazil",
    period: "Apr 2026",
    state: "Revised",
    tone: "revised",
    approval: "Approved",
    exceptions: "0",
    freshness: "Current",
    revision: "v4 (rev)",
    owner: "R. Alves",
  },
  {
    entity: "US — West Region",
    jurisdiction: "United States",
    period: "Apr 2026",
    state: "Exception",
    tone: "exception",
    approval: "Blocked",
    exceptions: "2",
    freshness: "Current",
    revision: "v3",
    owner: "J. Whitfield",
  },
  {
    entity: "IN — Bengaluru Hub",
    jurisdiction: "India",
    period: "Apr 2026",
    state: "Ready",
    tone: "ready",
    approval: "Approved",
    exceptions: "0",
    freshness: "Current",
    revision: "v3",
    owner: "P. Rao",
  },
  {
    entity: "MX — Norte Payroll",
    jurisdiction: "Mexico",
    period: "Apr 2026",
    state: "Partial data",
    tone: "partial",
    approval: "Pending",
    exceptions: "1",
    freshness: "Late feed",
    revision: "v2",
    owner: "C. Delgado",
  },
];

const columns = [
  "Entity / payroll group",
  "Jurisdiction",
  "Period",
  "Operational state",
  "Approval",
  "Exceptions",
  "Freshness",
  "Revision",
  "Owner",
];

const quality = [
  { title: "Freshness", value: "Current — 36 of 38", tone: "ready" as const },
  { title: "Completeness", value: "Partial — 2 sources", tone: "awaiting" as const },
  { title: "Reconciliation", value: "Matched — 37 of 38", tone: "ready" as const },
  { title: "Permission coverage", value: "Limited — 2 entities", tone: "revised" as const },
];

export default function ReportingCenterSection() {
  return (
    <section id="reporting-center" className="scroll-mt-24 bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="Stage 03 — Reporting Center"
            label="Global Reporting Center"
            heading="The primary product-proof surface"
          >
            A dense, readable operational reporting center — not a marketing dashboard. Status is
            always text + icon; color never carries meaning alone, and there is no hidden global
            health score.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <dl className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[10px] border border-slate-200 bg-white p-4"
              >
                <dd className="font-display text-2xl font-bold text-gray-900">{stat.value}</dd>
                <dt className="mt-1 text-xs text-gray-500">{stat.label}</dt>
                {stat.note ? (
                  <p className="font-mono text-xs text-gray-400">{stat.note}</p>
                ) : null}
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100} className="mt-4">
          <ul className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <li
                key={filter}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-gray-500"
              >
                {filter}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <div className="overflow-x-auto rounded-[10px] border border-slate-200 bg-white">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200 px-3.5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-gray-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.entity}
                    className={index < rows.length - 1 ? "border-b border-gray-100" : ""}
                  >
                    <th
                      scope="row"
                      className="px-3.5 py-3 text-xs font-normal text-gray-700"
                    >
                      {row.entity}
                    </th>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.jurisdiction}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.period}</td>
                    <td className="px-3.5 py-3">
                      <span
                        className={`flex items-center gap-1.5 text-[10px] font-semibold ${stateStyles[row.tone]}`}
                      >
                        <span
                          className={`size-1.5 shrink-0 rounded-full ${dotStyles[row.tone]}`}
                          aria-hidden="true"
                        />
                        {row.state}
                      </span>
                    </td>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.approval}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.exceptions}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.freshness}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.revision}</td>
                    <td className="px-3.5 py-3 text-xs text-gray-700">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-3.5">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {quality.map((item) => (
              <div
                key={item.title}
                className="rounded-[10px] border border-slate-200 bg-white p-4"
              >
                <p className="text-sm font-bold text-gray-900">{item.title}</p>
                <p
                  className={`mt-1.5 flex items-center gap-1.5 text-xs font-semibold ${stateStyles[item.tone]}`}
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${dotStyles[item.tone]}`}
                    aria-hidden="true"
                  />
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
