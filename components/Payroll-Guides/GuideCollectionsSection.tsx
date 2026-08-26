import React from 'react';

export default function GuideCollectionsSection() {
  const collections = [
    {
      title: 'Payroll Operations Fundamentals',
      description: 'Operating model, roles, calendar/cutoff concepts, cycle governance.',
      footer: 'Owned by Payroll Guides',
      image: '/images/Payroll-Guides/Operations Fundamentals.png',
    },
    {
      title: 'Processing and Validation',
      description: 'Inputs, validations, exceptions, review questions.',
      footer: 'Payroll Guides + product handoffs',
      image: '/images/Payroll-Guides/Operations Fundamentals.png',
    },
    {
      title: 'Approvals and Controls',
      description: 'Decision rights, SoD, material-change review, evidence.',
      footer: 'Payroll Guides + Payroll Approvals',
      image: '/images/Payroll-Guides/Approvals and Controls.png',
    },
    {
      title: 'Deductions, Adjustments and Corrections',
      description: 'Process governance and review considerations, not local legal conclusions.',
      footer: 'Payroll Guides + local/product handoffs',
      image: '/images/Payroll-Guides/Adjustments and Corrections.png',
    },
    {
      title: 'Payroll Records and Evidence',
      description: 'Record ownership, evidence quality, retrieval and privacy questions.',
      footer: 'Payroll Guides + Security/Trust/Product',
      image: '/images/Payroll-Guides/Records and Evidence.png',
    },
    {
      title: 'Reporting and Reconciliation',
      description: 'Variance/reconciliation concepts, defined metrics, operating close.',
      footer: 'Payroll Guides + Reporting handoff',
      image: '/images/Payroll-Guides/Reporting and Reconciliation.png',
    },
    {
      title: 'Implementation and Change',
      description: 'Discovery, migration-readiness, testing, cutover/governance questions.',
      footer: 'Payroll Guides + Implementation handoff',
      image: '/images/Payroll-Guides/Implementation and Change.png',
    },
    {
      title: 'Growing and Global Payroll',
      description: 'Scaling questions; specialized cross-border material stays in Global Payroll.',
      footer: 'Introductory guides + Global Payroll Resources',
      image: '/images/Payroll-Guides/Growing and Global Payroll.png',
    },
  ];

  return (
    <section className="w-full bg-[#E9F0F8] border-t border-[#E1E8F0] py-16 px-6 lg:px-12 font-sans text-[#0A2E4B]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs inline-block" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0]">
              Guide collections
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#0A2E4B]">
            Stable thematic collections — never empty <br className="hidden sm:inline" />
            SEO archives.
          </h2>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-[#E1E8F0] shadow-sm flex flex-col justify-between hover:border-[#0A8FD0] transition-colors cursor-pointer group min-h-[256px]"
            >
              <div>
                {/* Image Header */}
                <div className="w-full h-20 rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Collection Title */}
                <h3 className="text-sm font-bold text-[#0A2E4B] mb-2 leading-snug group-hover:text-[#0A8FD0] transition-colors">
                  {item.title}
                </h3>

                {/* Collection Description */}
                <p className="text-xs text-[#5B646B] font-normal leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Card Footer / Authority Handoff */}
              <div className="pt-2.5 border-t border-[#E1E8F0]">
                <p className="text-[11px] text-[#8592A0] font-normal leading-tight">
                  {item.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
