import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1A33] py-16 sm:py-20">
      <img
        src="/images/single-jurisdiction/cta-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div
        className="absolute inset-0 bg-radial-[at_50%_0%] from-blue-500/20 to-transparent to-70%"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light" center>
            One market. Full payroll control.
          </Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white">
            Run your payroll with a clear, reviewable operating model
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-white/70">
            See the control center, lifecycle and reporting mapped to your entities and payroll
            groups
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#fit"
              className="flex min-h-11 items-center justify-center rounded-lg border border-[#565F6E] bg-[#3D4655] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Find your solution
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
