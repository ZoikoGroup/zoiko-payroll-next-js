import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  { step: "01", title: "Source", detail: "File or system connection identified." },
  { step: "02", title: "Mapping", detail: "Fields matched to change objects." },
  { step: "03", title: "Validation", detail: "Required fields and conflicts checked." },
  { step: "04", title: "Duplicate check", detail: "Stable source IDs compared against existing records." },
  { step: "05", title: "Dry run", detail: "Preview of inserts, updates and exceptions." },
  { step: "06", title: "Result", detail: "Record-level success, failure and duplicate outcomes." },
];

export default function ImportsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Imports &amp; integrations</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Imported data is validated,
            <br />
            never trusted by default.
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-6 text-slate-600">
            Every import runs the same pipeline before any record becomes eligible for payroll.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step) => (
              <div key={step.step} className="bg-white px-4 py-5 text-center">
                <p className="font-mono text-xs leading-4 text-sky-700">{step.step}</p>
                <h3 className="mt-1.5 text-sm font-bold leading-5 text-sky-950">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-4 text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
