import Link from "next/link";
import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const boundaries = [
  {
    label: "Growing Businesses",
    description: "One market, increasing structure. You're likely here.",
    href: null,
  },
  {
    label: "Mid-Market Organizations",
    description: "Broader teams and entities, with more governance needs.",
    href: "/solutions/mid-market-organizations",
  },
  {
    label: "International Groups",
    description: "Multiple markets or legal entities — multi-jurisdiction payroll.",
    href: "/solutions/international-groups",
  },
];

export default function BoundariesSection() {
  return (
    <section id="find-your-solution" className="scroll-mt-24 bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Explicit boundaries, so you land on the right page" />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boundaries.map((boundary) =>
              boundary.href ? (
                <Link
                  key={boundary.label}
                  href={boundary.href}
                  className="flex flex-col justify-between rounded-lg border border-neutral-300 bg-white px-6 py-6 transition-colors duration-200 hover:border-slate-900"
                >
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-slate-900">
                      {boundary.label}
                    </h3>
                    <p className="mt-2 text-sm leading-5 text-slate-600">{boundary.description}</p>
                  </div>
                  <p className="mt-8 text-sm font-medium text-slate-900">
                    Explore <span aria-hidden="true">→</span>
                  </p>
                </Link>
              ) : (
                <div
                  key={boundary.label}
                  className="flex flex-col justify-between rounded-lg bg-slate-900 px-6 py-6"
                >
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-white">
                      {boundary.label}
                    </h3>
                    <p className="mt-2 text-sm leading-5 text-slate-300">{boundary.description}</p>
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-white">
                    Current solution
                  </p>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
