import Reveal from "../ui/Reveal";
import MediaSplit from "./MediaSplit";

const stages = [
  {
    number: "01",
    title: "Prepare",
    description: "Bring together employee, earnings, deduction and time inputs for the period.",
    owner: "owner: payroll-ops",
  },
  {
    number: "02",
    title: "Calculate",
    description: "Run calculations against the active configuration version.",
    owner: "owner: system + processor",
  },
  {
    number: "03",
    title: "Validate",
    description: "Check readiness, flag missing data and mapping problems.",
    owner: "owner: payroll-ops",
  },
  {
    number: "04",
    title: "Review",
    description: "Reviewer examines variances, exceptions and material changes.",
    owner: "owner: reviewer",
    highlighted: true,
  },
  {
    number: "05",
    title: "Approve",
    description: "Named approver authorizes the current version to proceed.",
    owner: "owner: approver",
  },
  {
    number: "06",
    title: "Complete",
    description: "Version is locked; downstream exports and records are finalized.",
    owner: "owner: system",
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          eyebrow="Six-stage payroll lifecycle"
          title="One consistent operating model, from first input to final record."
          description="Every run moves through the same six stages — each with a clear purpose, an accountable owner, and the evidence it leaves behind."
          media={{
            src: "/images/payroll-processing/lifecycle.png",
            alt: "Team planning a structured, staged payroll workflow",
            label: "Records this cycle",
            value: "1,284",
          }}
        />

        <Reveal delay={80} className="mt-11">
          <ol className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white outline outline-slate-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stages.map((stage, index) => (
              <li
                key={stage.number}
                className={`flex flex-col gap-1.5 px-5 py-6 ${
                  index < stages.length - 1 ? "border-b border-slate-200 xl:border-b-0 xl:border-r" : ""
                } ${stage.highlighted ? "bg-slate-900" : ""}`}
              >
                <span
                  className={`font-mono text-xs font-bold leading-4 ${
                    stage.highlighted ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {stage.number}
                </span>
                <h3
                  className={`pt-0.5 text-base font-bold leading-6 ${
                    stage.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {stage.title}
                </h3>
                <p
                  className={`pb-2 text-xs leading-4 ${
                    stage.highlighted ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {stage.description}
                </p>
                <span
                  className={`inline-block self-start rounded-md px-2 py-0.75 font-mono text-xs leading-4 ${
                    stage.highlighted ? "bg-white/10 text-white/75" : "bg-slate-50 text-slate-500"
                  }`}
                >
                  {stage.owner}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
