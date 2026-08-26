import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const items = [
  {
    title: "Source inventory",
    description:
      "Identify systems of record, data classes, history range, owners and export constraints.",
    note: "No public upload of employee/payroll/bank/tax data",
  },
  {
    title: "Data minimization",
    description:
      "Move only data/history/artifacts needed for the approved purpose and target operating model.",
  },
  {
    title: "Mapping",
    description:
      "Document source field → target object/field, transformation, defaulting and unmapped values.",
    note: "Current target behavior comes from Product Documentation",
  },
  {
    title: "Effective dates / history",
    description:
      "Preserve temporal meaning, corrections and superseded records where required.",
  },
  {
    title: "Validation",
    description: "Counts, totals, keys, required fields and domain rules use defined methods.",
    note: "A passed technical check is not a compliance certification",
  },
  {
    title: "Reconciliation",
    description:
      "Make source vs. target differences visible with reason and resolution — never hide unmatched records.",
  },
];

export default function MigrationSection() {
  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/resources-implementation/migration.png"
              alt="Reviewing payroll data reports before migration"
              loading="lazy"
              className="h-56 w-full rounded-2xl border border-slate-200 object-cover shadow-[0px_20px_44px_-22px_rgba(15,45,70,0.25)] sm:h-72 lg:h-80"
            />
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Migration &amp; data preparation</Eyebrow>
            <h2 className="mt-3.5 max-w-[520px] text-2xl font-bold leading-tight tracking-tight text-[#0A2E4B] sm:text-3xl sm:leading-10">
              Move only what the target model actually needs
            </h2>
            <p className="mt-4 max-w-[660px] text-base leading-6 text-gray-600">
              General guidance only — the approved source list belongs to the implementation
              program, not this page.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white px-4 pb-4 pt-3.5">
                <p className="text-sm font-bold leading-5 text-[#0A2E4B]">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">{item.description}</p>
                {item.note ? (
                  <p className="mt-1 text-xs font-bold leading-4 text-yellow-700">{item.note}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
