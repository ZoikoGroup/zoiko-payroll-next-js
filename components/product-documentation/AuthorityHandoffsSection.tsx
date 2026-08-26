import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import {
  ClockIcon,
  CheckCircleIcon,
  UserIcon,
  GlobeIcon,
  LockIcon,
  ChartIcon,
  DatabaseIcon,
  DollarIcon,
} from "../ui/icons";

const handoffs = [
  { icon: ClockIcon, label: "Service health", description: "Live status → System Status.", href: "/resources/system-status" },
  { icon: CheckCircleIcon, label: "Shipped changes", description: "What changed → Release Notes.", href: "/resources/release-notes" },
  { icon: UserIcon, label: "Account support", description: "Account-specific help → Help Center.", href: "/resources/help-center" },
  { icon: GlobeIcon, label: "Local legal/tax truth", description: "Jurisdiction context → Jurisdiction / Local Requirements.", href: "/global-payroll" },
  { icon: LockIcon, label: "Security assurance", description: "Evidence & controls → Security & Trust.", href: "/product/security" },
  { icon: ChartIcon, label: "Reporting domain", description: "Report/export authority → Reporting.", href: "/product/reporting" },
  { icon: DatabaseIcon, label: "Implementation program", description: "Migration/launch authority → Implementation.", href: "/product/implementation" },
  { icon: DollarIcon, label: "Commercial terms", description: "Pricing/contract → Pricing / Sales.", href: "/pricing" },
];

export default function AuthorityHandoffsSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Authority handoffs</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Documentation explains product behavior. Other sources own their specialized truth
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {handoffs.map((item, index) => (
            <Reveal key={item.label} delay={index * 40}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
              >
                <item.icon className="h-5 w-5 text-brand" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
