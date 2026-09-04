import Reveal from "../ui/Reveal";

const rows = [
  {
    dimension: "Support",
    core: "Standard",
    professional: "Priority",
    business: "Premium",
    enterprise: "Contracted SLA",
    shaded: false,
  },
  {
    dimension: "Parallel-run workspace",
    core: "Not standard",
    professional: "1 workspace",
    business: "Multiple workspaces",
    enterprise: "Contracted",
    shaded: true,
  },
  {
    dimension: "Managed Payroll Ops",
    core: "Optional / eligibility",
    professional: "Optional / jurisdiction dependent",
    business: "Optional / jurisdiction dependent",
    enterprise: "Contracted",
    shaded: false,
  },
  {
    dimension: "Filing & remittance",
    core: "Check availability",
    professional: "Check availability",
    business: "Check availability",
    enterprise: "Contracted / dependent",
    shaded: true,
  },
  {
    dimension: "Implementation",
    core: "Separately scoped",
    professional: "Separately scoped",
    business: "Separately scoped",
    enterprise: "Contracted program",
    shaded: false,
  },
];

export default function PlanServiceBand() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20" id="plan-service-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Included-by-plan
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-9 text-[#082F49]">
                How service depth changes across plans.
              </h2>
            </div>
            <div className="flex items-start lg:justify-end lg:pt-7">
              <p className="max-w-xs text-sm font-normal leading-5 text-slate-500">
                A public orientation layer — the catalog<br />remains authoritative.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Table */}
        <Reveal delay={100} className="mt-10">
          <div className="w-full overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-[#DCE6EC]">

            {/* Header row */}
            <div className="flex h-11 bg-[#082F49]">
              <div className="flex items-center pl-4" style={{ width: "18.49%" }}>
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white font-['Inter']">
                  Dimension
                </span>
              </div>
              <div className="flex items-center pl-4" style={{ width: "15.35%" }}>
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white font-['Inter']">
                  Core
                </span>
              </div>
              <div className="flex items-center pl-4" style={{ width: "23.87%" }}>
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white font-['Inter']">
                  Professional
                </span>
              </div>
              <div className="flex items-center pl-4" style={{ width: "23.87%" }}>
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white font-['Inter']">
                  Business
                </span>
              </div>
              <div className="flex flex-1 items-center pl-4">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white font-['Inter']">
                  Enterprise
                </span>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row) => (
              <div
                key={row.dimension}
                className={`flex h-12 border-t border-[#DCE6EC] ${
                  row.shaded ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="flex items-center pl-4 pr-2" style={{ width: "18.49%" }}>
                  <span className="text-xs font-bold leading-5 text-[#082F49] font-['Inter']">
                    {row.dimension}
                  </span>
                </div>
                <div className="flex items-center pl-4 pr-2" style={{ width: "15.35%" }}>
                  <span className="text-xs font-normal leading-5 text-slate-600 font-['Inter']">
                    {row.core}
                  </span>
                </div>
                <div className="flex items-center pl-4 pr-2" style={{ width: "23.87%" }}>
                  <span className="text-xs font-normal leading-5 text-slate-600 font-['Inter']">
                    {row.professional}
                  </span>
                </div>
                <div className="flex items-center pl-4 pr-2" style={{ width: "23.87%" }}>
                  <span className="text-xs font-normal leading-5 text-slate-600 font-['Inter']">
                    {row.business}
                  </span>
                </div>
                <div className="flex flex-1 items-center pl-4 pr-2">
                  <span className="text-xs font-normal leading-5 text-slate-600 font-['Inter']">
                    {row.enterprise}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </Reveal>
      </div>
    </section>
  );
}
