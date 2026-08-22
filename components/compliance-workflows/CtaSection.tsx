import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[20px] bg-[#0E2A38] bg-radial-[at_100%_7%] from-[#154457] to-[#0E2A38] to-60%">
            <div className="grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-indigo-300">
                  Ready to make payroll review traceable?
                </p>
                <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-white">
                  Bring evidence, decisions and follow-up into one controlled workflow
                </h2>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/book-a-demo"
                    className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a demo
                  </Link>
                  <Link
                    href="/local-payroll-requirements"
                    className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
                  >
                    Review Local Payroll Requirements
                  </Link>
                </div>

                <Link
                  href="/global-payroll/coverage"
                  className="mt-7 inline-flex border-b border-indigo-200/30 pb-0.5 text-sm font-medium text-indigo-200 transition-colors duration-200 hover:text-white"
                >
                  Check jurisdiction availability <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              <img
                src="/images/compliance-workflows/cta.png"
                alt="Compliance reviewers working through a workflow on a laptop"
                className="h-64 w-full rounded-[20px] object-cover sm:h-80"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
