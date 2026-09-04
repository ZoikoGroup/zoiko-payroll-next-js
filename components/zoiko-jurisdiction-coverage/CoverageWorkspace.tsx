import SectionLabel from "./SectionLabel";
import StatusBadge, { type StatusType } from "./StatusBadge";

const stats = [
  { val: "14", label: "In registry scope" },
  { val: "11", label: "Available" },
  { val: "2", label: "Limited" },
  { val: "1", label: "Partner-supported" },
  { val: "3", label: "Planned" },
  { val: "0", label: "Needs review" },
];

const filters = [
  "Region: All",
  "Service model: All",
  "Core payroll: Available",
  "Evidence freshness: ≤30 days",
  "Sort: A–Z",
];

const headers = ["Jurisdiction", "Status", "Effective date", "Service model", "Last verified"];

interface TableRow {
  name: string;
  status: StatusType;
  effective: string;
  model: string;
  verified: string;
}

const rows: TableRow[] = [
  { name: "Brazil", status: "partner", effective: "Sep 2024", model: "Partner-supported", verified: "Aug 12, 2026" },
  { name: "Germany", status: "limited", effective: "Reviewed Aug 2026", model: "Direct, self-managed", verified: "Aug 18, 2026" },
  { name: "India", status: "planned", effective: "—", model: "—", verified: "Aug 10, 2026" },
  { name: "Singapore", status: "available", effective: "Jun 2025", model: "Direct, self-managed", verified: "Aug 15, 2026" },
  { name: "United States", status: "available", effective: "Mar 2025", model: "Direct, self-managed", verified: "Aug 18, 2026" },
];

export default function CoverageWorkspace() {
  return (
    <section className="w-full border-t border-b border-slate-100 bg-white px-8 py-20">
      <div className="mx-auto max-w-[1180px] flex flex-col items-start gap-10">
        <div className="max-w-[700px] flex flex-col items-start gap-2.5 pt-[1.63px]">
          <SectionLabel slash>Jurisdiction Coverage Workspace</SectionLabel>
          <div className="flex flex-col gap-0 pt-3.5">
            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              The strongest proof surface on this page
            </div>
          </div>
          <div className="max-w-[600px] text-base leading-6 text-slate-600">
            A real enterprise workspace embedded in the public site — searchable,
            <br />
            filterable, sortable A–Z. All data shown is synthetic, for illustration only.
          </div>
        </div>

        {/* Dark workspace panel */}
        <div className="relative w-full overflow-hidden rounded-[20px] bg-sky-950 p-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_90%_-10%,rgba(59,130,246,0.3),transparent_60%)]" />

          {/* Summary Stats */}
          <div className="relative z-10 flex flex-wrap items-start gap-2.5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="w-[165px] h-[70px] rounded-[10px] bg-white/5 px-3 pt-3 pb-[6px] outline outline-1 outline-offset-[-1px] outline-white/10"
              >
                <div className="text-lg font-extrabold leading-7 text-white">{s.val}</div>
                <div className="text-[10px] leading-4 text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="relative z-10 flex flex-wrap items-start gap-2 pt-[13px]">
            {filters.map((f) => (
              <div
                key={f}
                className="rounded-[20px] bg-white/5 px-2.5 py-[6px] outline outline-1 outline-offset-[-1px] outline-white/10"
              >
                <span className="text-xs font-bold leading-4 text-slate-300">{f}</span>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="relative z-10 mt-[14px] overflow-hidden rounded-xl bg-white/5 outline outline-1 outline-offset-[-1px] outline-white/10">
            <div className="h-10 grid grid-cols-5 gap-0 bg-white/5 px-4 py-3">
              {headers.map((h) => (
                <div
                  key={h}
                  className="text-[9.5px] font-extrabold uppercase leading-4 tracking-tight text-slate-400"
                >
                  {h}
                </div>
              ))}
            </div>
            {rows.map((row) => (
              <div
                key={row.name}
                className="h-12 grid grid-cols-5 items-center gap-0 border-t border-white/10 px-4 py-3"
              >
                <div className="text-xs font-bold leading-4 text-white">{row.name}</div>
                <div>
                  <StatusBadge status={row.status} showDot={false} />
                </div>
                <div className="text-xs leading-4 text-slate-400">{row.effective}</div>
                <div className="text-xs leading-4 text-slate-400">{row.model}</div>
                <div className="text-xs leading-4 text-slate-400">{row.verified}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
