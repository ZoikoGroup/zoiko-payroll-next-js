import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const facts = [
  { label: "Status", value: "Active" },
  { label: "Effective", value: "Mar 2026" },
  { label: "Last verified", value: "Aug 2026" },
];

export default function RelationshipProfileSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Relationship profile</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every profile follows the same public contract
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-9 grid max-w-[820px] grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-2"
        >
          <img
            src="/images/company-partners/relationship-profile.png"
            alt="Colleagues discussing a partnership over a shared table"
            loading="lazy"
            className="h-56 w-full object-cover lg:h-full"
          />

          <div className="p-6 sm:p-8">
            <span className="inline-flex rounded-md bg-sky-100 px-2 py-0.5 text-xs font-extrabold uppercase leading-4 tracking-wide text-sky-800">
              Technology relationship
            </span>

            <p className="mt-3 text-xl font-extrabold leading-9 text-brand-dark">
              Example Organization
            </p>

            <p className="mt-1 text-sm leading-5 text-slate-600">
              Scope: payroll data exchange for approved HRIS interoperability. This relationship does
              not establish live integration availability, data access or certification.
            </p>

            <dl className="mt-4 grid grid-cols-1 overflow-hidden rounded-xl border border-slate-200 sm:grid-cols-2">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`border-b border-slate-200 px-4 py-3.5 last:border-b-0 sm:border-b ${
                    index === 0 ? "sm:border-r" : ""
                  } ${index === 2 ? "sm:col-span-2 sm:border-b-0" : ""}`}
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
                <span className="font-bold">What this does not establish:</span> integration
                availability, jurisdiction coverage, data access or reseller authority. See Product
                Integrations for current connector status.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
