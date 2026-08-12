import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const gaps = [
  {
    problem: "Repeated manual entry",
    detail: "The same worker or payment data re-keyed across systems.",
    resolution: "Explicit ownership & direction",
  },
  {
    problem: "Unreviewed field mapping",
    detail: "Fields silently change meaning between systems.",
    resolution: "Versioned mappings",
  },
  {
    problem: "Hidden partial failure",
    detail: 'A batch looks "done" while records failed inside it.',
    resolution: "Record-level failure visibility",
  },
  {
    problem: "Missing reconciliation",
    detail: "No way to confirm sent data was accepted downstream.",
    resolution: "Reconciliation evidence",
  },
];

export default function FitGapSection() {
  return (
    <section className="border-t border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Integration fit gap</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            The problems controlled integration is built to remove.
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Recognizable operational failure points — and the specific control that closes each one
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gaps.map((gap, index) => (
            <Reveal key={gap.problem} delay={index * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-5 py-5">
                <p className="flex items-center gap-1.5 text-sm font-semibold leading-5 text-[#B23A34]">
                  <span aria-hidden="true">—</span>
                  {gap.problem}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{gap.detail}</p>
                <p className="mt-2 text-xs leading-4 text-slate-500">↓ resolved by</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold leading-5 text-[#16A34A]">
                  <span aria-hidden="true">✓</span>
                  {gap.resolution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
