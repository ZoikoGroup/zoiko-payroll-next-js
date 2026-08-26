import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
      <img
        src="/images/company-partners/hero.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(18deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.74) 45%, rgba(15,23,42,0.24) 85%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-[20px] border border-white/20 bg-slate-900/60 p-6 text-center backdrop-blur-sm sm:p-10">
          <div className="flex justify-center">
            <Eyebrow tone="light">Partners</Eyebrow>
          </div>

          <h1 className="mx-auto mt-3.5 max-w-[900px] text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Work with Zoiko Payroll through verified technology, service and ecosystem
            relationships.
          </h1>

          <p className="mx-auto mt-4 max-w-[852px] text-base leading-6 text-slate-200">
            Explore approved partnership pathways, understand what each relationship covers, and
            verify product, jurisdiction, trust and commercial scope through the right authority.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#partner-pathways"
              className="w-full rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 sm:w-auto"
            >
              Explore partner pathways
            </Link>
            <Link
              href="#partnership-inquiry"
              className="w-full rounded-lg border border-white/40 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white sm:w-auto"
            >
              Explore partnership opportunities
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-[720px] text-xs leading-5 text-blue-200">
            A public relationship does not by itself prove a live integration, jurisdiction
            availability, reseller authority, customer-data access, certification, subprocessor
            status or contractual commitment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
