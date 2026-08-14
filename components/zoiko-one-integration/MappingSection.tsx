import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const columns = ["Field", "Direction", "Authoritative source", "Version", "Owner"];

const mappings = [
  {
    field: "worker_id",
    direction: "Inbound",
    source: "Zoiko HR",
    version: "v3.2",
    owner: "M. Ortiz",
  },
  {
    field: "legal_entity_code",
    direction: "Bidirectional",
    source: "Zoiko Payroll",
    version: "v3.2",
    owner: "M. Ortiz",
  },
  {
    field: "approved_gross_pay",
    direction: "Outbound",
    source: "Zoiko Payroll",
    version: "v2.1",
    owner: "J. Park",
  },
  {
    field: "time_record_id",
    direction: "Inbound",
    source: "Zoiko Time",
    version: "v1.4",
    owner: "S. Adeyemi",
  },
];

export default function MappingSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F5F8FA] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Mapping &amp; data contracts</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-9 text-sky-950">
            Mapping is a first-class surface, not a hidden config file
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-600">
            Explicit inbound, outbound or bidirectional labels replace vague &ldquo;sync&rdquo; language.
            Material changes require review, testing and revalidation.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200 px-5 py-3 font-mono text-[10px] font-medium uppercase leading-4 text-slate-600"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mappings.map((row) => (
                  <tr key={row.field} className="border-b border-slate-200 last:border-b-0">
                    <th scope="row" className="px-5 py-3.5 text-left text-sm font-normal text-sky-950">
                      {row.field}
                    </th>
                    <td className="px-5 py-3.5">
                      <span className="inline-block rounded-md bg-sky-100 px-2 py-1 font-mono text-xs leading-4 text-sky-800">
                        {row.direction}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-sky-950">{row.source}</td>
                    <td className="px-5 py-3.5 text-sm text-sky-950">{row.version}</td>
                    <td className="px-5 py-3.5 text-sm text-sky-950">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-xs leading-5 text-slate-600">
            Each mapping carries purpose, direction, identifier, effective date, transformation, conflict
            handling, privacy/retention and a named owner.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
