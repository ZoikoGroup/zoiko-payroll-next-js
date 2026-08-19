import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const summary = [
  { label: "Prior period", value: "€408,120.12" },
  { label: "Approved baseline", value: "€412,908.44" },
  { label: "Difference", value: "+€4,788.32" },
  { label: "Materiality", value: "Below threshold" },
  { label: "Explanation state", value: "Context available" },
  { label: "Authorized drill-down", value: "Finance / Controller" },
];

/** The full explanation vocabulary — every line lands in exactly one of these states. */
const states: { label: string; tone: ChipTone }[] = [
  { label: "Not reviewed", tone: "neutral" },
  { label: "Context available", tone: "info" },
  { label: "Explained", tone: "ok" },
  { label: "Needs payroll input", tone: "warn" },
  { label: "Needs finance review", tone: "warn" },
  { label: "Resolved", tone: "ok" },
];

const lines: {
  line: string;
  prior: string;
  current: string;
  delta: string;
  status: string;
  tone: ChipTone;
}[] = [
  {
    line: "Base salaries",
    prior: "€380,200",
    current: "€381,900",
    delta: "+€1,700",
    status: "Explained",
    tone: "ok",
  },
  {
    line: "Overtime",
    prior: "€12,400",
    current: "€15,880",
    delta: "+€3,480",
    status: "Needs payroll input",
    tone: "warn",
  },
  {
    line: "Statutory deductions",
    prior: "€41,900",
    current: "€42,240",
    delta: "+€340",
    status: "Explained",
    tone: "ok",
  },
  {
    line: "One-time adjustments",
    prior: "€0",
    current: "-€732",
    delta: "-€732",
    status: "Needs finance review",
    tone: "warn",
  },
];

export default function VarianceSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Variance review"
              title="Explain the movement. Don't just flag the difference"
            />

            <div className="mt-6">
              {summary.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-3"
                >
                  <span className="text-xs font-semibold leading-4 text-gray-400">{row.label}</span>
                  <span className="text-xs font-bold leading-5 text-sky-950">{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="bg-sky-950 px-5 py-3.5">
                <p className="text-sm font-bold leading-5 text-white">
                  Variance Review — DE-01, Apr vs Mar 2026
                </p>
              </div>

              <div className="flex flex-wrap gap-2 px-5 py-4">
                {states.map((state) => (
                  <StatusChip key={state.label} tone={state.tone}>
                    {state.label}
                  </StatusChip>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-lg border-collapse text-left">
                  <thead>
                    <tr>
                      {["Line", "Prior", "Current", "Δ", "Status"].map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-slate-200 bg-slate-50 px-3 py-2.5 text-[0.625rem] font-bold uppercase leading-4 tracking-wide text-gray-400"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {lines.map((row, index) => {
                      const cellBorder = index < lines.length - 1 ? "border-b border-slate-100" : "";
                      return (
                        <tr key={row.line}>
                          <td
                            className={`px-3 py-3.5 text-xs leading-5 text-sky-950 ${cellBorder}`}
                          >
                            {row.line}
                          </td>
                          <td
                            className={`px-3 py-3.5 font-mono text-xs leading-5 text-gray-700 ${cellBorder}`}
                          >
                            {row.prior}
                          </td>
                          <td
                            className={`px-3 py-3.5 font-mono text-xs leading-5 text-gray-700 ${cellBorder}`}
                          >
                            {row.current}
                          </td>
                          <td
                            className={`px-3 py-3.5 font-mono text-xs leading-5 text-gray-700 ${cellBorder}`}
                          >
                            {row.delta}
                          </td>
                          <td className={`px-3 py-2.5 ${cellBorder}`}>
                            <StatusChip tone={row.tone}>{row.status}</StatusChip>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
