import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CardIcon, CheckSquareIcon, NodesIcon } from "../ui/icons";

const groups = [
  {
    icon: CardIcon,
    title: "For Payroll Admins",
    subtitle: "Run & manage payroll",
    tasks: [
      { label: "Run a payroll cycle", status: "Current" },
      { label: "Manage deductions and adjustments", status: "Current" },
      { label: "Maintain employee payroll records", status: "Current" },
    ],
    href: "/product/payroll-processing",
  },
  {
    icon: CheckSquareIcon,
    title: "For Approvers & Finance",
    subtitle: "Review & approve",
    tasks: [
      { label: "Configure approval workflow", status: "Current" },
      { label: "Review and approve a payroll cycle", status: "Current" },
      { label: "Reconcile payroll reports", status: "Review due" },
    ],
    href: "/product/payroll-approvals",
  },
  {
    icon: NodesIcon,
    title: "For Developers & IT",
    subtitle: "Integrate & secure",
    tasks: [
      { label: "Configure API access", status: "Current" },
      { label: "Set up SSO / MFA", status: "Current" },
      { label: "Manage webhooks and retries", status: "Current" },
    ],
    href: "/product/integrations",
  },
];

const statusTone: Record<string, string> = {
  Current: "bg-emerald-50 text-emerald-700",
  "Review due": "bg-amber-50 text-amber-700",
};

export default function TaskFirstDiscoverySection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Task-first discovery</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Start from the job you need to complete
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 80}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 text-brand">
                <group.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-dark">{group.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{group.subtitle}</p>

              <ul className="mt-4 flex-1 divide-y divide-slate-100">
                {group.tasks.map((task) => (
                  <li key={task.label} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                    <span className="text-slate-600">{task.label}</span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${statusTone[task.status]}`}>
                      {task.status}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={group.href}
                className="bg-brand-gradient mt-5 rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                See all
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
