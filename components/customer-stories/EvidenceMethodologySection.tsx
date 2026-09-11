import Image from "next/image";
import Reveal from "../ui/Reveal";

const methodologyRows = [
  { label: "Definition", value: "What the metric measures" },
  { label: "Value / unit", value: "Exact approved figure" },
  { label: "Direction", value: "Increase / decrease / stable" },
  { label: "Baseline", value: "Where relevant and approved" },
  { label: "Comparison basis", value: "What it's measured against" },
  { label: "Scope / denominator", value: "What population it covers" },
  { label: "Measurement period", value: "Exact approved window" },
  { label: "Source", value: "Customer or Zoiko system" },
  { label: "Caveat", value: "Customer-specific limitation" },
];

export default function EvidenceMethodologySection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col gap-8 px-6 md:px-24">
        {/* Top: image + copy */}
        <div className="flex flex-col items-center justify-center gap-14 lg:flex-row">
          <div className="flex-1">
            <div className="relative h-80 w-full overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
              <Image
                src="/ik.png"
                alt="Payroll analyst documenting metric methodology"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4">
            <div className="flex h-5 w-full items-center gap-1.5">
              <span className="text-xs font-bold text-sky-600">/</span>
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
                Evidence methodology
              </span>
            </div>
            <h2 className="pb-[0.58px] text-3xl font-extrabold leading-10 text-sky-950">
              Never a persuasive number
              <br />without an explanation
            </h2>
            <p className="w-full max-w-[600px] text-base font-normal leading-7 text-gray-600">
              Every quantified outcome carries its full context. A metric without
              <br />
              sufficient context is suppressed, not rounded up or left
              <br />
              ambiguous.
            </p>
          </div>
        </div>

        {/* Methodology table */}
        <div className="mx-auto flex w-full max-w-[720px] flex-col">
          <div className="rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-200">
            {methodologyRows.map((row, index) => (
              <div
                key={row.label}
                className={`flex items-start justify-between gap-6 px-6 py-2.5 ${
                  index < methodologyRows.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <span className="text-xs font-semibold leading-5 text-gray-400">
                  {row.label}
                </span>
                <span className="text-right text-xs font-bold leading-5 text-sky-950">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
