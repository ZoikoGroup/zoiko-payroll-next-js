import React from 'react';

export default function PayrollTasksSection() {
  const tasks = [
    {
      title: 'Prepare payroll inputs',
      description: 'What information, ownership and cutoffs should be ready before calculation begins?',
      footer: 'General input-readiness guides → current fields/settings: Product Documentation',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Run and validate payroll',
      description: 'How should teams structure calculation checks, exceptions and validation?',
      footer: 'Payroll operations guides → current workflow: Product Documentation',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Review and approve',
      description: 'How should separation of duties, material changes and approvals be organized?',
      footer: 'Approval/control guides → product authority: Payroll Approvals',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Handle deductions and adjustments',
      description: 'How should teams review recurring/one-time changes, corrections and evidence?',
      footer: 'General operations guide → local legal treatment: authoritative local sources',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      title: 'Maintain payroll records',
      description: 'What records, ownership, retention questions and evidence should teams consider?',
      footer: 'Records/evidence guide → current controls: Product/Trust',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: 'Reconcile and report',
      description: 'How should teams structure post-run reconciliation, variance review and reporting?',
      footer: 'Reporting guides → product reports/exports: Reporting/Docs',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Implement or migrate',
      description: 'What questions should teams answer before configuration, testing, parallel run and cutover?',
      footer: 'General readiness guides → customer-specific depth: Implementation',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Scale across entities or jurisdictions',
      description: 'What changes when payroll spans entities, providers or markets?',
      footer: 'Intro guide → cross-border depth: Global Payroll Resources',
      icon: (
        <svg className="w-4 h-4 text-[#0A8FD0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h2.37M14 19.822v-1.822a2 2 0 012-2h1.5A2.5 2.5 0 0022 13.5v-2a.5.5 0 00-.5-.5h-1.636" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#E9F0F8] border-t border-[#E1E8F0] py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs inline-block" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0]">
                Start from the payroll task
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2E4B] leading-tight">
              Route straight to your job — no <br className="hidden sm:inline" />
              taxonomy knowledge required.
            </h2>
          </div>

          {/* Banner Image */}
          <div className="w-full lg:w-[500px] h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/images/Payroll-Guides/Payroll team working.png"
              alt="Payroll team working through a task list"
            />
          </div>
        </div>

        {/* 4x2 Task Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E1E8F0] shadow-sm flex flex-col justify-between hover:border-[#0A8FD0] transition-colors cursor-pointer group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-9 h-9 bg-[#E1EEF9] rounded-lg flex items-center justify-center mb-4">
                  {task.icon}
                </div>

                {/* Task Title */}
                <h3 className="text-sm font-bold text-[#0A2E4B] mb-2 leading-snug group-hover:text-[#0A8FD0] transition-colors">
                  {task.title}
                </h3>

                {/* Task Description */}
                <p className="text-xs font-normal text-gray-600 leading-relaxed mb-6">
                  {task.description}
                </p>
              </div>

              {/* Card Footer / Context Link */}
              <div className="pt-3 border-t border-dashed border-gray-100">
                <p className="text-[11px] font-normal text-gray-400 leading-normal">
                  {task.footer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
