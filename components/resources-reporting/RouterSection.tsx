import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { CheckSquareIcon, CheckCircleIcon, KeyIcon } from "../ui/icons";

const routes = [
  {
    icon: CheckSquareIcon,
    title: "What does this number include?",
    description: "Scope, period, source and currency context.",
    action: "Reporting and Analytics",
    href: "/product/reporting",
  },
  {
    icon: CheckCircleIcon,
    title: "Why did this result change?",
    description: "Variance, corrections and version changes.",
    action: "Reconciliation guidance below",
    href: "#reconciliation",
  },
  {
    icon: KeyIcon,
    title: "How do I export safely?",
    description: "Least privilege, scope and handling.",
    action: "Export guidance below",
    href: "#export-guidance",
  },
];

export default function RouterSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>What are you trying to answer?</Eyebrow>
          <h2 className="mt-3.5 max-w-[700px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Deterministic routing — never inferred from your profile.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <Reveal
                key={route.title}
                delay={index * 90}
                className="flex flex-col items-center text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-3xl bg-sky-100 text-brand">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 text-base font-extrabold leading-7 text-brand-dark">
                  {route.title}
                </p>
                <p className="mt-1.5 max-w-[280px] text-sm leading-6 text-slate-600">
                  {route.description}{" "}
                  <Link
                    href={route.href}
                    className="font-semibold text-brand transition-colors duration-200 hover:text-brand-dark"
                  >
                    → {route.action}
                  </Link>
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={260} className="mt-10 text-center text-sm leading-6 text-slate-600">
          Also comparing entities or jurisdictions?{" "}
          <Link
            href="/global-payroll/reporting"
            className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
          >
            Explore Global Reporting →
          </Link>{" "}
          Planning an audit?{" "}
          <Link
            href="/resources/security-trust"
            className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
          >
            See Security and Trust →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
