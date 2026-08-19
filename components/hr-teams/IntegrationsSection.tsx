import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import CheckCard from "./CheckCard";

/** Zoiko Payroll is the emphasised node — everything either feeds it or reads from it. */
const flow = [
  { label: "HRIS", emphasis: false },
  { label: "Mapping", emphasis: false },
  { label: "Zoiko Payroll", emphasis: true },
  { label: "Payroll workflow", emphasis: false },
  { label: "Employee record", emphasis: false },
];

const stats = [
  { value: "1,240", label: "Records — last run · Inbound" },
  { value: "1,236", label: "Accepted" },
  { value: "4", label: "Failed — v14.2 mapping" },
  { value: "Active", label: "Duplicate prevention" },
];

const guarantees = [
  { title: "Source authority", detail: "Which system owns each field." },
  { title: "Partial failure", detail: "Accepted, failed and rejected records shown." },
  { title: "Retry", detail: "Eligible records only; history preserved." },
  { title: "Reconciliation", detail: "Expected vs. accepted, with an owner." },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-[#E8F0F9] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="HRIS / HCM integrations"
            title="Direction and ownership stay explicit."
            description="Never syncs seamlessly. Each field's source and mapping version is visible."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 sm:px-6">
            <div className="flex flex-col items-stretch justify-center gap-3 lg:flex-row lg:items-center">
              {flow.map((node, index) => (
                <div
                  key={node.label}
                  className="flex flex-col items-center gap-3 lg:flex-1 lg:flex-row"
                >
                  <span
                    className={`w-full rounded-lg px-5 py-3.5 text-center text-sm font-bold leading-5 ${
                      node.emphasis
                        ? "bg-linear-71 from-blue-500 to-sky-900 text-white"
                        : "border border-slate-200 bg-slate-50 text-sky-950"
                    }`}
                  >
                    {node.label}
                  </span>
                  {index < flow.length - 1 ? (
                    <span className="shrink-0 text-slate-400" aria-hidden="true">
                      <span className="hidden lg:inline">→</span>
                      <span className="lg:hidden">↓</span>
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <p className="text-2xl font-bold leading-9 text-sky-950">{stat.value}</p>
                <p className="mt-0.5 text-xs leading-4 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {guarantees.map((item) => (
              <CheckCard key={item.title} title={item.title}>
                {item.detail}
              </CheckCard>
            ))}
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            A connector is named only when production-ready and commercially available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
