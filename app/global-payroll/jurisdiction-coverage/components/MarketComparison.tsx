import SectionLabel from "./SectionLabel";
import StatusBadge from "./StatusBadge";

const countries = ["United States", "Germany", "Brazil"];

interface ComparisonRow {
  dim: string;
  isState?: boolean;
  vals: string[];
  isStateRow?: boolean;
}

const rows: ComparisonRow[] = [
  { dim: "Overall state", vals: ["available", "limited", "partner"], isState: true, isStateRow: true },
  { dim: "Core payroll", vals: ["Available", "Available", "Via partner"] },
  { dim: "Filing", vals: ["Available", "Not published", "Via partner"] },
  { dim: "Local currency", vals: ["USD", "EUR", "BRL"] },
  { dim: "Frequencies", vals: ["Weekly, semi-monthly, monthly", "Monthly", "Monthly"] },
  { dim: "Evidence date", vals: ["Aug 18, 2026", "Aug 18, 2026", "Aug 12, 2026"] },
];

export default function MarketComparison() {
  return (
    <section className="w-full border-t border-b border-slate-100 bg-white px-8 py-20">
      <div className="mx-auto max-w-[1180px] flex flex-col items-start gap-10">
        <div className="max-w-[700px] flex flex-col items-start gap-2.5 pt-[1.62px] pb-[0.01px]">
          <SectionLabel slash>Regional / Market Comparison</SectionLabel>
          <div className="flex flex-col gap-0 pt-3.5">
            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              Decision support, not a ranking system.
            </div>
          </div>
          <div className="max-w-[600px] text-base leading-6 text-slate-600">
            Compare up to three markets. Same definition, same evidence date. No
            <br />
            scores, stars, or &quot;best country&quot; language.
          </div>
        </div>

        {/* Comparison Table */}
        <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]">
          {/* Column Headers */}
          <div className="grid grid-cols-[160px_1fr_1fr_1fr] gap-0 bg-slate-50">
            <div className="px-4 pt-3 pb-4 text-xs font-extrabold leading-4 text-sky-950">
              Dimension
            </div>
            {countries.map((c) => (
              <div
                key={c}
                className="border-l border-slate-100 px-4 py-3.5 text-xs font-extrabold leading-5 text-sky-950"
              >
                {c}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {rows.map((row) => (
            <div
              key={row.dim}
              className="grid grid-cols-[160px_1fr_1fr_1fr] gap-0 border-t border-slate-100"
            >
              <div className="px-4 pt-3 pb-4 text-xs font-bold leading-4 text-gray-400">
                {row.dim}
              </div>
              {row.vals.map((v, i) => (
                <div
                  key={i}
                  className="border-l border-t border-slate-100 px-4 py-3.5"
                >
                  {row.isState ? (
                    <StatusBadge
                      status={v as "available" | "limited" | "partner"}
                      showDot={false}
                    />
                  ) : (
                    <span className="text-xs leading-5 text-sky-950">{v}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
