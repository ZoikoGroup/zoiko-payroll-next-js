import Link from "next/link";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const labels = [
  { text: "General guidance", className: "bg-indigo-50 text-blue-600" },
  { text: "Reviewed", className: "bg-emerald-50 text-green-600" },
  { text: "Current", className: "bg-emerald-50 text-green-600" },
];

const meta = [
  { label: "Audience", value: "Payroll Operations" },
  { label: "Reviewed date", value: "Jun 2026" },
  { label: "Freshness", value: "Current" },
  { label: "Owner", value: "Zoiko Content Team" },
];

export default function ResourceRecordSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Resource record + applicability labels</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
            Every guide, checklist and playbook is one canonical, scoped object.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-9">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 py-5">
              <ul className="flex flex-wrap gap-2">
                {labels.map((label) => (
                  <li
                    key={label.text}
                    className={`rounded-2xl px-2.5 py-1 text-xs font-bold leading-4 ${label.className}`}
                  >
                    {label.text}
                  </li>
                ))}
              </ul>
              <h3 className="mt-3 text-lg font-extrabold leading-7 text-slate-900">
                Decision Rights &amp; Approval Checklist
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-gray-700">
                Purpose: help teams define who prepares, reviews and approves payroll decisions.
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-px border-b border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="bg-white px-6 py-4">
                  <dt className="text-xs leading-4 text-slate-500">{item.label}</dt>
                  <dd className="mt-2 text-sm font-semibold leading-5 text-slate-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-6 py-4">
              <p className="text-xs leading-5 text-gray-700">
                <span aria-hidden="true">ⓘ</span> This resource does not establish your current
                approval configuration or contractual scope.
              </p>
              <Link
                href="/global-payroll/compliance-workflows"
                className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold leading-5 text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
              >
                See Compliance Workflows <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
