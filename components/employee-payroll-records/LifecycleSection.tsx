import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const lifecycle = [
  { number: "01", title: "Payroll outcome", description: "Approved payroll cycle completes." },
  {
    number: "02",
    title: "Record generation",
    description: "Applicable record is generated from the outcome.",
  },
  { number: "03", title: "Validation", description: "Record content is checked before publication." },
  { number: "04", title: "Publication", description: "Record becomes available in self-service." },
  {
    number: "05",
    title: "Employee access",
    description: "Authorized employee views the current record.",
  },
  {
    number: "06",
    title: "Correction / reissue",
    description: "A governed change creates a new version if needed.",
  },
  { number: "07", title: "History", description: "Prior versions remain visible and traceable." },
];

export default function LifecycleSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Payroll record lifecycle</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Every record follows the same governed path before an employee sees it.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-slate-600">
            A record is generated, validated and published before it reaches self-service — and every
            correction creates a new, traceable version.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <ol className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-300 bg-white sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {lifecycle.map((step, index) => (
              <li
                key={step.number}
                className={`px-3.5 py-4 ${
                  index < lifecycle.length - 1 ? "border-b border-slate-200 xl:border-b-0 xl:border-r" : ""
                }`}
              >
                <p className="text-xs leading-4 text-sky-700">{step.number}</p>
                <h3 className="mt-1 text-xs font-bold leading-5 text-sky-950">{step.title}</h3>
                <p className="mt-1 text-xs leading-4 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
