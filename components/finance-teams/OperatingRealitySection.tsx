import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";


const frictions = [
  "Approved totals arrive late or ambiguously.",
  "Period movement lacks explanation.",
  "Downstream handoff to finance/ERP is opaque.",
  "Cross-entity comparison becomes inconsistent.",
  "Audit evidence is assembled manually, after the fact.",
  "Finance receives unnecessary employee-level detail it doesn't need and shouldn't hold.",
];

/**
 * Floating markers over the image — a white card with a coloured dot, never a
 * filled pill. Placed per corner so they never collide.
 */
const markers: { label: string; dot: string; position: string }[] = [
  { label: "Approved", dot: "bg-green-700", position: "left-5 top-5" },
  { label: "Variance Explained", dot: "bg-yellow-700", position: "right-5 top-1/3" },
  { label: "Reconciliation Pending", dot: "bg-yellow-700", position: "bottom-16 left-5" },
  { label: "Evidence Available", dot: "bg-sky-700", position: "right-5 bottom-5" },
];

export default function OperatingRealitySection() {
  return (
    <section className="bg-[#F4F8FB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[20px] shadow-[0_12px_32px_-14px_rgba(10,48,80,0.16)]">
              <img
                src="/images/finance-teams/operating-reality.png"
                alt="A finance lead presenting close figures to the team"
                className="aspect-[497/440] w-full object-cover"
              />
              {markers.map((marker) => (
                <span
                  key={marker.label}
                  className={`absolute ${marker.position} inline-flex items-center gap-2 rounded-[10px] bg-white/95 px-3.5 py-2 text-xs font-bold leading-4 text-sky-950 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.3)] backdrop-blur-[3px]`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${marker.dot}`}
                    aria-hidden="true"
                  />
                  {marker.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              wrap
              eyebrow="Finance operating reality"
              title="Finance ends up rebuilding what payroll already knows"
              description="The same friction shows up in every close cycle, regardless of team size."
            />

            <ul className="mt-6 flex flex-col gap-3">
              {frictions.map((friction) => (
                <li key={friction} className="flex items-start gap-3">
                  <span className="text-sm font-bold leading-5 text-sky-600" aria-hidden="true">
                    —
                  </span>
                  <span className="text-sm leading-5 text-gray-700">{friction}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
