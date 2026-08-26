import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

const points = [
  "Preparer and approver are always separate roles under approved configuration — no one signs off on their own work.",
  "Privileged access is reviewed on a schedule, not left to accumulate — excessive or orphaned rights get flagged for removal.",
  "Every material decision is recorded and linked to the person and role that made it, detailed further in Auditability below.",
];

export default function ControlsInPracticeSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src="/images/company-trust-center/approvals-in-practice.png"
            alt="A payroll team reviewing an approval together at a laptop"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[360px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>How controls play out day to day</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every approval has a name attached to it
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Role scoping and approval separation are not abstractions — they determine, for every
            payroll cycle, exactly who prepared a change and who was authorized to sign off on it.
          </p>

          <ul className="mt-6 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm leading-6 text-slate-600">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
