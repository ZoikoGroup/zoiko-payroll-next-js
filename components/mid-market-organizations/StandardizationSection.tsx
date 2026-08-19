import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const rows = [
  {
    area: "Object model",
    standardize: "Org / entity / group / cycle / change / approval structure",
    local: "Jurisdiction-specific fields",
  },
  {
    area: "Roles",
    standardize: "Named responsibility, least privilege",
    local: "Assignment by entity / group",
  },
  {
    area: "Approvals",
    standardize: "Evidence model, version binding",
    local: "Stage count, approvers, conditions",
  },
  {
    area: "Calendars",
    standardize: "Structure, ownership, display",
    local: "Frequency, cutoff, holidays",
  },
  {
    area: "Reporting",
    standardize: "Metric definitions, provenance",
    local: "Currency, entity, jurisdiction",
  },
  {
    area: "Integrations",
    standardize: "Data contract, health, error model",
    local: "Connector availability, fields",
  },
  {
    area: "Security",
    standardize: "Authentication, access review",
    local: "Hosting / residency — only if verified",
  },
];

export default function StandardizationSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Standardize without flattening scope"
            title="What's standardized for repeatability — and what stays scoped locally"
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr>
                  {["Area", "Standardize", "Scope locally"].map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.area}>
                    <th
                      scope="row"
                      className="border-t border-slate-200 px-4 py-4 text-left text-sm font-bold leading-5 text-sky-950"
                    >
                      {row.area}
                    </th>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-sky-600">
                      {row.standardize}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                      {row.local}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
