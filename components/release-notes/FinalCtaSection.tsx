import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

export default function FinalCtaSection() {
  return (
    <section className="bg-brand-dark py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow center tone="light">
            Evaluating Zoiko Payroll?
          </Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Book a demo — only when you&apos;re ready to talk requirements.
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40"
            >
              Book a demo
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/release-notes"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40"
            >
              Browse release notes
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
