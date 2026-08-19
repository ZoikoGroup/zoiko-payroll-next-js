import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";

const checks = [
  { label: "Inputs complete", value: "✓", tone: "text-green-300" },
  { label: "Calculations validated", value: "✓", tone: "text-green-300" },
  { label: "Exceptions open", value: "3", tone: "text-orange-300" },
  { label: "Ready for review", value: "✓", tone: "text-green-300" },
  { label: "Ready for approval", value: "Not yet", tone: "text-red-300" },
];

const columns = ["Record", "Issue", "Owner", "Due", "Status"];

const exceptions = [
  {
    record: "J. Alvarez",
    issue: "Missing bank detail",
    owner: "M. Reyes",
    due: "Apr 11",
    status: "Open",
    statusClass: "bg-yellow-700/20 text-orange-300",
  },
  {
    record: "Record #4471",
    issue: "Deduction flagged for review",
    owner: "S. Kim",
    due: "Apr 12",
    status: "Open",
    statusClass: "bg-yellow-700/20 text-orange-300",
  },
  {
    record: "T. Nguyen",
    issue: "Overtime pending sign-off",
    owner: "M. Reyes",
    due: "Apr 12",
    status: "Blocked",
    statusClass: "bg-pink-800/20 text-red-300",
  },
];

export default function ControlCenterSection() {
  return (
    <section id="control-center" className="scroll-mt-24 bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            title="One place to see what's ready, what needs attention, and what's set up"
            description="All values shown are synthetic sample data."
          />
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="overflow-hidden rounded-[10px] border border-white/10 bg-sky-950">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-4">
              <p className="text-xs leading-5 text-slate-400">
                APR 1–15, 2026 · NIMBUS RETAIL CO · HOURLY + SALARIED
              </p>
              <p className="text-xs leading-5 text-slate-400">Refreshed 4 minutes ago</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-64 border-white/10 lg:border-r">
                <img
                  src="/images/growing-businesses/control-center.png"
                  alt="Payroll owner checking run status on a laptop"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div
                  className="absolute inset-0 bg-linear-to-tr from-gray-900/60 to-transparent to-60%"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-3.5 px-5 py-6 sm:px-6">
                {checks.map((check) => (
                  <div
                    key={check.label}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3.5"
                  >
                    <p className="text-xs leading-5 text-slate-300">{check.label}</p>
                    <p className={`text-base font-semibold leading-6 ${check.tone}`}>
                      {check.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto px-5 pb-6 sm:px-6">
              <table className="w-full min-w-3xl border-collapse text-left">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-white/10 px-2 py-2.5 text-xs font-medium uppercase leading-4 tracking-wide text-slate-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {exceptions.map((exception) => (
                    <tr key={exception.record}>
                      <td className="border-b border-white/5 px-2 py-3.5 text-xs leading-5 text-zinc-200">
                        {exception.record}
                      </td>
                      <td className="border-b border-white/5 px-2 py-3.5 text-xs leading-5 text-zinc-200">
                        {exception.issue}
                      </td>
                      <td className="border-b border-white/5 px-2 py-3.5 text-xs leading-5 text-zinc-200">
                        {exception.owner}
                      </td>
                      <td className="border-b border-white/5 px-2 py-3.5 text-xs leading-5 text-zinc-200">
                        {exception.due}
                      </td>
                      <td className="border-b border-white/5 px-2 py-3">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium leading-4 ${exception.statusClass}`}
                        >
                          {exception.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
