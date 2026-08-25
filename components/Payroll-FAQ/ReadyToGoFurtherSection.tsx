import React from 'react';

interface ActionOption {
  title: string;
  description: React.ReactNode;
  buttonText: string;
  buttonHref?: string;
  isPrimary?: boolean;
}

const actionOptions: ActionOption[] = [
  {
    title: 'Explore the product',
    description: (
      <>
        See how Zoiko Payroll prepares, calculates,
        <br />
        validates, reviews, approves and completes payroll.
      </>
    ),
    buttonText: 'Explore Zoiko Payroll',
    buttonHref: '#explore-product',
    isPrimary: false,
  },
  {
    title: 'Review pricing',
    description: (
      <>
        See current published plans and pricing
        <br />
        information.
      </>
    ),
    buttonText: 'View Pricing',
    buttonHref: '#pricing',
    isPrimary: false,
  },
  {
    title: 'Discuss your requirements',
    description: (
      <>
        For multi-jurisdiction, enterprise, implementation or
        <br />
        procurement requirements, speak with the team.
      </>
    ),
    buttonText: 'Book a demo',
    buttonHref: '#book-demo',
    isPrimary: true,
  },
];

export const ReadyToGoFurtherSection: React.FC = () => {
  return (
    <section className="w-full bg-indigo-50/60 border-t border-slate-200 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        
        {/* Header Block */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Ready to go further?
            </span>
          </div>

          <h2 className="text-sky-950 text-3xl font-extrabold leading-tight">
            Three distinct next steps — pick the one that<br className="hidden sm:inline" />
            fits.
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {actionOptions.map((option, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col items-center justify-between text-center min-h-[220px]"
            >
              <div className="space-y-2.5">
                <h3 className="text-sky-950 text-base font-bold leading-6">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-xs font-normal leading-5">
                  {option.description}
                </p>
              </div>

              <div className="mt-6 w-full flex justify-center">
                {option.isPrimary ? (
                  <a
                    href={option.buttonHref || '#'}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-sky-400 to-sky-900 text-white text-sm font-bold rounded-lg shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] hover:opacity-95 transition-opacity"
                  >
                    {option.buttonText}
                  </a>
                ) : (
                  <a
                    href={option.buttonHref || '#'}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-slate-200 text-sky-950 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {option.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
