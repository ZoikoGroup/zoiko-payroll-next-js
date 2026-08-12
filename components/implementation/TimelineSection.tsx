import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const segments = [
  { label: "Discover", color: "bg-blue-600" },
  { label: "Configure", color: "bg-blue-500" },
  { label: "Prepare data", color: "bg-blue-400" },
  { label: "Validate", color: "bg-blue-200" },
  { label: "Parallel test", color: "bg-emerald-600" },
  { label: "Launch", color: "bg-emerald-400" },
];

const programs = [
  {
    name: "Single market",
    scope: "1 entity, 1 jurisdiction",
    duration: "6–8 wks",
    /** share of the bar per segment, in the order of `segments` */
    widths: [16, 20, 19, 13, 17, 15],
    barWidth: "80%",
  },
  {
    name: "Multi-entity",
    scope: "3–6 jurisdictions",
    duration: "9–14 wks",
    widths: [12, 25, 19, 14, 20, 10],
    barWidth: "90%",
  },
  {
    name: "Enterprise",
    scope: "7+ jurisdictions",
    duration: "14–22 wks",
    widths: [10, 24, 20, 15, 21, 10],
    barWidth: "100%",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Planning ahead</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            How long it typically takes.
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Program length scales with entities and jurisdictions, not headcount alone — a 200-person
            single-country team and a 200-person five-country team run different timelines.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className={`flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                index > 0 ? "border-t border-slate-200" : ""
              }`}
            >
              <div className="w-full shrink-0 sm:w-40">
                <p className="text-sm font-bold text-slate-900">{program.name}</p>
                <p className="text-xs text-slate-600">{program.scope}</p>
              </div>

              <div className="flex-1">
                <div className="flex h-3.5 overflow-hidden rounded-sm" style={{ width: program.barWidth }}>
                  {segments.map((segment, segmentIndex) => (
                    <span
                      key={segment.label}
                      className={segment.color}
                      style={{ width: `${program.widths[segmentIndex]}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <p className="shrink-0 text-sm font-bold text-slate-900 sm:w-20 sm:text-right">
                {program.duration}
              </p>
            </div>
          ))}

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-4">
            {segments.map((segment) => (
              <span key={segment.label} className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                <span className={`h-2 w-2 shrink-0 rounded-xs ${segment.color}`} aria-hidden="true" />
                {segment.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
