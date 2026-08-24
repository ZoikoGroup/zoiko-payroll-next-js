import Image from "next/image";
import SectionLabel from "./SectionLabel";

const pipeline = [
  "Draft",
  "Review",
  "Approved",
  "Scheduled",
  "Effective",
  "Superseded / Withdrawn",
];

const governanceCards = [
  {
    title: "Evidence record",
    desc: <>Source, owner, version, geography, valid dates,<br/>review state — attached to every claim.</>,
  },
  {
    title: "Change event",
    desc: <>Before/after, effective date, reason, approver and<br/>public note — fully versioned.</>,
  },
  {
    title: "High-risk changes",
    desc: <>Launch, withdrawal, filing/payment scope,<br/>partner-model and residency claims require<br/>independent approval.</>,
  },
];

export default function EvidenceGovernance() {
  return (
    <section className="w-full border-t border-b border-slate-100 bg-white px-8 py-20">
      <div className="mx-auto max-w-[1180px] flex flex-col items-start gap-10">
        <div className="max-w-[970px] flex flex-col items-start gap-2.5">
          <SectionLabel slash>Evidence, Freshness + Governance</SectionLabel>
          <div className="flex flex-col gap-0 pt-3.5">
            <div className="text-3xl font-extrabold leading-10 text-sky-950">
              The Coverage Registry is the source of truth
            </div>
          </div>
          <div className="text-base leading-6 text-slate-600">
            No silent overwrite. A correction creates a history event and preserves the
            previous published state.
          </div>
        </div>

        {/* Evidence Image with Pipeline at bottom */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]">
          <div className="relative h-80 w-full bg-sky-950/30">
            <Image
              src="/11.png"
              alt="Evidence governance"
              fill
              className="object-cover"
            />
          </div>
          {/* Pipeline at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 flex w-full flex-wrap items-center justify-center gap-3 py-3">
          {pipeline.map((step, i) => (
            <div key={step} className="flex items-center">

              <div
                className={`min-w-36 rounded-xl px-6 py-3.5 text-xs font-bold leading-5 flex items-center justify-center ${
                  step === "Approved"
                    ? "w-[140px] h-[49px] bg-gradient-to-r from-[#2E91D1] to-[#0B4E7D] text-white"
                    : "bg-white text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-100"
                }`}
              >
                {step}
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Governance Cards */}
        <div className="flex w-full flex-col gap-5 md:flex-row">
          {governanceCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-1 flex-col gap-2 rounded-2xl border border-slate-100 bg-white px-5 pt-5 pb-[4px] shadow-[0px_8px_24px_0px_rgba(8,47,73,0.06)]"
            >
              <div className="text-base font-bold leading-6 text-sky-950">
                {card.title}
              </div>
              <div className="pb-[0.75px] text-xs leading-5 text-slate-600">
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
