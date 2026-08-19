import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const filters = [
  "Pay period: Aug 2026",
  "Legal entity: All (4)",
  "Payroll group: Salaried",
  "Jurisdiction: IN, UK, DE, US",
  "Change type: All",
  "Status: All",
];

const primaryStats = [
  { value: "128", label: "Ready changes", scope: "Scope: all entities" },
  { value: "14", label: "Needs payroll review", scope: "Scope: all entities" },
  { value: "22", label: "Effective soon", scope: "Next 7 days" },
  { value: "6", label: "Records pending publication", scope: "Aug 2026" },
];

const secondaryStats = [
  { value: "3", label: "Integration exceptions" },
  { value: "2", label: "Correction requests" },
  { value: "99.1%", label: "Mapping accepted" },
  { value: "4", label: "Late changes — after cutoff" },
];

const rows: {
  employee: string;
  type: string;
  effective: string;
  source: string;
  owner: string;
  status: string;
  tone: ChipTone;
  updated: string;
}[] = [
  {
    employee: "E-10432 A. Rao",
    type: "Cost center",
    effective: "Aug 18",
    source: "HRIS v14.2",
    owner: "HR Ops",
    status: "Ready",
    tone: "ok",
    updated: "2h ago",
  },
  {
    employee: "E-10488 J. Okafor",
    type: "Compensation input",
    effective: "Aug 20",
    source: "HRIS v14.2",
    owner: "Payroll",
    status: "Needs review",
    tone: "warn",
    updated: "40m ago",
  },
  {
    employee: "E-10501 S. Meier",
    type: "Leave return",
    effective: "Aug 16",
    source: "HRIS v14.1",
    owner: "HR Ops",
    status: "Late change",
    tone: "fail",
    updated: "1d ago",
  },
  {
    employee: "E-10517 D. Fischer",
    type: "Work location",
    effective: "Sep 01",
    source: "HRIS v14.2",
    owner: "Integration admin",
    status: "Mapping error",
    tone: "fail",
    updated: "3h ago",
  },
  {
    employee: "E-10552 M. Iyer",
    type: "Termination",
    effective: "Aug 22",
    source: "HRIS v14.2",
    owner: "Payroll",
    status: "Payroll review",
    tone: "warn",
    updated: "15m ago",
  },
];

const attention = [
  { label: "Late changes", count: "4" },
  { label: "Missing context", count: "7" },
  { label: "Rejected sync records", count: "2" },
  { label: "Post-approval material changes", count: "1" },
];

const queue = [
  { label: "Aug 2026 · Payslip v3", state: "Published" },
  { label: "Jul 2026 · Payslip v2", state: "Superseded" },
  { label: "Aug 2026 · History v1", state: "Pending publication" },
];

export default function AlignmentCenterSection() {
  return (
    <section id="alignment-center" className="scroll-mt-24 bg-[#E8F0F9] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Primary product proof"
            title="The HR Payroll Alignment Center."
            description="Readiness, status, owner and integration health in one scoped view."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_60px_-24px_rgba(15,45,70,0.2)]">
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 px-5 py-3.5">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-md border border-slate-200 bg-slate-100 px-2.5 pb-1.5 pt-1 text-xs leading-4 text-slate-500"
                >
                  {filter}
                </span>
              ))}
              <span className="text-xs leading-4 text-slate-500 lg:ml-auto">
                Refreshed 2 min ago
              </span>
            </div>

            <div className="grid grid-cols-1 border-b border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {primaryStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-4 ${
                    index < primaryStats.length - 1 ? "border-b border-slate-200 sm:border-b-0" : ""
                  } ${index % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""} ${
                    index < 2 ? "sm:border-b sm:border-slate-200 lg:border-b-0" : ""
                  } lg:border-r lg:border-slate-200 lg:last:border-r-0`}
                >
                  <p className="text-2xl font-bold leading-9 text-sky-950">{stat.value}</p>
                  <p className="mt-[3px] text-xs leading-4 text-slate-500">{stat.label}</p>
                  <p className="text-[0.625rem] leading-4 text-slate-500 opacity-80">
                    {stat.scope}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-100 lg:grid-cols-4">
              {secondaryStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-3.5 ${
                    index < secondaryStats.length - 1 ? "border-r border-slate-200" : ""
                  } ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}
                >
                  <p className="text-base font-bold leading-6 text-sky-950">{stat.value}</p>
                  <p className="text-xs leading-4 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="px-5 py-4">
              <p className="text-sm font-bold leading-5 text-sky-950">Change readiness</p>

              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-3xl border-collapse text-left">
                  <thead>
                    <tr>
                      {[
                        "Employee",
                        "Change type",
                        "Effective",
                        "Source",
                        "Owner",
                        "Status",
                        "Updated",
                      ].map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-slate-200 px-3 py-2 text-[0.625rem] font-bold uppercase leading-4 tracking-wide text-slate-500"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.employee}>
                        <td className="border-b border-slate-100 px-3 py-3 text-xs leading-5 text-sky-950">
                          {row.employee}
                        </td>
                        <td className="border-b border-slate-100 px-3 py-3 text-xs leading-5 text-gray-700">
                          {row.type}
                        </td>
                        <td className="border-b border-slate-100 px-3 py-3 text-xs leading-5 text-gray-700">
                          {row.effective}
                        </td>
                        <td className="border-b border-slate-100 px-3 py-3 text-xs leading-5 text-gray-700">
                          {row.source}
                        </td>
                        <td className="border-b border-slate-100 px-3 py-3 text-xs leading-5 text-gray-700">
                          {row.owner}
                        </td>
                        <td className="border-b border-slate-100 px-3 py-2.5">
                          <StatusChip tone={row.tone}>{row.status}</StatusChip>
                        </td>
                        <td className="border-b border-slate-100 px-3 py-3 text-xs leading-5 text-slate-500">
                          {row.updated}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 border-t border-slate-200 lg:grid-cols-2">
              <div className="border-b border-slate-200 px-5 py-4 lg:border-b-0 lg:border-r">
                <p className="text-sm font-bold leading-5 text-sky-950">Attention panel</p>
                <div className="mt-3">
                  {attention.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 py-2 last:border-b-0"
                    >
                      <span className="text-xs leading-5 text-gray-700">{item.label}</span>
                      <span className="text-xs font-bold leading-5 text-sky-950">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-5 py-4">
                <p className="text-sm font-bold leading-5 text-sky-950">Record queue</p>
                <div className="mt-3">
                  {queue.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-slate-200 py-2 last:border-b-0"
                    >
                      <span className="text-xs leading-5 text-gray-700">{item.label}</span>
                      <span className="text-xs leading-5 text-slate-500">{item.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:flex-wrap">
              <span className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-bold leading-5 text-sky-950">
                Review items needing HR context
              </span>
              <span className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-bold leading-5 text-sky-950">
                Open change detail
              </span>
              <span className="flex min-h-11 items-center justify-center rounded-lg bg-linear-71 from-blue-500 to-sky-900 px-5 text-sm font-bold leading-5 text-white">
                Hand off to Payroll
              </span>
            </div>

            <p className="border-t border-slate-200 bg-slate-50 px-5 py-3.5 text-xs leading-5 text-slate-500">
              Synthetic data shown for illustration. Sensitive payroll values are masked or
              omitted by default.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
