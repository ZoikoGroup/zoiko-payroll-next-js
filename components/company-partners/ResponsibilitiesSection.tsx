import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const safeguards = [
  "Representation requires explicit authority",
  "No automatic data sharing",
  "Support stays contract-dependent",
  "Marks follow rights records",
];

export default function ResponsibilitiesSection() {
  return (
    <section className="bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Responsibilities &amp; customer safeguards</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            What a partner may — and may not — do
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-7 flex flex-wrap justify-center gap-3">
          {safeguards.map((safeguard) => (
            <span
              key={safeguard}
              className="rounded-[20px] bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark shadow-sm"
            >
              {safeguard}
            </span>
          ))}
        </Reveal>

        <Reveal
          delay={160}
          className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5"
        >
          <p className="text-sm leading-6 text-brand-dark">
            Do not infer who calculates, files, pays, reports or signs off payroll from the word
            &ldquo;partner.&rdquo; Zoiko Help Center and Contact remain the safe public customer
            route unless an approved partner-specific path exists.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
