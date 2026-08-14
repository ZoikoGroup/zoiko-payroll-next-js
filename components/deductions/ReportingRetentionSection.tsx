import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const signals = [
  { label: "Needs review", value: "6" },
  { label: "Approval aging", value: "2.1 days" },
  { label: "Import health", value: "96%" },
  { label: "Correction trend", value: "↓ 12%" },
];

export default function ReportingRetentionSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Operational reporting &amp; retention</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-9 text-sky-950">
            Signals for process quality, never
            <br />
            for ranking people.
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => (
            <Reveal key={signal.label} delay={index * 60}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pt-3.5 pb-4">
                <p className="font-mono text-xs uppercase leading-4 tracking-tight text-slate-600">
                  {signal.label}
                </p>
                <p className="mt-1.5 text-xl font-bold leading-8 text-sky-950">{signal.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-xs leading-5 text-slate-600">
            Retention periods come from current service documentation and contracts, not a universal
            marketing claim.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
