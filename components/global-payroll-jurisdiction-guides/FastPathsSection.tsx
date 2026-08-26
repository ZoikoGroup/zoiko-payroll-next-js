import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const rows = [
  {
    asking: "\u201cHow do I configure/use this in Zoiko Payroll?\u201d",
    path: "Product Documentation",
    href: "/resources/documentation",
  },
  { asking: "\u201cSomething is not working\u201d", path: "Help Center", href: "/resources/help-center" },
  { asking: "\u201cIs the service down?\u201d", path: "System Status", href: "/resources/system-status" },
  {
    asking: "\u201cWhat changed recently?\u201d",
    path: "Release Notes",
    href: "/resources/release-notes",
  },
  {
    asking: "\u201cWe\u2019re implementing or migrating\u201d",
    path: "Implementation and Migration",
    href: "/global-payroll/implementation-migration",
  },
];

export default function FastPathsSection() {
  return (
    <section className="border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Existing-customer fast paths</Eyebrow>
          <h2 className="mt-3.5 max-w-[680px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Switch from learning to operations — no forced detour.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <img
            src="/images/global-payroll-jurisdiction-guides/fast-paths.png"
            alt="A laptop, notebook and coffee on a desk"
            loading="lazy"
            className="h-40 w-full rounded-2xl object-cover"
          />
        </Reveal>

        <Reveal
          delay={140}
          className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="hidden grid-cols-[minmax(0,1fr)_320px] bg-[#EEF2FF] sm:grid">
            <p className="px-4 py-3.5 text-xs font-bold uppercase leading-4 text-brand-dark">
              What you&apos;re asking
            </p>
            <p className="px-4 py-3.5 text-xs font-bold uppercase leading-4 text-brand-dark">
              Primary path
            </p>
          </div>

          {rows.map((row) => (
            <div
              key={row.path}
              className="grid grid-cols-1 gap-1 border-t border-slate-200 px-4 py-3.5 sm:grid-cols-[minmax(0,1fr)_320px] sm:items-center sm:gap-0 sm:px-0 sm:py-0"
            >
              <p className="text-sm leading-5 text-brand-dark sm:px-4 sm:py-3.5">{row.asking}</p>
              <Link
                href={row.href}
                className="text-sm font-bold leading-5 text-brand transition-colors duration-200 hover:text-brand-dark sm:px-4 sm:py-3.5"
              >
                {row.path}
              </Link>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
