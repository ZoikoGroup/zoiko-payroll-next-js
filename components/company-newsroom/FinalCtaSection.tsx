import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function FinalCtaSection() {
  return (
    <section className="bg-brand-dark py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow tone="light">Continue from the announcement</Eyebrow>
          </div>
          <h2 className="mx-auto mt-3.5 max-w-[700px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Explore the authority that owns the next decision.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-slate-300">
            Existing customer? Release Notes, Product Documentation, Help Center and System Status
            outrank sales when your intent is operational.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="w-full rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 sm:w-auto"
            >
              Book a demo
            </Link>
            <Link
              href="/company/trust-center"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 sm:w-auto"
            >
              Explore Trust and Security
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
