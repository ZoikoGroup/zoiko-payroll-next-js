import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const problems = [
  {
    icon: "/images/payroll-approvals/icon-owner.svg",
    title: "Unclear ownership",
    description: "No one can say, with confidence, who is authorized to decide.",
  },
  {
    icon: "/images/payroll-approvals/icon-review.svg",
    title: "Review collapsed into approval",
    description: "Inspecting evidence and deciding happen in the same click.",
  },
  {
    icon: "/images/payroll-approvals/icon-changes.svg",
    title: "Payroll changes after sign-off",
    description: "A recalculation lands after approval, and the old sign-off still looks valid.",
  },
  {
    icon: "/images/payroll-approvals/icon-clock.svg",
    title: "Approvers unavailable",
    description: "Work stalls because there's no controlled way to reassign it.",
  },
  {
    icon: "/images/payroll-approvals/icon-context.svg",
    title: "Missing decision context",
    description: "An approver decides without seeing what actually changed.",
  },
  {
    icon: "/images/payroll-approvals/icon-history.svg",
    title: "Weak decision history",
    description: "Nobody can reconstruct who decided what, when, and why.",
  },
];

function ProblemCard({ problem }: { problem: (typeof problems)[number] }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
        <img src={problem.icon} alt="" aria-hidden="true" className="h-4 w-4" />
      </span>
      <h3 className="mt-3 text-base font-extrabold leading-6 text-sky-950">{problem.title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-600">{problem.description}</p>
    </div>
  );
}

export default function ProblemsSection() {
  return (
    <section className="bg-[#F5F8FA] pt-10 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why approval needs structure</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            Payroll approval breaks quietly — usually in the same six places
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Unclear ownership, review collapsed into approval, payroll changing after sign-off,
            unavailable approvers, missing context and thin decision history.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <ProblemCard problem={problems[0]} />
          </Reveal>
          <Reveal delay={60}>
            <ProblemCard problem={problems[1]} />
          </Reveal>

          <Reveal delay={120} className="sm:col-span-2">
            <div className="relative h-full min-h-48 overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="/images/payroll-approvals/breaks-first.png"
                alt="Team reviewing a payroll decision together"
                loading="lazy"
                className="h-full min-h-48 w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-r from-sky-950/60 to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-4 left-4 text-base leading-6 text-white">
                Where approval usually breaks first
              </p>
            </div>
          </Reveal>

          {problems.slice(2).map((problem, index) => (
            <Reveal key={problem.title} delay={index * 60}>
              <ProblemCard problem={problem} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
