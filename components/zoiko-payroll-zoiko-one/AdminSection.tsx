import Reveal from "../ui/Reveal";

const adminRows = [
  { label: "Coordinated admin", status: "Evaluation question", color: "gray" },
  { label: "Product-specific admin", status: "Verified", color: "green" },
  { label: "Cross-product roles", status: "Conditional", color: "yellow" },
];

const reportingRows = [
  { label: "Shared metric definitions", status: "Not currently verified", color: "gray" },
  { label: "Payroll-specific reporting", status: "Verified", color: "green" },
  { label: "Universal reporting truth", status: "Not claimed", color: "rose" },
];

const reliabilityRows = [
  { label: "Health monitoring", status: "Verified", color: "green" },
  { label: "Partial-failure handling", status: "Verified", color: "green" },
  { label: "Retry & duplicate prevention", status: "Verified", color: "green" },
  { label: "Support ownership", status: "Named per connection", color: "sky" },
];

function StatusBadge({ status, color }: { status: string; color: string }) {
  const colorMap: Record<string, string> = {
    gray: "bg-slate-100 text-gray-600",
    green: "bg-green-100 text-green-700",
    yellow: "bg-orange-100 text-yellow-700",
    rose: "bg-rose-100 text-rose-700",
    sky: "bg-sky-100 text-sky-700",
  };
  const dotMap: Record<string, string> = {
    gray: "bg-gray-600",
    green: "bg-green-700",
    yellow: "bg-yellow-700",
    rose: "bg-rose-700",
    sky: "bg-sky-700",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[20px] px-2.5 py-[5px] text-xs font-bold leading-4 ${colorMap[color] || colorMap.gray}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-[3px] ${dotMap[color] || dotMap.gray}`}
      />
      {status}
    </span>
  );
}

function Card({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; status: string; color: string }[];
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
      <p className="pb-3.5 text-xs font-bold uppercase leading-4 tracking-wide text-gray-400">
        {title}
      </p>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`flex items-center justify-between gap-3 py-2 ${i < rows.length - 1 ? "border-b border-slate-100" : ""}`}
        >
          <span className="whitespace-nowrap text-xs leading-5 text-sky-950">
            {row.label}
          </span>
          <StatusBadge status={row.status} color={row.color} />
        </div>
      ))}
    </div>
  );
}

export default function AdminSection() {
  return (
    <section className="border-t border-slate-100 bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-[1220px]">
            {/* Eyebrow */}
            <div>
              <span className="text-xs font-bold uppercase leading-4 tracking-wider text-sky-600">
                / Administration, reporting + operational reliability
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold leading-9 text-sky-950">
              Connected does not mean uncontrolled.
            </h2>

            {/* Image */}
            <div className="relative mt-4 overflow-hidden rounded-2xl shadow-[0px_12px_32px_-14px_rgba(10,48,80,0.16),0px_1px_2px_0px_rgba(10,48,80,0.05)]">
              <img
                src="/si.png"
                alt="Connected operations dashboard"
                className="h-72 w-full object-cover"
              />
              <div className="absolute left-4 top-[27px] rounded-[10px] bg-white/95 px-3 pt-2 pb-2.5 backdrop-blur-[3px]">
                <p className="text-xs font-bold leading-4 text-sky-950">
                  Health monitored
                </p>
              </div>
              <div className="absolute bottom-[27px] right-[16px] rounded-[10px] bg-white/95 px-3 pt-2 pb-2.5 backdrop-blur-[3px]">
                <p className="text-xs font-bold leading-4 text-sky-950">
                  Support ownership named
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card title="Administration" rows={adminRows} />
              <Card title="Reporting" rows={reportingRows} />
              <Card title="Reliability" rows={reliabilityRows} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}