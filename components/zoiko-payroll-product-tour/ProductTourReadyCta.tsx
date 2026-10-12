import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ProductTourReadyCta() {
  return (
    <section className="w-full bg-[#0A2E4B] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <Reveal>
          {/* Eyebrow */}
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
            // READY TO GO FURTHER?
          </span>

          {/* Heading */}
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            See it yourself, or talk to our team.
          </h2>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#interactive-tour"
              className="inline-flex items-center justify-center rounded-lg bg-[#0A78C2] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#159BD7] active:translate-y-0"
            >
              Start the product tour
            </Link>

            <Link
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 active:translate-y-0"
            >
              Book a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
