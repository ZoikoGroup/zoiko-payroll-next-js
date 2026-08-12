import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  {
    actor: "System",
    title: "Ready for Approval",
    description: "Readiness conditions checked automatically.",
  },
  { actor: "System", title: "Request / Route", description: "Work routed to the correct decision owner." },
  { actor: "Human", title: "Inspect", description: "Approver reviews scope, version and changes." },
  { actor: "Human", title: "Decide", description: "Approve, return, or request more context." },
  {
    actor: "System",
    title: "Bind / Validate",
    description: "Decision bound to the exact version reviewed.",
  },
  {
    actor: "System",
    title: "Completion Gate",
    description: "Checked against every required approval.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F5F8FA] pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Approval lifecycle</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-9 text-sky-950">
            System responsibility and human responsibility, shown separately
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            The system establishes readiness, routes work and checks current state. Authorized people
            inspect evidence and decide. Evidence is produced at every meaningful stage.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ol className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-300 bg-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stages.map((stage, index) => (
              <li
                key={stage.title}
                className={`px-4 pt-6 pb-4 ${
                  index < stages.length - 1
                    ? "border-b border-slate-300 xl:border-b-0 xl:border-r"
                    : ""
                }`}
              >
                <span
                  className={`inline-block rounded-full px-2 py-0.5 font-mono text-[10px] uppercase leading-4 tracking-wide ${
                    stage.actor === "System" ? "bg-sky-100 text-sky-700" : "bg-green-100 text-green-700"
                  }`}
                >
                  {stage.actor}
                </span>
                <h3 className="mt-5 text-xs font-bold leading-5 text-sky-950">{stage.title}</h3>
                <p className="mt-1 text-xs leading-4 text-slate-600">{stage.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
