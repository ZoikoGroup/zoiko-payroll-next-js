import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const steps = [
  {
    title: "1. Scope confirmed",
    detail: "Current report + active filters + authorized fields.",
  },
  {
    title: "2. Fields reviewed",
    detail: "Sensitive exports require row-count and field confirmation.",
  },
  {
    title: "3. Confirm",
    detail: "Explicit action required — no silent auto-export.",
  },
  {
    title: "4. Generating",
    detail: "Progress shown; nothing implies completion early.",
  },
  {
    title: "5. Success or failure",
    detail: "Attributable export event recorded either way.",
  },
];

export default function ExportsSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Exports &amp; distribution controls</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900">
              An export is the current report, active filters, authorized scope — nothing more
            </h2>
            <p className="mt-3.5 max-w-lg text-base leading-6 text-gray-700">
              A partial or failed export never displays as success.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/reporting/exports.png"
              alt="Payroll admin exporting a report from the Zoiko Payroll dashboard"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-80"
            />
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 60}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-bold leading-5 text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
