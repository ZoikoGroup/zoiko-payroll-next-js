import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = [
  {
    title: "Source system",
    rows: [
      "Owner: Customer",
      "Environment: Production",
      "Endpoint: Authorized",
      "Data contract: v2.3",
    ],
  },
  {
    title: "Zoiko Payroll",
    rows: ["Mapping / transformation", "Runtime activity log", "Reconciliation engine", "Audit trail"],
  },
  {
    title: "Destination system",
    rows: [
      "Owner: Customer",
      "Support: Provider-dependent",
      "Reconciliation: Enabled",
      "Audit: Recorded",
    ],
  },
];

const connectors = [
  ["→ Inbound", "↔ Bidirectional"],
  ["← Outbound", "⚡ Event notif."],
];

const legend = [
  "→ Inbound: approved data enters Zoiko Payroll",
  "← Outbound: approved data leaves Zoiko Payroll",
  "↔ Bidirectional: distinct verified objects move both ways",
  "⚡ Event notification: signals an event, not the full object",
];

export default function ArchitectureSection() {
  return (
    <section className="bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Controlled integration architecture</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Every connection has a source, a direction, and an owner.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Direction is always explicit — inbound, outbound, bidirectional, event notification, or
            manual/file-assisted. &ldquo;Sync&rdquo; is never used as a substitute for direction.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="relative overflow-hidden rounded-[20px] bg-[#0E1A33] p-6 sm:p-11">
            <div
              className="absolute inset-0 bg-radial-[at_20%_0%] from-blue-500/25 to-blue-500/0"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {columns.map((column, index) => (
                <div key={column.title} className="contents">
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 pt-4 pb-6">
                    <h3 className="pb-1.5 text-sm font-extrabold leading-5 text-white">
                      {column.title}
                    </h3>
                    <div className="space-y-1.5">
                      {column.rows.map((row) => (
                        <p
                          key={row}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-xs leading-4 text-white/60"
                        >
                          {row}
                        </p>
                      ))}
                    </div>
                  </div>

                  {index < connectors.length && (
                    <div className="flex shrink-0 flex-row justify-center gap-2 px-4 lg:flex-col">
                      {connectors[index].map((connector) => (
                        <span
                          key={connector}
                          className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-[5px] text-xs leading-4 text-blue-500"
                        >
                          {connector}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="relative mt-6 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-white/10 pt-6 lg:grid-cols-3">
              {legend.map((item) => (
                <p key={item} className="text-xs leading-4 text-white/60">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
