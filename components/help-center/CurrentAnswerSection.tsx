import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";

const steps = [
  { number: "01", text: "Open the run and select the Validation tab." },
  { number: "02", text: "Review each open item's owner and required action." },
  { number: "03", text: "Resolve or escalate each blocker to its named owner." },
  { number: "04", text: "Re-run validation once all items are resolved." },
];

export default function CurrentAnswerSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Current help answer</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
            Source-grounded only. No verified answer, no invented answer
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="p-6">
            <div className="flex gap-2">
              <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                Help article
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                Current
              </span>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-brand-dark">
              Why is my payroll run stuck in &ldquo;Validate&rdquo;?
            </h3>

            <p className="mt-3 rounded-lg border-l-4 border-brand bg-slate-50 py-3 pl-4 pr-3 text-sm leading-relaxed text-slate-700">
              A run stays in Validate until every blocking issue is resolved and owned. Check the
              exception queue on the run for the specific blocker.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500">
              <span>
                <span className="font-medium text-slate-600">Applies to:</span> Payroll Processing
              </span>
              <span>
                <span className="font-medium text-slate-600">Source:</span> Zoiko Help Team
              </span>
              <span>
                <span className="font-medium text-slate-600">Last reviewed:</span> Jul 2026
              </span>
            </div>

            <ol className="mt-6 space-y-3 border-t border-slate-100 pt-6">
              {steps.map((step) => (
                <li key={step.number} className="flex items-baseline gap-3 text-sm text-slate-600">
                  <span className="font-mono text-xs font-semibold text-brand">{step.number}</span>
                  {step.text}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Expected result:</span> run moves to Review.{" "}
              <span className="font-semibold text-slate-700">Escalate if:</span> a blocker has no clear
              owner after 24 hours.
            </p>
            <ArrowLink href="/resources/help-center/verified-support" className="shrink-0">
              Open verified support
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
