import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-sky-950 px-8 py-10 lg:flex-row lg:items-center lg:px-10">
            <div>
              <h2 className="max-w-md text-2xl font-bold leading-9 text-white sm:text-3xl">
                Give employees payroll records they can trust.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                See how Zoiko Payroll publishes, versions and secures every employee payroll record.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/product/tour"
                className="rounded-lg border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white"
              >
                Start the product tour
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
