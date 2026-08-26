import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const items = [
  {
    title: "Discovery questions",
    description: "Entities, populations, calendars and systems worth scoping first.",
  },
  {
    title: "Data & mapping",
    description: "What source data typically needs mapping for this market.",
  },
  {
    title: "Testing & validation",
    description: "What a controlled parallel run typically checks locally.",
  },
  {
    title: "Launch readiness",
    description: "No generic timeline — readiness is scoped per program.",
  },
];

export default function ImplementationSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Implementation considerations</Eyebrow>
          <h2 className="mt-3.5 max-w-[520px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Educational readiness — not a project commitment.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 60}
              className="h-full rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{item.title}</p>
              <p className="mt-2.5 text-xs leading-5 text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-7 flex justify-center">
          <Link
            href="/global-payroll/implementation-migration"
            className="rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-bold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30"
          >
            Open Implementation and Migration
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
