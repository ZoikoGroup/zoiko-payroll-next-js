import Reveal from "../ui/Reveal";

export default function CalculationTraceSection() {
  const tableData = [
    {
      component: "Base salary",
      amount: "£4,200.00",
      effectiveDate: "Aug 01",
      ruleFamily: "Compensation",
      status: "No",
      statusBg: "bg-slate-100",
      dotBg: "bg-gray-400",
      textColor: "text-slate-600",
    },
    {
      component: "Overtime premium",
      amount: "£620.00",
      effectiveDate: "Aug 18",
      ruleFamily: "Earnings",
      status: "Input changed",
      statusBg: "bg-orange-100",
      dotBg: "bg-yellow-700",
      textColor: "text-yellow-700",
    },
    {
      component: "Income tax",
      amount: "£980.00",
      effectiveDate: "Aug 01",
      ruleFamily: "Statutory — UK",
      status: "Rule updated",
      statusBg: "bg-[#E7EDFD]",
      dotBg: "bg-[#0A78C3]",
      textColor: "text-[#0A78C3]",
    },
  ];

  return (
    <section className="w-full py-[84px] flex flex-col justify-center items-center overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        {/* Header Content */}
        <Reveal className="w-full max-w-[900px] flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-4 h-px bg-[#0A78C3]" />
            <span className="text-xs font-semibold font-['Inter'] uppercase leading-4 tracking-widest text-[#0A78C3]">
              CALCULATION TRACE
            </span>
          </div>
          <h2 className="pt-px text-center text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight sm:leading-9">
            See how a result was built — and why it changed
          </h2>
          <p className="pb-[0.59px] text-center text-gray-500 text-base font-normal font-['Inter'] leading-6">
            Every component links back to its source, rule and effective date.
          </p>
        </Reveal>

        {/* Trace Window Card */}
        <Reveal delay={100} className="w-full max-w-[1100px] bg-white rounded-2xl shadow-[0px_20px_60px_0px_rgba(8,21,44,0.08)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
          {/* Window Header Bar */}
          <div className="self-stretch px-4 py-3 bg-[rgba(246,248,251,1)] border-b border-[rgba(237,240,245,1)] inline-flex justify-start items-center gap-2">
            <div className="flex justify-start items-start gap-1.5">
              <div className="w-2.5 h-2.5 bg-slate-200 rounded-full" />
              <div className="w-2.5 h-2.5 bg-slate-200 rounded-full" />
              <div className="w-2.5 h-2.5 bg-slate-200 rounded-full" />
            </div>
            <div className="pl-1.5 inline-flex flex-col justify-start items-start">
              <span className="text-gray-400 text-xs font-normal font-['Inter'] leading-4">
                Trace — E-10432 · Aug 2026
              </span>
            </div>
          </div>

          <div className="self-stretch p-4 sm:p-6 flex flex-col justify-start items-start gap-5">
            {/* Metric Summary Cards */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="px-4 py-3.5 bg-[rgba(246,248,251,1)] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[rgba(227,231,238,1)] flex flex-col justify-start items-start gap-px">
                <div className="text-slate-900 text-2xl font-semibold font-['Inter'] leading-9">
                  £4,820
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-4">
                  Gross earnings
                </div>
              </div>
              <div className="px-4 py-3.5 bg-[rgba(246,248,251,1)] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[rgba(227,231,238,1)] flex flex-col justify-start items-start gap-px">
                <div className="text-slate-900 text-2xl font-semibold font-['Inter'] leading-9">
                  £1,240
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-4">
                  Employee statutory
                </div>
              </div>
              <div className="px-4 py-3.5 bg-[rgba(246,248,251,1)] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[rgba(227,231,238,1)] flex flex-col justify-start items-start gap-px">
                <div className="text-slate-900 text-2xl font-semibold font-['Inter'] leading-9">
                  £470
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-4">
                  Voluntary deductions
                </div>
              </div>
              <div className="px-4 py-3.5 bg-[rgba(246,248,251,1)] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[rgba(227,231,238,1)] flex flex-col justify-start items-start gap-px">
                <div className="text-slate-900 text-2xl font-semibold font-['Inter'] leading-9">
                  £3,110
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-4">
                  Net pay
                </div>
              </div>
            </div>

            {/* Table Container with horizontal scroll on small screens */}
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-gray-400 text-xs font-semibold font-['Inter'] uppercase tracking-wide">
                    <th className="pb-3 px-3 font-semibold">Component</th>
                    <th className="pb-3 px-3 font-semibold">Amount</th>
                    <th className="pb-3 px-3 font-semibold">Effective date</th>
                    <th className="pb-3 px-3 font-semibold">Rule family</th>
                    <th className="pb-3 px-3 font-semibold">Changed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableData.map((row) => (
                    <tr key={row.component} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-3 text-slate-900 text-sm font-semibold font-['Inter']">
                        {row.component}
                      </td>
                      <td className="py-3.5 px-3 text-gray-500 text-xs font-normal font-['Inter']">
                        {row.amount}
                      </td>
                      <td className="py-3.5 px-3 text-gray-500 text-xs font-normal font-['Inter']">
                        {row.effectiveDate}
                      </td>
                      <td className="py-3.5 px-3 text-gray-500 text-xs font-normal font-['Inter']">
                        {row.ruleFamily}
                      </td>
                      <td className="py-3.5 px-3">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${row.statusBg} rounded-full`}>
                          <span className={`w-1.5 h-1.5 ${row.dotBg} rounded-full`} />
                          <span className={`${row.textColor} text-xs font-semibold font-['Inter'] leading-4`}>
                            {row.status}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Run Info Footer */}
            <div className="w-full px-3.5 py-3 bg-slate-50 rounded-lg flex flex-col justify-start items-start border border-slate-100">
              <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                Run ref CALC-88213 · Config version v6.2 · Snapshot 09:40 UTC
              </span>
            </div>
          </div>
        </Reveal>

        {/* Security / Privacy Banner */}
        <Reveal delay={200} className="w-full max-w-[700px] px-4 py-2.5 bg-[#E7EDFD] rounded-r-lg border-l-[3px] border-[#0A78C3] text-center mt-2">
          <p className="text-slate-900 text-sm font-normal font-['Inter'] leading-5">
            Never shows bank accounts, tax IDs, national IDs or authentic employee records.
          </p>
        </Reveal>
      </div>
    </section>
  );
}