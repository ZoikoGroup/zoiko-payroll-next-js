import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const columns = ["Connection", "Direction", "Last successful run", "Status", "Affected records"];

const connections: {
  connection: string;
  direction: string;
  lastRun: string;
  status: string;
  tone: ChipTone;
  affected: string;
}[] = [
  {
    connection: "HRIS — employee changes",
    direction: "Inbound",
    lastRun: "6m ago",
    status: "Healthy",
    tone: "ok",
    affected: "0",
  },
  {
    connection: "Time system",
    direction: "Inbound",
    lastRun: "26h ago",
    status: "Delayed",
    tone: "warn",
    affected: "318",
  },
  {
    connection: "Finance export",
    direction: "Outbound",
    lastRun: "14h ago",
    status: "Partial",
    tone: "blocked",
    affected: "17 of 482",
  },
];

export default function IntegrationHealthSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reporting, reconciliation, integrations + audit"
            title="Integration health, never a whole-batch success claim"
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
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
                {connections.map((row, index) => {
                  const cellBorder =
                    index < connections.length - 1 ? "border-b border-slate-200" : "";
                  return (
                    <tr key={row.connection}>
                      <td className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}>
                        {row.connection}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.direction}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.lastRun}
                      </td>
                      <td className={`px-4 py-3 ${cellBorder}`}>
                        <StatusChip tone={row.tone}>{row.status}</StatusChip>
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.affected}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
