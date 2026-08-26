import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function FinalCtaSection() {
  return (
    <section className="bg-brand-dark py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow tone="light">Final assistance</Eyebrow>
          </div>
          <h2 className="mx-auto mt-3.5 max-w-[760px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Find the task, watch it, then follow the authority.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-slate-300">
            Search the video library, open current documentation, or talk to the team about your
            operating model.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#task-finder"
              className="w-full rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 sm:w-auto"
            >
              Find a product demonstration
            </Link>
            <Link
              href="/book-a-demo"
              className="w-full rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 sm:w-auto"
            >
              Book a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
