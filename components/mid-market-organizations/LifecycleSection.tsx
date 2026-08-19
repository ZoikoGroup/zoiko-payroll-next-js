import Reveal from "../ui/Reveal";
import SectionHeading from "./SectionHeading";
import { InfoIcon } from "../ui/icons";

const stages = [
  {
    step: "01",
    title: "Prepare",
    description: "Approved inputs by group; named preparer resolves gaps.",
  },
  {
    step: "02",
    title: "Calculate",
    description: "Run version, configuration context, warnings.",
  },
  {
    step: "03",
    title: "Validate",
    description: "Missing / conflicting data; owner resolves.",
  },
  {
    step: "04",
    title: "Review",
    description: "Results and exceptions; reviewer records outcome.",
  },
  {
    step: "05",
    title: "Approve",
    description: "Decision bound to the current material version.",
  },
  {
    step: "06",
    title: "Complete",
    description: "Close, reporting context, history preserved.",
  },
];

const columns = ["Group", "Entity", "Frequency", "Cutoff", "Timezone", "Owner"];

const calendars = [
  {
    group: "US-Salaried",
    entity: "Nimbus US LLC",
    frequency: "Semi-monthly",
    cutoff: "Apr 12",
    timezone: "EST",
    owner: "M. Ortiz",
  },
  {
    group: "US-Hourly",
    entity: "Nimbus US LLC",
    frequency: "Bi-weekly",
    cutoff: "Apr 12",
    timezone: "EST",
    owner: "M. Ortiz",
  },
  {
    group: "Retail-Hourly",
    entity: "Nimbus Retail Co",
    frequency: "Weekly",
    cutoff: "Apr 13",
    timezone: "CST",
    owner: "L. Faber",
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Payroll lifecycle"
            title="The same six stages, across every payroll group"
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((stage) => (
              <div key={stage.step} className="rounded-xl border border-slate-200 px-4 py-5">
                <p className="text-xs font-bold leading-4 text-sky-600">{stage.step}</p>
                <h3 className="mt-3 text-sm font-bold leading-5 text-sky-950">{stage.title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <div className="flex gap-3 rounded-lg bg-[#0A2E47] px-5 py-4">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
            <p className="text-sm leading-6 text-white/85">
              <span className="font-semibold text-blue-300">Material change law:</span> a v4 approval
              never silently carries forward to v5. Material payroll data changes after approval
              trigger invalidation or re-evaluation per verified product behavior.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-6">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-3xl border-collapse text-left">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="bg-slate-50 px-4 py-3.5 text-xs font-semibold uppercase leading-4 tracking-wide text-slate-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendars.map((calendar) => (
                  <tr key={calendar.group}>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-sky-950">
                      {calendar.group}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                      {calendar.entity}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                      {calendar.frequency}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                      {calendar.cutoff}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                      {calendar.timezone}
                    </td>
                    <td className="border-t border-slate-200 px-4 py-4 text-sm leading-5 text-zinc-600">
                      {calendar.owner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
