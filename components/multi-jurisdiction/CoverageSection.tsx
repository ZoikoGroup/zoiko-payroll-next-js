import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import StatusChip, { type ChipTone } from "./StatusChip";

const columns = ["Jurisdiction", "Status", "Service model", "Currency", "Reviewed"];

const rows: {
  jurisdiction: string;
  status: string;
  tone: ChipTone;
  serviceModel: string;
  currency: string;
  reviewed: string;
}[] = [
  {
    jurisdiction: "United States",
    status: "Available",
    tone: "ok",
    serviceModel: "Direct",
    currency: "USD",
    reviewed: "Mar 2026",
  },
  {
    jurisdiction: "Germany",
    status: "Available",
    tone: "ok",
    serviceModel: "Direct",
    currency: "EUR",
    reviewed: "Mar 2026",
  },
  {
    jurisdiction: "Singapore",
    status: "Limited availability",
    tone: "warn",
    serviceModel: "Partner-supported",
    currency: "SGD",
    reviewed: "Feb 2026",
  },
  {
    jurisdiction: "Brazil",
    status: "Available",
    tone: "ok",
    serviceModel: "Direct",
    currency: "BRL",
    reviewed: "Mar 2026",
  },
];

export default function CoverageSection() {
  return (
    <section
      id="jurisdiction-coverage"
      className="scroll-mt-24 border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Jurisdiction coverage</Eyebrow>
          <h2 className="mt-2.5 max-w-2xl text-2xl font-extrabold leading-8 break-words sm:text-3xl sm:leading-9 text-[#082F49]">
            A governed content product, not a marketing map.
          </h2>
          <p className="mt-2.5 max-w-3xl text-base leading-6 text-[#4E6172]">
            Coverage detail is shown only where the evidence behind it is current and approved.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-[#DCE6EC] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-2xl border-collapse text-left">
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
                      <tr key={row.jurisdiction}>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.jurisdiction}
                        </td>
                        <td className={`px-4 py-2.5 ${cellBorder}`}>
                          <StatusChip label={row.status} tone={row.tone} />
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.serviceModel}
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.currency}
                        </td>
                        <td className={`px-4 py-3 text-xs leading-5 text-[#082F49] ${cellBorder}`}>
                          {row.reviewed}
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
          <p className="max-w-2xl rounded-r-lg border-l-[3px] border-[#9C7A1F] bg-[#F1EAD8] px-5 py-4 text-sm leading-5 text-[#6E5720]">
            The full jurisdiction directory is not yet operational. Coverage detail beyond
            what&apos;s shown here routes to scoped sales discovery rather than being published as
            supported.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
