import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import {
  UserIcon,
  LockIcon,
  CheckSquareIcon,
  ShieldIcon,
  ListIcon,
  SparkleIcon,
  PulseIcon,
  BoltIcon,
  ArrowRightIcon,
} from "../ui/icons";

const controls = [
  {
    icon: UserIcon,
    title: "Identity and authentication",
    description: "Approved identity sources and governed authentication and recovery.",
    owner: "Product Security and Trust",
    href: "/product/security",
  },
  {
    icon: LockIcon,
    title: "Authorization and roles",
    description: "Role and scope definitions for view, configure, approve, export and administer.",
    owner: "Product Security and Trust",
    href: "/product/security",
  },
  {
    icon: CheckSquareIcon,
    title: "Approval separation",
    description:
      "A preparer cannot approve their own payroll action under approved configuration.",
    owner: "Payroll Approvals",
    href: "/product/payroll-approvals",
  },
  {
    icon: ShieldIcon,
    title: "Payroll data protection",
    description:
      "Protection of payroll and employee information across approved processing scope.",
    owner: "Product Security and Trust",
    href: "/product/security",
  },
  {
    icon: ListIcon,
    title: "Auditability",
    description: "Recorded material payroll actions, decisions, changes and approvals.",
    owner: "Evidence & audit model",
    href: "#evidence-directory",
  },
  {
    icon: SparkleIcon,
    title: "Integration security",
    description: "Scoping, rotation and revocation of service and integration identities.",
    owner: "Integrations",
    href: "/product/integrations",
  },
  {
    icon: PulseIcon,
    title: "Operational resilience",
    description: "Continuity, backup/recovery, incident management and testing practices.",
    owner: "Resilience & Status",
    href: "/resources/system-status",
  },
];

export default function SecurityControlsSection() {
  return (
    <section
      id="security-controls"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>Payroll security controls</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              A company-level summary. Product Security owns the detail
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-6 text-slate-600">
              Each control family below hands off to the team that owns its detailed proof — this
              page never substitutes for that source.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((control, index) => {
            const Icon = control.icon;
            return (
              <Reveal
                key={control.title}
                delay={index * 60}
                className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-slate-200 bg-white text-brand-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-brand-dark">{control.title}</p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">{control.description}</p>
                  <Link
                    href={control.href}
                    className="mt-auto pt-2 text-xs font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
                  >
                    {control.owner}
                  </Link>
                </div>
              </Reveal>
            );
          })}

          <Reveal
            delay={controls.length * 60}
            className="flex h-full items-center gap-4 rounded-2xl bg-brand-dark p-5 sm:col-span-2 lg:col-span-1"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-white/10 text-white">
              <BoltIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Want the full detail?</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Product Security and Trust covers every control family in depth.
              </p>
              <Link
                href="/product/security"
                className="group mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 transition-colors duration-200 hover:text-white"
              >
                Open Product Security
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
