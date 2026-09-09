import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stats = [
  { value: "1,236", label: "Approved obligations" },
  { value: "£1.2M", label: "Funding confirmed" },
  { value: "4", label: "Payment groups" },
  { value: "3", label: "Exceptions" },
];

const pipeline = [
  { label: "Created", active: false },
  { label: "Validated", active: false },
  { label: "Funded", active: false },
  { label: "Authorized", active: true },
  { label: "Submitted", active: false },
  { label: "Settled", active: false },
  { label: "Reconciled", active: false },
];

const rows = [
  {
    group: "Salaried — GBP",
    provider: "Bank Route A",
    amount: "£820,400",
    status: "ready" as const,
    statusLabel: "Ready to release",
  },
  {
    group: "Contractors — EUR",
    provider: "Provider B",
    amount: "€142,000",
    status: "pending" as const,
    statusLabel: "Awaiting funding",
  },
  {
    group: "Statutory — GBP",
    provider: "Bank Route A",
    amount: "£210,000",
    status: "authorized" as const,
    statusLabel: "Authorized",
  },
];

const columns = [
  { label: "Payment group", width: "w-80" },
  { label: "Provider", width: "w-60" },
  { label: "Amount", width: "w-44" },
  { label: "Status", width: "w-80" },
];

function StatusPill({ variant, label }: { variant: 'ready' | 'pending' | 'authorized'; label: string }) {
  const styles = {
    ready: {
      bg: "bg-[rgba(229,244,236,1)]",
      text: "text-emerald-700",
      dot: "bg-emerald-600",
    },
    pending: {
      bg: "bg-[rgba(252,241,216,1)]",
      text: "text-amber-700",
      dot: "bg-amber-500",
    },
    authorized: {
      bg: "bg-[rgba(231,237,253,1)]",
      text: "text-sky-600",
      dot: "bg-sky-600",
    },
  };

  const current = styles[variant];

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-[100px] px-2.5 py-1 ${current.bg}`}>
      <span className={`size-1.5 rounded-[3px] ${current.dot}`} />
      <span className={`text-xs font-semibold font-['Inter'] leading-4 tracking-tight ${current.text}`}>
        {label}
      </span>
    </div>
  );
}

export default function PrimaryProductProofSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <Eyebrow center>Primary Product Proof</Eyebrow>
              <h2 className="pt-px text-center text-4xl font-extrabold leading-9 text-slate-900">
                Funding readiness through reconciliation, in one view
              </h2>
              <p className="pb-[0.59px] text-center text-base font-normal leading-6 text-gray-500">
                Groups, routes and exceptions — without exposing full bank
                credentials.
              </p>
            </div>

            {/* Payment control center window */}
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-gray-100 bg-slate-50 px-4 py-3">
                <div className="flex items-start gap-1.5">
                  <span className="size-2 rounded-sm bg-slate-200" />
                  <span className="size-2 rounded-sm bg-slate-200" />
                  <span className="size-2 rounded-sm bg-slate-200" />
                </div>
                <span className="pl-1.5 text-xs font-normal leading-4 text-gray-400">
                  /payment-control-center — Cycle PMT-0842
                </span>
              </div>

              <div className="flex flex-col gap-4 px-6 py-5">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2.5 border-b border-gray-100 pb-4">
                  {[
                    ["Entity", "UK Ltd"],
                    ["Pay group", "Salaried"],
                    ["Pay date", "Aug 25"],
                    ["Approval version", "v6"],
                  ].map(([filter, value]) => (
                    <div
                      key={filter}
                      className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1.5 outline outline-1 outline-offset-[-1px] outline-slate-200"
                    >
                      <span className="text-xs font-normal leading-4 text-gray-700">
                        {filter}
                      </span>
                      <span className="text-xs font-semibold leading-4 text-slate-900">
                        {value}
                      </span>
                    </div>
                  ))}
                  <span className="ml-auto text-xs font-normal leading-4 text-gray-400">
                    State: Awaiting authorization
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col justify-start gap-px rounded-[10px] bg-slate-50 px-4 py-3.5 outline outline-1 outline-offset-[-1px] outline-slate-200"
                    >
                      <span className="text-2xl font-semibold leading-9 text-slate-900">
                        {stat.value}
                      </span>
                      <span className="text-xs font-normal leading-4 text-gray-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pipeline pills */}
                <div className="flex flex-wrap items-center justify-center pt-0.5">
                  {pipeline.map((step, idx) => (
                    <div key={step.label} className="flex items-center">
                      <div
                        className={`rounded-full px-4 py-2 ${
                          step.active
                            ? "bg-orange-100 outline outline-1 outline-offset-[-1px] outline-yellow-700"
                            : "bg-white outline outline-1 outline-offset-[-1px] outline-slate-200"
                        }`}
                      >
                        <span
                          className={`text-xs font-semibold leading-4 ${
                            step.active ? "text-yellow-700" : "text-slate-900"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {idx < pipeline.length - 1 && (
                        <span className="px-2 text-sm font-normal leading-5 text-gray-400">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="flex flex-col overflow-x-auto">
                  {/* Header */}
                  <div className="flex min-w-[820px] items-start">
                    {columns.map((col) => (
                      <div
                        key={col.label}
                        className={`${col.width} border-b border-slate-200`}
                      >
                        <span className="block px-3 pt-1 pb-2 text-xs font-semibold uppercase leading-4 tracking-wide text-gray-400">
                          {col.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Rows */}
                  {rows.map((row, idx) => {
                    const isLast = idx === rows.length - 1;
                    return (
                      <div key={row.group} className="flex min-w-[820px] items-start">
                        <div
                          className={`w-80 px-3 py-3.5 ${
                            isLast ? "" : "border-b border-gray-100"
                          }`}
                        >
                          <span className="text-sm font-semibold leading-5 text-slate-900">
                            {row.group}
                          </span>
                        </div>
                        <div
                          className={`w-60 px-3 pt-4 pb-3.5 ${
                            isLast ? "" : "border-b border-gray-100"
                          }`}
                        >
                          <span className="text-xs font-normal leading-5 text-gray-500">
                            {row.provider}
                          </span>
                        </div>
                        <div
                          className={`w-44 px-3 pt-4 pb-3.5 ${
                            isLast ? "" : "border-b border-gray-100"
                          }`}
                        >
                          <span className="text-xs font-normal leading-5 text-gray-500">
                            {row.amount}
                          </span>
                        </div>
                        <div
                          className={`w-80 p-3 flex items-center ${
                            isLast ? "" : "border-b border-gray-100"
                          }`}
                        >
                          <StatusPill variant={row.status} label={row.statusLabel} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}