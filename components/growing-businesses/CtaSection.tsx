import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-lg bg-[#0E3A5C] px-8 py-12 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Add the structure. Keep the control
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                Named ownership, validated inputs, separated approvals and clear records — added at
                the pace your business actually needs.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <Link
                  href="/book-a-demo"
                  className="flex min-h-11 items-center justify-center rounded-[3px] bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book a demo
                </Link>
                <Link
                  href="#find-your-solution"
                  className="flex min-h-11 items-center justify-center rounded-[3px] border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
                >
                  Find your solution
                </Link>
              </div>
            </div>

            <img
              src="/images/growing-businesses/cta.png"
              alt="Finance lead reviewing payroll charts on a desktop screen"
              className="aspect-[420/289] w-full rounded-lg object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
