import Reveal from "../ui/Reveal";
import ArrowLink from "../ui/ArrowLink";
import Eyebrow from "../home/Eyebrow";
import { CheckCircleIcon } from "../ui/icons";

export default function ActiveIncidentsSection() {
  return (
    <section id="active-incidents" className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Active incidents</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            This section becomes visually dominant the moment impact is real
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Lifecycle and customer impact are always shown as separate fields — never merged into one
            alert.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          <CheckCircleIcon className="h-4 w-4" />
          No active public incidents.
        </Reveal>

        <Reveal delay={160} className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Sample — INC-2026-0341
              </p>
              <h3 className="mt-1 text-base font-semibold text-brand-dark">
                Elevated latency on EU HRIS connectors
              </h3>
            </div>
            <div className="flex shrink-0 gap-2">
              <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                Monitoring
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Degraded performance
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span>
              Affected: <span className="font-semibold text-slate-700">HRIS connectors</span>
            </span>
            <span>
              Scope: <span className="font-semibold text-slate-700">EU region</span>
            </span>
            <span>
              Started: <span className="font-semibold text-slate-700">Aug 24, 08:14 UTC</span>
            </span>
            <span>
              Last update: <span className="font-semibold text-slate-700">Aug 24, 09:20 UTC</span>
            </span>
          </div>

          <p className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Latest approved update: A fix has been applied and we are monitoring connector latency
            before marking this resolved.
          </p>

          <ArrowLink href="/resources/system-status/incidents" className="mt-4">
            View incident
          </ArrowLink>

          <p className="mt-4 text-xs italic text-slate-400">
            Illustrative example only, shown to demonstrate incident-card anatomy — not a current
            event.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
