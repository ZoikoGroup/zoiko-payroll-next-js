import Reveal from "../ui/Reveal";

const points = [
  {
    title: "37 authorized changes",
    description: "This period, group-wide — no individual detail shown.",
  },
  {
    title: "1 overdue approval",
    description: "Segregation of duties configured and current.",
  },
];

export default function HrImpactApprovalGovernanceSection() {
  return (
    <section className="bg-white pt-25 pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Column (Image) */}
          <Reveal className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]">
              <img
                src="/images/business-leaders/hr-impact-approval-governance.png"
                alt="HR and payroll leader reviewing aggregate readiness together"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right Column (Text) */}
          <Reveal delay={120} className="w-full">
            <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              HR Impact &amp; Approval Governance
            </p>
            <h2 className="text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-[#08132B] lg:text-[26.4px]">
              Aggregate only — never a productivity score
            </h2>
            <p className="mt-3.5 text-[14px] leading-[1.6] text-[#3A4356]">
              Authorized change volume, readiness and record status, with no
              person-level detail by default. Segregation of duties stays
              visible alongside it.
            </p>

            <div className="mt-6 flex flex-col gap-5">
              {points.map((point) => (
                <div key={point.title} className="flex items-start gap-3.5">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-[#E8F0FF] text-[13px] font-bold text-[#2F6FED]">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#0D1526]">
                      {point.title}
                    </h3>
                    <p className="mt-0.5 text-[14px] leading-[1.6] text-[#3A4356]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
