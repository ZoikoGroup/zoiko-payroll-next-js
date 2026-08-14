import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  { step: "01", title: "Scope", detail: "Stakeholder map agreed." },
  { step: "02", title: "Authorization", detail: "Security review completed." },
  { step: "03", title: "Mapping", detail: "Data contract documented." },
  { step: "04", title: "Validation", detail: "Test report evidence captured." },
  { step: "05", title: "Controlled Enablement", detail: "Go-live event recorded." },
  { step: "06", title: "Hypercare", detail: "Elevated support monitoring." },
  { step: "07", title: "Operate & Govern", detail: "Recurring review scheduled." },
];

const roles = [
  "Payroll Owner",
  "Payroll Admin",
  "Integration Admin",
  "Security Admin",
  "HR / Workforce Admin",
  "Finance Admin",
  "Auditor / Viewer",
  "Support",
];

const outcomes = [
  { buyer: "Payroll", outcome: "Context without losing control of validation or approval." },
  { buyer: "Finance", outcome: "Approved totals available downstream, receipt-confirmed." },
  { buyer: "HR", outcome: "Worker context shared without duplicating payroll data entry." },
  { buyer: "IT / Security", outcome: "Managed identities, visible scopes, no silent elevation." },
  { buyer: "Audit / Privacy", outcome: "Reconstructable decision and connection history." },
  {
    buyer: "Executive / Procurement",
    outcome: "Commercial independence — connect only what's needed.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="/images/zoiko-one-integration/implementation.png"
                alt="Team scoping a Zoiko One integration rollout"
                className="w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-md bg-sky-950/90 px-2.5 py-[5px] font-mono text-xs font-medium leading-4 tracking-tight text-white">
                Scoped and reviewed before anything goes live
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Implementation &amp; adoption</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
              A controlled rollout, with evidence at every stage
            </h2>
            <p className="mt-4 max-w-lg text-base leading-6 text-slate-600">
              Roll out with clear ownership, controlled validation, and documented evidence at every
              stage—from initial scope and authorization to go-live and ongoing governance.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-9">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {stages.map((stage) => (
              <div key={stage.step} className="bg-white px-4 pt-4 pb-6">
                <p className="font-mono text-xs leading-4 text-sky-700">{stage.step}</p>
                <h3 className="mt-3 text-sm font-bold leading-5 text-sky-950">{stage.title}</h3>
                <p className="mt-1.5 text-xs leading-4 text-slate-600">{stage.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Eyebrow>Roles in the room</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs leading-4 text-sky-950"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Eyebrow>Outcomes by buyer</Eyebrow>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <Reveal key={item.buyer} delay={(index % 3) * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-mono text-[10px] uppercase leading-4 tracking-tight text-slate-600">
                  {item.buyer}
                </p>
                <p className="mt-2.5 text-sm leading-6 text-sky-950">{item.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
