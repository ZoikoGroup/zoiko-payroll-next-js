import Reveal from "../ui/Reveal";

const charts = [
  {
    label: "Close readiness · 6 periods",
    bars: [60, 68, 52, 74, 80, 67],
    highlight: 2,
  },
  {
    label: "Exception aging · 6 periods",
    bars: [45, 40, 55, 70, 38, 32],
    highlight: 3,
  },
  {
    label: "Approval timeliness · 6 periods",
    bars: [70, 74, 78, 80, 58, 76],
    highlight: 4,
  },
];

const briefLines = [
  { label: "Status:", text: "6 of 9 groups ready; 2 need attention; 1 blocked." },
  { label: "Change:", text: 'Germany moved from "Needs attention" to "Blocked."' },
  { label: "Pending decisions:", text: "1 — DE cutoff extension." },
];

export default function TrendsExecutiveBriefSection() {
  return (
    <section className="bg-white py-38 sm:py-38">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Left Column (Text) */}
          <Reveal className="w-full">
            <p className="mb-2.5 text-[13px] font-bold tracking-[0.06em] text-[#2F6FED] uppercase">
              Trends &amp; Executive Brief
            </p>
            <h2 className="text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-[#08132B] lg:text-[26.6px]">
              Restrained context, not a data dump
            </h2>
            <p className="mt-3.5 text-[14px] leading-[1.6] text-[#3A4356]">
              Every chart names its baseline, period and scope. A one-page
              brief follows — not an unfiltered export.
            </p>
          </Reveal>

          {/* Right Column (Image) */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]">
              <img
                src="/images/business-leaders/trends-executive-brief.png"
                alt="Trend data reviewed on screen"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Chart Cards */}
        <Reveal delay={200}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {charts.map((chart) => (
              <div
                key={chart.label}
                className="rounded-[14px] border border-[#E6E9F0] bg-white p-5"
              >
                <p className="text-[12px] text-[#6B7488]">{chart.label}</p>
                <div className="mt-3 flex h-14 items-end justify-center gap-1.5">
                  {chart.bars.map((height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className={`w-full rounded-t-[3px] ${
                        index === chart.highlight ? "bg-[#A6650F]" : "bg-[#3F7DFF]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Executive Brief Card */}
        <Reveal delay={280}>
          <div className="mt-4 w-full rounded-2xl bg-[#082F49] px-7 pt-[27px] pb-7 lg:max-w-[600px]">
            <h3 className="text-[15.1px] font-extrabold tracking-tight text-white">
              Executive Brief — Aug 15, 2026
            </h3>
            <div className="mt-3.5 flex flex-col">
              {briefLines.map((line, index) => (
                <p
                  key={line.label}
                  className={`py-1.5 text-[12.5px] leading-[1.6] text-white/72 ${
                    index < briefLines.length - 1
                      ? "border-b border-dashed border-white/15"
                      : ""
                  }`}
                >
                  <span className="font-bold">{line.label}</span> {line.text}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
