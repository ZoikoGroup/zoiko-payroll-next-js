import Link from "next/link";
import Reveal from "../ui/Reveal";
import { ArrowRightIcon } from "../ui/icons";

export default function HeroSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_500px] lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            Company · Trust &amp; Security
          </span>

          <h1 className="mt-4 max-w-[560px] text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Trust you can actually verify.
          </h1>

          <p className="mt-4 max-w-[520px] text-base leading-7 text-slate-600">
            Every claim on this page is scoped to what it actually proves — a product control, a
            piece of evidence, a live status, or a contractual commitment. Nothing here is a
            substitute for reading the source.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#trust-path-router"
              className="w-full rounded-[10px] bg-brand-dark px-5 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-125 sm:w-auto"
            >
              Choose what you need to verify
            </Link>
            <Link
              href="#security-controls"
              className="w-full rounded-[10px] border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 sm:w-auto"
            >
              Review payroll security controls
            </Link>
            
          </div>
        </Reveal>

        <Reveal delay={140}>
          <img
            src="/images/company-trust-center/hero.png"
            alt="A security engineer reviewing code and monitoring dashboards"
            loading="lazy"
            className="h-56 w-full rounded-[10px] object-cover sm:h-72 lg:h-[395px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
