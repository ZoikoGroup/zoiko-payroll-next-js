"use client";

import Reveal from "../ui/Reveal";

export default function SixPhaseControlledLifecycle() {
  return (
    <section className="w-full bg-white border-t border-slate-200 py-20 px-4 sm:px-8 lg:px-28 flex flex-col justify-start items-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-5">
        
        {/* Header Section */}
        <Reveal>
          <div className="flex flex-col justify-start items-center gap-2.5 max-w-[680px] text-center">
            {/* Eyebrow with slash */}
            <div className="inline-flex items-center justify-center gap-1.5 h-5">
              <span className="text-[#0A8FD0] text-xs font-bold font-['Inter'] uppercase leading-5 tracking-wider">
                / Six-phase controlled lifecycle
              </span>
            </div>

            {/* Title */}
            <div className="pt-3.5 w-full">
              <h2 className="text-[#0A2E4B] text-3xl font-extrabold font-['Inter'] leading-10">
                Governed states, not six easy steps
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-[618px]">
              <p className="text-[#5B646B] text-base font-normal font-['Inter'] leading-6">
                Each phase carries its own primary work and exit evidence. Phases may overlap operationally — but exit status is never inferred from elapsed time.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Timeline Container */}
        <div className="w-full pt-10 relative flex flex-col justify-start items-center gap-8 md:gap-10">
          
          {/* Vertical Center Spine Line (Desktop: Exact 50% Center | Mobile: Left-aligned at 24px) */}
          <div className="hidden md:block w-0.5 absolute left-1/2 top-6 bottom-6 -translate-x-1/2 bg-slate-200 pointer-events-none" />
          <div className="md:hidden w-0.5 absolute left-6 top-6 bottom-6 -translate-x-1/2 bg-slate-200 pointer-events-none" />

          {/* ================= PHASE 1 (Left Card) ================= */}
          <div className="w-full relative min-h-[140px] flex items-center">
            {/* Number Circle 1 - Exact Middle of Line */}
            <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 size-11 bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#0A2E4B] flex justify-center items-center shrink-0 z-20 shadow-xs">
              <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">1</span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
              {/* Left Column */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-10 flex justify-start md:justify-end items-center relative">
                {/* Horizontal Connector Line */}
                <div className="hidden md:block w-6 h-0.5 bg-slate-200 absolute right-0 top-1/2 -translate-y-1/2" />
                
                <div className="w-full sm:w-80 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex justify-between items-center gap-2">
                    <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">Discover</span>
                    <span className="px-2.5 py-1 bg-[#E1EEF9] rounded-[20px] text-[#0A8FD0] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap">
                      Scope manifest
                    </span>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Markets, entities, payroll groups, calendars,<br />populations
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Roles, systems, providers, service models
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Stakeholder map + discovery issue register
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Empty on Desktop) */}
              <div className="hidden md:block w-1/2" />
            </div>
          </div>

          {/* ================= PHASE 2 (Right Card) ================= */}
          <div className="w-full relative min-h-[140px] flex items-center">
            {/* Number Circle 2 - Exact Middle of Line */}
            <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 size-11 bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#0A2E4B] flex justify-center items-center shrink-0 z-20 shadow-xs">
              <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">2</span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
              {/* Left Column (Empty on Desktop) */}
              <div className="hidden md:block w-1/2" />

              {/* Right Column */}
              <div className="w-full md:w-1/2 pl-14 md:pl-10 flex justify-start items-center relative">
                {/* Horizontal Connector Line */}
                <div className="hidden md:block w-6 h-0.5 bg-slate-200 absolute left-0 top-1/2 -translate-y-1/2" />

                <div className="w-full sm:w-80 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex justify-between items-center gap-2">
                    <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">Design / Configure</span>
                    <span className="px-2.5 py-1 bg-[#E1EEF9] rounded-[20px] text-[#0A8FD0] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap">
                      Config baseline
                    </span>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Local requirement mappings + payroll<br />configuration
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Workflows, roles, approvals, calendars
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Decision-right model + design decisions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PHASE 3 (Left Card) ================= */}
          <div className="w-full relative min-h-[140px] flex items-center">
            {/* Number Circle 3 - Exact Middle of Line */}
            <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 size-11 bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#0A2E4B] flex justify-center items-center shrink-0 z-20 shadow-xs">
              <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">3</span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
              {/* Left Column */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-10 flex justify-start md:justify-end items-center relative">
                {/* Horizontal Connector Line */}
                <div className="hidden md:block w-6 h-0.5 bg-slate-200 absolute right-0 top-1/2 -translate-y-1/2" />

                <div className="w-full sm:w-80 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex justify-between items-center gap-2">
                    <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">Prepare / Migrate</span>
                    <span className="px-2.5 py-1 bg-[#E1EEF9] rounded-[20px] text-[#0A8FD0] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap">
                      Migration lineage
                    </span>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Source inventory, extraction, field mapping
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Cleansing, transformation, transfer
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Reconciliation + unresolved issue register
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Empty on Desktop) */}
              <div className="hidden md:block w-1/2" />
            </div>
          </div>

          {/* ================= PHASE 4 (Right Card) ================= */}
          <div className="w-full relative min-h-[140px] flex items-center">
            {/* Number Circle 4 - Exact Middle of Line */}
            <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 size-11 bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#0A2E4B] flex justify-center items-center shrink-0 z-20 shadow-xs">
              <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">4</span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
              {/* Left Column (Empty on Desktop) */}
              <div className="hidden md:block w-1/2" />

              {/* Right Column */}
              <div className="w-full md:w-1/2 pl-14 md:pl-10 flex justify-start items-center relative">
                {/* Horizontal Connector Line */}
                <div className="hidden md:block w-6 h-0.5 bg-slate-200 absolute left-0 top-1/2 -translate-y-1/2" />

                <div className="w-full sm:w-80 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex justify-between items-center gap-2">
                    <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">
                      Validate &amp; Parallel Run
                    </span>
                    <span className="px-2.5 py-1 bg-[#E1EEF9] rounded-[20px] text-[#0A8FD0] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap">
                      Variance register
                    </span>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Calculation, records, permissions, integrations
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Source vs. target comparison, defined<br />tolerances
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Variance register + sign-off decision
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PHASE 5 (Left Card) ================= */}
          <div className="w-full relative min-h-[140px] flex items-center">
            {/* Number Circle 5 - Exact Middle of Line */}
            <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 size-11 bg-white rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#0A2E4B] flex justify-center items-center shrink-0 z-20 shadow-xs">
              <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">5</span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
              {/* Left Column */}
              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-10 flex justify-start md:justify-end items-center relative">
                {/* Horizontal Connector Line */}
                <div className="hidden md:block w-6 h-0.5 bg-slate-200 absolute right-0 top-1/2 -translate-y-1/2" />

                <div className="w-full sm:w-80 p-5 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex justify-between items-center gap-2">
                    <span className="text-[#0A2E4B] text-base font-extrabold font-['Inter'] leading-6">Launch</span>
                    <span className="px-2.5 py-1 bg-[#E1EEF9] rounded-[20px] text-[#0A8FD0] text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap">
                      Launch decision
                    </span>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        GO / HOLD / PARTIAL GO / ROLLBACK<br />governance
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Cutover, activation, communications
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0A8FD0] text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-[#5B646B] text-xs font-normal font-['Inter'] leading-5">
                        Signed launch decision + cutover record
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Empty on Desktop) */}
              <div className="hidden md:block w-1/2" />
            </div>
          </div>

          {/* ================= PHASE 6 (Right Card - Dark) ================= */}
          <div className="w-full relative min-h-[140px] flex items-center">
            {/* Number Circle 6 - Exact Middle of Line */}
            <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 size-11 bg-[#0A2E4B] rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#0A2E4B] flex justify-center items-center shrink-0 z-20 shadow-xs">
              <span className="text-white text-base font-extrabold font-['Inter'] leading-6">6</span>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center">
              {/* Left Column (Empty on Desktop) */}
              <div className="hidden md:block w-1/2" />

              {/* Right Column */}
              <div className="w-full md:w-1/2 pl-14 md:pl-10 flex justify-start items-center relative">
                {/* Horizontal Connector Line */}
                <div className="hidden md:block w-6 h-0.5 bg-slate-200 absolute left-0 top-1/2 -translate-y-1/2" />

                <div className="w-full sm:w-80 p-5 bg-gradient-to-r from-[#0A2E4B] to-[#155A8A] rounded-2xl shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex justify-between items-center gap-2">
                    <span className="text-white text-base font-extrabold font-['Inter'] leading-6">
                      Stabilize / Optimize
                    </span>
                    <span className="px-2.5 py-1 bg-white/20 rounded-[20px] text-white text-xs font-bold font-['Inter'] leading-4 whitespace-nowrap">
                      Handoff accepted
                    </span>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-white/90 text-xs font-normal font-['Inter'] leading-5">
                        Support, service health, issue closure
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-white/90 text-xs font-normal font-['Inter'] leading-5">
                        First-cycle review + recurring governance
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-extrabold font-['Inter'] leading-4 shrink-0">✓</span>
                      <span className="text-white/90 text-xs font-normal font-['Inter'] leading-5">
                        Operational handoff acceptance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footnote Rule */}
        <div className="w-full max-w-[1140px] pt-4">
          <p className="text-left text-[#8592A0] text-xs font-normal font-['Inter'] leading-5">
            Rule: gates are evidence- and authority-bound — never calendar-bound.
          </p>
        </div>

      </div>
    </section>
  );
}