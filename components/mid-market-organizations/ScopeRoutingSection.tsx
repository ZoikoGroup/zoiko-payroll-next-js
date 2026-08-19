import Link from "next/link";
import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const scopes = [
  {
    label: "Growing Businesses",
    description: "Adding structure before multiple entities exist.",
    href: "/growing-businesses",
  },
  {
    label: "Mid-Market Organizations",
    description: "Repeatable controls across teams, entities, groups.",
    href: null,
  },
  {
    label: "Enterprise Organizations",
    description: "Advanced scale, governance, procurement.",
    href: "/solutions/enterprise",
  },
  {
    label: "International Groups",
    description: "Multiple jurisdictions — cross-market coordination.",
    href: "/international-groups",
  },
];

export default function ScopeRoutingSection() {
  return (
    <section id="where-this-ends" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Where this solution ends"
            title="Find the operating model that matches your scope"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scopes.map((scope) =>
              scope.href ? (
                <Link
                  key={scope.label}
                  href={scope.href}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white px-5 py-5 transition-colors duration-200 hover:border-sky-600"
                >
                  <div>
                    <h3 className="text-base font-bold leading-5 text-sky-950">{scope.label}</h3>
                    <p className="mt-2.5 text-sm leading-5 text-zinc-600">{scope.description}</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-sky-600">
                    Explore <span aria-hidden="true">→</span>
                  </p>
                </Link>
              ) : (
                <div
                  key={scope.label}
                  className="relative flex flex-col justify-between rounded-xl border-2 border-sky-500 bg-sky-50 px-5 py-5"
                >
                  <span className="absolute -top-3 left-5 rounded-full bg-sky-500 px-3 py-0.5 text-xs font-semibold leading-5 text-white">
                    You are here
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-5 text-sky-950">{scope.label}</h3>
                    <p className="mt-2.5 text-sm leading-5 text-zinc-600">{scope.description}</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-sky-600">Currently viewing</p>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
