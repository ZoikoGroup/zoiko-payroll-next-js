import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip from "./StatusChip";

const states = [
  {
    title: "Needs context",
    detail: "Missing or conflicting field. HR corrects the permitted source and resubmits.",
  },
  {
    title: "Late change",
    detail: "Shows the previously approved version and the required revalidation path.",
  },
  {
    title: "Mapping error",
    detail: "Source value can't map to the payroll contract. Integration admin corrects config.",
  },
  {
    title: "Partial sync failure",
    detail: "Accepted vs. failed records, retry eligibility and owner shown.",
  },
  {
    title: "Superseded",
    detail: "A newer version exists. Prior record never appears as current.",
  },
];

const counts = [
  { value: "1,240", label: "Records submitted" },
  { value: "1,236", label: "Accepted" },
  { value: "4", label: "Failed" },
  { value: "4", label: "Retry eligible" },
];

export default function ExceptionSection() {
  return (
    <section className="bg-[#0E2A42] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Validation & exception resolution"
            title="Neutral states. Exact next action."
            description="No employee is called non-compliant just because a state needs action."
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {states.map((state) => (
              <div
                key={state.title}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-4"
              >
                <h3 className="text-sm font-bold leading-5 text-white">{state.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-300">{state.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-start justify-between gap-3 px-5 py-4">
              <div>
                <p className="text-sm font-bold leading-5 text-sky-950">
                  Exception detail · SYNC-4471
                </p>
                <p className="mt-0.5 text-xs leading-5 text-gray-600">
                  Partial sync failure — HRIS batch run
                </p>
              </div>
              <StatusChip tone="fail">Partial</StatusChip>
            </div>

            <div className="grid grid-cols-2 border-y border-slate-200 lg:grid-cols-4">
              {counts.map((count, index) => (
                <div
                  key={count.label}
                  className={`px-5 py-4 ${
                    index < counts.length - 1 ? "border-r border-slate-200" : ""
                  } ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}
                >
                  <p className="text-2xl font-bold leading-9 text-sky-950">{count.value}</p>
                  <p className="text-xs leading-4 text-slate-500">{count.label}</p>
                </div>
              ))}
            </div>

            <p className="bg-slate-50 px-5 py-3.5 text-xs leading-5 text-slate-500">
              Mapping version v14.2 · Owner: Integration admin · Reference SYNC-4471 R1
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
