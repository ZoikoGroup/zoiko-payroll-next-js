import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const assurances = [
  "Role-based access",
  "Recorded approvals",
  "Cross-entity visibility",
  "Controlled integrations",
];

const stats = [
  { label: "Entities", value: "4" },
  { label: "Payroll groups", value: "6" },
  { label: "Runs on track", value: "4/6" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-radial-[at_85%_-10%] from-[#123B5E] via-[#082F49] via-55% to-[#051726] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow tone="light">Mid-market payroll</Eyebrow>
            <h1 className="mt-3 text-3xl font-extrabold leading-10 text-white sm:text-4xl">
              Bring Payroll Structure to{" "}
              <span className="text-sky-400">Expanding Teams and Entities</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
              Coordinate payroll across growing teams, legal entities, payroll groups, approvals and
              connected systems from one controlled environment — without losing accountable local
              ownership.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {assurances.map((assurance) => (
                <span key={assurance} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-xs bg-blue-300" aria-hidden="true" />
                  <span className="text-xs leading-5 text-slate-400">{assurance}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex min-h-11 items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a demo
              </Link>
              <Link
                href="#guided-route"
                className="flex min-h-11 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60"
              >
                Find your solution
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/mid-market-organizations/hero.png"
                alt="A payroll lead briefing an expanding team"
                className="aspect-[547/367] w-full object-cover"
              />
              <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-900/90 px-4 pt-3 pb-3.5">
                    <p className="font-mono text-[0.6rem] uppercase leading-4 text-stone-300">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-lg font-extrabold leading-7 text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
