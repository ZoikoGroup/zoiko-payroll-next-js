import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const meta = [
  { label: "Period", value: "Apr 2026" },
  { label: "Entity", value: "Acme GmbH" },
  { label: "Group", value: "DE-01" },
  { label: "Currency", value: "EUR" },
  { label: "Version", value: "v3" },
  { label: "Approval", value: "Approved" },
];

const stats = [
  { label: "Total payroll", value: "€412,908" },
  { label: "Variance vs prior", value: "€1,240" },
  { label: "Reconciliation", value: "Partial" },
  { label: "Export status", value: "Accepted" },
];

const rows: { item: string; detail: string; status: string; tone: ChipTone; mono?: boolean }[] = [
  {
    item: "Payroll total",
    detail: "€412,908.44, net",
    status: "Approved",
    tone: "ok",
    mono: true,
  },
  { item: "Material change", detail: "None since approval", status: "None", tone: "neutral" },
  {
    item: "Reconciliation",
    detail: "2 of 3 downstream groups matched",
    status: "Partial",
    tone: "warn",
  },
  {
    item: "Evidence",
    detail: "Run history, approval, export events",
    status: "Available",
    tone: "info",
  },
];

/**
 * Callout labels, positioned around the card as in Figma — the two side labels
 * clear the card entirely, the top and bottom ones overhang its edge. Listed
 * inline beneath the card on narrower screens.
 */
const callouts = [
  { label: "Approved outcome", position: "-top-4 -left-7" },
  { label: "Scoped totals", position: "top-[19%] left-full ml-3" },
  { label: "Explainable variance", position: "top-[80%] -left-[116px]" },
  { label: "Reconciliation & evidence", position: "-bottom-4 right-12" },
];

export default function OversightCenterSection() {
  return (
    <section id="oversight-center" className="scroll-mt-24 bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Finance payroll oversight center"
            title="One scoped view of approved payroll outcomes — not raw payroll data"
            description="All values shown are synthetic sample data."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="relative mx-auto max-w-4xl">
            {callouts.map((callout) => (
              <span
                key={callout.label}
                className={`absolute z-10 hidden whitespace-nowrap rounded-xl border-l-[3px] border-sky-600 bg-white px-3 py-2 text-xs font-bold leading-4 text-sky-950 shadow-[0_14px_30px_-10px_rgba(10,48,80,0.3)] xl:block ${callout.position}`}
              >
                {callout.label}
              </span>
            ))}

            <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_30px_60px_-24px_rgba(10,48,80,0.28)]">
              <div className="flex items-center gap-2 bg-sky-950 px-5 py-3">
                <span className="h-2 w-2 rounded-sm bg-white/25" aria-hidden="true" />
                <span className="h-2 w-2 rounded-sm bg-white/25" aria-hidden="true" />
                <span className="h-2 w-2 rounded-sm bg-white/25" aria-hidden="true" />
                <p className="pl-2.5 text-xs font-semibold leading-5 text-white/70">
                  Finance Payroll Oversight Center — Acme Group
                </p>
              </div>

              <div className="flex flex-col gap-4 p-5 sm:p-6">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
                  {meta.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-100 bg-slate-50 p-2.5"
                    >
                      <p className="text-[0.55rem] font-bold uppercase leading-3 tracking-wide text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs font-bold leading-5 text-sky-950">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-sky-950 p-3.5">
                      <p className="text-xs uppercase leading-4 tracking-wide text-white/60">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 font-mono text-lg font-extrabold leading-7 text-white">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-lg border-collapse text-left">
                    <thead>
                      <tr>
                        {["Item", "Detail", "Status"].map((column) => (
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
                      {rows.map((row, index) => {
                        const cellBorder =
                          index < rows.length - 1 ? "border-b border-slate-100" : "";
                        return (
                          <tr key={row.item}>
                            <td
                              className={`px-3 py-3.5 text-xs leading-5 text-gray-700 ${cellBorder}`}
                            >
                              {row.item}
                            </td>
                            <td
                              className={`px-3 py-3.5 text-xs leading-5 text-gray-700 ${cellBorder} ${
                                row.mono ? "font-mono font-bold" : ""
                              }`}
                            >
                              {row.detail}
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
            </div>

            <div className="mt-5 flex flex-wrap gap-2 xl:hidden">
              {callouts.map((callout) => (
                <span
                  key={callout.label}
                  className="rounded-xl border-l-[3px] border-sky-600 bg-white px-3 py-2 text-xs font-bold leading-4 text-sky-950 shadow-[0_14px_30px_-10px_rgba(10,48,80,0.3)]"
                >
                  {callout.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
