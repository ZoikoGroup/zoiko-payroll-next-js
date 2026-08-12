import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const options = [
  {
    kicker: "Standalone",
    title: "Zoiko Payroll on its own",
    summary: "A fully credible, independent subscription — no Zoiko One requirement.",
    points: [
      "Independent onboarding and support",
      "Full integration category access",
      "No shared-data dependency",
    ],
    highlighted: true,
  },
  {
    kicker: "Through Zoiko One",
    title: "Payroll, connected",
    summary: "Optional interoperability, enabled and contracted — never assumed.",
    points: [
      "Shared identity where implemented",
      "Cross-product workflows where documented",
      'No "all data automatically syncs" claim',
    ],
    highlighted: false,
  },
];

export default function ZoikoOneSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Zoiko One interoperability</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Standalone by default. Connected where you choose it.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {options.map((option, index) => (
            <Reveal key={option.kicker} delay={index * 90}>
              <div
                className={`h-full rounded-xl bg-white p-8 ${
                  option.highlighted ? "border-2 border-blue-600" : "border border-slate-200"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {option.kicker}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-slate-900">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{option.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {option.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-slate-700">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
