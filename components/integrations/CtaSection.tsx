import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 text-center sm:px-12">
            <img
              src="/images/integrations/cta-bg.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />

            <div className="relative">
              <Eyebrow tone="light" center className="justify-center">
                Get started
              </Eyebrow>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-10 text-white">
                Map your payroll integration requirements before you implement.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70">
                Tell us the systems involved, the direction of data, and your implementation timing —
                we&rsquo;ll route it to the right technical and commercial owner.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <span className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white">
                  Explore the Integration Hub
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
