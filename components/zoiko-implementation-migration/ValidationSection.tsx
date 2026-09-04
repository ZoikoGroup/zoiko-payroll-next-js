import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const domains = [
  "Configuration",
  "Calculation",
  "Employee / record",
  "Permissions",
  "Integrations",
  "Documents",
  "Reporting",
  "Operational workflow",
];

const columns = ["Metric", "Source", "Target", "Delta", "Reason", "Owner", "Decision"];

const rows = [
  {
    metric: "Gross pay",
    source: "€412,880.00",
    target: "€412,880.00",
    delta: "0.00",
    deltaBold: true,
    reason: "—",
    owner: "—",
    decision: "Matched",
  },
  {
    metric: "Tax withheld",
    source: "€98,220.40",
    target: "€98,144.10",
    delta: "−€76.30",
    deltaBold: true,
    reason: "Rounding rule difference",
    owner: "M. Weber",
    decision: "Accepted (tolerance)",
  },
  {
    metric: "Employer contributions",
    source: "€54,010.00",
    target: "€55,120.00",
    delta: "+€1,110.00",
    deltaBold: true,
    reason: "Rate table version mismatch",
    owner: "R. Tanaka",
    decision: "Under review",
  },
];

export default function ValidationSection() {
  return (
    <section className="bg-indigo-50 px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 h-5">
              <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Validation + parallel run / variance governance
              </span>
            </div>
          </div>
          <h2 className="pt-3.5 text-center text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
            Made explainable, never a hidden score
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#5B646B] text-base font-normal font-['Inter'] leading-6">
            Validation is separated by domain. A parallel run compares explicit
            source and target scope, metrics and periods against approved
            tolerances — every variance is recorded, not smoothed over.
          </p>
        </Reveal>

        {/* Domain tags */}
        <Reveal delay={60} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {domains.map((d) => (
              <span
                key={d}
                className="rounded-full bg-sky-100 px-2.5 py-[5px] text-xs font-bold text-sky-800"
              >
                {d}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Source/Target header */}
        <Reveal delay={80} className="mt-8">
          <div className="flex overflow-hidden rounded-tl-xl rounded-tr-xl outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="flex-1 bg-indigo-50 px-5 py-4">
              <span className="text-xs font-bold text-sky-950">
                SOURCE — current payroll system
              </span>
            </div>
            <div className="flex-1 bg-sky-950 px-5 py-4">
              <span className="text-xs font-bold text-white">
                TARGET — Zoiko Payroll
              </span>
            </div>
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay={100}>
          <div className="overflow-hidden rounded-bl-xl rounded-br-xl border-l border-r border-b border-slate-200 bg-white">
            {/* Column headers */}
            <div className="flex">
              {columns.map((col) => (
                <div
                  key={col}
                  className={`border-b border-slate-200 bg-white px-3.5 pt-2 pb-2.5 ${
                    col === "Metric"
                      ? "w-52"
                      : col === "Source" || col === "Target"
                        ? "w-32"
                        : col === "Delta" || col === "Owner"
                          ? "w-28"
                          : col === "Reason"
                            ? "w-60"
                            : "w-48"
                  }`}
                >
                  <span className="text-xs font-bold uppercase leading-4 text-gray-400">
                    {col}
                  </span>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {rows.map((row, i) => (
              <div key={row.metric} className={`flex ${i < rows.length - 1 ? "border-b border-slate-200" : ""}`}>
                <div className="w-52 px-3.5 py-3">
                  <span className="text-xs text-sky-950">{row.metric}</span>
                </div>
                <div className="w-32 px-3.5 py-3">
                  <span className="text-xs text-sky-950">{row.source}</span>
                </div>
                <div className="w-32 px-3.5 py-3">
                  <span className="text-xs text-sky-950">{row.target}</span>
                </div>
                <div className="w-28 px-3.5 py-3">
                  <span className={`text-xs ${row.deltaBold ? "font-bold" : "font-normal"} text-sky-950`}>
                    {row.delta}
                  </span>
                </div>
                <div className="w-60 px-3.5 py-3">
                  <span className="text-xs text-sky-950">{row.reason}</span>
                </div>
                <div className="w-28 px-3.5 py-3">
                  <span className="text-xs text-sky-950">{row.owner}</span>
                </div>
                <div className="w-48 px-3.5 py-3">
                  <span className="text-xs text-sky-950">{row.decision}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Note */}
        <Reveal delay={120} className="mt-3">
          <p className="text-xs leading-5 text-gray-400">
            A parallel run supports implementation validation — it is not legal
            or compliance certification.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
