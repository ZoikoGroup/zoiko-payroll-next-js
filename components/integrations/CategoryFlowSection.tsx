import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

type FlowStep = { label: string; active?: boolean };

type CategoryFlowProps = {
  /** Omitted when the design shows the card on its own, with no section header. */
  eyebrow?: string;
  heading?: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
  flow: FlowStep[];
  connectors: string[];
  /** Which side the narrative column sits on at desktop widths. */
  reversed?: boolean;
  /** Alternating page tint: even-numbered sections use #F6F8FC. */
  tinted?: boolean;
};

function FlowDiagram({ flow, connectors }: { flow: FlowStep[]; connectors: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      {flow.map((step, index) => (
        <div key={step.label}>
          <p
            className={`rounded-lg px-4 py-3 text-center text-sm font-bold ${
              step.active
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-slate-50 text-slate-900"
            }`}
          >
            {step.label}
          </p>
          {index < connectors.length && (
            <p className="py-1.5 text-center text-[11px] text-slate-500">↓ {connectors[index]}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CategoryFlowSection({
  eyebrow,
  heading,
  badge,
  title,
  description,
  points,
  flow,
  connectors,
  reversed = false,
  tinted = false,
}: CategoryFlowProps) {
  return (
    <section className={`border-b border-slate-200 py-20 ${tinted ? "bg-[#F6F8FC]" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && heading && (
          <Reveal className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">{heading}</h2>
          </Reveal>
        )}

        <Reveal delay={80} className={eyebrow && heading ? "mt-12" : ""}>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 lg:grid-cols-2">
            <div className={`bg-white p-8 ${reversed ? "lg:order-2" : ""}`}>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {badge}
              </span>
              <h3 className="mt-4 text-xl font-extrabold leading-7 text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <ul className="mt-5 space-y-2.5">
                {points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-slate-700">
                    <span className="text-blue-600" aria-hidden="true">
                      →
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`bg-slate-50 p-8 ${reversed ? "lg:order-1" : ""}`}>
              <FlowDiagram flow={flow} connectors={connectors} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
