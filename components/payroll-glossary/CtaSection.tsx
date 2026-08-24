import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="bg-sky-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-300">
            <span
              className="inline-block h-3.5 w-[3px] shrink-0 rounded-[1px] bg-sky-400"
              aria-hidden="true"
            />
            Keep exploring
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-center text-2xl font-bold leading-9 text-white sm:text-3xl sm:leading-10">
            Start with a term, end with the right authority.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-slate-300">
            Search the glossary, browse by topic, or talk to the team about how these concepts work
            inside Zoiko Payroll.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/resources/help-center"
              className="flex min-h-12 items-center justify-center rounded-md bg-gradient-to-b from-sky-500 to-sky-700 px-7 py-3 text-sm font-bold leading-5 text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Support
            </Link>
            <Link
              href="/book-a-demo"
              className="flex min-h-12 items-center justify-center rounded-md border border-white/30 px-7 py-3 text-sm font-bold leading-5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Book a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
