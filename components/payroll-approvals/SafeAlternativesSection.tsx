import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const alternatives = [
  {
    title: "Return for Changes",
    description:
      "Reason, affected area, destination owner and a clear resubmission path — the run goes back to where it needs to go, not into limbo.",
  },
  {
    title: "Request Context",
    description:
      "A question routed to a responsible owner, with a due point and response history — re-validated against the current version before the decision resumes.",
  },
];

const gateChecks = [
  { label: "All current-version approvals valid", status: "Met", statusClass: "bg-green-100 text-green-700", ok: true },
  {
    label: "Configured prerequisite: GL reconciliation",
    status: "Pending",
    statusClass: "bg-amber-100 text-yellow-700",
    ok: false,
  },
];

export default function SafeAlternativesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Safe alternatives &amp; completion</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            Approval is a decision — completion is a separate, later gate
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Return for Changes and Request Context give approvers a way forward that isn&rsquo;t a
            binary approve/reject. Completion never happens automatically because an approval exists.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {alternatives.map((alternative, index) => (
            <Reveal key={alternative.title} delay={index * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-bold text-sky-950">{alternative.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{alternative.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/payroll-approvals/completion.png"
                alt="Team confirming completion of a payroll cycle"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <p className="absolute bottom-5 left-5 rounded bg-sky-950/85 px-3 py-1.5 font-mono text-xs text-white">
                Completion checked, not assumed
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-mono text-xs uppercase leading-4 tracking-wide text-slate-600">
                Completion gate
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
                {gateChecks.map((check, index) => (
                  <div
                    key={check.label}
                    className={`flex items-center justify-between gap-3 px-4 py-3.5 ${
                      index > 0 ? "border-t border-slate-200" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          check.ok ? "bg-green-100 text-green-700" : "bg-amber-100 text-yellow-700"
                        }`}
                        aria-hidden="true"
                      >
                        {check.ok ? "✓" : "!"}
                      </span>
                      <span className="text-sm text-sky-950">{check.label}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded px-2 py-1 font-mono text-xs font-medium ${check.statusClass}`}
                    >
                      {check.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-sky-950">Global scope, always visible</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Entity, jurisdiction, payroll group, period and currency stay visible through every
                screen in this experience — the scope bar at the top of this page is that same idea.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
