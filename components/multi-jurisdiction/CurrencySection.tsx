import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const totals = [
  { label: "US-Salaried (local)", value: "$1,842,904 USD" },
  { label: "DE-Standard (local)", value: "€612,110 EUR" },
  { label: "SG-All Staff (local)", value: "S$298,442 SGD" },
  { label: "Reporting basis", value: "USD · ECB rate · Apr 09, 09:00 UTC" },
];

const chain = ["Source", "Payroll", "Finance export", "Provider receipt"];

export default function CurrencySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Currency &amp; reconciliation</Eyebrow>
          <h2 className="mt-2.5 max-w-3xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            No converted global total without a visible basis
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-[#4E6172]">
            Local values stay in local payroll currency. Consolidated views only appear with a
            stated reporting currency, rate source, rate date and method.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="rounded-2xl border border-[#DCE6EC] bg-white px-5 py-2">
            {totals.map((total, index) => (
              <div
                key={total.label}
                className={`flex flex-wrap items-center justify-between gap-3 py-3.5 ${
                  index < totals.length - 1 ? "border-b border-[#DCE6EC]" : ""
                }`}
              >
                <span className="text-sm leading-5 text-[#082F49]">{total.label}</span>
                <span className="font-mono text-sm leading-5 text-[#082F49]">{total.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-5">
          <p className="max-w-2xl rounded-r-lg border-l-[3px] border-[#9C7A1F] bg-[#F1EAD8] px-5 py-4 text-sm leading-5 text-[#6E5720]">
            A combined global total is not shown for SG-All Staff — conversion evidence for this
            cycle is not yet available. Indicative values are never presented as reportable.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <div className="flex flex-wrap items-center gap-3">
            {chain.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-lg border border-[#DCE6EC] bg-white px-4 py-2.5 text-sm font-semibold leading-5 text-[#082F49]">
                  {step}
                </span>
                {index < chain.length - 1 && (
                  <span className="text-slate-400" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
