import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const coordinates = [
  "Evidence-governed review against a requirement version",
  "Traceable decisions with rationale and approval",
  "Exceptions, remediation and scheduled re-review",
];

const doesNotBecome = [
  "Legal advice or an autonomous legal conclusion",
  'A certification that a customer is "compliant"',
  "A replacement for local/specialist judgment or Payroll Approvals",
];

export default function AuthorityBoundarySection() {
  return (
    <section className="bg-[#F4F6FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <StageHeader
              stage="01"
              label="Authority boundary"
              heading="Coordinated review — not a legal determination"
            >
              The workflow controls jurisdiction-specific requirements, documentation, findings,
              decisions, exceptions, remediation and re-review. It does not determine law, certify
              compliance, replace local specialists, or authorize payroll completion.
            </StageHeader>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/compliance-workflows/authority-boundary.png"
              alt="Two reviewers comparing a tablet dashboard against a printed requirement form"
              className="h-64 w-full rounded-2xl object-cover sm:h-72"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-8 rounded-[10px] border border-slate-200 bg-white px-7 py-7 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900">
                <span className="size-2.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                The workflow coordinates
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {coordinates.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-gray-700">
                    <span className="shrink-0 text-gray-400" aria-hidden="true">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-gray-900">
                <span className="size-2.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                The workflow does not become
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {doesNotBecome.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-gray-700">
                    <span className="shrink-0 text-gray-400" aria-hidden="true">
                      &bull;
                    </span>
                    {item}
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
