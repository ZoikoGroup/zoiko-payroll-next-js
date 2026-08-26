import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import {
  CardIcon,
  ChartIcon,
  CheckCircleIcon,
  ClockIcon,
  DatabaseIcon,
  GlobeIcon,
  InfoIcon,
  LockIcon,
  RecordsIcon,
} from "../ui/icons";

const tasks = [
  {
    icon: RecordsIcon,
    title: "Learn a payroll concept",
    description: "Educational guidance and canonical terms.",
    destination: "Payroll Guides / Payroll Glossary",
    href: "/resources/payroll-guides",
  },
  {
    icon: CardIcon,
    title: "Configure or understand Zoiko Payroll",
    description: "Current product behavior, fields, settings and workflow instructions.",
    destination: "Product Documentation",
    href: "/resources/documentation",
  },
  {
    icon: InfoIcon,
    title: "Resolve a problem",
    description: "Troubleshooting, support and recovery.",
    destination: "Help Center",
    href: "/resources/help-center",
  },
  {
    icon: CheckCircleIcon,
    title: "See what changed",
    description: "Shipped changes, applicability and required action.",
    destination: "Release Notes",
    href: "/resources/release-notes",
  },
  {
    icon: ClockIcon,
    title: "Check service status",
    description: "Current and historical service health and incidents.",
    destination: "System Status",
    href: "/resources/system-status",
  },
  {
    icon: GlobeIcon,
    title: "Find market-specific guidance",
    description: "Reviewed market context; current availability is separately governed.",
    destination: "Jurisdiction Guides",
    href: "/global-payroll/country-guides",
  },
  {
    icon: DatabaseIcon,
    title: "Plan migration, testing or launch",
    description: "Implementation and migration guidance.",
    destination: "Implementation",
    href: "/product/implementation",
  },
  {
    icon: LockIcon,
    title: "Review security, privacy or procurement evidence",
    description: "Current controls and evidence routes.",
    destination: "Security and Trust",
    href: "/product/security",
  },
  {
    icon: ChartIcon,
    title: "Understand payroll reporting",
    description: "Insights, exports and reconciliation pathways.",
    destination: "Reporting",
    href: "/product/reporting",
  },
];

export default function TaskRoutingSection() {
  return (
    <section className="border-t border-slate-200 bg-[#E9F0F8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Eyebrow>Start from the task</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-sky-950 sm:text-3xl sm:leading-10">
              Route high-frequency intent straight to the right source.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)]">
              <img
                src="/images/resource-center/task-routing.png"
                alt="A payroll team mapping tasks to the source that owns each answer"
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm font-extrabold leading-5 text-sky-950">Nine tasks, one map</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Each card names the job and the destination that owns it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => {
              const Icon = task.icon;
              return (
                <li key={task.title} className="h-full">
                  <Link
                    href={task.href}
                    className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200"
                  >
                    <Icon className="h-4 w-4 text-sky-950" aria-hidden="true" />
                    <span className="mt-5 block text-sm font-bold leading-5 text-sky-950">
                      {task.title}
                    </span>
                    <span className="mt-2 block text-xs leading-4 text-gray-600">
                      {task.description}
                    </span>
                    <span className="mt-auto block pt-5 text-xs italic leading-4 text-gray-400">
                      → {task.destination}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
