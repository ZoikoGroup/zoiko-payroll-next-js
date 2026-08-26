import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function FinalCtaSection() {
  return (
    <section className="bg-brand-dark py-14 sm:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <Eyebrow tone="light">Ready to go further?</Eyebrow>
          <h2 className="mt-3.5 max-w-[640px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Explore current Reporting and Analytics, or plan your rollout.
          </h2>
          <p className="mt-5 max-w-[540px] text-base leading-6 text-slate-300">
            Existing customer? Product Documentation, Help Center and System Status resolve most
            reporting tasks without a sales detour.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <Link
            href="/product/reporting"
            className="rounded-lg bg-brand-gradient px-6 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
          >
            See Reporting and Analytics
          </Link>
          <Link
            href="/global-payroll/reporting"
            className="rounded-lg border border-white/30 px-6 py-3.5 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white"
          >
            Explore Global Reporting
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
