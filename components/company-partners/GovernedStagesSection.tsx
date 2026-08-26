import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const stages = [
  {
    title: "Identify / Qualify",
    description: "Select relationship type, business purpose, scope and responsible teams.",
    outcome: "Qualified intent — no relationship yet",
  },
  {
    title: "Verify",
    description: "Verify organization, authority, conflicts, capability evidence and rights.",
    outcome: "Verified candidate — still private",
  },
  {
    title: "Agree",
    description: "Approve commercial, legal, security and privacy scope and responsibilities.",
    outcome: "Approved agreement record",
  },
  {
    title: "Enable",
    description:
      "Configure operational, integration, support, brand and communication requirements.",
    outcome: "Readiness evidence — not automatic launch",
  },
  {
    title: "Operate",
    description: "Run the approved relationship within product, market and customer scope.",
    outcome: "Operational status + owner + support model",
  },
  {
    title: "Review",
    description: "Review performance, evidence, rights, scope and dependencies.",
    outcome: "Continue / change / limit / end decision",
  },
  {
    title: "Renew / End",
    description:
      "Renew, modify, pause or terminate; revoke rights/access and update public state.",
    outcome: "Current record + transition",
  },
];

export default function GovernedStagesSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow>How partnerships work</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Seven governed stages — acceptance and timing are never guaranteed
          </h2>
        </Reveal>

        <div className="mx-auto mt-9 max-w-[760px]">
          {stages.map((stage, index) => (
            <Reveal
              key={stage.title}
              delay={index * 50}
              className="flex items-start gap-5 border-b border-slate-200 py-5 last:border-b-0 sm:gap-8"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-xs font-extrabold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-bold leading-6 text-brand-dark">{stage.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{stage.description}</p>
                <span className="mt-2.5 inline-flex rounded-[20px] bg-sky-100 px-2 py-0.5 text-xs leading-5 text-sky-800">
                  {stage.outcome}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
