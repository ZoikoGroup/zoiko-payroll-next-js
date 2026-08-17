import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";

const filters = [
  "Region",
  "Jurisdiction",
  "Legal entity",
  "Payroll group",
  "Service model",
  "Status",
  "Owner",
  "Integration health",
];

const stats = [
  { label: "In scope", value: "18" },
  { label: "Ready", value: "11" },
  { label: "Needs review", value: "4", valueClass: "text-[#9C7A1F]" },
  { label: "Approval pending", value: "2" },
  { label: "Blocked", value: "1", valueClass: "text-red-700" },
  { label: "Completed", value: "0" },
];

const columns = [
  "Jurisdiction",
  "Group",
  "Currency",
  "Cutoff",
  "Readiness",
  "Blockers",
  "Stage",
  "Local owner",
  "Service model",
  "Integration",
];

type Row = {
  jurisdiction: string;
  group: string;
  currency: string;
  cutoff: string;
  readiness: string;
  readinessTone: ChipTone;
  blockers: string;
  stage: string;
  owner: string;
  serviceModel: string;
  integration: string;
  integrationTone: ChipTone;
};

const rows: Row[] = [
  {
    jurisdiction: "US",
    group: "US-Salaried",
    currency: "USD",
    cutoff: "Apr 12",
    readiness: "Ready",
    readinessTone: "ok",
    blockers: "—",
    stage: "Approve",
    owner: "M. Ortiz",
    serviceModel: "Direct",
    integration: "Healthy",
    integrationTone: "ok",
  },
  {
    jurisdiction: "DE",
    group: "DE-Standard",
    currency: "EUR",
    cutoff: "Apr 14",
    readiness: "Review",
    readinessTone: "warn",
    blockers: "2 exceptions",
    stage: "Validate",
    owner: "L. Faber",
    serviceModel: "Direct",
    integration: "Degraded",
    integrationTone: "warn",
  },
  {
    jurisdiction: "SG",
    group: "SG-All Staff",
    currency: "SGD",
    cutoff: "Apr 10",
    readiness: "Blocked",
    readinessTone: "blocked",
    blockers: "Failed source import",
    stage: "Calculate",
    owner: "R. Tan",
    serviceModel: "Partner-supported",
    integration: "Failed",
    integrationTone: "blocked",
  },
  {
    jurisdiction: "BR",
    group: "BR-CLT",
    currency: "BRL",
    cutoff: "Apr 15",
    readiness: "Ready",
    readinessTone: "ok",
    blockers: "—",
    stage: "Approve",
    owner: "C. Silva",
    serviceModel: "Direct",
    integration: "Healthy",
    integrationTone: "ok",
  },
  {
    jurisdiction: "GB",
    group: "GB-Standard",
    currency: "GBP",
    cutoff: "Apr 13",
    readiness: "Review",
    readinessTone: "warn",
    blockers: "1 missing approval",
    stage: "Review",
    owner: "H. Ahmed",
    serviceModel: "Customer-operated",
    integration: "Healthy",
    integrationTone: "ok",
  },
];

const criticalIssues: { issue: string; label: string; tone: ChipTone }[] = [
  {
    issue: "SG-All Staff · Failed source import from workforce system",
    label: "Blocked",
    tone: "blocked",
  },
  { issue: "DE-Standard · 2 unresolved calculation exceptions", label: "Needs review", tone: "warn" },
  {
    issue: "GB-Standard · Missing required approval before cutoff",
    label: "Needs review",
    tone: "warn",
  },
];

const selected = [
  { label: "Selected", value: "DE-Standard · v4.1" },
  { label: "Current stage", value: "Validate" },
  { label: "Exceptions", value: "2 open" },
  { label: "Next permitted action", value: "Request local review" },
];

export default function ControlCenterSection() {
  return (
    <section
      id="global-control-center"
      className="scroll-mt-24 border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Global payroll control center</Eyebrow>
          <h2 className="mt-2.5 max-w-2xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Every market&apos;s readiness, in one governed operating view
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-[#4E6172]">
            Filtered, scoped and permission-aware — never a flattened world map.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
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
                  {rows.map((row) => (
                    <tr key={row.jurisdiction}>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.jurisdiction}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.group}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.currency}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.cutoff}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-2.5">
                        <StatusChip label={row.readiness} tone={row.readinessTone} />
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.blockers}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.stage}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.owner}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-3 text-xs leading-5 text-[#082F49]">
                        {row.serviceModel}
                      </td>
                      <td className="border-b border-[#DCE6EC] px-3.5 py-2.5">
                        <StatusChip label={row.integration} tone={row.integrationTone} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#DCE6EC] bg-[#F5F8FA]">
              <p className="px-4 pt-3 font-mono text-xs font-medium uppercase leading-4 text-[#4E6172]">
                Critical issues
              </p>
              {criticalIssues.map((issue) => (
                <div
                  key={issue.issue}
                  className="flex flex-wrap items-center justify-between gap-2 border-t border-[#DCE6EC] px-4 py-2.5"
                >
                  <span className="text-xs leading-5 text-[#082F49]">{issue.issue}</span>
                  <StatusChip label={issue.label} tone={issue.tone} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-px border-t border-[#DCE6EC] bg-[#DCE6EC] sm:grid-cols-2 lg:grid-cols-4">
              {selected.map((field) => (
                <div key={field.label} className="bg-[#F5F8FA] px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                    {field.label}
                  </p>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#082F49]">{field.value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#DCE6EC] px-4 py-4">
              <p className="text-xs leading-5 text-[#4E6172]">
                Actions are permission-scoped: open local payroll, assign a permitted owner, request
                review, open an integration issue, view the approval chain, or export a governed
                summary.
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs leading-5 text-[#2F7A52]">
                <span className="size-1.5 rounded-full bg-green-700" aria-hidden="true" />
                Refreshed 3 minutes ago
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
