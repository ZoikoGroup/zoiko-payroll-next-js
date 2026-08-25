import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const steps = [
  { number: "01", title: "Public help", description: "No sign-in needed" },
  { number: "02", title: "Authenticated context", description: "Only if required" },
  { number: "03", title: "Minimal evidence", description: "Issue-specific only" },
  { number: "04", title: "Accountable owner", description: "Named, not a queue" },
  { number: "05", title: "Clear outcome", description: "Factual next step" },
];

export default function SupportProgressionSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Support progression + authentication</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            A simple step diagram — not a complicated funnel.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Sign-in appears only at the point private context is genuinely required. Public
            self-service stays usable without it.
          </p>
        </Reveal>

        <div className="mt-10 rounded-2xl border border-[#DCE6EC] bg-white p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-0">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 50}
                className={`sm:px-6 ${index !== steps.length - 1 ? "sm:border-r sm:border-[#DCE6EC]" : ""} ${
                  index !== 0 ? "sm:pl-6" : ""
                }`}
              >
                <span className="text-xs font-semibold text-brand">{step.number}</span>
                <h3 className="mt-2 text-sm font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
