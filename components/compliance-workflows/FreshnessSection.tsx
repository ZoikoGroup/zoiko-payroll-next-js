import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const states = [
  { label: "Current", dotClass: "bg-emerald-600" },
  { label: "Review Due", dotClass: "bg-yellow-600" },
  { label: "Stale", dotClass: "bg-red-600" },
  { label: "Re-review", dotClass: "bg-violet-600" },
];

const triggers = [
  { title: "Evidence expiry", detail: "Scheduled freshness window elapses." },
  { title: "Requirement change", detail: "Local requirement version updates." },
  { title: "Configuration change", detail: "Payroll or system config shifts." },
  { title: "Provider change", detail: "Integration or provider is replaced." },
  { title: "Incident", detail: "Control failure or reported incident." },
  { title: "New entity", detail: "Jurisdiction or entity is added." },
  { title: "Exception expiry", detail: "Approved exception window ends." },
  { title: "Scheduled review", detail: "Standing review date is reached." },
];

export default function FreshnessSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F4F6FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <StageHeader
              stage="07"
              label="Freshness & re-review"
              heading="A material change can make an approved decision stale"
            >
              Evidence freshness is tracked separately from workflow state. Prior approved evidence
              stays historically preserved while a new version goes through review.
            </StageHeader>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/compliance-workflows/freshness.png"
              alt="Compliance team discussing a re-review around a meeting table"
              className="h-56 w-full rounded-[10px] object-cover sm:h-64"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-slate-200 bg-slate-200 lg:grid-cols-4">
            {states.map((state) => (
              <li key={state.label} className="bg-white px-4 py-5 text-center">
                <span
                  className={`mx-auto block size-2.5 rounded-full ${state.dotClass}`}
                  aria-hidden="true"
                />
                <p className="mt-2.5 text-sm font-bold text-gray-900">{state.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="mt-4">
          <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {triggers.map((trigger) => (
              <li
                key={trigger.title}
                className="rounded-[10px] border border-slate-200 bg-white px-4 py-4"
              >
                <p className="text-sm font-bold text-gray-900">{trigger.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">{trigger.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
