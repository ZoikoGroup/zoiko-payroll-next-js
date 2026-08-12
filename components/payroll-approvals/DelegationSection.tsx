import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const delegation = [
  { label: "Delegator", value: "J. Reyes" },
  { label: "Eligible delegate", value: "A. Kessler" },
  { label: "Permission / stage", value: "Finance Approval" },
  { label: "Scope", value: "Acme US LLC" },
  { label: "Start – end date", value: "Apr 10 – Apr 17, 2026" },
  { label: "Reason", value: "Planned leave" },
];

const notifications = [
  { dot: "bg-amber-500", text: "RUN-2291 assigned to you — due today." },
  { dot: "bg-red-500", text: "RUN-2279 escalated — approver unavailable beyond SLA." },
  { dot: "bg-green-600", text: "RUN-2266 approved by A. Kessler (delegate)." },
  { dot: "bg-slate-300", text: "Context requested on RUN-2288 — awaiting response." },
  { dot: "bg-red-500", text: "RUN-2260 approval invalidated — payroll version changed." },
];

export default function DelegationSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Delegation, escalation &amp; notifications</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            Work keeps moving safely when an approver is unavailable
          </h2>
          <p className="mt-4 text-base leading-6 text-slate-600">
            Delegation is time-bounded, scope-bounded and validated against eligibility and SoD before
            it&rsquo;s created — never an off-system workaround.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <dl>
                {delegation.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-slate-200 py-3.5"
                  >
                    <dt className="text-sm text-slate-600">{item.label}</dt>
                    <dd className="text-right text-sm font-bold text-sky-950">{item.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="text-sm text-slate-600">Status</dt>
                  <dd>
                    <span className="rounded bg-green-100 px-2 py-1 font-mono text-xs font-medium text-green-700">
                      Active
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono text-xs uppercase leading-4 tracking-wide text-slate-600">
              Notification feed
            </p>
            <ul className="mt-3">
              {notifications.map((notification) => (
                <li
                  key={notification.text}
                  className="flex items-center gap-3 border-b border-slate-200 py-3"
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${notification.dot}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-sky-950">{notification.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Every notification routes into the authenticated decision workspace — never treated as
              authorization itself.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
