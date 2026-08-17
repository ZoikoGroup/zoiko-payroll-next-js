import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  {
    step: "01",
    title: "Discover current state",
    description: "Payroll groups, teams, calendars, handoffs.",
  },
  {
    step: "02",
    title: "Define target model",
    description: "Central vs local responsibilities, vocabulary.",
  },
  {
    step: "03",
    title: "Configure scopes/access",
    description: "Roles, calendars, local differences.",
  },
  { step: "04", title: "Integrate / migrate", description: "Sources, status feeds, ownership." },
  { step: "05", title: "Pilot payroll groups", description: "Scorecard and issue register." },
  { step: "06", title: "Parallel operating review", description: "Readiness, variance, sign-off." },
  { step: "07", title: "Roll out in waves", description: "Go / hold / rollback per wave." },
  { step: "08", title: "Operate & optimize", description: "Recurring review of blockers, aging." },
];

export default function TransitionSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-t-2xl bg-[#123A5E] px-8 py-10">
            <img
              src="/images/centralized-operations/transition-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="relative">
              <Eyebrow tone="light">Transition to centralized operations</Eyebrow>
              <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight break-words text-white sm:text-3xl">
                An operating-model change — not a dashboard switch.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                Piloted with representative payroll groups before any wave goes live.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-b-2xl border border-t-0 border-[#DCE6EC] bg-[#DCE6EC] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="bg-white px-4 py-5">
                <p className="font-mono text-xs leading-4 text-[#075E99]">{step.step}</p>
                <h3 className="mt-2 text-sm font-bold leading-5 text-[#082F49]">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[#4E6172]">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
