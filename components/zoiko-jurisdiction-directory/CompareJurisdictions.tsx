'use client';

import React from 'react';

export default function JurisdictionComparison() {
  const comparisonRows = [
    {
      dimension: 'Delivery model',
      germany: <span className="text-[#0A1626] text-sm font-bold">Connected payroll</span>,
      singapore: <span className="text-[#0A1626] text-sm font-bold">Zoiko Payroll</span>,
    },
    {
      dimension: 'Payroll processing',
      germany: (
        <span className="px-2.5 py-[5px] bg-[#FFF4E5] text-[#854D0E] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#E65100]" />
          Conditions
        </span>
      ),
      singapore: (
        <span className="px-2.5 py-[5px] bg-[#E6F4EA] text-[#0D652D] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A]" />
          Available
        </span>
      ),
    },
    {
      dimension: 'Filing / reporting',
      germany: (
        <span className="px-2.5 py-[5px] bg-[#FFF4E5] text-[#854D0E] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#E65100]" />
          Conditions
        </span>
      ),
      singapore: (
        <span className="px-2.5 py-[5px] bg-[#E6F4EA] text-[#0D652D] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A]" />
          Available
        </span>
      ),
    },
    {
      dimension: 'Employee payments',
      germany: (
        <span className="px-2.5 py-[5px] bg-[#F1F5F9] text-[#334155] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#64748B]" />
          Not offered
        </span>
      ),
      singapore: (
        <span className="px-2.5 py-[5px] bg-[#E6F4EA] text-[#0D652D] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A]" />
          Available
        </span>
      ),
    },
    {
      dimension: 'Year-end',
      germany: (
        <span className="px-2.5 py-[5px] bg-[#FFF4E5] text-[#854D0E] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#E65100]" />
          Conditions
        </span>
      ),
      singapore: (
        <span className="px-2.5 py-[5px] bg-[#F1F5F9] text-[#334155] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#64748B]" />
          Not offered
        </span>
      ),
    },
    {
      dimension: 'Guide availability',
      germany: (
        <span className="px-2.5 py-[5px] bg-[#E6F4EA] text-[#0D652D] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A]" />
          Available
        </span>
      ),
      singapore: (
        <span className="px-2.5 py-[5px] bg-[#E6F4EA] text-[#0D652D] rounded-[999px] text-xs font-bold inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-[3px] bg-[#16A34A]" />
          Available
        </span>
      ),
    },
    {
      dimension: 'Coverage reviewed',
      germany: <span className="text-[#0A1626] text-sm font-normal">Jun 2026</span>,
      singapore: <span className="text-[#0A1626] text-sm font-normal">Aug 2026</span>,
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6 sm:px-12 lg:px-40 flex flex-col items-center gap-12 font-['Segoe_UI',sans-serif]">
      
      {/* ================= SECTION 1: COMPARE JURISDICTIONS ================= */}
      <div className="w-full max-w-[1117px] flex flex-col justify-start items-start gap-8">
        
        {/* Header */}
        <div className="w-full max-w-[660px] flex flex-col justify-start items-start gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#0066CC] text-xs font-bold tracking-wide uppercase">
              / COMPARE JURISDICTIONS
            </span>
          </div>
          <h2 className="text-[#0A1626] text-3xl font-bold leading-tight">
            Compare service scope, not legal outcomes.
          </h2>
          <div className="self-stretch justify-center text-[#2C3E50] text-base font-normal font-['Segoe_UI'] leading-6">
            Add up to four jurisdictions to compare delivery model, capabilities, and guide availability side by side. This compares Zoiko Payroll service availability — not tax burden or legal risk.
          </div>
        </div>

        {/* Comparison Table Card */}
        <div className="w-full bg-white rounded-2xl shadow-[0px_1px_8px_0px_rgba(10,22,38,0.05),0px_1px_2px_0px_rgba(10,22,38,0.04)] outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] flex flex-col overflow-hidden">
          
          {/* Top Selection Bar */}
          <div className="px-6 py-4 border-b border-[#E2E8F0] flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="px-3 py-1.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] text-[#0A1626] text-xs font-bold cursor-pointer hover:bg-slate-50 transition-colors flex items-center gap-1.5">
                🇩🇪 Germany ✕
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#DFE1E6] text-[#0A1626] text-xs font-bold cursor-pointer hover:bg-slate-50 transition-colors flex items-center gap-1.5">
                🇸🇬 Singapore ✕
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-dashed outline-[#CBD5E1] text-[#64748B] text-xs font-bold cursor-pointer hover:bg-slate-50 transition-colors">
                + Add jurisdiction
              </div>
            </div>

            <button
              type="button"
              className="py-2 px-4 bg-[linear-gradient(80deg,#1B81E2_0%,#0A4773_100%)] hover:opacity-95 text-white text-sm font-bold rounded-lg shadow-[0px_4px_14px_0px_rgba(12,71,115,0.28)] transition-all cursor-pointer"
            >
              Talk to a specialist about these
            </button>
          </div>

          {/* Table Header Row */}
          <div className="flex justify-between items-center bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#64748B] text-xs font-bold">
            <div className="w-56 px-6 py-3.5 text-left">Dimension</div>
            <div className="flex-1 px-6 py-3.5 text-center">Germany</div>
            <div className="flex-1 px-6 py-3.5 text-center">Singapore</div>
          </div>

          {/* Table Rows */}
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className={`flex justify-between items-center border-b border-[#F1F5F9] ${
                idx % 2 === 1 ? 'bg-[#FAFCFE]' : 'bg-white'
              }`}
            >
              <div className="w-56 px-6 py-3.5 text-left text-sm font-bold text-[#0A1626]">
                {row.dimension}
              </div>
              <div className="flex-1 px-6 py-3.5 flex justify-center items-center">
                {row.germany}
              </div>
              <div className="flex-1 px-6 py-3.5 flex justify-center items-center">
                {row.singapore}
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* ================= SECTION 2: SUB-JURISDICTIONS (MATCHING FIGMA) ================= */}
      <div className="w-full max-w-[1117px] p-8 lg:p-12 bg-[#0C2B47] rounded-[24px] flex flex-col lg:flex-row justify-between items-center gap-8 shadow-sm">
        
        {/* Left Column Description */}
        <div className="w-full lg:w-[486px] flex flex-col justify-start items-start gap-3.5 text-white">
          <div className="flex items-center gap-1.5">
            <span className="text-[#0080FF] text-xs font-bold tracking-wide uppercase">
              / SUB-JURISDICTIONS
            </span>
          </div>
          <h3 className="text-3xl font-bold leading-tight text-white">
            Payroll jurisdiction is often layered.
          </h3>
          <p className="text-white/90 text-base font-normal leading-6 pt-1">
            The United States has federal, state and local obligations. Canada has federal and provincial distinctions. Coverage never inherits automatically — each layer is modeled and effective-dated on its own.
          </p>
          <p className="text-slate-300 text-sm font-normal leading-5 pt-1">
            Parent jurisdiction support never implies every child jurisdiction is supported. Child records inherit only explicitly permitted metadata.
          </p>
        </div>

        {/* Right Column: Visual Hierarchy Card */}
        <div className="w-full lg:w-[470px] bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-2 relative shrink-0">
          
          {/* Level 1: Country Box */}
          <div className="w-full px-4 py-3 bg-[#EEF4FA] rounded-xl flex items-center text-sm font-bold text-[#0A1626]">
            🇺🇸 United States — Country
          </div>

          {/* Vertical Connector Line 1 */}
          <div className="w-px h-3.5 bg-slate-200 ml-6 -my-1" />

          {/* Level 2: State Box */}
          <div className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl flex items-center text-sm font-bold text-[#0A1626]">
            California — State payroll rules apply
          </div>

          {/* Vertical Connector Line 2 */}
          <div className="w-px h-3.5 bg-slate-200 ml-6 -my-1" />

          {/* Level 3: Local Box (Dashed Outline) */}
          <div className="w-full px-4 py-3 bg-white border border-dashed border-slate-300 rounded-xl flex items-center text-xs font-semibold text-slate-600">
            San Francisco — Local payroll tax layer
          </div>

          {/* Level 4: Other States Pills */}
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            {['Texas', 'New York', 'Illinois', '+47 more'].map((state) => (
              <div
                key={state}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#0A1626]"
              >
                {state}
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}