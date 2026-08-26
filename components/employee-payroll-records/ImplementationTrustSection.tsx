import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  {
    number: "01",
    title: "Migration",
    description: "Bring historical records into scope, mapped and validated.",
  },
  {
    number: "02",
    title: "Access setup",
    description: "Configure roles, permissions and entity scope.",
  },
  {
    number: "03",
    title: "Publication readiness",
    description: "Validate record generation before employees see it.",
  },
  {
    number: "04",
    title: "Security & trust review",
    description: "Confirm access controls before go-live.",
  },
];

export default function ImplementationTrustSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-lg">
          <Eyebrow>Implementation &amp; trust</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-9 text-sky-950">
            A controlled path to publication, not a switch flip.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <ol className="grid grid-cols-1 overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`px-4 py-4 ${
                  index < steps.length - 1 ? "border-b border-slate-200 lg:border-b-0 lg:border-r" : ""
                }`}
              >
                <p className="text-xs leading-4 text-sky-700">{step.number}</p>
                <h3 className="mt-2 text-sm font-bold leading-5 text-sky-950">{step.title}</h3>
                <p className="mt-1 text-xs leading-4 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-200 pt-6">
            <span className="inline-flex border-b border-slate-300 pb-0.5 text-sm font-semibold leading-5 text-sky-950">
              Review security &amp; trust →
            </span>
            <Link
              href="/product/implementation"
              className="inline-flex border-b border-slate-300 pb-0.5 text-sm font-semibold leading-5 text-sky-950 transition-colors duration-200 hover:border-sky-700 hover:text-sky-700"
            >
              Review implementation →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
