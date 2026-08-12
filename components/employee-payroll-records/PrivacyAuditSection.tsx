import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import { PinIcon } from "../ui/icons";

const timeline = [
  {
    meta: "Mar 18, 2026 · System",
    event: "Record published — Version 2 (correction applied).",
  },
  { meta: "Mar 17, 2026 · Payroll Admin", event: "Correction reviewed and approved." },
  { meta: "Mar 01, 2026 · System", event: "Record published — Version 1." },
];

export default function PrivacyAuditSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Privacy, audit &amp; support</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-9 text-sky-950">
            A visible trail, and a clear place to ask for help
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase leading-4 text-slate-600">Audit timeline</p>
            <ol className="mt-2">
              {timeline.map((entry, index) => (
                <li
                  key={entry.meta}
                  className={`relative pl-6 ${index < timeline.length - 1 ? "pb-5" : ""}`}
                >
                  {index < timeline.length - 1 && (
                    <span
                      className="absolute left-[6px] top-[11px] -bottom-[11px] w-0.5 bg-slate-300"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-sky-600 outline-2 -outline-offset-2 outline-white ring-[1.5px] ring-[#0A78C2]"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-4 text-slate-600">{entry.meta}</p>
                  <p className="mt-0.5 text-xs leading-5 text-sky-950">{entry.event}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <PinIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold leading-5 text-sky-950">
                  Something looks wrong with a record
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Employees can raise a secure correction or support request directly from the record,
                  without leaving self-service.
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-600">
              Access to any given record — and to the audit trail behind it — is scoped by role and
              permission, not by convenience.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
