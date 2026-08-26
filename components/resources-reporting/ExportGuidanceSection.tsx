import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const columns = [
  {
    label: "View report",
    symbol: "👁",
    surface: "bg-sky-100",
    heading: "text-sky-800",
    points: [
      "Stays inside the governed product boundary",
      "Permissions and scope filters stay active",
      "No data leaves the controlled environment",
    ],
  },
  {
    label: "Export data",
    symbol: "⬇",
    surface: "bg-orange-100",
    heading: "text-yellow-700",
    points: [
      "Data leaves the governed product boundary",
      "Handling risk changes — classification matters",
      "Only export what you're already authorized to view",
    ],
  },
];

export default function ExportGuidanceSection() {
  return (
    <section id="export-guidance" className="scroll-mt-24 bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Export &amp; distribution guidance</Eyebrow>
          <h2 className="mt-3.5 max-w-[700px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            &quot;View report&quot; and &quot;export data&quot; are not the same action.
          </h2>
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-[860px] grid-cols-1 gap-6 md:grid-cols-2">
          {columns.map((column, index) => (
            <Reveal
              key={column.label}
              delay={index * 110}
              className={`rounded-2xl px-7 py-7 ${column.surface}`}
            >
              <p className={`text-lg font-extrabold leading-8 ${column.heading}`}>
                <span aria-hidden="true">{column.symbol}</span> {column.label}
              </p>
              <ul className="mt-3 space-y-2">
                {column.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-6 text-brand-dark">
                    <span aria-hidden="true" className="opacity-60">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
