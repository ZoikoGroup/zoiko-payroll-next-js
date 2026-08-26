import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-2xl bg-brand-dark px-6 py-14 text-center sm:px-10">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Final step</p>
          <h2 className="mx-auto mt-3.5 max-w-[640px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Complete payroll due diligence with the right evidence and authority.
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-sm leading-6 text-slate-300">
            Review Zoiko Payroll product controls, current assurance evidence, privacy and
            resilience routes, shared responsibilities and procurement next steps — without relying
            on unsupported security claims.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#trust-path-router"
              className="w-full rounded-[10px] bg-white px-6 py-3 text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              Choose what you need to verify
            </Link>
            <Link
              href="#security-controls"
              className="w-full rounded-[10px] border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 sm:w-auto"
            >
              Review payroll security controls
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
