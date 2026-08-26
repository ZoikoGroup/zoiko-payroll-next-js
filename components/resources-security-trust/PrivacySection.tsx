import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const questions = [
  { question: "What payroll data is processed?", owner: "Current product/privacy documentation" },
  { question: "How long is data retained?", owner: "Privacy / data-lifecycle authority" },
  { question: "Where is data stored/processed?", owner: "Data Residency authority" },
  { question: "Which subprocessors are used?", owner: "Current Subprocessors registry" },
  { question: "Are cross-border transfers used?", owner: "Privacy / Legal-approved statement" },
];

export default function PrivacySection() {
  return (
    <section id="privacy-ownership" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <img
            src="/images/resources-security-trust/privacy.png"
            alt="A professional reviewing privacy and data-handling documentation"
            loading="lazy"
            className="h-64 w-full rounded-2xl object-cover shadow-lg sm:h-80 lg:h-[340px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>Privacy, data handling &amp; cross-border</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Every privacy question has one owner.
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            This topic page routes; it never makes the legal or statutory conclusion itself.
          </p>

          <dl className="mt-6">
            {questions.map((item) => (
              <div
                key={item.question}
                className="flex flex-col gap-1 border-b border-slate-200 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="text-sm font-bold leading-5 text-brand-dark">{item.question}</dt>
                <dd className="text-xs leading-5 text-slate-600 sm:text-right">{item.owner}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
