import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const guideOutline = [
  "Governance and ownership",
  "Technology and data readiness",
  "Controls and approvals",
  "Multi-jurisdiction scope",
];

export default function CustomerEvidenceSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Customer evidence</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Built for measurable payroll improvement.
          </h2>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#DCE6EC] shadow-sm lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/home/resource-guide.png"
              alt="Resource guide preview"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark shadow-sm">
              Resource guide
            </span>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-lg font-semibold text-brand-dark">The Global Payroll Transformation Guide</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              A practical framework for assessing payroll governance, technology, data, controls,
              implementation and multi-jurisdiction readiness.
            </p>
            <ol className="mt-5 space-y-2.5">
              {guideOutline.map((item, index) => (
                <li key={item} className="flex items-baseline gap-2 text-sm text-slate-600">
                  <span className="font-semibold text-brand">{String(index + 1).padStart(2, "0")} —</span>
                  {item}
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="mt-6 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              Download the guide
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
