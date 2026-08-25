import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";
import { SearchIcon, PrinterIcon, LinkIcon, CheckCircleIcon } from "../ui/icons";

const steps = [
  "Confirm all payroll inputs are complete for the current period.",
  "Run calculation and review flagged exceptions.",
  "Route the cycle for approval per your configured workflow.",
];

export default function ArticleShellSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Canonical article shell</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Every article reads like an enterprise manual — never a blog post
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
            <p className="text-xs text-slate-400">Home / Payroll Processing / Task</p>
            <div className="flex items-center gap-3 text-slate-400">
              <SearchIcon className="h-4 w-4" />
              <PrinterIcon className="h-4 w-4" />
              <LinkIcon className="h-4 w-4" />
              <span className="text-xs">Feedback</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-50 px-6 py-2 text-xs font-medium text-emerald-700">
            <CheckCircleIcon className="h-3.5 w-3.5" />
            Current — Published
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-brand-dark">Run a Payroll Cycle</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Prepare, calculate, validate and route a payroll cycle for approval.
            </p>

            <p className="mt-4 rounded-lg bg-brand/5 px-4 py-2.5 text-xs text-slate-600">
              <span className="font-semibold text-brand-dark">Role:</span> Payroll Administrator ·{" "}
              <span className="font-semibold text-brand-dark">Product</span> v14.2 ·{" "}
              <span className="font-semibold text-brand-dark">Owner:</span> Docs — Payroll Platform ·{" "}
              <span className="font-semibold text-brand-dark">Verified</span> Aug 12, 2026
            </p>

            <ul className="mt-5 space-y-3">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark" />
                  {step}
                </li>
              ))}
            </ul>

            <p className="mt-5 rounded-lg border-l-4 border-brand bg-brand/5 py-3 pl-4 pr-3 text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-brand-dark">Verify:</span> Confirm cycle status changes
              to &ldquo;Pending Approval.&rdquo; <span className="font-semibold text-brand-dark">Recover:</span>{" "}
              If calculation fails, see Resolving Calculation Errors.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
