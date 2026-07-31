import Link from "next/link";
import Reveal from "../ui/Reveal";
import CountryMarquee from "../ui/CountryMarquee";
import Eyebrow from "./Eyebrow";
import { LockIcon, CheckSquareIcon, GridIcon } from "../ui/icons";

const trustBadges = [
  { icon: LockIcon, label: "Role-based access" },
  { icon: CheckSquareIcon, label: "Audit-tracked approvals" },
  { icon: GridIcon, label: "Structured payroll workflows" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#DCE6EC] bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <Eyebrow>Global payroll management</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
              Global payroll control, built around local requirements.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
              Run every payroll cycle from validated inputs to approved, reportable outcomes on one
              secure platform for organizations operating across multiple jurisdictions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="bg-brand-gradient rounded-lg px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
              >
                Book a demo
              </Link>
              <Link
                href="/product"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                Explore the platform
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-xs text-slate-500">
              {trustBadges.map((badge) => (
                <span key={badge.label} className="inline-flex items-center gap-1.5">
                  <badge.icon className="h-4 w-4 text-brand" />
                  {badge.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/images/home/dashboard.png"
              alt="Zoiko Payroll dashboard shown on laptop and mobile"
              loading="lazy"
              className="aspect-[5/3] h-auto w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <CountryMarquee />
      </div>
    </section>
  );
}
