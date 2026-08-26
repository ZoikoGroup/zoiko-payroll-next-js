import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { AlertTriangleIcon, InfoIcon, ArrowRightIcon } from "../ui/icons";

const actionRequired = [
  {
    title: "Payroll Approval Delegation — Expanded Scope",
    description: "Payroll Administrators must re-confirm delegation settings before Sep 1, 2026.",
    linkLabel: "Open procedural guide",
    href: "/resources/documentation",
  },
  {
    title: "Legacy Payslip Template — Deprecation Announced",
    description: "Teams using the legacy template must migrate before the removal date.",
    linkLabel: "Open migration guide",
    href: "/implementation",
  },
];

const breakingChanges = [
  {
    title: "Legacy Payslip Template retirement",
    description:
      "Affects integrations reading the old template format. Supported replacement: standard payslip export v2.",
  },
  {
    title: "Webhook payload field rename (planned)",
    description: "No verified effective date yet — tracked here for visibility only, not yet in force.",
  },
];

export default function ActionRequiredSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/release-notes/action-required.png"
              alt="Two people working through the required actions from a release"
              loading="lazy"
              className="h-80 w-full rounded-2xl object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Action required &amp; breaking changes</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight sm:text-3xl tracking-tight text-brand-dark">
              High-impact notes get a dedicated collection — never a color-only warning
            </h2>
            <p className="mt-4 max-w-[620px] text-base leading-relaxed text-slate-600">
              This collection only appears when qualifying records exist. Each note states who needs
              to act, the category, any verified deadline, and the canonical procedural link — we
              never guess whether Payroll, Finance, HR or IT owns the action.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal delay={140} className="rounded-2xl bg-[#FDF6E7] p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-[#A6650F]">
              <AlertTriangleIcon className="h-4 w-4 shrink-0" />
              Action required
            </p>

            <div className="mt-4 space-y-3">
              {actionRequired.map((item) => (
                <div key={item.title} className="rounded-[10px] bg-white/70 p-4">
                  <p className="text-sm font-bold text-brand-dark">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.description}</p>
                  <Link
                    href={item.href}
                    className="group mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark transition-colors duration-200 hover:text-brand"
                  >
                    {item.linkLabel}
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="rounded-2xl bg-[#FBEAEA] p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-[#C23A3A]">
              <InfoIcon className="h-4 w-4 shrink-0" />
              Breaking changes
            </p>

            <div className="mt-4 space-y-3">
              {breakingChanges.map((item) => (
                <div key={item.title} className="rounded-[10px] bg-white/70 p-4">
                  <p className="text-sm font-bold text-brand-dark">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
