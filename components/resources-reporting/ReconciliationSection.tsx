import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const steps = [
  {
    title: "Expected source",
    description: "The approved baseline used for comparison.",
  },
  {
    title: "Observed source",
    description: "The actual result being checked, matched on scope and period.",
  },
  {
    title: "Compare",
    description: "A deterministic, evidence-based match — never averaged or estimated.",
  },
  {
    title: "Review and disposition",
    description:
      "Every difference is retained as history, with an authorized reviewer recording the outcome.",
  },
];

const states = ["Matched", "Difference found", "Pending source", "Needs review", "Resolved"];

export default function ReconciliationSection() {
  return (
    <section
      id="reconciliation"
      className="scroll-mt-24 border-t border-slate-200 bg-[#EEF2FF] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Reconciliation guidance</Eyebrow>
            <h2 className="mt-3.5 max-w-[440px] text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              A controlled comparison — never a statutory sign-off.
            </h2>
            <p className="mt-5 max-w-[470px] text-base leading-7 text-slate-600">
              Reconciliation compares an expected source against an observed result for a stated
              scope. Differences are never hidden — they&apos;re retained until an authorized
              disposition is recorded.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]"
          >
            <img
              src="/images/resources-reporting/reconciliation.png"
              alt="Three colleagues reviewing a reconciliation on a laptop"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 lg:h-[380px]"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-[760px]">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 70}
              className={`flex gap-4 py-6 ${
                index < steps.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-base font-bold leading-6 text-brand-dark">{step.title}</p>
                <p className="mt-1 text-sm leading-5 text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={280} className="mt-6 flex flex-wrap justify-center gap-3">
            {states.map((state) => (
              <span
                key={state}
                className="rounded-[20px] border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold leading-5 text-brand-dark"
              >
                {state}
              </span>
            ))}
          </Reveal>

          <Reveal
            delay={340}
            className="mt-8 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5 sm:px-8"
          >
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">Boundary:</span> Reconciliation is not automatically
              general-ledger close, bank reconciliation or statutory sign-off. A payment export does
              not prove funds settled. Task failing?{" "}
              <Link
                href="/resources/help-center"
                className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
              >
                Help Center
              </Link>
              . Suspect a live issue?{" "}
              <Link
                href="/resources/system-status"
                className="font-bold text-brand transition-colors duration-200 hover:text-brand-dark"
              >
                System Status
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
