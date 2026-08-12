import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const phases = [
  { number: "01", title: "Discover", description: "Entities, jurisdictions, calendars, users, controls." },
  { number: "02", title: "Configure", description: "Payroll rules, workflows, roles, access." },
  { number: "03", title: "Prepare data", description: "Map, validate, cleanse, transfer." },
  { number: "04", title: "Validate", description: "Test calculations, records, reports." },
  { number: "05", title: "Parallel test", description: "Compare against existing process." },
  { number: "06", title: "Launch", description: "Controlled cutover & monitoring." },
  { number: "07", title: "Optimize", description: "Review outcomes & exceptions." },
];

export default function ImplementationSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#F4F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Implementation &amp; migration</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            A controlled journey, not an instant switch.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Every phase shows its work and its exit evidence. No production cutover until required
            customer and Zoiko owners approve readiness.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/how-it-works/implementation.png"
              alt="Implementation team agreeing on a readiness milestone"
              loading="lazy"
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-xl font-semibold text-brand-dark">Parallel testing before go-live</h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-600">
              Where appropriate, approved outputs are compared against your existing payroll process
              before anything replaces it — no universal duration or instant-migration claims.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {phases.map((phase, index) => (
            <Reveal key={phase.number} delay={index * 50}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-4">
                <span className="text-xs font-semibold text-brand">{phase.number}</span>
                <h4 className="mt-2 text-sm font-semibold text-brand-dark">{phase.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{phase.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
