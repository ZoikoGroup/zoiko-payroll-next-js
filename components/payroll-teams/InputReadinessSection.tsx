import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip, { type ChipTone } from "./StatusChip";

const columns = ["Input", "Source", "Owner", "Effective date", "Status"];

const inputs: {
  input: string;
  source: string;
  owner: string;
  effective: string;
  status: string;
  tone: ChipTone;
}[] = [
  {
    input: "Employee changes",
    source: "HRIS",
    owner: "hr-team",
    effective: "Aug 1",
    status: "Ready",
    tone: "ok",
  },
  {
    input: "Time & absence",
    source: "Time system",
    owner: "it-integrations",
    effective: "Aug 12",
    status: "Stale",
    tone: "warn",
  },
  {
    input: "Deductions & adjustments",
    source: "Payroll",
    owner: "payroll-ops",
    effective: "Aug 1",
    status: "Ready",
    tone: "ok",
  },
];

/** The full vocabulary — the active one is outlined so the set reads as states, not severities. */
const legend = [
  { label: "Ready", active: false },
  { label: "Needs mapping", active: false },
  { label: "Stale", active: true },
  { label: "Missing", active: false },
  { label: "Error", active: false },
  { label: "Excluded with reason", active: false },
];

export default function InputReadinessSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              wrap
              eyebrow="Input readiness + validation"
              title="Unknown data is never silently defaulted."
              description="Needs input, Needs context, Excluded with reason, or Blocked — never a silent assumption."
            />
          </Reveal>

          <Reveal delay={100}>
            <img
              src="/images/payroll-teams/input-readiness.png"
              alt="A data integrity view open on a laptop"
              className="aspect-[492/326] w-full rounded-2xl object-cover shadow-[0_18px_44px_-18px_rgba(8,19,43,0.22)]"
            />
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-7">
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
                {inputs.map((row, index) => {
                  const cellBorder = index < inputs.length - 1 ? "border-b border-slate-200" : "";
                  return (
                    <tr key={row.input}>
                      <td className={`px-4 py-3.5 text-xs leading-5 text-slate-900 ${cellBorder}`}>
                        {row.input}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.source}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.owner}
                      </td>
                      <td
                        className={`px-4 py-4 font-mono text-xs leading-4 text-slate-500 ${cellBorder}`}
                      >
                        {row.effective}
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

        <Reveal delay={180} className="mt-5">
          <div className="flex flex-wrap gap-2">
            {legend.map((item) => (
              <span
                key={item.label}
                className={`rounded-full border bg-white px-2.5 py-1 text-xs leading-4 ${
                  item.active
                    ? "border-yellow-700 text-yellow-700"
                    : "border-slate-200 text-gray-700"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
