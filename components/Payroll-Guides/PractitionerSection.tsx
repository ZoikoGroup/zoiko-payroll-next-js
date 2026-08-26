import React from 'react';

export default function PractitionerSection() {
  const stats = [
    { value: '8', label: 'Topic collections' },
    { value: '6', label: 'Roles routed' },
    { value: '0', label: 'Hidden compliance scores' },
  ];

  return (
    <section className="w-full bg-white border-t border-slate-200 py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-[1136px] mx-auto">
        {/* Main Banner Card */}
        <div className="relative w-full rounded-[20px] bg-gradient-to-br from-sky-600 via-sky-800 to-sky-950 p-8 md:p-12 text-white shadow-xl overflow-hidden">
          {/* Subtle Background Accent Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/90 via-sky-800/80 to-sky-400/30 pointer-events-none" />

          {/* Background Image */}
          <img
            src="/images/Payroll-Guides/Practitioner.png"
            alt="Practitioner"
            className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          />

          <div className="relative z-10 max-w-[600px]">
            {/* Tag / Category Line */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-3.5 bg-blue-300 rounded-xs inline-block" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Built by practitioners, reviewed on a cadence
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-white mb-4">
              Every guide carries a reviewed date —<br />
              not a one-time publish and forget.
            </h2>

            {/* Supporting Description */}
            <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed mb-10">
              Payroll Guides is maintained as a living library. Content owners are named, review cycles are scheduled, and corrections are versioned rather than silently edited.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl lg:text-4xl font-extrabold text-blue-300 leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-300 font-normal leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
