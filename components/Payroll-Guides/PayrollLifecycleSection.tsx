import React from 'react';

export default function PayrollLifecycleSection() {
  const steps = [
    {
      number: '1',
      title: 'Prepare',
      description: 'Data readiness, change collection, ownership, cutoffs, source checks.',
      footer: 'No current field/config details unless linked to Docs.',
    },
    {
      number: '2',
      title: 'Calculate',
      description: 'Calculation process concepts, input completeness, controlled reruns.',
      footer: 'No invented calculation rules or statutory formulas.',
    },
    {
      number: '3',
      title: 'Validate',
      description: 'Variance review, exception triage, source/evidence questions.',
      footer: 'No opaque compliance or risk score.',
    },
    {
      number: '4',
      title: 'Review',
      description: 'Material-change review, peer/manager review, evidence expectations.',
      footer: 'Role design only; permissions live elsewhere.',
    },
    {
      number: '5',
      title: 'Approve',
      description: 'Decision rights, segregation of duties, sign-off evidence.',
      footer: 'No assumption every org needs the same model.',
    },
    {
      number: '6',
      title: 'Complete',
      description: 'Completion criteria, records, handoffs, payment/reporting questions.',
      footer: 'No promise of statutory or banking outcome.',
    },
    {
      number: '7',
      title: 'Post-payroll',
      description: 'Reconciliation, reporting, corrections, evidence retention, retrospective.',
      footer: 'Exports/retention rules stay specialist authority.',
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
              Browse by payroll lifecycle
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#0A2E4B]">
            Map learning to the stage you&apos;re operating in.
          </h2>
        </div>

        {/* Lifecycle Steps Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-4 border border-[#E1E8F0] shadow-sm flex flex-col justify-between hover:border-[#0A8FD0] transition-colors cursor-pointer group min-h-[224px]"
            >
              <div>
                {/* Step Number Circle */}
                <div className="w-6 h-6 bg-[#0A2E4B] text-white rounded-full flex items-center justify-center text-xs font-extrabold mb-4 group-hover:bg-[#0A8FD0] transition-colors">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-[#0A2E4B] mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#5B646B] font-normal leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step Footer Note */}
              <div className="pt-2.5 border-t border-[#E1E8F0]">
                <p className="text-[11px] text-[#8592A0] font-normal leading-tight">
                  {step.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
