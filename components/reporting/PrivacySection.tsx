import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const pills = ["Aggregate-first views", "Small-population protection", "No performance scoring"];

export default function PrivacySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-slate-900 p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
            <img
              src="/images/reporting/privacy.png"
              alt="HR leaders discussing aggregate workforce reporting"
              className="h-72 w-full rounded-2xl object-cover sm:h-80"
            />

            <div>
              <Eyebrow tone="light">Global context &amp; privacy</Eyebrow>
              <h2 className="mt-3 text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-10">
                Aggregate-first, with small-population protection.
              </h2>
              <p className="mt-3.5 max-w-lg text-base leading-6 text-white/70">
                Currency, timezone, payroll frequency, jurisdiction and entity context stay explicit. No
                productivity scores, compensation rankings or hidden performance inference — ever.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm leading-5 text-white/80"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
