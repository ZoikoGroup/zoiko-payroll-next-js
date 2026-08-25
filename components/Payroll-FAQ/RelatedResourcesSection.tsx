import React from 'react';

interface ResourceCard {
  title: string;
  description: React.ReactNode;
  href?: string;
}

const resources: ResourceCard[] = [
  {
    title: 'Payroll Guides',
    description: (
      <>
        Practical guides, checklists and
        <br />
        playbooks for payroll operations.
      </>
    ),
    href: '#payroll-guides',
  },
  {
    title: 'Payroll Glossary',
    description: 'Direct definitions of payroll terms.',
    href: '#payroll-glossary',
  },
  {
    title: 'Product Documentation',
    description: 'Configure and use Zoiko Payroll.',
    href: '#product-documentation',
  },
  {
    title: 'Resource Center',
    description: (
      <>
        Search and browse all payroll
        <br />
        knowledge.
      </>
    ),
    href: '#resource-center',
  },
];

export const RelatedResourcesSection: React.FC = () => {
  return (
    <section className="w-full bg-white border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto space-y-8">
        
        {/* Header Block */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Related resources
            </span>
          </div>

          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            Keep going — deeper structure lives just past<br className="hidden sm:inline" />
            this FAQ.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, idx) => (
            <a
              key={idx}
              href={resource.href || '#'}
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-start"
            >
              <h3 className="text-sky-950 text-sm font-bold leading-5 group-hover:text-sky-600 transition-colors">
                {resource.title}
              </h3>
              <p className="mt-2.5 text-gray-600 text-xs font-normal leading-5">
                {resource.description}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
