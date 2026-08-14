import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const reviewJourney = [
  { title: "Scope", detail: "Define the exact service and environment under review." },
  { title: "Intake", detail: "Collect the review requirements and named owner." },
  { title: "Evidence mapping", detail: "Match requested evidence to current, scoped artifacts." },
  { title: "Gap handling", detail: "Address any evidence gaps transparently." },
  { title: "Delivery", detail: "Deliver the completed review package." },
  { title: "Renewal", detail: "Scheduled re-review as evidence ages." },
];

const implementationSequence = [
  { title: "Identity", detail: "Configure named identities and authentication policy." },
  { title: "Roles", detail: "Assign scoped roles and mark privileged access." },
  { title: "Approvals", detail: "Configure review/approve separation per workflow." },
  { title: "Integrations", detail: "Apply least-privilege scopes to connected systems." },
  { title: "Testing & go-live", detail: "Validate controls before production cutover." },
  { title: "Governance", detail: "Ongoing access reviews and evidence refresh." },
];

function Track({ title, steps }: { title: string; steps: { title: string; detail: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold leading-5 text-slate-900">{title}</h3>
      <div className="mt-5">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-blue-600 bg-white"
                aria-hidden="true"
              />
              {index < steps.length - 1 ? (
                <span className="w-px flex-1 bg-slate-300" aria-hidden="true" />
              ) : null}
            </div>

            <div className={index < steps.length - 1 ? "pb-7" : ""}>
              <h4 className="text-sm font-bold leading-5 text-slate-900">{step.title}</h4>
              <p className="mt-1 text-xs leading-5 text-slate-500">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EnterpriseReviewSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Enterprise security review &amp; implementation</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
            A structured path for procurement and deployment
          </h2>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Track title="Security review journey" steps={reviewJourney} />
          </Reveal>
          <Reveal delay={100}>
            <Track title="Implementation sequence" steps={implementationSequence} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
