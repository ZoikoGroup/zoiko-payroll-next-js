import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-[#0B2338] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light" center>
            Final conversion
          </Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            Bring HR and payroll into one view.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-slate-300">
            See how the HR Payroll Alignment Center keeps authorized changes, effective dates and
            record status governed end to end.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-lg bg-linear-71 from-blue-500 to-sky-900 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#alignment-center"
              className="flex min-h-11 items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
            >
              Find your solution
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
