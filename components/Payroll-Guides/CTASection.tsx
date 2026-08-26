import React from 'react';

const footerLinks = [
  'Resource Center',
  'Help Center',
  'System Status',
  'Release Notes',
  'Jurisdiction Guides',
  'Global Payroll',
  'Implementation',
  'Security and Trust',
  'Reporting',
];

export default function CTASection() {
  return (
    <section className="w-full bg-sky-950 text-white py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Category Tag */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-1.5 h-3.5 bg-blue-300 rounded-xs inline-block" />
          <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">
            Need the next authoritative step?
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="max-w-3xl text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-4">
          Use the guide to learn. Use the source that<br />
          owns the decision.
        </h2>

        {/* Subtitle / Description */}
        <p className="max-w-3xl text-slate-300 text-base leading-relaxed mb-8">
          Explore practical payroll guidance, then move to Product Documentation for current product behavior, 
          Jurisdiction Guides for market-specific education, Help Center for support, System Status for service 
          health, or Implementation when a controlled rollout needs deeper planning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#payroll-guides"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-900 rounded-lg shadow-sm text-center text-white text-sm font-bold transition-opacity hover:opacity-90"
          >
            Explore payroll guides
          </a>
          <a
            href="#product-docs"
            className="w-full sm:w-auto px-6 py-3 border border-white/30 rounded-lg text-center text-white text-sm font-bold hover:bg-white/10 transition-colors"
          >
            Visit Product Documentation
          </a>
        </div>

        {/* Quick Links Navigation */}
        <nav className="w-full border-t border-white/10 pt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-300 text-xs font-normal hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </section>
  );
}
