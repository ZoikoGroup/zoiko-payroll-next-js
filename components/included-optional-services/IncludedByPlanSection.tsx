import Reveal from "../ui/Reveal";

const plans = ["Core", "Professional", "Business", "Enterprise"];

const rows = [
  {
    dimension: "Support",
    values: ["Standard", "Priority", "Premium", "Contracted SLA"],
  },
  {
    dimension: "Parallel-run workspace",
    values: ["Not standard", "1 workspace", "Multiple workspaces", "Contracted"],
    striped: true,
  },
  {
    dimension: "Managed Payroll Ops",
    values: [
      "Optional / eligibility",
      "Optional / jurisdiction dependent",
      "Optional / jurisdiction dependent",
      "Contracted",
    ],
  },
  {
    dimension: "Filing & remittance",
    values: [
      "Check availability",
      "Check availability",
      "Check availability",
      "Contracted / dependent",
    ],
    striped: true,
  },
  {
    dimension: "Implementation",
    values: [
      "Separately scoped",
      "Separately scoped",
      "Separately scoped",
      "Contracted program",
    ],
  },
];

export default function IncludedByPlanSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#0A78C3]">
                <span aria-hidden="true">/</span>
                Included-by-plan
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-9 text-[#082F49]">
                How service depth changes across plans.
              </h2>
            </div>
            <div className="flex items-start justify-end pt-[65px] lg:justify-end">
              <p className="max-w-xs text-sm leading-5 text-[#5B6B7A]">
                A public orientation layer — the catalog remains authoritative.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-x-auto">
            <div className="w-[1136px] min-w-[1136px] rounded-2xl bg-white ring-1 ring-[#DCE6EC] overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[208px_176px_256px_256px_1fr] border-b border-[#DCE6EC] bg-[#082F49]">
                <div className="flex h-11 items-center px-4">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Dimension
                  </span>
                </div>
                {plans.map((plan) => (
                  <div key={plan} className="flex h-11 items-center px-4">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                      {plan}
                    </span>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {rows.map((row) => (
                <div
                  key={row.dimension}
                  className={`grid grid-cols-[208px_176px_256px_256px_1fr] border-t border-[#DCE6EC] ${
                    row.striped ? "bg-[#FAF_CFD]" : "bg-white"
                  }`}
                  style={row.striped ? { backgroundColor: "#FAFCFD" } : {}}
                >
                  <div className="flex h-12 items-center px-4">
                    <span className="text-xs font-bold leading-5 text-[#082F49]">
                      {row.dimension}
                    </span>
                  </div>
                  {row.values.map((val, i) => (
                    <div key={i} className="flex h-12 items-center px-4">
                      <span className="text-xs font-normal leading-5 text-[#4E6172]">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}