'use client';

import React, { useState } from 'react';

const badges = [
  'Reviewed answers',
  'Clear scope',
  'Direct authority handoffs',
];

export default function FAQHeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search action
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5">
          {/* Category Tag */}
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-3.5 bg-sky-600 rounded-xs inline-block" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">
              Frequently asked questions
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-sky-950 text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight">
            Direct answers about Zoiko<br />
            Payroll — with the source<br />
            that owns the details.
          </h1>

          {/* Body Text */}
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Search or browse reviewed answers about the product, buying, 
            implementation, global payroll, security and support. Every answer names 
            its scope and links to the authority that owns current detail.
          </p>

          {/* Feature Badges */}
          <div className="w-full pt-4 border-t border-slate-200">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-sky-600 rounded-full inline-block" />
                  <span className="text-sky-950 text-xs font-semibold">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Search Card & Sample Result */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg outline outline-1 outline-slate-200 space-y-6">
            
            {/* Search Bar Input Form */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., pricing, jurisdictions, migration, security"
                  className="w-full h-11 px-4 text-sm text-sky-950 placeholder-neutral-500 bg-white rounded-lg outline outline-1 outline-slate-200 focus:outline-2 focus:outline-sky-600 transition-all"
                />
              </div>
              <button
                type="submit"
                className="h-11 px-6 bg-gradient-to-r from-sky-400 to-sky-900 rounded-lg shadow-sm text-white text-sm font-bold hover:opacity-90 transition-opacity shrink-0"
              >
                Search
              </button>
            </form>

            {/* Sample Result Preview Card */}
            <div className="bg-indigo-50/60 rounded-xl p-5 border border-slate-200 space-y-3">
              <span className="text-gray-400 text-xs font-extrabold uppercase tracking-wide block">
                Sample result
              </span>
              
              <h3 className="text-sky-950 text-sm font-bold">
                What is Zoiko Payroll?
              </h3>

              <p className="text-gray-600 text-xs leading-relaxed">
                Zoiko Payroll is a governed payroll platform for preparing, calculating, 
                validating, reviewing, approving and completing payroll operations. 
                Specific workflows and available controls should be confirmed in current 
                product information and documentation.
              </p>

              {/* Meta details & Link */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>Scope: General</span>
                  <span>Reviewed Aug 2026</span>
                </div>
                <a
                  href="#product-overview"
                  className="text-sky-600 font-bold hover:underline inline-flex items-center"
                >
                  View Product Overview &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
