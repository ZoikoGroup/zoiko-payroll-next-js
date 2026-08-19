import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const lanes = [
  {
    label: "HR",
    items: ["Supply context", "Maintain source"],
    detail: "Authorized employee changes, effective dates, permitted context.",
    emphasis: false,
  },
  {
    label: "Payroll",
    items: ["Review totals", "Validation → Approval"],
    detail: "Calculation, exception resolution, review, approval, completion.",
    emphasis: false,
  },
  {
    label: "Employee record",
    items: ["Published", "Superseded → Current"],
    detail:
      "Employee payroll records are payroll outputs — never a performance or case-management system.",
    emphasis: true,
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="bg-[#0E2A42] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Responsibility model"
            title="Ownership stays separated, always."
            description="HR never edits completed payroll. Payroll never invents an HR decision."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-3">
            {lanes.map((lane, index) => (
              <div
                key={lane.label}
                className={`p-6 ${lane.emphasis ? "bg-white/10" : "bg-white/5"} ${
                  index < lanes.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="text-xs font-bold uppercase leading-4 tracking-wide text-sky-300">
                  {lane.label}
                </p>

                <div className="mt-3.5 flex flex-col gap-2">
                  {lane.items.map((item) => (
                    <p
                      key={item}
                      className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs leading-5 text-white"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <p className="mt-3.5 text-xs leading-5 text-slate-300">{lane.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-t border-white/20 pt-4 text-xs leading-5 text-slate-400">
            Payroll output/document — never a broad HR portal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
