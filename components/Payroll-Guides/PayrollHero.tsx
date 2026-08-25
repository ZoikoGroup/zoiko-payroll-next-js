import React from 'react';

export default function PayrollHero() {
  const tags = [
    'Task-first guidance',
    'Reviewed dates',
    'Clear scope',
    'Authority handoffs',
    'Versioned corrections',
  ];

  const cards = [
    {
      badge: 'CHECKLIST',
      badgeBg: 'bg-[#CFE0EE] text-[#155A8A]',
      status: 'Current',
      title: 'Payroll Operations Checklist: From Inputs to Close',
      meta: 'General operations · Reviewed Jul 2026',
    },
    {
      badge: 'GUIDE',
      badgeBg: 'bg-[#CFE0EE] text-[#155A8A]',
      status: 'Current',
      title: 'Designing Payroll Review and Approval Controls',
      meta: 'Payroll leader · Reviewed Jun 2026',
    },
    {
      badge: 'PLAYBOOK',
      badgeBg: 'bg-[#CFE0EE] text-[#155A8A]',
      status: 'Current',
      title: 'Managing Payroll Adjustments and Corrections',
      meta: 'Payroll operations · Reviewed Aug 2026',
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto p-6 lg:p-10 font-sans text-[#0A2E4B]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            {/* Top Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs inline-block" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0]">
                Payroll guides
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[#0A2E4B] mb-4">
              Practical payroll guides for<br />
              stronger payroll operations.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base font-normal text-gray-600 leading-relaxed mb-8 max-w-xl">
              Explore practical guides, checklists and playbooks for payroll processes, 
              controls, reviews, records, reporting and implementation — with scope 
              and reviewed-date context kept visible.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="h-11 px-6 bg-gradient-to-r from-[#0A8FD0] to-[#0A2E4B] text-white text-sm font-bold rounded-lg shadow-sm hover:opacity-95 transition-opacity">
                Explore payroll guides
              </button>
              <button className="h-11 px-6 bg-white text-[#0A2E4B] text-sm font-bold rounded-lg border border-[#E1E8F0] hover:bg-gray-50 transition-colors">
                Contact Support
              </button>
            </div>

            {/* Feature Bullet Points Grid */}
            <div className="pt-6 border-t border-[#E1E8F0] mb-8">
              <ul className="flex flex-wrap gap-y-3 gap-x-6">
                {tags.map((tag, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#0A2E4B]">
                    <span className="w-1.5 h-1.5 bg-[#0A8FD0] rounded-full inline-block" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reviewer Avatars Footer */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                src="https://placehold.co/32x32"
                alt="Reviewer 1"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                src="https://placehold.co/32x32"
                alt="Reviewer 2"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                src="https://placehold.co/32x32"
                alt="Reviewer 3"
              />
            </div>
            <p className="text-xs text-gray-400">
              Reviewed by <span className="font-bold text-[#0A2E4B]">payroll operations specialists</span> before publish
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Card Container */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-5 shadow-[0px_8px_24px_0px_rgba(10,46,75,0.08)] border border-[#E1E8F0] flex flex-col gap-4">
          
          {/* Search Bar */}
          <div className="w-full h-11 px-4 bg-[#E9F0F8] rounded-lg border border-[#E1E8F0] flex items-center text-xs text-gray-400">
            <span>🔍 Search payroll guides — e.g., approvals, deductions, reconciliation</span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-bold [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button className="px-3.5 py-1.5 bg-[#0A2E4B] text-white rounded-full whitespace-nowrap">
              All guides
            </button>
            <button className="px-3.5 py-1.5 bg-[#E1EEF9] text-[#155A8A] rounded-full whitespace-nowrap hover:bg-sky-200 transition-colors">
              Prepare inputs
            </button>
            <button className="px-3.5 py-1.5 bg-[#E1EEF9] text-[#155A8A] rounded-full whitespace-nowrap hover:bg-sky-200 transition-colors">
              Reconcile &amp; report
            </button>
            <button className="px-3.5 py-1.5 bg-[#E1EEF9] text-[#155A8A] rounded-full whitespace-nowrap hover:bg-sky-200 transition-colors">
              Implement / change
            </button>
          </div>

          {/* Resource Cards */}
          <div className="flex flex-col gap-3">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg border border-[#E1E8F0] hover:border-[#0A8FD0] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-0.5 rounded text-[9.5px] font-extrabold tracking-wide uppercase ${card.badgeBg}`}>
                    {card.badge}
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[9.5px] font-bold">
                    {card.status}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-[#0A2E4B] mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {card.meta}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
