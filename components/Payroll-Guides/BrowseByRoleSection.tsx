import React from 'react';

export default function BrowseByRoleSection() {
  const roles = [
    {
      title: 'Payroll leader',
      description: 'Operating model, decision rights, controls, scale, change governance.',
      tag: 'Leadership guides + global/implementation handoffs',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Payroll operations / administrator',
      description: 'Cycle execution, inputs, exceptions, adjustments, records.',
      tag: 'Task-level operational guides + Product Docs handoffs',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Finance / controller',
      description: 'Approvals, reconciliation, reporting, evidence, close coordination.',
      tag: 'Control/reconciliation guides + Reporting',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'HR / People operations',
      description: 'Worker/change inputs, ownership, handoffs, privacy-aware collaboration.',
      tag: 'Input and records guides — no HR policy/legal inference',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Implementation / transformation',
      description: 'Discovery, migration, testing, parallel run, cutover questions.',
      tag: 'Readiness guides + Implementation authority',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Evaluator / buyer',
      description: 'Operating model, control expectations, vendor/product evaluation.',
      tag: 'Buyer guides + Product/Pricing/Trust/demo',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white border-t border-[#E1E8F0] py-16 px-6 lg:px-12 font-sans text-[#0A2E4B]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs inline-block" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0]">
                Browse by role
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#0A2E4B]">
              Guidance routed to the job you <br className="hidden sm:inline" />
              actually do.
            </h2>
          </div>

          {/* Featured Role Banner Card */}
          <div className="w-full lg:w-[500px] bg-white rounded-2xl border border-[#E1E8F0] shadow-sm overflow-hidden flex-shrink-0">
            <img
              src="/images/Payroll-Guides/Operations team collaborating.png"
              alt="Built around real jobs"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-extrabold text-[#0A2E4B] mb-1">
                Built around real jobs
              </h3>
              <p className="text-xs text-gray-600 font-normal">
                Every role sees emphasis suited to the decisions they actually make.
              </p>
            </div>
          </div>
        </div>

        {/* 3x2 Grid for Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E1E8F0] shadow-sm flex flex-col justify-between hover:border-[#0A8FD0] transition-colors cursor-pointer group"
            >
              <div>
                {/* Icon */}
                <div className="w-9 h-9 bg-[#E9F0F8] rounded-lg flex items-center justify-center mb-4">
                  {role.icon}
                </div>

                {/* Role Title */}
                <h3 className="text-base font-bold text-[#0A2E4B] mb-2 leading-snug group-hover:text-[#0A8FD0] transition-colors">
                  {role.title}
                </h3>

                {/* Role Description */}
                <p className="text-xs text-gray-600 font-normal leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              {/* Tag / Handoff info pill */}
              <div className="p-2.5 bg-[#E1EEF9] rounded-md text-xs text-[#155A8A] font-normal leading-tight">
                {role.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
