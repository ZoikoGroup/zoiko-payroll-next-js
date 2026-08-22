import Reveal from "../ui/Reveal";

const points = [
  {
    title: "Materiality, not volume",
    description: "Only issues that meet a named, approved rule surface here.",
  },
  {
    title: "Evidence freshness",
    description:
      "Every summary states its as-of time — stale data is flagged, not hidden.",
  },
];

export default function LeadershipOperatingRealitySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Column (Image) */}
          <Reveal className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]">
              <img
                src="/images/business-leaders/leadership-operating-reality.png"
                alt="Close-up of a live payroll dashboard on screen"
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center gap-2.5 rounded-[10px] bg-white px-3.5 py-2.5 shadow-[0px_12px_30px_-10px_rgba(8,19,43,0.3)]">
                <div className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#2F6FED] text-[12px] text-white">
                  ✓
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#08132B]">Zoiko Payroll</p>
                  <p className="text-[12px] text-[#6B7488]">Evidence-linked, always</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column (Text) */}
          <Reveal delay={120} className="w-full">
            <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              Leadership Operating Reality
            </p>
            <h2 className="text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-[#08132B] lg:text-[26.4px]">
              One late approval can matter more than a hundred routine
              exceptions
            </h2>
            <p className="mt-3.5 text-[14px] leading-[1.6] text-[#3A4356]">
              Global roll-ups can hide local blockers, and dashboards can go
              stale without anyone noticing. Zoiko Payroll is built against
              both — every status is scoped, owned and dated.
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
