import React from "react";

const workspaceStats = [
  { value: "42", label: "Configured", color: "text-sky-950" },
  { value: "5", label: "Needs review", color: "text-orange-700" },
  { value: "3", label: "Change detected", color: "text-orange-700" },
  { value: "2", label: "Future effective", color: "text-sky-950" },
  { value: "1", label: "Evidence stale/conflicting", color: "text-orange-700" },
  { value: "6", label: "Not applicable", color: "text-sky-950" },
  { value: "8", label: "Jurisdictions in scope", color: "text-sky-950" },
  { value: "v14", label: "Current requirement-set version", color: "text-sky-950" },
];

const filterPills = [
  "Jurisdiction ▾",
  "Legal entity ▾",
  "Payroll group ▾",
  "Category ▾",
  "State ▾",
  "Effective window ▾",
  "Owner ▾",
  "Evidence freshness ▾",
];

const workspaceRows = [
  {
    requirement: "Payroll calendar",
    category: "Calendar",
    appliesTo: "Germany — all entities",
    state: "Configured",
    stateBadge: "bg-[#E3EFE6] text-emerald-900 border border-emerald-200/40",
    effectiveDate: "Live",
    evidence: "Current",
    evidenceBadge: "bg-[#E3EFE6] text-emerald-900 border border-emerald-200/40",
    owner: "M. Weber",
    nextAction: "None",
  },
  {
    requirement: "Statutory deduction table",
    category: "Calculation",
    appliesTo: "Brazil — payroll group BR-01",
    state: "Needs review",
    stateBadge: "bg-[#F3E9CC] text-amber-900 border border-amber-200/40",
    effectiveDate: "Live",
    evidence: "Review due",
    evidenceBadge: "bg-[#F3E9CC] text-amber-900 border border-amber-200/40",
    owner: "C. Alvarez",
    nextAction: "Refresh evidence",
  },
  {
    requirement: "Payslip format update",
    category: "Documents",
    appliesTo: "France — all entities",
    state: "Future effective",
    stateBadge: "bg-[#F3D4D2] text-rose-900 border border-rose-200/40",
    effectiveDate: "Oct 2026",
    evidence: "Current",
    evidenceBadge: "bg-[#E3EFE6] text-emerald-900 border border-emerald-200/40",
    owner: "J. Dubois",
    nextAction: "Validate mapping",
  },
  {
    requirement: "Approval delegation",
    category: "Authority",
    appliesTo: "Japan — HQ entity",
    state: "Change detected",
    stateBadge: "bg-[#F3E9CC] text-amber-900 border border-amber-200/40",
    effectiveDate: "Live",
    evidence: "Review due",
    evidenceBadge: "bg-[#F3E9CC] text-amber-900 border border-amber-200/40",
    owner: "R. Tanaka",
    nextAction: "Assess impact",
  },
];

export default function LocalRequirementsWorkspace() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-28 py-20 border-t border-slate-200 flex flex-col justify-start items-start bg-white">
      <div className="w-full max-w-[1200px] px-2 sm:px-8 flex flex-col justify-start items-start gap-4">
        
        {/* Header Section */}
        <div className="w-full max-w-[700px] flex flex-col justify-start items-start gap-3.5">
          <span className="text-sky-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
            / LOCAL REQUIREMENTS WORKSPACE
          </span>
          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="text-sky-950 text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10">
              The primary proof surface — a real enterprise control surface, not a screenshot
            </h2>
          </div>
        </div>

        {/* Stats Grid - 4 columns layout (2 rows of 4 containers) with #F4F8FB background */}
        <div className="w-full pt-3.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {workspaceStats.map((stat, idx) => (
            <div
              key={idx}
              className="px-4 py-4 bg-[#F4F8FB] rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-0.5"
            >
              <div className={`w-full ${stat.color} text-2xl font-extrabold font-['Inter'] leading-10`}>
                {stat.value}
              </div>
              <div className="w-full text-gray-500 text-xs font-semibold font-['Inter'] leading-5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="w-full pt-2.5 flex flex-wrap items-center gap-2">
          {filterPills.map((filter, idx) => (
            <div
              key={idx}
              className="px-3 py-1.5 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <span className="text-sky-950 text-xs font-semibold font-['Inter'] leading-5">
                {filter}
              </span>
            </div>
          ))}
        </div>

        {/* Table Container */}
        <div className="w-full flex flex-col justify-start items-start overflow-hidden">
          <div className="w-full bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-x-auto">
            {/* Table Header */}
            <div className="min-w-[950px]">
              <div className="bg-[#F4F8FB] inline-flex w-full border-b border-slate-200">
                <div className="w-[18%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Requirement</div>
                <div className="w-[12%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Category</div>
                <div className="w-[20%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Applies to</div>
                <div className="w-[14%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">State</div>
                <div className="w-[10%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Effective date</div>
                <div className="w-[13%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Evidence</div>
                <div className="w-[10%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Owner</div>
                <div className="w-[15%] px-3.5 py-3 text-sky-950 text-xs font-bold font-['Inter'] uppercase tracking-wide">Next action</div>
              </div>

              {/* Table Rows */}
              {workspaceRows.map((row, idx) => (
                <div key={idx} className="inline-flex w-full border-t border-slate-200 hover:bg-slate-50/50 transition-colors items-center">
                  <div className="w-[18%] px-3.5 pt-3.5 pb-4 text-sky-950 text-xs font-bold font-['Inter'] leading-5">{row.requirement}</div>
                  <div className="w-[12%] px-3.5 pt-3.5 pb-4 text-sky-950 text-xs font-normal font-['Inter'] leading-5">{row.category}</div>
                  <div className="w-[20%] px-3.5 pt-3.5 pb-4 text-sky-950 text-xs font-normal font-['Inter'] leading-5">{row.appliesTo}</div>
                  <div className="w-[14%] px-3.5 py-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-[20px] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap ${row.stateBadge}`}>
                      {row.state}
                    </span>
                  </div>
                  <div className="w-[10%] px-3.5 pt-3.5 pb-4 text-sky-950 text-xs font-normal font-['Inter'] leading-5">{row.effectiveDate}</div>
                  <div className="w-[13%] px-3.5 py-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-[20px] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap ${row.evidenceBadge}`}>
                      {row.evidence}
                    </span>
                  </div>
                  <div className="w-[10%] px-3.5 pt-3.5 pb-4 text-sky-950 text-xs font-normal font-['Inter'] leading-5">{row.owner}</div>
                  <div className="w-[15%] px-3.5 pt-3.5 pb-4 text-sky-950 text-xs font-normal font-['Inter'] leading-5">{row.nextAction}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note Box */}
        <div className="w-full px-4 py-4 bg-[#F4F8FB] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start">
          <p className="text-sky-950 text-sm font-normal font-['Inter'] leading-5">
            <span className="font-bold">Detail drawer (per requirement):</span> description, applicability, current configuration reference, source/evidence metadata, owner, approvals, version history, related controls, downstream impacts.<br />
            <span className="font-bold">Change panel:</span> current vs. future version, activation date, validation status, approvers, first affected payroll cycle.
          </p>
        </div>

      </div>
    </div>
  );
}