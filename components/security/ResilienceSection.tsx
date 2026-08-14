import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  { step: "01", title: "Detect" },
  { step: "02", title: "Triage" },
  { step: "03", title: "Contain" },
  { step: "04", title: "Communicate" },
  { step: "05", title: "Recover" },
  { step: "06", title: "Review" },
];

export default function ResilienceSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Operational resilience &amp; subprocessors</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              Detect &rarr; Triage &rarr; Contain &rarr; Communicate &rarr; Recover &rarr; Review
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-700">
              SLA, RTO/RPO, backup and notification commitments remain evidence and contract-gated.
              Subprocessors are listed with purpose, scope, review date and a change-notification path.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/security/resilience.png"
              alt="Team walking through the incident response sequence"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-80"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step) => (
              <div key={step.step} className="bg-white px-4 py-5 text-center">
                <p className="font-mono text-xs leading-4 text-blue-600">{step.step}</p>
                <h3 className="mt-1.5 text-sm font-bold leading-5 text-slate-900">{step.title}</h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
