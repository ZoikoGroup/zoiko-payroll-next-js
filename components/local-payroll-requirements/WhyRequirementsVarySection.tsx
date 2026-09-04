import Reveal from "../ui/Reveal";

const dimensions = [
  {
    title: "Payroll calendars",
    description: "Frequency, periods, cutoffs, holidays, timezone.",
    highlighted: false,
    icon: "/SVG (9).png",
  },
  {
    title: "Calculation context",
    description: "Earning/deduction treatment and configured inputs.",
    highlighted: false,
    icon: "/SVG (10).png",
  },
  {
    title: "Documents/reporting",
    description: "Payslips, reports, filing/document workflows.",
    highlighted: false,
    icon: "/SVG (11).png",
  },
  {
    title: "Approvals/authority",
    description: "Local roles, delegation and sign-off.",
    highlighted: false,
    icon: "/SVG (12).png",
  },
  {
    title: "Currency/payment",
    description: "Local currency, payment rails, treasury handoffs.",
    highlighted: false,
    icon: "/SVG (13).png",
  },
  {
    title: "Worker/entity context",
    description: "Entity, payroll group, category, effective date.",
    highlighted: false,
    icon: "/SVG (14).png",
  },
  {
    title: "Change cadence",
    description: "Local requirements change over time.",
    highlighted: false,
    icon: "/SVG (15).png",
  },
  {
    title: "Evidence-gated",
    description: "Exact values shown only from current approved evidence.",
    highlighted: true,
    icon: "/SVG (16).png",
  },
];

export default function WhyRequirementsVarySection() {
  return (
    <section className="w-full bg-[#F4F8FB] py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        {/* Top Header & Image Row */}
        <div className="w-full max-w-6xl grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="flex flex-col justify-start items-start gap-2.5">
              <div className="relative flex items-center gap-2">
                <span className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                  / Why local payroll requirements vary
                </span>
              </div>
              <h2 className="text-sky-950 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10">
                Operating complexity, explained<br />
                plainly — not fear marketing
              </h2>
              <p className="text-gray-600 text-base font-normal font-['Inter'] leading-6 mt-1">
                The exact requirement depends on current evidence, worker/entity{" "}
                <br className="hidden sm:inline" />
                context, service model and configuration.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="w-full bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src="/x.png"
                alt="Operating complexity illustration"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom Cards Grid - 3 items per row */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dimensions.map((d, index) => (
            <Reveal key={d.title} delay={index * 40} className="h-full">
              <div
                className={`flex flex-col justify-between h-full rounded-2xl px-5 pt-5 pb-7 outline outline-1 outline-offset-[-1px] outline-slate-200 transition hover:outline-sky-400 ${
                  d.highlighted ? "bg-indigo-50" : "bg-white"
                }`}
              >
                <div>
                  <div className="pb-1.5">
                    <img src={d.icon} alt={d.title} className="size-4 object-contain" />
                  </div>
                  <h3 className="text-sky-950 text-sm font-bold font-['Inter'] leading-5 pb-0.5">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-4 pt-1.5">
                    {d.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}