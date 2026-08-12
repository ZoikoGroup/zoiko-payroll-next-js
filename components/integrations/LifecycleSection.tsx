import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  { number: "01", title: "Select", description: "Choose a verified connector or interface for the required category." },
  { number: "02", title: "Authorize", description: "Establish authentication and scoped permissions." },
  { number: "03", title: "Configure", description: "Set environment, endpoints and connection parameters." },
  { number: "04", title: "Map", description: "Define field-level mapping and transformation rules." },
  { number: "05", title: "Validate", description: "Check schema and reference data before any test run." },
  { number: "06", title: "Test", description: "Run a controlled test against non-production data." },
  { number: "07", title: "Approve", description: "Required reviewer sign-off before activation." },
];

export default function LifecycleSection() {
  return (
    <section className="bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Connection lifecycle</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            A deliberate path from setup to production trust.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            A valid credential does not equal a successful integration — each connection moves through
            explicit, separated stages.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {stages.map((stage, index) => (
            <Reveal key={stage.number} delay={index * 50}>
              <p className="text-xs font-bold text-blue-600">{stage.number}</p>
              <div className="mt-2 h-full rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-bold text-slate-900">{stage.title}</h3>
                <p className="mt-2 text-xs leading-4 text-slate-500">{stage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
