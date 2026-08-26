import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const guides = [
  {
    flag: "/images/global-payroll-jurisdiction-guides/flag-germany.png",
    name: "Germany",
    scope: "Country · Europe",
    description:
      "Payroll terminology, operating environment and common questions for running payroll in Germany.",
    state: "Current",
    reviewed: "Reviewed Aug 2026",
  },
  {
    flag: "/images/global-payroll-jurisdiction-guides/flag-brazil.png",
    name: "Brazil",
    scope: "Country · Latin America",
    description:
      "Educational context on payroll calendars, calculations and documentation practices in Brazil.",
    state: "Current",
    reviewed: "Reviewed Jul 2026",
  },
  {
    flag: "/images/global-payroll-jurisdiction-guides/flag-singapore.png",
    name: "Singapore",
    scope: "Country · Asia Pacific",
    description:
      "Market overview and operating questions for organizations running payroll in Singapore.",
    state: "Current",
    reviewed: "Reviewed Aug 2026",
  },
  {
    flag: "/images/global-payroll-jurisdiction-guides/flag-united-states.png",
    name: "United States",
    scope: "Country · North America",
    description: "Federal and state-level payroll context, terminology and operating questions.",
    state: "Current",
    reviewed: "Reviewed Aug 2026",
  },
  {
    flag: "/images/global-payroll-jurisdiction-guides/flag-france.png",
    name: "France",
    scope: "Country · Europe",
    description: "Payroll operating context, documentation and reporting considerations for France.",
    state: "Review due",
    reviewed: "Reviewed Feb 2026",
  },
  {
    flag: "/images/global-payroll-jurisdiction-guides/flag-uae.png",
    name: "United Arab Emirates",
    scope: "Country · Middle East",
    description: "Market overview and operating environment for payroll in the UAE.",
    state: "Current",
    reviewed: "Reviewed Jul 2026",
  },
];

export default function GuideDirectorySection() {
  return (
    <section
      id="guide-directory"
      className="scroll-mt-24 border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Guide directory</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Compare eligible guides with trust metadata visible.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Reveal
              key={guide.name}
              delay={index * 60}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start gap-3">
                <img
                  src={guide.flag}
                  alt=""
                  loading="lazy"
                  className="h-6 w-[34px] shrink-0 rounded-[5px] object-cover"
                />
                <div>
                  <p className="text-base font-bold leading-6 text-brand-dark">{guide.name}</p>
                  <p className="mt-0.5 text-xs leading-4 text-slate-400">{guide.scope}</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-600">{guide.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span
                  className={`rounded-[20px] px-2.5 py-1 text-xs font-bold leading-4 ${
                    guide.state === "Current"
                      ? "bg-slate-200 text-slate-600"
                      : "bg-orange-100 text-yellow-700"
                  }`}
                >
                  {guide.state}
                </span>
                <span className="text-xs leading-4 text-slate-400">{guide.reviewed}</span>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-3.5">
                <Link
                  href="#canonical-guide-header"
                  className="group inline-flex items-center gap-1 text-xs font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark"
                >
                  Open guide
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/global-payroll/jurisdiction-coverage"
                  className="text-xs font-bold leading-5 text-brand-dark transition-colors duration-200 hover:text-brand"
                >
                  Check availability
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
