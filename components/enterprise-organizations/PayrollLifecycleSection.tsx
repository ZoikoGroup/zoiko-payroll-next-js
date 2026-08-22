import Reveal from "../ui/Reveal";

export default function PayrollLifecycleSection() {
  return (
    <section className="bg-white border-t border-[#e3e7ec] py-16 sm:py-[70px] relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[16px] items-center">
        
        {/* Top Split */}
        <div className="flex flex-col-reverse lg:flex-row gap-[32px] xl:gap-[44px] items-center w-full">
          
          {/* Image */}
          <Reveal delay={120} className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
            <div className="bg-[#eef0f4] border border-[#e3e7ec] h-[315px] xl:h-[340px] overflow-hidden relative rounded-[16px] w-full lg:w-[400px] xl:w-[450px]">
              <div className="absolute inset-0 -left-[1px] -top-[1.14px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src="/images/enterprise-organizations/payroll-lifecycle.png"
                    alt="Payroll lifecycle dashboard"
                    loading="lazy"
                    className="absolute h-full -left-[2.24%] max-w-none top-0 w-[112.68%] object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal className="flex flex-col gap-[14px] items-start w-full lg:flex-[1_0_0]">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
                06 — PAYROLL LIFECYCLE
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[28px] lg:text-[32px] xl:text-[36px] tracking-[-1.5px] leading-[1.2] m-0">
                A controlled payroll cycle where every<br className="hidden md:block" />
                stage has a clear owner, scope,<br className="hidden md:block" />
                version, and status.
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[0.78px]">
              <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
                One payroll group, six stages. Scope, owner, version and cross-group status<br className="hidden xl:block" />
                are explicit at each step.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bottom Details Layout */}
        <div className="flex gap-[16px] items-stretch w-full flex-col lg:flex-row mt-[6px]">
          
          {/* Left card: Org Tree */}
          <Reveal delay={200} className="flex shrink-0 w-full lg:w-[501px]">
            <div className="bg-white border border-[#e3e7ec] flex flex-col gap-[14px] items-start px-[15px] py-[20px] rounded-[14px] w-full h-full">
              <div className="pb-[2px]">
                <p className="font-bold text-[#0b1220] text-[12.5px] m-0 leading-normal">
                  Organization → Entity → Payroll Group → Period
                </p>
              </div>
              
              <div className="flex flex-col items-start w-full">
                
                {/* Level 1 */}
                <div className="flex gap-[8px] items-center py-[9px] w-full">
                  <p className="font-semibold text-[#0b1220] text-[12px] whitespace-nowrap m-0 leading-normal">
                    Northwind Global Holdings
                  </p>
                  <p className="font-normal text-[#6b7280] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                    14 entities
                  </p>
                </div>

                {/* Level 2: UK */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-wrap gap-x-[8px] items-center py-[8px] w-full">
                    <p className="font-semibold text-[#0b1220] text-[12px] whitespace-nowrap m-0 leading-normal">
                      Northwind UK Ltd
                    </p>
                    <p className="font-normal text-[#6b7280] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                      GB · Active
                    </p>
                    <div className="bg-[#fdf3e3] px-[7px] pt-[2px] pb-[3px] rounded-[999px]">
                      <p className="font-semibold text-[#a75d06] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                        ▲ Needs review
                      </p>
                    </div>
                  </div>

                  {/* Level 3: UK Payroll Groups */}
                  <div className="flex flex-col items-start pl-[16px] w-full">
                    <div className="flex flex-wrap gap-x-[8px] items-center py-[7px] w-full">
                      <p className="font-normal text-[#1f2937] text-[12px] whitespace-nowrap m-0 leading-normal">
                        UK-MONTHLY-01
                      </p>
                      <p className="font-normal text-[#6b7280] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                        Monthly · Aug 2026 · cutoff 21 Aug
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-[8px] items-center py-[7px] w-full">
                      <p className="font-normal text-[#1f2937] text-[12px] whitespace-nowrap m-0 leading-normal">
                        UK-WEEKLY-05
                      </p>
                      <p className="font-normal text-[#6b7280] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                        Weekly · W33 · cutoff 19 Aug
                      </p>
                      <p className="font-semibold text-[#0e7c5a] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                        ✓ Ready
                      </p>
                    </div>
                  </div>
                </div>

                {/* Level 2: Germany */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-wrap gap-x-[8px] items-center py-[8px] w-full">
                    <p className="font-semibold text-[#0b1220] text-[12px] whitespace-nowrap m-0 leading-normal">
                      Northwind Deutschland GmbH
                    </p>
                    <p className="font-normal text-[#6b7280] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                      DE · Active
                    </p>
                    <div className="bg-[#fdecea] px-[7px] pt-[2px] pb-[3px] rounded-[999px]">
                      <p className="font-semibold text-[#b42318] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                        ● Blocked
                      </p>
                    </div>
                  </div>

                  {/* Level 3: Germany Payroll Groups */}
                  <div className="flex flex-col items-start pl-[16px] w-full">
                    <div className="flex flex-wrap gap-x-[8px] items-center py-[7px] w-full">
                      <p className="font-normal text-[#1f2937] text-[12px] whitespace-nowrap m-0 leading-normal">
                        DE-MONTHLY-02
                      </p>
                      <p className="font-normal text-[#6b7280] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                        Monthly · Aug 2026 · cutoff 20 Aug
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right card: Payroll Calendar Details */}
          <Reveal delay={300} className="flex flex-[1_0_0] min-w-px shrink-0 w-full lg:w-auto h-full">
            <div className="bg-white border border-[#e3e7ec] flex flex-col gap-[14px] items-start p-[20px] rounded-[14px] w-full h-full">
              <p className="font-bold text-[#0b1220] text-[12.5px] m-0 leading-normal">
                Payroll calendar · UK-MONTHLY-01
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[11px] gap-x-[20px] w-full">
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Period start</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">01 Aug 2026</p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Period end</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">31 Aug 2026</p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Input cutoff</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">21 Aug 17:00</p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Review due</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">24 Aug 12:00</p>
                </div>

                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Approval due</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">25 Aug 12:00</p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Pay date</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">28 Aug 2026</p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Timezone</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">Europe/London</p>
                </div>
                <div className="flex flex-col gap-[5px] items-start w-full">
                  <p className="font-normal text-[#6b7280] text-[10.5px] m-0 leading-normal">Service model</p>
                  <p className="font-semibold text-[#0b1220] text-[12px] m-0 leading-normal">Managed review</p>
                </div>
              </div>

              <div className="border-t border-[#f1f3f6] flex flex-col items-start pt-[16px] w-full mt-auto">
                <p className="font-normal text-[#6b7280] text-[11.5px] leading-[17.83px] m-0">
                  Entity record carries name, ID, jurisdiction, status, payroll groups, owner, service model and reporting<br className="hidden lg:block" />
                  context.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
