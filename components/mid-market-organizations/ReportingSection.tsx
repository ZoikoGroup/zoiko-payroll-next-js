import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const approvals = [
  { group: "US-Salaried", gross: "$412,908 USD", status: "Approved" },
  { group: "US-Hourly", gross: "$198,340 USD", status: "In review" },
  { group: "Retail-Hourly", gross: "$276,110 USD", status: "In review" },
];

/** Exception counts for the last six cycles; the spike is the one worth explaining. */
const aging = [
  { cycle: "Nov", height: "h-8" },
  { cycle: "Dec", height: "h-12" },
  { cycle: "Jan", height: "h-7" },
  { cycle: "Feb", height: "h-20", spike: true },
  { cycle: "Mar", height: "h-9" },
  { cycle: "Apr", height: "h-6" },
];

export default function ReportingSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-md border-collapse text-left">
                <thead>
                  <tr>
                    {["Entity / group", "Approved gross", "Status"].map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="bg-slate-50 px-4 py-3.5 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {approvals.map((approval) => (
                    <tr key={approval.group}>
                      <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-sky-950">
                        {approval.group}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                        {approval.gross}
                      </td>
                      <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                        {approval.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 rounded-lg bg-sky-100 px-5 py-4 text-sm leading-6 text-sky-900">
              Expected total $1,051,578 USD · Received/matched $887,908 USD · Variance $163,670
              across 2 groups unmatched. This period shows <strong>Partial</strong> — never displayed
              as Reconciled while a downstream variance remains open.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              eyebrow="Reporting & reconciliation"
              title="Traceable visibility for finance — not decorative analytics"
            />

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 px-5 py-5">
                <p className="text-2xl font-extrabold leading-8 text-sky-950">4 / 6</p>
                <p className="mt-1 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500">
                  Reconciliation complete
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 px-5 py-5">
                <p className="text-2xl font-extrabold leading-8 text-sky-950">5</p>
                <p className="mt-1 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500">
                  Exports this period
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500">
                Exception aging · last 6 cycles
              </p>
              <div className="mt-4 flex items-end gap-3">
                {aging.map((bar) => (
                  <div key={bar.cycle} className="flex-1">
                    <div
                      className={`w-full rounded-t-sm ${bar.height} ${
                        bar.spike ? "bg-amber-500" : "bg-sky-500"
                      }`}
                      role="img"
                      aria-label={`${bar.cycle} exception volume`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-xs leading-4 text-slate-500">
                <span>{aging[0].cycle}</span>
                <span>{aging[aging.length - 1].cycle}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
