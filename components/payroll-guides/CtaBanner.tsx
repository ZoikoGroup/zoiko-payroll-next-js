import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const resourceLinks = [
  "Resource Center",
  "Help Center",
  "System Status",
  "Release Notes",
  "Jurisdiction Guides",
  "Global Payroll",
  "Implementation",
  "Security and Trust",
  "Reporting",
];

export default function CtaBanner() {
  return (
    <section className="bg-[#0A2E4B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow tone="light" className="text-blue-300">
              Need the next authoritative step?
            </Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold font-jakarta text-white leading-9">
              Use the guide to learn. Use the source that<br />owns the decision.
            </h2>
            <p className="mt-6 mx-auto max-w-[832px] text-base font-jakarta text-[#B9CDDD] leading-7">
              Explore practical payroll guidance, then move to Product Documentation for current
              product behavior,<br /> Jurisdiction Guides for market-specific education, Help Center for
              support, System Status for service<br /> health, or Implementation when a controlled rollout
              needs deeper planning.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#3EA3E0] to-[#0B4573] px-6 py-3 text-sm font-bold font-jakarta text-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore payroll guides
              </Link>
              <Link
                href="#"
                className="flex h-11 items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-bold font-jakarta text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white"
              >
                Visit Product Documentation
              </Link>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {resourceLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs font-jakarta text-[#9FC7E3] leading-5 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}