import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const links = [
  { label: "View Jurisdiction Directory", href: "/global-payroll/jurisdiction-directory" },
  { label: "Explore Multi-Jurisdiction Payroll", href: "/multi-jurisdiction" },
  { label: "Contact Sales", href: "/company/contact" },
];

export default function CtaSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-radial-[at_50%_0%] from-[#123B5E] via-[#0B2545] via-55% to-[#071A2E] px-6 py-14 text-center sm:px-10">
            <Eyebrow tone="light" center>
              Ready to coordinate international payroll?
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Bring group visibility and local payroll accountability together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-slate-300">
              Coordinate markets, legal entities, payroll groups, approvals, providers, reporting and
              reconciliation — while preserving locally scoped responsibility.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#find-your-solution"
                className="flex min-h-11 items-center justify-center rounded-lg border border-[#565F6E] bg-[#3D4655] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Find your solution
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs leading-5 text-white/60 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
