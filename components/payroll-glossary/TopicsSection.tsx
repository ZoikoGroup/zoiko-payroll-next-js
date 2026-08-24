import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const topics = [
  {
    icon: "🗓",
    iconClass: "bg-sky-100 text-blue-500",
    title: "Payroll cycle & calendars",
    description: "Pay period, pay date, cutoff, frequency, processing window.",
    count: "6 terms",
  },
  {
    icon: "＄",
    iconClass: "bg-pink-100 text-pink-500",
    title: "Pay & calculations",
    description: "Gross pay, net pay, earnings, rounding, retroactive adjustment.",
    count: "7 terms",
  },
  {
    icon: "✎",
    iconClass: "bg-slate-200 text-slate-800",
    title: "Earnings",
    description: "Salary, hourly earnings, overtime concept, bonus, allowance.",
    count: "5 terms",
  },
  {
    icon: "−",
    iconClass: "bg-pink-100 text-pink-500",
    title: "Deductions & adjustments",
    description: "Deduction, recurring deduction, correction, reimbursement.",
    count: "5 terms",
  },
  {
    icon: "✓",
    iconClass: "bg-violet-100 text-violet-600",
    title: "Approvals & controls",
    description: "Validation, review, approval, segregation of duties, exception.",
    count: "6 terms",
  },
  {
    icon: "▤",
    iconClass: "bg-orange-100 text-orange-400",
    title: "Records & documents",
    description: "Payroll record, payslip concept, payroll history, evidence record.",
    count: "4 terms",
  },
  {
    icon: "↻",
    iconClass: "bg-sky-100 text-blue-500",
    title: "Reporting & reconciliation",
    description: "Payroll register, variance, reconciliation, export, close.",
    count: "5 terms",
  },
  {
    icon: "⇄",
    iconClass: "bg-pink-100 text-pink-500",
    title: "Integrations & data",
    description: "Source system, mapping, identifier, import, reconciliation reference.",
    count: "5 terms",
  },
  {
    icon: "🌐",
    iconClass: "bg-violet-100 text-violet-600",
    title: "Global payroll & jurisdictions",
    description: "Jurisdiction, legal entity, payroll group, local requirement.",
    count: "6 terms",
  },
];

export default function TopicsSection() {
  return (
    <section id="topics" className="scroll-mt-24 bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Topic discovery</Eyebrow>
          <h2 className="mt-6 text-2xl font-bold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
            Or start from the area you&apos;re working in.
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600">
            A controlled taxonomy — each topic explains its scope and links to representative terms.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <li key={topic.title} className="h-full">
                <Link
                  href="#a-z-index"
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-3xl text-lg font-bold ${topic.iconClass}`}
                    aria-hidden="true"
                  >
                    {topic.icon}
                  </span>
                  <span className="mt-5 block text-base font-bold leading-6 text-sky-950">
                    {topic.title}
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-gray-600">
                    {topic.description}
                  </span>
                  <span className="mt-auto block pt-6 text-xs leading-4 text-slate-500">
                    {topic.count} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <Link
            href="#a-z-index"
            className="mt-8 inline-block text-sm font-bold leading-5 text-sky-700 hover:text-sky-800"
          >
            See all 12 topics →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
