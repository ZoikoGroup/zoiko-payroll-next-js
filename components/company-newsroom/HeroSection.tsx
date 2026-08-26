import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
      <img
        src="/images/company-newsroom/hero.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(19deg, rgba(15,23,42,0.90) 0%, rgba(8,47,73,0.75) 55%, rgba(2,132,199,0.40) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow tone="light">Newsroom</Eyebrow>
          </div>

          <h1 className="mx-auto mt-3.5 max-w-[924px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Approved company and product announcements from Zoiko Payroll
          </h1>

          <p className="mx-auto mt-4 max-w-[846px] text-base leading-6 text-slate-300">
            Read official announcements with clear publication dates, scope, source-of-truth
            handoffs and visible correction history. For current product behavior, shipped changes,
            service health or trust evidence, use the authoritative destination linked from each
            story.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#latest-announcement"
              className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              View latest announcements
            </Link>
            <Link
              href="#product-announcements"
              className="w-full rounded-lg border border-white/90 bg-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/30 sm:w-auto"
            >
              Browse product announcements
            </Link>
          </div>

          <p className="mt-6 text-xs leading-5 text-blue-200">
            Latest published Aug 12, 2026 ·{" "}
            <Link
              href="#media-inquiry"
              className="font-bold text-blue-300 transition-colors duration-200 hover:text-white"
            >
              Media inquiry
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
