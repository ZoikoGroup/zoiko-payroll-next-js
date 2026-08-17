import Link from "next/link";
import Reveal from "../ui/Reveal";

const links = [
  { label: "Payroll Operations Control Center", href: "#control-center" },
  { label: "Pricing", href: "/pricing" },
];

export default function CtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[#123A5E] px-8 py-12 sm:px-10">
            <img
              src="/images/centralized-operations/cta-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-xl font-extrabold leading-8 break-words text-white sm:text-2xl sm:leading-10">
                  Coordinate Every Payroll Scope
                  <br />
                  With Clear Ownership.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  One payroll operating view. Every scope has an owner. Every blocker has a next
                  action. Every approval stays attributable.
                </p>

                <div className="mt-6 flex flex-wrap gap-6">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="border-b border-white/40 pb-1 text-xs leading-5 text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#082F49] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="#find-your-path"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Find your solution
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
