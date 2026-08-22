"use client";

import React from "react";
import Reveal from "../ui/Reveal";

export default function GuidedRouteSection() {
  return (
    <section className="bg-[#f5f6f8] py-16 sm:py-[70px] relative w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px] items-start">
        
        {/* Header */}
        <Reveal className="flex flex-col gap-[14px] items-start max-w-[780px] px-[6px] w-full">
          <div className="flex flex-col items-start w-full">
            <p className="font-bold text-[#6b7280] text-[11px] tracking-[1.54px] uppercase m-0 leading-normal">
              11 — GUIDED ROUTE & EVIDENCE
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h2 className="font-bold text-[#0b1220] text-[28px] lg:text-[36px] tracking-[-1px] leading-[1.2] m-0">
              Find the right payroll path
            </h2>
          </div>
          <div className="flex flex-col items-start w-full pt-[0.78px]">
            <p className="font-normal text-[#4b5563] text-[16px] leading-[25.58px] m-0">
              Four questions. Deterministic, explainable and reversible, with no hidden score and no sensitive<br className="hidden md:block"/>
              inference.
            </p>
          </div>
        </Reveal>

        {/* Top Cards (Wizard & Recommended Route) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
          
          {/* Card 1: Wizard */}
          <Reveal delay={100} className="bg-white border border-[#e3e7ec] rounded-[14px] p-[22px] flex flex-col gap-[18px] w-full">
            {/* Progress Bar */}
            <div className="flex gap-[10px] items-center w-full">
              <span className="font-bold text-[#6b7280] text-[11px] tracking-[1.1px] whitespace-nowrap">
                STEP 4 OF 4
              </span>
              <div className="bg-[#eef0f4] h-[4px] rounded-[999px] flex-1 overflow-hidden">
                <div className="bg-[#2049c9] h-full w-full"></div>
              </div>
            </div>

            {/* Q1 */}
            <div className="flex flex-col gap-[9px] w-full">
              <h3 className="font-semibold text-[#0b1220] text-[13px] m-0">1 · Where do you run payroll?</h3>
              <div className="flex flex-wrap gap-[8px]">
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  One jurisdiction
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  Multiple jurisdictions
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  Not sure yet
                </button>
              </div>
            </div>

            {/* Q2 */}
            <div className="flex flex-col gap-[9px] w-full">
              <h3 className="font-semibold text-[#0b1220] text-[13px] m-0">2 · How many legal entities are in scope?</h3>
              <div className="flex flex-wrap gap-[8px]">
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  1–3 entities
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  4–15 entities
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  15+ entities
                </button>
              </div>
            </div>

            {/* Q3 */}
            <div className="flex flex-col gap-[9px] w-full">
              <h3 className="font-semibold text-[#0b1220] text-[13px] m-0">3 · What workforce range is in scope?</h3>
              <div className="flex flex-wrap gap-[8px]">
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  Under 1,000
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  1,000–5,000
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  5,000+
                </button>
              </div>
            </div>

            {/* Q4 */}
            <div className="flex flex-col gap-[9px] w-full">
              <h3 className="font-semibold text-[#0b1220] text-[13px] m-0">4 · What are you trying to improve first?</h3>
              <div className="flex flex-wrap gap-[8px]">
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  Central oversight
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors">
                  Reporting and reconciliation
                </button>
                <button className="bg-[#efefef] border-2 border-black rounded-[8px] px-[13px] min-h-[44px] flex items-center justify-center font-bold text-black text-[12px] hover:bg-black hover:text-white transition-colors mt-[4px]">
                  Migration and modernization
                </button>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Recommended Route */}
          <Reveal delay={200} className="bg-[#082f49] rounded-[14px] p-[22px] flex flex-col w-full h-full text-white">
            <span className="font-bold text-[#8fa6ff] text-[11px] tracking-[1.32px] mb-[10px]">
              RECOMMENDED ROUTE
            </span>
            <h3 className="font-bold text-white text-[26px] tracking-[-0.52px] mb-[16px] leading-tight">
              {"{{ route }}"}
            </h3>
            
            <div className="bg-[#214c69] rounded-[10px] p-[14px] flex flex-col gap-[7px] mb-[14px]">
              <span className="font-bold text-[#8b95a3] text-[10.5px] tracking-[1.05px]">
                WHY THIS PATH
              </span>
              <p className="text-[#d6dbe3] text-[12px] leading-[19.2px] m-0">
                {"{{ why }}"}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] mb-auto">
              <div className="bg-[#214c69] rounded-[9px] p-[11px] flex flex-col">
                <span className="text-[#8b95a3] text-[10.5px]">Jurisdictions</span>
                <span className="font-semibold text-white text-[11.5px]">{"{{ a1 }}"}</span>
              </div>
              <div className="bg-[#214c69] rounded-[9px] p-[11px] flex flex-col">
                <span className="text-[#8b95a3] text-[10.5px]">Entities</span>
                <span className="font-semibold text-white text-[11.5px]">{"{{ a2 }}"}</span>
              </div>
              <div className="bg-[#214c69] rounded-[9px] p-[11px] flex flex-col">
                <span className="text-[#8b95a3] text-[10.5px]">Workforce</span>
                <span className="font-semibold text-white text-[11.5px]">{"{{ a3 }}"}</span>
              </div>
              <div className="bg-[#214c69] rounded-[9px] p-[11px] flex flex-col">
                <span className="text-[#8b95a3] text-[10.5px]">First objective</span>
                <span className="font-semibold text-white text-[11.5px]">{"{{ a4 }}"}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-[10px] mt-[20px] mb-[12px]">
              <button className="bg-white rounded-[9px] px-[18px] min-h-[44px] flex items-center justify-center font-semibold text-[#0b1220] text-[14px] hover:bg-gray-100 transition-colors">
                Book a demo
              </button>
              <button className="border border-[#2e3b52] rounded-[9px] px-[18px] min-h-[44px] flex items-center justify-center font-semibold text-[#d6dbe3] text-[14px] hover:bg-[#1a3d54] transition-colors">
                {"{{ alt }}"}
              </button>
            </div>
            
            <p className="text-[#8b95a3] text-[10.5px] leading-normal m-0">
              Answers are editable at any step. Routes are reversible and no answer is stored as a score.
            </p>
          </Reveal>
        </div>

        {/* Bottom Cards (Scorecard & Evidence) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
          
          {/* Card 3: Evaluation Scorecard */}
          <Reveal delay={300} className="bg-white border border-[#e3e7ec] rounded-[14px] flex flex-col overflow-hidden w-full">
            <div className="border-b border-[#e3e7ec] px-[18px] py-[14px] flex items-center gap-[8px]">
              <h3 className="font-bold text-[#0b1220] text-[12.5px] m-0">Enterprise evaluation scorecard</h3>
              <span className="bg-[#fdf3e3] text-[#a75d06] px-[8px] py-[3px] rounded-[999px] font-semibold text-[10.5px]">
                Example data
              </span>
            </div>
            
            <div className="p-[18px] pt-[8px] flex flex-col w-full">
              {/* Row 1 */}
              <div className="border-b border-[#f1f3f6] py-[11px] flex items-center gap-[12px] w-full">
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Payroll-cycle readiness</span>
                  <span className="text-[#6b7280] text-[10.5px]">Groups ready by cutoff · EMEA · Aug 2026</span>
                </div>
                <div className="bg-[#eef0f4] h-[6px] w-[70px] rounded-[999px] overflow-hidden">
                  <div className="bg-[#2049c9] h-full" style={{ width: "82%" }}></div>
                </div>
                <span className="font-semibold text-[#1f2937] text-[12px] w-[38px] text-right">82%</span>
              </div>
              
              {/* Row 2 */}
              <div className="border-b border-[#f1f3f6] py-[11px] flex items-center gap-[12px] w-full">
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Exception aging</span>
                  <span className="text-[#6b7280] text-[10.5px]">Open exceptions under 48h</span>
                </div>
                <div className="bg-[#eef0f4] h-[6px] w-[70px] rounded-[999px] overflow-hidden">
                  <div className="bg-[#2049c9] h-full" style={{ width: "74%" }}></div>
                </div>
                <span className="font-semibold text-[#1f2937] text-[12px] w-[38px] text-right">74%</span>
              </div>

              {/* Row 3 */}
              <div className="border-b border-[#f1f3f6] py-[11px] flex items-center gap-[12px] w-full">
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Approval readiness</span>
                  <span className="text-[#6b7280] text-[10.5px]">Approvals recorded before due</span>
                </div>
                <div className="bg-[#eef0f4] h-[6px] w-[70px] rounded-[999px] overflow-hidden">
                  <div className="bg-[#2049c9] h-full" style={{ width: "68%" }}></div>
                </div>
                <span className="font-semibold text-[#1f2937] text-[12px] w-[38px] text-right">68%</span>
              </div>

              {/* Row 4 */}
              <div className="border-b border-[#f1f3f6] py-[11px] flex items-center gap-[12px] w-full">
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Reconciliation completion</span>
                  <span className="text-[#6b7280] text-[10.5px]">Matched vs expected output</span>
                </div>
                <div className="bg-[#eef0f4] h-[6px] w-[70px] rounded-[999px] overflow-hidden">
                  <div className="bg-[#2049c9] h-full" style={{ width: "50%" }}></div>
                </div>
                <span className="font-semibold text-[#1f2937] text-[12px] w-[38px] text-right">50%</span>
              </div>

              {/* Row 5 */}
              <div className="border-b border-[#f1f3f6] py-[11px] flex items-center gap-[12px] w-full">
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Integration health</span>
                  <span className="text-[#6b7280] text-[10.5px]">Connectors healthy in scope</span>
                </div>
                <div className="bg-[#eef0f4] h-[6px] w-[70px] rounded-[999px] overflow-hidden">
                  <div className="bg-[#2049c9] h-full" style={{ width: "90%" }}></div>
                </div>
                <span className="font-semibold text-[#1f2937] text-[12px] w-[38px] text-right">90%</span>
              </div>

              {/* Row 6 */}
              <div className="py-[11px] flex items-center gap-[12px] w-full">
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Change traceability</span>
                  <span className="text-[#6b7280] text-[10.5px]">Material changes with evidence link</span>
                </div>
                <div className="bg-[#eef0f4] h-[6px] w-[70px] rounded-[999px] overflow-hidden">
                  <div className="bg-[#2049c9] h-full" style={{ width: "96%" }}></div>
                </div>
                <span className="font-semibold text-[#1f2937] text-[12px] w-[38px] text-right">96%</span>
              </div>

              <div className="pt-[11px]">
                <p className="text-[#6b7280] text-[11px] leading-[17px] m-0">
                  Process and control measures. Not worker productivity scores.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Evidence Panel */}
          <Reveal delay={400} className="bg-white border border-[#e3e7ec] rounded-[14px] flex flex-col overflow-hidden w-full h-full">
            <div className="border-b border-[#e3e7ec] px-[18px] py-[14px]">
              <h3 className="font-bold text-[#0b1220] text-[12.5px] m-0">Evidence panel</h3>
            </div>
            
            <div className="p-[18px] flex flex-col gap-[10px] w-full h-full">
              {/* Item 1 */}
              <div className="border border-[#e3e7ec] rounded-[10px] p-[12px] flex items-center justify-between gap-[10px]">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Control documentation</span>
                  <span className="text-[#6b7280] text-[10.5px]">Scope: platform · reviewed Jun 2026</span>
                </div>
                <div className="bg-[#e8f5f0] text-[#0e7c5a] px-[9px] py-[4px] rounded-[999px] font-semibold text-[10.5px] whitespace-nowrap">
                  ✓ Available
                </div>
              </div>

              {/* Item 2 */}
              <div className="border border-[#e3e7ec] rounded-[10px] p-[12px] flex items-center justify-between gap-[10px]">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Security & trust resources</span>
                  <span className="text-[#6b7280] text-[10.5px]">Procurement pack on request</span>
                </div>
                <div className="bg-[#e8f5f0] text-[#0e7c5a] px-[9px] py-[4px] rounded-[999px] font-semibold text-[10.5px] whitespace-nowrap">
                  ✓ Available
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-[#fafbfc] border border-[#e3e7ec] rounded-[10px] p-[12px] flex items-center justify-between gap-[10px]">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Customer proof & quantified outcomes</span>
                  <span className="text-[#6b7280] text-[10.5px]">Published only with current scoped evidence and methodology</span>
                </div>
                <div className="bg-[#f1f3f6] text-[#4b5563] px-[9px] py-[4px] rounded-[999px] font-semibold text-[10.5px] whitespace-nowrap">
                  ⧗ Pending verification
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-[#fafbfc] border border-[#e3e7ec] rounded-[10px] p-[12px] flex items-center justify-between gap-[10px]">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0b1220] text-[12px]">Certifications & service claims</span>
                  <span className="text-[#6b7280] text-[10.5px]">Shown per scope when current</span>
                </div>
                <div className="bg-[#f1f3f6] text-[#4b5563] px-[9px] py-[4px] rounded-[999px] font-semibold text-[10.5px] whitespace-nowrap">
                  ⧗ Pending verification
                </div>
              </div>

              {/* Note */}
              <div className="bg-[#eef2ff] border border-[#dde4ff] rounded-[10px] p-[12px] mt-auto">
                <p className="text-[#243c8f] text-[11.5px] leading-[17.8px] m-0">
                  Where proof is not yet publishable, the evaluation scorecard above stands in and routes you to current Trust and Procurement resources. No invented logos or customer metrics.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
