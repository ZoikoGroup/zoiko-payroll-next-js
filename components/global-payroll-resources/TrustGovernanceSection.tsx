import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = [
  {
    title: "Search & privacy",
    items: [
      "Public index: metadata only",
      "No customer/restricted content",
      "No identity required to search",
      "Raw query text minimized by default",
    ],
  },
  {
    title: "Content provenance",
    items: [
      "Every resource has a named owner",
      "Reviewed date always visible",
      "Downloads are privacy-scrubbed",
    ],
  },
  {
    title: "Editorial lifecycle",
    items: [
      "SME/Product review required",
      "Legal/Privacy review where needed",
      "Accessibility & SEO review before publish",
    ],
  },
];

/** Relationships are editorial and stated — never inferred from behaviour. */
const related = [
  { reason: "Same task", title: "Provider / Service-Model Evaluation Checklist" },
  { reason: "Next lifecycle stage", title: "Implementation Readiness Worksheet" },
  { reason: "Authority handoff", title: "Compliance Workflows overview" },
  { reason: "Current replacement", title: "Decision Rights Checklist v2.1" },
];

const editorialStages = [
  "Propose",
  "Draft",
  "SME Review",
  "Legal/Privacy",
  "Accessibility",
  "SEO/AEO",
  "Publish",
  "Monitor",
];

export default function TrustGovernanceSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/global-payroll-resources/trust-privacy-editorial-governance.png"
              alt="Content owner standing in an office workspace"
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Trust, privacy &amp; editorial governance</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
              Trust is part of the product proof.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-6 text-gray-700">
              No hidden behavioral profiling. No AI relevance scores. Related resources come from
              visible editorial relationships only.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {columns.map((column) => (
              <li
                key={column.title}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-6"
              >
                <h3 className="text-sm font-bold leading-6 text-slate-900">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-xs leading-5 text-gray-700">
                      <span className="shrink-0 text-blue-600" aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <h3 className="text-xs uppercase leading-5 tracking-wide text-slate-500">
            Related because…
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white px-4 py-4"
              >
                <p className="text-xs leading-5 text-blue-600">{item.reason}</p>
                <p className="mt-1.5 text-sm font-bold leading-6 text-slate-900">{item.title}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-4 lg:grid-cols-8">
            {editorialStages.map((stage, index) => (
              <li key={stage} className="bg-white px-3 py-4 text-center">
                <p className="text-xs font-medium leading-4 text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate-900">{stage}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
