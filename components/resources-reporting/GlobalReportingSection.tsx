import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function GlobalReportingSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand-dark">
          <img
            src="/images/resources-reporting/global-multi-entity.png"
            alt="Two colleagues comparing payroll results across markets"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(31deg, rgba(15,23,42,0.92) 0%, rgba(8,47,73,0.78) 55%, rgba(10,120,194,0.40) 100%)",
            }}
          />
          <div className="relative flex min-h-72 flex-col justify-center px-6 py-10 sm:px-10 lg:min-h-80 lg:px-13">
            <Eyebrow tone="light">Global &amp; multi-entity reporting</Eyebrow>
            <h2 className="mt-3 max-w-[420px] text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              Comparability has rules — never assumed.
            </h2>
            <p className="mt-3 max-w-[500px] text-sm leading-6 text-slate-300 sm:text-base">
              Local currency, calendars and source quality are never silently normalized.
              Cross-jurisdiction comparisons route to Global Reporting; local statutory questions
              route to Jurisdiction Guides.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
