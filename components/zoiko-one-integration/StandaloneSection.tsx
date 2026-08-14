import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

const options = [
  {
    title: "Standalone Zoiko Payroll",
    subtitle: "On its own, fully supported",
    highlighted: false,
    points: [
      "Independent subscription, no Zoiko One required",
      "Payroll-specific onboarding, documentation and support",
      "Full approval, validation and audit controls, unaffected",
    ],
  },
  {
    title: "Through Zoiko One",
    subtitle: "Payroll, connected — where you enable it",
    highlighted: true,
    points: [
      "Approved data and workflows only where explicitly enabled",
      "Separately governed permissions, not inherited automatically",
      "Broader administration and reporting, where verified",
    ],
  },
];

export default function StandaloneSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Standalone vs connected</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            A commercial choice, not a technical requirement
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Zoiko Payroll is a complete, independent product. Connecting it to Zoiko One adds shared
            context where you choose to enable it — it never changes what payroll can do on its own.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {options.map((option, index) => (
            <Reveal key={option.title} delay={index * 100}>
              <div
                className={`h-full rounded-2xl border bg-white p-6 ${
                  option.highlighted ? "border-sky-600" : "border-slate-200"
                }`}
              >
                <h3 className="text-base font-extrabold leading-6 text-sky-950">{option.title}</h3>
                <p className="text-xs leading-5 text-slate-600">{option.subtitle}</p>
                <ul className="mt-3 space-y-2.5">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs leading-5 text-sky-950">
                      <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-green-700" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-5 rounded-[10px] border border-blue-200 bg-sky-100 px-4 py-3 text-xs font-semibold leading-5 text-sky-700">
            Zoiko Payroll remains commercially independent. Suite bundling is never a requirement to get
            full value from payroll.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
