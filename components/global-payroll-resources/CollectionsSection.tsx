import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const collections = [
  {
    name: "Start with Global Payroll",
    detail: "Foundational concepts and terminology.",
    count: "6 resources",
    image: "start-global-payroll",
    alt: "Colleagues reviewing payroll fundamentals at a desk",
  },
  {
    name: "Governance & Controls",
    detail: "Decision rights, approvals, change governance.",
    count: "8 resources",
    image: "governance-controls",
    alt: "Leadership team discussing governance around a table",
  },
  {
    name: "Multi-Entity Operations",
    detail: "Coordinating entities and payroll groups.",
    count: "5 resources",
    image: "multi-entity-operations",
    alt: "Team coordinating across entities in a meeting",
  },
  {
    name: "Reporting & Reconciliation",
    detail: "Reporting guides and reconciliation checklists.",
    count: "7 resources",
    image: "reporting-reconciliation",
    alt: "Reviewer working through reconciliation paperwork",
  },
  {
    name: "Implementation & Migration",
    detail: "Rollout planning and migration worksheets.",
    count: "9 resources",
    image: "implementation-migration",
    alt: "Implementation team planning a rollout together",
  },
  {
    name: "Integrations & Data",
    detail: "Data contracts, mapping and connectivity.",
    count: "4 resources",
    image: "integrations-data",
    alt: "Hands reviewing data dashboards on a laptop",
  },
  {
    name: "Security, Privacy & Assurance",
    detail: "Evaluation guides for trust and controls.",
    count: "5 resources",
    image: "security-privacy-assurance",
    alt: "Abstract security shield over a circuit board",
  },
  {
    name: "Market Learning",
    detail: "General market education, non-authoritative.",
    count: "11 resources",
    image: "market-learning",
    alt: "Colleagues in an informal learning session",
  },
];

export default function CollectionsSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Resource taxonomy + featured collections</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-8 text-slate-900 sm:text-3xl sm:leading-9">
            Curated starting points — never a separate content database.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-9">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <li
                key={collection.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <img
                  src={`/images/global-payroll-resources/${collection.image}.png`}
                  alt={collection.alt}
                  className="h-56 w-full object-cover"
                />
                <div className="px-5 py-4">
                  <h3 className="text-sm font-extrabold leading-6 text-slate-900">
                    {collection.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{collection.detail}</p>
                  <p className="mt-3 inline-block rounded-2xl bg-indigo-50 px-2.5 py-1 text-xs font-bold leading-4 text-blue-600">
                    {collection.count}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
