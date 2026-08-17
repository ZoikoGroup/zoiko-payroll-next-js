import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  { step: "01", title: "Assess", description: "Current estate, scope, risks and objectives." },
  { step: "02", title: "Design", description: "Target operating model and solution design." },
  { step: "03", title: "Prepare", description: "Data readiness, access and test planning." },
  { step: "04", title: "Configure", description: "Approved configuration built and reviewed." },
  { step: "05", title: "Migrate", description: "Migration batches, exceptions and reconciliation." },
  { step: "06", title: "Validate", description: "Validation evidence and variance analysis." },
  { step: "07", title: "Parallel Run", description: "Retest and stakeholder sign-off." },
  { step: "08", title: "Launch", description: "Governed cutover decision and monitoring." },
  { step: "09", title: "Optimize", description: "Stabilization and improvement plan." },
];

export default function RoadmapSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/payroll-modernization/roadmap.png"
              alt="Transformation lead walking a team through the modernization roadmap"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Modernization roadmap</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-9 text-slate-900">
              A structured path from assessment to optimization, with every stage validated before
              moving forward
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              Every stage carries its purpose and the evidence gate that closes it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-11">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
            {stages.map((stage) => (
              <div key={stage.step} className="bg-white px-3.5 py-5">
                <p className="font-mono text-xs font-bold leading-4 text-blue-600">{stage.step}</p>
                <h3 className="mt-1 text-xs font-bold leading-5 text-slate-900">{stage.title}</h3>
                <p className="mt-1 text-xs leading-4 text-slate-500">{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
