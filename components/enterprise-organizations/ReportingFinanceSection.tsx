import Reveal from "../ui/Reveal";

export default function ReportingFinanceSection() {
  return (
    <section className="bg-white border-t border-[#e3e7ec] py-16 sm:py-[70px] relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px] items-center">
        
        {/* Top Split */}
        <div className="flex flex-col-reverse lg:flex-row gap-[32px] xl:gap-[44px] items-center w-full">
          
          {/* Image (Left) */}
          <Reveal delay={120} className="w-full lg:w-[400px] xl:w-[500px] shrink-0">
            <div className="bg-[#eef0f4] border border-[#e3e7ec] h-[315px] xl:h-[375px] overflow-hidden relative rounded-[16px] w-full lg:w-[400px] xl:w-[500px]">
              <div className="absolute inset-0 left-[-12.4%] top-[-0.15%] w-[112.6%] h-full">
                <img
                  src="http://localhost:3845/assets/02a5ed48b26c65782b0a206149ec8b17fbef521a.png"
                  alt="Reporting and finance control dashboard"
                  loading="lazy"
                  className="absolute inset-0 max-w-none object-cover size-full"
                />
              </div>
            </div>
          </Reveal>

          {/* Text (Right) */}
          <Reveal className="flex flex-col gap-[14px] items-start w-full lg:flex-[1_0_0]">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
                08 — REPORTING & FINANCE CONTROL
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[28px] lg:text-[32px] xl:text-[36px] tracking-[-1.5px] leading-[1.2] m-0">
                Reporting that drills back to the<br className="hidden md:block" />
                record
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[0.78px]">
              <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
                Every metric states definition, currency, scope, source and version. Period,<br className="hidden xl:block" />
                entity and version context is preserved on the way down.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bottom Details Layout */}
        <Reveal delay={200} className="w-full overflow-hidden rounded-[14px] border border-[#e3e7ec] bg-white mt-[10px]">
          {/* Top Bar */}
          <div className="border-b border-[#e3e7ec] flex items-center justify-between px-[18px] py-[16px] w-full">
            <div className="flex items-center gap-[12px] flex-wrap">
              <p className="font-bold text-[#0b1220] text-[12.5px] m-0 leading-normal whitespace-nowrap">
                Reconciliation workspace
              </p>
              <p className="font-normal text-[#6b7280] text-[11px] m-0 leading-normal whitespace-nowrap hidden sm:block">
                Aug 2026 · EMEA · approved output vs downstream receipt
              </p>
            </div>
            <div className="bg-[#fdf3e3] px-[9px] py-[4px] rounded-[999px] shrink-0">
              <p className="font-semibold text-[#a75d06] text-[11px] m-0 leading-normal whitespace-nowrap">
                ▲ 1 partial · not reconciled
              </p>
            </div>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[940px] text-left border-collapse">
              <thead className="bg-[#fafbfc]">
                <tr>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Entity · group</th>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Period</th>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Approved output</th>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Downstream received</th>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Variance</th>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Owner</th>
                  <th className="px-[14px] py-[11px] border-b border-[#e3e7ec] font-semibold text-[#6b7280] text-[11.5px] whitespace-nowrap">Next action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Northwind UK · UK-MONTHLY-01</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">Aug 2026</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">GBP 4,182,940.00</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#a75d06] text-[11.5px]">▲ Awaiting approval</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">—</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">S. Okafor</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">Complete approval, then post</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Northwind DE · DE-MONTHLY-02</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">Aug 2026</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">EUR 2,914,205.60</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#b42318] text-[11.5px]">● Partial (38 records)</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#b42318] text-[11.5px]">EUR 18,402.15</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">L. Brandt</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">Retry batch 4471, re-check</td>
                </tr>
                <tr className="bg-white border-b border-[#eef0f4]">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Northwind FR · FR-MONTHLY-03</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">Jul 2026</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">EUR 3,377,110.40</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#0e7c5a] text-[11.5px]">✓ Matched</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">EUR 0.00</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">S. Okafor</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">Close evidence filed</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-[14px] py-[12px] font-semibold text-[#0b1220] text-[11.5px]">Northwind ES · ES-WEEKLY-04</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">W33 2026</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">EUR 611,338.90</td>
                  <td className="px-[14px] py-[12px] font-semibold text-[#0e7c5a] text-[11.5px]">✓ Matched</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">EUR 0.00</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">M. Duarte</td>
                  <td className="px-[14px] py-[12px] text-[#1f2937] text-[11.5px]">None</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Footer */}
          <div className="bg-[#fafbfc] border-t border-[#e3e7ec] px-[18px] py-[12px] w-full">
            <p className="font-normal text-[#6b7280] text-[11px] leading-normal m-0">
              Totals are not summed across currencies without an explicit conversion basis. Restatements and exclusions are shown against the stated baseline.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
