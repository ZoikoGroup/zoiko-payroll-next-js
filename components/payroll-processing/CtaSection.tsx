import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-slate-900">
            <img
              src="/images/payroll-processing/cta-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/55" aria-hidden="true" />

            <div className="relative flex flex-col items-center px-8 py-12 text-center">
              <Eyebrow tone="light">Get started</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
                See controlled payroll processing on your own workforce and jurisdictions.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                A guided walkthrough of prepare, calculate, validate, review, approve and complete —
                mapped to your entities.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <span className="flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
                  Start product tour
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
