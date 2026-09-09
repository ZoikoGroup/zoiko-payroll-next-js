import Image from "next/image";
import Reveal from "../ui/Reveal";

const severities = [
  {
    title: "Blocker",
    description: "Stops affected data from advancing.",
    dotBg: "bg-rose-100",
    dotColor: "bg-red-700",
  },
  {
    title: "Warning",
    description: "Needs review; may allow progression.",
    dotBg: "bg-orange-100",
    dotColor: "bg-yellow-700",
  },
  {
    title: "Information",
    description: "Non-blocking context.",
    dotBg: "bg-violet-100",
    dotColor: "bg-sky-600",
  },
  {
    title: "Quarantine",
    description: "Isolates unsafe or invalid intake.",
    dotBg: "bg-slate-100",
    dotColor: "bg-gray-400",
  },
];

const issues = [
  {
    input: "E-10432 · Base rate",
    issue: "Missing effective date",
    severity: "Blocker",
    severityBg: "bg-rose-100",
    severityDot: "bg-red-700",
    severityText: "text-red-700",
    owner: "HR Ops",
    action: "Correct at source",
  },
  {
    input: "E-10488 · Timesheet",
    issue: "Hours exceed configured limit",
    severity: "Warning",
    severityBg: "bg-orange-100",
    severityDot: "bg-yellow-700",
    severityText: "text-yellow-700",
    owner: "Payroll",
    action: "Acknowledge",
  },
  {
    input: "E-10501 · Bank detail",
    issue: "New account, unverified",
    severity: "Information",
    severityBg: "bg-violet-100",
    severityDot: "bg-sky-600",
    severityText: "text-sky-600",
    owner: "Payroll",
    action: "Request info",
  },
  {
    input: "Batch #4471",
    issue: "Malformed file rows",
    severity: "Quarantine",
    severityBg: "bg-slate-100",
    severityDot: "bg-gray-400",
    severityText: "text-slate-600",
    owner: "Integrations",
    action: "View history",
  },
];

export default function SeverityWorkbenchSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 lg:px-40 flex flex-col justify-start items-center gap-8">
        <Reveal className="w-full flex flex-col items-center gap-8">
          {/* Header */}
          <div className="w-full max-w-[660px] flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="w-4 h-px bg-sky-600" />
              <div className="text-center text-sky-600 text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest">
                SEVERITY &amp; EXCEPTION WORKBENCH
              </div>
              <div className="w-4 h-px bg-sky-600" />
            </div>
            <div className="self-stretch pt-px flex flex-col justify-start items-center">
              <h2 className="text-center text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
                Four severities. No generic &quot;Ignore&quot;
              </h2>
            </div>
            <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-center">
              <p className="text-center text-gray-500 text-base font-normal font-['Inter'] leading-6">
                Every issue routes to the right owner with a real next action.
              </p>
            </div>
          </div>

          {/* Severity Cards Grid */}
          <div className="self-stretch pt-0.5 flex flex-wrap justify-center items-center gap-3.5">
            {severities.map((item) => (
              <div
                key={item.title}
                className="w-[268px] h-[71px] px-3.5 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-[2.75px]"
              >
                <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                  <div className="relative w-3 h-4 flex items-center justify-center shrink-0">
                    <Image
                      src="/blue.png"
                      alt="checkmark"
                      width={10}
                      height={10}
                      className="object-contain"
                    />
                  </div>
                  <div className="pr-1.5 inline-flex flex-col justify-start items-start">
                    <div className={`pl-1.5 pr-2 py-1 ${item.dotBg} rounded-[100px] inline-flex justify-start items-center`}>
                      <div className={`w-1.5 h-1.5 ${item.dotColor} rounded-[3px]`} />
                    </div>
                  </div>
                  <div className="text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                    {item.title}
                  </div>
                </div>
                <div className="self-stretch pb-[0.75px] flex flex-col justify-start items-start">
                  <p className="self-stretch text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Exception Workbench Box */}
          <div className="w-full max-w-[1100px] bg-white rounded-2xl shadow-[0px_20px_60px_0px_rgba(8,21,44,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
            {/* Window Top Bar */}
            <div className="self-stretch px-4 py-3 bg-slate-50 border-b border-gray-100 inline-flex justify-start items-center gap-2">
              <div className="flex justify-start items-start gap-1.5">
                <div className="w-2 h-2 bg-slate-200 rounded-sm" />
                <div className="w-2 h-2 bg-slate-200 rounded-sm" />
                <div className="w-2 h-2 bg-slate-200 rounded-sm" />
              </div>
              <div className="pl-1.5 inline-flex flex-col justify-start items-start">
                <div className="text-gray-400 text-xs font-normal font-['Inter'] leading-4">
                  Exception Workbench
                </div>
              </div>
            </div>

            {/* Workbench Content */}
            <div className="self-stretch px-6 py-5 flex flex-col justify-start items-start gap-4">
              {/* Filter Bar */}
              <div className="self-stretch pb-4 border-b border-gray-100 inline-flex justify-start items-center gap-2.5 flex-wrap content-center">
                <div className="px-2.5 py-1.5 bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-center gap-1.5">
                  <span className="text-gray-700 text-xs font-normal font-['Inter'] leading-4">Entity</span>
                  <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">All</span>
                </div>
                <div className="px-2.5 py-1.5 bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-center gap-1.5">
                  <span className="text-gray-700 text-xs font-normal font-['Inter'] leading-4">Severity</span>
                  <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">All</span>
                </div>
                <div className="px-2.5 py-1.5 bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-center gap-1.5">
                  <span className="text-gray-700 text-xs font-normal font-['Inter'] leading-4">Owner</span>
                  <span className="text-slate-900 text-xs font-semibold font-['Inter'] leading-4">All</span>
                </div>
                <div className="flex-1 min-w-24 flex flex-col justify-start items-end">
                  <div className="text-gray-400 text-xs font-normal font-['Inter'] leading-4">
                    42 open issues
                  </div>
                </div>
              </div>

              {/* Table wrapper */}
              <div className="self-stretch overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-gray-400 text-xs font-semibold font-['Inter'] uppercase tracking-wide">
                      <th className="py-3 px-3 w-56 font-semibold">Affected input</th>
                      <th className="py-3 px-3 w-80 font-semibold">Issue</th>
                      <th className="py-3 px-3 w-48 font-semibold">Severity</th>
                      <th className="py-3 px-3 w-36 font-semibold">Owner</th>
                      <th className="py-3 px-3 w-48 font-semibold">Next action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {issues.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="w-56 px-3 py-3.5 text-slate-900 text-sm font-semibold font-['Inter'] leading-5">
                          {row.input}
                        </td>
                        <td className="w-80 px-3 py-3.5 text-gray-700 text-sm font-normal font-['Inter'] leading-5">
                          {row.issue}
                        </td>
                        <td className="w-48 p-3">
                          <div className={`pl-1.5 pr-2 py-1 ${row.severityBg} rounded-[100px] inline-flex justify-start items-center gap-1.5`}>
                            <div className={`w-1.5 h-1.5 ${row.severityDot} rounded-[3px]`} />
                            <span className={`${row.severityText} text-xs font-semibold font-['Inter'] leading-4 tracking-tight`}>
                              {row.severity}
                            </span>
                          </div>
                        </td>
                        <td className="w-36 px-3 py-3.5 text-gray-700 text-sm font-normal font-['Inter'] leading-5">
                          {row.owner}
                        </td>
                        <td className="w-48 px-3 py-3.5 text-sky-600 text-xs font-semibold font-['Inter'] leading-5 cursor-pointer hover:underline">
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}