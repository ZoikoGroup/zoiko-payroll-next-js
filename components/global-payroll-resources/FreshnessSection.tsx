import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const actions = ["Download", "Print", "Copy link", "Share"];

const boundaries = [
  "Applicability: General guidance",
  "Source: Zoiko Content Team",
  "Boundary: Does not establish your configuration",
];

/** Freshness runs one way — a resource never returns to Current without a new review. */
const lifecycle = [
  { label: "Current", fill: "bg-emerald-50", text: "text-green-600", dot: "bg-green-600" },
  { label: "Review due", fill: "bg-orange-100", text: "text-yellow-700", dot: "bg-yellow-700" },
  { label: "Under review", fill: "bg-indigo-50", text: "text-blue-600", dot: "bg-blue-600" },
  { label: "Superseded", fill: "bg-gray-100", text: "text-slate-500", dot: "bg-slate-500" },
  { label: "Retired", fill: "bg-red-50", text: "text-red-600", dot: "bg-red-600" },
];

export default function FreshnessSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Download / share + freshness &amp; versioning</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
            Portable assets are governed, not detached PDFs.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  Decision Rights &amp; Approval Checklist
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">v2.1 · Reviewed Jun 2026</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {actions.map((action) => (
                  <li
                    key={action}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium leading-5 text-slate-900"
                  >
                    {action}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 py-5">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {boundaries.map((boundary) => (
                  <li key={boundary} className="text-xs leading-5 text-gray-700">
                    {boundary}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs uppercase leading-4 tracking-wide text-slate-500">
                Freshness lifecycle
              </p>
              <ol className="mt-3 flex flex-wrap items-center gap-2">
                {lifecycle.map((stage, index) => (
                  <li key={stage.label} className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold leading-4 ${stage.fill} ${stage.text}`}
                    >
                      <span
                        className={`size-1.5 shrink-0 rounded-sm ${stage.dot}`}
                        aria-hidden="true"
                      />
                      {stage.label}
                    </span>
                    {index < lifecycle.length - 1 ? (
                      <span aria-hidden="true" className="text-slate-400">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-orange-50 px-4 py-3.5">
                <p className="text-xs leading-5 text-gray-700">
                  This v1.8 checklist has been superseded.
                </p>
                <a
                  href="#resource-record"
                  className="text-xs font-semibold leading-5 text-blue-600 transition-colors duration-200 hover:text-blue-700"
                >
                  View current version (v2.1) <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
