import Reveal from "../ui/Reveal";

export default function StandardizeScopeSection() {
  return (
    <section className="bg-white border-t border-[#e3e7ec] py-16 sm:py-24 relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[16px] items-center">
        
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row gap-[44px] items-center justify-center w-full max-w-[1143px]">
          {/* Text */}
          <Reveal className="flex flex-col gap-[14px] items-start w-full lg:flex-[1_0_0]">
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
                05 — STANDARDIZE WITHOUT FLATTENING SCOPE
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[36px] tracking-[-1px] leading-[44px] m-0">
                Standardize for repeatability.<br className="hidden lg:block" />
                Scope what must vary
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[1px]">
              <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
                Jurisdiction, provider, entity and contract differences are real. They belong<br className="hidden lg:block" />
                in scoped variation, not in forked processes.
              </p>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={120} className="w-full lg:w-auto flex justify-center shrink-0">
            <div className="bg-[#eef0f4] border border-[#e3e7ec] h-auto lg:h-[375px] overflow-hidden relative rounded-[16px] w-full max-w-[500px] shrink-0">
              <div className="absolute lg:h-[372px] lg:-left-[46px] lg:-top-[1.75px] w-full lg:w-[557px] inset-0 lg:inset-auto">
                <img
                  src="/images/enterprise-organizations/standardize.png"
                  alt="Standardize scope dashboard"
                  loading="lazy"
                  className="absolute inset-0 max-w-none object-cover size-full pointer-events-none"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row gap-[16px] items-stretch justify-center pt-[22px] w-full max-w-[1143px]">
          
          {/* Left Column */}
          <Reveal delay={200} className="flex flex-[1_0_0] min-w-px shrink-0">
            <div className="bg-white border-b border-l border-r border-t-[3px] border-b-[#2049c9] border-l-[#2049c9] border-r-[#2049c9] border-t-[#2049c9] flex flex-col items-start rounded-[12px] w-full overflow-hidden">
              <div className="border-b border-[#e3e7ec] flex flex-col gap-[3px] items-start px-[18px] py-[16px] w-full bg-white">
                <p className="font-bold text-[#0b1220] text-[14.5px] m-0 leading-normal">
                  Standardize enterprise-wide
                </p>
                <p className="font-normal text-[#6b7280] text-[11.5px] m-0 leading-normal">
                  Repeatable, comparable, evidenced
                </p>
              </div>
              
              <div className="flex flex-col items-start pb-[16px] pt-[6px] px-[18px] w-full bg-white">
                {[
                  "Object model: organization, entity, group, cycle, change, approval, report, integration, audit event",
                  "Named role patterns and approval evidence",
                  "Calendar structure and metric definitions",
                  "Data-contract direction, mapping, version and health",
                  "Security principles"
                ].map((text, idx, arr) => (
                  <div key={idx} className={`${idx !== arr.length - 1 ? 'border-b border-[#f1f3f6]' : ''} flex gap-[9px] items-start py-[10px] w-full`}>
                    <p className="font-bold text-[#2049c9] text-[12.5px] whitespace-nowrap m-0 leading-normal">
                      ✓
                    </p>
                    <p className="font-normal text-[#1f2937] text-[12.5px] m-0 leading-normal">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column */}
          <Reveal delay={300} className="flex flex-[1_0_0] min-w-px shrink-0">
            <div className="bg-white border-b border-l border-r border-t-[3px] border-b-[#a75d06] border-l-[#a75d06] border-r-[#a75d06] border-t-[#a75d06] flex flex-col items-start rounded-[12px] w-full overflow-hidden">
              <div className="border-b border-[#e3e7ec] flex flex-col gap-[3px] items-start px-[18px] py-[16px] w-full bg-white">
                <p className="font-bold text-[#0b1220] text-[14.5px] m-0 leading-normal">
                  Scope and vary by context
                </p>
                <p className="font-normal text-[#6b7280] text-[11.5px] m-0 leading-normal">
                  Reason, owner, version and status recorded
                </p>
              </div>
              
              <div className="flex flex-col items-start pb-[16px] pt-[6px] px-[18px] w-full bg-white">
                {[
                  "Jurisdiction and provider-specific fields",
                  "Role assignment and delegation",
                  "Approval order and conditions",
                  "Frequency, cutoffs, holidays, provider windows",
                  "Currency and entity scope",
                  "Connector availability, fields and provider behaviour"
                ].map((text, idx, arr) => (
                  <div key={idx} className={`${idx !== arr.length - 1 ? 'border-b border-[#f1f3f6]' : ''} flex gap-[9px] items-start py-[10px] w-full`}>
                    <p className="font-bold text-[#a75d06] text-[12.5px] whitespace-nowrap m-0 leading-normal">
                      ◇
                    </p>
                    <p className="font-normal text-[#1f2937] text-[12.5px] m-0 leading-normal">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pipeline Card */}
        <Reveal delay={400} className="w-full max-w-[1143px]">
          <div className="bg-white border border-[#e3e7ec] flex flex-col items-start overflow-hidden rounded-[14px] w-full mt-4">
            
            <div className="border-b border-[#e3e7ec] flex flex-wrap gap-x-[10px] items-center px-[18px] py-[14px] w-full bg-white">
              <p className="font-bold text-[#0b1220] text-[12.5px] whitespace-nowrap m-0 leading-normal">
                Configuration detail · Approval order
              </p>
              <p className="font-normal text-[#6b7280] text-[11px] whitespace-nowrap m-0 leading-normal">
                One enterprise standard with one scoped entity variation
              </p>
            </div>

            <div className="bg-[#e3e7ec] flex flex-col lg:flex-row gap-px items-stretch justify-center w-full">
              
              {/* Enterprise Standard */}
              <div className="bg-white flex flex-[1_0_0] flex-col gap-[12px] items-start p-[18px] w-full">
                <div className="flex gap-[8px] items-center w-full">
                  <p className="font-bold text-[#2049c9] text-[11px] tracking-[1.1px] whitespace-nowrap m-0 leading-normal">
                    ENTERPRISE STANDARD
                  </p>
                  <div className="bg-[#e8f5f0] px-[8px] py-[3px] rounded-[999px]">
                    <p className="font-semibold text-[#0e7c5a] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                      ✓ Configured
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-[6px] items-center w-full">
                  <div className="bg-[#f1f3f6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Preparer</p>
                  </div>
                  <div className="pb-px">
                    <p className="font-normal text-[#c3c9d2] text-[11.5px] whitespace-nowrap m-0 leading-normal">→</p>
                  </div>
                  <div className="bg-[#f1f3f6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Reviewer</p>
                  </div>
                  <div className="pb-px">
                    <p className="font-normal text-[#c3c9d2] text-[11.5px] whitespace-nowrap m-0 leading-normal">→</p>
                  </div>
                  <div className="bg-[#f1f3f6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Approver</p>
                  </div>
                </div>

                <div className="pt-[1.39px] w-full">
                  <p className="font-normal text-[#6b7280] text-[11.5px] leading-[18.4px] m-0">
                    Owner: Payroll operations admin<br/>
                    Version: v9 · Effective 01 Jul 2026<br/>
                    Evidence: EVD-2104
                  </p>
                </div>
              </div>

              {/* Scoped Variation */}
              <div className="bg-[#fffcf8] flex flex-[1_0_0] flex-col gap-[12px] items-start p-[18px] w-full">
                <div className="flex gap-[8px] items-center w-full">
                  <p className="font-bold text-[#a75d06] text-[11px] tracking-[1.1px] whitespace-nowrap m-0 leading-normal">
                    SCOPED VARIATION · NORTHWIND DEUTSCHLAND
                  </p>
                  <div className="bg-[#fdf3e3] px-[8px] py-[3px] pb-[4px] rounded-[999px]">
                    <p className="font-semibold text-[#a75d06] text-[10.5px] whitespace-nowrap m-0 leading-normal">
                      ▲ Needs review
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-[6px] gap-y-[4px] items-center w-full">
                  <div className="bg-white border border-[#e9dcc6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Preparer</p>
                  </div>
                  <div className="pb-px">
                    <p className="font-normal text-[#c3c9d2] text-[11.5px] whitespace-nowrap m-0 leading-normal">→</p>
                  </div>
                  <div className="bg-white border border-[#e9dcc6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Reviewer</p>
                  </div>
                  <div className="pb-px">
                    <p className="font-normal text-[#c3c9d2] text-[11.5px] whitespace-nowrap m-0 leading-normal">→</p>
                  </div>
                  <div className="bg-white border border-[#e9dcc6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Works council check</p>
                  </div>
                  <div className="pb-px">
                    <p className="font-normal text-[#c3c9d2] text-[11.5px] whitespace-nowrap m-0 leading-normal">→</p>
                  </div>
                  <div className="bg-white border border-[#e9dcc6] px-[10px] py-[6px] rounded-[7px]">
                    <p className="font-semibold text-[#1f2937] text-[11.5px] whitespace-nowrap m-0 leading-normal">Approver</p>
                  </div>
                </div>

                <div className="pt-[1.39px] w-full">
                  <p className="font-normal text-[#6b7280] text-[11.5px] leading-[18.4px] m-0">
                    Reason: local consultation requirement<br/>
                    Owner: L. Brandt · Version v3 · Submitted 14 Aug<br/>
                    Evidence: EVD-2251
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
