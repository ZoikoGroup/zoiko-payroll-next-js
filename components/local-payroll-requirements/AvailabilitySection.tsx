import Reveal from "../ui/Reveal";

const statuses = [
  { label: "Available", style: "bg-gray-200 text-gray-600", description: "Current coverage + approved requirement context. Implementation/demo permitted after status." },
  { label: "Limited", style: "bg-orange-100 text-yellow-700", description: "Limitations shown before detailed requirement content or CTA." },
  { label: "Partner-supported", style: "bg-sky-100 text-sky-800", description: "Service model and owned responsibilities disclosed." },
  { label: "Planned", style: "bg-violet-100 text-slate-500", description: "Future state kept separate from current education; no implementation promise." },
  { label: "Unavailable", style: "bg-rose-200 text-pink-800", description: "Current unavailability shown clearly; no \"start payroll\" CTA." },
  { label: "Needs review", style: "bg-orange-100 text-yellow-700", description: "Status under verification; no service promise." },
  { label: "Not applicable", style: "bg-gray-200 text-neutral-500", description: "Scope relationship explained; no generic availability CTA." },
];

export default function AvailabilitySection() {
  return (
    <section className="bg-indigo-50 px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-start gap-6">
            {/* Left: image */}
            <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_1px_2px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200">
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-50">
                <img
                  src="/ch.png"
                  alt="Availability and compliance workflow overview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="flex-1">
              <span className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Availability + compliance workflow handoff
              </span>
              <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-sky-950">
                Local requirement depth is never<br />
                mistaken for current service<br />
                availability
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="flex flex-wrap gap-3">
            {statuses.map((s) => (
              <div
                key={s.label}
                className="w-[275px] h-[109px] rounded-xl bg-white px-4 pt-3.5 pb-4 outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <span className={`inline-block rounded-full px-2 py-[3px] text-xs font-bold ${s.style}`}>
                    {s.label}
                  </span>
                  <p className="mt-1.5 text-xs leading-4 text-gray-600 line-clamp-3">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-5">
          <div className="rounded-[10px] border-l-[3px] border-r border-t border-b border-sky-600 bg-[#E5EFF9] p-5">
            <span className="text-sm text-sky-950">
              Need to see how local requirements are reviewed and evidenced?{" "}
            </span>
            <span className="text-sm font-bold text-sky-600">
              Explore Compliance Workflows →
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}