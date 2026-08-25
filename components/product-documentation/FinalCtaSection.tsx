import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";

export default function FinalCtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-2xl bg-brand-dark px-6 py-12 text-center sm:px-12">
          <Eyebrow center tone="light">
            Need current product guidance?
          </Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Search Product Documentation, or get help from a real person
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
              href="/resources/help-center"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40"
            >
              Visit Help Center
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
