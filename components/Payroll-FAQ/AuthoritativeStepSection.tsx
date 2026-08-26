import React from 'react';

interface QuickLink {
  label: string;
  href: string;
}

const footerLinks: QuickLink[] = [
  { label: 'Resource Center', href: '#resource-center' },
  { label: 'Help Center', href: '#help-center' },
  { label: 'System Status', href: '#system-status' },
  { label: 'Release Notes', href: '#release-notes' },
  { label: 'Jurisdiction Guides', href: '#jurisdiction-guides' },
  { label: 'Global Payroll', href: '#global-payroll' },
  { label: 'Implementation', href: '#implementation' },
  { label: 'Security and Trust', href: '#security-trust' },
  { label: 'Reporting', href: '#reporting' },
];

export const AuthoritativeStepSection: React.FC = () => {
  return (
    <section className="w-full bg-sky-950 py-16 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif] text-white">
      <div className="max-w-[1200px] mx-auto text-center space-y-10">
        
        {/* Subtitle & Header */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-blue-300 rounded-xs inline-block" />
            <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">
              Need the next authoritative step?
            </span>
          </div>

          <h2 className="text-white text-3xl font-extrabold leading-tight">
            Use the answer to learn. Use the source that owns<br className="hidden sm:inline" />
            the decision.
          </h2>

          <p className="text-slate-300 text-base font-normal leading-relaxed max-w-2xl pt-2">
            Search or browse FAQ answers, then move to Product Documentation for current<br className="hidden sm:inline" />
            product behavior, Jurisdiction Guides for market-specific education, Help Center for<br className="hidden sm:inline" />
            support, System Status for service health, or Implementation when a controlled<br className="hidden sm:inline" />
            rollout needs deeper planning.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#search-faq"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-900 text-white text-sm font-bold rounded-lg shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] hover:opacity-95 transition-opacity min-w-[160px]"
          >
            Search the FAQ
          </a>
          <a
            href="#product-documentation"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/30 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            Visit Product Documentation
          </a>
        </div>

        {/* Bottom Quick Links Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-blue-300 hover:text-white transition-colors font-normal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
