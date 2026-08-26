import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function FinalCtaSection() {
  return (
    <section className="bg-[#0A2E4B] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow center tone="light">
            Next step
          </Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Find your market&apos;s guide, then confirm current availability
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-sm leading-6 text-slate-300 sm:text-base">
            Search jurisdiction guides, check current status in the Directory, or talk to the team
            about your operating model.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-a-demo"
              className="rounded-lg bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a demo
            </Link>
            <Link
              href="#guide-directory"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40"
            >
              Find a jurisdiction guide
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
