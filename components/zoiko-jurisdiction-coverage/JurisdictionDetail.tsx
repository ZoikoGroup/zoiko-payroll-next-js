import SectionLabel from "./SectionLabel";
import StatusBadge from "./StatusBadge";

const meta = [
  { label: "Effective date", value: "March 2025" },
  { label: "Last verified", value: "Aug 18, 2026" },
  { label: "Service model", value: "Direct, self-managed" },
  { label: "Review due", value: "Nov 2026" },
];

interface DimensionRow {
  dim: string;
  state: "available" | "limited" | "partner" | "planned" | "unavailable" | "needs-review";
  scope: string;
}

const dimensions: DimensionRow[] = [
  { dim: "Core payroll", state: "available", scope: "Weekly, semi-monthly, monthly cycles" },
  { dim: "Filing", state: "available", scope: "Federal and state filing workflows" },
  { dim: "Payments", state: "available", scope: "USD, direct deposit" },
  { dim: "Integrations", state: "limited", scope: "Select HRIS connectors only" },
  { dim: "Language", state: "available", scope: "English" },
  { dim: "Data / hosting / residency", state: "available", scope: "Documented in Trust Center" },
  { dim: "Support", state: "available", scope: "Business-hours support" },
];

export default function JurisdictionDetail() {
  return (
    <section className="w-full px-8 py-20">
      <div className="mx-auto max-w-[1180px] flex flex-col items-start gap-5">
        <div className="max-w-[836px] flex flex-col items-start gap-2.5 pb-5 pt-[1.63px]">
          <SectionLabel slash>Jurisdiction Detail + Service Boundary Model</SectionLabel>
          <div className="flex flex-col gap-0 pt-3.5 pb-[0.58px]">
            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              A positive overall state never implies every dimension
            </div>
          </div>
          <div className="max-w-[600px] text-base leading-6 text-slate-600">
            Each service dimension is scoped, evidenced and reviewed independently.
          </div>
        </div>

        {/* Detail Card */}
        <div className="flex w-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]">
          <div className="flex flex-wrap items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-8 items-center justify-center rounded-sm bg-slate-50 outline outline-1 outline-offset-[-1px] outline-slate-100">
                <span className="text-[10px] font-extrabold leading-4 text-sky-700">US</span>
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-extrabold leading-7 text-sky-950">
                  United States
                </div>
                <div className="pb-[0.75px] text-xs leading-5 text-gray-400">
                  Country · North America
                </div>
              </div>
            </div>
            <StatusBadge status="available" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <div className="pb-[0.75px] text-xs leading-5 text-gray-400">{m.label}</div>
                <div className="pb-[0.75px] text-xs font-bold leading-5 text-sky-950">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dimensions Table */}
        <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]">
          <div className="grid grid-cols-3 gap-0 bg-slate-50 px-4 py-3">
            {["Dimension", "State", "Scope / limitation"].map((h) => (
              <div
                key={h}
                className="text-xs font-extrabold uppercase leading-4 tracking-wide text-gray-400"
              >
                {h}
              </div>
            ))}
          </div>
          {dimensions.map((row) => (
            <div
              key={row.dim}
              className="grid grid-cols-3 items-center gap-0 border-t border-slate-100 px-4 py-3.5"
            >
              <div className="text-xs leading-5 text-sky-950">{row.dim}</div>
              <div>
                <div className={`w-[237px] h-[23px] inline-flex items-center rounded-[20px] px-2 py-1 ${row.state === 'available' ? 'bg-[#E3F0E7]' : row.state === 'limited' ? 'bg-[#F1EAD8]' : ''}`}>
                  {row.state === "available" && (
                    <span className="text-[10px] font-extrabold leading-4 text-green-700">
                      Available
                    </span>
                  )}
                  {row.state === "limited" && (
                    <span className="text-[10px] font-extrabold leading-4 text-yellow-800">
                      Limited
                    </span>
                  )}
                </div>
              </div>
              <div className="text-xs leading-5 text-gray-400">{row.scope}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
