import Reveal from "@/components/ui/Reveal";

interface RegistryItem {
  country: string;
  badge: string;
  badgeStyle: string;
  scope: string;
  verified: string;
}

const registryItems: RegistryItem[] = [
  {
    country: "Germany",
    badge: "Available",
    badgeStyle: "border-emerald-200 bg-emerald-50 text-emerald-700",
    scope: "Core payroll processing, approvals, records and reporting.",
    verified: "Last verified: Aug 2026",
  },
  {
    country: "United Kingdom",
    badge: "Limited / Scoped",
    badgeStyle: "border-amber-200 bg-amber-50 text-amber-700",
    scope: "Core processing available; select reporting scope limited.",
    verified: "Last verified: Aug 2026",
  },
  {
    country: "Brazil",
    badge: "Assessment required",
    badgeStyle: "border-blue-200 bg-blue-50 text-[#0A78C2]",
    scope: "Availability depends on customer facts and implementation review.",
    verified: "Last verified: Jul 2026",
  },
  {
    country: "Example Territory",
    badge: "Not currently available",
    badgeStyle: "border-slate-200 bg-slate-100 text-slate-600",
    scope: "Zoiko Payroll is not currently offered for this jurisdiction.",
    verified: "Last verified: No date",
  },
];

export default function CoverageDirectorySection() {
  return (
    <section className="w-full bg-[#F4F8FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0A78C2]">
              / COVERAGE DIRECTORY
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#082F49] sm:text-3xl md:text-[34px]">
              Browse current registry results.
            </h2>
          </div>
        </Reveal>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {registryItems.map((item, idx) => (
            <Reveal key={item.country} delay={idx * 60}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#082F49]">
                      {item.country}
                    </h3>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${item.badgeStyle}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {item.scope}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3">
                  <span className="font-mono text-[11px] text-slate-400">
                    {item.verified}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={200}>
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Illustrative registry rows for this design template — no current country list is implied beyond what the live registry publishes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
