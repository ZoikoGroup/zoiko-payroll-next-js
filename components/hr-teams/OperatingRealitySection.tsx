import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import CheckCard from "./CheckCard";

const failures = [
  {
    title: "Late approved change",
    detail: "Owner and payroll-period impact shown. Readiness blocked until supplied.",
  },
  {
    title: "Missing effective date",
    detail: "Readiness blocked until a valid date is supplied by the record owner.",
  },
  {
    title: "HRIS mapping mismatch",
    detail: "Mapping version and rejected record shown for the integration admin.",
  },
  {
    title: "Duplicate update",
    detail: "Identity and version verified before any record is applied.",
  },
  {
    title: "Conflicting source change",
    detail: "Revalidation required before applying — no silent precedence.",
  },
  {
    title: "Excessive HR access",
    detail: "Views default to scoped, minimal data by role and purpose.",
  },
];

export default function OperatingRealitySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Operating reality"
            title="The handoff breaks in predictable ways."
            description="Every failure has a source, an owner and a governed next step."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[451fr_640fr] lg:gap-10">
          <Reveal>
            <img
              src="/images/hr-teams/operating-reality.png"
              alt="A team member focused on reviewing a payroll change"
              className="aspect-[451/420] w-full rounded-2xl border border-slate-200 object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {failures.map((failure) => (
                <CheckCard key={failure.title} title={failure.title}>
                  {failure.detail}
                </CheckCard>
              ))}
            </div>

            <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
              HR supplies source context; Payroll owns calculation, review and approval.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
