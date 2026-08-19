import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const controls = [
  "Role-based access",
  "Purpose-bound detail",
  "Scoped entities",
  "Controlled exports",
  "Audit evidence",
  "Least privilege",
];

const evidence = [
  { label: "Reviewer", value: "A. Meyer" },
  { label: "Role", value: "Finance / Controller" },
  { label: "Period", value: "Apr 2026" },
  { label: "Entity", value: "Acme GmbH · DE-01" },
  { label: "Payroll version", value: "v3" },
  { label: "Decision", value: "Reviewed, variance explained" },
  { label: "Timestamp", value: "09 Apr 2026, 14:02 UTC" },
  { label: "Export event", value: "Accepted by ERP" },
  { label: "Reconciliation event", value: "Partial — 2 of 3 matched" },
  { label: "Material change", value: "None since approval" },
];

export default function AuditEvidenceSection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Approval, audit evidence + security</Eyebrow>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/finance-teams/audit-evidence.png"
                alt="A finance and controls team reviewing evidence together"
                className="aspect-[475/294] w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-slate-900/70"
                aria-hidden="true"
              />
              <h2 className="absolute inset-x-0 top-0 px-5 pt-5 text-xl font-extrabold leading-7 text-white sm:text-2xl">
                Financial governance, built into payroll — not bolted on.
              </h2>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {controls.map((control) => (
                <p
                  key={control}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold leading-5 text-sky-950"
                >
                  {control}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl bg-sky-950 px-5 py-6 sm:px-6">
              <p className="text-xs font-bold uppercase leading-4 tracking-wide text-white/60">
                Audit evidence — DE-01, run v3
              </p>

              <div className="mt-5">
                {evidence.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex flex-wrap items-center justify-between gap-3 py-2.5 ${
                      index < evidence.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="text-xs leading-5 text-white/60">{row.label}</span>
                    <span className="text-xs font-bold leading-5 text-white">{row.value}</span>
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
