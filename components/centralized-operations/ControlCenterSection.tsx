import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";

const filters = ["Legal entity", "Payroll group", "Owner", "Status", "Jurisdiction (context)"];

const stats = [
  { label: "In scope", value: "24" },
  { label: "Ready", value: "16" },
  { label: "Needs review", value: "4", valueClass: "text-[#9C7A1F]" },
  { label: "Approval pending", value: "2" },
  { label: "Blocked", value: "1", valueClass: "text-[#B23A34]" },
  { label: "Integration attn.", value: "1", valueClass: "text-[#9C7A1F]" },
];

const columns = [
  "Payroll group",
  "Entity",
  "Jurisdiction",
  "Pay period",
  "Owner",
  "Cutoff",
  "Stage",
  "Blockers",
  "Approval",
  "Integration",
];

type Row = {
  group: string;
  entity: string;
  jurisdiction: string;
  period: string;
  owner: string;
  cutoff: string;
  stage: string;
  blockers: string;
  approval: string | null;
  approvalTone?: ChipTone;
  integration: string;
  integrationTone: ChipTone;
};

const rows: Row[] = [
  {
    group: "US-Salaried",
    entity: "Acme US LLC",
    jurisdiction: "US",
    period: "Apr 1–15",
    owner: "M. Ortiz",
    cutoff: "Apr 12",
    stage: "Approve",
    blockers: "—",
    approval: "Pending",
    approvalTone: "warn",
    integration: "Healthy",
    integrationTone: "ok",
  },
  {
    group: "DE-Standard",
    entity: "Acme DE GmbH",
    jurisdiction: "DE",
    period: "Apr 1–15",
    owner: "L. Faber",
    cutoff: "Apr 14",
    stage: "Validate",
    blockers: "2 exceptions",
    approval: null,
    integration: "Degraded",
    integrationTone: "warn",
  },
  {
    group: "SG-All Staff",
    entity: "Acme APAC Pte",
    jurisdiction: "SG",
    period: "Apr 1–15",
    owner: "R. Tan",
    cutoff: "Apr 10",
    stage: "Calculate",
    blockers: "Failed import",
    approval: null,
    integration: "Failed",
    integrationTone: "blocked",
  },
  {
    group: "BR-CLT",
    entity: "Acme Brasil Ltda",
    jurisdiction: "BR",
    period: "Apr 1–15",
    owner: "C. Silva",
    cutoff: "Apr 15",
    stage: "Approve",
    blockers: "—",
    approval: "Approved",
    approvalTone: "ok",
    integration: "Healthy",
    integrationTone: "ok",
  },
];

const selected = [
  { label: "Selected", value: "DE-Standard · v4.1" },
  { label: "Unresolved exceptions", value: "2 open" },
  { label: "Pending approvals", value: "0" },
  { label: "Completion readiness", value: "Not ready" },
];

const actions = ["Open payroll scope →", "Review blockers", "View close board"];

export default function ControlCenterSection() {
  return (
    <section
      id="control-center"
      className="scroll-mt-24 border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Payroll operations control center</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            One operating view — every scope still has a name attached
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4E6172]">
            A higher-level scope can&apos;t show Ready while a required payroll group underneath it
            is Blocked or Approval pending.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-7">
          <div className="overflow-hidden rounded-2xl border border-[#DCE6EC] bg-white shadow-[0px_1px_2px_0px_rgba(8,47,73,0.06)]">
            <div className="flex flex-wrap gap-2 border-b border-[#DCE6EC] bg-[#EAF1F6] px-4 py-3.5">
              <span className="rounded-full border border-sky-600 bg-sky-100 px-3 py-1 text-xs font-semibold leading-5 text-[#075E99]">
                Period: Apr 2026
              </span>
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-[#DCE6EC] bg-white px-3 py-1 text-xs font-semibold leading-5 text-[#4E6172]"
                >
                  {filter}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#DCE6EC] sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white px-3.5 py-3">
                  <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-1 text-lg font-extrabold leading-7 ${stat.valueClass ?? "text-[#082F49]"}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-5xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-3.5 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const b = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    const cell = `px-3.5 py-3 text-xs leading-5 text-[#082F49] ${b}`;
                    return (
                      <tr key={row.group}>
                        <td className={cell}>{row.group}</td>
                        <td className={cell}>{row.entity}</td>
                        <td className={cell}>{row.jurisdiction}</td>
                        <td className={cell}>{row.period}</td>
                        <td className={cell}>{row.owner}</td>
                        <td className={cell}>{row.cutoff}</td>
                        <td className={cell}>{row.stage}</td>
                        <td className={cell}>{row.blockers}</td>
                        <td className={`px-3.5 py-2.5 ${b}`}>
                          {row.approval ? (
                            <StatusChip label={row.approval} tone={row.approvalTone} />
                          ) : (
                            <span className="text-xs leading-5 text-[#082F49]">—</span>
                          )}
                        </td>
                        <td className={`px-3.5 py-2.5 ${b}`}>
                          <StatusChip label={row.integration} tone={row.integrationTone} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-[#DCE6EC] bg-[#EAF1F6] px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
              {selected.map((field) => (
                <div key={field.label}>
                  <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                    {field.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#082F49]">
                    {field.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-[#DCE6EC] px-4 py-3.5">
              {actions.map((action) => (
                <span
                  key={action}
                  className="rounded-md border border-[#DCE6EC] bg-white px-3 py-1.5 text-xs font-bold leading-5 text-[#075E99]"
                >
                  {action}
                </span>
              ))}
            </div>

            <div className="border-t border-[#DCE6EC] px-4 py-4">
              <p className="text-xs leading-5 text-[#4E6172]">
                Role permissions control which scopes are visible. Status is always shown with text
                and shape, never color alone.
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold leading-4 text-[#2F7A52]">
                <span className="size-1.5 rounded-[3px] bg-[#2F7A52]" aria-hidden="true" />
                Refreshed 3 minutes ago
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
