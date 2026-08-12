import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const proofs = [
  {
    kicker: "Verified listing",
    title: "Connector directory entry",
    description: "Category, direction and support status per connector.",
    reviewed: "reviewed 2026-07-14",
  },
  {
    kicker: "Product screenshot",
    title: "Current build, synthetic data",
    description: "Feature owner and accessibility text equivalent included.",
    reviewed: "reviewed 2026-07-01",
  },
  {
    kicker: "Reliability metric",
    title: "Defined, not aspirational",
    description: "A named metric with a scope and a measurement window.",
    reviewed: "reviewed 2026-06-20",
  },
  {
    kicker: "Security evidence",
    title: "Current documentation",
    description: "Linked to the Trust Center for full detail.",
    reviewed: "reviewed 2026-07-22",
  },
];

export default function EvidenceSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F6F8FC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Evidence &amp; commercial proof</Eyebrow>
          <h2 className="mt-3.5 text-3xl font-extrabold leading-10 text-slate-900">
            Replacing logo-count marketing with reviewable evidence
          </h2>
          <p className="mt-3.5 text-base leading-6 text-gray-700">
            Every proof item carries scope, owner, and a review date — not a logo wall.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map((proof, index) => (
            <Reveal key={proof.kicker} delay={index * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  {proof.kicker}
                </p>
                <h3 className="mt-2 text-sm font-bold text-slate-900">{proof.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{proof.description}</p>
                <p className="mt-4 border-t border-dashed border-slate-200 pt-3 text-xs text-slate-400">
                  {proof.reviewed}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
