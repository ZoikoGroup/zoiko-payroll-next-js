import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { StarIcon, GlobeIcon, RecordsIcon } from "../ui/icons";

const points = [
  {
    icon: StarIcon,
    lead: "Retention and deletion timelines",
    rest: "come only from the current approved privacy or contract record for your scope.",
  },
  {
    icon: GlobeIcon,
    lead: "Residency is never a single badge",
    rest: "— primary processing, replicas, backups and support access are addressed separately.",
  },
  {
    icon: RecordsIcon,
    lead: "The subprocessor list is kept current",
    rest: "and published separately from marketing or jurisdiction pages.",
  },
];

export default function PrivacyAnswersSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Eyebrow>Who actually answers privacy questions</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Privacy questions get privacy answers — not marketing ones.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Requests about retention, residency, transfers or subprocessors are handled by the teams
            that own those approved records, not summarized from memory on this page.
          </p>

          <ul className="mt-6 space-y-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.lead} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-slate-600">
                    <span className="font-bold text-brand-dark">{point.lead}</span> {point.rest}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <img
            src="/images/company-trust-center/privacy-answers.png"
            alt="A privacy team member reviewing data handling documentation with colleagues"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[395px]"
          />
          <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-lg bg-brand-dark/90 px-3.5 py-2 text-xs font-bold text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Privacy review in progress
          </span>
        </Reveal>
      </div>
    </section>
  );
}
