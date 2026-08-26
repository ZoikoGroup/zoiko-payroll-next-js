import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-14 sm:py-20">
      <img
        src="/images/resources-security-trust/hero-background.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(23deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.90) 38%, rgba(8,47,73,0.25) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Security and Trust Resources</Eyebrow>

          <h1 className="mt-3.5 max-w-[665px] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Payroll security and trust resources, organized by what you need to verify.
          </h1>

          <p className="mt-5 max-w-[660px] text-base leading-6 text-slate-300">
            Review payroll security controls, current trust evidence, privacy and resilience
            resources, and procurement guidance — with clear scope and an authoritative next step
            for each question.
          </p>

          <div className="mt-6 max-w-[660px] rounded-[10px] border border-white/20 bg-white/10 px-4 py-3.5 backdrop-blur-sm">
            <p className="text-sm leading-5 text-slate-200">
              Product controls, evidence, live status and contractual commitments are different
              forms of truth. This hub helps you find the source that owns each one.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#review-intent-router"
              className="rounded-lg bg-brand-gradient px-6 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
            >
              Choose what you need to review
            </Link>
            <Link
              href="#controls-preview"
              className="rounded-lg border border-white/50 px-6 py-3.5 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white"
            >
              Review payroll security controls
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <img
            src="/images/resources-security-trust/hero.png"
            alt="Two colleagues reviewing security dashboards together"
            loading="lazy"
            className="h-64 w-full rounded-[10px] object-cover sm:h-80 lg:h-[428px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
