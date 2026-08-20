import Reveal from "../ui/Reveal";

const signals = [
  {
    title: "Large payroll-group estate",
    consequence: "Different calendars, cutoffs and deadlines per group.",
    response: "Group-specific readiness tracking with per-group cutoffs.",
  },
  {
    title: "Multi-entity, multi-region structure",
    consequence: "Records must stay separable by entity and region.",
    response: "Scoped permissions and entity-bound reporting context.",
  },
  {
    title: "Global, regional and specialist teams",
    consequence: "Preparation, review and approval sit with different people.",
    response: "Role-based preparation, review and approval separation.",
  },
  {
    title: "High-volume changes and exceptions",
    consequence: "Late and backdated items arrive after review starts.",
    response: "Attention queue with owner, due date and next action.",
  },
  {
    title: "Complex integration and provider estate",
    consequence: "Silent mapping drift and partial batch failures.",
    response: "Controlled mappings, health, failure and reconciliation.",
  },
  {
    title: "Continuous assurance and procurement obligations",
    consequence: "Evidence is requested repeatedly, on short notice.",
    response: "Recorded material actions with versioned evidence links.",
  },
];

export default function ComplexitySignalsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal className="w-full max-w-[500px]">
            <p className="text-[10px] font-bold tracking-[0.1em] text-[#008AE6] uppercase mb-4">
              02 — Complexity Signals
            </p>
            <h2 className="text-[2.25rem] font-bold leading-[1.15] tracking-tight text-[#0B152D] sm:text-4xl lg:text-[40px]">
              {"Enterprise is an operating-"}<br className="hidden lg:block" />
              {"model problem, not a"}<br className="hidden lg:block" />
              {"headcount badge"}
            </h2>
            <p className="mt-5 text-[14px] leading-[1.65] text-slate-500">
              {"There is no universal workforce threshold. Recognize your estate"}<br className="hidden lg:block" />
              {"in the operating signals below—each one maps to a control in the"}<br className="hidden lg:block" />
              {"product."}
            </p>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-xl lg:max-w-none lg:pl-10">
            <img
              src="/images/enterprise-organizations/complexity-signals.png"
              alt="Complexity Signals Dashboard Presentation"
              loading="lazy"
              className="w-full h-auto drop-shadow-md rounded-[12px] object-cover"
            />
          </Reveal>
        </div>

        {/* Bottom Section (Cards) */}
        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {signals.map((signal, index) => (
              <div 
                key={index}
                className="flex flex-col rounded-[12px] border border-slate-100 bg-[#FAFAFA] p-6 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-[14px] font-bold text-[#0B152D] mb-5">
                  {signal.title}
                </h3>
                
                <div className="mb-4">
                  <span className="block text-[11px] font-bold text-[#D93025] mb-1">
                    Consequence
                  </span>
                  <p className="text-[12px] leading-[1.6] text-[#64748B]">
                    {signal.consequence}
                  </p>
                </div>
                
                <div className="border-t border-dashed border-slate-200 my-2 w-full"></div>
                
                <div className="mt-2">
                  <span className="block text-[11px] font-bold text-[#188038] mb-1">
                    Response
                  </span>
                  <p className="text-[12px] leading-[1.6] text-[#64748B]">
                    {signal.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
