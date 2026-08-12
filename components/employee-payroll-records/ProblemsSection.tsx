import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { MailIcon, SearchIcon, PlusIcon, CheckCircleIcon } from "../ui/icons";

const problems = [
  {
    icon: MailIcon,
    title: "Manual payslip distribution",
    description: "Emailed or printed payslips are slow, inconsistent and hard to reconcile at scale.",
  },
  {
    icon: SearchIcon,
    title: "Difficult record retrieval",
    description:
      "Employees can't easily find a past record when they need it — so they ask payroll instead.",
  },
  {
    icon: PlusIcon,
    title: "Confusing corrections and versioning",
    description: "When a record changes, it's unclear which version is current and what changed.",
  },
  {
    icon: CheckCircleIcon,
    title: "Limited visibility and support",
    description: "There's no clear place to check status or ask for help when something looks wrong.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-lg">
          <Eyebrow>Why employee payroll records matter</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-9 text-sky-950">
            Fragmented access creates real problems for employees and payroll teams alike.
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Reveal key={problem.title} delay={index * 60}>
                <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pt-4 pb-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold leading-5 text-sky-950">{problem.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{problem.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
