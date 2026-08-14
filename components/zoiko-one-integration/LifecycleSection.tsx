import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const stages = [
  { step: "01", title: "Discover", detail: "Candidate connection identified and scoped." },
  { step: "02", title: "Authorize", detail: "Scopes reviewed and approved by an owner." },
  { step: "03", title: "Map", detail: "Fields and direction defined as a versioned contract." },
  { step: "04", title: "Validate", detail: "Test data run through the mapping; evidence captured." },
  { step: "05", title: "Enable", detail: "Go-live decision recorded against validation evidence." },
  { step: "06", title: "Operate", detail: "Health, retries and reconciliation monitored live." },
  { step: "07", title: "Govern", detail: "Recurring review of scope, mapping and access." },
];

export default function LifecycleSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Governed connection lifecycle</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Every connection earns its way to &ldquo;Operate&rdquo;
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Each stage produces its own exit condition and evidence object — nothing moves forward on
            assumption.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {stages.map((stage) => (
              <div key={stage.step} className="bg-white px-3.5 pt-4 pb-8">
                <p className="font-mono text-xs leading-4 text-sky-700">{stage.step}</p>
                <h3 className="mt-3.5 text-xs font-bold leading-5 text-sky-950">{stage.title}</h3>
                <p className="mt-1 text-xs leading-4 text-slate-600">{stage.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
