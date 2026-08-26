import React from 'react';

export default function FeaturedGuidesSection() {
  const guides = [
    {
      type: 'CHECKLIST',
      status: 'Current',
      image: '/images/Payroll-Guides/Operations Checklist.png',
      title: 'Payroll Operations Checklist: From Inputs to Close',
      description:
        'A self-review checklist structuring the full cycle from input readiness to close — with no compliance scoring.',
      role: 'General operations',
      reviewedDate: 'Reviewed Jul 2026',
      contextNote: 'Product workflow details: Product Documentation',
    },
    {
      type: 'GUIDE',
      status: 'Current',
      image: '/images/Payroll-Guides/Designing Review and Approval Controls.png',
      title: 'Designing Payroll Review and Approval Controls',
      description:
        'How to structure separation of duties, material-change review and sign-off evidence in a payroll operating model.',
      role: 'Payroll leader',
      reviewedDate: 'Reviewed Jun 2026',
      contextNote: 'Current approval behavior: Payroll Approvals',
    },
    {
      type: 'GUIDE',
      status: 'Current',
      image: '/images/Payroll-Guides/Review and Approval Controls.png',
      title: 'Payroll Reporting and Reconciliation Guide',
      description:
        'General concepts for structuring post-run reconciliation, variance review and recurring reporting questions.',
      role: 'Finance / controller',
      reviewedDate: 'Reviewed Aug 2026',
      contextNote: 'Current reports/exports: Reporting / Product Documentation',
    },
  ];

  return (
    <section className="w-full bg-white border-t border-[#E1E8F0] py-16 px-6 lg:px-12 font-sans text-[#0A2E4B]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-3.5 bg-[#0A8FD0] rounded-xs inline-block" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8FD0]">
              Featured payroll guides
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#0A2E4B]">
            A small, current editorial set — not a popularity <br className="hidden sm:inline" />
            ranking.
          </h2>
        </div>

        {/* 3-Column Guide Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {guides.map((guide, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E1E8F0] shadow-sm flex flex-col justify-between hover:border-[#0A8FD0] transition-colors cursor-pointer group"
            >
              <div>
                {/* Badges Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#E1EEF9] text-[#155A8A] text-xs font-extrabold uppercase tracking-wide rounded-md">
                    {guide.type}
                  </span>
                  <span className="px-2.5 py-0.5 bg-gray-200 text-gray-600 text-xs font-bold rounded-full">
                    {guide.status}
                  </span>
                </div>

                {/* Card Thumbnail */}
                <div className="w-full h-28 rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#0A2E4B] leading-snug mb-2 group-hover:text-[#0A8FD0] transition-colors">
                  {guide.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {guide.description}
                </p>
              </div>

              {/* Meta Info & Link Callout */}
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <span>{guide.role}</span>
                  <span>·</span>
                  <span>{guide.reviewedDate}</span>
                </div>

                {/* Product Context Note Box */}
                <div className="p-2.5 bg-[#E9F0F8] rounded-md flex items-start gap-2 text-xs text-[#0A2E4B] font-bold mb-4">
                  <span className="text-[#0A8FD0]">→</span>
                  <span className="leading-tight">{guide.contextNote}</span>
                </div>

                {/* Action Link */}
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8FD0] group-hover:underline">
                  Read the guide →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Disclaimer Footer */}
        <p className="text-xs text-gray-400 font-normal">
          Synthetic editorial examples shown for design purposes — not yet publication-approved.
        </p>
      </div>
    </section>
  );
}
