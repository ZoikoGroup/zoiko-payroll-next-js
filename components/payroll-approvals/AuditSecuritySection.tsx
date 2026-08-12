import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const history = [
  { time: "Apr 09, 09:14", event: "v4 approved by J. Reyes (Finance Approver)." },
  {
    time: "Apr 09, 14:02",
    event: "Material change recalculated payroll — v5 created; v4 approval marked historical.",
  },
  { time: "Apr 09, 14:05", event: "Reapproval required on v5, routed to Finance Approver." },
  { time: "Apr 10, 08:40", event: "Context requested on v5 by J. Reyes; response due Apr 11." },
];

const assurances = [
  "Permission, scope, role conflict and payroll version all checked at the moment of commit, not just on load.",
  "Least-privilege access, enforced server-side rather than assumed from the interface.",
  "Delegation, invalidation and reapproval lineage included in the audit record when applicable.",
];

export default function AuditSecuritySection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Audit history &amp; security</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-9 text-sky-950">
            Every decision is reconstructable, not just recorded
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase leading-4 tracking-wide text-slate-600">
              Decision history — RUN-2291
            </p>
            <ul className="mt-3">
              {history.map((entry) => (
                <li
                  key={entry.time}
                  className="flex flex-col gap-1 border-b border-slate-200 py-3.5 sm:flex-row sm:gap-6"
                >
                  <span className="w-32 shrink-0 font-mono text-xs text-slate-500">{entry.time}</span>
                  <span className="text-sm leading-5 text-sky-950">{entry.event}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-8 space-y-4">
              {assurances.map((assurance) => (
                <li key={assurance} className="flex gap-3">
                  <img
                    src="/images/payroll-approvals/icon-check-green.svg"
                    alt=""
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0"
                  />
                  <span className="text-sm leading-5 text-slate-700">{assurance}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/payroll-approvals/audit-security.png"
                alt="Secure infrastructure behind every recorded decision"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <p className="absolute bottom-5 left-5 rounded bg-sky-950/85 px-3 py-1.5 font-mono text-xs text-white">
                Least privilege, checked at commit
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
