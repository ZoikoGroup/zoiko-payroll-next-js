import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const facts = [
  { label: "Published", value: "Aug 12, 2026" },
  { label: "Scope", value: "Global Payroll" },
];

export default function CanonicalDetailSection() {
  return (
    <section className="bg-[#F5F5F5] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[950px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Canonical announcement detail</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every announcement opens with the same identity contract
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-9 grid max-w-[820px] grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-2"
        >
          <img
            src="/images/company-newsroom/canonical-detail.png"
            alt="A spokesperson presenting global coverage on screen"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
          />

          <div className="p-6 sm:p-8">
            <span className="inline-flex rounded-md bg-sky-100 px-2 py-0.5 text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-800">
              Company
            </span>

            <p className="mt-3 text-xl font-extrabold leading-8 text-brand-dark">
              Zoiko Payroll expands Global Payroll coverage to three additional markets.
            </p>

            <p className="mt-3 text-sm leading-5 text-slate-600">
              Zoiko Payroll has extended its Global Payroll operating model to three new
              jurisdictions, with local requirement guides available at launch.
            </p>

            <dl className="mt-4 grid grid-cols-1 overflow-hidden rounded-xl border border-slate-200 sm:grid-cols-2">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`border-b border-slate-200 px-4 pb-4 pt-3.5 last:border-b-0 ${
                    index === 0 ? "sm:border-b-0 sm:border-r" : "sm:border-b-0"
                  }`}
                >
                  <dt className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold leading-5 text-brand-dark">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 rounded-xl border border-l-4 border-slate-200 border-l-brand px-5 py-4">
              <p className="text-sm leading-6 text-brand-dark">
                <span className="font-bold">Current truth:</span> For current market availability,
                see the Global Payroll Coverage directory — not this announcement.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
