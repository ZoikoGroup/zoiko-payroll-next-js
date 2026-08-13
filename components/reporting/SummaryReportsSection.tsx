import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const reports = [
  {
    title: "Outcome Summary",
    purpose: "Verified totals and completion status",
    rows: [
      { label: "Scope", value: "Zoiko US Inc." },
      { label: "Freshness", value: "6m ago" },
      { label: "Run", value: "v14" },
    ],
    format: "CSV",
  },
  {
    title: "Approvals Summary",
    purpose: "Review and approval status by run",
    rows: [
      { label: "Scope", value: "All entities" },
      { label: "Freshness", value: "14m ago" },
      { label: "Runs", value: "4" },
    ],
    format: "PDF",
  },
  {
    title: "Exceptions Summary",
    purpose: "Open exceptions by owner and severity",
    rows: [
      { label: "Scope", value: "Zoiko US Inc." },
      { label: "Freshness", value: "6m ago" },
      { label: "Open", value: "3" },
    ],
    format: "CSV",
  },
  {
    title: "Deductions & Adjustments Aggregate",
    purpose: "Change volume and status by type",
    rows: [
      { label: "Scope", value: "Zoiko US Inc." },
      { label: "Freshness", value: "1h ago" },
      { label: "Changes", value: "12" },
    ],
    format: "CSV",
  },
  {
    title: "Record Publication Status",
    purpose: "Payslip publication across the period",
    rows: [
      { label: "Scope", value: "Zoiko US Inc." },
      { label: "Freshness", value: "6m ago" },
      { label: "Published", value: "1,284 / 1,284" },
    ],
    format: "CSV",
  },
  {
    title: "Audit Summary",
    purpose: "Attributable platform actions this period",
    rows: [
      { label: "Scope", value: "Zoiko US Inc." },
      { label: "Freshness", value: "6m ago" },
      { label: "Events", value: "47" },
    ],
    format: "PDF",
  },
];

export default function SummaryReportsSection() {
  return (
    <section className="bg-[#F7FBFD] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/reporting/summary-reports.png"
              alt="Payroll team reviewing period reports together"
              className="h-72 w-full rounded-2xl object-cover shadow-[0px_18px_44px_-18px_rgba(8,19,43,0.22)] sm:h-96"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Payroll summary reports</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900">
              Operational reporting around a payroll period.
            </h2>
            <p className="mt-3.5 max-w-lg text-base leading-6 text-gray-700">
              Title, purpose, scope, freshness and a safe preview — before you open the full report.
            </p>
          </Reveal>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, index) => (
            <Reveal key={report.title} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-4 pt-3.5 pb-4">
                  <h3 className="text-sm font-bold leading-6 text-slate-900">{report.title}</h3>
                  <p className="text-xs leading-5 text-slate-500">{report.purpose}</p>
                </div>

                <dl className="flex-1 bg-gray-50 px-4 py-3.5">
                  {report.rows.map((row) => (
                    <div key={row.label} className="flex justify-between gap-3 py-[5px]">
                      <dt className="text-xs leading-4 text-gray-700">{row.label}</dt>
                      <dd className="font-mono text-xs leading-4 text-slate-500">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="border-t border-slate-200 px-4 py-3">
                  <span className="inline-block rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs leading-4 text-slate-500">
                    {report.format}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
