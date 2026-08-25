import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const submitCaseFields = [
  { label: "Purpose", value: "Product issue requiring investigation" },
  { label: "Data shared", value: "Issue description, safe error code" },
  { label: "Response target", value: "Per your entitlement — not fixed here" },
  { label: "Privacy note", value: "No payroll data attached automatically" },
];

const caseStatusFields = [
  { label: "Current state", value: "With integrations specialist" },
  { label: "Owner / team", value: "it-support" },
  { label: "Last updated", value: "2h ago" },
  { label: "Action needed", value: "None — awaiting specialist" },
];

export default function VerifiedAccessSection() {
  return (
    <section className="border-b border-[#DCE6EC] bg-[#EAF1F6] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Verified support access + case status</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
            Rendered only from an active, current support record.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={80} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-brand-dark">Submit a support case</h3>
              <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                Authenticated
              </span>
            </div>
            <dl className="mt-4 divide-y divide-slate-100">
              {submitCaseFields.map((field) => (
                <div key={field.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-slate-500">{field.label}</dt>
                  <dd className="text-right font-medium text-brand-dark">{field.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-brand-dark">Case #48213</h3>
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                In progress
              </span>
            </div>
            <dl className="mt-4 divide-y divide-slate-100">
              {caseStatusFields.map((field) => (
                <div key={field.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-slate-500">{field.label}</dt>
                  <dd className="text-right font-medium text-brand-dark">{field.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
