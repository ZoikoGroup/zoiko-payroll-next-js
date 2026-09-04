import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const gateSteps = [
  "Scope Approved",
  "Design",
  "Migration",
  "Validation",
  "Parallel Run",
  "Security / Privacy",
  "Operational Readiness",
  "Launch",
];

const decisions = [
  {
    title: "GO",
    description: "Approved scope may activate.",
    style: "bg-gray-200 text-gray-600 outline-neutral-300",
  },
  {
    title: "HOLD",
    description: "Affected scope waits for specified conditions.",
    style: "bg-orange-100 text-yellow-700 outline-orange-200",
  },
  {
    title: "PARTIAL GO",
    description: "Only the explicitly approved subset proceeds.",
    style: "bg-sky-100 text-sky-800 outline-blue-200",
  },
  {
    title: "ROLLBACK",
    description: "Return to the approved prior or fallback state.",
    style: "bg-rose-200 text-pink-800 outline-rose-300",
  },
  {
    title: "CANCEL / DEFER",
    description: "Accountable authority stops or reschedules.",
    style: "bg-gray-200 text-zinc-600 outline-zinc-300",
  },
];

export default function ReadinessGatesSection() {
  return (
    <section className="bg-white px-7 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 h-5">
              <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Readiness gates + go / hold / partial go / rollback
              </span>
            </div>
            <h2 className="pt-3.5 text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
              Launch is a governed decision, not a calendar event
            </h2>
          </div>
        </Reveal>

        {/* Gate steps */}
        <Reveal delay={60} className="mt-4">
          <div className="flex flex-wrap gap-2.5">
            {gateSteps.map((step, i) => (
              <div
                key={step}
                className="relative flex h-10 w-auto items-center rounded-full bg-white px-4 outline outline-1 outline-offset-[-1px] outline-slate-200"
              >
                <span
                  className={`mr-2 inline-block h-2 w-2 shrink-0 rounded-sm ${
                    i === gateSteps.length - 1 ? "bg-sky-600" : "bg-gray-600"
                  }`}
                />
                <span className="text-xs font-semibold text-sky-950">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Decision cards */}
        <Reveal delay={80} className="mt-8">
          <div className="flex gap-3">
            {decisions.map((d) => (
              <div
                key={d.title}
                className={`w-56 rounded-xl p-4 outline outline-1 outline-offset-[-1px] ${d.style}`}
              >
                <span className={`block text-base font-bold leading-6 ${d.style.includes("orange") ? "text-yellow-700" : d.style.includes("rose") ? "text-pink-800" : d.style.includes("sky") ? "text-sky-800" : d.style.includes("zinc") ? "text-zinc-600" : "text-gray-600"}`}>
                  {d.title}
                </span>
                <span className="mt-1 block text-xs leading-4 text-sky-950">
                  {d.description}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Note */}
        <Reveal delay={100} className="mt-4">
          <p className="text-xs leading-5 text-gray-400">
            No date, percentage or checklist can silently trigger production
            activation. Every decision records approver, scope/version,
            conditions and effective window.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
