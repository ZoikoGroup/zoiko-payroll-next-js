import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import {
  DocumentTextIcon,
  ShieldIcon,
  CheckSquareIcon,
  PulseIcon,
  BookmarkIcon,
  ClockIcon,
  AlertTriangleIcon,
} from "../ui/icons";

const paths = [
  {
    icon: DocumentTextIcon,
    eyebrow: "Product",
    title: "Review product security",
    description:
      "Identity, roles, approval separation and data protection controls inside the payroll product.",
    owner: "Product Security and Trust",
    linkLabel: "Review",
    href: "/product/security",
  },
  {
    icon: ShieldIcon,
    eyebrow: "Privacy",
    title: "Understand privacy and data handling",
    description:
      "Data lifecycle, retention, residency, transfers and subprocessors from approved privacy authorities.",
    owner: "Privacy Notice / DPA",
    linkLabel: "Review",
    href: "#privacy-lifecycle",
  },
  {
    icon: CheckSquareIcon,
    eyebrow: "Assurance",
    title: "Check assurance evidence",
    description: "Reports, assessments and test results with scope, period and current status.",
    owner: "Evidence directory",
    linkLabel: "Review",
    href: "#evidence-directory",
  },
  {
    icon: PulseIcon,
    eyebrow: "Resilience",
    title: "Review resilience or an active issue",
    description: "Continuity evidence, and — separately — live and historical service health.",
    owner: "System Status",
    linkLabel: "Review",
    href: "/resources/system-status",
  },
  {
    icon: BookmarkIcon,
    eyebrow: "Procurement",
    title: "Prepare procurement or vendor review",
    description: "A structured checklist and, where staffed, a security review workflow.",
    owner: "Trust review workflow",
    linkLabel: "Review",
    href: "#evidence-directory",
  },
  {
    icon: ClockIcon,
    eyebrow: "Accessibility",
    title: "Review accessibility",
    description:
      "Conformance target, known limitations and how to reach the accessibility contact.",
    owner: "Accessibility Statement",
    linkLabel: "Review",
    href: "/accessibility",
  },
  {
    icon: AlertTriangleIcon,
    eyebrow: "Priority",
    title: "Report a security vulnerability",
    description:
      "Goes directly to Responsible Disclosure — never to a general sales or contact form.",
    owner: "Responsible Disclosure",
    linkLabel: "Report",
    href: "/responsible-disclosure",
    priority: true,
  },
];

export default function TrustPathRouterSection() {
  return (
    <section id="trust-path-router" className="scroll-mt-24 bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <Eyebrow>Trust path router</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              Choose what you need to verify.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-6 text-slate-600">
              Seven reviewer questions, each routed to the authority that actually owns the answer.
              Sales comes after these routes, not before them.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal
                key={path.title}
                delay={index * 60}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
              >
                <span
                  className={`flex size-9 items-center justify-center rounded-[10px] text-white ${
                    path.priority ? "bg-red-600" : "bg-brand-dark"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>

                <p
                  className={`mt-4 text-xs font-bold uppercase tracking-wider ${
                    path.priority ? "text-red-600" : "text-brand"
                  }`}
                >
                  {path.eyebrow}
                </p>
                <p className="mt-2 text-base font-bold leading-6 text-brand-dark">{path.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{path.description}</p>

                <div className="mt-auto flex items-start justify-between gap-3 border-t border-slate-100 pt-3">
                  <span className="text-xs font-bold text-slate-500">{path.owner}</span>
                  <Link
                    href={path.href}
                    className={`group inline-flex shrink-0 items-center gap-1 text-xs font-bold transition-colors duration-200 ${
                      path.priority ? "text-red-600 hover:text-red-700" : "text-brand hover:text-brand-dark"
                    }`}
                  >
                    {path.linkLabel}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
