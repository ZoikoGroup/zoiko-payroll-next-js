import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#082F49] py-20 sm:py-28">
      <img
        src="/images/business-leaders/final-cta.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,47,73,0.92) 0%, rgba(11,31,63,0.88) 60%, rgba(8,47,73,0.94) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[13px] font-bold tracking-[0.06em] text-[#8FB4FF] uppercase">
          Ready to See Payroll Without the Noise?
        </p>
        <h2 className="mt-2.5 max-w-[600px] text-[1.75rem] leading-[1.2] font-extrabold tracking-tight text-white sm:text-3xl lg:text-[30.4px]">
          Bring status, exceptions and decisions into one view.
        </h2>
        <p className="mt-3 max-w-[520px] text-[15px] leading-[1.6] text-white/72">
          A guided walkthrough of the Assurance Center, material exceptions
          and decision briefs, mapped to your entities.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/book-a-demo"
            className="inline-flex items-center justify-center rounded-lg bg-[#068ACE] px-6 py-[13px] text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#0575AE]"
          >
            Book a Demo →
          </Link>
          <Link
            href="/solution"
            className="inline-flex items-center justify-center rounded-lg border border-white/35 px-6 py-[13px] text-[14.5px] font-semibold text-white transition-all hover:bg-white/10"
          >
            Find Your Solution
          </Link>
        </div>
      </div>
    </section>
  );
}
