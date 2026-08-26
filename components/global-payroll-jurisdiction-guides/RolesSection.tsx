import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const cards = [
  {
    title: "Separation of duties",
    description:
      "What preparation, review and approval separation typically looks like for this market.",
  },
  {
    title: "Local ownership",
    description: "Who typically owns local configuration decisions and evidence for this jurisdiction.",
  },
  {
    title: "Entity authority",
    description:
      "Which entity or payroll group can act is a Multi-Entity Payroll question, not one this guide answers.",
  },
];

export default function RolesSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Roles, entity &amp; approval context</Eyebrow>
            <h2 className="mt-3.5 max-w-[510px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              Explains the questions. Never infers authority.
            </h2>
          </Reveal>

          <Reveal
            delay={120}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src="/images/global-payroll-jurisdiction-guides/roles.png"
              alt="Colleagues reviewing payroll roles together at a laptop"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="px-5 py-5">
              <p className="text-sm font-extrabold leading-5 text-brand-dark">
                Roles stay entity-specific
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Corporate hierarchy is never treated as automatic payroll authority.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 60}
              className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold leading-5 text-brand-dark">{card.title}</p>
              <p className="mt-2.5 text-xs leading-5 text-slate-600">{card.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-6 rounded-[10px] border border-l-[3px] border-slate-200 border-l-brand bg-sky-100 px-6 py-5"
        >
          <p className="text-sm leading-5 text-brand-dark">
            Need to confirm which entity or payroll group can act?{" "}
            <Link
              href="/global-payroll/multi-entity-payroll"
              className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
            >
              Open Multi-Entity Payroll →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
