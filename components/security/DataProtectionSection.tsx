import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const categories = [
  { item: "Payroll values & payment details", tag: "display-controlled" },
  { item: "Tax identifiers", tag: "purpose-bound" },
  { item: "Personal & compensation details", tag: "least privilege" },
  { item: "Payroll documents", tag: "permission-gated" },
];

const exportGovernance = [
  { item: "Scope & field preview before export", tag: "required" },
  { item: "Bulk-action confirmation", tag: "high-impact", warn: true },
  { item: "Export result recorded to audit", tag: "system" },
  { item: "Partial/failed export never shows success", tag: "policy" },
];

type Row = { item: string; tag: string; warn?: boolean };

function ControlList({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 bg-gray-50 px-5 py-4 text-sm font-bold leading-5 text-slate-900">
        {title}
      </h3>
      <div className="px-5">
        {rows.map((row, index) => (
          <div
            key={row.item}
            className={`flex flex-wrap items-center justify-between gap-2 py-3.5 ${
              index < rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <span className="flex items-center gap-2 text-sm leading-5 text-slate-900">
              <span
                aria-hidden="true"
                className={`text-xs font-bold ${row.warn ? "text-orange-400" : "text-green-600"}`}
              >
                {row.warn ? "!" : "✓"}
              </span>
              {row.item}
            </span>
            <span className="font-mono text-xs leading-4 text-slate-500">{row.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DataProtectionSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Payroll data protection &amp; sensitive-data controls</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Purpose-bound access, with export governance built in
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-700">
              Keep sensitive payroll data protected with purpose-bound access, least-privilege controls,
              and governed exports that are reviewed, confirmed, and recorded.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/security/data-protection.png"
              alt="Security lead briefing a team on sensitive-data controls"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-80"
            />
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <ControlList title="Sensitive-data categories" rows={categories} />
          </Reveal>
          <Reveal delay={100}>
            <ControlList title="Export governance" rows={exportGovernance} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
