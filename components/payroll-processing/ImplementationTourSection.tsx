import Reveal from "../ui/Reveal";
import MediaSplit from "./MediaSplit";

const steps = [
  { number: "01", title: "Create run" },
  { number: "02", title: "Inputs" },
  { number: "03", title: "Calculate" },
  { number: "04", title: "Validate" },
  { number: "05", title: "Exceptions" },
  { number: "06", title: "Review" },
  { number: "07", title: "Approval" },
  { number: "08", title: "Completion" },
];

export default function ImplementationTourSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaSplit
          eyebrow={"Implementation & product tour"}
          title="Move to controlled payroll processing in a defined sequence."
          media={{
            src: "/images/payroll-processing/implementation.png",
            alt: "Team in a payroll onboarding and training session",
            label: "Tour steps",
            value: "8",
          }}
        />

        <Reveal delay={80} className="mt-11">
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center"
              >
                <span className="font-mono text-xs font-bold leading-4 text-blue-600">
                  {step.number}
                </span>
                <p className="mt-2 text-sm font-bold leading-5 text-slate-900">{step.title}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
