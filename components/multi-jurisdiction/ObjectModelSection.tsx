import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const hierarchy = [
  { step: "01", label: "Organization" },
  { step: "02", label: "Region" },
  { step: "03", label: "Jurisdiction", emphasis: true },
  { step: "04", label: "Legal Entity" },
  { step: "05", label: "Payroll Group", emphasis: true },
  { step: "06", label: "Worker Population" },
  { step: "07", label: "Payroll Run" },
];

const definitions = [
  {
    title: "Jurisdiction",
    description: "Statutory/operational payroll market scope — not just a country label.",
  },
  {
    title: "Legal Entity",
    description: "The employer/payroll entity operating inside a jurisdiction.",
  },
  {
    title: "Payroll Group",
    description:
      "Frequency, currency, calendar, configuration version, local approvers and mappings.",
  },
  {
    title: "Configuration Version",
    description: "Scope, version, effective date, owner, approval and current/superseded state.",
  },
  {
    title: "Service Model",
    description: "Approved delivery model with a clear owner and escalation boundary.",
  },
  {
    title: "Connection",
    description: "System, direction, mapping version, health, last sync and support owner.",
  },
];

export default function ObjectModelSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>The object model</Eyebrow>
          <h2 className="mt-2.5 max-w-3xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Jurisdiction, entity and payroll group are never interchangeable
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-[#4E6172]">
            A visible hierarchy — not a loose collection of &quot;country&quot; tags.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="flex flex-wrap items-stretch gap-2">
            {hierarchy.map((level, index) => (
              <div key={level.label} className="flex items-center gap-2">
                <div
                  className={`rounded-xl border px-5 py-3.5 text-center ${
                    level.emphasis
                      ? "border-sky-600 bg-sky-50"
                      : "border-[#DCE6EC] bg-white"
                  }`}
                >
                  <p className="font-mono text-[10px] leading-4 text-slate-500">{level.step}</p>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#082F49]">{level.label}</p>
                </div>
                {index < hierarchy.length - 1 && (
                  <span className="text-slate-400" aria-hidden="true">
                    ›
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {definitions.map((definition, index) => (
            <Reveal key={definition.title} delay={(index % 3) * 80}>
              <div className="h-full rounded-2xl border border-[#DCE6EC] bg-white px-5 py-5">
                <h3 className="text-sm font-bold leading-5 text-[#082F49]">{definition.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#4E6172]">{definition.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
