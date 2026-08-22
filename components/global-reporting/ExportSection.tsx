import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const releaseFields = [
  { label: "Requester", value: "L. Tan — APAC Reporting" },
  { label: "Purpose", value: "Regional close review" },
  { label: "Classification", value: "Restricted — payroll amounts" },
  { label: "Scope", value: "Permitted Entities v4.2 · APAC" },
  { label: "Snapshot / revision", value: "SNAP-2026-04-v3" },
  { label: "Retention / expiry", value: "90 days" },
  { label: "Recipient policy", value: "Named recipients only" },
  { label: "Delivery channel", value: "Secure link, revalidated" },
];

const boundaries = [
  { system: "Global Reporting", role: "Operational decision support", owner: true },
  { system: "Finance / ERP", role: "Owns the general ledger" },
  { system: "Tax systems", role: "Owns filings" },
  { system: "Statutory books", role: "Owns legal accounts" },
  { system: "BI / analytics", role: "Downstream analysis" },
];

export default function ExportSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="Stage 08 — Export & distribution"
            label="Exports, distribution, security + system boundaries"
            heading="Export is a governed release, not a download button"
          >
            Scheduled reports revalidate recipient, scope and permission at delivery time, and
            record partial delivery failures safely rather than silently.
          </StageHeader>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
                <h3 className="text-sm font-bold text-gray-900">New export release</h3>
                <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-semibold text-yellow-700">
                  Requires approval
                </span>
              </div>

              <dl className="grid grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-2">
                {releaseFields.map((field) => (
                  <div
                    key={field.label}
                    className="rounded-lg border border-slate-200 px-3.5 py-3"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wide text-gray-400">
                      {field.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-5 text-gray-700">{field.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-wrap justify-end gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4">
                <span className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700">
                  Decline
                </span>
                <span className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">
                  Approve release
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-[10px]">
              <img
                src="/images/global-reporting/export.png"
                alt="Reporting owner reviewing an export release before approval"
                className="h-full w-full object-cover"
              />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent px-4 py-4 text-xs text-white">
                Every export carries requester, purpose, scope and an audit trail.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <h3 className="font-display text-base font-bold text-gray-900">System boundaries</h3>
          <ol className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-y-3">
            {boundaries.map((boundary, index) => (
              <li key={boundary.system} className="flex items-center gap-2">
                <div
                  className={`flex-1 rounded-lg border px-4 py-3 text-center ${
                    boundary.owner
                      ? "border-[#0E1E3C] bg-[#0E1E3C]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p
                    className={`text-sm font-bold ${boundary.owner ? "text-white" : "text-gray-900"}`}
                  >
                    {boundary.system}
                  </p>
                  <p
                    className={`mt-0.5 text-xs ${boundary.owner ? "text-white/60" : "text-gray-500"}`}
                  >
                    {boundary.role}
                  </p>
                </div>
                {index < boundaries.length - 1 ? (
                  <span aria-hidden="true" className="hidden shrink-0 text-gray-400 sm:inline">
                    &rarr;
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-center text-xs text-gray-500">
            Global Reporting is decision support — it is never presented as the accounting system of
            record.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
