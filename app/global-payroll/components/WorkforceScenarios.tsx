import Image from "next/image";

const scenarios = [
  { title: "New hires", desc: "Structured onboarding, first-cycle setup and identity verification — ready before day one.", tag: "Pre-start pathway", tagDot: "bg-sky-600", image: "/images/global-payroll/2.png" },
  { title: "Domestic & international relocation", desc: "Currency, tax residency and entity reassignment handled without a payroll gap.", tag: "Flexible effective dates", tagDot: "bg-green-600", image: "/images/global-payroll/3.png" },
  { title: "Temporary assignments & secondments", desc: "Defined start and end dates, with a clear, accountable exit from payroll.", tag: "Fixed-term stay", tagDot: "bg-yellow-600", image: "/images/global-payroll/4.png" },
  { title: "Projects & rotations", desc: "Multi-entity work with clean, traceable handovers between assignments.", tag: "Cross-entity ready", tagDot: "bg-sky-600", image: "/images/global-payroll/5.png" },
  { title: "Seasonal workforces", desc: "Peak-period capacity with predictable, short-cycle costs.", tag: "Rapid start", tagDot: "bg-green-600", image: "/images/global-payroll/6.png" },
  { title: "Trainees, apprentices & contractors", desc: "Lower budgets, defined pay programs, and no performance or productivity scoring.", tag: "No performance data", tagDot: "bg-gray-400", image: "/images/global-payroll/7.png" },
];

export default function WorkforceScenarios() {
  return (
    <section className="w-full px-32 py-20 bg-slate-50 border-b border-slate-100">
      <div className="w-full max-w-[1180px] mx-auto px-8 flex flex-col items-start gap-11">
        {/* Header */}
        <div className="w-[782px] pt-[1.62px] flex flex-col items-start">
          <div className="w-48 h-5 relative">
            <div className="absolute left-[0px] top-[-1px] text-sky-700 text-xs font-bold uppercase leading-5 tracking-wide">
              / Workforce Scenarios
            </div>
          </div>
          <div className="pt-3.5 text-sky-950 text-4xl font-extrabold leading-10 whitespace-nowrap">
            Built for every stage of workforce movement
          </div>
          <div className="text-slate-600 text-base leading-6">
            From a first hire to a cross-border rotation, each scenario keeps the same payroll controls<br />— just scoped to how that population actually works.
          </div>
        </div>

        {/* Scenario Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s) => (
            <div key={s.title} className="w-full bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(8,47,73,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-100 flex flex-col overflow-hidden">
              <div className="w-full min-h-36 bg-gradient-to-br from-sky-950 via-sky-950 to-slate-900 relative overflow-hidden">
                <Image src={s.image} alt={s.title} width={1180} height={144} className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-5 flex flex-col gap-2">
                <div className="text-sky-950 text-base font-bold leading-5">{s.title}</div>
                <div className="pb-2.5 text-gray-400 text-xs leading-5">{s.desc}</div>
                <div className="w-36 h-7 bg-slate-50 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-slate-100 flex items-center gap-2 px-3">
                  <div className={`w-2 h-2 rounded-full ${s.tagDot}`} />
                  <span className="text-sky-950 text-xs font-bold leading-4 whitespace-nowrap">{s.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
