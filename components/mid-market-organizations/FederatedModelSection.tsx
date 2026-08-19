import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  "Payroll Operations Admin",
  "Entity Payroll Owner",
  "Finance / Controller",
  "HR / People",
  "IT / Integration",
];

const centralLayer = [
  "Standards & control vocabulary",
  "Cross-entity readiness & reporting",
  "Exception / approval / reconciliation oversight",
  "Integration health monitoring",
];

const localLayer = [
  "Payroll-group readiness & local owner",
  "Configured approvals & calendars",
  "Jurisdiction / provider-specific settings",
  "Local exception resolution",
];

export default function FederatedModelSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Federated operating model"
              title="Shared standards and central visibility, with entity ownership intact"
              description="Centralization is not the same thing as control. Cross-entity visibility never collapses local or entity accountability."
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold leading-5 text-sky-950"
                >
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/mid-market-organizations/federated-model.png"
              alt="Central and entity payroll owners reviewing figures together"
              className="aspect-[548/548] w-full rounded-xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-[#0E3A5A] px-6 py-6">
              <h3 className="text-sm font-bold uppercase leading-5 tracking-wide text-white">
                Central layer
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {centralLayer.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-5 text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-6 py-6">
              <h3 className="text-sm font-bold uppercase leading-5 tracking-wide text-sky-600">
                Local / entity layer
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {localLayer.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-5 text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
