import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const scope = [
  { label: "Period", value: "Apr 1–30, 2026" },
  { label: "Entity / group", value: "Acme GmbH · DE-01" },
  { label: "Currency", value: "EUR, local" },
  { label: "Source / version", value: "Run v3, approved" },
  { label: "Freshness", value: "Current — no material change" },
  { label: "Comparison basis", value: "Prior approved period" },
];

export default function TotalsScopeSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/finance-teams/totals-scope.png"
              alt="Payroll totals and scope reviewed on screen"
              className="aspect-[617/390] w-full rounded-2xl object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              eyebrow="Payroll totals & scope"
              title="Every number carries its context, not just its value"
              description="A total without scope isn't defensible. Every figure finance sees is bound to a period, entity, group, currency, version and freshness state."
            />

            <div className="mt-6">
              {scope.map((row) => (
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
        </div>
      </div>
    </section>
  );
}
