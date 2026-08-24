import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const destinations = [
  { label: "Product Documentation", href: "/resources/documentation" },
  { label: "Release Notes", href: "/resources/release-notes" },
  { label: "System Status", href: "/resources/system-status" },
  { label: "Payroll Guides", href: "/resources/payroll-guides" },
  { label: "Jurisdiction Guides", href: "/global-payroll/country-guides" },
  { label: "Implementation", href: "/implementation" },
  { label: "Security and Trust", href: "/security" },
  { label: "Reporting", href: "/reporting" },
];

export default function CtaSection() {
  return (
    <section className="bg-sky-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light" center>
            Still looking for the right source?
          </Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-10">
            Start from the task. Open the source that owns the answer.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-300">
            Search the Resource Center, use Product Documentation for current product behavior, Help
            Center for support, System Status for service health, Release Notes for shipped changes,
            or Book a demo for a scoped evaluation.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/resources"
              className="flex min-h-12 items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Search resources
            </Link>
            <Link
              href="/resources/help-center"
              className="flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Visit Help Center
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {destinations.map((destination) => (
              <li key={destination.label}>
                <Link
                  href={destination.href}
                  className="text-sm leading-5 text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {destination.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
