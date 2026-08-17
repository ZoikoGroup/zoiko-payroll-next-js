import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";
import { CheckCircleIcon } from "../ui/icons";

const columns = ["System of record", "Direction", "Mapping / version", "Owner", "Status"];

const rows: {
  system: string;
  direction: string;
  version: string;
  owner: string;
  status: string;
  tone: ChipTone;
  ringClass: string;
}[] = [
  {
    system: "Workforce system",
    direction: "Inbound",
    version: "v3.2",
    owner: "M. Ortiz",
    status: "Healthy",
    tone: "ok",
    ringClass: "border-[#2F7A52]",
  },
  {
    system: "SG workforce connector",
    direction: "Inbound",
    version: "v1.4",
    owner: "R. Tan",
    status: "Failed — 6 of 1,848 records",
    tone: "blocked",
    ringClass: "border-[#B23A34]",
  },
  {
    system: "Finance export",
    direction: "Outbound",
    version: "v2.1",
    owner: "J. Park",
    status: "Healthy",
    tone: "ok",
    ringClass: "border-[#2F7A52]",
  },
];

const guarantees = [
  "Verified authentication and scope-based least privilege — every privileged action requires confirmation.",
  "Retry is safe and idempotent — never a prompt to just resubmit and hope.",
  "Employee-level detail stays permission- and purpose-bound; residency claims are shown only with current evidence.",
];

export default function IntegrationsSecuritySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Integrations &amp; security</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Partial failure stays visible — never rounded up to success
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="overflow-hidden rounded-xl border border-[#DCE6EC] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF1F6]">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-[#DCE6EC] px-4 py-3 font-mono text-[10px] font-medium uppercase leading-4 text-[#4E6172]"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const b = index < rows.length - 1 ? "border-b border-[#DCE6EC]" : "";
                    return (
                      <tr key={row.system}>
                        <td className={`px-4 py-3.5 text-sm leading-5 text-[#082F49] ${b}`}>
                          {row.system}
                        </td>
                        <td className={`px-4 py-3 ${b}`}>
                          <StatusChip label={row.direction} tone="neutral" />
                        </td>
                        <td className={`px-4 py-3.5 font-mono text-xs leading-5 text-[#4E6172] ${b}`}>
                          {row.version}
                        </td>
                        <td className={`px-4 py-3.5 text-sm leading-5 text-[#082F49] ${b}`}>
                          {row.owner}
                        </td>
                        <td className={`px-4 py-3 ${b}`}>
                          <span className="flex items-center gap-2.5">
                            <span
                              aria-hidden="true"
                              className={`size-5 shrink-0 rounded-full border-2 ${row.ringClass}`}
                            />
                            <StatusChip label={row.status} tone={row.tone} />
                          </span>
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
                <span className="text-sm leading-6 text-[#4E6172]">{guarantee}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
