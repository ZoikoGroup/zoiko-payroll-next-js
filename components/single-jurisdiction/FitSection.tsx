import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const fitPoints = [
  "You operate in one primary statutory payroll jurisdiction",
  "You have one or more legal entities or payroll groups",
  "Your workforce is growing — that alone doesn't change the model",
  "You need structured review, approval and reporting",
];

const alternatives = [
  {
    label: "Multi-Jurisdiction Payroll",
    description: "Statutory responsibility spans multiple markets.",
    href: "/multi-jurisdiction",
  },
  {
    label: "Centralized Payroll Operations",
    description: "Consolidation across teams or systems is the main need.",
    href: "/centralized-operations",
  },
  {
    label: "Payroll Modernization / Migration",
    description: "Replacement or cutover from a legacy system is the main need.",
    href: "/payroll-modernization",
  },
];

export default function FitSection() {
  return (
    <section id="fit" className="scroll-mt-24 border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Fit: one market, real complexity</Eyebrow>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-9 text-slate-900">
            One statutory market can still mean real operational depth.
          </h2>
          <p className="mt-2.5 max-w-2xl text-base leading-6 text-gray-700">
            Multiple legal entities, payroll groups, populations, calendars and approval paths can
            all exist within a single jurisdiction.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-extrabold leading-6 text-slate-900">
                Zoiko Payroll fits when:
              </h3>

              <div className="mt-3">
                {fitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 py-2">
                    <span
                      aria-hidden="true"
                      className="text-sm font-bold leading-5 text-green-600"
                    >
                      ✓
                    </span>
                    <p className="text-sm leading-5 text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/how-it-works"
                  className="flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  Yes — show me how it works
                </Link>
                <Link
                  href="/solutions"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Not sure — find your solution
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-3">
              {alternatives.map((alternative) => (
                <Link
                  key={alternative.label}
                  href={alternative.href}
                  className="rounded-xl border border-slate-200 bg-white px-4 pt-3.5 pb-4 transition-colors duration-200 hover:border-blue-600"
                >
                  <p className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    <span aria-hidden="true">→</span> {alternative.label}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {alternative.description}
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
