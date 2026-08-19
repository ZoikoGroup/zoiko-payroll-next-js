import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const columns = ["Entity", "Local total", "Reporting currency", "FX basis", "Reconciliation"];

const rows: {
  entity: string;
  local: string;
  reporting: string;
  fx: string;
  status: string;
  tone: ChipTone;
}[] = [
  {
    entity: "Zoiko US Inc.",
    local: "$2.41M USD",
    reporting: "USD",
    fx: "—",
    status: "Matched",
    tone: "ok",
  },
  {
    entity: "Zoiko DE GmbH",
    local: "€0.87M EUR",
    reporting: "USD",
    fx: "Aug 15 spot",
    status: "Variance",
    tone: "warn",
  },
  {
    entity: "Zoiko SG Pte.",
    local: "S$0.61M SGD",
    reporting: "USD",
    fx: "Aug 15 spot",
    status: "Matched",
    tone: "ok",
  },
];

export default function ReportingSection() {
  return (
    <section className="border-t border-[#E3E7F0] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="International reporting, currency + reconciliation"
            title="Every converted total shows its reporting currency and FX basis"
          />
        </Reveal>

        <Reveal delay={80} className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-slate-200 bg-gray-50 px-4 py-2.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => {
                  const cellBorder = index < rows.length - 1 ? "border-b border-slate-200" : "";
                  return (
                    <tr key={row.entity}>
                      <td className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}>
                        {row.entity}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.local}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.reporting}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.fx}
                      </td>
                      <td className={`px-4 py-3 ${cellBorder}`}>
                        <StatusChip tone={row.tone}>{row.status}</StatusChip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-5">
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
            <span aria-hidden="true">ⓘ</span> FX rate source and owner are shown per conversion —
            Zoiko Payroll is not an authoritative FX source. Restated periods show original vs.
            current approved version.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
