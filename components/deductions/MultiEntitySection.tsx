import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const contextChips = [
  "ENT-04 · Zoiko US LLC",
  "US · USD",
  "Monthly cycle",
  "Approval: required",
];

export default function MultiEntitySection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-300 shadow-[0px_14px_34px_-18px_rgba(8,47,73,0.28)]">
              <img
                src="/images/deductions/multi-entity.png"
                alt="Team reviewing global payroll rules and regulations"
                className="h-80 w-full object-cover sm:h-96"
              />
              <span className="absolute top-4 left-4 rounded-md bg-white/95 px-2.5 py-[5px] font-mono text-xs font-medium leading-4 tracking-tight text-sky-950">
                Market by market
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Multi-entity &amp; jurisdiction controls</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
              No rule is assumed to apply globally.
            </h2>
            <p className="mt-3.5 max-w-xl text-base leading-6 text-slate-600">
              Legal entity, jurisdiction, currency and pay-period context are always visible where
              relevant. Type availability and approval policy can vary by market.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-3">
            {contextChips.map((chip) => (
              <span
                key={chip}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs leading-4 text-sky-950"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
