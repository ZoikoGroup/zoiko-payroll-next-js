import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

export default function CtaSection() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-[#0E2233] px-6 py-14 text-center sm:px-10">
            <Eyebrow tone="light" center>
              Ready to turn guidance into a controlled global payroll plan?
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
              Start with the right resource. Move to current operational truth when the decision
              requires it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70">
              Keep essential guidance public — commercial conversion comes after useful content and
              current-status context.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="/global-payroll/country-territory-directory"
                className="flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Check jurisdiction availability
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
