import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip from "./StatusChip";

/** Amber marks the two steps where prior finance evidence stops being current. */
const timeline: { title: string; detail: string; stale?: boolean }[] = [
  { title: "Payroll approved", detail: "Run v3, DE-01 · 09 Apr 2026" },
  { title: "Finance reviewed", detail: "Totals reviewed, variance explained" },
  { title: "Finance export", detail: "Package sent to ERP, accepted" },
  { title: "Material adjustment", detail: "Backdated correction submitted, 14 Apr", stale: true },
  {
    title: "Evidence becomes stale",
    detail: "Prior review no longer reflects current version",
    stale: true,
  },
  { title: "Revalidation / re-review", detail: "Required before reconciliation continues" },
  { title: "Reconciliation", detail: "Resumes against the current version" },
];

const alertRows = [
  { label: "Period", value: "Apr 2026" },
  { label: "Entity", value: "Acme GmbH · DE-01" },
  { label: "Version", value: "v3 → v4" },
  { label: "Impact", value: "Net pay, 3 employees" },
  { label: "Finance review status", value: "Stale — revalidation required" },
  { label: "Required next action", value: "Re-review before reconciliation" },
];

export default function MaterialChangeSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Material change + stale evidence"
              title="Approval doesn't freeze reality."
            />

            <ol className="mt-6 border-l border-sky-200 pl-7">
              {timeline.map((step) => (
                <li key={step.title} className="relative pb-6 last:pb-0">
                  <span
                    className={`absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full ${
                      step.stale ? "bg-yellow-700" : "bg-sky-600"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold leading-5 text-sky-950">{step.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-gray-600">{step.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              title="A material change after approval doesn't silently carry finance's prior review forward."
              description="When a material payroll change happens after finance has reviewed, reconciled or exported a period, that prior evidence is marked stale — not deleted, not hidden."
            />

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-bold leading-5 text-yellow-700">
                  <span aria-hidden="true">⚠</span> Material Payroll Change Detected
                </p>
                <StatusChip tone="warn">Stale evidence</StatusChip>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {alertRows.map((row) => (
                  <div key={row.label}>
                    <p className="text-[0.625rem] font-bold uppercase leading-4 tracking-wide text-gray-400">
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm font-bold leading-5 text-sky-950">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
