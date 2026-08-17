import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";
import { CheckCircleIcon } from "../ui/icons";

const columns = ["Source / target", "Category", "Jurisdictions served", "Direction", "Status"];

const rows: {
  source: string;
  category: string;
  jurisdictions: string;
  direction: string;
  status: string;
  tone: ChipTone;
}[] = [
  {
    source: "Workforce system",
    category: "HR",
    jurisdictions: "US, DE, GB",
    direction: "Inbound",
    status: "Healthy",
    tone: "ok",
  },
  {
    source: "SG workforce connector",
    category: "HR",
    jurisdictions: "SG",
    direction: "Inbound",
    status: "Failed",
    tone: "blocked",
  },
  {
    source: "Finance export",
    category: "Finance",
    jurisdictions: "US, BR",
    direction: "Outbound",
    status: "Healthy",
    tone: "ok",
  },
  {
    source: "DE statutory filing partner",
    category: "Partner-supported",
    jurisdictions: "DE",
    direction: "Bidirectional",
    status: "Degraded",
    tone: "warn",
  },
];

const guarantees = [
  "Least-privilege access, approved credential handling, rotation and rate limits per connection.",
  "Partial failure shows record-level outcomes and affected payroll groups — never a false batch success.",
  "Only verified processing/residency regions, transfer mechanisms and subprocessors are published — nothing implied.",
];

export default function IntegrationsSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Integrations &amp; providers</Eyebrow>
          <h2 className="mt-2.5 max-w-4xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            Connector availability is jurisdiction-specific — never assumed global
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-[#DCE6EC] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-4 py-2.5 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const cellBorder = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    return (
                      <tr key={row.source}>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.source}
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.category}
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.jurisdictions}
                        </td>
                        <td className={`px-4 py-2.5 ${cellBorder}`}>
                          <StatusChip label={row.direction} tone="neutral" />
                        </td>
                        <td className={`px-4 py-2.5 ${cellBorder}`}>
                          <StatusChip label={row.status} tone={row.tone} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <ul className="flex flex-col gap-2.5">
            {guarantees.map((guarantee) => (
              <li key={guarantee} className="flex items-start gap-2.5">
                <CheckCircleIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2F7A52]"
                  aria-hidden="true"
                />
                <span className="text-sm leading-5 text-[#4E6172]">{guarantee}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
