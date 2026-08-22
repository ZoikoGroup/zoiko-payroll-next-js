import Reveal from "../ui/Reveal";

const statuses = [
  { label: "Ready", color: "bg-[#5FE3A5]" },
  { label: "Needs attention", color: "bg-[#F2B866]" },
  { label: "Blocked", color: "bg-[#F28F8F]" },
  { label: "Stale", color: "bg-[#C3B3F9]" },
];

export default function StatusCloseReadinessSection() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            {/* Left Column (Text) */}
            <div className="flex flex-col justify-center bg-[#082F49] px-6 py-12 sm:px-11 sm:py-14">
              <p className="text-[13px] font-bold tracking-[0.06em] text-[#8FB4FF] uppercase">
                Status &amp; Close Readiness
              </p>
              <h2 className="mt-3 text-[1.5rem] leading-[1.2] font-extrabold tracking-tight text-white lg:text-[23.4px]">
                Five explicit statuses. No hidden priority score
              </h2>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-white/68">
                Prepare → Calculate → Validate → Review → Approve → Complete —
                summarized for leadership, never overriding the operator&apos;s
                underlying state.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {statuses.map((status) => (
                  <span
                    key={status.label}
                    className="inline-flex items-center gap-[7px] rounded-full border border-white/20 bg-white/8 px-3.5 py-1.5 text-[12px] font-semibold text-white"
                  >
                    <span className={`size-[7px] shrink-0 rounded-full ${status.color}`} />
                    {status.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="relative h-[220px] w-full sm:h-[280px] lg:h-auto">
              <img
                src="/images/business-leaders/status-close-readiness.png"
                alt="Reviewing payroll close readiness on a laptop"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
