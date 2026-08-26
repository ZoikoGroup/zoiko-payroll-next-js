import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function EvaluationSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-sky-950 lg:grid-cols-2">
            <div className="px-8 py-10 sm:px-10">
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-300">
                <span
                  className="inline-block h-3.5 w-[3px] shrink-0 rounded-[1px] bg-sky-400"
                  aria-hidden="true"
                />
                Evaluation
              </p>
              <h2 className="mt-5 max-w-md text-xl font-bold leading-8 text-white sm:text-2xl">
                Need the product behavior behind the terminology?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                Explore how Zoiko Payroll structures processing, approvals, records, reporting,
                integrations and global payroll operations — or speak with the team about your
                operating model.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/product/how-it-works"
                  className="flex min-h-11 items-center justify-center rounded-md bg-sky-600 px-5 py-3 text-sm font-bold leading-5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  Explore Zoiko Payroll
                </Link>
                <Link
                  href="/pricing"
                  className="flex min-h-11 items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-bold leading-5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <img
              src="/images/payroll-glossary/governance.png"
              alt="Two colleagues reviewing a payroll document together"
              className="h-64 w-full object-cover lg:h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
