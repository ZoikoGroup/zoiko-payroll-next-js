import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import RadialDiagram from "./RadialDiagram";

type Status = "Available" | "Limited availability" | "Partner-supported" | "Planned" | "Not available";

const statusStyles: Record<Status, string> = {
  Available: "bg-emerald-50 text-emerald-700",
  "Limited availability": "bg-amber-50 text-amber-700",
  "Partner-supported": "bg-rose-50 text-rose-700",
  Planned: "bg-amber-50 text-amber-700",
  "Not available": "bg-rose-50 text-rose-700",
};

const dotStyles: Record<Status, string> = {
  Available: "bg-emerald-500",
  "Limited availability": "bg-amber-500",
  "Partner-supported": "bg-rose-500",
  Planned: "bg-amber-500",
  "Not available": "bg-rose-500",
};

const jurisdictions: { code: string; name: string; status: Status }[] = [
  { code: "US", name: "United States", status: "Available" },
  { code: "GB", name: "United Kingdom", status: "Available" },
  { code: "DE", name: "Germany", status: "Limited availability" },
  { code: "BR", name: "Brazil", status: "Partner-supported" },
  { code: "IN", name: "India", status: "Planned" },
  { code: "CN", name: "China", status: "Not available" },
];

export default function GlobalDesignSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Global design and jurisdiction transparency</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Designed for global use. Implemented according to local requirements.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Payroll is global in scale but local in execution. Zoiko Payroll provides a consistent
            platform for managing payroll across supported jurisdictions while defining and governing
            the applicable local scope separately. &ldquo;Global&rdquo; describes the product
            architecture and operating model; it does not mean identical service coverage in every
            market.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-5">
            <input
              type="text"
              readOnly
              placeholder="Search the jurisdiction directory"
              className="w-full cursor-default rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none"
            />
            <ul className="mt-4 divide-y divide-slate-100">
              {jurisdictions.map((row) => (
                <li key={row.code} className="flex items-center justify-between gap-3 py-3">
                  <span className="flex items-center gap-2.5 text-sm text-brand-dark">
                    <span className="flex h-6 w-8 items-center justify-center rounded bg-slate-100 text-[11px] font-semibold text-slate-500">
                      {row.code}
                    </span>
                    {row.name}
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">
            <RadialDiagram
              centerLabel=""
              radius={90}
              size={220}
              items={jurisdictions.map((j) => ({
                label: j.code,
                dotClassName: dotStyles[j.status],
              }))}
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-brand-dark">Does Zoiko Payroll work in every country?</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            No universal country claim is made. Zoiko Payroll is built for multi-jurisdictional
            operations, but current capability varies by country, service model, worker population,
            integrations, and local requirements. The jurisdiction directory is the authoritative
            source for current availability and documented scope.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
