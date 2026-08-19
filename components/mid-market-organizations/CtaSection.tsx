import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-linear-to-b from-[#0A2E47] to-[#071E30] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light" center>
            Ready to structure payroll across your entities?
          </Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            Coordinate Payroll Across Expanding Teams and Entities.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-6 text-slate-400">
            One controlled operating view across payroll groups, approvals, records, reconciliation
            and connected systems — while preserving accountable ownership.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#guided-route"
              className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
            >
              Find your solution
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
