import Reveal from "../ui/Reveal";
import StageHeader from "./StageHeader";

const stages = [
  {
    number: "01",
    title: "Identify",
    detail: "A requirement change or trigger surfaces a needed review.",
  },
  { number: "02", title: "Scope", detail: "Jurisdiction, entity and requirement version are set." },
  {
    number: "03",
    title: "Gather Evidence",
    detail: "Documentation is collected and versioned into the packet.",
  },
  {
    number: "04",
    title: "Review",
    detail: "A reviewer assesses completeness and context.",
  },
  {
    number: "05",
    title: "Decide",
    detail: "A decision outcome is selected with rationale.",
  },
  {
    number: "06",
    title: "Approve & Record",
    detail: "High-risk outcomes require independent approval.",
  },
  {
    number: "07",
    title: "Monitor & Re-review",
    detail: "Freshness and change triggers schedule the next review.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <StageHeader
            stage="02"
            label="Compliance workflow lifecycle"
            heading="Seven governed stages, from trigger to re-review"
            center
          >
            Every stage separates what the system does from what a human must decide, and names the
            evidence it produces.
          </StageHeader>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {/* gap-px over a slate ground draws the dividers at any column count. */}
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {stages.map((stage) => (
              <li key={stage.number} className="bg-white px-4 py-5">
                <p className="font-mono text-xs font-medium text-blue-600">{stage.number}</p>
                <h3 className="mt-2 text-sm font-bold text-gray-900">{stage.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">{stage.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
