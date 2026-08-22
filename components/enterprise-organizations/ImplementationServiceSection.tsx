"use client";

import React from "react";
import Reveal from "../ui/Reveal";

export default function ImplementationServiceSection() {
  return (
    <section className="bg-white border-t border-[#e3e7ec] py-16 sm:py-[70px] relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px] items-center">
        
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row gap-[32px] xl:gap-[44px] items-center w-full">
          
          {/* Image (Left) */}
          <Reveal delay={120} className="w-full lg:w-[400px] xl:w-[500px] shrink-0">
            <div className="bg-[#eef0f4] border border-[#e3e7ec] h-[315px] xl:h-[375px] overflow-hidden relative rounded-[16px] w-full lg:w-[400px] xl:w-[500px]">
              <div className="absolute inset-0 left-[-6.8%] top-[-0.3%] w-[112.4%] h-[100%]">
                <img
                  src="http://localhost:3845/assets/2a52af53c6e02a4fcaa9a005e658ae1cc78eb415.png"
                  alt="Implementation stages and service cadence"
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
                10 — IMPLEMENTATION & SERVICE CADENCE
              </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-[#0b1220] text-[28px] lg:text-[32px] xl:text-[40px] tracking-[-1px] leading-[1.1] m-0">
                Staged rollout with gates and<br className="hidden md:block" />
                exit evidence
              </h2>
            </div>
            <div className="flex flex-col items-start w-full pt-[0.78px]">
              <p className="font-normal text-[#4b5563] text-[16px] xl:text-[16.5px] leading-[25.58px] m-0">
                Nine phases, each with a named owner and the evidence needed to exit.<br className="hidden xl:block" />
                Waves go live by entity and payroll group, never all at once.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Nine Phases Grid */}
        <Reveal delay={200} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px] w-full">
            {/* Phase 01 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">01</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Discover</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Program sponsor</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: scope manifest + owner map</p>
              </div>
            </div>
            
            {/* Phase 02 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">02</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Design</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Solution lead</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: approved configuration<br/>workbook</p>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">03</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Prepare data</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Data lead</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: migration readiness +<br/>reconciliation plan</p>
              </div>
            </div>

            {/* Phase 04 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">04</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Configure</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Payroll ops admin</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: configured environment + review<br/>evidence</p>
              </div>
            </div>

            {/* Phase 05 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">05</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Validate</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Entity owners</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: acceptance evidence + issue<br/>register</p>
              </div>
            </div>

            {/* Phase 06 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">06</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Parallel run</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Finance + payroll</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: variance / reconciliation sign-off</p>
              </div>
            </div>

            {/* Phase 07 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">07</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Launch by wave</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Cutover authority</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: GO/HOLD/ROLLBACK +<br/>monitoring</p>
              </div>
            </div>

            {/* Phase 08 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px]">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">08</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Stabilize</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Service lead</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: stabilization sign-off</p>
              </div>
            </div>

            {/* Phase 09 */}
            <div className="bg-[#fafbfc] border border-[#e3e7ec] p-[15px] rounded-[11px] flex flex-col gap-[6.9px] lg:col-span-2">
              <div className="flex gap-[8px] items-baseline whitespace-nowrap">
                <span className="text-[#2049c9] font-bold text-[10.5px]">09</span>
                <span className="text-[#0b1220] font-bold text-[13px]">Operate</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4b5563] text-[11.5px] leading-[17.8px] m-0">Owner: Payroll operations</p>
                <p className="text-[#6b7280] text-[11.5px] leading-[17.8px] m-0">Exit: cadence + improvement backlog</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Boards Section */}
        <Reveal delay={300} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
            
            {/* Wave / cutover board */}
            <div className="bg-white border border-[#e3e7ec] rounded-[14px] flex flex-col overflow-hidden w-full">
              <div className="border-b border-[#e3e7ec] px-[18px] py-[14px] flex justify-between items-center gap-[16px]">
                <h3 className="font-bold text-[#0b1220] text-[12.5px] m-0">Wave / cutover board</h3>
                <span className="text-[#6b7280] text-[11px] font-normal hidden sm:block">Cutover authority: Program sponsor</span>
              </div>
              <div className="p-[16px] flex flex-col gap-[9px]">
                
                {/* Wave 1 */}
                <div className="border border-[#e3e7ec] rounded-[10px] p-[12px] flex justify-between items-center gap-[12px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Wave 1 · Northwind UK, Ireland</span>
                    <span className="text-[#6b7280] text-[11px]">3 payroll groups · parallel run complete · monitoring on</span>
                  </div>
                  <div className="bg-[#e8f5f0] text-[#0e7c5a] px-[10px] py-[5px] rounded-[7px] font-bold text-[11px] whitespace-nowrap">✓ GO</div>
                </div>

                {/* Wave 2 */}
                <div className="border border-[#e3e7ec] rounded-[10px] p-[12px] flex justify-between items-center gap-[12px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Wave 2 · Northwind Deutschland</span>
                    <span className="text-[#6b7280] text-[11px]">2 payroll groups · works council check open</span>
                  </div>
                  <div className="bg-[#fdf3e3] text-[#a75d06] px-[10px] py-[5px] rounded-[7px] font-bold text-[11px] whitespace-nowrap">▲ HOLD</div>
                </div>

                {/* Wave 3 */}
                <div className="border border-[#e3e7ec] rounded-[10px] p-[12px] flex justify-between items-center gap-[12px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Wave 3 · Northwind France, Iberia</span>
                    <span className="text-[#6b7280] text-[11px]">5 payroll groups · validate in progress</span>
                  </div>
                  <div className="bg-[#f1f3f6] text-[#4b5563] px-[10px] py-[5px] rounded-[7px] font-bold text-[11px] whitespace-nowrap">◐ Scheduled</div>
                </div>

                {/* Wave 0 */}
                <div className="bg-[#fffafa] border border-[#e3e7ec] rounded-[10px] p-[12px] flex justify-between items-center gap-[12px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Wave 0 · Pilot group (closed)</span>
                    <span className="text-[#6b7280] text-[11px]">Rollback executed 04 Jul · cause mapping v3.1 defect</span>
                  </div>
                  <div className="bg-[#fdecea] text-[#b42318] px-[10px] py-[5px] rounded-[7px] font-bold text-[11px] whitespace-nowrap">● ROLLBACK</div>
                </div>
              </div>
            </div>

            {/* Governance cadence */}
            <div className="bg-white border border-[#e3e7ec] rounded-[14px] flex flex-col overflow-hidden w-full h-full">
              <div className="border-b border-[#e3e7ec] px-[18px] py-[14px]">
                <h3 className="font-bold text-[#0b1220] text-[12.5px] m-0">Governance cadence</h3>
              </div>
              <div className="p-[16px] flex flex-col gap-[12px] h-full justify-between">
                
                <div className="flex flex-col gap-[12px]">
                  {/* Every payroll cycle */}
                  <div className="border-l-[3px] border-[#2049c9] pl-[14px] py-[2px] flex flex-col gap-[4px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Every payroll cycle</span>
                    <div className="flex flex-col">
                      <span className="text-[#4b5563] text-[11.5px] leading-[17.8px]">Readiness, exceptions, review, approval, completion and downstream status.</span>
                      <span className="text-[#6b7280] text-[11.5px] leading-[17.8px]">Owner: Entity payroll owner · Outcome: cycle sign-off</span>
                    </div>
                  </div>

                  {/* Monthly / periodic */}
                  <div className="border-l-[3px] border-[#2049c9] pl-[14px] py-[2px] flex flex-col gap-[4px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Monthly / periodic</span>
                    <div className="flex flex-col">
                      <span className="text-[#4b5563] text-[11.5px] leading-[17.8px]">Reconciliation, recurring exceptions, integration health, failed and late items.</span>
                      <span className="text-[#6b7280] text-[11.5px] leading-[17.8px]">Owner: Finance + integration admin · Outcome: variance closure</span>
                    </div>
                  </div>

                  {/* Recurring assurance review */}
                  <div className="border-l-[3px] border-[#2049c9] pl-[14px] py-[2px] flex flex-col gap-[4px]">
                    <span className="font-semibold text-[#0b1220] text-[12.5px]">Recurring assurance review</span>
                    <div className="flex flex-col">
                      <span className="text-[#4b5563] text-[11.5px] leading-[17.8px]">Access, change and control reviews where defined; incidents, release impact, support themes and improvement backlog.</span>
                      <span className="text-[#6b7280] text-[11.5px] leading-[17.8px]">Owner: Program sponsor · Outcome: decision log update</span>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="bg-[#fafbfc] border border-[#e3e7ec] rounded-[10px] p-[12px] mt-2">
                  <p className="text-[#6b7280] text-[11px] leading-[17px] m-0">
                    Cadence shown only where defined with the customer. Provider, API, configuration, entity, jurisdiction and role changes require impact review and evidence where material.
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
